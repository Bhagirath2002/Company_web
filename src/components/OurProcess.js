import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";
import { RxArrowTopRight } from "react-icons/rx";
import { ServiceData } from "../Api/Data";

const LeftContent = () => (
  <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
    <h1 className="text-3xl font-bold mb-4">OUR PROCESS</h1>
    <p className="text-lg text-center px-4">
      Listen. Question. Understand. Brainstorm. Design. Development. Fine-tune.
      And Deploy. We view the process of development as a process of
      soul-searching. Our Client meetings are opportunities for both parties to
      think beyond the mundane, to review, redraw and re-present the company,
      product or idea from a fresh perspective. Though a project is built using
      words and images, we believe it is one's own clarity and conviction that
      ultimately convinces others. We help channel this conviction into the
      project by quizzing our Clients using simple techniques such as Socratic
      questioning.
    </p>
  </div>
);

const RightContent = () => (
  <div className="h-screen bg-gray-300">
    <Swiper
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
      freeMode={false}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="max-w-[90%] lg:max-w-[80%] m-auto"
    >
      {ServiceData.map((item) => (
        <SwiperSlide key={item.title}>
          <div className="flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] lg:h-[400px] overflow-hidden cursor-pointer">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${item.backgroundImage})` }}
            />
            <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
            <div className="relative flex flex-col gap-3">
              <item.icon className="text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]" />
              <h1 className="text-xl lg:text-2xl">{item.title}</h1>
              <p className="lg:text-[18px]">{item.content}</p>
            </div>
            <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

const OurProcess = () => (
  <div className="flex">
    <div className="w-1/2">
      <LeftContent />
    </div>
    <div className="w-1/2">
      <RightContent />
    </div>
  </div>
);

export default OurProcess;
