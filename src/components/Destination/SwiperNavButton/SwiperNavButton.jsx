import { useSwiper } from 'swiper/react';
import { FaArrowLeft,FaArrowRight  } from "react-icons/fa";
import "./SwiperNavButton.css"

const SwiperNavButton = () => {

     const swiper = useSwiper();

     return (
          <div className="swiper-nav-btns">
          <a className='left-arrow' onClick={() => swiper.slidePrev()}><FaArrowLeft /></a>
          <a className='right-arrow' onClick={() => swiper.slideNext()}><FaArrowRight /></a>
        </div>
     );
};

export default SwiperNavButton;