import React, { useEffect, useRef } from "react";

export default function PolicyModal({ setShowModal }) {
  const closeModalRef = useRef();

  useEffect(() => {
    const closeModal = (e) => {
      if (e.keyCode === 27) setShowModal(false);
      if (!closeModalRef?.current.contains(e.target)) setShowModal(false);
    };
    window.addEventListener("keydown", closeModal);
    window.addEventListener("mousedown", closeModal);
    return () => {
      window.removeEventListener("keydown", closeModal);
      window.removeEventListener("mousedown", closeModal);
    };
  }, [setShowModal]);

  return (
    <div>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
        <div ref={closeModalRef} className="relative w-auto max-w-xl">
          <div className="relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
            <div className="flex items-start justify-between rounded-t border-b border-solid border-slate-200 p-5">
              <h3 className="text-3xl font-semibold">Private Policy</h3>
            </div>

            <form className="p-8">
              <div className="mb-4 flex items-center">
                <label
                  className="text-md mb-2 mr-3 block text-gray-700"
                  htmlFor="category_name"
                >
                  Zion Studion LLC, we respects the privacy of our users. This
                  Privacy Policy explains how we collect, use, disclose, and
                  safeguard your information when you visit our mobile
                  communication application. Please read this Privacy Policy
                  carefully. IF YOU DO NOT AGREE WITH THE TERMS OF THIS PRIVACY
                  POLICY, PLEASE DO NOT ACCESS THE APPLICATION.
                </label>
              </div>

              <div className="mb-4 flex items-center">
                <label
                  className="text-md mb-2 mr-3 block text-gray-700"
                  htmlFor="event_duration"
                >
                  <b>COLLECTION OF YOUR INFORMATION</b>
                </label>
              </div>

              <label
                className="text-md mb-2 mr-3 block text-gray-700"
                htmlFor="event_duration"
              >
                <b>Personal Data:</b> Only when and if the user decided to
                create an account with us. The data being collected and stored
                is the email address and name.
              </label>

              <label
                className="text-md mb-2 block text-gray-700"
                htmlFor="Notes"
              >
                <b>Financial Data:</b> All the financial information, such as
                data related to your payment method is stored on the Apple Store
                Front and only the proceeds are visible to our software.
              </label>

              <label
                className="text-md mb-2 block text-gray-700"
                htmlFor="Notes"
              >
                <b>Geo-Location Information:</b> We may request access or
                permission to and track location-based information from your
                mobile device, either continuously or while you are using the
                Application, to provide location-based services. If you wish to
                change our access or permissions, you may do so in your device’s
                settings.
              </label>

              <label
                className="text-md mb-2 block text-gray-700"
                htmlFor="Notes"
              >
                <b>Mobile Device Access:</b> We may request access or permission
                to certain features from your mobile device. If you wish to
                change our access or permissions, you may do so in your device’s
                settings.
              </label>
            </form>

            <div className="flex items-center justify-end rounded-b border-t border-solid border-slate-200 p-6">
              <button
                className="bg-white-500 active:bg-white-600 mr-1 mb-1 
              rounded px-6 py-3 text-sm font-bold uppercase text-black shadow 
              outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed inset-0 bg-black opacity-25"></div>
    </div>
  );
}
