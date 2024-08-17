import StarBox from "./StarBox";

const RecommendationCard = ({ person }) => {
  const { name, img, message, stars } = person;

  return (
    <div className="relative p-6 bg-matte shadow-4xl transition-all duration-750">
      <div className="flex justify-start items-start">
        <div>
          <h1 className="text-slate-800 dark:text-slate-200 font-bold transition-all duration-750">
            {name}
          </h1>
          <p className="italic text-sm text-secondary">نویسنده پیام</p>
        </div>
        <img
          src={img}
          alt={name}
          className="absolute -top-4 end-6 w-16 h-16 rounded-full shadow-3xl"
        />
      </div>
      <div className="my-3">
        <p className="text-sm text-secondary">{message}</p>
      </div>
      <div>
        <StarBox starsNum={stars} />
      </div>
    </div>
  );
};

export default RecommendationCard;
