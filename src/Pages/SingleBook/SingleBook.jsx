import { RxBox } from "react-icons/rx";
import SingleBookCard from "./SingleBookCard";
import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import LoaderSpinner from "../../Component/LoaderSpinner/LoaderSpinner";

const SingleBook = () => {
   const { id } = useParams()
   // const [singleBook, setSingleBook] = useState()
   // useEffect(() => {
   //    axios.get(`http://localhost:5000/allBooks?id=${id}`)
   //       .then(res => setSingleBook(res.data))
   // }, [id])
   // const queryClient = useQueryClient()

   const fetchBook = async () => {
      const response = await axios.get(`http://localhost:5000/allBooks?id=${id}`);
      return response.data;
   };

   const { data: singleBook, isError, isLoading } = useQuery({
      queryKey: ['book', id],
      queryFn: fetchBook,
   });

   if (isLoading) {
      return <LoaderSpinner />;
   }

   if (isError) {
      console.error(isError);
   }

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
         <SingleBookCard singleBook={singleBook}></SingleBookCard>
      </div>
   );
};

export default SingleBook;