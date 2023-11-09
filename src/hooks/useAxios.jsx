import axios from "axios";

const instance = axios.create({
   baseURL: 'https://b8a11-server-side-msp-sohan.vercel.app',
   withCredentials: true

});
const useAxios = () => {
   return instance;
};

export default useAxios;