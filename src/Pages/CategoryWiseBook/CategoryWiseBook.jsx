import { RxBox } from "react-icons/rx";
import { Link } from "react-router-dom";
import Retings from "../../Component/Ratings/Retings";

const CategoryWiseBook = () => {
   const id = 1;
   const categoriy = "Fantacy";
   return (
      <div>
         {/* banner */}
         <div className="relative bg-black">
            <img src="https://quomodosoft.com/html/library/images/slide/slide1.jpg" alt="" className="opacity-40 md:h-[50vh] xl:h-[60vh] w-full" />
            <div className="absolute w-full top-[40%] lg:top-[50%]">
               <h2 className="text-white text-2xl md:text-4xl text-center">Books of History</h2>
               <div className='flex items-center justify-center pt-5'>
                  <hr className='bg-black w-20 xl:w-40' />
                  <RxBox className='rotate-45 text-xl text-white'></RxBox>
                  <hr className='bg-black w-4' />
                  <RxBox className='rotate-45 text-xl text-white'></RxBox>
                  <hr className='bg-black w-20 xl:w-40' />
               </div>
            </div>
         </div>
         {/* Books */}
         <div className="max-w-[1000px] mx-auto mt-20 grid grid-cols-1 lg:grid-cols-2 gap-5 ">
            {/* first book */}
            <div className="border border-black dark:bg-gray-300 hover:border-yellow-600 hover:scale-105 duration-700 flex gap-4 max-w-[600px] h-[300px] p-2 mx-2 md:mx-auto">
               <div className="f;ex-1">
                  <img src="https://quomodosoft.com/html/library/images/book/book-xs-1.jpg" alt="" className="h-full" />
               </div>

               <div className="flex-1">
                  <h2 className="text-xl h-8 md:font-semibold mb-3">Smothered In Hughs</h2>
                  <p className="text-base h-7 mb-3">By John Doe</p>
                  <p className="text-base h-7 mb-3">Category</p>
                  <div className="h-7 mb-3">
                     <Retings></Retings>
                  </div>
                  <p className="h-[68px] overflow-hidden">Quick Brown Fox Jump Over the Lazy Dog. Quick Brown Fox Jump Over the Lazy Dog.</p>
                  <Link to={`/categoriesBook/${categoriy}/${id}`}>
                     <button className="px-5 bg-indigo-400 text-white hover:bg-transparent hover:text-black hover:border-indigo-500 py-1 border text-lg font-semibold rounded-md mt-4 duration-500">Show Detail</button>
                  </Link>

               </div>
            </div>
            {/* 2nd book */}
            <div className="border border-black dark:bg-gray-300 hover:border-yellow-600 hover:scale-105 duration-700 flex gap-4 max-w-[600px] h-[300px] p-2 mx-2 md:mx-auto">
               <div className="f;ex-1">
                  <img src="https://quomodosoft.com/html/library/images/book/book-xs-1.jpg" alt="" className="h-full" />
               </div>

               <div className="flex-1">
                  <h2 className="text-xl h-8 md:font-semibold mb-3">Smothered In Hughs</h2>
                  <p className="text-base h-7 mb-3">By John Doe</p>
                  <p className="text-base h-7 mb-3">Category</p>
                  <p className="h-7 mb-3">Rating</p>
                  <p className="h-[68px] overflow-hidden">Quick Brown Fox Jump Over the Lazy Dog. Quick Brown Fox Jump Over the Lazy Dog.</p>
                  <Link to={`/categoriesBook/${categoriy}/${id}`}>
                     <button className="px-5 bg-indigo-400 text-white hover:bg-transparent hover:text-black hover:border-indigo-500 py-1 border text-lg font-semibold rounded-md mt-4 duration-500">Show Detail</button>
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
};

export default CategoryWiseBook;