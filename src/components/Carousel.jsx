// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';

// slider image
import slide1 from '../assets/library-1.jpg'
import slide2 from '../assets/library-2.jpg'
import slide3 from '../assets/library-3.jpg'
import slide4 from '../assets/library-4.jpg'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from './Slide';

const Carousel = () => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
            >
                {/* slide 1 */}
                <SwiperSlide>
                <Slide
                heading="Discover a World of Books"
                intro='Dive into thousands of titles across genres. From timeless classics to modern bestsellers — all at your fingertips.'
                image={slide1}
                ></Slide>
                </SwiperSlide>

                {/* slide 2 */}
                <SwiperSlide>
                <Slide
                heading="this is heading"
                image={slide2}
                ></Slide>
                </SwiperSlide>

                {/* slide 3 */}
                <SwiperSlide>
                <Slide
                heading="this is heading"
                image={slide3}
                ></Slide>
                </SwiperSlide>

                {/* slide 4 */}
                <SwiperSlide>
                <Slide
                heading="this is heading"
                image={slide4}
                ></Slide>
                </SwiperSlide>

            </Swiper>

        </div>
    );
};

export default Carousel;