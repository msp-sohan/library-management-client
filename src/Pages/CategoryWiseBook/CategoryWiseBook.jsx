import { RxBox } from "react-icons/rx";
import { Link, useParams } from "react-router-dom";
import Retings from "../../Component/Ratings/Retings";
import axios from "axios";
import { useEffect, useState } from "react";

const CategoryWiseBook = () => {
   const { categoryName } = useParams()
   const [categoryBook, setCategoryBook] = useState()

   useEffect(() => {
      axios.get(`https://b8a11-server-side-msp-sohan.vercel.app/allBooks?categoryName=${categoryName}`)
         .then(res => setCategoryBook(res.data))
   }, [categoryName])

   return (
      <div>
         {/* banner */}
         <div className="relative bg-black">
            <img src="https://quomodosoft.com/html/library/images/slide/slide1.jpg" alt="" className="opacity-40 md:h-[50vh] xl:h-[60vh] w-full" />
            <div className="absolute w-full top-[40%] lg:top-[50%]">
               <h2 className="text-white text-2xl md:text-4xl text-center">Books of your Category</h2>
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
            {
               categoryBook?.map(categoriy =>
                  <div key={categoriy.id} className="border border-black dark:bg-gray-300 hover:border-yellow-600 hover:scale-105 duration-700 flex gap-4 max-w-[600px] md:min-w-[600px] lg:min-w-[490px] xl:min-w-[500px] h-[300px] p-2 mx-2 md:mx-auto ">
                     <div className="flex-1">
                        <img src={categoriy.BookImage} alt="" className="h-full w-[200px] md:w-[230px] " />
                     </div>
                     <div className="flex-1">
                        <h2 className="text-xl h-12 md:font-semibold mb-3">{categoriy.BookName}</h2>
                        <p className="text-base h-7 mb-1">{categoriy.AuthorName}</p>
                        <p className="text-base h-6 mb-1">{categoriy.Category}</p>
                        <div className="h-7 mb-1">
                           <Retings rating={categoriy.Ratings}></Retings>
                        </div>
                        <p className="h-20 overflow-hidden">{categoriy.ShortDescription}</p>
                        <Link to={`/categoriesBook/${categoriy.Category}/${categoriy._id}`}>
                           <button className="px-5 bg-indigo-400 text-white hover:bg-transparent hover:text-black hover:border-indigo-500 py-1 border text-lg font-semibold rounded-md mt-2 duration-500">Show Detail</button>
                        </Link>
                     </div>
                  </div>)
            }

            {/* 2nd book */}
            {/* <div className="border border-black dark:bg-gray-300 hover:border-yellow-600 hover:scale-105 duration-700 flex gap-4 max-w-[600px] h-[300px] p-2 mx-2 md:mx-auto">
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
            </div> */}
         </div>
      </div>
   );
};

export default CategoryWiseBook;