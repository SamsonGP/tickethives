import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Shield, Clock, CreditCard, Trophy, Globe, Users, Star, ChevronRight, Zap } from "lucide-react";
import MatchCard from "@/components/MatchCard";
import { matches, getFeaturedMatches } from "@/data/matches";

export default function HomePage() {
  const featured = getFeaturedMatches();
  const upcoming = matches;

  return (
    <div>
      {/* =================== HERO =================== */}
      <section className="relative overflow-hidden min-h-[100svh] lg:min-h-screen flex items-center">
        {/* Desktop background */}
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-500/15 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
          <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-primary-400/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px"
          }} />
        </div>

        {/* Mobile background image with overlay */}
        <div className="lg:hidden absolute inset-0 z-0">
          <Image
            src="/images/NJNY.png"
            alt="Packed World Cup stadium full of fans"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-950/85 via-primary-900/80 to-primary-950/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Text content */}
            <div className="order-2 lg:order-1 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-sm font-medium mb-6 sm:mb-8 animate-slide-up">
                <Trophy className="w-4 h-4 text-yellow-400" />
                FIFA World Cup 2026
              </div>

              {/* Main headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.05] mb-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
                Feel the
                <span className="block bg-gradient-to-r from-blue-300 via-sky-300 to-cyan-300 bg-clip-text text-transparent">
                  Beautiful Game
                </span>
                Live.
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-primary-100 max-w-2xl mx-auto lg:mx-0 mb-8 sm:mb-10 leading-relaxed animate-slide-up" style={{ animationDelay: "0.2s" }}>
                The tournament is reaching its climax. 8 teams remain. Secure your seat for the 
                Quarter-Finals, Semi-Finals, and the Grand Final before tickets sell out.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10 sm:mb-12 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: "0.3s" }}>
                <Link
                  href="/matches"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-primary-700 rounded-xl font-bold text-base sm:text-lg hover:bg-primary-50 transition-all shadow-2xl shadow-white/10 hover:shadow-white/20 group"
                >
                  Get Tickets Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/matches?stage=Final"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-xl font-bold text-base sm:text-lg hover:bg-white/20 transition-all"
                >
                  <Zap className="w-5 h-5 text-yellow-400" />
                  Jump to Final
                </Link>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-8 lg:gap-12 animate-slide-up" style={{ animationDelay: "0.4s" }}>
                {[
                  { value: "8", label: "Matches Left" },
                  { value: "8", label: "Teams Remain" },
                  { value: "4", label: "Rounds to Go" },
                  { value: "1", label: "Champion" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="text-2xl sm:text-3xl lg:text-4xl font-black text-white">{stat.value}</p>
                    <p className="text-xs sm:text-sm text-primary-200 font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop hero image */}
            <div className="hidden lg:flex order-1 lg:order-2 relative items-center justify-center lg:justify-end animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <div className="relative w-full max-w-[560px]">
                <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-black/30 border-2 border-white/10 transform rotate-1 hover:rotate-0 transition-transform duration-500 aspect-[16/10]">
                  <Image
                    src="/images/NJNY.png"
                    alt="Packed World Cup stadium full of fans"
                    fill
                    className="object-cover"
                    priority
                    sizes="560px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-950/50 via-primary-900/10 to-transparent" />
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary-500/20 rounded-full blur-3xl -z-10" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden sm:flex">
          <div className="w-6 h-10 border-2 border-primary-400/40 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-primary-400 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* =================== TRUST BAR =================== */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-12 text-sm">
            {[
              { icon: Shield, text: "100% Ticket Guarantee" },
              { icon: CreditCard, text: "Secure Payment" },
              { icon: Clock, text: "Instant Delivery" },
              { icon: Star, text: "Trusted by 50,000+ Fans" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-gray-600">
                <Icon className="w-4 h-4 text-primary-600" />
                <span className="font-medium">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================== FEATURED MATCHES =================== */}
      <section className="py-16 lg:py-24 bg-gray-50 stadium-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-2">Don&apos;t Miss Out</p>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">Upcoming Matches</h2>
              <p className="text-gray-500 mt-2 max-w-xl">The biggest matches are still to come. Get your tickets before they sell out.</p>
            </div>
            <Link
              href="/matches"
              className="hidden sm:flex items-center gap-1 text-primary-600 font-semibold text-sm hover:text-primary-700 transition-colors"
            >
              View All
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {featured.slice(0, 4).map((match) => (
              <MatchCard key={match.id} match={match} variant="featured" />
            ))}
          </div>
        </div>
      </section>

      {/* =================== HOW IT WORKS =================== */}
      <section id="how-it-works" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-2">Simple & Secure</p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">How It Works</h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">Getting your World Cup tickets is easy. Follow these simple steps and you&apos;ll be cheering from the stands in no time.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                icon: Globe,
                title: "Browse Matches",
                description: "Explore all 104 World Cup matches across every stage — from group games to the grand final.",
                color: "from-blue-500 to-blue-600",
              },
              {
                step: "02",
                icon: Star,
                title: "Choose Your Seats",
                description: "Select your preferred ticket category and number of seats. Compare prices across different sections.",
                color: "from-primary-500 to-primary-600",
              },
              {
                step: "03",
                icon: CreditCard,
                title: "Secure Checkout",
                description: "Complete your purchase with our secure payment system. Tickets are delivered instantly to your email.",
                color: "from-accent-500 to-accent-600",
              },
            ].map(({ step, icon: Icon, title, description, color }) => (
              <div key={step} className="relative group">
                <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-primary-200 transition-all hover:shadow-xl">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-5xl font-black text-primary-50 absolute top-6 right-8">{step}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
                  <p className="text-gray-500 leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================== UPCOMING MATCHES GRID =================== */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-2">Get Your Seats</p>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">All Remaining Matches</h2>
              <p className="text-gray-500 mt-2 max-w-xl">Browse every remaining match and find the perfect game for you.</p>
            </div>
            <Link
              href="/matches"
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-primary-600 text-white rounded-xl font-semibold text-sm hover:bg-primary-700 transition-all shadow-lg shadow-primary-500/25"
            >
              See All Matches
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcoming.map((match) => (
              <MatchCard key={match.id} match={match} />
            ))}
          </div>

          <div className="text-center mt-10 sm:hidden">
            <Link
              href="/matches"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 transition-all"
            >
              View All Matches
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* =================== TOURNAMENT INFO =================== */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-primary-300 uppercase tracking-wider mb-2">The Tournament</p>
            <h2 className="text-3xl lg:text-4xl font-extrabold">FIFA World Cup 2026</h2>
            <p className="text-primary-200 mt-3 max-w-2xl mx-auto">
              The first World Cup with 48 teams, hosted across three countries — the biggest edition in FIFA history.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Trophy,
                title: "Record Prize Pool",
                description: "The largest FIFA World Cup prize fund ever, with over $1 billion in total prize money.",
              },
              {
                icon: Users,
                title: "5.5M+ Fans Expected",
                description: "The tournament is expected to attract record attendance across all 104 matches.",
              },
              {
                icon: Globe,
                title: "3 Host Nations",
                description: "USA, Canada, and Mexico co-host this historic tournament across 16 stunning venues.",
              },
            ].map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 transition-all"
              >
                <Icon className="w-8 h-8 text-primary-300 mb-4" />
                <h3 className="text-lg font-bold mb-2">{title}</h3>
                <p className="text-primary-300 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================== TESTIMONIALS =================== */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-2">Fan Reviews</p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">What Our Customers Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "James K.",
                location: "London, UK",
                flag: "🇬🇧",
                text: "Incredible experience! Got my tickets seamlessly and the match was absolutely electric. Best World Cup ever!",
                rating: 5,
              },
              {
                name: "Maria S.",
                location: "Buenos Aires, Argentina",
                flag: "🇦🇷",
                text: "The website made it so easy to find the right tickets. I'm taking my whole family to see Argentina play!",
                rating: 5,
              },
              {
                name: "David L.",
                location: "New York, USA",
                flag: "🇺🇸",
                text: "Premium hospitality tickets were worth every penny. The VIP experience was unmatched. Highly recommend.",
                rating: 5,
              },
              {
                name: "Yuki T.",
                location: "Tokyo, Japan",
                flag: "🇯🇵",
                text: "Amazing service from start to finish. The seat selection was clear and checkout was super smooth. Can't wait for the final!",
                rating: 5,
              },
              {
                name: "Antoine D.",
                location: "Paris, France",
                flag: "🇫🇷",
                text: "Tickethives helped me secure tickets for the quarter-finals last minute. Fast confirmation and great customer support.",
                rating: 5,
              },
              {
                name: "Luca R.",
                location: "Rome, Italy",
                flag: "🇮🇹",
                text: "Beautiful website and very professional. The mobile experience was perfect for booking tickets on the go.",
                rating: 5,
              },
            ].map((review) => (
              <div
                key={review.name}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-primary-200 hover:shadow-lg transition-all"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">&quot;{review.text}&quot;</p>
                <div className="flex items-center gap-3">
                  <span className="text-2xl" role="img" aria-label={`Flag of ${review.location}`}>
                    {review.flag}
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900">{review.name}</p>
                    <p className="text-sm text-gray-500">{review.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
