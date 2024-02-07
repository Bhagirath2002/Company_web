import React from "react";
import { motion } from "framer-motion";

function OurForteSection() {
  return (
    <div>
      <section className=" py-32 pb-[200px] bg-gradient-to-r from-blue-500 to-red-500">
        <div className=" max-w-7xl mx-auto px-10 sm:px-6 lg:px-8 text-justify">
          <div class="flex flex-row gap-5   justify-center items-center bg-gray-500 h-screen py-6">
            <div className="flex flex-col gap-5">
              <div className="">
                <h1 className="text-3xl font-extrabold text-white">
                  OUR FORTE
                </h1>
                <p className="mt-4 text-2xl text-gray-300">
                  Making Website that boost your Business
                </p>
              </div>
              <div class="h-96 w-80 shrink-0 overflow-hidden rounded-xl bg-indigo-500 p-8   transform   sm:h-64 sm:w-64  shadow-xl transition duration-300 hover:rotate-180">
                <div class="flex h-full justify-center items-center">
                  <span class="font-bold text-green-600">Rotate</span>
                </div>
              </div>
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
                        Edu-tech Platform
                      </motion.span>
                      <p>
                        Seeing through your learners glasses, we shape your
                        edu-tech business idea with its USP's, financials and
                        growth plans into the next happening thing in town that
                        they'd be excited join as learner.
                      </p>
                    </div>
                    <button className="absolute bottom-4 left-4 right-4 z-20 rounded border-2 border-white bg-white py-2 text-center font-mono font-black uppercase text-neutral-800 backdrop-blur transition-colors hover:bg-white/30 hover:text-white">
                      Get it now
                    </button>
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

              <div class="h-96 w-80 shrink-0 overflow-hidden rounded-xl bg-indigo-500 p-8  transform   sm:h-64 sm:w-64 shadow-xl transition duration-300 hover:translate-x-4">
                <div class="flex h-full justify-center items-center">
                  <span class="font-bold text-amber-500">Translate</span>
                </div>
              </div>
            </div>

            <div className=" ">
              <div class="h-96 w-80 shrink-0 overflow-hidden rounded-xl bg-indigo-500 p-8   transform   sm:h-64 sm:w-64  shadow-xl transition duration-300 hover:rotate-180">
                <div class="flex h-full justify-center items-center">
                  <span class="font-bold text-gray-500">Scale</span>
                </div>
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
                        $400/
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
