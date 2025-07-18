import { FaArrowLeftLong } from "react-icons/fa6";
import { MdCardMembership } from 'react-icons/md';
import { FaBook, FaMedal } from 'react-icons/fa';
import { FcReading } from 'react-icons/fc';
import Divider from './shared/Divider';
import { useEffect, useState } from "react";
import useAxiosApi from "../hooks/useAxiosApi";

const AboutUs = () => {
    const axiosApi = useAxiosApi();
    const [images, setImages] = useState([]);
    const [changeImages, setChangeImages] = useState(0)
    useEffect(() => {
        axiosApi.get('images')
            .then(res => setImages(res.data))
    }, [])

    const handleChangeImage = () => {
        if (changeImages === images.length - 1) {
            setChangeImages(0)
            return
        }
        setChangeImages(changeImages + 1);
    }

    return (
        <div className='bg-[#F5F5F5] py-20 px-3'>
            <div className='max-w-7xl mx-auto'>
                <h2 className='text-2xl text-center'>About <span className='font-bold'>Us</span></h2>

                {/* divider */}
                <Divider></Divider>

                <p className='text-justify'><strong>BookOcean</strong> is a modern, cloud-based Library Management System designed to streamline the way libraries operate. Whether you’re managing thousands of titles or serving a growing community of readers, BookOcean makes it easy to organize, track, and access resources — anytime, anywhere. Our goal is to empower institutions, librarians, and readers with a seamless, user-friendly platform that blends the beauty of reading with the efficiency of technology.</p>

                <div className='flex items-center mt-20'>
                    <div className='w-full grid grid-cols-2 gap-5'>
                        <div className='space-y-3'>
                            <div className='flex items-center gap-1'>
                                <MdCardMembership size="30" color='blue' />
                                <div className='divider divider-primary w-20'></div>
                            </div>
                            <h2 className='text-lg font-medium'>Member Card</h2>
                            <p className='w-4/5'>Access your borrowed books, reading history, and manage your reservations — all in one place.</p>
                        </div>

                        <div className='space-y-3'>
                            <div className='flex items-center gap-1'>
                                <FaMedal size="30" color='blue' />
                                <div className='divider divider-primary w-20'></div>
                            </div>
                            <h2 className='text-lg font-medium'>High Quality Books</h2>
                            <p className='w-4/5'>Carefully curated and well-maintained books across all genres — ensuring the best reading experience every time.</p>
                        </div>
                        <div className='space-y-3'>
                            <div className='flex items-center gap-1'>
                                <FcReading size="35" color='blue' />
                                <div className='divider divider-primary w-20'></div>
                            </div>
                            <h2 className='text-lg font-medium'>Free All Books</h2>
                            <p className='w-4/5'>Enjoy unlimited access to all books — absolutely free. Read, borrow, and explore without any cost.</p>
                        </div>
                        <div className='space-y-3'>
                            <div className='flex items-center gap-1'>
                                <FaBook size="30" color='blue' />
                                <div className='divider divider-primary w-20'></div>
                            </div>
                            <h2 className='text-lg font-medium'>Up To Date Books</h2>
                            <p className='w-4/5'>Stay current with the latest editions, newly released titles, and regularly updated content across all categories.</p>
                        </div>
                    </div>
                    <div className='hidden md:flex flex-1/2 relative'>
                        <img className='aspect-[11/14] size-full object-cover rounded-lg' src={images[changeImages]} alt="" />
                        <div onClick={handleChangeImage} className='h-10 w-10 border-2 border-blue-600 absolute z-10 -bottom-5 right-1/2 translate-x-1/2 rotate-45 bg-white flex justify-center items-center rounded cursor-pointer'>
                            <FaArrowLeftLong className="size-5 rotate-135 text-blue-600" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;