// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import logo from './logo.png'

const Navbar = () => {


    // const linkStyle = {
    //     fontSize: '1.5rem', 
    //     textDecoration: 'none',
    //     color: 'inherit',
    //     textShadow: '2px 2px 3px rgba(0,0,0,0.5)' 
    // };
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <Button></Button>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to={'/'}>HomePage</Link></li>
                        <li><Link to={'/about'}>About</Link></li>
                        <li><Link to={'/explore'}>Explore</Link></li>
                        
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <Link to={'/'} className="btn btn-ghost text-xl italic" ><img className='h-10' src={logo}></img></Link>
            </div>
            <div className="navbar-end">
                <button className="btn btn-ghost btn-circle">
                    <Link to={'/books'}><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg></Link>
                </button>
                <button className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                        <span className="badge badge-xs badge-primary indicator-item"></span>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default Navbar;
