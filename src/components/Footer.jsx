import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import {Link} from "react-scroll"


const Footer = () => {
  return (
    <div className='w-full bg-gray-200 py-16'>
      <div className='max-w-[1240px] mx-auto flex flex-col px-4'>
        <div className='sm:flex text-center justify-between items-center'>
          <h1>WANDERLUST.</h1>
          <div className='flex justify-between w-full sm:max-w-[280px] my-4'>
          <FaFacebook className='icon  hover:scale-105 hover:text-blue-700' />
            < FaXTwitter  className='icon hover:scale-105 hover:text-black' />
            <FaYoutube className='icon hover:scale-105 hover:text-red-600' />
            <FaPinterest className='icon hover:scale-105 hover:text-red-600'/>
            <FaInstagram className='icon hover:scale-105 hover:text-pink-700' />
          </div>
        </div>
        <div className='flex justify-between'>
          <ul className='lg:flex'>
            <li>About</li>
            <li>Partnerships</li>
            <li>Careers</li>
            <li>Newsroom</li>
            <li>Advertising</li>
          </ul>
          <ul className='text-right lg:flex'>
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
        </div>
      </div>
    </div>
  );
};

export default Footer;
