
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { EffectCube, Navigation, Controller } from 'swiper/modules';
import { useEffect, useState } from 'react';
import useAxiosApi from '../hooks/useAxiosApi';

const PopularBooks = () => {
    const axiosApi = useAxiosApi();
    const [allBooks, setAllBooks] = useState([])
    const [firstSwiper, setFirstSwiper] = useState(null);
    const [secondSwiper, setSecondSwiper] = useState(null);

    useEffect(() => {
        axiosApi.get('books')
            .then(res => setAllBooks(res.data))
    }, [])




    return (
        <div className='max-w-7xl mx-auto py-20 px-3'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                <div className='my-auto col-span-1'>
                    <Swiper

                        effect={'cube'}
                        grabCursor={true}
                        cubeEffect={{
                            shadow: false,
                            slideShadows: true,
                            shadowOffset: 20,
                            shadowScale: 0.94,
                        }}
                        navigation={true}
                        modules={[EffectCube, Navigation, Controller]}
                        className="mySwiper"
                        onSwiper={setFirstSwiper}
                        controller={{ control: secondSwiper }}
                    >
                        {
                            allBooks.map(book => <SwiperSlide>
                                <div className='flex justify-center items-center'>
                                    <img className='rounded' src={book.image} />
                                </div>
                            </SwiperSlide>)
                        }

                    </Swiper>
                </div>

                <div className='col-span-2 shadow-2xl rounded-2xl'>
                    <h2 className="text-2xl lg:pl-10 lg:mt-5">Popular <span>Books</span></h2>

                    <div className='flex items-center lg:pl-11 mb-10'>
                        <div className='h-4 w-4 rotate-45 bg-blue-700'></div>
                        <div className='divider w-3 divider-primary'></div>
                        <div className='h-4 w-4 rotate-45 bg-blue-700'></div>
                        <div className='divider w-28 divider-primary'></div>
                    </div>



                    <div>
                        <Swiper

                            effect={'cube'}
                            grabCursor={true}
                            cubeEffect={{
                                shadow: false,
                                slideShadows: true,
                                shadowOffset: 20,
                                shadowScale: 0.94,
                            }}
                            // navigation={true}
                            modules={[EffectCube, Navigation, Controller]}
                            className="mySwiper"
                            onSwiper={setSecondSwiper}
                            controller={{ control: firstSwiper }}
                        >
                            {
                                allBooks.map(book => <SwiperSlide className='lg:px-10 space-y-5'>
                                    {/* title */}
                                    <div>
                                        <div className='flex items-center gap-2 pl-2'>
                                            <div className='h-4 w-4 rotate-45 bg-amber-400'></div>
                                            <h3 className='text-lg font-medium'>Title</h3>
                                        </div>
                                        <h2 className='text-lg pl-8'>{book.title}</h2>
                                    </div>

                                    {/* author */}
                                    <div>
                                        <div className='flex items-center gap-2 pl-2'>
                                            <div className='h-4 w-4 rotate-45 bg-amber-400'></div>
                                            <h3 className='text-lg font-medium'>Author</h3>
                                        </div>
                                        <h2 className='text-base pl-8'>{book.author}</h2>
                                    </div>

                                    {/* pages */}
                                    <div>
                                        <div className='flex items-center gap-2 pl-2'>
                                            <div className='h-4 w-4 rotate-45 bg-amber-400'></div>
                                            <h3 className='text-lg font-medium'>Page</h3>
                                        </div>
                                        <h2 className='text-base pl-8'>{book.length} pages</h2>
                                    </div>
                                    {/* description */}
                                    <div>
                                        <div className='flex items-center gap-2 pl-2'>
                                            <div className='h-4 w-4 rotate-45 bg-amber-400'></div>
                                            <h3 className='text-lg font-medium text-justify'>Description</h3>
                                        </div>
                                        <h2 className='text-base pl-8'>{book.description} pages</h2>
                                    </div>
                                </SwiperSlide>)
                            }

                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularBooks;