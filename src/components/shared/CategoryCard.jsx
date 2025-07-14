import { FaBusinessTime, FaUser } from "react-icons/fa6";
import { GrTechnology } from "react-icons/gr";
import { HiMusicNote } from "react-icons/hi";
import { Link } from "react-router-dom";


const CategoryCard = ({ category }) => {
    let categoryName;
    let borderColor;
    let diamondBackground;
    let innerDiamond;

    if (category === "Art & Music") {
        categoryName = 'hover:bg-blue-800 hover:text-white'
        borderColor = 'hover:border-blue-800'
        diamondBackground = "bg-blue-800"
        innerDiamond = <HiMusicNote size="20" color="white" className="z-10 -rotate-45" />

    }
    if (category === "Biographies & Memoirs") {
        categoryName = 'hover:bg-[#D9346A] hover:text-white'
        borderColor = 'hover:border-[#D9346A]'
        diamondBackground = "bg-[#D9346A]"
        innerDiamond = <FaUser size="20" color="white" className="z-10 -rotate-45" />
        
    }
    if (category === "Business") {
        categoryName = 'hover:bg-[#FEC826] hover:text-white'
        borderColor = 'hover:border-[#FEC826]'
        diamondBackground = "bg-[#FEC826]"
        innerDiamond = <FaBusinessTime size="20" color="white" className="z-10 -rotate-45" />
    }
    if (category === "Computers & Tech") {
        categoryName = 'hover:bg-[#4BBD49] hover:text-white'
        borderColor = 'hover:border-[#4BBD49]'
        diamondBackground = "bg-[#4BBD49]"
        innerDiamond = <GrTechnology size="20" color="white" className="z-10 -rotate-45" />
    }

    return (
        <div className={`border-2 rounded border-gray-400 w-fit py-10 px-7 flex flex-col items-center gap-3 hover:border-t-transparent max-w-72 hover:shadow-2xl hover:scale-y-98 ease-in-out duration-400 hover:-translate-y-1 ${borderColor}`}>
            <div className={`w-20 h-20 rounded-md rotate-45 flex items-center justify-center my-5 ${diamondBackground}`}>
                {
                    innerDiamond
                }
            </div>
            <div className="flex items-center">
                <div className="divider w-24"></div>
                <div className="w-3 h-3 bg-gray-400 rotate-45"></div>
                <div className="divider w-24"></div>
            </div>
            <Link to={`/books/${encodeURIComponent(category)}`} className={`text-center py-2 text-lg w-full rounded hover:cursor-pointer ${categoryName}`}>{category}</Link>
        </div>
    );
};

export default CategoryCard;