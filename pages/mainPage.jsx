import SidebarInfo from "@/components/SidebarInfo";
import "../styles/global.css";
import IntroducSection from "@/components/IntroduceSection";
import AboutSection from "@/components/AboutSection";
import ResumeSection from "@/components/ResumeSection";
import ServicesSection from "@/components/ServicesSection";
import SkillSection from "@/components/SkillSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";

import resumeData from "../lib/data_for_resume.json";

export async function getStaticProps() {
  return {
    props: {
      resumeData,
    },
  };
}


function mainPage({ resumeData }) {
  return (
    <>
      <div className="flex w-[100%] flex-col gap-16 md:items-center md:justify-center md:gap-x-10 xl:pt-24 xl:flex-row xl:gap-x-2 xl:items-start">
        <div className="xl:fixed xl:top-28 xl:left-4">
          <SidebarInfo Data={resumeData} />
        </div>
        <div className="flex flex-col xl:w-[820px] xl:ml-[400px] gap-y-32 mb-16">
          <IntroducSection />
          <AboutSection />
          <ResumeSection />
          <ServicesSection />
          <SkillSection />
          <PortfolioSection />
          <ContactSection />
        </div>
      </div>
    </>
  );
}

export default mainPage;
