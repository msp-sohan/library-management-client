import { RxBox } from "react-icons/rx";
import { FaFilter } from "react-icons/fa";
import AllBooksCard from "./AllBooksCard";
import PropTypes from 'prop-types';
import LoaderSpinner from "../../Component/LoaderSpinner/LoaderSpinner";
import useAllBooks from "../../hooks/useAllBooks";
import useCategory from "../../hooks/useCategory";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import PageBanner from "../../Component/PageBanner/PageBanner";

const AllBooks = () => {
   const { user } = useAuth()
   const email = user.email
   const { data: categories } = useCategory();

   const [categoryName, setCategoryName] = useState([]);
   const [availability, setAvailability] = useState('all')
   const [search, setSearch] = useState("")

   const { data, isLoading, refetch } = useAllBooks(categoryName, availability, email, search);
   const allBooks = data?.result
   const total = data?.total

   if (isLoading) {
      return <LoaderSpinner />
   }

   const handleFilter = () => {
      setAvailability("inLibrary")
      setCategoryName([])
      setSearch("")
   };
   const handleZero = () => {
      setAvailability("outOfLibrary")
      setCategoryName([])
      setSearch("")
   };

   const handleCategory = (e) => {
      setCategoryName(e);
      setAvailability('all')
      setSearch("")
   }

   const handleSort = (e) => {
      setAvailability(e.target.value)
      setCategoryName([])
      setSearch("")
   }

   const handleSearch = (e) => {
      e.preventDefault()
      setSearch(e.target.search.value)
      setAvailability('all')
      setCategoryName([])
   }

   return (
      <div>
         {/* Header */}
         <PageBanner title="Choose Your Book and Enjoy"></PageBanner>

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
               <div className="lg:col-span-9 h-full px-2 md:px-4 order-1 lg:order-2">
                  <div className=" h-36">
                     {/* Search Bar */}
                     <form onSubmit={handleSearch}>
                        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div className="relative">
                           <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                 <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                              </svg>
                           </div>
                           <input type="search" name="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Your Book..." required />
                           <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                        </div>
                     </form>
                     {/* sort */}
                     <div className="md:flex items-center justify-between mt-8 dark:text-white">
                        <div className="flex items-center">
                           <h3 className="text-xl mr-4">Sort By:</h3>
                           <select onChange={(e) => handleSort(e)} className="w-72 rounded-md p-2 text-base bg-gray-700 text-white">
                              <option value="all" className="w-96 text-lg">Default</option>
                              <option value="inLibrary" className="w-96 text-lg">Available Book</option>
                           </select>
                        </div>
                        {allBooks?.length <= 0 || allBooks.length === total ? "" : <p className="text-base my-4">Found Total <span> {allBooks?.length} </span><span> of {total}</span></p>}
                     </div>
                  </div>
                  <div className="grid grid-cols-1 xl:grid-cols-2 mt-7 gap-4">
                     {isLoading ? (
                        <LoaderSpinner />
                     ) : (allBooks?.map((allBook) => (
                        <AllBooksCard key={allBook._id} allBook={allBook} refetch={refetch}></AllBooksCard>
                     ))
                     )}
                  </div>
                  {/* <div className="mt-3 flex justify-end">
                     <div className="border-2 rounded-md p-1 flex gap-2">
                        <button className="p-3  btn-outline font-semibold btn-primary lg:text-2xl btn-ghost rounded-lg" onClick={handlePrevPage}>Prev</button>
                        {
                           pages.map(page => <button
                              className={currentPage === page ? 'lg:text-2xl bg-[#4a07da] text-white font-semibold px-3 rounded-lg' : 'px-3 btn-outline btn-primary text-2xl btn-ghost rounded-lg'}
                              onClick={() => setCurrentPage(page)}
                              key={page}
                           >{page + 1}</button>)
                        }
                        <button className="p-2 btn-outline font-semibold btn-primary lg:text-2xl btn-ghost rounded-lg" onClick={handleNextPage}>Next</button>
                     </div>
                  </div> */}
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