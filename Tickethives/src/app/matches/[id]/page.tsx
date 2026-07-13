"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowLeft, Calendar, MapPin, Clock, Users,
  Shield, Check, Star, Ticket,
} from "lucide-react";
import { getMatchById } from "@/data/matches";
import { useCart } from "@/context/CartContext";
import { englandVsArgentinaSeats, finalMatchSeats, franceVsSpainSeats, seatCategoryLabels, thirdPlacePlayoffSeats } from "@/data/seatListings";

type SeatListingSelection = {
  price: number;
  section?: string;
  row?: string;
  tickets?: string;
  badge?: string;
  rating?: number;
  ratingLabel?: string;
};

export default function MatchDetailPage() {
  const params = useParams();
  const router = useRouter();
  const match = getMatchById(params.id as string);
  const { addItem } = useCart();
  const [pendingSeat, setPendingSeat] = useState<{ catId: string; listing?: SeatListingSelection } | null>(null);

  if (!match) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Match Not Found</h2>
          <p className="text-gray-500 mb-6">The match you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/matches" className="text-primary-600 font-semibold hover:underline">
            Back to Matches
          </Link>
        </div>
      </div>
    );
  }

  const lowestPrice = Math.min(...match.ticketCategories.map((c) => c.price));
  const totalAvailable = match.ticketCategories.reduce((s, c) => s + c.available, 0);
  const seatListings = (match.id === "match-101"
    ? franceVsSpainSeats
    : match.id === "match-102"
      ? englandVsArgentinaSeats
      : match.id === "match-103"
        ? thirdPlacePlayoffSeats
        : match.id === "match-104"
          ? finalMatchSeats
          : []).slice(0, 5);
  const seatCategoryMap = match.id === "match-101"
    ? { upper: "cat-101d", cat3: "cat-101d", cat2: "cat-101c", cat1: "cat-101b" }
    : match.id === "match-102"
      ? { upper: "cat-102d", cat3: "cat-102d", cat2: "cat-102c", cat1: "cat-102b" }
      : match.id === "match-103"
        ? { upper: "cat-103d", cat3: "cat-103d", cat2: "cat-103c", cat1: "cat-103b" }
        : { upper: "cat-104d", cat3: "cat-104d", cat2: "cat-104c", cat1: "cat-104b" };

  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString("en-US", {
      weekday: "long", month: "long", day: "numeric", year: "numeric",
    });

  const handleSeatClick = (catId: string, listing?: SeatListingSelection) => {
    setPendingSeat({ catId, listing });
  };

  const confirmSeatAction = (action: "cart" | "checkout") => {
    if (!pendingSeat) return;

    const cat = match.ticketCategories.find((c) => c.id === pendingSeat.catId);
    if (cat) {
      addItem(match, cat, 1, pendingSeat.listing?.price ?? cat.price, pendingSeat.listing);
      setPendingSeat(null);

      if (action === "checkout") {
        router.push("/checkout");
      }
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-primary-600 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/matches" className="hover:text-primary-600 transition-colors">Matches</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{match.teamA.name} vs {match.teamB.name}</span>
          </div>
        </div>
      </div>

      {/* Match Header */}
      <div className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-400 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-400 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
          <Link href="/matches" className="inline-flex items-center gap-2 text-primary-300 hover:text-white text-sm mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to all matches
          </Link>

          <div className="flex items-center gap-3 mb-8">
            <span className="px-3 py-1 bg-primary-500/30 text-primary-200 text-xs font-semibold rounded-full border border-primary-500/30">
              {match.stage} {match.group && `- ${match.group}`}
            </span>
            <span className="text-primary-400 text-xs font-medium">Match #{match.matchNumber}</span>
          </div>

          {match.image && (
            <div className="mb-8 overflow-hidden rounded-2xl border border-white/15 bg-white/10 shadow-lg">
              <Image
                src={match.image}
                alt={`${match.teamA.name} vs ${match.teamB.name} stadium preview`}
                width={1200}
                height={600}
                className="h-28 w-full object-cover sm:h-40 lg:h-48"
              />
            </div>
          )}

          {/* Teams display */}
          <div className="flex items-center justify-center gap-6 lg:gap-16 mb-8">
            <div className="text-center">
              <div className="text-5xl lg:text-7xl mb-3">{match.teamA.flag}</div>
              <h2 className="text-xl lg:text-2xl font-bold">{match.teamA.name}</h2>
              <p className="text-primary-400 text-sm">{match.teamA.code}</p>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20">
                <span className="text-2xl font-black text-white">VS</span>
              </div>
            </div>

            <div className="text-center">
              <div className="text-5xl lg:text-7xl mb-3">{match.teamB.flag}</div>
              <h2 className="text-xl lg:text-2xl font-bold">{match.teamB.name}</h2>
              <p className="text-primary-400 text-sm">{match.teamB.code}</p>
            </div>
          </div>

          {/* Match info */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-primary-200 text-sm">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {formatDate(match.date)}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {match.time} local time
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              {match.venue.name}, {match.venue.city}
            </span>
            <span className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              Capacity: {match.venue.capacity.toLocaleString()}
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {pendingSeat && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-3 py-4 sm:px-4 sm:py-6">
            <div className="w-full max-w-sm rounded-2xl bg-white p-4 shadow-2xl sm:max-w-md sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-primary-600">Seat selection</p>
                  <h3 className="mt-1 text-xl font-bold text-gray-900">Add this listing?</h3>
                </div>
                <button
                  type="button"
                  onClick={() => setPendingSeat(null)}
                  className="text-sm font-medium text-gray-400 hover:text-gray-600"
                >
                  Close
                </button>
              </div>

              <div className="mt-4 rounded-xl border border-gray-200 bg-gray-50 p-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="font-semibold text-gray-900">
                      {pendingSeat.listing?.section ?? "Selected seat"}
                    </p>
                    <p className="text-sm text-gray-500">
                      {pendingSeat.listing?.row ? `Row ${pendingSeat.listing.row}` : "Premium match listing"}
                      {pendingSeat.listing?.tickets ? ` • ${pendingSeat.listing.tickets} ticket${pendingSeat.listing.tickets !== "1" ? "s" : ""}` : ""}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-primary-700">
                      ${((pendingSeat.listing?.price ?? 0)).toLocaleString()} ea
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <button
                  type="button"
                  onClick={() => confirmSeatAction("cart")}
                  className="w-full rounded-xl bg-primary-600 px-4 py-3 font-semibold text-white transition hover:bg-primary-700"
                >
                  Add to Cart
                </button>
                <button
                  type="button"
                  onClick={() => confirmSeatAction("checkout")}
                  className="w-full rounded-xl border border-primary-200 bg-primary-50 px-4 py-3 font-semibold text-primary-700 transition hover:bg-primary-100"
                >
                  Proceed to Checkout
                </button>
                <button
                  type="button"
                  onClick={() => setPendingSeat(null)}
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 font-semibold text-gray-600 transition hover:bg-gray-50"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Seat listings */}
          <div className="lg:col-span-2">

            {/* Individual Seat Listings */}
            {seatListings.length > 0 && (() => {
              const categoryOrder = ["upper", "cat3", "cat2", "cat1"] as const;
              return (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Available Seat Listings</h3>
                      <p className="text-sm text-gray-500 mt-1">{seatListings.length} listings available — prices reflect our discounted rate</p>
                    </div>
                  </div>

                  <div className="space-y-8">
                    {categoryOrder.map((catKey) => {
                      const listings = seatListings.filter((l) => l.category === catKey);
                      if (listings.length === 0) return null;
                      return (
                        <div key={catKey}>
                          <div className="flex items-center gap-3 mb-4">
                            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider">{seatCategoryLabels[catKey]}</h4>
                            <span className="text-xs text-gray-400">{listings.length} listings</span>
                            <div className="flex-1 h-px bg-gray-200" />
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {listings.map((listing, idx) => (
                              <button
                                key={`${listing.section}-${listing.row}-${idx}`}
                                onClick={() => handleSeatClick(seatCategoryMap[catKey], listing)}
                                className="bg-white rounded-xl border border-gray-200 p-4 hover:border-primary-300 hover:shadow-md transition-all text-left group"
                              >
                                <div className="flex items-start justify-between gap-3">
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 mb-1.5">
                                      <span className="font-bold text-gray-900 text-sm">{listing.section}</span>
                                      {listing.badge && (
                                        <span className={`px-1.5 py-0.5 text-[10px] font-semibold rounded-full whitespace-nowrap ${
                                          listing.badge.includes("Lowest") ? "bg-green-100 text-green-700" :
                                          listing.badge.includes("Front") ? "bg-blue-100 text-blue-700" :
                                          listing.badge.includes("Last") ? "bg-orange-100 text-orange-700" :
                                          listing.badge.includes("Fast") ? "bg-red-100 text-red-700" :
                                          "bg-gray-100 text-gray-600"
                                        }`}>
                                          {listing.badge}
                                        </span>
                                      )}
                                    </div>
                                    <p className="text-xs text-gray-500">Row {listing.row} | {listing.tickets} ticket{listing.tickets !== "1" ? "s" : ""}</p>
                                    {listing.rating && (
                                      <div className="flex items-center gap-1.5 mt-2">
                                        <span className={`px-1.5 py-0.5 text-[10px] font-bold rounded ${
                                          listing.rating >= 9.5 ? "bg-emerald-600 text-white" :
                                          listing.rating >= 8.0 ? "bg-green-500 text-white" :
                                          listing.rating >= 7.0 ? "bg-yellow-500 text-white" :
                                          "bg-gray-400 text-white"
                                        }`}>
                                          {listing.rating}
                                        </span>
                                        <span className="text-[11px] text-gray-500">{listing.ratingLabel}</span>
                                      </div>
                                    )}
                                  </div>
                                  <div className="text-right shrink-0">
                                    <p className="text-lg font-bold text-primary-700">${listing.price.toLocaleString()} ea</p>
                                  </div>
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })()}

            {/* Venue info */}
            <div className="mt-10 bg-white rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Venue Information</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider font-medium mb-1">Stadium</p>
                  <p className="font-semibold text-gray-900">{match.venue.name}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider font-medium mb-1">City</p>
                  <p className="font-semibold text-gray-900">{match.venue.city}, {match.venue.country}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider font-medium mb-1">Capacity</p>
                  <p className="font-semibold text-gray-900">{match.venue.capacity.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider font-medium mb-1">Kick-Off</p>
                  <p className="font-semibold text-gray-900">{match.time} local time</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">
              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg text-center">
                <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Ticket className="w-7 h-7 text-primary-400" />
                </div>
                <p className="text-sm text-gray-700 font-medium mb-4">Click any seat listing to add to cart and proceed to checkout.</p>
                <Link
                  href="/checkout"
                  className="block w-full py-3 text-center text-sm font-semibold text-primary-600 hover:text-primary-700 border border-primary-200 rounded-xl hover:bg-primary-50 transition-all"
                >
                  Go to Checkout
                </Link>
              </div>

              {/* Trust badges */}
              <div className="bg-white rounded-2xl border border-gray-200 p-5">
                <div className="space-y-3">
                  {[
                    { icon: Shield, text: "100% Ticket Guarantee" },
                    { icon: Star, text: "Trusted by 50,000+ fans" },
                    { icon: Check, text: "Instant e-ticket delivery" },
                  ].map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-center gap-3 text-sm text-gray-600">
                      <Icon className="w-4 h-4 text-primary-500" />
                      <span>{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
