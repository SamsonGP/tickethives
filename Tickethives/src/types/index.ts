export interface Match {
  id: string;
  matchNumber: number;
  stage: "Group Stage" | "Round of 16" | "Quarter-Final" | "Semi-Final" | "Third Place Play-Off" | "Final";
  group?: string;
  teamA: Team;
  teamB: Team;
  venue: Venue;
  date: string;
  time: string;
  image: string;
  featured: boolean;
  sellingFast?: boolean;
  ticketCategories: TicketCategory[];
}

export interface Team {
  name: string;
  code: string;
  flag: string;
}

export interface Venue {
  name: string;
  city: string;
  country: string;
  capacity: number;
}

export interface TicketCategory {
  id: string;
  name: string;
  description: string;
  price: number;
  available: number;
  section: string;
}

export interface CartItem {
  match: Match;
  category: TicketCategory;
  quantity: number;
  price: number;
  itemKey: string;
  seatSection?: string;
  seatRow?: string;
  seatTickets?: string;
  seatBadge?: string;
  seatRating?: number;
  seatRatingLabel?: string;
}

export interface SeatSelection {
  matchId: string;
  categoryId: string;
  quantity: number;
}
