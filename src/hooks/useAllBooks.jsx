import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useAllBooks = (categoryName, availability, email, search) => {
   const axios = useAxios()
   const { data, isLoading, refetch } = useQuery({
      queryKey: ['allBooks', categoryName, availability, search],
      queryFn: async () => {
         const response = await axios.get(`/allBooks?categoryName=${categoryName}&availability=${availability}&email=${email}&search=${search}`);
         return response.data;
      }
   })
   return { data, isLoading, refetch };
};

export default useAllBooks;
