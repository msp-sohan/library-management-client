import { RxBox } from "react-icons/rx";
import BorrowBookCard from "./BorrowBookCard";
import LoaderSpinner from "../../Component/LoaderSpinner/LoaderSpinner";
import NoDataFound from "../../Component/NoDataFound/NoDataFound";
import useBorrowBook from "../../hooks/useBorrowBook";

const BorrowedBooks = () => {
   const { data: borrowedBook, isLoading, refetch } = useBorrowBook()


   if (isLoading) {
      return <LoaderSpinner></LoaderSpinner>
   }

   return (
      <div>
         <div>
            <div className="relative bg-black">
               <img src="https://quomodosoft.com/html/library/images/slide/slide1.jpg" alt="" className="opacity-40 md:h-[50vh] xl:h-[60vh] w-full" />
               <div className="absolute w-full top-[40%] lg:top-[50%]">
                  <h2 className="text-white text-2xl md:text-4xl text-center">All of your Borrowed Book</h2>
                  <div className='flex items-center justify-center pt-5'>
                     <hr className='bg-black w-20 xl:w-40' />
                     <RxBox className='rotate-45 text-xl text-white'></RxBox>
                     <hr className='bg-black w-4' />
                     <RxBox className='rotate-45 text-xl text-white'></RxBox>
                     <hr className='bg-black w-20 xl:w-40' />
                  </div>
               </div>
            </div>
            <div className="max-w-[1000px] mx-auto mt-20 grid grid-cols-1 lg:grid-cols-2 gap-5">
               {!borrowedBook?.length ? <NoDataFound></NoDataFound> :
                  borrowedBook?.map(borrowBook => <BorrowBookCard key={borrowBook._id} borrowBook={borrowBook} refetch={refetch}></BorrowBookCard>)
               }
            </div>
         </div>
      </div>
   );
};

export default BorrowedBooks;