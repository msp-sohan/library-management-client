import axios from 'axios';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';

const AddBook = () => {
   const { register, handleSubmit } = useForm();
   const { user } = useAuth();

   const onSubmit = data => {
      data.userEmail = user.email;
      axios.post('https://b8a11-server-side-msp-sohan.vercel.app/allBooks', data)
         .then((res) => {
            console.log(res.data)
            Swal.fire({
               title: "Great",
               text: "Book Added Successfully",
               icon: "success"
            });
         })
   };

   return (
      <div className='md:mt-20 xl:mt-40 container xl:mx-auto px-3 xl:px-20 shadow-xl bg-base-100 drop-shadow-2xl shadow-indigo-400'>
         <div className='text-center pt-12'>
            <h2 className='text-2xl md:text-3xl xl:text-4xl font-semibold'>Add a New Book</h2>
            <p className='text-base xl:text-xl py-4'>Fill in the details of the book you want to add:</p>
         </div>
         <form onSubmit={handleSubmit(onSubmit)}>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 items-center my-12'>
               <div className='lg:col-span-3 order-1'>
                  <label htmlFor="" className='text-xl md:text-2xl'>Book Name</label>
                  <input type="text" placeholder="Book Name" {...register("BookName", { required: true })} className='w-full rounded-md p-2 bg-gray-200 outline-gray-400' />
               </div>
               <div className='lg:col-span-3 order-2'>
                  <label className='text-xl md:text-2xl'>Author Name</label>
                  <input type="text" placeholder="Author Name" {...register("AuthorName", {})} className='w-full rounded-md p-2 bg-gray-200 outline-gray-400' />
               </div>
               <div className=' lg:col-span-2 order-3'>
                  <label className='text-xl md:text-2xl'>Choose Category</label>
                  <select {...register("Category")} className='w-full rounded-md p-2 bg-gray-200 outline-gray-400'>
                     <option>Select One</option>
                     <option value="Fantasy">Fantasy</option>
                     <option value="History"> History</option>
                     <option value="Science_Fiction"> Science Fiction</option>
                     <option value="Romance"> Romance</option>
                  </select>
               </div>
               <div className=' lg:col-span-2 order-4'>
                  <label className='text-xl md:text-2xl'>Quantity</label>
                  <input type="number" placeholder="Quantity" {...register("Quantity", {})} className='w-full rounded-md p-2 bg-gray-200 outline-gray-400' />
               </div>
               <div className='lg:col-span-2 order-5 md:order-8 lg:order-5'>
                  <label className='text-xl md:text-2xl'>Ratings</label>
                  <input type="number" placeholder="Ratings" {...register("Ratings", { max: 5, maxLength: 1 })} className='w-full rounded-md p-2 bg-gray-200 outline-gray-400' />
               </div>
               <div className='lg:col-span-3 order-6 '>
                  <label className='text-xl md:text-2xl'>Short Description</label>
                  <textarea placeholder='Short Description' {...register("ShortDescription", {})} className='w-full rounded-md p-2 bg-gray-200 outline-gray-400' />
               </div>
               <div className='lg:col-span-3 order-7 '>
                  <label className='text-xl md:text-2xl'>Long Description</label>
                  <textarea placeholder='Long Description' {...register("LongDescription", {})} className='w-full rounded-md p-2 bg-gray-200 outline-gray-400' />
               </div>
               <div className='lg:col-span-6 order-8'>
                  <label className='text-xl md:text-2xl'>Book Image</label>
                  <input type="text" placeholder="Book Image" {...register("BookImage", {})} className='w-full rounded-md p-2 bg-gray-200 outline-gray-400' />
               </div>
               <div className='md:col-span-2 lg:col-span-6 xl:col-span-6 order-9'>
                  <input type="submit" className='w-full rounded-md p-3 btn btn-primary text-xl mb-12' />
               </div>
            </div>
         </form>
      </div>
   );
}

export default AddBook;