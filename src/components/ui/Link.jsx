import { LuChevronLeft } from "react-icons/lu";

const Link = ({ children }) => {
  return (
    <a
      href="#"
      className="inline-flex justify-start items-center gap-1 hover:gap-2 text-primary hover:text-primary/80 text-sm transition-all duration-200"
    >
      <span className="font-bold font-dast-nevis">{children}</span>
      <span className="text-sm">
        <LuChevronLeft />
      </span>
    </a>
  );
};

export default Link;
