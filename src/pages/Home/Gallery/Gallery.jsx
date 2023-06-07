import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import slide1 from '../../../assets/home/badminton.png';
import slide2 from '../../../assets/home/cricket.png';
import slide3 from '../../../assets/home/cycling.png';
import slide4 from '../../../assets/home/frisbee.png';
import slide5 from '../../../assets/home/hiking.png';
import slide6 from '../../../assets/home/swimming.png';
import slide7 from '../../../assets/home/tennis.png';



const Gallery = () => {
    return (
        <div>
            <div className="text-5xl text-center my-6">
                <h2>Photo Gallery</h2>
            </div>
           
            <Swiper
                slidesPerView={2}
                spaceBetween={10}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-24"
            >
                <SwiperSlide>
                    <img className="h-96" src={slide1} alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-24 text-white">Badminton</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="h-96"  src={slide2} alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-24 text-white">Cricket</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="h-96"  src={slide3} alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-24 text-white">Cycling</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="h-96"  src={slide4} alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-24 text-white">Frisbee</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="h-96"  src={slide5} alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-24 text-white">Hiking</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="h-96"  src={slide6} alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-24 text-white">Swimming</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="h-96"  src={slide7} alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-24 text-white">Tennis</h3>
                </SwiperSlide>
               
            </Swiper>
        </div>
    );
};

export default Gallery;