import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useSwiper } from "swiper/react";

const SliderNavigation = ({ currentIndex }) => {
  const swiper = useSwiper();

  return (
    <div className="w-full flex justify-between items-center mt-4">
      <div className="flex justify-start items-center gap-2">
        <button
          onClick={() => swiper.slidePrev()}
          className={`${
            currentIndex > 0
              ? "text-secondary"
              : "text-secondary/20 pointer-events-none"
          } text-sm`}
        >
          <FaChevronRight />
        </button>
        <button
          onClick={() => swiper.slideNext()}
          className={`${
            currentIndex < swiper.slides.length - 2
              ? "text-secondary"
              : "text-secondary/20 pointer-events-none"
          } text-sm`}
        >
          <FaChevronLeft />
        </button>
      </div>
      <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"></div>
    </div>
  );
};

export default SliderNavigation;
