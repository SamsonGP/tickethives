"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import { CartItem, Match, TicketCategory } from "@/types";

interface CartContextType {
  items: CartItem[];
  addItem: (
    match: Match,
    category: TicketCategory,
    quantity: number,
    price?: number,
    seatInfo?: {
      section?: string;
      row?: string;
      tickets?: string;
      badge?: string;
      rating?: number;
      ratingLabel?: string;
    }
  ) => void;
  removeItem: (itemKey: string) => void;
  updateQuantity: (itemKey: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = useCallback(
    (
      match: Match,
      category: TicketCategory,
      quantity: number,
      price: number = category.price,
      seatInfo?: {
        section?: string;
        row?: string;
        tickets?: string;
        badge?: string;
        rating?: number;
        ratingLabel?: string;
      }
    ) => {
      const itemKey = [
        match.id,
        category.id,
        seatInfo?.section ?? "",
        seatInfo?.row ?? "",
        seatInfo?.tickets ?? "",
      ].join("-");

      setItems((prev) => {
        const existing = prev.find((item) => item.itemKey === itemKey);
        if (existing) {
          return prev.map((item) =>
            item.itemKey === itemKey
              ? { ...item, quantity: item.quantity + quantity, price }
              : item
          );
        }
        return [
          ...prev,
          {
            match,
            category,
            quantity,
            price,
            itemKey,
            seatSection: seatInfo?.section,
            seatRow: seatInfo?.row,
            seatTickets: seatInfo?.tickets,
            seatBadge: seatInfo?.badge,
            seatRating: seatInfo?.rating,
            seatRatingLabel: seatInfo?.ratingLabel,
          },
        ];
      });
    },
    []
  );

  const removeItem = useCallback((itemKey: string) => {
    setItems((prev) => prev.filter((item) => item.itemKey !== itemKey));
  }, []);

  const updateQuantity = useCallback((itemKey: string, quantity: number) => {
    if (quantity <= 0) {
      setItems((prev) => prev.filter((item) => item.itemKey !== itemKey));
      return;
    }
    setItems((prev) => prev.map((item) => (item.itemKey === itemKey ? { ...item, quantity } : item)));
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, updateQuantity, clearCart, totalItems, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
}
