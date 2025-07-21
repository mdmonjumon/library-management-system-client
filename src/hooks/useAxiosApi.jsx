import axios from "axios";
import { useEffect } from "react";
import UseAuth from "./UseAuth";



const axiosInstance = axios.create({
    baseURL: "http://localhost:5000/",
    withCredentials: true
})

const useAxiosApi = () => {

    const {userLogout} = UseAuth();

    useEffect(() => {
        axiosInstance.interceptors.response.use(response => {
            return response;
        }, error => {


            if (error.status === 401 || error.status === 403) {
               userLogout()
            }

            return Promise.reject(error);
        })
    }, [])

    return axiosInstance
};

export default useAxiosApi;