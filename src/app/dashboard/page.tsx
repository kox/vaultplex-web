import { BsEnvelope, BsGithub, BsTwitterX } from "react-icons/bs";

const Dashboard = () => {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-gray-100 py-16 dark:bg-gray-900">
      <div className="container mx-auto max-w-2xl text-center">
        <h1 className="mb-4 text-3xl font-bold text-gray-800 dark:text-white">
          Dashboard Under Construction
        </h1>
        <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">
          We are working hard to build an amazing experience for you. In the
          meantime, feel free to connect with us:
        </p>
        <div className="space-y-4">
          <ul className="space-y-6">
            <li className="flex items-center text-lg text-body-color">
              <BsEnvelope className="mr-4 text-primary" />
              <a
                href="mailto:vaultplex.xyz@gmail.com"
                className="hover:text-primary"
              >
                vaultplex.xyz@gmail.com
              </a>
            </li>
            <li className="flex items-center text-lg text-body-color">
              <BsGithub className="mr-4 text-primary" />
              <a
                href="https://github.com/vaultplex/core"
                target="_blank"
                className="hover:text-primary"
              >
                github.com/vaultplex-xyz
              </a>
            </li>
            <li className="flex items-center text-lg text-body-color">
              <BsTwitterX className="mr-4 text-primary" />
              <a
                href="https://x.com/vaultplex"
                target="_blank"
                className="hover:text-primary"
              >
                x.com/vaultplex
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
