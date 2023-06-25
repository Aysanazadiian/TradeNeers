import { React, useState, useEffect, useRef } from "react";
import Header from "./../Header/Header";
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Footer from './../Footer/Footer';
import Contact from './Contact';

function Home() {
  const [logo, setLogo] = useState(false);
  const showLogo = () => setLogo(!logo);
  const swiperRef = useRef();

  return (
    <>
      <section className="overflow-hidden">
        <section onLoad={showLogo} className="overflow-hidden relative">
          <div className="loader absolute lg:top-[120px] md:top-[180px]  right-[25px] "></div>
          <img
            src="/assets/images/TRADENEERS_Container_Shipping-1536x843.jpeg"
            alt="ContainerShipping"
            className="h-full w-full z-[-1]"
          />
          <img
            src="/assets/images/TRADENEERS_ICON@4x.png"
            alt="TRADENEERS_ICON_HOME"
            className={` ${
              logo
                ? "TRADENEERS_ICON_HOME translate-x-[25%] "
                : "TRADENEERS_ICON_HOME -translate-x-[2000px]"
            }`}
          />
          <img
            src="/assets/images/TRADENEERS_LOGO@4xwhite.png"
            alt="TRADENEERS_LOGO_WHITE"
            className={` ${
              logo
                ? "TRADENEERS_LOGO_WHITE opacity-100"
                : " TRADENEERS_LOGO_WHITE opacity-0"
            }`}
          />
        </section>
      </section>
      <section>
        <section className="flex flex-row justify-center py-[120px] mt-0 px-[60px] mb-0 bg-[#18395e] openSans">
          <p className="flex flex-col justify-center md:ml-[5rem] ml-0 text-justify tracking-wide space-y-7">
            <span className="text-[26px] text-white font-bold">
              TRADENEERS _ Society for International Trade
            </span>
            <span className="text-[16px] text-[#007bc2] font-bold">
              TRADENEERS buys, sells and brokers selected raw materials,
              machines and products worldwide.
            </span>
            <span className="text-[15px] text-white">
              In the heart of the northern German Hanseatic city of Bremen,
              TRADENEERS positions itself as a competent and experienced trading
              partner. With a worldwide network of foreign trade, shipping,
              banking and logistics partners as well as direct connections to
              selected raw material suppliers, TRADENEERS offers an excellent
              value chain. Trusting global trade relationships and fair
              commercial dealings characterize the cooperation with TRADENEERS.
              For us, the handshake counts. We know where the raw materials we
              offer come from. We know our partners and convince with our
              expertise.
            </span>
          </p>
          <div className="w-[90rem] h-[18rem]  md:block hidden">
            <img
              src="/assets/images/schluessel-e1625821090658-600x640.png"
              alt="RED_KEY"
              className="max-w-full max-h-full lg:mr-[20rem] md:mr-[15rem]"
            />
          </div>
        </section>
      </section>
      <section className="w-full md:h-[470px] h-full overflow-hidden bg-[#18395E]">
        <section className="flex md:flex-row flex-col md:space-y-0  justify-center items-center  ">
          <img
            src="/assets/images/AdobeStock_163150441_Preview.jpeg"
            alt="AdobeStock"
            className="md:w-[50%] w-full h-full object-cover pb-10"
          />
          <img
            src="/assets/images/AdobeStock_300736184_Preview.jpeg"
            alt="AdobeStock"
            className="md:w-[50%] w-full h-full object-cover pb-10"
          />
        </section>
      </section>
      <section className="bg-[#18395E] py-10">
        <section className="bg-[#007bc2] flex md:flex-row flex-col justify-center ">
          <section>
            <p className="flex flex-col justify-center md:space-y-7 space-y-5 md:mx-26 mx-12 md:my-20 my-8">
              <span className="text-[26px] text-white font-bold">
                {" "}
                International trading partners
              </span>
              <span className="text-[18px] text-[#18395E] font-bold">
                {" "}
                professional – uncomplicated – flexible{" "}
              </span>
              <span className="text-[15px] text-white tracking-wide text-justify">
                TRADENEERS has access to excellently connected traders and
                intermediaries both nationally and internationally. This allows
                us to react flexibly and cost-consciously and master every
                challenge.
              </span>
            </p>
          </section>
          <section>
            <p className="flex flex-col justify-center  md:space-y-7 space-y-5 md:mx-26 mx-12 md:my-20 my-8">
              <span className="text-[26px] text-white font-bold ">
                {" "}
                Logistics with a vision
              </span>
              <span className="text-[18px] text-[#18395E] font-bold ">
                {" "}
                on time - safe - reliable
              </span>
              <span className="text-[15px] text-white tracking-wide text-justify">
                TRADENEERS can rely on seamless logistics and supply chains for
                perfect and smooth trading. Worldwide shipping and reliable
                forwarding partners form the basis for a successful business.
              </span>
            </p>
          </section>
        </section>
      </section>
      <section className="w-full relative">
        <Swiper
          modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          className="cursor-grab "
          breakpoints={{
            640: {
              width: 640,
              slidesPerView: 1,
            },

            768: {
              width: 768,
              slidesPerView: 2,
            },
            1024: {
              width: 1024,
              slidesPerView: 3,
            },
            1280: {
              width: 1280,
              slidesPerView: 3,
            },
            1536: {
              width: 1536,
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide>
            <img
              className="hover:scale-105 transition-all duration-500 z-auto overflow-hidden max-w-full max-h-full object-cover"
              src="/assets/images/TRADENEERS_CNC_Machine.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="hover:scale-105 transition-all duration-500 z-auto overflow-hidden max-w-full max-h-full object-cover"
              src="/assets/images/TRADENEERS_ChemischeRohstoffe-800x534.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="hover:scale-105 transition-all duration-500 z-auto overflow-hidden max-w-full max-h-full object-cover"
              src="/assets/images/TRADENEERS_Gewuerze-800x534.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="hover:scale-105 transition-all duration-500 z-auto overflow-hidden max-w-full max-h-full object-cover"
              src="/assets/images/TRADENEERS_Marmor-800x533.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="hover:scale-105 transition-all duration-500 z-auto overflow-hidden max-w-full max-h-full object-cover"
              src="/assets/images/TRADENEERS_Planierraupe-800x534.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="hover:scale-105 transition-all duration-500 z-auto overflow-hidden max-w-full max-h-full object-cover"
              src="/assets/images/TRADENEERS_Metalle-800x534.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="hover:scale-105 transition-all duration-500 z-auto overflow-hidden max-w-full max-h-full object-cover"
              src="/assets/images/TRADENEERS_Monitor.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="hover:scale-105 transition-all duration-500 z-auto overflow-hidden max-w-full max-h-full object-cover"
              src="/assets/images/TRADENEERS_Radiologie-800x534.jpg"
            />
          </SwiperSlide>
        </Swiper>
        <div>
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute top-[50%] left-1 z-50 bg-[#0000007a] text-white w-7 h-6"
          >
            <FaAngleLeft className="m-auto text-[20x]" />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute top-[50%] right-1 z-50 bg-[#0000007a] text-white w-7 h-6"
          >
            <FaAngleRight className="m-auto text-[20x]" />
          </button>
        </div>
      </section>
      <Contact/>
    </>
  );
}

export default Home;
