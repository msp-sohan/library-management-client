import axios from "axios";

//                   http://localhost:5000
//                   https://the-library-hub.vercel.app

const instance = axios.create({
   baseURL: 'https://the-library-hub.vercel.app',
   withCredentials: true
});
const useAxios = () => {
   return instance;
};

export default useAxios;