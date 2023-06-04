import { BsPerson } from "react-icons/bs";
function AboutSection() {
  return (
    <>
      <div className="p-4">
        <div className="border w-min flex items-center justify-centerm py-2 px-6 rounded-full text-xs border-[#999999] mb-16">
          <BsPerson />
          <h1 className="ml-2">ABOUT</h1>
        </div>
        <div>
          <h1 className="text-4xl tracking-wide mb-6 font-light xl:text-[48px] xl:leading-[60px]">
            Creating digital wonders through{" "}
            <span className="color-yellow">code</span>.
          </h1>
          <p className="color-para leading-[30px] font-light">
            Since beginning my journey as a freelance developer nearly 2 years
            ago, I've done remote work for agencies, consulted for startups, and
            collaborated with talented people to create digital products for
            both business and consumer use. I'm quietly confident.
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutSection;
