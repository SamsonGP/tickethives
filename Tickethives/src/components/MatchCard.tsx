import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";
import { Match } from "@/types";

interface MatchCardProps {
  match: Match;
  variant?: "default" | "featured" | "compact";
}

export default function MatchCard({ match, variant = "default" }: MatchCardProps) {
  const lowestPrice = Math.min(...match.ticketCategories.map((c) => c.price));
  const displayPrice =
    match.id === "match-102"
      ? 1500
      : match.id === "match-103"
        ? 700
        : match.id === "match-104"
          ? 4200
          : lowestPrice;
  const totalAvailable = match.ticketCategories.reduce((s, c) => s + c.available, 0);

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  if (variant === "featured") {
    return (
      <Link href={`/matches/${match.id}`} className="group block">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 p-6 lg:p-8 card-hover border border-primary-700/50">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-400 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent-400 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          </div>

          <div className="relative z-10">
            {/* Stage badge */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-primary-500/30 text-primary-200 text-xs font-semibold rounded-full border border-primary-500/30">
                  {match.stage} {match.group && `- ${match.group}`}
                </span>
                {match.sellingFast && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-red-500/90 text-white text-[10px] font-bold rounded-full uppercase tracking-wide animate-pulse">
                    Selling Fast
                  </span>
                )}
              </div>
              <span className="text-primary-300 text-xs font-medium">
                Match #{match.matchNumber}
              </span>
            </div>

            {match.image && (
              <div className="mb-5 overflow-hidden rounded-xl border border-primary-700/30 bg-primary-950/40">
                <Image
                  src={match.image}
                  alt={`${match.teamA.name} vs ${match.teamB.name} stadium preview`}
                  width={800}
                  height={450}
                  className="h-20 w-full object-cover sm:h-24"
                />
              </div>
            )}

            {/* Teams */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex-1 text-center">
                <div className="text-4xl lg:text-5xl mb-2">{match.teamA.flag}</div>
                <p className="text-white font-bold text-sm lg:text-base">{match.teamA.name}</p>
                <p className="text-primary-400 text-xs">{match.teamA.code}</p>
              </div>
              <div className="px-4 py-2 bg-white/10 rounded-xl mx-4">
                <span className="text-white font-bold text-lg">VS</span>
              </div>
              <div className="flex-1 text-center">
                <div className="text-4xl lg:text-5xl mb-2">{match.teamB.flag}</div>
                <p className="text-white font-bold text-sm lg:text-base">{match.teamB.name}</p>
                <p className="text-primary-400 text-xs">{match.teamB.code}</p>
              </div>
            </div>

            {/* Info row */}
            <div className="flex flex-wrap items-center gap-3 text-primary-200 text-xs mb-6">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {formatDate(match.date)}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {match.time}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                {match.venue.name}, {match.venue.city}
              </span>
            </div>

            {/* Price + CTA */}
            <div className="flex items-center justify-between pt-4 border-t border-primary-700/50">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <p className="text-primary-400 text-xs">Tickets from</p>
                  <span className="px-2 py-0.5 bg-green-400/20 text-green-300 text-[10px] font-bold rounded border border-green-400/30">
                    10% OFF
                  </span>
                </div>
                <p className="text-2xl font-bold text-white">${displayPrice.toLocaleString()}</p>
              </div>
              <div className="flex items-center gap-2 px-5 py-2.5 bg-white text-primary-700 rounded-xl font-semibold text-sm group-hover:bg-primary-100 transition-colors">
                Get Tickets
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  if (variant === "compact") {
    return (
      <Link href={`/matches/${match.id}`} className="group block">
        <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:border-primary-200 hover:shadow-lg transition-all">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <span className="text-2xl">{match.teamA.flag}</span>
            <span className="font-semibold text-sm text-gray-900 truncate">{match.teamA.name}</span>
            <span className="text-xs text-gray-400 font-medium">vs</span>
            <span className="text-2xl">{match.teamB.flag}</span>
            <span className="font-semibold text-sm text-gray-900 truncate">{match.teamB.name}</span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-xs text-gray-500">
            <span>{formatDate(match.date)}</span>
            <span className="text-primary-600 font-semibold">${displayPrice.toLocaleString()}</span>
          </div>
          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all" />
        </div>
      </Link>
    );
  }

  // Default card
  return (
    <Link href={`/matches/${match.id}`} className="group block">
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden card-hover hover:border-primary-200">
        {/* Header bar */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 px-5 py-3 flex items-center justify-between">
          <span className="text-white text-xs font-semibold">
            {match.stage} {match.group && `• ${match.group}`}
          </span>
          <span className="text-primary-200 text-xs">Match #{match.matchNumber}</span>
        </div>

        {/* Selling fast badge */}
        {match.sellingFast && (
          <div className="mx-5 mt-4 mb-0">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-50 text-red-700 text-xs font-semibold rounded-full border border-red-200">
              <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
              Selling Fast — Limited Tickets
            </span>
          </div>
        )}

        {/* Content */}
        <div className="p-5">
          {match.image && (
            <div className="mb-4 overflow-hidden rounded-xl border border-gray-100 bg-gray-50">
              <Image
                src={match.image}
                alt={`${match.teamA.name} vs ${match.teamB.name} stadium preview`}
                width={800}
                height={450}
                className="h-20 w-full object-cover sm:h-24"
              />
            </div>
          )}

          {/* Teams */}
          <div className="flex items-center justify-between mb-5">
            <div className="flex-1 text-center">
              <div className="text-3xl mb-1.5">{match.teamA.flag}</div>
              <p className="font-bold text-sm text-gray-900">{match.teamA.name}</p>
            </div>
            <div className="px-3 py-1.5 bg-primary-50 rounded-lg mx-3">
              <span className="text-primary-700 font-bold text-sm">VS</span>
            </div>
            <div className="flex-1 text-center">
              <div className="text-3xl mb-1.5">{match.teamB.flag}</div>
              <p className="font-bold text-sm text-gray-900">{match.teamB.name}</p>
            </div>
          </div>

          {/* Info */}
          <div className="space-y-2 mb-5">
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <Calendar className="w-3.5 h-3.5 text-primary-500" />
              <span>{formatDate(match.date)} at {match.time}</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <MapPin className="w-3.5 h-3.5 text-primary-500" />
              <span>{match.venue.name}, {match.venue.city}</span>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <p className="text-[10px] text-gray-400 uppercase tracking-wider font-medium">From</p>
                <span className="px-1.5 py-0.5 bg-green-100 text-green-700 text-[9px] font-bold rounded">
                  10% OFF
                </span>
              </div>
              <p className="text-xl font-bold text-primary-700">${displayPrice.toLocaleString()}</p>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-primary-600 font-semibold group-hover:gap-2.5 transition-all">
              View Tickets
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
