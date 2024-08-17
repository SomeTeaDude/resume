import { useEffect, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";

const StarBox = ({ starsNum = 1 }) => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    let sizedStars = [];

    for (let i = 1; i <= 5; i++) {
      if (i <= starsNum) {
        sizedStars.push({ size: "full" });
      } else {
        sizedStars.push({ size: "empty" });
      }
    }

    setStars(sizedStars);
  }, []);

  return (
    <div className="inline-flex justify-start items-center gap-1 p-2 bg-main-3 shadow-inner-capsol shadow-main-2 rounded-full transition-all duration-750">
      {stars.map((star, index) => (
        <span key={index} className="text-xs text-primary">
          {star.size === "full" ? <FaStar /> : null}
          {star.size === "empty" ? <FaRegStar /> : null}
        </span>
      ))}
    </div>
  );
};

export default StarBox;
