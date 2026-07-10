"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import { CartItem, Match, TicketCategory } from "@/types";

interface CartContextType {
  items: CartItem[];
  addItem: (match: Match, category: TicketCategory, quantity: number) => void;
  removeItem: (matchId: string, categoryId: string) => void;
  updateQuantity: (matchId: string, categoryId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = useCallback((match: Match, category: TicketCategory, quantity: number) => {
    setItems((prev) => {
      const existing = prev.find(
        (item) => item.match.id === match.id && item.category.id === category.id
      );
      if (existing) {
        return prev.map((item) =>
          item.match.id === match.id && item.category.id === category.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { match, category, quantity }];
    });
  }, []);

  const removeItem = useCallback((matchId: string, categoryId: string) => {
    setItems((prev) =>
      prev.filter((item) => !(item.match.id === matchId && item.category.id === categoryId))
    );
  }, []);

  const updateQuantity = useCallback((matchId: string, categoryId: string, quantity: number) => {
    if (quantity <= 0) {
      setItems((prev) =>
        prev.filter((item) => !(item.match.id === matchId && item.category.id === categoryId))
      );
      return;
    }
    setItems((prev) =>
      prev.map((item) =>
        item.match.id === matchId && item.category.id === categoryId
          ? { ...item, quantity }
          : item
      )
    );
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.category.price * item.quantity, 0);

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
