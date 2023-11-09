import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useBookById = ({ id }) => {
   const axios = useAxios()
   const { data, isLoading, refetch } = useQuery({
      queryKey: ['singlebook', id],
      queryFn: async () => {
         const response = await axios.get(`/singleBook?id=${id}`);
         return response.data;
      }
   });
   return { data, isLoading, refetch };
};

export default useBookById;
