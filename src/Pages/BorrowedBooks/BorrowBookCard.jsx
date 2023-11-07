import PropTypes from 'prop-types';
const BorrowBookCard = ({ borrowBook }) => {

   const { BookName, AuthorName, BookImage, Category, borrowrdDate, returnDate } = borrowBook;
   return (
      <div>
         {/* Books */}
         <div>
            {/* first book */}
            <div className="border border-black dark:bg-white hover:border-yellow-600 hover:scale-105 duration-700 flex gap-4 max-w-[600px] h-[300px] p-2 mx-2 md:mx-auto">
               <div className="flex-1">
                  <img src={BookImage} alt="" className="h-full w-[200px] md:w-[230px] " />
               </div>

               <div className="flex-1">
                  <h2 className="text-xl h-14 md:font-semibold mb-3">{BookName}</h2>
                  <p className="text-base h-7 mb-1">{AuthorName}</p>
                  <p className="text-base h-7 mb-2">{Category}</p>
                  <p className="h-7 text-base mb-1 "> Borrow Date: {borrowrdDate}</p>
                  <p className="h-14 text-base overflow-hidden">Return Date: {returnDate}</p>
                  <button className="px-5 bg-indigo-400 text-white hover:bg-transparent hover:text-black hover:border-indigo-500 py-1 border text-lg font-semibold rounded-md mt-4 duration-500">Return Book</button>

               </div>
            </div>

         </div>
      </div>
   );
};
BorrowBookCard.propTypes = {
   borrowBook: PropTypes.object
}
export default BorrowBookCard;