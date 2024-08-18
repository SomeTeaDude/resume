const BrandsSection = () => {
  return (
    <div className="grid grid-cols-4 px-2 xl:px-16 gap-4 sm:gap-28">
      <a
        href="#"
        className="block opacity-60 hover:opacity-100 w-auto h-auto transition-all duration-500"
      >
        <img
          src="/img/brands/brand-1.png"
          alt="brand-1"
          className="w-auto h-auto invert dark:invert-0 transition-all duration-750"
        />
      </a>
      <a
        href="#"
        className="block opacity-60 hover:opacity-100 w-auto h-auto transition-all duration-500"
      >
        <img
          src="/img/brands/brand-2.png"
          alt="brand-2"
          className="w-auto h-auto invert dark:invert-0 transition-all duration-750"
        />
      </a>
      <a
        href="#"
        className="block opacity-60 hover:opacity-100 w-auto h-auto transition-all duration-500"
      >
        <img
          src="/img/brands/brand-3.png"
          alt="brand-3"
          className="w-auto h-auto invert dark:invert-0 transition-all duration-750"
        />
      </a>
      <a
        href="#"
        className="block opacity-60 hover:opacity-100 w-auto h-auto transition-all duration-500"
      >
        <img
          src="/img/brands/brand-2.png"
          alt="brand-2"
          className="w-auto h-auto invert dark:invert-0 transition-all duration-750"
        />
      </a>
    </div>
  );
};

export default BrandsSection;
