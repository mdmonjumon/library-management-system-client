import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosApi from "../../hooks/useAxiosApi";
import BookCard from "../../components/shared/BookCard";


const CategoryWiseBooks = () => {
    const { category } = useParams();
    const booksApi = useAxiosApi()
    const [categoryWiseBooks, setCategoryWiseBooks] = useState([])

    useEffect(() => {
        booksApi.get(`books?category=${encodeURIComponent(category)}`)
            .then(res => setCategoryWiseBooks(res.data))
    }, [category])

    return (
        <div className="max-w-7xl mx-auto mt-36">
            <h2 className="text-center text-2xl font-medium mb-10">Total {categoryWiseBooks.length}  books have on {category} category </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {
                    categoryWiseBooks.map(book=><BookCard key={book._id} book={book}></BookCard>)
                }
            </div>

        </div>
    );
};

export default CategoryWiseBooks;