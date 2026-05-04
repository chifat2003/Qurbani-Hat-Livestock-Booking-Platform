import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const Navbar = () => {
    const menuItems = (
        <>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/animals">All Animals</Link></li>
            <li><Link href="/profile">Profile</Link></li>
        </>
    );
    return (

        <div className=" bg-white">
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {menuItems}
                            <div className="grid">
                                <button className="btn bg-green-700 text-white">Log in</button>
                                <button className="btn bg-blue-500 text-white">Sign up</button>
                            </div>

                        </ul>

                    </div>
                    {/* <h1 className='text-white text-3xl font-bold'>Qurbani Hat</h1> */}
                    <Image src="/Logo.png" alt="Logo" width={300} height={120} />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menuItems}
                    </ul>
                </div>
                <div className="navbar-end hidden lg:flex gap-2">
                    <button className="btn bg-green-700 text-white">Log in</button>
                    <button className="btn bg-blue-500 text-white">Sign up</button>
                </div>
            </div>
        </div>


    );
};

export default Navbar;