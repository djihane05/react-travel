import React, { useState } from 'react';
import { BsPerson } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import {
  FaFacebook,

  FaInstagram,
  FaPinterest,
  FaYoutube,
} from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false)
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo)
  };

  return (
    <div className='flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white'>
      <div>
        <h1 onClick={handleNav} className={logo ? 'hidden' : 'block'}>WANDERLUST.</h1>
      </div>
      <ul className='hidden md:flex'>
        <li><Link to='home' smooth={true} duration={500}>
           Home
          </Link></li>
        <li><Link to='destinations' smooth={true} duration={500}>
           Destinations
          </Link></li>
        <li><Link to='search' smooth={true} duration={500}>
        Travel
          </Link></li>
        <li><Link to='selects' smooth={true} duration={500}>
        View
          </Link></li>
         <li><Link to='book' smooth={true} duration={500}>
        Book
          </Link></li>
      </ul>
      <div className='hidden md:flex'>
        <BiSearch className='' size={20} />
        <BsPerson size={20} />
      </div>

      {/* Hamburger */}
      <div onClick={handleNav} className='md:hidden z-10'>
        {nav ? <AiOutlineClose className='text-black' size={20} /> : <HiOutlineMenuAlt4 size={20} />}
      </div>

      {/* Mobile menu  */}
      <div onClick={handleNav} className={nav ? 'absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
        <ul>
          <h1>WANDERLUST.</h1>
          <li   onClick={handleNav} className='border-b'><Link to='home' smooth={true} duration={500}>
           Home
          </Link></li>
          <li  onClick={handleNav} className='border-b'>
          {' '} <Link to='destinations' smooth={true} duration={500}>
           Destinations
          </Link></li>
          <li  onClick={handleNav} className='border-b'>{' '} <Link to='search' smooth={true} duration={500}>
           Travel
          </Link></li>
          <li  onClick={handleNav} className='border-b'><Link to='selects' smooth={true} duration={500}>
        View
          </Link></li>
          <li  onClick={handleNav} className='border-b'><Link to='book' smooth={true} duration={500}>
        Book
          </Link></li>
          <div className='flex flex-col'>
            <button className='my-6'>Search</button>
            <button >Account</button>
          </div>
          <div className='flex justify-between my-6'>
            <FaFacebook className='icon  hover:scale-105 hover:text-blue-700' />
            < FaXTwitter  className='icon hover:scale-105 hover:text-black' />
            <FaYoutube className='icon hover:scale-105 hover:text-red-600' />
            <FaPinterest className='icon hover:scale-105 hover:text-red-600'/>
            <FaInstagram className='icon hover:scale-105 hover:text-pink-700' />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
