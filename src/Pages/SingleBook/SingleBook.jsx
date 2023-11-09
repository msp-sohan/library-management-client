import { RxBox } from "react-icons/rx";
import SingleBookCard from "./SingleBookCard";
import { useParams } from "react-router-dom";
import useBookById from "../../hooks/useBookById";
// import useAllBooks from "../../hooks/useAllBooks";

const SingleBook = () => {
   const { id } = useParams()
   const { data: Books, isLoading, refetch } = useBookById({ id })


   return (
      <div>
         <div className="relative bg-black">
            <img src="https://quomodosoft.com/html/library/images/slide/slide1.jpg" alt="" className="opacity-40 md:h-[50vh] xl:h-[60vh] w-full" />
            <div className="absolute w-full top-[40%] lg:top-[50%]">
               <h2 className="text-white text-2xl md:text-4xl text-center">Borrow Book and Enjoy</h2>
               <div className='flex items-center justify-center pt-5'>
                  <hr className='bg-black w-20 xl:w-40' />
                  <RxBox className='rotate-45 text-xl text-white'></RxBox>
                  <hr className='bg-black w-4' />
                  <RxBox className='rotate-45 text-xl text-white'></RxBox>
                  <hr className='bg-black w-20 xl:w-40' />
               </div>
            </div>
         </div>
         {/* book Card */}
         <div>
            {Books?.map(singleBook => <SingleBookCard
               key={singleBook._id}
               singleBook={singleBook}
               refetch={refetch}
               isLoading={isLoading}
            ></SingleBookCard>)}
         </div>
      </div>
   );
};

export default SingleBook;