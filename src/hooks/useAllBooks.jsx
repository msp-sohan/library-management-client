import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useAllBooks = () => {
   const { data, isLoading, refetch } = useQuery({
      queryKey: ['allBooks'],
      queryFn: async () => {
         const response = await axios.get('http://localhost:5000/allBooks', { withCredentials: true });
         return response.data;
      }
   })
   return { data, isLoading, refetch };
};

export default useAllBooks;


// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";

// const useAllBooks = ({ filter = 'default' }) => {

//    const { data, isLoading, refetch } = useQuery({
//       queryKey: ['allBooks', filter],
//       queryFn: async () => {
//          const response = await axios.get(`http://localhost:5000/allBooks?filter=${filter}`);
//          return response.data;
//       }
//    })
//    return { data, isLoading, refetch };
// };

// export default useAllBooks;