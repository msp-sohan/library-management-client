import { RxBox } from 'react-icons/rx';
import TestimonialSlide from './TestimonialSlide';
const Testimonial = () => {
   return (
      <div className=' xl:h-[650px] dark:bg-gray-800' style={{ backgroundImage: 'url(https://quomodosoft.com/html/library/images/say-bg.jpg)', backgroundRepeat: 'no-repeat' }}>
         <div className='bg-black h-full bg-opacity-70 text-white text-center pt-20 relative'>
            <h1 className='text-4xl'>What People Say</h1>
            <div className='flex items-center justify-center pt-5'>
               <hr className='bg-black w-40' />
               <RxBox className='rotate-45 text-xl'></RxBox>
               <hr className='bg-black w-4' />
               <RxBox className='rotate-45 text-xl'></RxBox>
               <hr className='bg-black w-40' />
            </div>
            <div className='pt-10'>
               <TestimonialSlide></TestimonialSlide>
            </div>
         </div>
      </div>
   );
};

export default Testimonial;