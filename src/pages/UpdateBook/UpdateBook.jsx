import { useState } from "react";


const UpdateBook = () => {

    const [placeholder, setPlaceholder] = useState({
        title: false,
        author: false,
        image: false,
        quantity: false,
        rating: false,

    });


    const handleUpdateBook = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const initialData = Object.fromEntries(formData.entries());
        const updatedBookInfo = {
            ...initialData, length: parseInt(initialData.length), quantity: parseInt(initialData.quantity), rating: parseInt(initialData.rating)
        };

        if (updatedBookInfo.rating === 0 || updatedBookInfo.rating > 5) {
            alert(`rating will be between 1 to 5. You chose ${updatedBookInfo.rating}`)
            return;
        }


        


    }


    return (
        <div className="hero bg-base-200 min-h-[calc(100vh-353px)] mt-14">
            <div className="hero-content flex-col lg:flex-row-reverse mt-10">
                <div className="card bg-base-100 min-w-sm md:min-w-lg md:max-w-lg shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h2 className="text-xl text-center">Update Your Book</h2>
                        <form onSubmit={handleUpdateBook}>
                            <fieldset className="fieldset space-y-5">
                                {/* Title */}
                                <div className="relative">
                                    <label className={`text-sm absolute left-3 ${placeholder.title ? '-top-2.5 bg-white z-20' : 'top-2.5'}`}>Book Title</label>
                                    <input type="text"
                                        onBlur={(e) => e.target.value ? setPlaceholder({ ...placeholder, title: true }) : setPlaceholder({ ...placeholder, title: false })}
                                        onFocus={() => setPlaceholder({ ...placeholder, title: true })}
                                        className="input focus-within:outline-0 w-full"
                                        name="title"
                                        placeholder={`${placeholder?.title ? '' : 'Book Title'}`}
                                        required />
                                </div>

                                {/* Author Name */}
                                <div className="relative">
                                    <label className={`text-sm absolute left-3 ${placeholder.author ? '-top-2.5 bg-white z-20' : 'top-2.5'}`}>Author Name</label>
                                    <input type="text"
                                        onBlur={(e) => e.target.value ? setPlaceholder({ ...placeholder, author: true }) : setPlaceholder({ ...placeholder, author: false })}
                                        onFocus={() => setPlaceholder({ ...placeholder, author: true })}
                                        className="input focus-within:outline-0 w-full"
                                        name="author"
                                        placeholder={`${placeholder?.author ? '' : 'Author Name'}`}
                                        required />
                                </div>

                                {/* book photo */}
                                <div className="relative">
                                    <label className={`text-sm absolute left-3 ${placeholder.image ? '-top-2.5 bg-white z-20' : 'top-2.5'}`}>Book Photo URL</label>
                                    <input type="url"
                                        onBlur={(e) => e.target.value ? setPlaceholder({ ...placeholder, image: true }) : setPlaceholder({ ...placeholder, image: false })}
                                        onFocus={() => setPlaceholder({ ...placeholder, image: true })}
                                        className="input focus-within:outline-0 w-full"
                                        name="photo"
                                        placeholder={`${placeholder?.image ? '' : 'Book Photo URL'}`}
                                        required />
                                </div>


                                {/* category */}
                                <div className="relative">
                                    <select name="category" defaultValue={"Pick Book Category"} className="select w-full focus-within:outline-0" required>
                                        <option disabled>Pick Book Category</option>
                                        <option>Art & Music</option>
                                        <option>Biographies & Memoirs</option>
                                        <option>Business</option>
                                        <option>Computers & Tech</option>
                                    </select>
                                </div>

                                {/* quantity */}
                                <div className="relative">
                                    <label className={`text-sm absolute left-3 ${placeholder.quantity ? '-top-2.5 bg-white z-20' : 'top-2.5'}`}>Quantity</label>
                                    <input type="number"
                                        onBlur={(e) => e.target.value ? setPlaceholder({ ...placeholder, quantity: true }) : setPlaceholder({ ...placeholder, quantity: false })}
                                        onFocus={() => setPlaceholder({ ...placeholder, quantity: true })}
                                        className="input focus-within:outline-0 w-full"
                                        name="quantity"
                                        placeholder={`${placeholder?.quantity ? '' : 'Quantity'}`}
                                        required />
                                </div>

                                {/* rating */}
                                <div className="relative">
                                    <label className={`text-sm absolute left-3 ${placeholder.rating ? '-top-2.5 bg-white z-20' : 'top-2.5'}`}>Rating</label>
                                    <input type="number"
                                        onBlur={(e) => e.target.value ? setPlaceholder({ ...placeholder, rating: true }) : setPlaceholder({ ...placeholder, rating: false })}
                                        onFocus={() => setPlaceholder({ ...placeholder, rating: true })}
                                        className="input focus-within:outline-0 w-full"
                                        name="rating"
                                        placeholder={`${placeholder?.rating ? '' : 'Rating (between 1 to 5)'}`}
                                        required />
                                </div>

                                <button className="btn btn-neutral">Update Book</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateBook;