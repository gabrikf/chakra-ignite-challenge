import "swiper/css";
import "swiper/css/pagination";

import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Navigation } from "swiper";
import { SwiperSliderItem } from "./SwiperSliderItem";

export function Slider() {
  return (
    <Swiper
      pagination={true}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <SwiperSliderItem
          imgUrl="images/continents/europe3.jpg"
          title="Europa"
          subtitle="O continente mais antigo."
          href="continents"
        />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperSliderItem
          imgUrl="images/continents/africa.jpg"
          title="Africa"
          subtitle="O continente mais divertido."
          href="continents"
        />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperSliderItem
          imgUrl="images/continents/america.jpg"
          title="America"
          subtitle="O continente mais moderno."
          href="continents"
        />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperSliderItem
          imgUrl="images/continents/antartic.jpg"
          title="Antarica"
          subtitle="O continente mais frio."
          href="continents"
        />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperSliderItem
          imgUrl="images/continents/asia.jpg"
          title="Asia"
          subtitle="O continente mais culto."
          href="continents"
        />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperSliderItem
          imgUrl="images/continents/oceania.jpg"
          title="Oceania"
          subtitle="O continente relax."
          href="continents"
        />
      </SwiperSlide>

      {/* <SwiperSliderItem
        imgUrl="images/continents/africa.jpg"
        title="Africa"
        subtitle="O continente mais divertido."
      />
      <SwiperSliderItem
        imgUrl="images/continents/america.jpg"
        title="Europa"
        subtitle="O continente mais moderno."
      />
      <SwiperSliderItem
        imgUrl="images/continents/antartic.jpg"
        title="Europa"
        subtitle="O continente mais frio."
      />
      <SwiperSliderItem
        imgUrl="images/continents/asia.jpg"
        title="Europa"
        subtitle="O continente mais culto."
      />
      <SwiperSliderItem
        imgUrl="images/continents/oceania.jpg"
        title="Europa"
        subtitle="O continente relax."
      /> */}
    </Swiper>
  );
}
