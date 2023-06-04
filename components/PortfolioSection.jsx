import { RiProfileLine } from "react-icons/ri";

import "../styles/global.css";
function PortfolioSection() {
  return (
    <>
      <div id="projects" className="p-4">
        <div className="border w-min flex items-center justify-centerm py-2 px-6 rounded-full text-xs border-[#999999] mb-16">
          <RiProfileLine />
          <h1 className="ml-2 w-max">PORTFOLIO</h1>
        </div>
        <div>
          <h1 className="font-light text-4xl mb-8 ml-2">
            Featured <span className="color-yellow">Projects</span>
          </h1>
        </div>
        <div className="flex flex-col xl:flex-row xl:flex-wrap gap-10">
          <div className="flex flex-col gap-3">
            <div className="relative border border-[#999999] w-200 h-600 bg-[#1F1F1F] rounded-[40px] p-5">
              {/* <div className="relative border w-200 h-600 bg-[url(/facebookLoginImage.png)] bg-cover bg-center rounded-[40px] p-10"> */}
              <div className="border-2 bottom-0 rounded-xl z-20 p-2 bg-white">
                <img
                  src="/facebookProjectBackgroundImage.png"
                  className="w-full h-full"
                  alt=""
                />
              </div>
              <div className="absolute bottom-6 left-8 flex gap-2">
                <h1 className="rounded-full py-2 px-3 bg-[#1F1F1F] text-white w-max-[90px] text-sm">
                  ReactJs
                </h1>
                <h1 className="rounded-full py-2 px-3 bg-[#1F1F1F] text-white w-max-[90px] text-sm">
                  Firebase
                </h1>
                <h1 className="rounded-full py-2 px-3 bg-[#1F1F1F] text-white w-max-[90px] text-sm">
                  TailwindCSS
                </h1>
              </div>
            </div>
            <div className="flex flex-col gap-2 ml-2">
              <h1 className="text-2xl color-yellow">Facebook Clone</h1>
              <p className="text-sm">
                Where you can login OR sign-up using firebase and post( text &
                img) realtime.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 xl:w-[45%]">
            <div className="relative border border-[#999999] w-200 h-600 bg-[#1F1F1F] rounded-[40px] p-5">
              {/* <div className="relative border w-200 h-600 bg-[url(/facebookLoginImage.png)] bg-cover bg-center rounded-[40px] p-10"> */}
              <div className="border-2 bottom-0 rounded-xl z-20 p-2 bg-white">
                <img
                  src="/facebookProjectBackgroundImage.png"
                  className="w-full h-full"
                  alt=""
                />
              </div>
              <div className="absolute bottom-6 left-8 flex gap-2">
                <h1 className="rounded-full py-2 px-3 bg-[#1F1F1F] text-white w-max-[90px] text-sm">
                  ReactJs
                </h1>
                <h1 className="rounded-full py-2 px-3 bg-[#1F1F1F] text-white w-max-[90px] text-sm">
                  Firebase
                </h1>
                <h1 className="rounded-full py-2 px-3 bg-[#1F1F1F] text-white w-max-[90px] text-sm">
                  TailwindCSS
                </h1>
              </div>
            </div>
            <div className="flex flex-col gap-2 ml-2">
              <h1 className="text-2xl color-yellow">Facebook Clone</h1>
              <p className="text-sm">
                Where you can login OR sign-up using firebase and post( text &
                img) realtime.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 xl:w-[45%]">
            <div className="relative border border-[#999999] w-200 h-600 bg-[#1F1F1F] rounded-[40px] p-5">
              {/* <div className="relative border w-200 h-600 bg-[url(/facebookLoginImage.png)] bg-cover bg-center rounded-[40px] p-10"> */}
              <div className="border-2 bottom-0 rounded-xl z-20 p-2 bg-white">
                <img
                  src="/facebookProjectBackgroundImage.png"
                  className="w-full h-full"
                  alt=""
                />
              </div>
              <div className="absolute bottom-6 left-8 flex gap-2">
                <h1 className="rounded-full py-2 px-3 bg-[#1F1F1F] text-white w-max-[90px] text-sm">
                  ReactJs
                </h1>
                <h1 className="rounded-full py-2 px-3 bg-[#1F1F1F] text-white w-max-[90px] text-sm">
                  Firebase
                </h1>
                <h1 className="rounded-full py-2 px-3 bg-[#1F1F1F] text-white w-max-[90px] text-sm">
                  TailwindCSS
                </h1>
              </div>
            </div>
            <div className="flex flex-col gap-2 ml-2">
              <h1 className="text-2xl color-yellow">Facebook Clone</h1>
              <p className="text-sm">
                Where you can login OR sign-up using firebase and post( text &
                img) realtime.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="relative border border-[#999999] w-200 h-600 bg-[#1F1F1F] rounded-[40px] p-5">
              {/* <div className="relative border w-200 h-600 bg-[url(/facebookLoginImage.png)] bg-cover bg-center rounded-[40px] p-10"> */}
              <div className="border-2 bottom-0 rounded-xl z-20 p-2 bg-white">
                <img
                  src="/facebookProjectBackgroundImage.png"
                  className="w-full h-full"
                  alt=""
                />
              </div>
              <div className="absolute bottom-6 left-8 flex gap-2">
                <h1 className="rounded-full py-2 px-3 bg-[#1F1F1F] text-white w-max-[90px] text-sm">
                  ReactJs
                </h1>
                <h1 className="rounded-full py-2 px-3 bg-[#1F1F1F] text-white w-max-[90px] text-sm">
                  Firebase
                </h1>
                <h1 className="rounded-full py-2 px-3 bg-[#1F1F1F] text-white w-max-[90px] text-sm">
                  TailwindCSS
                </h1>
              </div>
            </div>
            <div className="flex flex-col gap-2 ml-2">
              <h1 className="text-2xl color-yellow">Facebook Clone</h1>
              <p className="text-sm">
                Where you can login OR sign-up using firebase and post( text &
                img) realtime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PortfolioSection;
