import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useBookByEmail = ({ email }) => {
   const axios = useAxios()
   const { data, isLoading, refetch } = useQuery({
      queryKey: ['allBook', email],
      queryFn: async () => {
         const response = await axios.get(`/allBooks?email=${email}`);
         return response.data;
      }
   });
   return { data, isLoading, refetch };
};

export default useBookByEmail;
