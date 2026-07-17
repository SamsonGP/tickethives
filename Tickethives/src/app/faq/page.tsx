"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, HelpCircle, ChevronDown, MessageCircle } from "lucide-react";
import { TICKET_DISCOUNT_PERCENT } from "@/lib/pricing";

const faqs = [
  {
    category: "General",
    questions: [
      {
        q: "What is Tickethives?",
        a: "Tickethives is a trusted online platform for purchasing tickets to major sporting events, including the FIFA World Cup 2026. We offer verified tickets with guaranteed authenticity and secure payment processing.",
      },
      {
        q: "Is Tickethives an official ticket seller?",
        a: "Tickethives is a licensed ticket marketplace. We work with verified ticket holders and authorized resellers to provide access to premium seating for high-demand events.",
      },
      {
        q: "How do I know the tickets are real?",
        a: "All tickets sold through Tickethives are verified for authenticity. We guarantee that every ticket is valid for entry, and in the rare event of an issue, we provide a full refund or replacement. See our Ticket Guarantee for details.",
      },
    ],
  },
  {
    category: "Ordering & Payment",
    questions: [
      {
        q: "How do I purchase tickets on Tickethives?",
        a: "Browse our available matches, select your preferred seating category and quantity, then proceed to checkout. Our live chat agents will guide you through the final steps to complete your order securely.",
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept Visa, Mastercard, American Express, and PayPal. All transactions are processed through PCI-DSS compliant payment providers with SSL encryption.",
      },
      {
        q: "Why do I need to chat with an agent to complete my order?",
        a: "Our agent-assisted checkout ensures personalized service, real-time availability confirmation, and secure handling of your payment details. It also allows us to address any questions about seating, delivery, or event specifics.",
      },
      {
        q: "Are the prices shown final?",
        a: `The prices displayed include our standard ${TICKET_DISCOUNT_PERCENT}% promotional discount. There are no hidden fees or service charges. The final amount you pay is confirmed by our agent before processing.`,
      },
      {
        q: "Can I buy tickets for someone else?",
        a: "Yes, you can purchase tickets as a gift. Simply provide the recipient's name and email during checkout, and we'll deliver the e-tickets directly to them.",
      },
    ],
  },
  {
    category: "Ticket Delivery",
    questions: [
      {
        q: "How will I receive my tickets?",
        a: "Tickets are delivered as e-tickets (PDF) to your registered email address. You can print them or display them on your mobile device at the venue.",
      },
      {
        q: "How long does delivery take?",
        a: "Most orders are fulfilled within 24-48 hours of confirmation. For events closer to the date, same-day delivery is often available. Our agent will confirm the expected delivery timeframe during checkout.",
      },
      {
        q: "What if I don't receive my tickets?",
        a: "If your tickets haven't arrived within the confirmed timeframe, contact our support team immediately via live chat. We'll investigate and ensure delivery or provide a full refund.",
      },
      {
        q: "Can I change the delivery email after purchase?",
        a: "Yes, contact our support team as soon as possible after your order. We can update the delivery email before tickets are sent.",
      },
    ],
  },
  {
    category: "Refunds & Changes",
    questions: [
      {
        q: "Can I get a refund if I can't attend?",
        a: "Generally, ticket sales are final. However, refunds may be available for event cancellations, postponements, or delivery issues. Please review our Refund Policy for complete details.",
      },
      {
        q: "What happens if an event is cancelled?",
        a: "If an event is cancelled by the organizer, you'll receive a full refund automatically within 10 business days to your original payment method.",
      },
      {
        q: "Can I change my seat selection after purchase?",
        a: "Seat changes are subject to availability and must be requested before tickets are delivered. Contact our support team to discuss options.",
      },
      {
        q: "What if I ordered the wrong tickets?",
        a: "Contact us immediately. If the tickets haven't been delivered yet, we may be able to cancel and reprocess your order. If delivered, review our Refund Policy for available options.",
      },
    ],
  },
  {
    category: "Account & Support",
    questions: [
      {
        q: "Do I need to create an account?",
        a: "No account is required to browse or purchase. However, providing an email address during checkout allows us to deliver your tickets and send order confirmations.",
      },
      {
        q: "How can I contact customer support?",
        a: "We offer 24/7 live chat support directly on our website. You can also email us at support@tickethives.com for non-urgent inquiries.",
      },
      {
        q: "Is my personal information safe?",
        a: "Yes. We use SSL encryption, secure payment processing, and follow industry best practices to protect your data. See our Privacy Policy for full details.",
      },
      {
        q: "Do you offer group discounts?",
        a: "For group purchases of 10+ tickets, contact our support team to discuss available group rates and seating arrangements.",
      },
    ],
  },
];

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

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
              <HelpCircle className="w-6 h-6 text-primary-200" />
            </div>
            <div>
              <h1 className="text-3xl lg:text-4xl font-extrabold text-white">Frequently Asked Questions</h1>
              <p className="text-primary-300 text-sm mt-1">Find answers to common questions</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* FAQ Categories */}
        <div className="space-y-12">
          {faqs.map((section) => (
            <div key={section.category}>
              <h2 className="text-xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                {section.category}
              </h2>
              <div className="space-y-3">
                {section.questions.map((item, idx) => {
                  const key = `${section.category}-${idx}`;
                  const isOpen = openItems[key];
                  return (
                    <div
                      key={key}
                      className="bg-white rounded-xl border border-gray-200 overflow-hidden"
                    >
                      <button
                        onClick={() => toggleItem(key)}
                        className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-semibold text-gray-900 pr-4">{item.q}</span>
                        <ChevronDown
                          className={`w-5 h-5 text-gray-400 shrink-0 transition-transform ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-5 pb-5 -mt-1">
                          <p className="text-gray-600 leading-relaxed">{item.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions */}
        <div className="mt-16 bg-primary-50 rounded-2xl border border-primary-100 p-8 text-center">
          <MessageCircle className="w-10 h-10 text-primary-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-primary-900 mb-2">Still Have Questions?</h3>
          <p className="text-primary-700 mb-6 max-w-md mx-auto">
            Our support team is available 24/7 to help you with any questions about tickets, orders, or events.
          </p>
          <button
            onClick={() => {
              const Tawk_API = (window as unknown as Record<string, unknown>).Tawk_API as Record<string, unknown> | undefined;
              if (Tawk_API && typeof Tawk_API.openChat === "function") {
                (Tawk_API.openChat as () => void)();
              } else if (Tawk_API && typeof Tawk_API.maximize === "function") {
                (Tawk_API.maximize as () => void)();
              }
            }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            Start a Live Chat
          </button>
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
