import { BsCode } from "react-icons/bs";
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
                <h1 class="text-[24px] font-light">Website Design</h1>
                <BsCode class="color-yellow text-[30px]" />
              </div>
              <p class="text-[14px] color-para">
                I created digital products with unique ideas using Figma and
                Framer
              </p>
            </div>
            <p class="underline-hover text-[12px]">24 Projects</p>
          </div>
          <div class="p-8 container flex flex-col gap-6 border hover:border-[#28E98C] border-[#999999] rounded-3xl">
            <div class="flex flex-col gap-2">
              <div class="flex items-center justify-between">
                <h1 class="text-[24px] font-light">Website Design</h1>
                <BsCode class="color-yellow text-[30px]" />
              </div>
              <p class="text-[14px] color-para">
                I created digital products with unique ideas using Figma and
                Framer
              </p>
            </div>
            <p class="underline-hover text-[12px]">24 Projects</p>
          </div>
          <div class="p-8 container flex flex-col gap-6 border hover:border-[#28E98C] border-[#999999] rounded-3xl">
            <div class="flex flex-col gap-2">
              <div class="flex items-center justify-between">
                <h1 class="text-[24px] font-light">Website Design</h1>
                <BsCode class="color-yellow text-[30px]" />
              </div>
              <p class="text-[14px] color-para">
                I created digital products with unique ideas using Figma and
                Framer
              </p>
            </div>
            <p class="underline-hover text-[12px]">24 Projects</p>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default ServicesSection;
