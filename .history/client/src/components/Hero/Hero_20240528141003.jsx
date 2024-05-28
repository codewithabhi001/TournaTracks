import { useState } from "react";

function HeroSection() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <section
      x-data={{ mobileNavOpen }}
      className="relative bg-body overflow-hidden"
    >
      <nav className="relative z-10 py-7">
        <div className="container mx-auto px-4">
          <div className="relative flex items-center justify-between">
            <a className="inline-block" href="#">
              <img
                className="h-10"
                src="casper-assets/logos/casper-logo-white.svg"
                alt=""
              />
            </a>
            <div className="flex items-center justify-end">
              <div className="hidden lg:block mr-10">
                <a
                  className="inline-flex py-2 px-4 mr-4 items-center justify-center text-sm font-medium uppercase text-white hover:text-violet-500"
                  href="#"
                >
                  SIGN IN
                </a>
                <a
                  className="inline-flex h-11 py-2 px-4 items-center justify-center text-sm font-medium uppercase text-black hover:text-white bg-violet-500 hover:bg-violet-600 transition duration-200 rounded-full"
                  href="#"
                >
                  SIGN UP
                </a>
              </div>
              <button
                onClick={() => setMobileNavOpen(!mobileNavOpen)}
                className="text-white hover:text-violet-500"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 16H29"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M3 8H29"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M20 24L29 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div className="relative pt-24 lg:pt-44 pb-40 lg:pb-72">
        <div className="relative z-10 container mx-auto px-4">
          <div className="flex flex-wrap -mx-4 items-center">
            <div className="w-full lg:w-1/2 xl:w-3/5 px-4 mb-32 lg:mb-0">
              <div className="max-w-md mx-auto lg:max-w-none">
                <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl xl:text-8xl text-white font-semibold leading-none mb-8">
                  INTRODUCING CASPER AI
                </h1>
                <p className="text-2xl text-gray-400 mb-8">
                  <span className="block">Welcome to ChatBotX -</span>
                  <span className="block">
                    Your Intelligent AI Chat Assistant!
                  </span>
                </p>
                <a
                  className="group inline-flex h-14 px-7 items-center justify-center text-base font-medium text-black hover:text-white bg-violet-500 hover:bg-violet-600 transition duration-200 rounded-full"
                  href="#"
                >
                  <span className="mr-2">TRY IT FOR FREE</span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.9199 6.62C17.8185 6.37565 17.6243 6.18147 17.3799 6.08C17.2597 6.02876 17.1306 6.00158 16.9999 6H6.99994C6.73472 6 6.48037 6.10536 6.29283 6.29289C6.1053 6.48043 5.99994 6.73478 5.99994 7C5.99994 7.26522 6.1053 7.51957 6.29283 7.70711C6.48037 7.89464 6.73472 8 6.99994 8H14.5899L6.28994 16.29C6.19621 16.383 6.12182 16.4936 6.07105 16.6154C6.02028 16.7373 5.99414 16.868 5.99414 17C5.99414 17.132 6.02028 17.2627 6.07105 17.3846C6.12182 17.5064 6.19621 17.617 6.28994 17.71C6.3829 17.8037 6.4935 17.8781 6.61536 17.9289C6.73722 17.9797 6.86793 18.0058 6.99994 18.0058C7.13195 18.0058 7.26266 17.9797 7.38452 17.9289C7.50638 17.8781 7.61698 17.8037 7.70994 17.71L15.9999 9.41V17C15.9999 17.2652 16.1053 17.5196 16.2928 17.7071C16.4804 17.8946 16.7347 18 16.9999 18C17.2652 18 17.5195 17.8946 17.707 17.7071C17.8946 17.5196 17.9999 17.2652 17.9999 17V7C17.9984 6.86932 17.9712 6.74022 17.9199 6.62Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="w-full lg:w-1/2 xl:w-2/5 px-4">
              <div className="xl:inline-block relative">
                <img
                  className="absolute top-0 right-0 -mt-8 mr-12 animate-spinStar"
                  src="casper-assets/headers/blink-sm.png"
                  alt=""
                />
                <img
                  className="absolute bottom-0 left-0 lg:-ml-24 xl:-ml-40 animate-spinStar"
                  src="casper-assets/headers/blink-md.png"
                  alt=""
                />
                <img
                  className="block px-10 md:px-0 mx-auto lg:mr-0"
                  src="casper-assets/headers/oval-robot-photo.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute bottom-0 left-0 w-full"
          src="casper-assets/headers/bg-bottom-lines.png"
          alt=""
        />
      </div>
      <div
        className={`fixed top-0 left-0 bottom-0 w-5/6 max-w-md z-50 ${
          mobileNavOpen ? "block" : "hidden"
        }`}
      >
        <div
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
          className="fixed inset-0 bg-violet-900 opacity-20"
        ></div>
        <nav className="relative flex flex-col py-7 px-10 w-full h-full bg-white overflow-y-auto">
          <div className="flex mb-auto items-center">
            <a className="inline-block mr-auto" href="#">
              <img
                className="h-10"
                src="casper-assets/logos/casper-logo.svg"
                alt=""
              />
            </a>
            <button onClick={() => setMobileNavOpen(!mobileNavOpen)}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 18L18 6M6 6L18 18"
                  stroke="#111827"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
          </div>
          <div className="py-12 mb-auto">
            <ul className="flex-col">
              <li className="mb-6">
                <a
                  className="inline-block text-base text-black font-medium uppercase"
                  href="#"
                >
                  FEATURED
                </a>
              </li>
              <li className="mb-6">
                <a
                  className="inline-block text-base text-black font-medium uppercase"
                  href="#"
                >
                  SOLUTIONS
                </a>
              </li>
              <li className="mb-6">
                <a
                  className="inline-block text-base text-black font-medium uppercase"
                  href="#"
                >
                  PRODUCTS
                </a>
              </li>
              <li>
                <a
                  className="inline-block text-base text-black font-medium uppercase"
                  href="#"
                >
                  ARTICLES
                </a>
              </li>
            </ul>
          </div>
          <div>
            <a
              className="flex py-2 px-4 mb-4 items-center justify-center text-sm font-medium uppercase text-violet-900 hover:text-violet-500"
              href="#"
            >
              SIGN IN
            </a>
            <a
              className="flex h-11 py-2 px-4 items-center justify-center text-sm font-medium uppercase text-black hover:text-white bg-violet-500 hover:bg-violet-600 transition duration-200 rounded-full"
              href="#"
            >
              SIGN UP
            </a>
          </div>
        </nav>
      </div>
    </section>
  );
}

