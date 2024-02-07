import React from "react";

function FooterSection() {
  return (
    <footer class="text-gray-400 bg-gray-900 body-font">
      <div class="container px-20 py-24 mx-auto flex md:items-center lg:items-start md:flex-col md:flex-nowrap flex-wrap flex-col">
        <div class="w-64 flex-shrink-0  md:mx-0 mx-auto text-center md:text-left">
          <a class="flex title-font font-medium items-center md:justify-start justify-center text-white">
            <svg
              class="h-6 w-6 text-red-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <polyline points="19 1 23 5 19 9" />{" "}
              <line x1="15" y1="5" x2="23" y2="5" />{" "}
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              {/* <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path> */}
            </svg>
            <span class="ml-3 text-xl">D&Wtech</span>
          </a>
          {/* <p class="mt-2 text-sm text-gray-500">
            Air plant banjo lyft occupy retro adaptogen indego
          </p> */}
        </div>
        <div class="flex-grow flex  justify-between flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div class="lg:w-2/5 md:w-1/2 w-full px-4">
            <h2 class="title-font font-medium text-white tracking-widest text-2xl mb-8 hover:text-orange-600 hover:text-xl">
              Vision & Mission
            </h2>
            <nav class="list-none mb-10 text-base flex flex-col gap-8">
              <li>
                <p class="text-white hover:text-xl">
                  Our vision is to realize a world in which empathy is the
                  means, understanding is the norm and synergy is the outcome.
                </p>
              </li>
              <li>
                <p class="text-white hover:text-xl">
                  Our mission is to leverage our multi-modal service offerings
                  to empower anyone who wishes to effectively convey a strong,
                  noble message.
                </p>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-medium text-white tracking-widest text-2xl mb-8 hover:text-orange-600 hover:text-xl">
              Contact Us
            </h2>
            <nav class="list-none mb-10 text-lg">
              <li>
                <a class="flex title-font font-medium items-center md:justify-start justify-center text-orange-500 hover:text-white">
                  <svg
                    class="h-7 w-5 text-orange-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    {" "}
                    <polyline points="19 1 23 5 19 9" />{" "}
                    <line x1="15" y1="5" x2="23" y2="5" />{" "}
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    {/* <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path> */}
                  </svg>
                  <span class="ml-1 text-sm ">
                    +91 70308 78963 +91 97677 22793
                  </span>
                </a>
              </li>
              <li>
                <a class="flex title-font font-medium items-center md:justify-start justify-center text-orange-500 hover:text-white">
                  <svg
                    class="h-8 w-7 text-orange-500"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    {" "}
                    <path stroke="none" d="M0 0h24v24H0z" />{" "}
                    <path d="M12 20l-3 -3h-2a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-2l-3 3" />{" "}
                    <line x1="8" y1="9" x2="16" y2="9" />{" "}
                    <line x1="8" y1="13" x2="14" y2="13" />
                    {/* <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path> */}
                  </svg>
                  <span class="ml-1 ">hello@dnwtechsolutions.in</span>
                </a>
              </li>
              <li>
                <a class="text-orange-500 hover:text-white"></a>

                <a class="flex title-font font-medium items-center md:justify-start justify-center text-orange-500 hover:text-white">
                  <svg
                    class="h-8 w-7 "
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    {" "}
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />{" "}
                    <circle cx="12" cy="10" r="3" />
                  </svg>

                  <span class="ml-1 font-bold "> Park Me Safe Sol.Pvt Ltd</span>
                </a>
              </li>
              <li>
                <a class="text-orange-500 hover:text-white">Gadge Nagar,</a>

                <a class="text-orange-500 hover:text-white">
                  Amravati,Maharashtra,India
                </a>

                <a class="text-orange-500 hover:text-white">444808</a>
              </li>
            </nav>
          </div>

          <div class="lg:w-1/4 md:w-1/2 w-full px-4 ">
            <h2 class="title-font font-medium text-white tracking-widest text-2xl mb-8 hover:text-orange-600 hover:text-xl">
              Navigation
            </h2>
            <nav class="list-none mb-10 text-lg">
              <li>
                <a class="text-gray-400 hover:text-green-600 hover:text-xl">
                  Home About Us Works
                </a>
              </li>
              <li>
                <a class="text-gray-400 hover:text-green-600 hover:text-xl">
                  Our Services Contact Us
                </a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div class="bg-gray-800 hover:bg-orange-500  bg-opacity-90">
        <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row ">
          <p class="text-gray-400  hover:text-white hover:text-xl text-sm text-center sm:text-left">
            Copyright © 2023 D&W tech All rights reserved.
            <a
              href="https://twitter.com/knyttneve"
              rel="noopener noreferrer"
              class="text-gray-500  ml-1"
              target="_blank"
            >
              @dnwtechsolutions
            </a>
          </p>
          <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a class="text-gray-400  hover:text-green-600 hover:scale-150">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-7 h-8"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-400 hover:text-green-600 hover:scale-150">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-7 h-8"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-400  hover:text-green-600 hover:scale-150">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-7 h-8"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-400  hover:text-green-600 hover:scale-150">
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                class="w-7 h-8"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
