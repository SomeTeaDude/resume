import { useEffect, useState } from "react";
import SectionTitle from "./items/SectionTitle";
import {
  arrange,
  currentFilter as isoCurrentFilter,
  isotopize,
} from "../../../utils/isotope";
import { LuChevronLeft } from "react-icons/lu";
import PortfolioItem from "./items/PortfolioItem";

const filters = [
  {
    value: "all",
    show: "همه",
  },
  {
    value: "webTemplates",
    show: "قالب ها",
  },
  {
    value: "projects",
    show: "پروژه ها",
  },
  {
    value: "games",
    show: "بازی ها",
  },
  {
    value: "logos",
    show: "لوگو ها",
  },
];

const description =
  "لورم ایپسوم متن ساختگی که این یکی از خودمه از سایت نگرفتم، ولی خوبه چون دیگه شاید ساختگی باشه ولی بی معنی نیست!";

const portfolios = [
  {
    id: 1,
    title: "قالب فولیو",
    description,
    category: "webTemplates",
  },
  {
    id: 2,
    title: "قالب پیزون",
    description,
    category: "webTemplates",
  },
  {
    id: 3,
    title: "قالب سئو مایند",
    description,
    category: "webTemplates",
  },
  {
    id: 4,
    title: "سایت نفوس",
    description,
    category: "projects",
  },
  {
    id: 5,
    title: "سایت رولکس",
    description,
    category: "projects",
  },
  {
    id: 6,
    title: "سایت خانه سبز",
    description,
    category: "projects",
  },
  {
    id: 7,
    title: "بازی مار",
    description,
    category: "games",
  },
  {
    id: 8,
    title: "بازی پک من",
    description,
    category: "games",
  },
  {
    id: 9,
    title: "لوگو زادراکارتا",
    description,
    category: "logos",
  },
  {
    id: 10,
    title: "لوگو خانه سبز",
    description,
    category: "logos",
  },
];

const PortfolioSection = () => {
  const [currentFilter, setCurrentFilter] = useState("");

  useEffect(() => {
    isotopize();
    setCurrentFilter(isoCurrentFilter);
  }, []);

  const changeArrange = (filter) => {
    arrange(filter);
    setCurrentFilter(filter);
  };

  return (
    <div>
      <SectionTitle>نمونه کار ها</SectionTitle>
      <div className="flex justify-start items-center gap-5 my-6">
        {filters.map((filterItem) => (
          <button
            key={filterItem.value}
            onClick={() => changeArrange(filterItem.value)}
            className={`${
              currentFilter === filterItem.value
                ? "text-slate-800 dark:text-slate-200"
                : "text-slate-400 dark:text-secondary dark:hover:text-slate-200 hover:text-slate-800"
            } transition-colors duration-300`}
          >
            {filterItem.show}
          </button>
        ))}
      </div>
      <div className="portfolio-grid grid grid-cols-3 gap-6">
        {portfolios.map((portfolio) => (
          <PortfolioItem key={portfolio.id} portfolio={portfolio} />
        ))}
      </div>
    </div>
  );
};

export default PortfolioSection;
