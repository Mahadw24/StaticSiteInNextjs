import { AiOutlineHome } from "react-icons/ai";
import { BsArrowDown } from "react-icons/bs";
import "../styles/global.css";
function IntroducSection() {
  const handleClick = () => {
    const targetDiv = document.getElementById("projects");
    targetDiv.scrollIntoView();
  };
  return (
    <>
      <div className=" mx-4 flex flex-col gap-y-4">
        {/* <div className="mt-8 p-4 mb-12"> */}
        <div className="border w-min flex items-center justify-centerm py-2 px-6 rounded-full text-xs border-[#999999] mb-10">
          <AiOutlineHome />
          <h1 className="ml-2">INTRODUCE</h1>
        </div>
        <div className="">
          <h1 className="text-6xl xl:font-light xl:leading-[90px] leading-[60px] mb-4  md:text-[80px] md:leading-[80px] md:w-[850px]">
            Say Hi from <span className="color-yellow">Mahad</span>, Full Stack Web Developer
          </h1>
          <h1 className="color-para max-w-[480px]">
            I design and code beautifully simple things and i love what i do.
            Just simple like that!
          </h1>
        </div>
        <div className="w-full md:flex md:items-end md:justify-end">
          <div
            className="border w-44 h-44 p-4 rounded-full border-[#999999] cursor-pointer relative mb-8"
            onClick={handleClick}
          >
            <img
              src="/round-text.png"
              alt=""
              className="animate-spin slow-rotation"
            />
            <BsArrowDown className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10" />
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col w-[100px] max-w-[400px] mr-20">
            <h1 className="mb-6 color-yellow text-5xl md:text-[60px] xl:text-[72px] xl:font-light">
              1+
            </h1>
            <h1 className="color-para text-sm md:text-md xl:text-[14px]">
              YEARS OF EXPERIENCE
            </h1>
          </div>
          <div className="w-[200px] max-w-[400px]">
            <h1 className="mb-6 color-yellow text-5xl md:text-[60px] xl:text-[72px] xl:font-light">
              20
            </h1>
            <h1 className="color-para text-sm md:text-md xl:text-[14px]">
              PROJECTS COMPLETED
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default IntroducSection;
