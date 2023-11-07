// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import testimonial from "./testimonial.module.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const TestimonialSlide = () => {


   const breakpoints = {
      425: {
         spaceBetween: 400,
      },
      640: {
         spaceBetween: 30,
      },
      768: {
         spaceBetween: 30,
      },
   };

   return (
      <div className={testimonial.TestimonialSlide}>
         <Swiper
            // spaceBetween={breakpoints}
            breakpoints={breakpoints}
            centeredSlides={true}
            loop={true}
            speed={2000}
            autoplay={{
               delay: 4000,
               disableOnInteraction: false,
            }}
            pagination={{
               clickable: true
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
         >
            <SwiperSlide>
               <div className="h-96 text-center w-[320px] md:w-[420px]">
                  <h2 className="text-2xl">John Doe</h2>
                  <p className="pt-3 pb-10">Author</p>
                  <p>John Doe is an accomplished author with numerous best-selling books. His captivating storytelling has left readers around the world mesmerized.</p>
                  <div className="w-14 h-14 mx-auto mt-8">
                     <img src="https://quomodosoft.com/html/library/images/client/client2.jpg" alt="" className="rounded-full" />
                  </div>
               </div>
            </SwiperSlide>
            <SwiperSlide>
               <div className="h-96 text-center w-[320px] md:w-[420px]">
                  <h2 className="text-2xl">Jane Smith</h2>
                  <p className="pt-3 pb-10">Illustrator</p>
                  <p>Jane Smith is a talented illustrator known for her beautiful and imaginative artwork. Her illustrations bring stories to life.</p>
                  <div className="w-14 h-14 mx-auto mt-8">
                     <img src="https://quomodosoft.com/html/library/images/client/client2.jpg" alt="" className="rounded-full" />
                  </div>
               </div>
            </SwiperSlide>
            <SwiperSlide>
               <div className="h-96 text-center w-[320px] md:w-[420px]">
                  <h2 className="text-2xl">David Williams</h2>
                  <p className="pt-3 pb-10">Reviewer</p>
                  <p>David Williams is a renowned book reviewer who provides insightful critiques and recommendations for avid readers.</p>
                  <div className="w-14 h-14 mx-auto mt-8">
                     <img src="https://quomodosoft.com/html/library/images/client/client2.jpg" alt="" className="rounded-full" />
                  </div>
               </div>
            </SwiperSlide>

         </Swiper>
      </div>
   );
}
export default TestimonialSlide;