import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import axios from 'axios';

const useBorrowBook = () => {
   const { user } = useAuth()
   const email = user.email

   const { data, isLoading, isFetching, refetch } = useQuery({
      queryKey: ['borrowedBook'],
      queryFn: async () => {
         const response = await axios.get(`https://b8a11-server-side-msp-sohan.vercel.app/borrowedBook?email=${email}`);
         return response.data;
      },
   });
   return { data, isLoading, isFetching, refetch };
};

export default useBorrowBook;
