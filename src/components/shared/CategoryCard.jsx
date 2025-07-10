import { HiMusicNote } from "react-icons/hi";

const CategoryCard = () => {
    return (
        <div className="border-2 rounded border-gray-400 w-fit py-10 px-7 flex flex-col items-center gap-3">
            <div className="w-20 h-20 bg-blue-800 rounded-md rotate-45 flex items-center justify-center mb-5">
                <HiMusicNote size="20" color="white" className="z-10 -rotate-45" />
            </div>
            <div className="flex items-center">
                <div className="divider w-24"></div>
                <div className="w-3 h-3 bg-gray-400 rotate-45"></div>
                <div className="divider w-24"></div>
            </div>
            <h2>Music and Art</h2>
        </div>
    );
};

export default CategoryCard;