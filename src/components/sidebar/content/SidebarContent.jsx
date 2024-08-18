import { FaDownload } from "react-icons/fa";
import AdressSection from "./sections/AdressSection";
import FrameworksSection from "./sections/FrameworksSection";
import LanguagesSection from "./sections/LanguagesSection";
import OtherKnowledgeSection from "./sections/OtherKnowledgeSection";
import SidebarContentSection from "./SidebarContentSection";

const SidebarContent = () => {
  return (
    <div className="h-full overflow-auto no-scrollbar">
      <div className="flex flex-col justify-start px-8 py-4 w-full h-full divide-y divide-secondary/30">
        <SidebarContentSection>
          <AdressSection />
        </SidebarContentSection>
        <SidebarContentSection>
          <LanguagesSection />
        </SidebarContentSection>
        <SidebarContentSection>
          <FrameworksSection />
        </SidebarContentSection>
        <SidebarContentSection>
          <OtherKnowledgeSection />
        </SidebarContentSection>
        <SidebarContentSection>
          <div className="flex justify-center items-center">
            <a
              href="#"
              className="inline-flex justify-center items-center gap-2 text-secondary hover:text-primary transition-all duration-200"
            >
              <span className="text-xs">
                <FaDownload />
              </span>
              <span className="text-sm">دانلود رزومه</span>
            </a>
          </div>
        </SidebarContentSection>
      </div>
    </div>
  );
};

export default SidebarContent;
