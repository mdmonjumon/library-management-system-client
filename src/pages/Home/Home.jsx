import AboutUs from "../../components/AboutUs";
import Carousel from "../../components/Carousel";
import Category from "../../components/Category";
import PopularBooks from "../../components/PopularBooks";


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

            {/* category section */}
            <section>
                <Category></Category>
            </section>

            {/* popular books */}
            <section>
                <PopularBooks></PopularBooks>
            </section>

        </div>
    );
};

export default Home;