import SwiperCore, {    Autoplay } from 'swiper';

import Slide from './heroSlide';
import { Swiper, SwiperSlide } from 'swiper/react';


import img1 from '../../img/slider/1.jpg';
import img2 from '../../img/slider/2.jpg';
import img3 from '../../img/slider/3.jpg';
import img4 from '../../img/slider/4.jpg';

// Import Swiper styles
import 'swiper/swiper.scss';
 

// install Swiper modules
SwiperCore.use([    Autoplay]);

export default () => {
const i1="https://www.gastronom.ru/binfiles/images/20200713/m02dad0a.jpg"


  return (
    <Swiper
      spaceBetween={50}
     
        autoplay={{delay:3300}}
      slidesPerView={1}
 
    >
 
      <SwiperSlide>  <Slide img={img1} /></SwiperSlide>
      <SwiperSlide>  <Slide img={img2} /></SwiperSlide>
      <SwiperSlide>  <Slide img={img3} /></SwiperSlide>
      <SwiperSlide>  <Slide img={img4} /></SwiperSlide>
 
      ...
    </Swiper>
  );
};