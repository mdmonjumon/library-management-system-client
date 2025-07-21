import { useEffect, useState } from "react";
import useAxiosApi from "../../hooks/useAxiosApi";
import AllBookCard from "../../components/AllBookCard";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";


const AllBooks = () => {
    const axiosAllBook = useAxiosApi();
    const [books, setBooks] = useState([]);
    const [actionView, setActionView] = useState({ view: "Card" })

    useEffect(() => {
        axiosAllBook.get('books')
            .then(res => setBooks(res.data))

    }, [])

    const handleAvailableBooks = () => {
        const availableBooks = books.filter(book => book.quantity > 0);
        setBooks(availableBooks);
    }

    return (
        <div className="max-w-7xl mx-auto mt-28 px-3">
            <div className="flex flex-col gap-4 lg:flex-row items-center justify-between">
                {/* view action */}
                <fieldset className="fieldset grid-cols-2">
                    <label className="label text-lg">View by:</label>
                    <select onChange={(e) => setActionView({ ...actionView, view: e.target.value })} className="select">
                        <option>Card</option>
                        <option>Table</option>
                    </select>
                </fieldset>

                {/* total books */}
                <div>
                    <h2 className="text-center text-2xl">Total ({books.length}) books</h2>
                </div>

                {/* filter */}
                <div>
                    <button onClick={handleAvailableBooks}
                        className="btn btn-info text-lg"

                    >Available Books</button>
                </div>

            </div>

            {/* all books */}

            {
                actionView.view === "Card" ?
                    // card view
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-20">
                        {books.map(book => <AllBookCard key={book._id} book={book}></AllBookCard>)}
                    </div>
                    :
                    // table view
                    <div className="overflow-x-auto my-10">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Title</th>
                                    <th>Rating</th>
                                    <th>Quantity</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    books.map(book => <tr key={book._id} className="hover:bg-stone-100">
                                        <td>
                                            <div className="h-48 w-36">
                                                <img className="rounded size-full"
                                                    src={book.image}
                                                    alt={book.title} />
                                            </div>
                                        </td>
                                        <td className="content-start space-y-3 text-base">
                                            <h2 className="text-lg font-medium">{book.title}</h2>
                                            <p>Author: {book.author}</p>
                                            <p>Category: {book.category}</p>
                                            <p>Page: {book.length} pages</p>

                                        </td>
                                        <td>
                                            <Rating
                                                initialRating={book?.rating}
                                                emptySymbol={<FaRegStar className="text-xl" />}
                                                fullSymbol={<FaStar className="text-yellow-400 text-xl" />}
                                            ></Rating>
                                        </td>
                                        <td>
                                            <p className="text-base">{book.quantity}</p>
                                        </td>
                                        <th>
                                            <Link to={`/update-book/${book?._id}`}>

                                                <button className="btn">Update</button>
                                            </Link>
                                        </th>
                                    </tr>)
                                }


                            </tbody>
                        </table>
                    </div>
            }
        </div>
    );
};

export default AllBooks;