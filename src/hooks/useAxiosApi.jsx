import axios from "axios";


const axiosInstance = axios.create({
    baseURL:"http://localhost:5000/"
})

const useAxiosApi = () => {
    return axiosInstance
};

export default useAxiosApi;