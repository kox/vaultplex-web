import { BsEnvelope, BsGithub, BsTwitterX } from "react-icons/bs";


const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
        <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="wow fadeInUp shadow-three dark:bg-gray-dark mb-12 rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s"
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Get in Touch
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Reach out to us through the following platforms:
              </p>
              <ul className="space-y-6">
                <li className="flex items-center text-lg text-body-color">
                  <BsEnvelope  className="mr-4 text-primary" />
                  <a href="mailto:vaultplex.xyz@gmail.com" className="hover:text-primary">
                    vaultplex.xyz@gmail.com
                  </a>
                </li>
                <li className="flex items-center text-lg text-body-color">
                  <BsGithub  className="mr-4 text-primary" />
                  <a href="https://github.com/vaultplex/core" target="_blank" className="hover:text-primary">
                    github.com/vaultplex-xyz
                  </a>
                </li>
                <li className="flex items-center text-lg text-body-color">
                  <BsTwitterX className="mr-4 text-primary" />
                  <a href="https://x.com/vaultplex" target="_blank" className="hover:text-primary">
                    x.com/vaultplex
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
