import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useCategory = () => {
   const { data, isLoading, refetch } = useQuery({
      queryKey: ['category'],
      queryFn: async () => {
         const response = await axios.get('http://localhost:5000/categories');
         return response.data;
      }
   })
   return { data, isLoading, refetch }
}
export default useCategory;