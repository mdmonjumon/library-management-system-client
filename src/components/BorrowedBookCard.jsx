import { motion } from "motion/react"
import useAxiosApi from "../hooks/useAxiosApi";
import Swal from "sweetalert2";


const BorrowedBookCard = ({ book, fetchBorrowedBooks}) => {
    const axiosApi = useAxiosApi();


    const { _id, title, author, category, image, borrowedDate, returnDate, borrowedId } = book;

    const handleReturn = (id, borrowedId) => {



        Swal.fire({
            title: "Are you sure?",
            text: "Book will be return and remove from the Borrowed Book list",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Return it!"
        }).then((result) => {
            if (result.isConfirmed) {
                // delete book from the borrowed book list
                axiosApi.delete(`borrowed-book/${borrowedId}`)
                    .then(res => {
                        if (res?.data?.deletedCount > 0) {
                            fetchBorrowedBooks();
                            Swal.fire({
                                title: "Returned!",
                                text: "Your Book has been returned.",
                                icon: "success"
                            });

                            // increase book quantity
                            axiosApi.patch(`increase-book-quantity/${id}`)
                                
                        }
                    })
            }
        });


    }


    return (
        <motion.div
            whileHover={{ y: -10, transition: { duration: .5 } }}

            className="card md:flex-row bg-base-100 shadow-sm p-10">
            <figure>
                <img className="rounded]"
                    src={image}
                    alt={title} />
            </figure>
            <div className="card-body justify py-0 pr-0">
                <h2 className="card-title">{title}</h2>
                <p>By {author}</p>
                <p>Category : {category}</p>
                <p>Borrowed Date : {borrowedDate}</p>
                <p>Return Date: {returnDate}</p>


                <div className="card-actions justify-start">
                    <button onClick={() => handleReturn(_id, borrowedId)} className="btn btn-primary">Return</button>
                </div>
            </div>
        </motion.div>
    );
};

export default BorrowedBookCard;