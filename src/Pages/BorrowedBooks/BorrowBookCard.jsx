import { Link } from "react-router-dom";

const BorrowBookCard = () => {
   const id = 1;
   const categoriy = "Fantacy";
   return (
      <div>
         {/* Books */}
         <div className="max-w-[1000px] mx-auto mt-20 grid grid-cols-1 lg:grid-cols-2 gap-5">
            {/* first book */}
            <div className="border border-black dark:bg-white hover:border-yellow-600 hover:scale-105 duration-700 flex gap-4 max-w-[600px] h-[300px] p-2 mx-2 md:mx-auto">
               <div className="f;ex-1">
                  <img src="https://quomodosoft.com/html/library/images/book/book-xs-1.jpg" alt="" className="h-full" />
               </div>

               <div className="flex-1">
                  <h2 className="text-xl h-8 md:font-semibold mb-3">Smothered In Hughs</h2>
                  <p className="text-base h-7 mb-3">By John Doe</p>
                  <p className="text-base h-7 mb-3">Category</p>
                  <p className="h-7 text-base mb-3"> Borrowed Date: </p>
                  <p className="h-[68px] text-base overflow-hidden">Return Date: </p>
                  <Link to={`/categoriesBook/${categoriy}/${id}`}>
                     <button className="px-5 bg-indigo-400 text-white hover:bg-transparent hover:text-black hover:border-indigo-500 py-1 border text-lg font-semibold rounded-md mt-4 duration-500">Return Book</button>
                  </Link>

               </div>
            </div>
            {/* 2nd book */}
            <div className="border border-black dark:bg-white hover:border-yellow-600 hover:scale-105 duration-700 flex gap-4 max-w-[600px] h-[300px] p-2 mx-2 md:mx-auto">
               <div className="f;ex-1">
                  <img src="https://quomodosoft.com/html/library/images/book/book-xs-1.jpg" alt="" className="h-full" />
               </div>

               <div className="flex-1">
                  <h2 className="text-xl h-8 md:font-semibold mb-3">Smothered In Hughs</h2>
                  <p className="text-base h-7 mb-3">By John Doe</p>
                  <p className="text-base h-7 mb-3">Category</p>
                  <p className="h-7 text-base mb-3"> Borrowed Date: </p>
                  <p className="h-[68px] text-base overflow-hidden">Return Date: </p>
                  <Link to={`/categoriesBook/${categoriy}/${id}`}>
                     <button className="px-5 bg-indigo-400 text-white hover:bg-transparent hover:text-black hover:border-indigo-500 py-1 border text-lg font-semibold rounded-md mt-4 duration-500">Return Book</button>
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
};

export default BorrowBookCard;