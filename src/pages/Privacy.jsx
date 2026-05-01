import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Privacy() {
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-b from-gray-50 to-white pt-28 lg:pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg border border-gray-100 space-y-8 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
              <p>
                Zion Studios LLC ("we," "our," or "us") respects the privacy of our users. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at zionstudios.com, use our mobile applications, or engage with our services. Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access our services.
              </p>
            </section>

            <section className="border-t border-gray-100 pt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Data</h3>
              <p className="mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
                <li>Create an account or register for our services</li>
                <li>Express interest in obtaining information about us or our products</li>
                <li>Participate in activities on our website or mobile apps</li>
                <li>Contact us directly</li>
              </ul>
              <p className="mb-4">The personal information we collect may include:</p>
              <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
                <li>Name and email address</li>
                <li>Phone number</li>
                <li>Billing and payment information</li>
                <li>Business information (for clients)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Financial Data</h3>
              <p className="mb-6">
                All financial information, including payment method details, is processed and stored securely by our payment processors (such as Apple App Store, Google Play Store, or third-party payment providers). We only receive transaction proceeds and confirmation—never your full financial information.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Mobile Device and App Data</h3>
              <p className="mb-4">When you use our mobile applications, we may request access to:</p>
              <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
                <li><strong>Geo-Location Information:</strong> With your permission, we may collect location-based information to provide location-based services. You can change these permissions in your device settings at any time.</li>
                <li><strong>Device Access:</strong> We may request access to your camera, photos, or storage, solely for app functionality. You control these permissions through your device settings.</li>
                <li><strong>Usage Data:</strong> Anonymous information about how you use our apps to improve performance and user experience.</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Website Data</h3>
              <p>
                When you visit our website, we may automatically collect certain information about your device, including your IP address, browser type, operating system, referring URLs, and pages visited. We use cookies and similar tracking technologies to improve your browsing experience.
              </p>
            </section>

            <section className="border-t border-gray-100 pt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
              <p className="mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide, operate, and maintain our services</li>
                <li>Process transactions and send related information</li>
                <li>Respond to your comments, questions, and requests</li>
                <li>Send you technical notices, updates, and support messages</li>
                <li>Communicate with you about products, services, and events</li>
                <li>Monitor and analyze trends, usage, and activities</li>
                <li>Improve our website, apps, and services</li>
                <li>Prevent fraudulent transactions and monitor against theft</li>
              </ul>
            </section>

            <section className="border-t border-gray-100 pt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Sharing Your Information</h2>
              <p className="mb-4">We do not sell, trade, or rent your personal information. We may share information in the following situations:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Service Providers:</strong> With third-party vendors who perform services for us (hosting, payment processing, analytics)</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, sale, or acquisition of all or a portion of our company</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights, privacy, safety, or property</li>
                <li><strong>Consent:</strong> With your explicit consent or direction</li>
              </ul>
            </section>

            <section className="border-t border-gray-100 pt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">SMS Messaging (STOP/HELP)</h2>
              <p className="mb-4">
                If you opt-in to receive SMS messages from us (toll-free number: 833-426-4663):
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Your mobile number will not be shared with third parties for marketing purposes</li>
                <li>You may receive up to 5 messages per month</li>
                <li>Text <strong>STOP</strong> to opt-out at any time—you will receive a confirmation</li>
                <li>Text <strong>HELP</strong> for assistance or email zionstudiosapps@gmail.com</li>
                <li>Message and data rates may apply according to your carrier's terms</li>
              </ul>
            </section>

            <section className="border-t border-gray-100 pt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
              <p>
                We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your data, we cannot guarantee absolute security.
              </p>
            </section>

            <section className="border-t border-gray-100 pt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Retention</h2>
              <p>
                We retain your personal information only as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will delete or anonymize it in a secure manner.
              </p>
            </section>

            <section className="border-t border-gray-100 pt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Privacy Rights</h2>
              <p className="mb-4">Depending on your location, you may have the following rights regarding your personal data:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate or incomplete data</li>
                <li>Request deletion of your personal information</li>
                <li>Object to or restrict processing of your data</li>
                <li>Request a copy of your data in a portable format</li>
                <li>Withdraw consent at any time (where processing is based on consent)</li>
              </ul>
              <p className="mt-4">To exercise these rights, please contact us at zionstudiosapps@gmail.com.</p>
            </section>

            <section className="border-t border-gray-100 pt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
              <p>
                Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.
              </p>
            </section>

            <section className="border-t border-gray-100 pt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. The updated version will be indicated by a "Last updated" date at the top of this page. We encourage you to review this Privacy Policy periodically. Your continued use of our services after any changes constitutes your acceptance of the updated Privacy Policy.
              </p>
            </section>

            <section className="border-t border-gray-100 pt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="mb-4">
                If you have questions or concerns about this Privacy Policy, please contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="mb-2"><strong>Zion Studios LLC</strong></p>
                <p className="mb-2">Email: <a href="mailto:zionstudiosapps@gmail.com" className="text-blue-600 hover:text-blue-700">zionstudiosapps@gmail.com</a></p>
                <p>Phone: <a href="tel:+16198175266" className="text-blue-600 hover:text-blue-700">(619) 817-5266</a></p>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
