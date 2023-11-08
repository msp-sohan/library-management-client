import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useAllBooks = () => {
   const { data, isLoading, refetch } = useQuery({
      queryKey: ['allBooks'],
      queryFn: async () => {
         const response = await axios.get('https://b8a11-server-side-msp-sohan.vercel.app/allBooks', { withCredentials: true });
         return response.data;
      }
   })
   return { data, isLoading, refetch };
};

export default useAllBooks;
