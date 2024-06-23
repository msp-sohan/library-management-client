import { FaBook } from 'react-icons/fa6';
import Category from "./Category";
import useCategory from "../../hooks/useCategory";
import LoaderSpinner from '../LoaderSpinner/LoaderSpinner';

const Categories = () => {

   const { data: categories, isLoading } = useCategory()
   if (isLoading) {
      return <LoaderSpinner></LoaderSpinner>
   }

   return (
      <div className="text-center container mx-auto my-12 px-3">
         <h1 className="text-2xl lg:text-3xl xl:text-4xl font-semibold dark:text-white">Our Top Categories</h1>
         <p className="py-3 lg:text-base dark:text-white">Here are some of the Top Categories of the Books Available.</p>
         <div className="flex justify-center items-center">
            <hr className="p-[1px] bg-gray-300 w-full" />
            <FaBook className="mx-5 text-3xl lg:text-5xl dark:text-white"></FaBook>
            <hr className="p-[1px] bg-gray-300 w-full" />
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-10">
            {
               categories?.map(category => <Category key={category.id} category={category}></Category>)
            }
         </div>
      </div>
   );
};

export default Categories;