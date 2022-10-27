import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <Link className="btn btn-ghost normal-case text-3xl" to='/' ><img className='w-8' src="https://cdn-icons-png.flaticon.com/512/1336/1336494.png" alt="" /> <span className='ml-2'>Programmer</span></Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to="/courses">Courses</Link></li>
                        <li><Link to="/faq">FAQ</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/theme">Theme</Link></li>
                        <li><Link to="/login">Login</Link></li>


                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;