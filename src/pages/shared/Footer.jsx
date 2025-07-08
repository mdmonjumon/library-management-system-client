import { IoLocationSharp } from 'react-icons/io5';
import footerLogo from '../../assets/logo.jpg'
import { MdEmail } from 'react-icons/md';
import { FaFacebookF, FaLinkedinIn, FaPhoneAlt } from 'react-icons/fa';
import { CgTwitter } from 'react-icons/cg';
import { FaSquareInstagram } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className='bg-base-200'>
            <footer className="footer grid-cols-4 max-w-7xl mx-auto sm:footer-horizontal text-base-content p-10 place-items-center-safe">
                <aside className='col-span-2'>
                    <img className='w-20' src={footerLogo} alt="" />
                    <h2 className='text-lg font-medium bg-gradient-to-r from-blue-500 to-green-500 text-clip text-transparent bg-clip-text'>BookOcean</h2>
                    <p className='text-base text-justify'>BookOcean — Your digital gateway to endless knowledge. Easily manage, explore, and borrow books from anywhere, anytime. Empowering readers. Simplifying library operations.</p>

                    {/* social links */}
                    <div className='flex items-center gap-3 mt-5'>
                        <FaFacebookF className='hover:cursor-pointer' size='25'/>
                        <CgTwitter className='hover:cursor-pointer' size='30'/>
                        <FaSquareInstagram className='hover:cursor-pointer' size='25'/>
                        <FaLinkedinIn className='hover:cursor-pointer' size='30'/>
                    </div>
                </aside>

                <nav>
                    <h6 className="footer-title">Contact Us</h6>
                    {/* address */}
                    <div className='flex'>
                        <IoLocationSharp size='30' />
                        <address className='text-base'>
                            3050 Universal Blvd #190 <br />
                            Fort Lauderdale, FL 33331
                        </address>
                    </div>

                    {/* email */}
                    <div className='flex gap-1'>
                        <MdEmail size={25} />
                        <p className='text-base'>info@bookocean.edu.com</p>
                    </div>

                    {/* phone */}
                    <div className='flex gap-1'>
                        <FaPhoneAlt size='22' />
                        <p className='text-base'>+1 000-000-0000</p>
                    </div>
                </nav>

                <nav>
                    <h6 className="footer-title">Useful Link</h6>

                    <div className='flex items-center gap-2'>
                        <div className='w-3 h-3 bg-blue-400 rotate-45'></div>
                        <a className="link link-hover text-base">Costumer Service</a>
                    </div>
                    <div className='flex items-center gap-2'>
                        <div className='w-3 h-3 bg-blue-400 rotate-45'></div>
                        <a className="link link-hover text-base">Help Desk</a>
                    </div>
                    <div className='flex items-center gap-2'>
                        <div className='w-3 h-3 bg-blue-400 rotate-45'></div>
                        <a className="link link-hover text-base">Forum</a>
                    </div>
                    <div className='flex items-center gap-2'>
                        <div className='w-3 h-3 bg-blue-400 rotate-45'></div>
                        <a className="link link-hover text-base">Staff Profile</a>
                    </div>
                    <div className='flex items-center gap-2'>
                        <div className='w-3 h-3 bg-blue-400 rotate-45'></div>
                        <a className="link link-hover text-base">Live Chat</a>
                    </div>
                </nav>
            </footer>

        </div>
    );
};

export default Footer;