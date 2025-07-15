import { useEffect, useState } from "react";
import useAxiosApi from "../hooks/useAxiosApi";
import { useParams } from "react-router-dom";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import UseAuth from "../hooks/UseAuth";
import SweetAlert from "./shared/SweetAlert";

const BookDetails = () => {
    const [book, setBook] = useState([])
    const { user } = UseAuth()

    // for placeholder legend
    const [placeholder, setPlaceholder] = useState({
        regName: true,
        regEmail: true,

    });

    // api
    const singleBookApi = useAxiosApi()
    const { id } = useParams()

    useEffect(() => {
        singleBookApi.get(`book/${id}`)
            .then(res => setBook(res.data))
    }, [id])

    const { _id, title, author, category, price, quantity, rating, image, length, description } = book


    const handleBorrow = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target)
        const initialData = Object.fromEntries(formData.entries())
        initialData.bookId = _id;

        // update book quantity
        singleBookApi.patch(`book/${id}`)
            .then(res => {
                if (res?.data?.modifiedCount > 0) {
                    document.getElementById('my_modal_2').close()
                    SweetAlert("success", "Book successfully added to Borrowed Books list");

                    // single book api call again for update book quantity on ui
                    singleBookApi.get(`book/${id}`)
                        .then(res => setBook(res.data))

                    // send borrowed book and user information to server side
                    singleBookApi.post("borrowed-book", initialData)
                        .then(res => console.log(res.data))
                }
            })

    }

    return (
        <div className="max-w-7xl mx-auto mt-36">
            <div className="card md:flex-row bg-base-100 shadow-sm p-10">
                <figure>
                    <img className="rounded"
                        src={image}
                        alt={title} />
                </figure>
                <div className="card-body py-0 pr-0 flex-1/2 text-base">
                    <h2 className="card-title">{title}</h2>
                    <p>By {author}</p>

                    <p className="text-justify">{description}</p>
                    <p>Category : {category}</p>
                    <p className={quantity < 1 ? "text-rose-500" : ""}>Quantity : {quantity}</p>
                    <p>Price : ${price}</p>
                    <p>Total Pages: {length}</p>
                    <Rating
                        initialRating={rating}
                        emptySymbol={<span><FaRegStar className="text-xl" /></span>}
                        fullSymbol={<span><FaStar className="text-yellow-400 text-xl" /></span>}
                    ></Rating>

                    <div className="card-actions justify-start">
                        <button disabled={quantity < 1 ? true : false} onClick={() => document.getElementById('my_modal_2').showModal()} className="btn btn-primary text-lg">Borrow</button>
                    </div>
                </div>
            </div>
            <div>
                <dialog id="my_modal_2" className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg my-5">{title}</h3>
                        <form onSubmit={handleBorrow}>
                            {
                                user?.email &&
                                <fieldset className="fieldset space-y-5">

                                    {/* return date */}
                                    <div className="fieldset relative">
                                        <label className="label text-sm text-black absolute left-3 -top-2 bg-white z-10">Return Date</label>
                                        <input type="date" name="returnDate" className="input focus-within:outline-0 w-full" />
                                    </div>

                                    {/* name */}
                                    <div className="relative">
                                        <label className={`text-sm absolute left-3 ${placeholder.regName ? '-top-2.5 bg-white z-20' : 'top-2.5'}`}>Name</label>
                                        <input type="text"
                                            onBlur={(e) => e.target.value ? setPlaceholder({ ...placeholder, regName: true }) : setPlaceholder({ ...placeholder, regName: false })}
                                            onFocus={() => setPlaceholder({ ...placeholder, regName: true })}
                                            className="input focus-within:outline-0 w-full"
                                            name="name"
                                            placeholder={`${placeholder?.regName ? '' : 'Name'}`}
                                            required
                                            value={user?.displayName}
                                            readOnly
                                        />
                                    </div>

                                    {/* email */}
                                    <div className="relative">
                                        <label className={`text-sm absolute left-3 ${placeholder.regEmail ? '-top-2.5 bg-white z-20' : 'top-2.5'}`}>Email</label>
                                        <input type="email"
                                            onBlur={(e) => e.target.value ? setPlaceholder({ ...placeholder, regEmail: true }) : setPlaceholder({ ...placeholder, regEmail: false })}
                                            onFocus={() => setPlaceholder({ ...placeholder, regEmail: true })}
                                            className="input focus-within:outline-0 w-full"
                                            name="email"
                                            placeholder={`${placeholder?.regEmail ? '' : 'Email'}`}
                                            required
                                            value={user?.email}
                                            readOnly
                                        />
                                    </div>



                                    <button className="btn btn-neutral">Submit</button>
                                </fieldset>
                            }
                        </form>
                    </div>
                    <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                    </form>
                </dialog>
            </div>
        </div>
    );
};

export default BookDetails;