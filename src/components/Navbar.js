import React from "react";

function Navbar() {
  return (
    <header class="scrolled z-30 shadow-2xl border-b-0 text-gray-400 bg-gray-950 body-font fixed flex w-full  items-center justify-between flex-wrap  m-auto top-0 animated">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span class="ml-3 text-xl">
            <span>D&W</span>tech
          </span>
        </a>
        <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a class="mr-5 hover:text-white">Home</a>
          <a class="mr-5 hover:text-white">About Us</a>
          <a class="mr-5 hover:text-white">Work</a>
          <a class="mr-5 hover:text-white">Services</a>
          <a class="mr-5 hover:text-white">Contact Us</a>
        </nav>
        <button class="inline-flex items-center bg-gray-800 border-0 py-3 px-4 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          Let's Start
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-5 h-5 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
