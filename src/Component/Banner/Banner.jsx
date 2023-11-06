
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './banner.css';

// import required modules
import { Navigation } from 'swiper/modules';

const Banner = () => {
   return (
      <div>
         <Swiper navigation={true} modules={[Navigation]} className="mySwiper bg-base-100">
            {/* 1st slide */}
            <SwiperSlide>
               <div className='relative flex flex-col justify-center bg-base-100 dark:bg-gray-800'>
                  <div className='bg-black bg-opacity-90 '>
                     <img src="https://quomodosoft.com/html/library/images/slide/slide1.jpg" alt="" className='opacity-40 ' />
                  </div>

                  <div className='absolute left-0 right-0 lg:top-[30%] lg:text-left lg:left-[10%] text-white'>
                     <h4 className='text-lg  md:text-2xl xl:text-3xl'>ARE YOU SEARCHING A BOOK...?</h4>
                     <h2 className='text-3xl md:text-5xl xl:text-6xl py-5'>BIGGEST LIBRARY</h2>
                     <p className='w-[600px] hidden lg:block'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor emque laudantium, totam rem aperiam.ipsam voluptatem.</p>
                     <div className='lg:flex gap-10 mt-10 hidden'>
                        <button className='btn btn-outline hover:bg-indigo-500 hover:border-indigo-500 text-white'>See More</button>
                        <button className='btn btn-outline hover:bg-indigo-500 hover:border-indigo-500 text-white'>Visit Now</button>
                     </div>
                  </div>
               </div>
            </SwiperSlide>
            {/* 2nd slide */}
            <SwiperSlide>
               <div className='relative flex flex-col justify-center'>
                  <div className='bg-black bg-opacity-90 '>
                     <img src="https://quomodosoft.com/html/library/images/slide/slide2.jpg" alt="" className='opacity-40 ' />
                  </div>

                  <div className='absolute left-0 right-0 lg:top-[30%] lg:text-left lg:left-[10%] text-white'>
                     <h4 className='text-lg  md:text-2xl xl:text-3xl'>ARE YOU SEARCHING A BOOK...?</h4>
                     <h2 className='text-3xl md:text-5xl xl:text-6xl py-5'>BIGGEST LIBRARY</h2>
                     <p className='w-[600px] hidden lg:block'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor emque laudantium, totam rem aperiam.ipsam voluptatem.</p>
                     <div className='lg:flex gap-10 mt-10 hidden'>
                        <button className='btn btn-outline hover:bg-indigo-500 hover:border-indigo-500 text-white'>See More</button>
                        <button className='btn btn-outline hover:bg-indigo-500 hover:border-indigo-500 text-white'>Visit Now</button>
                     </div>
                  </div>
               </div>
            </SwiperSlide>
            {/* 3rd slide */}
            <SwiperSlide>
               <div className='relative flex flex-col justify-center'>
                  <div className='bg-black bg-opacity-90 '>
                     <img src="https://quomodosoft.com/html/library/images/slide/slide3.jpg" alt="" className='opacity-40 ' />
                  </div>

                  <div className='absolute left-0 right-0 lg:top-[30%] lg:text-left lg:left-[10%] text-white'>
                     <h4 className='text-lg  md:text-2xl xl:text-3xl'>ARE YOU SEARCHING A BOOK...?</h4>
                     <h2 className='text-3xl md:text-5xl xl:text-6xl py-5'>BIGGEST LIBRARY</h2>
                     <p className='w-[600px] hidden lg:block'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor emque laudantium, totam rem aperiam.ipsam voluptatem.</p>
                     <div className='lg:flex gap-10 mt-10 hidden'>
                        <button className='btn btn-outline hover:bg-indigo-500 hover:border-indigo-500 text-white'>See More</button>
                        <button className='btn btn-outline hover:bg-indigo-500 hover:border-indigo-500 text-white'>Visit Now</button>
                     </div>
                  </div>
               </div>
            </SwiperSlide>
            {/* 4th slide */}
            <SwiperSlide>
               <div className='relative flex flex-col justify-center'>
                  <div className='bg-black bg-opacity-90 '>
                     <img src="https://quomodosoft.com/html/library/images/slide/slide4.jpg" alt="" className='opacity-40 ' />
                  </div>

                  <div className='absolute left-0 right-0 lg:top-[30%] lg:text-left lg:left-[10%] text-white'>
                     <h4 className='text-lg  md:text-2xl xl:text-3xl'>ARE YOU SEARCHING A BOOK...?</h4>
                     <h2 className='text-3xl md:text-5xl xl:text-6xl py-5'>BIGGEST LIBRARY</h2>
                     <p className='w-[600px] hidden lg:block'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor emque laudantium, totam rem aperiam.ipsam voluptatem.</p>
                     <div className='lg:flex gap-10 mt-10 hidden'>
                        <button className='btn btn-outline hover:bg-indigo-500 hover:border-indigo-500 text-white'>See More</button>
                        <button className='btn btn-outline hover:bg-indigo-500 hover:border-indigo-500 text-white'>Visit Now</button>
                     </div>
                  </div>
               </div>
            </SwiperSlide>
         </Swiper>
      </div >

   );
}
export default Banner 
