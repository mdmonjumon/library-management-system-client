import { useEffect, useState } from "react";
import useAxiosApi from "../../hooks/useAxiosApi";
import UseAuth from "../../hooks/UseAuth";
import BorrowedBookCard from "../../components/BorrowedBookCard";


const BorrowedBooks = () => {
    const borrowedBooksApi = useAxiosApi();
    const { user } = UseAuth()
    const [borrowedBooks, setBorrowedBooks] = useState([])



    const fetchBorrowedBooks = async () => {

        try {
            const { data } = await borrowedBooksApi.get(`borrowed-books/${user?.email}`)
            setBorrowedBooks(data)
        }
        catch (error) {
            console.error("Error fetching borrowed books:", error);
        }
    }

    useEffect(() => {
        fetchBorrowedBooks()
    }, [])



    return (
        <div className="max-w-7xl mx-auto mt-32 px-5">
            <h2 className="text-lg font-medium text-center">Total Borrowed Books ({borrowedBooks.length})</h2>

            <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-5">
                {
                    borrowedBooks.map((book, index) => <BorrowedBookCard key={index} book={book} fetchBorrowedBooks={fetchBorrowedBooks}></BorrowedBookCard>)
                }
            </div>

        </div>
    );
};

export default BorrowedBooks;