import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useAllBooks = (categoryName, availability, email) => {
   const axios = useAxios()
   const { data, isLoading, refetch } = useQuery({
      queryKey: ['allBooks', categoryName, availability],
      queryFn: async () => {
         const response = await axios.get(`/allBooks?categoryName=${categoryName}&availability=${availability}&email=${email}`);
         return response.data;
      }
   })
   return { data, isLoading, refetch };
};

export default useAllBooks;
