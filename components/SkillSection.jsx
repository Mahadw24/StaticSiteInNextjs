import { RiProfileLine } from "react-icons/ri";
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
              <SiReact className="text-[75px]" />
              <p className="text-3xl color-yellow">92%</p>
            </div>
            <p>ReactJs</p>
          </div>
          <div className="flex items-center  justify-center flex-col w-[45%] md:w-[170px] gap-3">
            <div className="rounded-[90px] hover:border-[#28E98C] p-16 border-2 border-[#999999] w-[100%] gap-6 flex items-center flex-col justify-center h-[250px]">
              <SiReact className="text-[75px]" />
              <p className="text-3xl color-yellow">92%</p>
            </div>
            <p>ReactJs</p>
          </div>
          <div className="flex items-center  justify-center flex-col w-[45%] md:w-[170px] gap-3">
            <div className="rounded-[90px] hover:border-[#28E98C] p-16 border-2 border-[#999999] w-[100%] gap-6 flex items-center flex-col justify-center h-[250px]">
              <SiReact className="text-[75px]" />
              <p className="text-3xl color-yellow">92%</p>
            </div>
            <p>ReactJs</p>
          </div>
          <div className="flex items-center  justify-center flex-col w-[45%] md:w-[170px] gap-3">
            <div className="rounded-[90px] hover:border-[#28E98C] p-16 border-2 border-[#999999] w-[100%] gap-6 flex items-center flex-col justify-center h-[250px]">
              <SiReact className="text-[75px]" />
              <p className="text-3xl color-yellow">92%</p>
            </div>
            <p>ReactJs</p>
          </div>
          <div className="flex items-center  justify-center flex-col w-[45%] md:w-[170px] gap-3">
            <div className="rounded-[90px] hover:border-[#28E98C] p-16 border-2 border-[#999999] w-[100%] gap-6 flex items-center flex-col justify-center h-[250px]">
              <SiReact className="text-[75px]" />
              <p className="text-3xl color-yellow">92%</p>
            </div>
            <p>ReactJs</p>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default SkillSection;