import React from "react";

function OurPortfolioSection() {
  return (
    <section className="py-24 pb-[200px] bg-gradient-to-r from-blue-500 to-red-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl font-extrabold text-white">OUR PORTFOLIO</h1>
        <p className="mt-4 text-xl text-gray-300">
          Take A Look At Our Latest Work
        </p>
        <h4 className=" uppercase">Web Development</h4>
        <div class="flex gap-8  flex-col  justify-center items-center bg-gray-500 h-screen py-10">
          <div className="flex flex-row gap-8">
            <div class="transform  rounded-xl h-40 w-40 sm:h-64 sm:w-64 bg-white shadow-xl transition duration-300 hover:scale-105">
              <div class="flex h-full justify-center items-center">
                <span class="font-bold text-gray-500">Scale</span>
              </div>
            </div>

            <div class="transform  rounded-xl h-40 w-40 sm:h-64 sm:w-64 bg-white shadow-xl transition duration-300 hover:rotate-180">
              <div class="flex h-full justify-center items-center">
                <span class="font-bold text-green-600">Rotate</span>
              </div>
            </div>

            <div class="transform rounded-xl h-40 w-40 sm:h-64 sm:w-64 bg-white shadow-xl transition duration-300 hover:translate-x-4">
              <div class="flex h-full justify-center items-center">
                <span class="font-bold text-amber-500">Translate</span>
              </div>
            </div>
          </div>
          <div className="flex items-end">
            <div class="transform rounded-xl h-40 w-40 sm:h-64 sm:w-64 bg-white shadow-xl transition duration-300 hover:translate-x-4">
              <div class="flex h-full justify-center items-center">
                <span class="font-bold text-amber-500">Translate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurPortfolioSection;
// flex-wrap justify-center items-center
// bg-gradient-to-r from-purple-800 to-indigo-800
