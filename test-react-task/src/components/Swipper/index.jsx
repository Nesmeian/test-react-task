import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./style.css";

export default function AddSwiper({ images }) {
  return (
    <Swiper
      className="Swipper"
      modules={[Navigation, Scrollbar, A11y, Autoplay]}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      spaceBetween={50}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      speed={600}
    >
      {images.map((item, index) => (
        <SwiperSlide className="swiper__item" key={index}>
          <img
            src={item.img}
            className="swiper__item_img"
            alt={`slide ${index + 1}`}
          />
          <div className="swiper__item_description-container">
            <div className="swiper__item_description-text">
              {item.description}
            </div>
            <button className="swiper__item_description-btn">Buy</button>
          </div>
        </SwiperSlide>
      ))}

      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </Swiper>
  );
}

AddSwiper.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  slidesPerView: PropTypes.number,
};
