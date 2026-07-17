export const TICKET_DISCOUNT_PERCENT = 15;
export const TICKET_DISCOUNT_RATE = TICKET_DISCOUNT_PERCENT / 100;

export const applyTicketDiscount = (price: number) =>
  Math.round(price * (1 - TICKET_DISCOUNT_RATE));
