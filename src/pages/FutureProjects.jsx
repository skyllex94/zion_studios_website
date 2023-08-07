import waterEject from "../assets/water_eject.jpg";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function FutureProjects() {
  return (
    <div>
      <Navbar />
      <div>
        <div className="bg-white pt-20 pb-20 lg:pt-20">
          <div className="m-auto flex flex-col md:flex-row lg:flex-row xl:flex-row justify-center px-6 xl:container md:px-12 lg:px-6">
            <div>
              <h1 className="xl:container text-start font-black text-2xl text-black-900 sm:mx-auto md:text-4xl lg:w-auto lg:text-left xl:text-5xl">
                Water Ejection App
                <br className="block" />
              </h1>
              <div className="relative mt-8  space-y-8 text-start">
                <p className="text-gray-700 dark:text-gray-300 sm:text-lg">
                  The app we are currently developing is a water ejection
                  application. It's purpose is to remove the water from your
                  speakers so you can restore back their quality. Using
                  alternationg and static frequencies, we stride to design the
                  optimal solution to removing the droplets stuck in your Iphone
                  and any other device.
                </p>
                <span className="block font-semibold text-black-500 dark:text-gray-400">
                  Currently in development for 2+ months. Hopefully will be out
                  in the next 2 months.
                </span>
                <span className="block font text-black-500 dark:text-gray-400">
                  The app will have a free-tier for anyone who would like to use
                  the app without paying anything. With it, you will get access
                  to 4 static frequencies to help you out with removing excess
                  water from the speakers, which are proven to be effective.
                </span>
                <span className="block font text-black-500 dark:text-gray-400">
                  In addition, we are developing a paid-tier with a full set of
                  specific alternating frequencies to be sure you get the best
                  treatment for your phone for only $2.99 a week.
                </span>
              </div>
            </div>

            <div className="flex">
              <div className="mt-8 px-10">
                <div className="flex justify-center">
                  <img
                    src={waterEject}
                    className="mission-image"
                    alt="company mission"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default FutureProjects;
