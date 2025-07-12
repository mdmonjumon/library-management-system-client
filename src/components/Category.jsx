
import Divider from "./shared/Divider";
import CategoryCard from "./shared/CategoryCard";
import useAxiosApi from "../hooks/useAxiosApi";
import { useEffect, useState } from "react";


const Category = () => {

    const axiosApi = useAxiosApi()
    const [categories, setCategories] = useState([])

    useEffect(() => {
        axiosApi.get('categories')
            .then(res => setCategories(res.data))
    }, [])



    return (
        <div className="my-20 space-y-4 px-3 max-w-7xl mx-auto">
            <h2 className="text-2xl text-center">Book <span className="font-bold">Category</span></h2>

            <Divider></Divider>

            <p className="text-center lg:w-1/2 mx-auto">Discover a diverse collection of book categories — including Fiction, Non-Fiction, Science, History, Technology, and more. Whether you're a student, researcher, or casual reader, there's something for everyone.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-5 mt-20">
                {
                    categories.map((category, index) => <CategoryCard
                        key={index}
                        category={category}
                    ></CategoryCard>)
                }
            </div>
        </div>
    );
};
export default Category;