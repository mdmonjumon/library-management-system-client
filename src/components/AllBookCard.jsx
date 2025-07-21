import { FaRegStar, FaStar } from "react-icons/fa6";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import { motion } from "motion/react"

const AllBookCard = ({book}) => {
    return (
        <motion.div key={book._id}
            whileHover={{ y: -10, transition: { duration: .5 } }}

            className="card md:flex-row bg-base-100 shadow-sm p-10">
            <figure>
                <img className="rounded]"
                    src={book?.image}
                    alt={book?.title} />
            </figure>
            <div className="card-body py-0 pr-0">
                <h2 className="card-title">{book?.title}</h2>
                <p>By {book?.author}</p>
                <p>Category : {book?.category}</p>
                <p>Quantity : {book?.quantity}</p>
                <p>Total Pages: {book?.length}</p>
                <Rating
                    initialRating={book?.rating}
                    emptySymbol={<span><FaRegStar className="text-xl" /></span>}
                    fullSymbol={<span><FaStar className="text-yellow-400 text-xl" /></span>}
                ></Rating>

                <div className="card-actions justify-start">
                    <Link to={`/update-book/${book?._id}`}><button className="btn btn-primary">Update</button></Link>
                </div>
            </div>
        </motion.div>
    );
};

export default AllBookCard;