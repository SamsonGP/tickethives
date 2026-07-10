import Link from "next/link";
import { ArrowLeft, Shield, Check, Award, Lock, Headphones } from "lucide-react";

export default function TicketGuaranteePage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-900 via-primary-800 to-primary-900 py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-primary-300 hover:text-white text-sm font-medium mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-primary-700/50 flex items-center justify-center">
              <Shield className="w-6 h-6 text-primary-200" />
            </div>
            <div>
              <h1 className="text-3xl lg:text-4xl font-extrabold text-white">100% Ticket Guarantee</h1>
              <p className="text-primary-300 text-sm mt-1">Your peace of mind is our priority</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Hero section */}
        <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-8 lg:p-12 text-white text-center mb-12">
          <Shield className="w-16 h-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">Every Ticket. Every Event. Guaranteed.</h2>
          <p className="text-primary-100 text-lg max-w-2xl mx-auto leading-relaxed">
            At Tickethives, we stand behind every ticket we sell. Our comprehensive guarantee 
            ensures you can purchase with complete confidence.
          </p>
        </div>

        {/* Guarantee pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-4">
              <Check className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Authenticity Guaranteed</h3>
            <p className="text-gray-600 leading-relaxed">
              Every ticket sold on Tickethives is verified for authenticity. We work only with 
              authorized resellers and verified ticket holders to ensure your tickets are 100% genuine.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
              <Award className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Valid for Entry</h3>
            <p className="text-gray-600 leading-relaxed">
              All tickets are guaranteed to be valid for entry to the event. If any ticket is 
              rejected at the venue, we provide a full refund or replacement tickets of equal or greater value.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-4">
              <Lock className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Secure Transactions</h3>
            <p className="text-gray-600 leading-relaxed">
              All payments are processed through PCI-DSS compliant providers with 256-bit SSL 
              encryption. Your financial information is never stored on our servers.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center mb-4">
              <Headphones className="w-6 h-6 text-amber-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">24/7 Customer Support</h3>
            <p className="text-gray-600 leading-relaxed">
              Our dedicated support team is available around the clock via live chat to assist 
              with any questions, concerns, or issues before, during, and after your purchase.
            </p>
          </div>
        </div>

        {/* What's covered */}
        <div className="bg-white rounded-2xl border border-gray-200 p-8 lg:p-10 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What Our Guarantee Covers</h2>
          <div className="space-y-4">
            {[
              {
                title: "Invalid Tickets",
                desc: "Full refund or replacement if delivered tickets are invalid or duplicated",
              },
              {
                title: "Wrong Tickets Delivered",
                desc: "Immediate correction or refund if tickets don't match your order",
              },
              {
                title: "Non-Delivery",
                desc: "Full refund if tickets aren't delivered before the event",
              },
              {
                title: "Event Cancellation",
                desc: "Automatic full refund for events cancelled by the organizer",
              },
              {
                title: "Significant Event Changes",
                desc: "Refund options if event details change materially (date, venue, performer)",
              },
              {
                title: "Fraud Protection",
                desc: "Protection against unauthorized transactions and fraudulent activity",
              },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How it works */}
        <div className="bg-white rounded-2xl border border-gray-200 p-8 lg:p-10 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How Our Guarantee Works</h2>
          <div className="space-y-6">
            {[
              {
                step: "1",
                title: "Purchase with Confidence",
                desc: "Browse and purchase tickets through our secure platform. Every listing is verified before being made available.",
              },
              {
                step: "2",
                title: "Agent Verification",
                desc: "Our agents confirm ticket availability and authenticity before processing your order through live chat.",
              },
              {
                step: "3",
                title: "Secure Delivery",
                desc: "E-tickets are delivered directly to your email, typically within 24-48 hours of confirmation.",
              },
              {
                step: "4",
                title: "Event Day Support",
                desc: "If any issues arise at the venue, contact our 24/7 support team for immediate assistance.",
              },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center shrink-0">
                  <span className="text-lg font-bold text-primary-700">{item.step}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Claim process */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8 mb-12">
          <h2 className="text-xl font-bold text-amber-900 mb-4">Making a Guarantee Claim</h2>
          <p className="text-amber-800 mb-4 leading-relaxed">
            If you believe your guarantee has been breached, please contact us immediately:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-amber-800 ml-4 mb-4">
            <li>Contact us via live chat or email at <a href="mailto:guarantee@tickethives.com" className="underline font-medium">guarantee@tickethives.com</a></li>
            <li>Provide your order reference and describe the issue</li>
            <li>Include any supporting evidence (photos, screenshots, venue staff statements)</li>
            <li>Our team will investigate and respond within 24 hours</li>
          </ol>
          <p className="text-sm text-amber-700 mt-4">
            Claims must be submitted within 48 hours of the event or delivery, whichever is earlier.
          </p>
        </div>

        {/* Trust badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          <div className="bg-white rounded-xl border border-gray-200 p-5 text-center">
            <p className="text-3xl font-black text-primary-700 mb-1">50,000+</p>
            <p className="text-sm text-gray-500">Tickets Delivered</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-5 text-center">
            <p className="text-3xl font-black text-primary-700 mb-1">99.8%</p>
            <p className="text-sm text-gray-500">Satisfaction Rate</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-5 text-center">
            <p className="text-3xl font-black text-primary-700 mb-1">24/7</p>
            <p className="text-sm text-gray-500">Support Available</p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-primary-50 rounded-2xl border border-primary-100 p-8 text-center">
          <h3 className="text-xl font-bold text-primary-900 mb-3">Ready to Experience the Guarantee?</h3>
          <p className="text-primary-700 mb-6 max-w-md mx-auto">
            Browse our selection of verified tickets and purchase with complete confidence.
          </p>
          <Link
            href="/matches"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 transition-all"
          >
            Browse Available Tickets
          </Link>
        </div>

        <div className="mt-8 text-center">
          <Link href="/" className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium">
            <ArrowLeft className="w-4 h-4" />
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
