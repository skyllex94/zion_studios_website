import appStore from "../assets/app-store.png";
import missionImg from "../assets/mission.jpg";
import Footer from "../components/Footer";
import Features from "../components/Features";
import Navbar from "../components/Navbar";

function Mission() {
  return (
    <div>
      <Navbar />
      <div>
        <div className="bg-white pt-20 pb-20 lg:pt-20">
          <div className="m-auto flex flex-col md:flex-row lg:flex-row xl:flex-row justify-center px-6 xl:container md:px-12 lg:px-6">
            <div>
              <h1 className="xl:container text-start font-black text-3xl text-black-900 sm:mx-auto md:text-5xl lg:w-auto lg:text-left xl:text-6xl">
                Future Objectives and Mission
                <br className="block" />
              </h1>
              <div className="relative mt-8 space-y-8 text-start">
                <p className="text-gray-700 dark:text-gray-300 sm:text-lg">
                  To grow into a sizable company, employ 5+ full-time developers
                  and serve a community of people with our service-based
                  products. Placing our customers as a priority, we inspire and
                  strive to create and maintain software which is practically
                  useful, offering it to a wide variety of audiences, and
                  creating multiple times the value of the software.
                </p>
                <span className="block font-semibold text-black-500 dark:text-gray-400">
                  We strive to move forward with new software in a swift and
                  efficient manner, as we aim to grow steadily in the next
                  following years.
                </span>
              </div>
            </div>

            <div className="flex">
              <div className="mt-12">
                <div className="flex justify-center">
                  <img
                    src={missionImg}
                    className="mission-image"
                    alt="company mission"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Features />
      <Footer />
    </div>
  );
}

export default Mission;
