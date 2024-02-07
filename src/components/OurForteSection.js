import React from "react";
import { motion } from "framer-motion";

function OurForteSection() {
  return (
    <div>
      <section className=" py-40 pb-[200px] bg-gradient-to-r from-blue-500 to-red-500">
        <div className=" max-w-7xl mx-auto px-10 sm:px-6 lg:px-8 text-justify">
          <div class="flex flex-row gap-5   justify-center items-center bg-gray-500 h-screen py-6">
            <div className="flex flex-col gap-5">
              <div className="">
                <h1 className="text-5xl font-extrabold text-orange-500">
                  OUR FORTE
                </h1>
                <p className="mt-4 text-2xl font-semibold text-gray-300">
                  Making Website that boost your Business
                </p>
              </div>
              <section className=" px-4 py-12">
                <div className="mx-auto w-fit">
                  <motion.div
                    whileHover="hover"
                    transition={{
                      duration: 1,
                      ease: "backInOut",
                    }}
                    variants={{
                      hover: {
                        scale: 1.05,
                      },
                    }}
                    className="relative h-96 w-80 shrink-0 overflow-hidden rounded-xl bg-gradient-to-r from-blue-500 to-red-500 p-6"
                  >
                    <div className="relative z-10 text-white">
                      <span className="mb-3 block w-fit rounded-full bg-white/30 px-3 py-0.5 text-sm font-light text-white">
                        Pro
                      </span>
                      <motion.span
                        initial={{ scale: 0.85 }}
                        variants={{
                          hover: {
                            scale: 1,
                          },
                        }}
                        transition={{
                          duration: 1,
                          ease: "backInOut",
                        }}
                        className="my-2 block origin-top-left font-mono text-5xl font-black leading-[1.2]"
                      >
                        E-Commerce Platform
                      </motion.span>
                      <p>
                        We studies everything - target buyers, their pain
                        points, your product and its direct and indirect
                        benefits. We even play the devil's advocate on occasion.
                        All this to craft a strong sales that wins battles for
                        you.
                      </p>
                    </div>
                    {/* <button className="absolute bottom-4 left-4 right-4 z-20 rounded border-2 border-white bg-white py-2 text-center font-mono font-black uppercase text-neutral-800 backdrop-blur transition-colors hover:bg-white/30 hover:text-white">
                      Get it now
                    </button> */}

                    <motion.svg
                      width="320"
                      height="384"
                      viewBox="0 0 320 384"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute inset-0 z-0"
                      variants={{
                        hover: {
                          scale: 1.5,
                        },
                      }}
                      transition={{
                        duration: 1,
                        ease: "backInOut",
                      }}
                    >
                      <motion.circle
                        variants={{
                          hover: {
                            scaleY: 0.5,
                            y: -25,
                          },
                        }}
                        transition={{
                          duration: 1,
                          ease: "backInOut",
                          delay: 0.2,
                        }}
                        cx="160.5"
                        cy="114.5"
                        r="101.5"
                        fill="#262626"
                      />
                      <motion.ellipse
                        variants={{
                          hover: {
                            scaleY: 2.25,
                            y: -25,
                          },
                        }}
                        transition={{
                          duration: 1,
                          ease: "backInOut",
                          delay: 0.2,
                        }}
                        cx="160.5"
                        cy="265.5"
                        rx="101.5"
                        ry="43.5"
                        fill="#262626"
                      />
                    </motion.svg>
                  </motion.div>
                </div>
              </section>
            </div>

            <div className="">
              <section className=" px-4 py-12">
                <div className="mx-auto w-fit">
                  {/* <Card /> */}
                  <motion.div
                    whileHover="hover"
                    transition={{
                      duration: 1,
                      ease: "backInOut",
                    }}
                    variants={{
                      hover: {
                        scale: 1.05,
                      },
                    }}
                    className="relative h-96 w-80 shrink-0 overflow-hidden rounded-xl bg-gradient-to-r from-orange-500 to-red-500 p-6"
                  >
                    <div className="relative z-10 text-white">
                      {/* <span className="mb-3 block w-fit rounded-full bg-white/30 px-3 py-0.5 text-sm font-light text-white">
                        Pro
                      </span> */}
                      <a class=" bg-slate-100 rounded-full">
                        <svg
                          class="h-10 w-5 text-green-500"
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
                      </a>
                      <motion.span
                        initial={{ scale: 0.85 }}
                        variants={{
                          hover: {
                            scale: 1,
                          },
                        }}
                        transition={{
                          duration: 1,
                          ease: "backInOut",
                        }}
                        className="my-2 block origin-top-left font-mono text-5xl font-black leading-[1.2]"
                      >
                        Edu-tech Platform
                      </motion.span>
                      <p>
                        Seeing through your learners glasses, we shape your
                        edu-tech business idea with its USP's, financials and
                        growth plans into the next happening thing in town that
                        they'd be excited join as learner.
                      </p>
                    </div>
                    {/* <button className="absolute bottom-4 left-4 right-4 z-20 rounded border-2 border-white bg-white py-2 text-center font-mono font-black uppercase text-neutral-800 backdrop-blur transition-colors hover:bg-white/30 hover:text-white">
                      Get it now
                    </button> */}
                    {/* <Background /> */}
                    <motion.svg
                      width="320"
                      height="384"
                      viewBox="0 0 320 384"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute inset-0 z-0"
                      variants={{
                        hover: {
                          scale: 1.5,
                        },
                      }}
                      transition={{
                        duration: 1,
                        ease: "backInOut",
                      }}
                    >
                      <motion.circle
                        variants={{
                          hover: {
                            scaleY: 0.5,
                            y: -25,
                          },
                        }}
                        transition={{
                          duration: 1,
                          ease: "backInOut",
                          delay: 0.2,
                        }}
                        cx="160.5"
                        cy="114.5"
                        r="101.5"
                        fill="#262626"
                      />
                      <motion.ellipse
                        variants={{
                          hover: {
                            scaleY: 2.25,
                            y: -25,
                          },
                        }}
                        transition={{
                          duration: 1,
                          ease: "backInOut",
                          delay: 0.2,
                        }}
                        cx="160.5"
                        cy="265.5"
                        rx="101.5"
                        ry="43.5"
                        fill="#262626"
                      />
                    </motion.svg>
                  </motion.div>
                </div>
              </section>

              <section className=" px-4 py-12">
                <div className="mx-auto w-fit">
                  <motion.div
                    whileHover="hover"
                    transition={{
                      duration: 1,
                      ease: "backInOut",
                    }}
                    variants={{
                      hover: {
                        scale: 1.05,
                      },
                    }}
                    className="relative h-96 w-80 shrink-0 overflow-hidden rounded-xl bg-gradient-to-r from-purple-800 to-indigo-800
                    p-6"
                  >
                    <div className="relative z-10 text-white">
                      <span className="mb-3 block w-fit rounded-full bg-white/30 px-3 py-0.5 text-sm font-light text-white">
                        Pro
                      </span>
                      <motion.span
                        initial={{ scale: 0.85 }}
                        variants={{
                          hover: {
                            scale: 1,
                          },
                        }}
                        transition={{
                          duration: 1,
                          ease: "backInOut",
                        }}
                        className="my-2 block origin-top-left font-mono text-5xl font-black leading-[1.2]"
                      >
                        E-Commerce Platform
                      </motion.span>
                      <p>
                        We studies everything - target buyers, their pain
                        points, your product and its direct and indirect
                        benefits. We even play the devil's advocate on occasion.
                        All this to craft a strong sales that wins battles for
                        you.
                      </p>
                    </div>
                    {/* <button className="absolute bottom-4 left-4 right-4 z-20 rounded border-2 border-white bg-white py-2 text-center font-mono font-black uppercase text-neutral-800 backdrop-blur transition-colors hover:bg-white/30 hover:text-white">
                      Get it now
                    </button> */}

                    <motion.svg
                      width="320"
                      height="384"
                      viewBox="0 0 320 384"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute inset-0 z-0"
                      variants={{
                        hover: {
                          scale: 1.5,
                        },
                      }}
                      transition={{
                        duration: 1,
                        ease: "backInOut",
                      }}
                    >
                      <motion.circle
                        variants={{
                          hover: {
                            scaleY: 0.5,
                            y: -25,
                          },
                        }}
                        transition={{
                          duration: 1,
                          ease: "backInOut",
                          delay: 0.2,
                        }}
                        cx="160.5"
                        cy="114.5"
                        r="101.5"
                        fill="#262626"
                      />
                      <motion.ellipse
                        variants={{
                          hover: {
                            scaleY: 2.25,
                            y: -25,
                          },
                        }}
                        transition={{
                          duration: 1,
                          ease: "backInOut",
                          delay: 0.2,
                        }}
                        cx="160.5"
                        cy="265.5"
                        rx="101.5"
                        ry="43.5"
                        fill="#262626"
                      />
                    </motion.svg>
                  </motion.div>
                </div>
              </section>
            </div>

            <div className=" ">
              <section className=" px-4 py-12">
                <div className="mx-auto w-fit">
                  <motion.div
                    whileHover="hover"
                    transition={{
                      duration: 1,
                      ease: "backInOut",
                    }}
                    variants={{
                      hover: {
                        scale: 1.05,
                      },
                    }}
                    className="relative h-96 w-80 shrink-0 overflow-hidden rounded-xl bg-gradient-to-r from-purple-800 to-green-800
                    p-6"
                  >
                    <div className="relative z-10 text-white">
                      <span className="mb-3 block w-fit rounded-full bg-white/30 px-3 py-0.5 text-sm font-light text-white">
                        Pro
                      </span>
                      <motion.span
                        initial={{ scale: 0.85 }}
                        variants={{
                          hover: {
                            scale: 1,
                          },
                        }}
                        transition={{
                          duration: 1,
                          ease: "backInOut",
                        }}
                        className="my-2 block origin-top-left font-mono text-5xl font-black leading-[1.2]"
                      >
                        Digital Marketing
                      </motion.span>
                      <p>
                        Robotic arms, FMCG goods, digital apps : whatever be
                        your solution area, tech- and business-savvy
                        wraper-effect revels in seeing it from all angles.
                        Clients have opined that we helped them see their own
                        products in a new light!
                      </p>
                    </div>
                    {/* <button className="absolute bottom-4 left-4 right-4 z-20 rounded border-2 border-white bg-white py-2 text-center font-mono font-black uppercase text-neutral-800 backdrop-blur transition-colors hover:bg-white/30 hover:text-white">
                      Get it now
                    </button> */}

                    <motion.svg
                      width="320"
                      height="384"
                      viewBox="0 0 320 384"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute inset-0 z-0"
                      variants={{
                        hover: {
                          scale: 1.5,
                        },
                      }}
                      transition={{
                        duration: 1,
                        ease: "backInOut",
                      }}
                    >
                      <motion.circle
                        variants={{
                          hover: {
                            scaleY: 0.5,
                            y: -25,
                          },
                        }}
                        transition={{
                          duration: 1,
                          ease: "backInOut",
                          delay: 0.2,
                        }}
                        cx="160.5"
                        cy="114.5"
                        r="101.5"
                        fill="#262626"
                      />
                      <motion.ellipse
                        variants={{
                          hover: {
                            scaleY: 2.25,
                            y: -25,
                          },
                        }}
                        transition={{
                          duration: 1,
                          ease: "backInOut",
                          delay: 0.2,
                        }}
                        cx="160.5"
                        cy="265.5"
                        rx="101.5"
                        ry="43.5"
                        fill="#262626"
                      />
                    </motion.svg>
                  </motion.div>
                </div>
              </section>
              <section className=" px-4 py-12">
                <div className="mx-auto w-fit">
                  <motion.div
                    whileHover="hover"
                    transition={{
                      duration: 1,
                      ease: "backInOut",
                    }}
                    variants={{
                      hover: {
                        scale: 1.05,
                      },
                    }}
                    className="relative h-96 w-80 shrink-0 overflow-hidden rounded-xl bg-gradient-to-r from-yellow-500 to-pink-300
 p-6"
                  >
                    <div className="relative z-10 text-white">
                      <span className="mb-3 block w-fit rounded-full bg-white/30 px-3 py-0.5 text-sm font-light text-white">
                        Pro
                      </span>
                      <motion.span
                        initial={{ scale: 0.85 }}
                        variants={{
                          hover: {
                            scale: 1,
                          },
                        }}
                        transition={{
                          duration: 1,
                          ease: "backInOut",
                        }}
                        className="my-2 block origin-top-left font-mono text-5xl font-black leading-[1.2]"
                      >
                        Branding & Collateral Design
                      </motion.span>
                      <p>
                        Companies, like people, have their unique identity. At
                        Presentation Monk, we dive under the surface to find the
                        right match of themes, fonts and colors for you. We do
                        product labels, websites and office stationery branding.
                      </p>
                    </div>
                    {/* <button className="absolute bottom-4 left-4 right-4 z-20 rounded border-2 border-white bg-white py-2 text-center font-mono font-black uppercase text-neutral-800 backdrop-blur transition-colors hover:bg-white/30 hover:text-white">
                      Get it now
                    </button> */}

                    <motion.svg
                      width="320"
                      height="384"
                      viewBox="0 0 320 384"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute inset-0 z-0"
                      variants={{
                        hover: {
                          scale: 1.5,
                        },
                      }}
                      transition={{
                        duration: 1,
                        ease: "backInOut",
                      }}
                    >
                      <motion.circle
                        variants={{
                          hover: {
                            scaleY: 0.5,
                            y: -25,
                          },
                        }}
                        transition={{
                          duration: 1,
                          ease: "backInOut",
                          delay: 0.2,
                        }}
                        cx="160.5"
                        cy="114.5"
                        r="101.5"
                        fill="#262626"
                      />
                      <motion.ellipse
                        variants={{
                          hover: {
                            scaleY: 2.25,
                            y: -25,
                          },
                        }}
                        transition={{
                          duration: 1,
                          ease: "backInOut",
                          delay: 0.2,
                        }}
                        cx="160.5"
                        cy="265.5"
                        rx="101.5"
                        ry="43.5"
                        fill="#262626"
                      />
                    </motion.svg>
                  </motion.div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="bg-neutral-900 px-4 py-12">
        <div className="mx-auto w-fit">
          <motion.div
            whileHover="hover"
            transition={{
              duration: 1,
              ease: "backInOut",
            }}
            variants={{
              hover: {
                scale: 1.05,
              },
            }}
            className="relative h-96 w-80 shrink-0 overflow-hidden rounded-xl bg-indigo-500 p-8"
          >
            <div className="relative z-10 text-white">
              <span className="mb-3 block w-fit rounded-full bg-white/30 px-3 py-0.5 text-sm font-light text-white">
                Pro
              </span>
              <motion.span
                initial={{ scale: 0.85 }}
                variants={{
                  hover: {
                    scale: 1,
                  },
                }}
                transition={{
                  duration: 1,
                  ease: "backInOut",
                }}
                className="my-2 block origin-top-left font-mono text-6xl font-black leading-[1.2]"
              >
                $299/
                <br />
                Month
              </motion.span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Placeat, rem.
              </p>
            </div>
            <button className="absolute bottom-4 left-4 right-4 z-20 rounded border-2 border-white bg-white py-2 text-center font-mono font-black uppercase text-neutral-800 backdrop-blur transition-colors hover:bg-white/30 hover:text-white">
              Get it now
            </button>

            <motion.svg
              width="320"
              height="384"
              viewBox="0 0 320 384"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute inset-0 z-0"
              variants={{
                hover: {
                  scale: 1.5,
                },
              }}
              transition={{
                duration: 1,
                ease: "backInOut",
              }}
            >
              <motion.circle
                variants={{
                  hover: {
                    scaleY: 0.5,
                    y: -25,
                  },
                }}
                transition={{
                  duration: 1,
                  ease: "backInOut",
                  delay: 0.2,
                }}
                cx="160.5"
                cy="114.5"
                r="101.5"
                fill="#262626"
              />
              <motion.ellipse
                variants={{
                  hover: {
                    scaleY: 2.25,
                    y: -25,
                  },
                }}
                transition={{
                  duration: 1,
                  ease: "backInOut",
                  delay: 0.2,
                }}
                cx="160.5"
                cy="265.5"
                rx="101.5"
                ry="43.5"
                fill="#262626"
              />
            </motion.svg>
          </motion.div>
        </div>
      </section> */}
    </div>
  );
}

