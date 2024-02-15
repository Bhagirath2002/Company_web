import React, { useState } from "react";
import { Link } from "react-router-dom";

const PortfolioSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleTranslateClick = () => {
    console.log("Translate clicked");
  };

  const handleRotateClick = () => {
    console.log("Rotate clicked");
  };

  const handleScaleClick = () => {
    console.log("Scale clicked");
  };

  return (
    <section className="py-24 pb-[200px] bg-stone">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl font-extrabold text-dark">OUR PORTFOLIO</h1>
        <p className="mt-4 text-xl text-slate-800 font-medium">
          Take A Look At Our Latest Work
        </p>
        <h4 className="uppercase text-slate-800 font-semibold">Web Development</h4>
        <div className="flex gap-8 flex-col justify-center items-center bg-gray-500 h-screen py-10">
          <div className="flex flex-row gap-8">
            <a
              href="https://www.guhejeweller.com/"
              // target="_blank"
              className={`relative transform rounded-xl h-40 w-40 sm:h-64 sm:w-64 bg-city1 bg-cover shadow-xl transition duration-300 hover:scale-105 cursor-pointer group ${
                hoveredCard === "scale" && "bg-opacity-50"
              }`}
              onMouseEnter={() => setHoveredCard("scale")}
              onMouseLeave={() => setHoveredCard(null)}
              // onClick={handleScaleClick}
              // style={{
              //   backgroundImage: "url(../assets/city1.jpg)",
              //   backgroundSize: "cover",
              //   backgroundPosition: "center",
              // }}
            >
              <div className="flex h-full justify-center items-center">
                <span className="font-bold text-red-500">Scale</span>
                {hoveredCard === "scale" && (
                  <button
                    className="absolute bottom-0 transform translate-y-full left-1/2 -translate-x-1/2 transition duration-300 bg-blue-500 text-white px-4 py-2 rounded-md"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleScaleClick();
                    }}
                  >
                    Translate
                  </button>
                )}
              </div>
            </a>

            {/* <a
              href="https://dnynankur.netlify.app/"
              // target="_blank"
              className={`relative transform rounded-xl h-40 w-40 sm:h-64 sm:w-64 bg-city2 bg-cover shadow-xl transition duration-300 hover:rotate-180 cursor-pointer group ${
                hoveredCard === "rotate" && "bg-opacity-50"
              }`}
              onMouseEnter={() => setHoveredCard("rotate")}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={handleRotateClick}
            >
              <div className="flex h-full justify-center items-center">
                <span className="font-bold text-green-600">Rotate</span>
                {hoveredCard === "rotate" && (
                  <button
                    className="absolute bottom-0 transform translate-y-full left-1/2 -translate-x-1/2 transition duration-300 bg-blue-500 text-white px-4 py-2 rounded-md"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRotateClick();
                    }}
                  >
                    Translate
                  </button>
                )}
              </div>
            </a> */}

            <a
              href="https://writteit.com/"
              // target="_blank"
              className={`relative transform rounded-xl h-40 w-40 sm:h-64 sm:w-64 bg-city3 bg-cover shadow-xl transition duration-300 hover:translate-x-4 cursor-pointer group ${
                hoveredCard === "translate" && "bg-opacity-50"
              }`}
              onMouseEnter={() => setHoveredCard("translate")}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={handleTranslateClick}
            >
              <div className="flex h-full justify-center items-center">
                <span className="font-bold text-amber-500">Translate</span>
                {hoveredCard === "translate" && (
                  <button
                    className="absolute bottom-0 transform translate-y-full left-1/2 -translate-x-1/2 transition duration-300 bg-blue-500 text-white px-4 py-2 rounded-md"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleTranslateClick();
                    }}
                  >
                    Translate
                  </button>
                )}
              </div>
            </a>

            <a
              href="https://www.guhejeweller.com/"
              // target="_blank"
              className={`relative transform rounded-xl h-40 w-40 sm:h-64 sm:w-64 bg-city1 bg-cover shadow-xl transition duration-300 hover:scale-105 cursor-pointer group ${
                hoveredCard === "scale" && "bg-opacity-50"
              }`}
              onMouseEnter={() => setHoveredCard("scale")}
              onMouseLeave={() => setHoveredCard(null)}
              // onClick={handleScaleClick}
              // style={{
              //   backgroundImage: "url(../assets/city1.jpg)",
              //   backgroundSize: "cover",
              //   backgroundPosition: "center",
              // }}
            >
              <div className="flex h-full justify-center items-center">
                <span className="font-bold text-red-500">Scale</span>
                {hoveredCard === "scale" && (
                  <button
                    className="absolute bottom-0 transform translate-y-full left-1/2 -translate-x-1/2 transition duration-300 bg-blue-500 text-white px-4 py-2 rounded-md"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleScaleClick();
                    }}
                  >
                    Translate
                  </button>
                )}
              </div>
            </a>
          </div>

          <div className="flex  gap-8 items-end">
            <a
              href="https://www.shivaydigital.shop/"
              // target="_blank"
              className={`relative transform rounded-xl h-40 w-40 sm:h-64 sm:w-64 bg-planet1 bg-cover shadow-xl transition duration-300 hover:translate-x-4 cursor-pointer group ${
                hoveredCard === "secondTranslate" && "bg-opacity-50"
              }`}
              onMouseEnter={() => setHoveredCard("secondTranslate")}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={handleTranslateClick}
            >
              <div className="flex h-full justify-center items-center">
                <span className="font-bold text-amber-500">Translate</span>
                {hoveredCard === "secondTranslate" && (
                  <button
                    className="absolute bottom-0 transform translate-y-full left-1/2 -translate-x-1/2 transition duration-300 bg-blue-500 text-white px-4 py-2 rounded-md"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleTranslateClick();
                    }}
                  >
                    Translate
                  </button>
                )}
              </div>
            </a>
            <a
              href="https://www.guhejeweller.com/"
              // target="_blank"
              className={`relative transform rounded-xl h-40 w-40 sm:h-64 sm:w-64 bg-city1 bg-cover shadow-xl transition duration-300 hover:scale-105 cursor-pointer group ${
                hoveredCard === "scale" && "bg-opacity-50"
              }`}
              onMouseEnter={() => setHoveredCard("scale")}
              onMouseLeave={() => setHoveredCard(null)}
              // onClick={handleScaleClick}
              // style={{
              //   backgroundImage: "url(../assets/city1.jpg)",
              //   backgroundSize: "cover",
              //   backgroundPosition: "center",
              // }}
            >
              <div className="flex h-full justify-center items-center">
                <span className="font-bold text-red-500">Scale</span>
                {hoveredCard === "scale" && (
                  <button
                    className="absolute bottom-0 transform translate-y-full left-1/2 -translate-x-1/2 transition duration-300 bg-blue-500 text-white px-4 py-2 rounded-md"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleScaleClick();
                    }}
                  >
                    Translate
                  </button>
                )}
              </div>
            </a>
            <a
              href="https://www.guhejeweller.com/"
              // target="_blank"
              className={`relative transform rounded-xl h-40 w-40 sm:h-64 sm:w-64 bg-city1 bg-cover shadow-xl transition duration-300 hover:scale-105 cursor-pointer group ${
                hoveredCard === "scale" && "bg-opacity-50"
              }`}
              onMouseEnter={() => setHoveredCard("scale")}
              onMouseLeave={() => setHoveredCard(null)}
              // onClick={handleScaleClick}
              // style={{
              //   backgroundImage: "url(../assets/city1.jpg)",
              //   backgroundSize: "cover",
              //   backgroundPosition: "center",
              // }}
            >
              <div className="flex h-full justify-center items-center">
                <span className="font-bold text-red-500">Scale</span>
                {hoveredCard === "scale" && (
                  <button
                    className="absolute bottom-0 transform translate-y-full left-1/2 -translate-x-1/2 transition duration-300 bg-blue-500 text-white px-4 py-2 rounded-md"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleScaleClick();
                    }}
                  >
                    Translate
                  </button>
                )}
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;

