import React, { useEffect, useRef } from "react";

export default function AboutModal({ setShowModal }) {
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
              <h3 className="text-3xl font-semibold">About Us</h3>
            </div>

            <form className="p-8">
              <div className="mb-4 flex items-center">
                <label
                  className="text-md mb-2 mr-3 block text-gray-700"
                  htmlFor="category_name"
                >
                  The name of our organization is called Zion Studios, and is
                  mainly focused on providing excellent developed software and
                  experience to our end users.
                </label>
              </div>

              <div className="mb-4 flex items-center">
                <label
                  className="text-md mb-2 mr-3 block  text-gray-700"
                  htmlFor="category_name"
                >
                  <b> Mission:</b> Develop high-grade service-based software and
                  provide more value than expected for an affordable price to
                  countries all around the globe.
                </label>
              </div>

              <div className="mb-4 flex items-center">
                <label
                  className="text-md mb-2 mr-3 block text-gray-700"
                  htmlFor="event_duration"
                >
                  <b>Team:</b> The team consists of a CEO and 2 software
                  developers, and a marketing agent for driving traffic.
                </label>
              </div>

              <label
                className="text-md mb-2 block text-gray-700"
                htmlFor="Notes"
              >
                <b>Location:</b> We are located in Boston, United States, 02130.
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
