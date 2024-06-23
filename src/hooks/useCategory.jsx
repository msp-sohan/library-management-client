import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useCategory = () => {
   const axios = useAxios()
   const { data, isLoading, refetch } = useQuery({
      queryKey: ['categorys'],
      queryFn: async () => {
         const { data } = await axios.get('/categories');
         return data;
      }
   })
   return { data, isLoading, refetch }
}
export default useCategory;