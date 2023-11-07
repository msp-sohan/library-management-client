import { Link } from "react-router-dom";
// import categoryPic from "../../assets/categoryPic.jpg"
import PropTypes from 'prop-types';

const Category = ({ category }) => {
   const { categoryName, categoryImage } = category;

   return (
      <div className="bg-base-100 flex items-center justify-center overflow-hidden ">
         <div className="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-indigo-500 drop-shadow-2xl  hover:scale-105 hover:shadow-2xl transform duration-500 cursor-pointer">
            <div className="p-4">
               <h1 className="mt-4 text-3xl font-bold hover:underline hover:text-indigo-500 cursor-pointer">{categoryName}</h1>
            </div>
            <div className="relative">
               <img className="w-full" src={categoryImage} />
               <Link to={`categoriesBook/${categoryName}`}>
                  <p className="absolute text-lg transform translate-x-20 -translate-y-24 bg-blue-600 text-white py-3 px-6 rounded-full cursor-pointer hover:scale-105 duration-500">Show More Book</p>
               </Link>
            </div>
         </div>
      </div>

   );
};
Category.propTypes = {
   category: PropTypes.object
}

export default Category;