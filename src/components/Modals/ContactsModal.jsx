import React, { useEffect, useRef } from "react";

export default function ContactsModal({ setShowModal }) {
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
              <h3 className="text-3xl font-semibold">Contact Information</h3>
            </div>

            <form className="p-8">
              <div className="mb-4 flex items-center">
                <label
                  className="text-md mb-2 mr-3 block text-gray-700"
                  htmlFor="category_name"
                >
                  If you have experienced any issues, please contact us through
                  our email information below:
                </label>
              </div>

              <div className="mb-4 flex items-center">
                <label
                  className="text-md mb-2 mr-3 block  text-gray-700"
                  htmlFor="category_name"
                >
                  <b>Main Email: </b> ks_studios94@yahoo.com
                </label>
              </div>

              <label
                className="text-md mb-2 block text-gray-700"
                htmlFor="Notes"
              >
                <b>Location:</b> Boston, United States, 02130.
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
