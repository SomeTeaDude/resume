import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import RecommendationCard from "./items/RecommendationCard";
import SectionTitle from "./items/SectionTitle";
import { Pagination } from "swiper/modules";
import SliderNavigation from "./items/SliderNavigation";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";

const message =
  "کار با طاها خیلی برام لذت بخش بوده. یه بار قبل از خواب بهش در مورد یک مشکل جزئی پیام دادم. صبح روز بعد اون مشکلو برطرف کرده بود! به نظرم این برام خیلی جالب بود و نشون دهنده مسئولیت پذیری طاها هست. به نظرم حتی 5 ستاره هم برای همچین آدمی کمه!";

const people = [
  {
    name: "سمیه ستاری",
    message,
    img: "/img/people/friend-1.jpg",
    stars: 5,
  },
  {
    name: "نازگل اکبری",
    message,
    img: "/img/people/friend-2.jpg",
    stars: 4,
  },
  {
    name: "غلامرضا تنها",
    message,
    img: "/img/people/friend-3.jpg",
    stars: 3,
  },
  {
    name: "علی محمدی",
    message,
    img: "/img/people/friend-4.jpg",
    stars: 2,
  },
];

const RecommendationsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div>
      <SectionTitle>نظرات و پیشنهادات</SectionTitle>
      <div>
        <Swiper
          pagination={{
            clickable: true,
            bulletActiveClass: "bg-primary",
            el: ".swiper-pagination",
          }}
          modules={[Pagination]}
          spaceBetween={50}
          slidesPerView={2}
          className="overflow-visible"
          onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
        >
          {people.map((person, index) => (
            <SwiperSlide key={index}>
              <RecommendationCard person={person} />
            </SwiperSlide>
          ))}
          <SliderNavigation currentIndex={currentIndex} />
        </Swiper>
      </div>
    </div>
  );
};

export default RecommendationsSection;
