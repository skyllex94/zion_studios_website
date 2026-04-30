import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PolicyModal from "../components/Modals/PolicyModal";

export default function OptIn() {
  const [showPolicyModal, setShowPolicyModal] = useState(false);

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-b from-gray-50 to-white pt-28 lg:pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              SMS Opt-In Authorization
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Authorize Zion Studios LLC to send SMS messages to your mobile number
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 space-y-8">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <p className="text-gray-700">
                By completing this form, you authorize Zion Studios LLC to send SMS text messages to the mobile number provided for:
              </p>
              <ul className="list-disc list-inside mt-3 space-y-1 text-gray-700">
                <li>Appointment reminders and confirmations</li>
                <li>Service updates and notifications</li>
                <li>Customer support communications</li>
                <li>Important account information</li>
              </ul>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Mobile Phone Number *
                </label>
                <input
                  type="tel"
                  placeholder="(555) 123-4567"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  required
                />
                <p className="text-xs text-gray-500 mt-2">
                  By entering your number, you agree to receive automated SMS messages from (833) 426-4663
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="optInCheck"
                  className="mt-1 w-4 h-4 text-black border-gray-300 rounded focus:ring-black"
                  required
                />
                <label htmlFor="optInCheck" className="text-sm text-gray-700">
                  I agree to receive automated SMS messages from Zion Studios LLC at the number provided above. Message frequency varies. Message and data rates may apply. Reply STOP to opt-out or HELP for help.
                </label>
              </div>

              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="consentCheck"
                  className="mt-1 w-4 h-4 text-black border-gray-300 rounded focus:ring-black"
                  required
                />
                <label htmlFor="consentCheck" className="text-sm text-gray-700">
                  I confirm I am the subscriber or customary user of this mobile number and have authority to opt-in.
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white font-semibold py-4 rounded-xl hover:bg-gray-800 transition-all duration-200"
              >
                Authorize SMS Messages
              </button>
            </form>

            <div className="border-t border-gray-100 pt-8 space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">SMS Terms & Conditions</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Opt-Out Instructions</h4>
                  <p className="text-sm text-gray-600">
                    Text <span className="font-mono font-bold">STOP</span> to (833) 426-4663 to stop receiving messages. You will receive a confirmation text.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Get Help</h4>
                  <p className="text-sm text-gray-600">
                    Text <span className="font-mono font-bold">HELP</span> to (833) 426-4663 for assistance or email{" "}
                    <a href="mailto:zionstudiosapps@gmail.com" className="text-blue-600 hover:text-blue-700">
                      zionstudiosapps@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Message Frequency & Rates</h4>
                <p className="text-sm text-gray-600">
                  You may receive up to 5 messages per month. Message and data rates may apply. Check with your mobile carrier for details.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Privacy</h4>
                <p className="text-sm text-gray-600">
                  Your mobile number will not be sold or shared with third parties for marketing purposes. View our{" "}
                  <button
                    onClick={() => setShowPolicyModal(true)}
                    className="text-blue-600 hover:text-blue-700 underline"
                  >
                    Privacy Policy
                  </button>{" "}
                  for complete details.
                </p>
              </div>
            </div>

             </div>
          </div>
      </div>
      <Footer />
      {showPolicyModal && <PolicyModal setShowModal={setShowPolicyModal} />}
    </>
  );
}
