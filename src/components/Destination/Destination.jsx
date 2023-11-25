// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../assets/destination/card-image1.png";
import img2 from "../../assets/destination/card-image-2.png";
import img3 from "../../assets/destination/card-image-3.png";
import img4 from "../../assets/destination/card-image-4.png";
import { FaEllipsisH } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "./Destination.css";

// import './styles.css';

// import required modules
import { FreeMode } from "swiper/modules";
import SwiperNavButton from "./SwiperNavButton/SwiperNavButton";

const Destination = () => {
  return (
    <div className="destination-wrapper">

      <h1 className="title-head">Our Destinations</h1>

      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[FreeMode]}
        className="mySwiper"
      >
        <SwiperSlide className="card-detail">
          <img className="card-image" src={img1} alt="" />
          <h1>Harvard University</h1>
          <div className="card-info">
            <span>Cambridge, Massachusetts, UK</span>
            <button className="card-info-btn"><FaEllipsisH /></button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="card-detail">
          <img className="card-image" src={img2} alt="" />
          <h1>Harvard University</h1>
          <div className="card-info">
            <span>Cambridge, Massachusetts, UK</span>
            <button className="card-info-btn"><FaEllipsisH /></button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="card-detail">
          <img className="card-image" src={img3} alt="" />
          <h1>Harvard University</h1>
          <div className="card-info">
            <span>Cambridge, Massachusetts, UK</span>
            <button className="card-info-btn"><FaEllipsisH /></button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="card-detail">
          <img className="card-image" src={img4} alt="" />
          <h1>Harvard University</h1>
          <div className="card-info">
            <span>Cambridge, Massachusetts, UK</span>
            <button className="card-info-btn"><FaEllipsisH /></button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="card-detail">
          <img className="card-image" src={img1} alt="" />
          <h1>Harvard University</h1>
          <div className="card-info">
            <span>Cambridge, Massachusetts, UK</span>
            <button className="card-info-btn"><FaEllipsisH /></button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="card-detail">
          <img className="card-image" src={img2} alt="" />
          <h1>Harvard University</h1>
          <div className="card-info">
            <span>Cambridge, Massachusetts, UK</span>
            <button className="card-info-btn"><FaEllipsisH /></button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="card-detail">
          <img className="card-image" src={img3} alt="" />
          <h1>Harvard University</h1>
          <div className="card-info">
            <span>Cambridge, Massachusetts, UK</span>
            <button className="card-info-btn"><FaEllipsisH /></button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="card-detail">
          <img className="card-image" src={img4} alt="" />
          <h1>Harvard University</h1>
          <div className="card-info">
            <span>Cambridge, Massachusetts, UK</span>
            <button className="card-info-btn"><FaEllipsisH /></button>
          </div>
        </SwiperSlide>

        <SwiperNavButton></SwiperNavButton>
       
      </Swiper>
    </div>
  );
};

export default Destination;
