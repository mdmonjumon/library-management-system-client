import AboutUs from "../../components/AboutUs";
import Carousel from "../../components/Carousel";


const Home = () => {
    return (
        <div>
            {/* slider section*/}
            <section>
                <Carousel></Carousel>
            </section>

            {/* about us section */}
            <section>
                <AboutUs></AboutUs>
            </section>

        </div>
    );
};

export default Home;