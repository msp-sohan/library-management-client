import { RxBox } from "react-icons/rx";
import { FaFilter } from "react-icons/fa";
import AllBooksCard from "./AllBooksCard";
import PropTypes from 'prop-types';
import LoaderSpinner from "../../Component/LoaderSpinner/LoaderSpinner";
import useAllBooks from "../../hooks/useAllBooks";
import useCategory from "../../hooks/useCategory";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

const AllBooks = () => {
   const { user } = useAuth()
   const { isLoading, refetch } = useAllBooks();

   const [allBooks, setAllBooks] = useState()
   useEffect(() => {
      const fetchData = async () => {
         const response = await axios.get(`https://b8a11-server-side-msp-sohan.vercel.app/allBooks?email=${user?.email}`, { withCredentials: true });
         setAllBooks(response.data);
      }
      fetchData();
   }, [user.email]);

   const { data: categories } = useCategory();
   const [filteredBooks, setFilteredBooks] = useState([]);

   if (isLoading) {
      return <LoaderSpinner />
   }


   const handleFilter = () => {
      const filteredBooks = allBooks.filter((book) => book.Quantity > 0);
      setFilteredBooks(filteredBooks);
   };

   const handleZero = () => {
      const filteredBooks = allBooks.filter((book) => book.Quantity === 0);
      setFilteredBooks(filteredBooks);
   };

   const handleCategory = (e) => {
      const filteredBooks = allBooks.filter((book) => book.Category === e);
      setFilteredBooks(filteredBooks);
   }


   return (
      <div>
         {/* Header */}
         <div className="bg-black bg-opacity-90 relative">
            <img src="https://quomodosoft.com/html/library/images/slide/slide1.jpg" alt="" className="w-full -mt-[55vh] object-cover opacity-40" />
            <div className="absolute top-[76%] left-[35%]">
               <h2 className="text-white text-2xl md:text-4xl ">Choose Your Book and Enjoy</h2>
               <div className='flex items-center justify-center pt-5'>
                  <hr className='bg-black w-48' />
                  <RxBox className='rotate-45 text-xl text-white'></RxBox>
                  <hr className='bg-black w-4' />
                  <RxBox className='rotate-45 text-xl text-white'></RxBox>
                  <hr className='bg-black w-48' />
               </div>
            </div>
         </div>

         <div className="container mx-auto mt-20">
            <div className="grid grid-cols-1 lg:grid-cols-12">
               {/* Left Side */}
               <div className="lg:col-span-3 order-2 lg:order-1 pl-10 dark:text-white border pt-5">
                  <h3 className="text-3xl flex items-center gap-5"><FaFilter></FaFilter><span>Filter By</span></h3>
                  <h4 className="pt-10 text-2xl">Category</h4>
                  <div className="pt-12">
                     {
                        categories?.map(category => <button onClick={() => handleCategory(category.categoryName)} key={category._id} className="flex items-center gap-5">
                           <RxBox className="icon-rotate-on-hover" />
                           <span className="hover:rotate-0 text-xl">{category.categoryName}</span>
                        </button>)
                     }
                  </div>
                  <div>
                     <h4 className="pt-10 text-2xl">Availability</h4>
                     <button onClick={handleFilter} className="flex items-center gap-5 pt-4">
                        <RxBox className="icon-rotate-on-hover" />
                        <span className="hover:rotate-0 text-xl">In Library</span>
                     </button>
                     <button onClick={handleZero} className="flex items-center gap-5 pt-4">
                        <RxBox className="icon-rotate-on-hover" />
                        <span className="hover:rotate-0 text-xl">Out of Library</span>
                     </button>
                  </div>
               </div>
               {/* Right Side */}
               <div className="lg:col-span-9 h-full px-4 order-1 lg:order-2">
                  <div className=" h-36">
                     {/* Search Bar */}
                     <form>
                        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div className="relative">
                           <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                 <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                              </svg>
                           </div>
                           <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Your Book..." required />
                           <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                        </div>
                     </form>
                     {/* sort */}
                     <div className="flex items-center justify-between mt-8 dark:text-white">
                        <div className="flex items-center">
                           <h3 className="text-xl mr-4">Sort By:</h3>
                           <select className="w-72 rounded-md p-2 text-base bg-gray-700 text-white">
                              <option className="w-96 text-lg">Default</option>
                              <option value="0" className="w-96 text-lg">Available Book</option>
                           </select>
                        </div>
                        {filteredBooks.length > 0 ? <p className="text-base">Found Book <span> {filteredBooks ? filteredBooks.length : allBooks.length} </span> of <span>{allBooks.length}</span></p> : ""}
                     </div>
                  </div>
                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                     {isLoading ? (
                        <LoaderSpinner />
                     ) : ((filteredBooks.length > 0 ? filteredBooks : allBooks)?.map((allBook) => (
                        <AllBooksCard key={allBook._id} allBook={allBook} refetch={refetch}></AllBooksCard>
                     ))
                     )}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};
AllBooks.propTypes = {
   id: PropTypes.object
}
export default AllBooks;