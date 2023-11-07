import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import LoaderSpinner from '../../Component/LoaderSpinner/LoaderSpinner';

const UpdateBook = () => {
   const { id } = useParams()

   const { register, handleSubmit } = useForm();

   const { data: updateBook, isLoading } = useQuery({
      queryKey: ['updateBook', id],
      queryFn: async () => {
         const res = await axios.get(`http://localhost:5000/allBooks?id=${id}`)
         return res.data
      },
   });

   const onSubmit = data => {
      const ratings = parseInt(data.Ratings);
      if (ratings > 5) {
         toast.error('Rating Must be Equal or Less than 5.');
         return;
      }
      console.log(data);
   };

   if (isLoading) {
      return <LoaderSpinner />;
   }

   const { BookName, AuthorName, Category, Ratings } = updateBook || {}; // Initialize with an empty object if updateBook is not available

   return (
      <div className='md:mt-20 xl:mt-40 container xl:mx-auto px-3 xl:px-20 shadow-xl bg-base-100 drop-shadow-2xl shadow-indigo-400'>
         <div className='text-center pt-12'>
            <h2 className='text-2xl md:text-3xl xl:text-4xl font-semibold'>Update Book</h2>
            <p className='text-base xl:text-xl py-4'>Fill in the details of the book you want to Update:</p>
         </div>
         <form onSubmit={handleSubmit(onSubmit)}>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 items-center my-12'>
               <div className='lg:col-span-3 order-1'>
                  <label htmlFor="" className='text-xl md:text-2xl'>Book Name</label>
                  <input type="text" defaultValue={BookName} placeholder="Book Name" {...register("BookName", {})} className='w-full rounded-md p-2 bg-gray-200 outline-gray-400' />
               </div>
               <div className='lg:col-span-3 order-2'>
                  <label className='text-xl md:text-2xl'>Author Name</label>
                  <input type="text" defaultValue={AuthorName} placeholder="Author Name" {...register("AuthorName", {})} className='w-full rounded-md p-2 bg-gray-200 outline-gray-400' />
               </div>
               <div className=' lg:col-span-3 order-3'>
                  <label className='text-xl md:text-2xl'>Choose Category</label>
                  <select {...register("Category")} className='w-full rounded-md p-2 bg-gray-200 outline-gray-400'>
                     <option value={Category}>{Category}</option>
                     <option value="Fantasy">Fantasy</option>
                     <option value="History"> History</option>
                     <option value="Science_Fiction"> Science Fiction</option>
                     <option value="Romance"> Romance</option>
                  </select>
               </div>

               <div className='lg:col-span-3 order-4'>
                  <label className='text-xl md:text-2xl'>Ratings</label>
                  <input type="number" defaultValue={Ratings} placeholder="Ratings" {...register("Ratings", {})} className='w-full rounded-md p-2 bg-gray-200 outline-gray-400' />
               </div>

               <div className='lg:col-span-6 md:col-span-2 order-5'>
                  <label className='text-xl md:text-2xl'>Book Image</label>
                  <input type="text" placeholder="Book Image" {...register("BookImage", {})} className='w-full rounded-md p-2 bg-gray-200 outline-gray-400' />
               </div>
               <div className='md:col-span-2 lg:col-span-6 xl:col-span-6 order-6'>
                  <input type="submit" className='w-full rounded-md p-3 btn btn-primary text-xl mb-12' />
               </div>
            </div>
         </form>
      </div>
   );
}

export default UpdateBook;
