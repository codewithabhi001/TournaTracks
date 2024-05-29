import React from "react";

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-12 mx-auto">
        <Newsletter />
        <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <QuickLinks />
          <Industries />
          <Services />
          <Contact />
        </div>
        <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />
        <LogoAndCopyright />
      </div>
    </footer>
  );
};

// Newsletter Component
const Newsletter = () => {
  return (
    <div className="md:flex md:-mx-3 md:items-center md:justify-between">
      <h1 className="text-xl font-semibold tracking-tight text-gray-800 md:mx-3 xl:text-2xl dark:text-white">
        Subscribe our newsletter to get update.
      </h1>
      <div className="mt-6 md:mx-3 shrink-0 md:mt-0 md:w-auto">
        <a
          href="#"
          className="inline-flex items-center justify-center w-full px-4 py-2 text-sm text-white duration-300 bg-gray-800 rounded-lg gap-x-3 hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80"
        >
          <span>Sign Up Now</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

// Quick Links Component
const QuickLinks = () => {
  return (
    <div>
      <p className="font-semibold text-gray-800 dark:text-white">Quick Link</p>
      <div className="flex flex-col items-start mt-5 space-y-2">
        <a
          href="#"
          className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
        >
          Home
        </a>
        <a
          href="#"
          className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
        >
          Who We Are
        </a>
        <a
          href="#"
          className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
        >
          Our Philosophy
        </a>
      </div>
    </div>
  );
};

// Define Industries, Services, and Contact components similarly

// Logo and Copyright Component
const LogoAndCopyright = () => {
  return (
    <div className="flex flex-col items-center justify-between sm:flex-row">
      <a href="#">
        <img
          className="w-auto h-7"
          src="https://merakiui.com/images/full-logo.svg"
          alt=""
        />
      </a>
      <p className="mt-4 text-sm text-gray-500 sm:mt-0 dark:text-gray-300">
        © Copyright 2021. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
