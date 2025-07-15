import useAxiosApi from "../../hooks/useAxiosApi";


const BorrowedBooks = () => {
    const borrowedBooksApi = useAxiosApi();
    
    return (
        <div className="max-w-7xl mx-auto mt-32 px-5">
           <h2 className="text-lg font-medium text-center">Total Borrowed Books</h2>
            
        </div>
    );
};

export default BorrowedBooks;