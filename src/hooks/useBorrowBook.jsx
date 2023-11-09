import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxios from './useAxios';

const useBorrowBook = () => {
   const { user } = useAuth()
   const email = user.email
   console.log(email)
   const axios = useAxios()

   const { data, isLoading, isFetching, refetch } = useQuery({
      queryKey: ['borrowedBook'],
      queryFn: async () => {
         const response = await axios.get(`/borrowedBook?email=${email}`);
         return response.data;
      },
   });
   return { data, isLoading, isFetching, refetch };
};

export default useBorrowBook;
