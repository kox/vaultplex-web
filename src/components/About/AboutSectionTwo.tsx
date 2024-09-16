import Image from "next/image";
import SectionTitle from "../common/SectionTitle";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28" id="extensions">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <SectionTitle
                title="Plenty of Extensions"
                paragraph=""
                mb="44px"
              />
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              
              
              <Image
                src="/images/about/vaultplex-about-image-2.jpg"
                alt="about image"
                fill
                className="drop-shadow-three block drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Locking Extension
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Control the accessibility of your vault with customizable locking periods. Set lock durations to secure assets for specific time frames or until certain conditions are met.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Time Interval Management
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Manage vault activities by defining specific time intervals for deposits, withdrawals, or any other operations to maximize security and efficiency.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Access Control
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Tailor who can interact with your vault by setting access permissions. Create open vaults for public participation or private vaults for exclusive groups.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Limitations and Thresholds
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Define custom limits on deposits, withdrawals, or other activities within your vault to align with your specific DeFi strategy or risk management needs.
                </p>
              </div>
              <p className="text-white font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  And many more on the way...
                </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
