import SectionTitle from "../../../components/SectionTitle";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import img1 from "../../../assets/fontend.jpg";
import img2 from "../../../assets/fullstack.webp";
import img3 from "../../../assets/backend.webp";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const Service = () => {
  return (
    <div className="my-10">
      <SectionTitle
        subHeading="My Services"
        mainHeading="Service Provide For My Clients."
      ></SectionTitle>

      {/*  */}
      <div className="min-h-[500px]">
        <Swiper
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          slidesPerView={2}
          spaceBetween={20}
        >
          <SwiperSlide>
            <div className="hero pt-10  bg-[#252734]">
              <div className="hero-content text-center">
                <div className="max-w-xl space-y-3">
                  <div className="avatar">
                    <div className="w-24 rounded-xl">
                      <img src={img1} />
                    </div>
                  </div>
                  <h1 className="text-2xl font-bold">Font-End Development</h1>

                  <ul className="list-disc pl-5">
                    <li className="flex items-center gap-2 py-2">
                      <MdOutlineKeyboardDoubleArrowRight className="text-blue-500" />
                      <span>HTML/CSS</span>
                    </li>
                    <li className="flex items-center gap-2 py-2">
                      <MdOutlineKeyboardDoubleArrowRight className="text-blue-500" />
                      <span>Tailwind CSS</span>
                    </li>
                    <li className="flex items-center gap-2 py-2">
                      <MdOutlineKeyboardDoubleArrowRight className="text-blue-500" />
                      <span>JavaScript</span>
                    </li>
                    <li className="flex items-center gap-2 py-2">
                      <MdOutlineKeyboardDoubleArrowRight className="text-blue-500" />
                      <span>React</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hero pt-10  bg-[#252734]">
              <div className="hero-content text-center">
                <div className="max-w-xl space-y-3">
                  <div className="avatar">
                    <div className="w-24 rounded-xl">
                      <img src={img2} />
                    </div>
                  </div>
                  <h1 className="text-2xl font-bold">Fullstack Development</h1>

                  <ul className="list-disc pl-5">
                    <li className="flex items-center gap-2 py-2">
                      <MdOutlineKeyboardDoubleArrowRight className="text-blue-500" />
                      <span>HTML/CSS</span>
                    </li>
                    <li className="flex items-center gap-2 py-2">
                      <MdOutlineKeyboardDoubleArrowRight className="text-blue-500" />
                      <span>Tailwind CSS</span>
                    </li>
                    <li className="flex items-center gap-2 py-2">
                      <MdOutlineKeyboardDoubleArrowRight className="text-blue-500" />
                      <span>JavaScript</span>
                    </li>
                    <li className="flex items-center gap-2 py-2">
                      <MdOutlineKeyboardDoubleArrowRight className="text-blue-500" />
                      <span>React</span>
                    </li>
                    <li className="flex items-center gap-2 py-2">
                      <MdOutlineKeyboardDoubleArrowRight className="text-blue-500" />
                      <span>Node.js</span>
                    </li>
                    <li className="flex items-center gap-2 py-2">
                      <MdOutlineKeyboardDoubleArrowRight className="text-blue-500" />
                      <span>Express</span>
                    </li>
                    <li className="flex items-center gap-2 py-2">
                      <MdOutlineKeyboardDoubleArrowRight className="text-blue-500" />
                      <span>MongoDB</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hero pt-10  bg-[#252734]">
              <div className="hero-content text-center">
                <div className="max-w-xl space-y-3">
                  <div className="avatar">
                    <div className="w-24 rounded-xl">
                      <img src={img3} />
                    </div>
                  </div>
                  <h1 className="text-2xl font-bold">ackend Development</h1>

                  <ul className="list-disc pl-5">
                    <li className="flex items-center gap-2 py-2">
                      <MdOutlineKeyboardDoubleArrowRight className="text-blue-500" />
                      <span>Node.js</span>
                    </li>
                    <li className="flex items-center gap-2 py-2">
                      <MdOutlineKeyboardDoubleArrowRight className="text-blue-500" />
                      <span>Express</span>
                    </li>
                    <li className="flex items-center gap-2 py-2">
                      <MdOutlineKeyboardDoubleArrowRight className="text-blue-500" />
                      <span>JavaScript</span>
                    </li>
                    <li className="flex items-center gap-2 py-2">
                      <MdOutlineKeyboardDoubleArrowRight className="text-blue-500" />
                      <span>RESTful APIs</span>
                    </li>
                    <li className="flex items-center gap-2 py-2">
                      <MdOutlineKeyboardDoubleArrowRight className="text-blue-500" />
                      <span>MongoDB</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Service;