// <section className="py-24 pb-[200px] bg-gradient-to-r from-blue-500 to-red-500">
//   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//     <h1 className="text-3xl font-extrabold text-white">OUR PORTFOLIO</h1>
//     <p className="mt-4 text-xl text-gray-300">
//       Take A Look At Our Latest Work
//     </p>
//     <h4 className=" uppercase">Web Development</h4>
//     <div class="flex gap-8  flex-col  justify-center items-center bg-gray-500 h-screen py-10">
//       <div className="flex flex-row gap-8">
//         <div class="transform  rounded-xl h-40 w-40 sm:h-64 sm:w-64 bg-white shadow-xl transition duration-300 hover:scale-105">
//           <div class="flex h-full justify-center items-center">
//             <span class="font-bold text-gray-500">Scale</span>
//           </div>
//         </div>

//         <div class="transform  rounded-xl h-40 w-40 sm:h-64 sm:w-64 bg-white shadow-xl transition duration-300 hover:rotate-180">
//           <div class="flex h-full justify-center items-center">
//             <span class="font-bold text-green-600">Rotate</span>
//           </div>
//         </div>

//         <div class="transform rounded-xl h-40 w-40 sm:h-64 sm:w-64 bg-white shadow-xl transition duration-300 hover:translate-x-4">
//           <div class="flex h-full justify-center items-center">
//             <span class="font-bold text-amber-500">Translate</span>
//           </div>
//         </div>
//       </div>
//       <div className="flex items-end">
//         <div class="transform rounded-xl h-40 w-40 sm:h-64 sm:w-64 bg-white shadow-xl transition duration-300 hover:translate-x-4">
//           <div class="flex h-full justify-center items-center">
//             <span class="font-bold text-amber-500">Translate</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>
