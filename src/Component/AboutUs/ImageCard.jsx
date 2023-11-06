// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './ImageCard.css';

// import required modules
import { EffectCards } from 'swiper/modules';

const ImageCard = () => {
   return (
      <>
         <Swiper effect={'cards'} grabCursor={true} loop={true} modules={[EffectCards]} className="mySwiper overflow-hidden" >
            <SwiperSlide>
               <img src="https://quomodosoft.com/html/library/images/about-slide/slide1.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
               <img src="https://quomodosoft.com/html/library/images/about-slide/slide2.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
               <img src="https://quomodosoft.com/html/library/images/about-slide/slide3.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
               <img src="https://quomodosoft.com/html/library/images/about-slide/slide4.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
               <img src="https://quomodosoft.com/html/library/images/about-slide/slide5.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
               <img src="https://quomodosoft.com/html/library/images/about-slide/slide6.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
               <img src="https://quomodosoft.com/html/library/images/about-slide/slide2.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
               <img src="https://quomodosoft.com/html/library/images/about-slide/slide3.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
               <img src="https://quomodosoft.com/html/library/images/about-slide/slide4.jpg" alt="" />
            </SwiperSlide>


         </Swiper>
      </>
   );
}
export default ImageCard;