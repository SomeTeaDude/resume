import { FaChevronLeft } from "react-icons/fa";
import { LuChevronLeft } from "react-icons/lu";
import Link from "../../../ui/Link";
import { scrollTo } from "../../../../utils/scroll";

const ServiceCard = ({ children, title }) => {
  return (
    <div className="p-6 bg-main-1 dark:bg-matte shadow-4xl transition-all duration-750">
      <h1 className="text-slate-800 dark:text-slate-200 font-bold font-dast-nevis transition-all duration-750">
        {title}
      </h1>
      <p className="text-sm text-secondary my-3">{children}</p>
      <div>
        <Link onClick={() => scrollTo("contact")}>استخدام کن</Link>
      </div>
    </div>
  );
};

export default ServiceCard;
