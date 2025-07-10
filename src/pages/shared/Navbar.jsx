
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const links = <>
        <li><NavLink>Home</NavLink> </li>
        <li><NavLink>All Books</NavLink> </li>
        <li><NavLink>Add Book</NavLink> </li>
        <li><NavLink>Borrowed Books</NavLink> </li>
    </>

    return (
        <div className='w-full fixed top-0 left-1/2 -translate-x-1/2 z-10 bg-white/80'>
            <div className="navbar max-w-7xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <h2 className='text-xl font-bold bg-gradient-to-r from-blue-500 to-green-500 text-clip text-transparent bg-clip-text'>BookOcean</h2>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-lg">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className='text-lg mr-4'><Link to='login'>Login</Link></button>
                    <button className='text-lg'><Link to='register'>Register</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;