import Link from "next/link";
import { ArrowLeft, Shield, Lock, Mail } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-900 via-primary-800 to-primary-900 py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary-300 hover:text-white text-sm font-medium mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-primary-700/50 flex items-center justify-center">
              <Shield className="w-6 h-6 text-primary-200" />
            </div>
            <div>
              <h1 className="text-3xl lg:text-4xl font-extrabold text-white">Privacy Policy</h1>
              <p className="text-primary-300 text-sm mt-1">Last updated: July 2026</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="bg-white rounded-2xl border border-gray-200 p-8 lg:p-12 shadow-sm">
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
              At Tickethives, we are committed to protecting your privacy and personal information. 
              This Privacy Policy explains how we collect, use, store, and protect your data when you 
              visit our website, purchase tickets, or interact with our services.
            </p>

            {/* Section 1 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We collect information that you provide directly to us, as well as information 
                automatically collected when you use our website:
              </p>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Information You Provide</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4 ml-4">
                <li>Contact information (name, email address, phone number)</li>
                <li>Account credentials (if you create an account)</li>
                <li>Order and transaction details</li>
                <li>Communication preferences and support inquiries</li>
                <li>Information shared via live chat with our customer support agents</li>
              </ul>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Automatically Collected Information</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Device information (browser type, operating system, IP address)</li>
                <li>Usage data (pages visited, time spent on site, click patterns)</li>
                <li>Location data (general geographic region based on IP)</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            {/* Section 2 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Processing and fulfilling your ticket orders</li>
                <li>Providing customer support through live chat and email</li>
                <li>Sending order confirmations, e-tickets, and transaction receipts</li>
                <li>Improving our website, services, and user experience</li>
                <li>Detecting and preventing fraud or unauthorized transactions</li>
                <li>Complying with legal obligations and resolving disputes</li>
                <li>Sending promotional communications (with your consent, where required)</li>
                <li>Analyzing website usage to optimize performance and content</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Information Sharing and Disclosure</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We do not sell your personal information. We may share your information in the 
                following limited circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>
                  <strong className="text-gray-800">Service Providers:</strong> Third-party vendors who assist 
                  with payment processing, email delivery, analytics, or customer support (bound by 
                  confidentiality agreements)
                </li>
                <li>
                  <strong className="text-gray-800">Event Organizers:</strong> Limited information necessary 
                  to fulfill ticket delivery and event access requirements
                </li>
                <li>
                  <strong className="text-gray-800">Legal Requirements:</strong> When required by law, court 
                  order, or governmental authority, or to protect the rights, property, or safety of 
                  Tickethives or others
                </li>
                <li>
                  <strong className="text-gray-800">Business Transfers:</strong> In connection with a merger, 
                  acquisition, or sale of assets
                </li>
              </ul>
            </section>

            {/* Section 4 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We implement robust security measures to protect your personal information:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>SSL/TLS encryption for all data transmissions</li>
                <li>Secure payment processing through PCI-DSS compliant providers</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Access controls and authentication for staff handling personal data</li>
                <li>Encrypted storage for sensitive information</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                While we strive to protect your information, no method of transmission over the 
                Internet or electronic storage is 100% secure. We cannot guarantee absolute security.
              </p>
            </section>

            {/* Section 5 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Your Rights and Choices</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Depending on your location, you may have the following rights regarding your personal data:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>
                  <strong className="text-gray-800">Access:</strong> Request a copy of the personal data we hold about you
                </li>
                <li>
                  <strong className="text-gray-800">Correction:</strong> Request correction of inaccurate or incomplete data
                </li>
                <li>
                  <strong className="text-gray-800">Deletion:</strong> Request deletion of your personal data (subject to legal retention requirements)
                </li>
                <li>
                  <strong className="text-gray-800">Objection:</strong> Object to certain types of processing, such as marketing
                </li>
                <li>
                  <strong className="text-gray-800">Portability:</strong> Request your data in a structured, machine-readable format
                </li>
                <li>
                  <strong className="text-gray-800">Withdraw Consent:</strong> Withdraw consent for optional processing at any time
                </li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                To exercise any of these rights, please contact us using the details provided below.
              </p>
            </section>

            {/* Section 6 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cookies and Tracking Technologies</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use cookies and similar technologies to enhance your experience on our website:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>
                  <strong className="text-gray-800">Essential Cookies:</strong> Required for basic site functionality (shopping cart, login sessions)
                </li>
                <li>
                  <strong className="text-gray-800">Analytics Cookies:</strong> Help us understand how visitors interact with our site
                </li>
                <li>
                  <strong className="text-gray-800">Marketing Cookies:</strong> Used to deliver relevant ads and measure campaign effectiveness (with consent)
                </li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                You can manage cookie preferences through your browser settings. Disabling certain 
                cookies may affect site functionality.
              </p>
            </section>

            {/* Section 7 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. International Data Transfers</h2>
              <p className="text-gray-600 leading-relaxed">
                Tickethives operates globally and may transfer your data to countries outside your 
                country of residence. When we do so, we ensure appropriate safeguards are in place, 
                such as Standard Contractual Clauses approved by relevant data protection authorities, 
                to protect your personal information.
              </p>
            </section>

            {/* Section 8 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Data Retention</h2>
              <p className="text-gray-600 leading-relaxed">
                We retain your personal information only for as long as necessary to fulfill the 
                purposes outlined in this policy, comply with legal obligations, resolve disputes, 
                and enforce our agreements. Order records are typically retained for a minimum of 
                seven years for tax and accounting purposes.
              </p>
            </section>

            {/* Section 9 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Children&apos;s Privacy</h2>
              <p className="text-gray-600 leading-relaxed">
                Our services are not directed to individuals under the age of 16. We do not 
                knowingly collect personal information from children. If you believe we have 
                inadvertently collected such information, please contact us immediately and we 
                will delete it.
              </p>
            </section>

            {/* Section 10 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to This Policy</h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our 
                practices or legal requirements. We will notify you of material changes by posting 
                the updated policy on this page with a revised &quot;Last updated&quot; date. Your continued 
                use of our services after such changes constitutes acceptance of the updated policy.
              </p>
            </section>

            {/* Section 11 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Us</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                If you have questions, concerns, or requests regarding this Privacy Policy or our 
                data practices, please contact us:
              </p>
              <div className="bg-primary-50 rounded-xl border border-primary-100 p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary-600" />
                  <a href="mailto:privacy@tickethives.com" className="text-primary-700 font-medium hover:text-primary-800">
                    privacy@tickethives.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Lock className="w-5 h-5 text-primary-600" />
                  <span className="text-primary-700">Data Protection Officer</span>
                </div>
                <p className="text-sm text-primary-600 mt-4">
                  We aim to respond to all inquiries within 5 business days.
                </p>
              </div>
            </section>

            {/* Footer note */}
            <div className="border-t border-gray-200 pt-8 mt-8">
              <p className="text-sm text-gray-500 text-center">
                © {new Date().getFullYear()} Tickethives. All rights reserved. 
                This Privacy Policy is effective as of the date indicated above.
              </p>
            </div>
          </div>
        </div>

        {/* Back link */}
        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
