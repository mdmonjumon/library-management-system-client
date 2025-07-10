
import Divider from "./shared/Divider";
import CategoryCard from "./shared/CategoryCard";


const Category = () => {
    return (
        <div className="my-20 space-y-4 px-3">
            <h2 className="text-2xl text-center">Book <span className="font-bold">Category</span></h2>

            <Divider></Divider>

            <p className="text-center lg:w-1/2 mx-auto">Discover a diverse collection of book categories — including Fiction, Non-Fiction, Science, History, Technology, and more. Whether you're a student, researcher, or casual reader, there's something for everyone.</p>

            <div className="gird grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center">
                <CategoryCard></CategoryCard>
            </div>
        </div>
    );
};
export default Category;