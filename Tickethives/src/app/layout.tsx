import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";
import TawkTo from "@/components/TawkTo";

export const metadata: Metadata = {
  title: "Tickethives - FIFA World Cup 2026 Tickets",
  description: "Buy official FIFA World Cup 2026 tickets. Group stage, knockout rounds, and final match tickets available now.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 antialiased">
        <CartProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <TawkTo />
        </CartProvider>
      </body>
    </html>
  );
}
