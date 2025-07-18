// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { Swiper, SwiperSlide } from 'swiper/react';

// slider image
import slide1 from '../assets/library-1.jpg'
import slide2 from '../assets/library-2.jpg'
import slide3 from '../assets/library-3.jpg'
import slide4 from '../assets/library-4.jpg'

// import required modules
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import Slide from './Slide';

const Carousel = () => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                effect={'fade'}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation, EffectFade]}
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
                heading="Smart Library Management"
                intro='Simplify book tracking, member management, and lending with our powerful, user-friendly system.'
                image={slide2}
                ></Slide>
                </SwiperSlide>

                {/* slide 3 */}
                <SwiperSlide>
                <Slide
                heading="Access Anywhere, Anytime"
                intro="Whether you're at home or on campus — explore and reserve books with just a few clicks."
                image={slide3}
                ></Slide>
                </SwiperSlide>

                {/* slide 4 */}
                <SwiperSlide>
                <Slide
                heading="Join the BookOcean Community"
                intro="Let me know if you want the Bengali version or want it styled for a school, college, or public library."
                image={slide4}
                ></Slide>
                </SwiperSlide>

            </Swiper>

        </div>
    );
};

export default Carousel;