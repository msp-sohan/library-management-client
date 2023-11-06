import { RxBox } from "react-icons/rx";

const AllBooks = () => {
   return (
      <div>
         <div className="bg-black bg-opacity-90 relative">
            <img src="https://quomodosoft.com/html/library/images/slide/slide1.jpg" alt="" className="w-full -mt-[55vh] object-cover opacity-40" />
            <div className="absolute top-[76%] left-[35%]">
               <h2 className="text-white text-2xl md:text-4xl ">Choose Your Book and Enjoy</h2>
               <div className='flex items-center justify-center pt-5'>
                  <hr className='bg-black w-48' />
                  <RxBox className='rotate-45 text-xl text-white'></RxBox>
                  <hr className='bg-black w-4' />
                  <RxBox className='rotate-45 text-xl text-white'></RxBox>
                  <hr className='bg-black w-48' />
               </div>
            </div>
         </div>
         <div className="container mx-auto">
            <div className="grid grid-cols-12">
               <div className="bg-red-500 col-span-3">1</div>
               <div className="bg-green-200 col-span-9 h-screen">
                  <div>serch and filter</div>
                  <div>all books</div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default AllBooks;