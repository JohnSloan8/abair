import { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper } from 'swiper/react';

import './styles.css';

interface AbSwiperModel {
  children?: React.ReactNode[];
}

function AbNewsSwiper({ children }: AbSwiperModel) {
  return (
    <Swiper
      spaceBetween={10}
      centeredSlides={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {children}
    </Swiper>
  );
}

export default AbNewsSwiper;
