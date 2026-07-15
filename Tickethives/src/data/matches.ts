import { Match } from "@/types";

export const matches: Match[] = [
  // ==================== THIRD PLACE PLAY-OFF ====================
  {
    id: "match-103",
    matchNumber: 103,
    stage: "Third Place Play-Off",
    teamA: { name: "France", code: "FRA", flag: "🇫🇷" },
    teamB: { name: "England", code: "ENG", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
    venue: { name: "Hard Rock Stadium", city: "Miami, FL", country: "USA", capacity: 65326 },
    date: "2026-07-18",
    time: "22:00",
    image: "/stadium/3rdplace.png",
    featured: true,
    ticketCategories: [
      { id: "cat-103a", name: "Premium Hospitality", description: "VIP lounge with premium catering and the best seats in the house", price: 2600, available: 55, section: "VIP Level" },
      { id: "cat-103b", name: "Category 1", description: "Premium seats with excellent pitch views", price: 1100, available: 200, section: "Lower Tier" },
      { id: "cat-103c", name: "Category 2", description: "Great views of the action from mid-tier seating", price: 600, available: 400, section: "Mid Tier" },
      { id: "cat-103d", name: "Category 3", description: "Affordable seats with electric atmosphere", price: 320, available: 850, section: "Upper Tier" },
    ],
  },
  // ==================== FINAL ====================
  {
    id: "match-104",
    matchNumber: 104,
    stage: "Final",
    teamA: { name: "Spain", code: "ESP", flag: "🇪🇸" },
    teamB: { name: "Argentina", code: "ARG", flag: "🇦🇷" },
    venue: { name: "MetLife Stadium", city: "East Rutherford, NJ", country: "USA", capacity: 82500 },
    date: "2026-07-19",
    time: "20:00",
    image: "/stadium/final.png",
    featured: true,
    ticketCategories: [
      { id: "cat-104a", name: "Premium Hospitality", description: "VIP lounge with premium catering and the best seats in the house", price: 8500, available: 25, section: "VIP Level" },
      { id: "cat-104b", name: "Category 1", description: "Premium seats with excellent pitch views", price: 3600, available: 100, section: "Lower Tier" },
      { id: "cat-104c", name: "Category 2", description: "Great views of the action from mid-tier seating", price: 1900, available: 220, section: "Mid Tier" },
      { id: "cat-104d", name: "Category 3", description: "Affordable seats with electric atmosphere", price: 1000, available: 450, section: "Upper Tier" },
    ],
  },
];

export function getMatchById(id: string): Match | undefined {
  return matches.find((m) => m.id === id);
}

export function getFeaturedMatches(): Match[] {
  return matches.filter((m) => m.featured);
}

export function getMatchesByStage(stage: string): Match[] {
  if (stage === "All") return matches;
  return matches.filter((m) => m.stage === stage);
}

export const stripePaymentLinks: Record<string, string> = {
  "match-103": "https://buy.stripe.com/5kQaEX3Ca3246USc1r08g06",
  "match-104": "https://buy.stripe.com/eVq14n5KifOQdjg1mN08g07",
};

export const stages = ["All", "Third Place Play-Off", "Final"];
