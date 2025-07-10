
import { MdCardMembership } from 'react-icons/md';
import aboutImage from "../assets/about-image.jpg"
import { FaBook, FaMedal } from 'react-icons/fa';
import { FcReading } from 'react-icons/fc';
import Divider from './shared/Divider';

const AboutUs = () => {
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
                    <div className='hidden md:flex flex-1/2'>
                        <img className='aspect-[11/12] size-full object-cover rounded-lg' src={aboutImage} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;