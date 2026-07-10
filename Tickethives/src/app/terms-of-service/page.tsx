import Link from "next/link";
import { ArrowLeft, FileText, Scale } from "lucide-react";

export default function TermsOfServicePage() {
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
              <FileText className="w-6 h-6 text-primary-200" />
            </div>
            <div>
              <h1 className="text-3xl lg:text-4xl font-extrabold text-white">Terms of Service</h1>
              <p className="text-primary-300 text-sm mt-1">Last updated: July 2026</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="bg-white rounded-2xl border border-gray-200 p-8 lg:p-12 shadow-sm">
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
              Welcome to Tickethives. These Terms of Service govern your use of our website and 
              services. By accessing or using tickethives.com, you agree to be bound by these terms. 
              Please read them carefully.
            </p>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                By accessing or using tickethives.com, you confirm that you have read, understood, 
                and agree to be bound by these Terms of Service, our Privacy Policy, and any 
                additional terms referenced herein. If you do not agree to these terms, you must 
                not use our services.
              </p>
              <p className="text-gray-600 leading-relaxed">
                You must be at least 16 years of age to use our services. By using Tickethives, 
                you represent and warrant that you meet this age requirement and have the legal 
                capacity to enter into binding agreements.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Services</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Tickethives is an online platform that facilitates the purchase of event tickets, 
                including but not limited to sports events, concerts, theater performances, and 
                other live entertainment. Our services include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Browsing available event listings and ticket inventories</li>
                <li>Purchasing tickets for events through our platform</li>
                <li>Customer support via live chat and email</li>
                <li>Secure payment processing and e-ticket delivery</li>
                <li>Order fulfillment assistance through our agent network</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Ticket Purchases</h2>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">3.1 Pricing</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                All prices displayed on Tickethives are in US Dollars (USD) unless otherwise stated. 
                Prices include applicable discounts but may be subject to change without prior notice. 
                The final price is confirmed at the time of order placement through our live chat agents.
              </p>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">3.2 Order Confirmation</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                An order is considered confirmed only after our agent has verified availability, 
                processed payment, and delivered e-tickets to your registered email address. Until 
                confirmation is received, tickets are not guaranteed.
              </p>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">3.3 Ticket Validity</h3>
              <p className="text-gray-600 leading-relaxed">
                We guarantee that all tickets sold through Tickethives are authentic and valid for 
                entry to the stated event. In the unlikely event that a ticket is invalid, we will 
                provide a full refund or replacement tickets of equal or greater value.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. User Accounts and Responsibilities</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>You agree to provide accurate, current, and complete information during the order process</li>
                <li>You are responsible for maintaining the confidentiality of any account credentials</li>
                <li>You agree not to use Tickethives for any unlawful or unauthorized purpose</li>
                <li>You must not attempt to circumvent security measures or interfere with the platform&apos;s operation</li>
                <li>You agree to communicate respectfully with our customer support agents</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Prohibited Activities</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The following activities are strictly prohibited and may result in account 
                termination or legal action:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Reselling tickets purchased through Tickethives for commercial gain</li>
                <li>Using automated systems, bots, or scripts to access or interact with the platform</li>
                <li>Providing false or misleading information during the purchase process</li>
                <li>Attempting to defraud Tickethives, its partners, or other users</li>
                <li>Scraping, copying, or distributing our content without written permission</li>
                <li>Engaging in any activity that violates applicable laws or regulations</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Payment and Billing</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                All payments are processed through secure, PCI-DSS compliant payment providers. 
                By placing an order, you authorize Tickethives to charge the total amount 
                (including ticket price and any applicable discounts) to your chosen payment method.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Accepted payment methods: Visa, Mastercard, American Express, PayPal</li>
                <li>All transactions are encrypted and processed securely</li>
                <li>You are responsible for any bank or credit card fees associated with your purchase</li>
                <li>Prices are final once confirmed by our agent; no price adjustments after purchase</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Intellectual Property</h2>
              <p className="text-gray-600 leading-relaxed">
                All content on tickethives.com, including but not limited to text, graphics, logos, 
                images, software, and the overall design and layout, is the property of Tickethives 
                or its licensors and is protected by copyright, trademark, and other intellectual 
                property laws. You may not reproduce, distribute, modify, or create derivative works 
                without our express written consent.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Limitation of Liability</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                To the fullest extent permitted by law, Tickethives shall not be liable for any 
                indirect, incidental, special, consequential, or punitive damages arising out of 
                or related to your use of our services, including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Loss of profits, revenue, or business opportunities</li>
                <li>Event cancellations, postponements, or changes made by event organizers</li>
                <li>Technical issues, service interruptions, or delays in ticket delivery</li>
                <li>Unauthorized access to or alteration of your data</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                Our total liability shall not exceed the amount you paid for the specific tickets 
                giving rise to the claim.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Indemnification</h2>
              <p className="text-gray-600 leading-relaxed">
                You agree to indemnify, defend, and hold harmless Tickethives, its officers, 
                directors, employees, and agents from any claims, liabilities, damages, losses, 
                and expenses (including reasonable attorneys&apos; fees) arising out of or in any 
                way connected with your use of our services, violation of these Terms, or 
                infringement of any intellectual property or other rights.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Governing Law and Dispute Resolution</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                These Terms shall be governed by and construed in accordance with the laws of 
                the State of New York, United States, without regard to its conflict of law provisions.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Any disputes arising under or in connection with these Terms shall first be 
                attempted to be resolved through good-faith negotiation. If negotiation fails, 
                disputes shall be submitted to binding arbitration in accordance with the rules 
                of the American Arbitration Association. You agree that any dispute resolution 
                proceedings will be conducted only on an individual basis and not in a class, 
                consolidated, or representative action.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                We reserve the right to modify these Terms at any time. Changes will be effective 
                immediately upon posting to this page with an updated revision date. Your continued 
                use of Tickethives after such changes constitutes acceptance of the revised Terms. 
                We encourage you to review these Terms periodically.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Information</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                If you have questions about these Terms, please contact us:
              </p>
              <div className="bg-primary-50 rounded-xl border border-primary-100 p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <Scale className="w-5 h-5 text-primary-600" />
                  <a href="mailto:legal@tickethives.com" className="text-primary-700 font-medium hover:text-primary-800">
                    legal@tickethives.com
                  </a>
                </div>
                <p className="text-sm text-primary-600 mt-4">
                  We aim to respond to all inquiries within 5 business days.
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
