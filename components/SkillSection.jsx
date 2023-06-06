import { RiProfileLine } from "react-icons/ri";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandNextjs } from "react-icons/tb";
import { SiReact } from "react-icons/si";
import "../styles/global.css";

function SkillSection() {
  return (
    <>
      <div className="p-4">
        <div className="border w-min flex items-center justify-centerm py-2 px-6 rounded-full text-xs border-[#999999] mb-16">
          <RiProfileLine />
          <h1 className="ml-2 w-max">MY SKILLS</h1>
        </div>
        <div>
          <h1 className="font-light text-[48px] mb-8 ml-2">
            My <span className="color-yellow">Advantages</span>
          </h1>
        </div>
        <div className="w-100vw flex flex-wrap gap-x-6 gap-y-6 ">
          <div className="flex items-center  justify-center flex-col w-[45%] md:w-[170px] gap-3">
            <div className="rounded-[90px] hover:border-[#28E98C] p-16 border-2 border-[#999999] w-[100%] gap-6 flex items-center flex-col justify-center h-[250px]">
              <AiFillHtml5 className="text-[75px]" />
              <p className="text-3xl color-yellow">90%</p>
            </div>
            <p>Html</p>
          </div>
          <div className="flex items-center  justify-center flex-col w-[45%] md:w-[170px] gap-3">
            <div className="rounded-[90px] hover:border-[#28E98C] p-16 border-2 border-[#999999] w-[100%] gap-6 flex items-center flex-col justify-center h-[250px]">
              <IoLogoCss3 className="text-[75px]" />
              <p className="text-3xl color-yellow">85%</p>
            </div>
            <p>Css</p>
          </div>
          <div className="flex items-center  justify-center flex-col w-[45%] md:w-[170px] gap-3">
            <div className="rounded-[90px] hover:border-[#28E98C] p-16 border-2 border-[#999999] w-[100%] gap-6 flex items-center flex-col justify-center h-[250px]">
              <IoLogoJavascript className="text-[75px]" />
              <p className="text-3xl color-yellow">70%</p>
            </div>
            <p>Javascript</p>
          </div>
          <div className="flex items-center  justify-center flex-col w-[45%] md:w-[170px] gap-3">
            <div className="rounded-[90px] hover:border-[#28E98C] p-16 border-2 border-[#999999] w-[100%] gap-6 flex items-center flex-col justify-center h-[250px]">
              <SiReact className="text-[75px]" />
              <p className="text-3xl color-yellow">70%</p>
            </div>
            <p>ReactJs</p>
          </div>
          <div className="flex items-center  justify-center flex-col w-[45%] md:w-[170px] gap-3">
            <div className="rounded-[90px] hover:border-[#28E98C] p-16 border-2 border-[#999999] w-[100%] gap-6 flex items-center flex-col justify-center h-[250px]">
              <TbBrandNextjs className="text-[75px]" />
              <p className="text-3xl color-yellow">65%</p>
            </div>
            <p>NextJs</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SkillSection;