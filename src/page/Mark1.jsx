import Navbar from "../components/Navbar/index";
import f1 from "../images/home/f1.png";
import rangka1 from "../images/home/rankga/Ranka1Top.png";
import rangka2bot from "../images/home/rankga/Ranka1Bot.png";
import back from "../icons/Back2.png";
import steering from "../icons/Steering1.png";
import wheel from "../icons/Wheels1.png";
import Tires from "../icons/Tires1.png";
import transmition from "../icons/Transmisions1.png";
import isometri1 from "../images/home/isometri/Isometri11.png";
import isometri2 from "../images/home/isometri/Isometri21.png";

import React, { useState } from "react";
import { Link } from "react-router-dom";

const Mark1 = () => {
  const [slider, setSlider] = useState(false);

  const viewportContext = React.createContext({});

  const ViewportProvider = ({ children }) => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const [height, setHeight] = React.useState(window.innerHeight);
    const handleWindowResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    React.useEffect(() => {
      window.addEventListener("resize", handleWindowResize);
      return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return (
      <viewportContext.Provider value={{ width, height }}>
        {children}
      </viewportContext.Provider>
    );
  };

  const useViewport = () => {
    const { width, height } = React.useContext(viewportContext);
    return { width, height };
  };

  function Desktop() {
    return (
      <div>
        <div
          className={`left-20 2xl:left-60 relative transform-gpu duration-700 w-max ${
            slider ? "translate-y-full top-20" : "-translate-y-20 -top-20"
          }`}
        >
          <img
            className={`transform -rotate-90`}
            width={"950px"}
            alt=""
            src={f1}
          ></img>
        </div>
        <div className="slicer">
          <div className="flex flex-col cursor-pointer">
            <img
              alt=""
              src={rangka1}
              className={`${slider ? "border-2 border-white" : "border-0"}`}
              onClick={() => setSlider(true)}
            ></img>
            <img
              alt=""
              src={rangka2bot}
              className={`${slider ? "border-0" : "border-2 border-white"}`}
              onClick={() => setSlider(false)}
            ></img>
          </div>
        </div>
        {/* swap */}
        <div
          className={`text-white right-44 absolute overflow-hidden h-3/4 2xl:right-80 inset-y-44 2xl:inset-y-56`}
        >
          <div className="flex flex-col gap-3">
            <Link to="/" className="flex flex-row cursor-pointer gap-3 w-max">
              <img
                src={back}
                alt=""
                className="border-2 border-white rounded-full w-8"
              ></img>
              <p className="italic font-medium text-xl my-auto">Back</p>
            </Link>
            <h2 className="italic text-title">
              NOGOGENI RACING <br />
              MARK 1
            </h2>
            <div
              className={`transform-gpu duration-700 ${
                slider
                  ? "translate-x-full h-0 opacity-0"
                  : "delay-100 -translate-x-0 h-0 opacity-100"
              }`}
            >
              <p className="text-title font-bold">
                This car has a Husaberg 450 FE engine with a <br />
                single cylinder RON 98 fuel type. The chassis <br />
                structure is made of Steel Tube Spaceframe and,
                <br />
                with a brake system using hydraulic disc brakes.
              </p>
              <div className="flex flex-row gap-5 mt-2">
                <div className="flex flex-col gap-2">
                  <img alt="" src={steering}></img>
                  <img alt="" src={transmition}></img>
                </div>
                <div className="flex flex-col gap-5 mt-2 italic font-bold text-title">
                  <p>Rack and Pinion Steering System</p>
                  <p>Sprocket &amp; Chain with Manual Shifter</p>
                </div>
              </div>
              <div className="flex flex-row gap-5 mt-1">
                <div className="flex flex-col">
                  <p className="text-title italic font-bold text title">
                    Wheels
                  </p>
                  <div className="bg-title p-3 flex flex-row gap-3">
                    <img alt="" src={wheel}></img>
                    <p className="italic my-auto text-black">6,4" Wide</p>
                  </div>
                </div>
                <div className="flex flex-col">
                  <p className="text-title italic font-bold text title">
                    Tires
                  </p>
                  <div className="bg-title p-3 flex flex-row gap-3">
                    <img alt="" src={Tires}></img>
                    <p className="italic my-auto text-black">
                      180/60 R13 Hoosier
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`flex flex-col gap-5 transform-gpu duration-700  ${
                slider
                  ? "translate-x-0 opacity-100 delay-100"
                  : "-translate-x-full h-0 opacity-0"
              }`}
            >
              <img alt="" src={isometri1}></img>
              <img alt="" src={isometri2} />
            </div>
          </div>
        </div>
      </div>
    );
  }
  function Mobile() {
    return (
        <div className='h-screen'>
        <div
          className={` -right-32 relative mt-16 transform-gpu duration-700 delay-1000 w-max ${
            slider ? "-translate-x-3/4" : "-translate-x-0 "
          }`}
        >
          <img
            className={``}
            width={"600px"}
            alt=""
            src={f1}
          ></img>
        </div>
        <div className="absolute left-1/2 top-2/3">
          <div className="flex flex-col cursor-pointer">
            <img
              alt=""
              src={rangka1}
              className={`${slider ? "border-2 border-white" : "border-0"}`}
              onClick={() => setSlider(true)}
            ></img>
            <img
              alt=""
              src={rangka2bot}
              className={`${slider ? "border-0" : "border-2 border-white"}`}
              onClick={() => setSlider(false)}
            ></img>
          </div>
        </div>

        {/* <div
          className={`text-white right-44 absolute overflow-hidden h-3/4 2xl:right-80 inset-y-44 2xl:inset-y-56`}
        >
          <div className="flex flex-col gap-3">
            <Link to="/" className="flex flex-row cursor-pointer gap-3 w-max">
              <img
                src={back}
                alt=""
                className="border-2 border-white rounded-full w-8"
              ></img>
              <p className="italic font-medium text-xl my-auto">Back</p>
            </Link>
            <h2 className="italic text-title">
              NOGOGENI RACING <br />
              MARK 1
            </h2>
            <div
              className={`transform-gpu duration-700 ${
                slider
                  ? "translate-x-full h-0 opacity-0"
                  : "delay-100 -translate-x-0 h-0 opacity-100"
              }`}
            >
              <p className="text-title font-bold">
                This car has a Husaberg 450 FE engine with a <br />
                single cylinder RON 98 fuel type. The chassis <br />
                structure is made of Steel Tube Spaceframe and,
                <br />
                with a brake system using hydraulic disc brakes.
              </p>
              <div className="flex flex-row gap-5 mt-2">
                <div className="flex flex-col gap-2">
                  <img alt="" src={steering}></img>
                  <img alt="" src={transmition}></img>
                </div>
                <div className="flex flex-col gap-5 mt-2 italic font-bold text-title">
                  <p>Rack and Pinion Steering System</p>
                  <p>Sprocket &amp; Chain with Manual Shifter</p>
                </div>
              </div>
              <div className="flex flex-row gap-5 mt-1">
                <div className="flex flex-col">
                  <p className="text-title italic font-bold text title">
                    Wheels
                  </p>
                  <div className="bg-title p-3 flex flex-row gap-3">
                    <img alt="" src={wheel}></img>
                    <p className="italic my-auto text-black">6,4" Wide</p>
                  </div>
                </div>
                <div className="flex flex-col">
                  <p className="text-title italic font-bold text title">
                    Tires
                  </p>
                  <div className="bg-title p-3 flex flex-row gap-3">
                    <img alt="" src={Tires}></img>
                    <p className="italic my-auto text-black">
                      180/60 R13 Hoosier
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`flex flex-col gap-5 transform-gpu duration-700  ${
                slider
                  ? "translate-x-0 opacity-100 delay-100"
                  : "-translate-x-full h-0 opacity-0"
              }`}
            >
              <img alt="" src={isometri1}></img>
              <img alt="" src={isometri2} />
            </div>
          </div>
        </div> */}
      </div>
    );
  }

  const MyComponent = () => {
    const { width } = useViewport();
    const breakpoint = 620;

    return width < breakpoint ? <Mobile /> : <Desktop />;
  };

  return (
    <section className="h-screen bg-bghero bg-cover bg-no-repeat overflow-hidden">
      <ViewportProvider>
        <Navbar />
        <MyComponent />
      </ViewportProvider>

      <style jsx>{`
        .slicer {
          position: absolute;
          top: 32%;
          left: 5%;
        }
      `}</style>
    </section>
  );
};
export default Mark1;
