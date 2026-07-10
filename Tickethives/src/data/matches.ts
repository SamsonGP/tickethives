import { Match } from "@/types";

export const matches: Match[] = [
  // ==================== QUARTER-FINALS ====================
  {
    id: "match-98",
    matchNumber: 98,
    stage: "Quarter-Final",
    teamA: { name: "Spain", code: "ESP", flag: "🇪🇸" },
    teamB: { name: "Belgium", code: "BEL", flag: "🇧🇪" },
    venue: { name: "SoFi Stadium", city: "Inglewood, CA", country: "USA", capacity: 70240 },
    date: "2026-07-10",
    time: "12:00",
    image: "/images/stadium-2.jpg",
    featured: true,
    ticketCategories: [
      { id: "cat-98a", name: "Premium Hospitality", description: "VIP lounge with premium catering and the best seats in the house", price: 4500, available: 28, section: "VIP Level" },
      { id: "cat-98b", name: "Category 1", description: "Premium seats with excellent pitch views", price: 1950, available: 150, section: "Lower Tier" },
      { id: "cat-98c", name: "Category 2", description: "Great views of the action from mid-tier seating", price: 1172, available: 290, section: "Mid Tier" },
      { id: "cat-98d", name: "Category 3", description: "Affordable seats with electric atmosphere", price: 580, available: 580, section: "Upper Tier" },
    ],
  },
  {
    id: "match-99",
    matchNumber: 99,
    stage: "Quarter-Final",
    teamA: { name: "Norway", code: "NOR", flag: "🇳🇴" },
    teamB: { name: "England", code: "ENG", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
    venue: { name: "Hard Rock Stadium", city: "Miami, FL", country: "USA", capacity: 65326 },
    date: "2026-07-11",
    time: "17:00",
    image: "/images/stadium-3.jpg",
    featured: true,
    sellingFast: true,
    ticketCategories: [
      { id: "cat-99a", name: "Premium Hospitality", description: "VIP lounge with premium catering and the best seats in the house", price: 5200, available: 12, section: "VIP Level" },
      { id: "cat-99b", name: "Category 1", description: "Premium seats with excellent pitch views", price: 2350, available: 85, section: "Lower Tier" },
      { id: "cat-99c", name: "Category 2", description: "Great views of the action from mid-tier seating", price: 1847, available: 140, section: "Mid Tier" },
      { id: "cat-99d", name: "Category 3", description: "Affordable seats with electric atmosphere", price: 780, available: 210, section: "Upper Tier" },
    ],
  },
  {
    id: "match-100",
    matchNumber: 100,
    stage: "Quarter-Final",
    teamA: { name: "Argentina", code: "ARG", flag: "🇦🇷" },
    teamB: { name: "Switzerland", code: "SUI", flag: "🇨🇭" },
    venue: { name: "GEHA Field at Arrowhead Stadium", city: "Kansas City, MO", country: "USA", capacity: 76416 },
    date: "2026-07-11",
    time: "20:00",
    image: "/images/stadium-4.jpg",
    featured: true,
    ticketCategories: [
      { id: "cat-100a", name: "Premium Hospitality", description: "VIP lounge with premium catering and the best seats in the house", price: 4800, available: 22, section: "VIP Level" },
      { id: "cat-100b", name: "Category 1", description: "Premium seats with excellent pitch views", price: 2100, available: 130, section: "Lower Tier" },
      { id: "cat-100c", name: "Category 2", description: "Great views of the action from mid-tier seating", price: 1539, available: 270, section: "Mid Tier" },
      { id: "cat-100d", name: "Category 3", description: "Affordable seats with electric atmosphere", price: 680, available: 520, section: "Upper Tier" },
    ],
  },
  // ==================== SEMI-FINALS ====================
  {
    id: "match-101",
    matchNumber: 101,
    stage: "Semi-Final",
    teamA: { name: "Winner QF1", code: "QF1", flag: "🏳️" },
    teamB: { name: "Winner QF2", code: "QF2", flag: "🏳️" },
    venue: { name: "AT&T Stadium", city: "Arlington, TX", country: "USA", capacity: 80000 },
    date: "2026-07-14",
    time: "14:00",
    image: "/images/stadium-5.jpg",
    featured: true,
    ticketCategories: [
      { id: "cat-101a", name: "Premium Hospitality", description: "VIP lounge with premium catering and the best seats in the house", price: 6500, available: 40, section: "VIP Level" },
      { id: "cat-101b", name: "Category 1", description: "Premium seats with excellent pitch views", price: 2800, available: 160, section: "Lower Tier" },
      { id: "cat-101c", name: "Category 2", description: "Great views of the action from mid-tier seating", price: 1650, available: 350, section: "Mid Tier" },
      { id: "cat-101d", name: "Category 3", description: "Affordable seats with electric atmosphere", price: 850, available: 700, section: "Upper Tier" },
    ],
  },
  {
    id: "match-102",
    matchNumber: 102,
    stage: "Semi-Final",
    teamA: { name: "Winner QF3", code: "QF3", flag: "🏳️" },
    teamB: { name: "Winner QF4", code: "QF4", flag: "🏳️" },
    venue: { name: "Mercedes-Benz Stadium", city: "Atlanta, GA", country: "USA", capacity: 71000 },
    date: "2026-07-15",
    time: "15:00",
    image: "/images/stadium-6.jpg",
    featured: true,
    ticketCategories: [
      { id: "cat-102a", name: "Premium Hospitality", description: "VIP lounge with premium catering and the best seats in the house", price: 6500, available: 38, section: "VIP Level" },
      { id: "cat-102b", name: "Category 1", description: "Premium seats with excellent pitch views", price: 2800, available: 155, section: "Lower Tier" },
      { id: "cat-102c", name: "Category 2", description: "Great views of the action from mid-tier seating", price: 1650, available: 340, section: "Mid Tier" },
      { id: "cat-102d", name: "Category 3", description: "Affordable seats with electric atmosphere", price: 850, available: 680, section: "Upper Tier" },
    ],
  },
  // ==================== THIRD PLACE PLAY-OFF ====================
  {
    id: "match-103",
    matchNumber: 103,
    stage: "Third Place Play-Off",
    teamA: { name: "Loser SF1", code: "LSF1", flag: "🏳️" },
    teamB: { name: "Loser SF2", code: "LSF2", flag: "🏳️" },
    venue: { name: "Hard Rock Stadium", city: "Miami, FL", country: "USA", capacity: 65326 },
    date: "2026-07-18",
    time: "22:00",
    image: "/images/stadium-7.jpg",
    featured: false,
    ticketCategories: [
      { id: "cat-103a", name: "Premium Hospitality", description: "VIP lounge with premium catering and the best seats in the house", price: 3200, available: 55, section: "VIP Level" },
      { id: "cat-103b", name: "Category 1", description: "Premium seats with excellent pitch views", price: 1400, available: 200, section: "Lower Tier" },
      { id: "cat-103c", name: "Category 2", description: "Great views of the action from mid-tier seating", price: 800, available: 400, section: "Mid Tier" },
      { id: "cat-103d", name: "Category 3", description: "Affordable seats with electric atmosphere", price: 420, available: 850, section: "Upper Tier" },
    ],
  },
  // ==================== FINAL ====================
  {
    id: "match-104",
    matchNumber: 104,
    stage: "Final",
    teamA: { name: "Winner SF1", code: "SF1", flag: "🏳️" },
    teamB: { name: "Winner SF2", code: "SF2", flag: "🏳️" },
    venue: { name: "MetLife Stadium", city: "East Rutherford, NJ", country: "USA", capacity: 82500 },
    date: "2026-07-19",
    time: "20:00",
    image: "/images/stadium-8.jpg",
    featured: true,
    ticketCategories: [
      { id: "cat-104a", name: "Premium Hospitality", description: "VIP lounge with premium catering and the best seats in the house", price: 8500, available: 25, section: "VIP Level" },
      { id: "cat-104b", name: "Category 1", description: "Premium seats with excellent pitch views", price: 4200, available: 100, section: "Lower Tier" },
      { id: "cat-104c", name: "Category 2", description: "Great views of the action from mid-tier seating", price: 2500, available: 220, section: "Mid Tier" },
      { id: "cat-104d", name: "Category 3", description: "Affordable seats with electric atmosphere", price: 1200, available: 450, section: "Upper Tier" },
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

export const stages = ["All", "Quarter-Final", "Semi-Final", "Third Place Play-Off", "Final"];
