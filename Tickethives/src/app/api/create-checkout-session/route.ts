import { NextResponse } from "next/server";
import { finalMatchSeats, thirdPlacePlayoffSeats } from "@/data/seatListings";
import { getMatchById } from "@/data/matches";

const seatPricesByMatch: Record<string, number[]> = {
  "match-103": thirdPlacePlayoffSeats.map((listing) => listing.price),
  "match-104": finalMatchSeats.map((listing) => listing.price),
};

export async function POST(request: Request) {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    return NextResponse.json({ error: "Stripe is not configured." }, { status: 500 });
  }

  try {
    const body = await request.json() as {
      items?: Array<{
        matchId?: string;
        unitPrice?: number;
        quantity?: number;
        section?: string;
        row?: string;
      }>;
    };

    if (!Array.isArray(body.items) || body.items.length === 0 || body.items.length > 100) {
      return NextResponse.json({ error: "Invalid checkout details." }, { status: 400 });
    }

    const lineItems = body.items.map((item) => ({
      match: item.matchId ? getMatchById(item.matchId) : undefined,
      unitPrice: Number(item.unitPrice),
      quantity: Number(item.quantity),
      section: item.section?.trim(),
      row: item.row?.trim(),
    }));

    if (lineItems.some((item) => {
      const allowedPrices = item.match
        ? [...seatPricesByMatch[item.match.id], ...item.match.ticketCategories.map((category) => category.price)]
        : [];

      return !item.match || !Number.isInteger(item.quantity) || item.quantity < 1 || item.quantity > 10 || !allowedPrices.includes(item.unitPrice);
    })) {
      return NextResponse.json({ error: "Invalid ticket price." }, { status: 400 });
    }

    const origin = new URL(request.url).origin;
    const params = new URLSearchParams();
    params.set("mode", "payment");
    params.set("ui_mode", "embedded_page");
    params.set("return_url", `${origin}/checkout?payment=return&session_id={CHECKOUT_SESSION_ID}`);
    lineItems.forEach((item, index) => {
      if (!item.match) return;

      const seatDetails = [item.section, item.row && `Row ${item.row}`].filter(Boolean).join(" · ");
      const productName = `${item.match.teamA.name} vs ${item.match.teamB.name} tickets${seatDetails ? ` — ${seatDetails}` : ""}`;

      params.set(`line_items[${index}][price_data][currency]`, "usd");
      params.set(`line_items[${index}][price_data][product_data][name]`, productName);
      params.set(`line_items[${index}][price_data][unit_amount]`, String(Math.round(item.unitPrice * 0.9) * 100));
      params.set(`line_items[${index}][quantity]`, String(item.quantity));
    });

    const response = await fetch("https://api.stripe.com/v1/checkout/sessions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${secretKey}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params,
    });
    const session = await response.json() as { client_secret?: string; error?: { message?: string } };

    if (!response.ok || !session.client_secret) {
      return NextResponse.json({ error: session.error?.message ?? "Unable to create Stripe checkout." }, { status: 502 });
    }

    return NextResponse.json({ clientSecret: session.client_secret });
  } catch {
    return NextResponse.json({ error: "Unable to create Stripe checkout." }, { status: 500 });
  }
}
