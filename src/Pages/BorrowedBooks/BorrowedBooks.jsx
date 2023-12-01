import BorrowBookCard from "./BorrowBookCard";
import LoaderSpinner from "../../Component/LoaderSpinner/LoaderSpinner";
import NoDataFound from "../../Component/NoDataFound/NoDataFound";
import useBorrowBook from "../../hooks/useBorrowBook";
import PageBanner from "../../Component/PageBanner/PageBanner";

const BorrowedBooks = () => {
   const { data: borrowedBook, isLoading, refetch } = useBorrowBook()

   if (isLoading) {
      return <LoaderSpinner></LoaderSpinner>
   }

   return (
      <div>
         <div>
            {/* Banner */}
            <PageBanner title="All of your Borrowed Book"></PageBanner>
            {/* Borrowrd Book */}
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