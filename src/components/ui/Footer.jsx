import { LuChevronsUp } from "react-icons/lu";
import PageSection from "../pageSections/PageSection";
import { scrollTo } from "../../utils/scroll";

const Footer = () => {
  return (
    <PageSection>
      <div className="flex flex-col xs:flex-row justify-between items-center gap-4 xs:gap-0 py-4 px-8 bg-matte shadow-4xl transition-all duration-750">
        <p className="text-xs text-secondary">© 1403 تمامی حقوق محفوظ هستند</p>
        <button
          onClick={() => scrollTo("hero")}
          className="order-3 xs:order-none bg-main-2 p-2 rounded-full text-secondary hover:-translate-y-1 transition-all duration-750"
        >
          <LuChevronsUp />
        </button>
        <p className="text-xs text-secondary">ایمیل: shamlytaha2@gmail.com</p>
      </div>
    </PageSection>
  );
};

export default Footer;
