import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useCategory = () => {
   const { data, isLoading, refetch } = useQuery({
      queryKey: ['category'],
      queryFn: async () => {
         const response = await axios.get('https://b8a11-server-side-msp-sohan.vercel.app/categories');
         return response.data;
      }
   })
   return { data, isLoading, refetch }
}
export default useCategory;