export default OurForteSection;

{
  /* <div>
<section className="py-24 pb-[200px] bg-gradient-to-r from-blue-500 to-red-500">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h1 className="text-3xl font-extrabold text-white">OUR PORTFOLIO</h1>
    <p className="mt-4 text-xl text-gray-300">
      Take A Look At Our Latest Work
    </p>
    <h4 className=" uppercase">Web Development</h4>
    <div class="flex gap-5  flex-col  justify-center items-center bg-gray-500 h-screen py-6">
      <div className="flex flex-row gap-8">
        <div className="">
          <section className=" px-4 py-12">
            <div className="mx-auto w-fit">
              
              <motion.div
                whileHover="hover"
                transition={{
                  duration: 1,
                  ease: "backInOut",
                }}
                variants={{
                  hover: {
                    scale: 1.05,
                  },
                }}
                className="relative h-96 w-80 shrink-0 overflow-hidden rounded-xl bg-indigo-500 p-8"
              >
                <div className="relative z-10 text-white">
                  <span className="mb-3 block w-fit rounded-full bg-white/30 px-3 py-0.5 text-sm font-light text-white">
                    Pro
                  </span>
                  <motion.span
                    initial={{ scale: 0.85 }}
                    variants={{
                      hover: {
                        scale: 1,
                      },
                    }}
                    transition={{
                      duration: 1,
                      ease: "backInOut",
                    }}
                    className="my-2 block origin-top-left font-mono text-6xl font-black leading-[1.2]"
                  >
                    $299/
                    <br />
                    Month
                  </motion.span>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Placeat, rem.
                  </p>
                </div>
                <button className="absolute bottom-4 left-4 right-4 z-20 rounded border-2 border-white bg-white py-2 text-center font-mono font-black uppercase text-neutral-800 backdrop-blur transition-colors hover:bg-white/30 hover:text-white">
                  Get it now
                </button>
                
                <motion.svg
                  width="320"
                  height="384"
                  viewBox="0 0 320 384"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-0 z-0"
                  variants={{
                    hover: {
                      scale: 1.5,
                    },
                  }}
                  transition={{
                    duration: 1,
                    ease: "backInOut",
                  }}
                >
                  <motion.circle
                    variants={{
                      hover: {
                        scaleY: 0.5,
                        y: -25,
                      },
                    }}
                    transition={{
                      duration: 1,
                      ease: "backInOut",
                      delay: 0.2,
                    }}
                    cx="160.5"
                    cy="114.5"
                    r="101.5"
                    fill="#262626"
                  />
                  <motion.ellipse
                    variants={{
                      hover: {
                        scaleY: 2.25,
                        y: -25,
                      },
                    }}
                    transition={{
                      duration: 1,
                      ease: "backInOut",
                      delay: 0.2,
                    }}
                    cx="160.5"
                    cy="265.5"
                    rx="101.5"
                    ry="43.5"
                    fill="#262626"
                  />
                </motion.svg>
              </motion.div>
            </div>
          </section>
          <div class="h-96 w-80 shrink-0 overflow-hidden rounded-xl bg-indigo-500 p-8   transform   sm:h-64 sm:w-64  shadow-xl transition duration-300 hover:rotate-180">
            <div class="flex h-full justify-center items-center">
              <span class="font-bold text-gray-500">Scale</span>
            </div>
          </div>
        </div>
        <div className="">
          <section className=" px-4 py-12">
            <div className="mx-auto w-fit">
              <motion.div
                whileHover="hover"
                transition={{
                  duration: 1,
                  ease: "backInOut",
                }}
                variants={{
                  hover: {
                    scale: 1.05,
                  },
                }}
                className="relative h-96 w-80 shrink-0 overflow-hidden rounded-xl bg-indigo-500 p-8"
              >
                <div className="relative z-10 text-white">
                  <span className="mb-3 block w-fit rounded-full bg-white/30 px-3 py-0.5 text-sm font-light text-white">
                    Pro
                  </span>
                  <motion.span
                    initial={{ scale: 0.85 }}
                    variants={{
                      hover: {
                        scale: 1,
                      },
                    }}
                    transition={{
                      duration: 1,
                      ease: "backInOut",
                    }}
                    className="my-2 block origin-top-left font-mono text-6xl font-black leading-[1.2]"
                  >
                    $299/
                    <br />
                    Month
                  </motion.span>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Placeat, rem.
                  </p>
                </div>
                <button className="absolute bottom-4 left-4 right-4 z-20 rounded border-2 border-white bg-white py-2 text-center font-mono font-black uppercase text-neutral-800 backdrop-blur transition-colors hover:bg-white/30 hover:text-white">
                  Get it now
                </button>

                <motion.svg
                  width="320"
                  height="384"
                  viewBox="0 0 320 384"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-0 z-0"
                  variants={{
                    hover: {
                      scale: 1.5,
                    },
                  }}
                  transition={{
                    duration: 1,
                    ease: "backInOut",
                  }}
                >
                  <motion.circle
                    variants={{
                      hover: {
                        scaleY: 0.5,
                        y: -25,
                      },
                    }}
                    transition={{
                      duration: 1,
                      ease: "backInOut",
                      delay: 0.2,
                    }}
                    cx="160.5"
                    cy="114.5"
                    r="101.5"
                    fill="#262626"
                  />
                  <motion.ellipse
                    variants={{
                      hover: {
                        scaleY: 2.25,
                        y: -25,
                      },
                    }}
                    transition={{
                      duration: 1,
                      ease: "backInOut",
                      delay: 0.2,
                    }}
                    cx="160.5"
                    cy="265.5"
                    rx="101.5"
                    ry="43.5"
                    fill="#262626"
                  />
                </motion.svg>
              </motion.div>
            </div>
          </section>
          <div class="h-96 w-80 shrink-0 overflow-hidden rounded-xl bg-indigo-500 p-8  transform   sm:h-64 sm:w-64 shadow-xl transition duration-300 hover:translate-x-4">
            <div class="flex h-full justify-center items-center">
              <span class="font-bold text-amber-500">Translate</span>
            </div>
          </div>
        </div>
        <div class="h-96 w-80 shrink-0 overflow-hidden rounded-xl bg-indigo-500 p-8   transform   sm:h-64 sm:w-64  shadow-xl transition duration-300 hover:rotate-180">
          <div class="flex h-full justify-center items-center">
            <span class="font-bold text-green-600">Rotate</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="bg-neutral-900 px-4 py-12">
  <div className="mx-auto w-fit">
    <motion.div
      whileHover="hover"
      transition={{
        duration: 1,
        ease: "backInOut",
      }}
      variants={{
        hover: {
          scale: 1.05,
        },
      }}
      className="relative h-96 w-80 shrink-0 overflow-hidden rounded-xl bg-indigo-500 p-8"
    >
      <div className="relative z-10 text-white">
        <span className="mb-3 block w-fit rounded-full bg-white/30 px-3 py-0.5 text-sm font-light text-white">
          Pro
        </span>
        <motion.span
          initial={{ scale: 0.85 }}
          variants={{
            hover: {
              scale: 1,
            },
          }}
          transition={{
            duration: 1,
            ease: "backInOut",
          }}
          className="my-2 block origin-top-left font-mono text-6xl font-black leading-[1.2]"
        >
          $299/
          <br />
          Month
        </motion.span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Placeat, rem.
        </p>
      </div>
      <button className="absolute bottom-4 left-4 right-4 z-20 rounded border-2 border-white bg-white py-2 text-center font-mono font-black uppercase text-neutral-800 backdrop-blur transition-colors hover:bg-white/30 hover:text-white">
        Get it now
      </button>

      <motion.svg
        width="320"
        height="384"
        viewBox="0 0 320 384"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 z-0"
        variants={{
          hover: {
            scale: 1.5,
          },
        }}
        transition={{
          duration: 1,
          ease: "backInOut",
        }}
      >
        <motion.circle
          variants={{
            hover: {
              scaleY: 0.5,
              y: -25,
            },
          }}
          transition={{
            duration: 1,
            ease: "backInOut",
            delay: 0.2,
          }}
          cx="160.5"
          cy="114.5"
          r="101.5"
          fill="#262626"
        />
        <motion.ellipse
          variants={{
            hover: {
              scaleY: 2.25,
              y: -25,
            },
          }}
          transition={{
            duration: 1,
            ease: "backInOut",
            delay: 0.2,
          }}
          cx="160.5"
          cy="265.5"
          rx="101.5"
          ry="43.5"
          fill="#262626"
        />
      </motion.svg>
    </motion.div>
  </div>
</section> 
</div> */
}