export default HeroSection;
import { useState } from "react";

function HeroSection() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <section
      x-data={{ mobileNavOpen }}
      className="relative bg-body overflow-hidden"
    >
      <nav className="relative z-10 py-7">
        <div className="container mx-auto px-4">
          <div className="relative flex items-center justify-between">
            <a className="inline-block" href="#">
              <img
                className="h-10"
                src="casper-assets/logos/casper-logo-white.svg"
                alt=""
              />
            </a>
            <div className="flex items-center justify-end">
              <div className="hidden lg:block mr-10">
                <a
                  className="inline-flex py-2 px-4 mr-4 items-center justify-center text-sm font-medium uppercase text-white hover:text-violet-500"
                  href="#"
                >
                  SIGN IN
                </a>
                <a
                  className="inline-flex h-11 py-2 px-4 items-center justify-center text-sm font-medium uppercase text-black hover:text-white bg-violet-500 hover:bg-violet-600 transition duration-200 rounded-full"
                  href="#"
                >
                  SIGN UP
                </a>
              </div>
              <button
                onClick={() => setMobileNavOpen(!mobileNavOpen)}
                className="text-white hover:text-violet-500"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 16H29"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M3 8H29"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M20 24L29 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div className="relative pt-24 lg:pt-44 pb-40 lg:pb-72">
        <div className="relative z-10 container mx-auto px-4">
          <div className="flex flex-wrap -mx-4 items-center">
            <div className="w-full lg:w-1/2 xl:w-3/5 px-4 mb-32 lg:mb-0">
              <div className="max-w-md mx-auto lg:max-w-none">
                <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl xl:text-8xl text-white font-semibold leading-none mb-8">
                  INTRODUCING CASPER AI
                </h1>
                <p className="text-2xl text-gray-400 mb-8">
                  <span className="block">Welcome to ChatBotX -</span>
                  <span className="block">
                    Your Intelligent AI Chat Assistant!
                  </span>
                </p>
                <a
                  className="group inline-flex h-14 px-7 items-center justify-center text-base font-medium text-black hover:text-white bg-violet-500 hover:bg-violet-600 transition duration-200 rounded-full"
                  href="#"
                >
                  <span className="mr-2">TRY IT FOR FREE</span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.9199 6.62C17.8185 6.37565 17.6243 6.18147 17.3799 6.08C17.2597 6.02876 17.1306 6.00158 16.9999 6H6.99994C6.73472 6 6.48037 6.10536 6.29283 6.29289C6.1053 6.48043 5.99994 6.73478 5.99994 7C5.99994 7.26522 6.1053 7.51957 6.29283 7.70711C6.48037 7.89464 6.73472 8 6.99994 8H14.5899L6.28994 16.29C6.19621 16.383 6.12182 16.4936 6.07105 16.6154C6.02028 16.7373 5.99414 16.868 5.99414 17C5.99414 17.132 6.02028 17.2627 6.07105 17.3846C6.12182 17.5064 6.19621 17.617 6.28994 17.71C6.3829 17.8037 6.4935 17.8781 6.61536 17.9289C6.73722 17.9797 6.86793 18.0058 6.99994 18.0058C7.13195 18.0058 7.26266 17.9797 7.38452 17.9289C7.50638 17.8781 7.61698 17.8037 7.70994 17.71L15.9999 9.41V17C15.9999 17.2652 16.1053 17.5196 16.2928 17.7071C16.4804 17.8946 16.7347 18 16.9999 18C17.2652 18 17.5195 17.8946 17.707 17.7071C17.8946 17.5196 17.9999 17.2652 17.9999 17V7C17.9984 6.86932 17.9712 6.74022 17.9199 6.62Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="w-full lg:w-1/2 xl:w-2/5 px-4">
              <div className="xl:inline-block relative">
                <img
                  className="absolute top-0 right-0 -mt-8 mr-12 animate-spinStar"
                  src="casper-assets/headers/blink-sm.png"
                  alt=""
                />
                <img
                  className="absolute bottom-0 left-0 lg:-ml-24 xl:-ml-40 animate-spinStar"
                  src="casper-assets/headers/blink-md.png"
                  alt=""
                />
                <img
                  className="block px-10 md:px-0 mx-auto lg:mr-0"
                  src="casper-assets/headers/oval-robot-photo.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute bottom-0 left-0 w-full"
          src="casper-assets/headers/bg-bottom-lines.png"
          alt=""
        />
      </div>
      <div
        className={`fixed top-0 left-0 bottom-0 w-5/6 max-w-md z-50 ${
          mobileNavOpen ? "block" : "hidden"
        }`}
      >
        <div
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
          className="fixed inset-0 bg-violet-900 opacity-20"
        ></div>
        <nav className="relative flex flex-col py-7 px-10 w-full h-full bg-white overflow-y-auto">
          <div className="flex mb-auto items-center">
            <a className="inline-block mr-auto" href="#">
              <img
                className="h-10"
                src="casper-assets/logos/casper-logo.svg"
                alt=""
              />
            </a>
            <button onClick={() => setMobileNavOpen(!mobileNavOpen)}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 18L18 6M6 6L18 18"
                  stroke="#111827"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
          </div>
          <div className="py-12 mb-auto">
            <ul className="flex-col">
              <li className="mb-6">
                <a
                  className="inline-block text-base text-black font-medium uppercase"
                  href="#"
                >
                  FEATURED
                </a>
              </li>
              <li className="mb-6">
                <a
                  className="inline-block text-base text-black font-medium uppercase"
                  href="#"
                >
                  SOLUTIONS
                </a>
              </li>
              <li className="mb-6">
                <a
                  className="inline-block text-base text-black font-medium uppercase"
                  href="#"
                >
                  PRODUCTS
                </a>
              </li>
              <li>
                <a
                  className="inline-block text-base text-black font-medium uppercase"
                  href="#"
                >
                  ARTICLES
                </a>
              </li>
            </ul>
          </div>
          <div>
            <a
              className="flex py-2 px-4 mb-4 items-center justify-center text-sm font-medium uppercase text-violet-900 hover:text-violet-500"
              href="#"
            >
              SIGN IN
            </a>
            <a
              className="flex h-11 py-2 px-4 items-center justify-center text-sm font-medium uppercase text-black hover:text-white bg-violet-500 hover:bg-violet-600 transition duration-200 rounded-full"
              href="#"
            >
              SIGN UP
            </a>
          </div>
        </nav>
      </div>
    </section>
  );
}

export default HeroSection;
