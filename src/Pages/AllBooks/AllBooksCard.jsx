import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const AllBooksCard = ({ id }) => {
   return (
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-3">
         {/* 1st */}
         <div className="border border-black dark:bg-white hover:border-yellow-600 hover:scale-105 duration-700 flex gap-4 max-w-[600px] h-[320px] p-2 mx-2 md:mx-auto">
            <div className="f;ex-1">
               <img src="https://quomodosoft.com/html/library/images/book/book-xs-1.jpg" alt="" className="h-full" />
            </div>
            <div className="flex-1">
               <h2 className="text-xl h-12 md:font-semibold mb-3">Smothered In Hughs</h2>
               <p className="text-base h-7 mb-3">By John Doe</p>
               <p className="text-base h-7 mb-3">Category</p>
               <p className="h-7 mb-3">Rating</p>
               <p className="h-[68px] overflow-hidden">Quick Brown Fox Jump Over the Lazy Dog. Quick Brown Fox Jump Over the Lazy Dog.</p>
               <Link to={`/AllBooks/${id}`}>
                  <button className="px-5 bg-indigo-400 text-white hover:bg-transparent hover:text-black hover:border-indigo-500 py-1 border text-lg font-semibold rounded-md mt-4 duration-500">Upadate</button>
               </Link>

            </div>
         </div>
         {/* 2nd  */}
         <div className="border border-black dark:bg-white hover:border-yellow-600 hover:scale-105 duration-700 flex gap-4 max-w-[600px] h-[320px] p-2 mx-2 md:mx-auto">
            <div className="f;ex-1">
               <img src="https://quomodosoft.com/html/library/images/book/book-xs-1.jpg" alt="" className="h-full" />
            </div>
            <div className="flex-1">
               <h2 className="text-xl h-12 md:font-semibold mb-3">Smothered In Hughs</h2>
               <p className="text-base h-7 mb-3">By John Doe</p>
               <p className="text-base h-7 mb-3">Category</p>
               <p className="h-7 mb-3">Rating</p>
               <p className="h-[68px] overflow-hidden">Quick Brown Fox Jump Over the Lazy Dog. Quick Brown Fox Jump Over the Lazy Dog.</p>
               <Link to={`/AllBooks/${id}`}>
                  <button className="px-5 bg-indigo-400 text-white hover:bg-transparent hover:text-black hover:border-indigo-500 py-1 border text-lg font-semibold rounded-md mt-4 duration-500">Upadate</button>
               </Link>
            </div>
         </div>
      </div>
   );
};

AllBooksCard.propTypes = {
   id: PropTypes.object
}

export default AllBooksCard;