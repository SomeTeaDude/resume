const HistoryCard = ({ animationDirection }) => {
  return (
    <div className="group relative">
      <span className="absolute top-2 start-0 w-4 h-4 translate-x-1/2 rounded-full bg-primary transition-all duration-750 z-10">
        <span className="absolute top-1/2 start-1/2 w-2 h-2 translate-x-1/2 -translate-y-1/2 rounded-full bg-white dark:bg-main transition-all duration-750"></span>
        <span className="group-hover:animate-ball-ping absolute top-1/2 start-1/2 w-2 h-2 translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary -z-10"></span>
      </span>
      <div
        className={`come-from-${animationDirection} relative ms-8 p-6 bg-matte shadow-4xl h-auto w-auto before:absolute before:top-3 before:start-0 before:w-3 before:h-3 before:rotate-45 before:bg-matte before:translate-x-1/2 before:transition-all before:duration-750 transition-all duration-750`}
      >
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-slate-800 dark:text-slate-200 font-bold transition-all duration-750">
              عنوان رویداد
            </h1>
            <p className="italic text-sm text-secondary">موقعیت</p>
          </div>
          <div className="inline-flex justify-start items-center gap-1 px-3 py-1 bg-main-3 shadow-inner-capsol shadow-main-2 rounded-full transition-all duration-750">
            <p className="text-xs text-secondary">تیر 1403 - مرداد 1403</p>
          </div>
        </div>
        <div className="my-4">
          <p className="text-sm text-secondary">
            لورم ایپسوم متن ساختگی که این یکی رو هم دارم از خودم دارم، باور کنید
            از تنبلیه. یعنی حوصله ندارم برم سرچ کنم لورم ایپسوم ساز! خودم
            مینویسم.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HistoryCard;
