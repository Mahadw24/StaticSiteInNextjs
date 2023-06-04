import "../styles/global.css";
import Pic from "../public/ProfilePic.jpg";
import { FaRegCopyright } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { BsTwitter } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

function SidebarInfo({ Data }) {
  return (
    <>
      <div className="border border-[#999999] mt-4 rounded-[30px] max-w-[768px] md:w-[768px] xl:w-[400px]">
        <div className="p-8 xl:p-12">
          <div className="flex flex-row justify-between mb-10">
            <h1 className="font-bold text-3xl">{Data.name}</h1>
            <p className="text-left xl:text-[14px] text-sm leading-5 tracking-wide">
              {Data.work}
            </p>
          </div>
          <div className="flex items-center justify-center mb-10">
            <img
              className="rounded-3xl w-56 h-48 xl:w-72 xl:h-64 object-cover bg-black opacity-70"
              src="/ProfilePic.jpg"
              alt="profilepic"
            />
          </div>
          <div className="leading-8 font-light xl:gap-y-2 xl:text-[24px] text-xl flex flex-col items-center justify-center mb-10">
            <p>{Data.email}</p>
            <p>Based in {Data.residence}</p>
          </div>
          <div className="flex flex-row items-center justify-center color-para mb-4 text-[14px]">
            <FaRegCopyright />
            <h1 className="ml-2">2023 Mahad. All Rights Reserved</h1>
          </div>
          <div className="flex items-center justify-center mb-6">
            <div className="rounded-full border p-3 mr-3 cursor-pointer color-para border-[#999999] hover:color-yellow hover:border-[#28E98C]">
              <FiInstagram />
            </div>
            <div className="rounded-full border p-3 mr-3 cursor-pointer color-para border-[#999999] hover:color-yellow hover:border-[#28E98C]">
              <BsTwitter />
            </div>
            <div className="rounded-full border p-3 mr-3 cursor-pointer color-para border-[#999999] hover:color-yellow hover:border-[#28E98C]">
              <FaGithub />
            </div>
            <div className="rounded-full border p-3 mr-3 cursor-pointer color-para border-[#999999] hover:color-yellow hover:border-[#28E98C]">
              <BsLinkedin />
            </div>
          </div>
          <button className="border-2 rounded-full flex items-center justify-center w-full text-md p-3 color-bg font-xs bg-[#28E98C] border-[#1F1F1F] hover:border-2 hover:border-[#28E98C] hover:bg-[#1F1F1F] hover:color-yellow">
            <AiOutlineMail />
            <h1 className="ml-2">HIRE ME!</h1>
          </button>
        </div>
      </div>
    </>
  );
}

export default SidebarInfo;