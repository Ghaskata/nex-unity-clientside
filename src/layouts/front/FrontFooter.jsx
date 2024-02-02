import React from "react";
import { Link } from "react-router-dom";

const FrontFooter = () => {
  return (
    <footer className="footer fototer_warraper bg-backgroundv2">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <Link
          to="/"
          className="flex justify-center items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            NexUnity
          </span>
        </Link>
        <ul className="flex flex-wrap justify-center items-center m-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
          <li>
            <Link to="/" className="hover:underline me-4 md:me-6">
              About
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:underline me-4 md:me-6">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:underline me-4 md:me-6">
              Licensing
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 text-center dark:text-gray-400">
          © 2023{" "}
          <a href="" className="hover:underline underline-offset-4">
            Flowbite™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default FrontFooter;
