import { BsCode } from "react-icons/bs";
import { BsStack } from "react-icons/bs";
import { DiResponsive } from "react-icons/di";
import '../styles/global.css'

function ServicesSection() {
  return (
    <>
      <div className="p-4">
        <div className="border w-min flex items-center justify-centerm py-2 px-6 rounded-full text-xs border-[#999999] mb-16">
          <BsCode />
          <h1 className="ml-2">SERVICES</h1>
        </div>
        <div>
          <h1 className="text-[48px] font-light mb-8 ml-2 font-sans">
            My <span className="color-yellow">Specializations</span>
          </h1>
        </div>
        <div className="container flex flex-col gap-4">
          <div class="p-8 container flex flex-col gap-6 border hover:border-[#28E98C] border-[#999999] rounded-3xl">
            <div class="flex flex-col gap-2">
              <div class="flex items-center justify-between">
                <h1 class="text-[24px] font-light">Full Stack Developer</h1>
                <BsStack class="color-yellow text-[30px]" />
              </div>
              <p class="text-[14px] color-para">
                Focus on building and enhancing the user interface (UI) and user
                experience (UX) of websites. This specialization involves
                expertise in HTML, CSS, JavaScript, and front-end frameworks
                like React.
              </p>
            </div>
            {/* <p class="underline-hover text-[12px]">24 Projects</p> */}
          </div>
          <div class="p-8 container flex flex-col gap-6 border hover:border-[#28E98C] border-[#999999] rounded-3xl">
            <div class="flex flex-col gap-2">
              <div class="flex items-center justify-between">
                <h1 class="text-[24px] font-light">Responsive Design</h1>
                <DiResponsive class="color-yellow text-[30px]" />
              </div>
              <p class="text-[14px] color-para">
                Focus on creating websites that are optimized for different
                screen sizes and devices. This specialization involves using
                techniques like responsive web design, mobile-first development,
                and ensuring cross-browser compatibility.
              </p>
            </div>
            {/* <p class="underline-hover text-[12px]">24 Projects</p> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default ServicesSection;
