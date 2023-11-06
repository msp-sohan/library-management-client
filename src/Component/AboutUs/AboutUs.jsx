import { RxBox } from 'react-icons/rx';
import { BsPersonVcard } from 'react-icons/bs';
import { FaMedal, FaBook } from 'react-icons/fa6';
import { BiBookReader } from 'react-icons/bi';
import ImageCard from './ImageCard';

const AboutUs = () => {
   return (
      <div className='my-20 container mx-auto px-2'>
         <div className='text-center '>
            <h1 className='text-5xl font-semibold dark:text-white'>About <span className='text-blue-500'>Us</span></h1>
            <div className='flex justify-center items-center py-5'>
               <hr className='border border-black w-96 dark:border-indigo-400' />
               <RxBox className='rotate-45 mx-5 text-2xl dark:text-white'></RxBox>
               <hr className='border border-black w-96 dark:border-indigo-500' />
            </div>
            <p className='text-lg dark:text-white'>Welcome to our library! We are passionate about books and dedicated to providing you with the best reading experience.</p>
         </div>

         <div className='grid grid-cols-1 lg:grid-cols-7 xl:grid-cols-2 gap-5 mt-12'>
            <div className='p-2 lg:col-span-4 xl:col-span-1'>
               <div>
                  <div className='flex gap-3'>
                     <RxBox className='text-yellow-600 bg-yellow-600 rotate-45'></RxBox>
                     <RxBox className='text-yellow-600 bg-yellow-600 rotate-45'></RxBox>
                     <RxBox className='text-yellow-600 bg-yellow-600 rotate-45'></RxBox>
                  </div>
                  <p className='text-[18px] pt-5 dark:text-white'>Our library offers a diverse collection of books that cater to all your interests. We believe that reading is not just a hobby but a way of life.</p>
               </div>
               <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-16'>
                  <div className='bg-gray-200 p-2 rounded-md hover:shadow-2xl hover:shadow-blue-500'>
                     <div className='flex items-center h-12'>
                        <BsPersonVcard className='text-3xl '></BsPersonVcard>
                        <hr className='py-[1px] bg-black ml-2 w-40 border-b-4' />
                     </div>
                     <h1 className='text-2xl h-12 pt-2 font-semibold'>Member Card</h1>
                     <p className='text-lg h-20 md:h-28 lg:h-28 overflow-hidden'>Become a member and unlock a world of opportunities for reading and knowledge. Our membership card offers exclusive benefits and discounts.</p>
                  </div>
                  <div className='bg-gray-200 p-2 rounded-md hover:shadow-2xl hover:shadow-blue-500'>
                     <div className='flex items-center h-12'>
                        <FaMedal className='text-3xl '></FaMedal>
                        <hr className='py-[1px] bg-black ml-2 w-40 border-b-4' />
                     </div>
                     <h1 className='text-2xl h-12 pt-2 font-semibold'>High Quality Books</h1>
                     <p className='text-lg h-20 md:h-28 lg:h-28 overflow-hidden'>Our collection is curated with care, ensuring that you have access to high-quality books that enlighten, entertain, and inspire.</p>
                  </div>
                  <div className='bg-gray-200 p-2 rounded-md hover:shadow-2xl hover:shadow-blue-500'>
                     <div className='flex items-center h-12'>
                        <BiBookReader className='text-3xl'></BiBookReader>
                        <hr className='py-[1px] bg-black ml-2 w-40 border-b-4' />
                     </div>
                     <h1 className='text-2xl h-12 font-semibold pt-2'>Free All Books</h1>
                     <p className='text-lg h-20 md:h-28 lg:h-28 overflow-hidden'>Access our extensive library of books without any cost. Knowledge should be accessible to all, and we stand by this principle.</p>
                  </div>
                  <div className='bg-gray-200 p-2 rounded-md hover:shadow-2xl hover:shadow-blue-500'>
                     <div className='flex items-center h-12'>
                        <FaBook className='text-3xl'></FaBook>
                        <hr className='py-[1px] bg-black ml-2 w-40 border-b-4' />
                     </div>
                     <h1 className='text-2xl h-12 font-semibold pt-2'>Up To Date Books</h1>
                     <p className='text-lg h-20 md:h-28 lg:h-28 overflow-hidden'>We continuously update our book collection to keep you informed with the latest and greatest publications in various fields.</p>
                  </div>
               </div>
            </div>
            <div className='py-5 px-16 xl:pl-36 h-[450px] md:hidden md:w-[450px] lg:w-[430px] xl:w-[600px] lg:h-[500px] xl:h-[600px] lg:mt-32 xl:mt-16 lg:block flex justify-end  items-center lg:col-span-3 xl:col-span-1 overflow-hidden'>
               <ImageCard></ImageCard>
            </div>
         </div>
      </div>

   );
};

export default AboutUs;