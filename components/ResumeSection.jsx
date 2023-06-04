import { RiProfileLine } from "react-icons/ri";
import { GoPrimitiveDot } from "react-icons/go";
import "../styles/global.css";

function ResumeSection() {
  return (
    <>
      <div className="p-4">
        <div className="border w-min flex items-center justify-centerm py-2 px-6 rounded-full text-xs border-[#999999] mb-16">
          <RiProfileLine />
          <h1 className="ml-2">RESUME</h1>
        </div>
        <div>
          <h1 className="font-light text-5xl mb-8 ml-2">
            Education & <span className="color-yellow">Experience</span>
          </h1>
        </div>
        <div className="relative">
          <div className="resume ml-16">
            <div>
              <h1 className="color-para mb-6">June 2023 - Present</h1>
              <h1 className="text-xl mb-2 font-light">
                Frontend Developer(NextJs) - Part Time
              </h1>
              <h1 className="color-para text-sm pb-4">ZIMO Group</h1>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="resume ml-16 pb-10">
            <div>
              <h1 className="color-para mb-6">April 2023 - June 2023</h1>
              <h1 className="text-xl mb-2 font-light">
                Frontend Developer(NextJs) - Internship
              </h1>
              <h1 className="color-para text-sm pb-4">ZIMO Group</h1>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="resume ml-16">
            <div>
              <h1 className="color-para mb-6">2021 - Present</h1>
              <h1 className="text-xl mb-2 font-light">Freelancing - Full Time</h1>
              <h1 className="color-para text-sm mb-4">
                Fiverr - Upwork - Freelancer - PeoplePerHour
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResumeSection;
