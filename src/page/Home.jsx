import React from "react";
import Footer from "../components/Footer/Index";
import { Link } from "react-router-dom";
import f1 from "../images/home/f1.png";
import bg1 from "../images/bgitem.png";
import Navbar from "../components/Navbar/index";
import b2 from "../images/home/bgmerah.png";
import el1 from "../images/home/Electric1.png";
import et1 from "../images/home/Etanol1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper/core";

SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);
const Home = () => {
  // const[slider1,setSlider1] = useState(false);

  return (
    <section className="h-screen">
      <Navbar />
      <Swiper
        cssMode={true}
        navigation={true}
        loop={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        className="mySwiper"
      >
        <SwiperSlide>
          {({ isActive }) => (
            <div>
              <img alt="" className="backg" src={bg1}></img>
              <div className="z-10 flex flex-col gap-y-32 md:gap-y-0 mx-auto md:p-10 p-0 md:mt-14 mt-5  ">
                <div className={`flex flex-col space-y-16 md:-space-y-24`}>
                  <div
                    className={`flex text-title flex-col text-center italic transform-gpu duration-700 transition ${
                      isActive
                        ? "translate-x-0 opacity-100"
                        : "translate-x-96 opacity-0"
                    } }`}
                  >
                    <h3
                      style={{ letterSpacing: "0.25em" }}
                      className="text-2xl md:text-5xl sm:text-2xl font-black "
                    >
                      NOGOGENI RACING
                    </h3>
                    <h1 className="text-7xl -mt-4 md:text-9xl font-black">
                      MARK I
                    </h1>
                  </div>
                  <div
                    className={` md:ml-0 ml-5 transform-gpu duration-700  ${
                      isActive
                        ? "translate-x-0 opacity-100"
                        : "md:-translate-x-96 -translate-x-32 opacity-0"
                    }  `}
                  >
                    <img
                      className="mx-auto transform md:rotate-0 -rotate-90 md:w-full w-max"
                      alt=""
                      src={f1}
                    ></img>
                  </div>
                </div>
                <div
                  className={`mx-auto z-30 transition-opacity duration-1000 ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Link to="/Mark1" className="Homebutton text-white text-2xl">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => (
            <div>
              <img alt="" className="backg" src={b2}></img>
              <div className="z-10 flex flex-col gap-y-28 md:gap-y-0 mx-auto md:p-10 p-0 md:mt-14 ">
                <div className={`flex flex-col space-y-16 md:-space-y-24 `}>
                  <div
                    className={`flex text-title flex-col  text-center italic transform-gpu duration-700 transition ${
                      isActive
                        ? "translate-x-0 opacity-100"
                        : "translate-x-96 opacity-0"
                    }`}
                  >
                    <h3
                      style={{ letterSpacing: "0.25em" }}
                      className="text-2xl md:text-5xl font-black"
                    >
                      NOGOGENI V
                    </h3>
                    <h1 className="text-7xl md:text-9xl -mt-4  font-black">
                      EVO
                    </h1>
                  </div>
                  <div
                    className={`w-full transform duration-700 ${
                      isActive
                        ? "translate-x-0 opacity-100"
                        : "md:-translate-x-96 -translate-x-32 opacity-0"
                    } `}
                  >
                    <img
                      className="mx-auto transform md:rotate-0 -rotate-90 md:w-full w-max"
                      alt=""
                      src={el1}
                    ></img>
                  </div>
                </div>
                <div
                  className={`mx-auto z-30 transition-opacity duration-1000 ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Link
                    to="/NogogeniEvo"
                    className="Homebutton text-white text-2xl"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => (
            <div>
              <img alt="" className="backg" src={bg1}></img>
              <div className="z-10 flex flex-col gap-y-32 md:gap-y-0 mx-auto md:p-10 p-0 md:mt-14 mt-5">
                <div className="flex flex-col space-y-24 md:-space-y-2">
                  <div
                    className={`flex text-title flex-col  text-center italic transform-gpu duration-700 transition ${
                      isActive
                        ? "translate-x-0 opacity-100"
                        : "translate-x-96 opacity-0"
                    }`}
                  >
                    <h3
                      style={{ letterSpacing: "0.25em" }}
                      className="text-3xl md:text-6xl font-black"
                    >
                      NOGOGENI V
                    </h3>
                  </div>
                  <div
                    className={`w-full transform duration-700 ${
                      isActive
                        ? "translate-x-0 opacity-100"
                        : "md:-translate-x-96 -translate-x-32 opacity-0"
                    }`}
                  >
                    <img
                      className=" w-max mx-auto transform md:rotate-0 -rotate-90 md:w-full"
                      alt=""
                      src={et1}
                    ></img>
                  </div>
                </div>
                <div
                  className={`mx-auto z-30 transition-opacity duration-1000 ${
                    isActive ? "opacity-100" : "opacity-0"
                  } `}
                >
                  <Link
                    to="/NogogeniM2"
                    className="Homebutton text-white text-2xl"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          )}
        </SwiperSlide>
      </Swiper>
      <Footer />
      <style jsx>{`
        .swiper-container {
          width: 100%;
          height: 100%;
        }

        .swiper-slide {
          text-align: center;
          font-size: 18px;
          background: #000;
          display: -webkit-box;
          display: -ms-flexbox;
          display: -webkit-flex;
          display: flex;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          -webkit-justify-content: center;
          justify-content: center;
          -webkit-box-align: center;
          -ms-flex-align: center;
          -webkit-align-items: center;
          align-items: center;
        }

        .backg {
          left: 0;
          top: 0;
          position: absolute;
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .swiper-container {
          margin-left: auto;
          margin-right: auto;
        }
        .swiper-button-next,
        .swiper-button-prev {
          color: white;
          margin: -10px 150px;
        }
        @media screen and (max-width: 768px) {
          .swiper-button-next,
          .swiper-button-prev {
            margin: 0px;
          }
        }
        .swiper-pagination-bullet {
          padding: 3px 10px;
          width: auto;
          height: 20px;
          line-height: 20px;
          font-size: 12px;
          color: #000;
          opacity: 1;
          background: rgba(0, 0, 0, 0.2);
        }
        .swiper-pagination-bullet-active {
          color: #fff;
          background: #fff;
        }
        .Homebutton {
          transition: all 0.35s;
          margin: 5px;
          text-decoration: none;
          display: inline-block;
          height: 50px;
          width: 150px;
          line-height: 50px;
          text-align: center;
        }
        .Homebutton:hover {
          z-index: 30;
          box-shadow: 0 -3px white, 0 3px white;
        }
      `}</style>
    </section>
  );
};
export default Home;
