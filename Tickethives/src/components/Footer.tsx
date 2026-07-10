import Link from "next/link";
import { Ticket, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary-950 text-white">
      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-primary-700 via-primary-600 to-accent-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold">Don&apos;t miss the biggest event in football</h3>
              <p className="text-primary-100 mt-2 text-lg">Secure your World Cup 2026 tickets today. Limited availability.</p>
            </div>
            <Link
              href="/matches"
              className="px-8 py-4 bg-white text-primary-700 rounded-xl font-bold text-lg hover:bg-primary-50 transition-all shadow-xl hover:shadow-2xl whitespace-nowrap"
            >
              Browse All Matches
            </Link>
          </div>
        </div>
      </div>

      {/* Footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                <Ticket className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-extrabold tracking-tight">Tickethives</span>
            </div>
            <p className="text-primary-300 text-sm leading-relaxed mb-6">
              Your trusted source for FIFA World Cup 2026 tickets. Experience the beautiful game live at the world&apos;s greatest sporting event.
            </p>
            <div className="flex gap-4">
              {["X", "FB", "IG", "YT"].map((s) => (
                <div
                  key={s}
                  className="w-9 h-9 rounded-lg bg-primary-800/50 hover:bg-primary-700 flex items-center justify-center text-xs font-bold text-primary-300 hover:text-white cursor-pointer transition-all"
                >
                  {s}
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-primary-400 mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["All Matches", "Group Stage", "Knockout Rounds", "Final", "Venues"].map((item) => (
                <li key={item}>
                  <Link href="/matches" className="text-sm text-primary-300 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-primary-400 mb-4">Support</h4>
            <ul className="space-y-3">
              {[
                { label: "FAQ", href: "/faq" },
                { label: "Ticket Guarantee", href: "/ticket-guarantee" },
                { label: "Refund Policy", href: "/refund-policy" },
                { label: "Terms of Service", href: "/terms-of-service" },
                { label: "Privacy Policy", href: "/privacy-policy" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-primary-300 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-primary-400 mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary-400" />
                <span className="text-sm text-primary-300">support@tickethives.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary-400" />
                <span className="text-sm text-primary-300">+1 (800) 555-0199</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary-400 mt-0.5" />
                <span className="text-sm text-primary-300">123 Stadium Way, New York, NY 10001</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-400">&copy; 2026 Tickethives. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="text-xs text-primary-500">Accepted:</span>
            {["Visa", "MC", "Amex", "PayPal"].map((p) => (
              <span key={p} className="px-2 py-1 bg-primary-800/50 rounded text-[10px] font-medium text-primary-300">
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
