"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft, Calendar, MapPin, Clock, Users, Minus, Plus,
  ShoppingCart, Shield, Check, Star, Ticket,
} from "lucide-react";
import { getMatchById } from "@/data/matches";
import { useCart } from "@/context/CartContext";
import { TicketCategory } from "@/types";

export default function MatchDetailPage() {
  const params = useParams();
  const match = getMatchById(params.id as string);
  const { addItem } = useCart();

  const [selectedCategory, setSelectedCategory] = useState<TicketCategory | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

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

  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString("en-US", {
      weekday: "long", month: "long", day: "numeric", year: "numeric",
    });

  const handleAddToCart = () => {
    if (!selectedCategory) return;
    addItem(match, selectedCategory, quantity);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 3000);
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Ticket categories */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Select Your Tickets</h3>

            <div className="space-y-4">
              {match.ticketCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setQuantity(1);
                  }}
                  className={`w-full text-left p-6 rounded-2xl border-2 transition-all ${
                    selectedCategory?.id === cat.id
                      ? "border-primary-500 bg-primary-50 shadow-lg shadow-primary-500/10"
                      : "border-gray-200 bg-white hover:border-primary-200 hover:shadow-md"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="text-lg font-bold text-gray-900">{cat.name}</h4>
                        <span className={`px-2.5 py-0.5 text-xs font-semibold rounded-full ${
                          cat.section === "VIP Level"
                            ? "bg-yellow-100 text-yellow-700"
                            : cat.section === "Lower Tier"
                            ? "bg-blue-100 text-blue-700"
                            : cat.section === "Mid Tier"
                            ? "bg-green-100 text-green-700"
                            : "bg-gray-100 text-gray-600"
                        }`}>
                          {cat.section}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 mb-3">{cat.description}</p>
                      <div className="flex items-center gap-4 text-xs text-gray-400">
                        <span className="flex items-center gap-1">
                          <Ticket className="w-3.5 h-3.5" />
                          {cat.available.toLocaleString()} tickets available
                        </span>
                      </div>
                    </div>
                    <div className="text-right ml-4">
                      <p className="text-2xl font-bold text-primary-700">${cat.price.toLocaleString()}</p>
                      <p className="text-xs text-gray-400">per ticket</p>
                    </div>
                  </div>
                  {selectedCategory?.id === cat.id && (
                    <div className="mt-4 pt-4 border-t border-primary-200 flex items-center gap-2 text-sm text-primary-700 font-medium">
                      <Check className="w-4 h-4" />
                      Selected
                    </div>
                  )}
                </button>
              ))}
            </div>

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

          {/* Order summary sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">
              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-900">Order Summary</h3>
                  <span className="px-2.5 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">
                    10% OFF
                  </span>
                </div>

                {selectedCategory ? (
                  <>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">Match</span>
                        <span className="font-medium text-gray-900 text-right">{match.teamA.name} vs {match.teamB.name}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">Category</span>
                        <span className="font-medium text-gray-900">{selectedCategory.name}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">Section</span>
                        <span className="font-medium text-gray-900">{selectedCategory.section}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">Date</span>
                        <span className="font-medium text-gray-900">{formatDate(match.date)}</span>
                      </div>
                    </div>

                    {/* Quantity selector */}
                    <div className="mb-6">
                      <p className="text-sm font-medium text-gray-700 mb-2">Number of Tickets</p>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-12 text-center text-lg font-bold">{quantity}</span>
                        <button
                          onClick={() => setQuantity(Math.min(10, quantity + 1))}
                          className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                        <span className="text-xs text-gray-400 ml-2">Max 10 per order</span>
                      </div>
                    </div>

                    {/* Totals */}
                    <div className="border-t border-gray-100 pt-4 space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">
                          ${selectedCategory.price.toLocaleString()} x {quantity} ticket{quantity > 1 ? "s" : ""}
                        </span>
                        <span className="font-medium">${(selectedCategory.price * quantity).toLocaleString()}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">Discount (10%)</span>
                        <span className="font-medium text-green-600">-${(selectedCategory.price * quantity * 0.10).toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                      </div>
                      <div className="flex items-center justify-between text-lg font-bold pt-3 border-t border-gray-100">
                        <span>Total</span>
                        <span className="text-primary-700">
                          ${(selectedCategory.price * quantity * 0.90).toLocaleString(undefined, { maximumFractionDigits: 0 })}
                        </span>
                      </div>
                    </div>

                    {/* Add to cart button */}
                    <button
                      onClick={handleAddToCart}
                      disabled={addedToCart}
                      className={`w-full mt-6 py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all ${
                        addedToCart
                          ? "bg-green-500 text-white"
                          : "bg-gradient-to-r from-primary-600 to-primary-700 text-white hover:from-primary-700 hover:to-primary-800 shadow-lg shadow-primary-500/25"
                      }`}
                    >
                      {addedToCart ? (
                        <>
                          <Check className="w-4 h-4" />
                          Added to Cart!
                        </>
                      ) : (
                        <>
                          <ShoppingCart className="w-4 h-4" />
                          Add to Cart
                        </>
                      )}
                    </button>

                    <Link
                      href="/checkout"
                      className="block w-full mt-3 py-3 text-center text-sm font-semibold text-primary-600 hover:text-primary-700 border border-primary-200 rounded-xl hover:bg-primary-50 transition-all"
                    >
                      Proceed to Checkout
                    </Link>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center mx-auto mb-3">
                      <Ticket className="w-7 h-7 text-primary-400" />
                    </div>
                    <p className="text-sm text-gray-500">Select a ticket category to get started</p>
                  </div>
                )}
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
