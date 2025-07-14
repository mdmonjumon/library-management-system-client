import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";






const BookCard = ({ book }) => {

    const { _id, title, author, category, price, quantity, rating, image, length } = book

    // lg:card-side

    return (
        <div className="card md:flex-row bg-base-100 shadow-sm p-10">
            <figure>
                <img className="rounded]"
                    src={image}
                    alt={title} />
            </figure>
            <div className="card-body py-0 pr-0">
                <h2 className="card-title">{title}</h2>
                <p>By {author}</p>
                <p>Category : {category}</p>
                <p>Quantity : {quantity}</p>
                <p>Price : ${price}</p>
                <p>Total Pages: {length}</p>
                <Rating
                    initialRating={rating}
                    emptySymbol={<span><FaRegStar className="text-xl" /></span>}
                    fullSymbol={<span><FaStar className="text-yellow-400 text-xl" /></span>}
                ></Rating>

                <div className="card-actions justify-start">
                    <Link to={`/book-details/${_id}`}><button className="btn btn-primary">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default BookCard;