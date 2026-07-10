"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Trash2, Minus, Plus, ShoppingBag, ArrowLeft,
  Lock, Check, Shield, MessageCircle,
} from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function CheckoutPage() {
  const { items, removeItem, updateQuantity, clearCart, totalItems, totalPrice } = useCart();
  const [step, setStep] = useState<"cart" | "details">("cart");

  const discount = totalPrice * 0.10;
  const grandTotal = totalPrice - discount;

  const openLiveChat = () => {
    const Tawk_API = (window as unknown as Record<string, unknown>).Tawk_API as Record<string, unknown> | undefined;
    if (Tawk_API && typeof Tawk_API.openChat === "function") {
      (Tawk_API.openChat as () => void)();
    } else if (Tawk_API && typeof Tawk_API.maximize === "function") {
      (Tawk_API.maximize as () => void)();
    }
  };

  // Empty cart
  if (items.length === 0 && step === "cart") {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="text-center">
          <div className="w-20 h-20 bg-primary-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <ShoppingBag className="w-10 h-10 text-primary-400" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Your Cart is Empty</h1>
          <p className="text-gray-500 mb-8">Browse our matches and add tickets to get started.</p>
          <Link
            href="/matches"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 transition-all"
          >
            Browse Matches
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-900 via-primary-800 to-primary-900 py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl lg:text-3xl font-extrabold text-white">
            {step === "cart" ? "Your Cart" : "Checkout"}
          </h1>
          <p className="text-primary-200 mt-1">{totalItems} ticket{totalItems > 1 ? "s" : ""} in your cart</p>
        </div>
      </div>

      {/* Progress */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4 text-sm">
            <button
              onClick={() => setStep("cart")}
              className={`flex items-center gap-2 font-medium ${
                step === "cart" ? "text-primary-700" : "text-gray-400"
              }`}
            >
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                step === "cart" ? "bg-primary-600 text-white" : "bg-gray-200 text-gray-500"
              }`}>1</span>
              Cart
            </button>
            <div className="flex-1 h-px bg-gray-200" />
            <button
              onClick={() => items.length > 0 && setStep("details")}
              className={`flex items-center gap-2 font-medium ${
                step === "details" ? "text-primary-700" : "text-gray-400"
              }`}
            >
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                step === "details" ? "bg-primary-600 text-white" : "bg-gray-200 text-gray-500"
              }`}>2</span>
              Complete Order
            </button>
          </div>
        </div>
      </div>

      {/* Discount banner */}
      <div className="bg-gradient-to-r from-green-500 to-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-center gap-2 text-white text-sm font-semibold">
            <span className="px-2 py-0.5 bg-white/20 rounded text-xs">LIMITED TIME</span>
            <span>10% off every ticket — applied automatically at checkout</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2">
            {step === "cart" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <Link
                    href="/matches"
                    className="inline-flex items-center gap-2 text-sm text-primary-600 font-medium hover:text-primary-700"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Continue Shopping
                  </Link>
                  <button
                    onClick={clearCart}
                    className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-red-500 font-medium px-3 py-1.5 rounded-lg hover:bg-red-50 transition-all"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    Clear Cart
                  </button>
                </div>

                {items.map((item) => (
                  <div
                    key={`${item.match.id}-${item.category.id}`}
                    className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-md transition-all"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                      {/* Match info */}
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-2 py-0.5 bg-primary-100 text-primary-700 text-[10px] font-semibold rounded-full uppercase">
                            {item.match.stage}
                          </span>
                        </div>
                        <h3 className="font-bold text-gray-900 text-lg">
                          {item.match.teamA.flag} {item.match.teamA.name} vs {item.match.teamB.name} {item.match.teamB.flag}
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">
                          {new Date(item.match.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })} &bull; {item.match.venue.name}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                            {item.category.name}
                          </span>
                          <span className="text-xs text-gray-400">{item.category.section}</span>
                        </div>
                      </div>

                      {/* Quantity + Price */}
                      <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.match.id, item.category.id, item.quantity - 1)}
                            className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center font-bold text-sm">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.match.id, item.category.id, Math.min(10, item.quantity + 1))}
                            className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <div className="text-right">
                          <p className="font-bold text-gray-900 text-lg">
                            ${(item.category.price * item.quantity).toLocaleString()}
                          </p>
                          <p className="text-xs text-gray-400">${item.category.price.toLocaleString()} each</p>
                        </div>

                        <button
                          onClick={() => removeItem(item.match.id, item.category.id)}
                          className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

                <button
                  onClick={() => setStep("details")}
                  className="w-full mt-6 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl font-bold text-lg hover:from-primary-700 hover:to-primary-800 transition-all shadow-lg shadow-primary-500/25"
                >
                  Proceed to Checkout
                </button>

                <button
                  onClick={clearCart}
                  className="w-full py-3 text-sm text-gray-400 hover:text-red-500 font-medium rounded-xl hover:bg-red-50 transition-all flex items-center justify-center gap-2"
                >
                  <Trash2 className="w-4 h-4" />
                  Clear Cart
                </button>
              </div>
            )}

            {step === "details" && (
              <div className="space-y-6">
                <button
                  type="button"
                  onClick={() => setStep("cart")}
                  className="inline-flex items-center gap-2 text-sm text-primary-600 font-medium hover:text-primary-700 mb-4"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Cart
                </button>

                {/* Live chat completion */}
                <div className="bg-white rounded-2xl border border-gray-200 p-8 text-center">
                  <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <MessageCircle className="w-8 h-8 text-primary-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">Complete Your Order</h2>
                  <p className="text-gray-500 leading-relaxed mb-8 max-w-md mx-auto">
                    To complete your purchase and receive your FIFA World Cup 2026 tickets, 
                    please chat with one of our agents who will guide you through the final steps.
                  </p>

                  <button
                    type="button"
                    onClick={openLiveChat}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl font-bold text-lg hover:from-primary-700 hover:to-primary-800 transition-all shadow-lg shadow-primary-500/25"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Start a Live Chat to Complete Your Order
                  </button>

                  <div className="flex items-center justify-center gap-6 mt-8 text-sm text-gray-400">
                    <div className="flex items-center gap-1.5">
                      <Lock className="w-3.5 h-3.5" />
                      <span>Secure</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Shield className="w-3.5 h-3.5" />
                      <span>Guaranteed</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5" />
                      <span>Verified</span>
                    </div>
                  </div>
                </div>

                {/* What to expect */}
                <div className="bg-primary-50 rounded-2xl border border-primary-100 p-6">
                  <h3 className="font-semibold text-primary-900 mb-4">What to Expect</h3>
                  <ul className="space-y-3">
                    {[
                      "Our agent will confirm your ticket selection and seat details",
                      "You'll receive secure payment instructions",
                      "E-tickets are delivered instantly after confirmation",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-primary-700">
                        <Check className="w-4 h-4 text-primary-600 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Order summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">
              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Order Summary</h3>

                <div className="space-y-3 mb-6">
                  {items.map((item) => (
                    <div key={`${item.match.id}-${item.category.id}`} className="flex items-start justify-between text-sm">
                      <div className="flex-1 min-w-0 pr-2">
                        <p className="font-medium text-gray-900 truncate">
                          {item.match.teamA.code} vs {item.match.teamB.code}
                        </p>
                        <p className="text-xs text-gray-400">
                          {item.category.name} x{item.quantity}
                        </p>
                      </div>
                      <p className="font-semibold text-gray-900 whitespace-nowrap">
                        ${(item.category.price * item.quantity).toLocaleString()}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-100 pt-4 space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Subtotal</span>
                    <span className="font-medium">${totalPrice.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Discount (10%)</span>
                    <span className="font-medium text-green-600">-${discount.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                  </div>
                  <div className="flex items-center justify-between text-lg font-bold pt-3 border-t border-gray-100">
                    <span>Total</span>
                    <span className="text-primary-700">${grandTotal.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-gray-200 p-5">
                <div className="space-y-3">
                  {[
                    { icon: Shield, text: "100% Ticket Guarantee" },
                    { icon: Lock, text: "SSL encrypted checkout" },
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
