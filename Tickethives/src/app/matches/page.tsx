"use client";

import { useState, useMemo } from "react";
import { Search, SlidersHorizontal, Calendar, MapPin } from "lucide-react";
import MatchCard from "@/components/MatchCard";
import { matches, stages } from "@/data/matches";

export default function MatchesPage() {
  const [selectedStage, setSelectedStage] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"date" | "price-asc" | "price-desc">("date");

  const filteredMatches = useMemo(() => {
    let result = selectedStage === "All" ? matches : matches.filter((m) => m.stage === selectedStage);

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (m) =>
          m.teamA.name.toLowerCase().includes(q) ||
          m.teamB.name.toLowerCase().includes(q) ||
          m.venue.city.toLowerCase().includes(q) ||
          m.venue.name.toLowerCase().includes(q) ||
          (m.group && m.group.toLowerCase().includes(q))
      );
    }

    if (sortBy === "price-asc") {
      result = [...result].sort((a, b) => Math.min(...a.ticketCategories.map((c) => c.price)) - Math.min(...b.ticketCategories.map((c) => c.price)));
    } else if (sortBy === "price-desc") {
      result = [...result].sort((a, b) => Math.min(...b.ticketCategories.map((c) => c.price)) - Math.min(...a.ticketCategories.map((c) => c.price)));
    } else {
      result = [...result].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    }

    return result;
  }, [selectedStage, searchQuery, sortBy]);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-primary-900 via-primary-800 to-primary-900 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl lg:text-4xl font-extrabold text-white mb-2">
            World Cup 2026 — Knockout Stage
          </h1>
          <p className="text-primary-200 text-lg">
            {matches.length} remaining matches — Quarter-Finals to the Grand Final
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="sticky top-16 lg:top-20 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-4">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search teams, cities, venues..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
              />
            </div>

            {/* Stage filter */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 lg:pb-0">
              <SlidersHorizontal className="w-4 h-4 text-gray-400 shrink-0" />
              {stages.map((stage) => (
                <button
                  key={stage}
                  onClick={() => setSelectedStage(stage)}
                  className={`px-4 py-2 text-xs font-semibold rounded-lg whitespace-nowrap transition-all ${
                    selectedStage === stage
                      ? "bg-primary-600 text-white shadow-md shadow-primary-500/25"
                      : "bg-gray-100 text-gray-600 hover:bg-primary-50 hover:text-primary-700"
                  }`}
                >
                  {stage}
                </button>
              ))}
            </div>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as "date" | "price-asc" | "price-desc")}
              className="px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="date">Sort by Date</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-gray-500">
            Showing <span className="font-semibold text-gray-900">{filteredMatches.length}</span> matches
          </p>
        </div>

        {filteredMatches.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-primary-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No matches found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMatches.map((match) => (
              <MatchCard key={match.id} match={match} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
