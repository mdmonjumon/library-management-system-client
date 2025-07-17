
import { Link, NavLink } from 'react-router-dom';
import UseAuth from '../../hooks/UseAuth';
import { useState } from 'react';

const Navbar = () => {
    const [hover, setHover] = useState(false)
    const { user, userLogout } = UseAuth()
    const links = <>
        <li><NavLink to="/">Home</NavLink> </li>
        <li><NavLink>All Books</NavLink> </li>
        <li><NavLink to="/add-book">Add Book</NavLink> </li>
        <li><NavLink to="/borrowed-books">Borrowed Books</NavLink> </li>
    </>


    const handleLogout = () => {
        setHover(false)
        userLogout()
    }

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
                    <h2 className='text-3xl font-bold bg-gradient-to-r from-blue-500 to-green-500 text-clip text-transparent bg-clip-text'>BookOcean</h2>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-lg">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end relative">
                    {
                        user?.email ?
                            <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>

                                <img className='w-12 h-12 size-full object-cover rounded-full'
                                    src={user.photoURL} alt="" />

                                <div className={`flex flex-col gap-2 rounded absolute bg-white p-5 -top-120 right-0 ${hover ? 'top-12 right-0' : ''}`}>
                                    <h2 className='text-lg font-medium'>{user.displayName}</h2>
                                    <button onClick={handleLogout} className='btn btn-info'>Logout</button>
                                </div>
                            </div>
                            : <>

                                <button className='text-lg mr-4'><Link to='login'>Login</Link></button>
                                <button className='text-lg'><Link to='register'>Register</Link></button>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;