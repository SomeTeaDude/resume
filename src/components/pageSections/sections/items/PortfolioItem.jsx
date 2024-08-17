import Link from "../../../ui/Link";

const PortfolioItem = ({ portfolio }) => {
  return (
    <div
      className="portfolio-grid-item w-1/3 h-auto relative px-4 mb-7 overflow-hidden"
      data-category={portfolio.category}
    >
      <div className="group relative overflow-hidden w-full pb-[90%] rounded-md">
        <img
          src={`/img/portfolio/portfolio-${portfolio.id}.jpg`}
          alt={portfolio.title}
          className="group-hover:scale-105 absolute top-0 start-0 max-w-full w-full h-full object-cover object-center brightness-75 group-hover:brightness-100 transition-all duration-750"
        />
        <div className="absolute -bottom-full group-hover:bottom-0 start-0 bg-matte bg-opacity-[98%] px-4 py-6 transition-all duration-750">
          <p className="font-bold text-slate-800 dark:text-slate-200">
            {portfolio.title}
          </p>
          <p className="my-4 text-sm text-secondary">{portfolio.description}</p>
          <Link>اطلاعات بیشتر</Link>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
