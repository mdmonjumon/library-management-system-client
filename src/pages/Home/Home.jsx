import AboutUs from "../../components/AboutUs";
import Carousel from "../../components/Carousel";
import Category from "../../components/Category";


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

        </div>
    );
};

export default Home;