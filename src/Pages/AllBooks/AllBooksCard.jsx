import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import Retings from "../../Component/Ratings/Retings";

const AllBooksCard = ({ allBook }) => {
   const { _id, BookImage, BookName, AuthorName, Category, Ratings, Quantity, ShortDescription } = allBook;

   return (
      <div className="">
         {/* 1st */}
         <div className="border border-black dark:bg-white hover:border-yellow-600 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-200 duration-700 flex gap-4 max-w-[600px] h-[320px] p-2 mx-2 md:mx-auto">
            <div className="f;ex-1">
               <img src={BookImage} alt="" className="h-full" />
            </div>
            <div className="flex-1">
               <h2 className="text-xl h-12 md:font-semibold mb-3">{BookName}</h2>
               <p className="text-base h-7 mb-1">{AuthorName}</p>
               <p className="text-base h-7 mb-2">{Category}</p>
               <p className="text-base h-7 mb-2">Quantity: {Quantity}</p>
               <div className="h-7 mb-1">
                  <Retings rating={Ratings}></Retings>
               </div>
               <p className="h-12 overflow-hidden">{ShortDescription}</p>
               <Link to={`/updateBook/${_id}`}>
                  <button className="px-5 bg-indigo-400 text-white hover:bg-transparent hover:text-black hover:border-indigo-500 py-1 border text-lg font-semibold rounded-md mt-3 duration-500">Upadate</button>
               </Link>
            </div>
         </div>
      </div>
   );
};

AllBooksCard.propTypes = {
   allBook: PropTypes.object
}

export default AllBooksCard;