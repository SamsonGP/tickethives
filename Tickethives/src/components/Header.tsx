"use client";

import Link from "next/link";
import { useState } from "react";
import { ShoppingCart, Menu, X, Ticket, Search } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-primary-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center shadow-lg shadow-primary-500/30 group-hover:shadow-primary-500/50 transition-shadow">
              <Ticket className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold text-primary-900 leading-tight tracking-tight">
                Tickethives
              </span>
              <span className="text-[10px] font-medium text-primary-500 leading-none tracking-widest uppercase">
                World Cup 2026
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {[
              { label: "Home", href: "/" },
              { label: "Matches", href: "/matches" },
              { label: "How It Works", href: "/#how-it-works" },
              { label: "Venues", href: "/matches?stage=All" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary-700 hover:bg-primary-50 rounded-lg transition-all"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <Link
              href="/matches"
              className="hidden sm:flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 hover:text-primary-700 bg-gray-50 hover:bg-primary-50 rounded-xl transition-all border border-gray-200 hover:border-primary-200"
            >
              <Search className="w-4 h-4" />
              <span>Search Matches</span>
            </Link>

            <Link
              href="/checkout"
              className="relative flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl font-semibold text-sm hover:from-primary-700 hover:to-primary-800 transition-all shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40"
            >
              <ShoppingCart className="w-4 h-4" />
              <span className="hidden sm:inline">Cart</span>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center animate-bounce">
                  {totalItems}
                </span>
              )}
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-gray-600 hover:text-primary-700 hover:bg-primary-50 rounded-lg transition-all"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="lg:hidden pb-4 animate-fade-in">
            <div className="flex flex-col gap-1">
              {[
                { label: "Home", href: "/" },
                { label: "Matches", href: "/matches" },
                { label: "How It Works", href: "/#how-it-works" },
                { label: "Venues", href: "/matches?stage=All" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-gray-700 hover:text-primary-700 hover:bg-primary-50 rounded-lg transition-all"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
