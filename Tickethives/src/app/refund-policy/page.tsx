import Link from "next/link";
import { ArrowLeft, RefreshCw, Check, X, AlertTriangle } from "lucide-react";

export default function RefundPolicyPage() {
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
              <RefreshCw className="w-6 h-6 text-primary-200" />
            </div>
            <div>
              <h1 className="text-3xl lg:text-4xl font-extrabold text-white">Refund Policy</h1>
              <p className="text-primary-300 text-sm mt-1">Last updated: July 2026</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="bg-white rounded-2xl border border-gray-200 p-8 lg:p-12 shadow-sm">
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
              At Tickethives, we understand that plans can change. This Refund Policy outlines the 
              circumstances under which you may be eligible for a refund or ticket exchange.
            </p>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. General Refund Policy</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                All ticket sales on Tickethives are final once confirmed and delivered. Due to the 
                nature of live event tickets, we generally do not offer refunds for change of mind, 
                personal scheduling conflicts, or buyer&apos;s remorse.
              </p>
              <p className="text-gray-600 leading-relaxed">
                However, we are committed to fairness and will review refund requests on a 
                case-by-case basis.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Eligible Refund Scenarios</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                You may be eligible for a refund or replacement in the following circumstances:
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                    <div>
                      <h3 className="font-semibold text-green-900 mb-1">Event Cancellation</h3>
                      <p className="text-green-800 text-sm">
                        Full refund if the event is cancelled by the organizer and not rescheduled. 
                        Refunds are processed automatically within 10 business days.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                    <div>
                      <h3 className="font-semibold text-green-900 mb-1">Event Postponement</h3>
                      <p className="text-green-800 text-sm">
                        If an event is postponed and you cannot attend the new date, you may request 
                        a refund within 48 hours of the postponement announcement.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                    <div>
                      <h3 className="font-semibold text-green-900 mb-1">Invalid or Duplicate Tickets</h3>
                      <p className="text-green-800 text-sm">
                        Full refund if tickets delivered are invalid, duplicated, or do not match 
                        the listing description. Contact us immediately upon discovery.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                    <div>
                      <h3 className="font-semibold text-green-900 mb-1">Wrong Tickets Delivered</h3>
                      <p className="text-green-800 text-sm">
                        Full refund or replacement if tickets delivered do not match your order 
                        (wrong event, date, or seating section).
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                    <div>
                      <h3 className="font-semibold text-green-900 mb-1">Non-Delivery</h3>
                      <p className="text-green-800 text-sm">
                        Full refund if tickets are not delivered before the event start time, 
                        provided you reported the issue promptly.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Non-Refundable Scenarios</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The following situations are generally not eligible for refunds:
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                    <div>
                      <h3 className="font-semibold text-red-900 mb-1">Change of Mind</h3>
                      <p className="text-red-800 text-sm">
                        Personal decisions not to attend the event after purchasing tickets.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                    <div>
                      <h3 className="font-semibold text-red-900 mb-1">Scheduling Conflicts</h3>
                      <p className="text-red-800 text-sm">
                        Personal calendar conflicts, travel issues, or inability to attend for 
                        reasons unrelated to the event itself.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                    <div>
                      <h3 className="font-semibold text-red-900 mb-1">Weather Conditions</h3>
                      <p className="text-red-800 text-sm">
                        Adverse weather that does not result in event cancellation by the organizer.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                    <div>
                      <h3 className="font-semibold text-red-900 mb-1">Late Requests</h3>
                      <p className="text-red-800 text-sm">
                        Refund requests made after the event has occurred or outside the specified 
                        timeframes in this policy.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. How to Request a Refund</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                To request a refund, please follow these steps:
              </p>
              <ol className="list-decimal list-inside space-y-3 text-gray-600 ml-4 mb-6">
                <li>Contact us via live chat or email at <a href="mailto:refunds@tickethives.com" className="text-primary-600 hover:text-primary-700 underline">refunds@tickethives.com</a></li>
                <li>Provide your order reference number and event details</li>
                <li>Describe the reason for your refund request</li>
                <li>Include any supporting documentation (screenshots, photos, etc.)</li>
                <li>Our team will review your request within 2-3 business days</li>
              </ol>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Refund Processing</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4 mb-6">
                <li>Approved refunds are processed to the original payment method</li>
                <li>Standard processing time: 5-10 business days</li>
                <li>Credit card refunds may take an additional billing cycle to appear on your statement</li>
                <li>Refund amounts will match the original purchase price (minus any discounts applied)</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Ticket Exchanges</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                In certain cases, we may offer ticket exchanges as an alternative to refunds:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Subject to availability and price difference adjustments</li>
                <li>Must be requested at least 72 hours before the event</li>
                <li>Exchange fees may apply depending on the circumstances</li>
                <li>Contact our support team to discuss exchange options</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Force Majeure</h2>
              <p className="text-gray-600 leading-relaxed">
                Tickethives shall not be liable for refunds in cases of force majeure events 
                beyond our reasonable control, including but not limited to natural disasters, 
                pandemics, government mandates, acts of terrorism, or infrastructure failures. 
                In such cases, we will work with event organizers to facilitate refunds or 
                rescheduling where possible.
              </p>
            </section>

            <section className="mb-10">
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-amber-900 mb-2">Important Notice</h3>
                    <p className="text-amber-800 text-sm leading-relaxed">
                      This Refund Policy is subject to our Terms of Service. In the event of any 
                      conflict between this policy and our Terms, the Terms shall prevail. We 
                      reserve the right to modify this policy at any time. Continued use of our 
                      services constitutes acceptance of any changes.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contact Us</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                For refund inquiries or to initiate a refund request:
              </p>
              <div className="bg-primary-50 rounded-xl border border-primary-100 p-6 space-y-3">
                <a href="mailto:refunds@tickethives.com" className="text-primary-700 font-medium hover:text-primary-800 block">
                  refunds@tickethives.com
                </a>
                <p className="text-sm text-primary-600">
                  Live chat available 24/7 for immediate assistance
                </p>
                <p className="text-sm text-primary-600 mt-4">
                  We aim to respond to refund requests within 2-3 business days.
                </p>
              </div>
            </section>

            <div className="border-t border-gray-200 pt-8 mt-8">
              <p className="text-sm text-gray-500 text-center">
                © {new Date().getFullYear()} Tickethives. All rights reserved.
              </p>
            </div>
          </div>
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
