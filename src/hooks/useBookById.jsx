import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useBookById = ({ id }) => {

   const { data, isLoading, refetch } = useQuery({
      queryKey: ['allBook', id],
      queryFn: async () => {
         const response = await axios.get(`https://b8a11-server-side-msp-sohan.vercel.app/allBooks?id=${id}`);
         return response.data;
      }
   });
   return { data, isLoading, refetch };
};

export default useBookById;
