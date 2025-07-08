

const Slide = ({ heading, image, intro }) => {
    return (
        <div className="w-full h-[calc(100vh-150px)] bg-center bg-cover"
            style={{ backgroundImage: `url(${image})` }}>


            <div className="flex flex-col justify-center items-center w-full h-full bg-black/20 p-4">
                <h2 className="text-3xl font-bold text-white">{heading}</h2>
                <p className="text-xl font-bold text-white">{intro}</p>
            </div>

        </div>
    );
};

export default Slide;