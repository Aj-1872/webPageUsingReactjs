import React, { useState, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { BsChatSquareDots } from 'react-icons/bs'
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa'


const Navbar = (props) => {

    const [nav,setNav] = useState(false);

    const handleNav = ()=>{
        setNav(!nav);
    }
    console.log(props.opacity);
    return (

        <div>
        <div className={`w-full min-h-[50px] flex justify-between items-center absolute z-10 text-${props.textMode} ${props.opacity ? 'bg-gray-700/80':'bg-gray-500/80'}`} >
        <ul className='hidden sm:flex px-4'>
        <li>
        <a href="/">Home</a>
        </li>
        <li>
        <a href="#gallery">Gallery</a>
        </li>
        <li>
        <a href="#booking">Booking</a>
        </li>
        <li>
                    <a href="#Contact">Contact</a>
                    </li>
                    </ul>
                    
                    <div className='flex justify-between '>
                    <FaFacebook className='mx-4' />
                    <FaTwitter className='mx-4' />
                    <FaYoutube className='mx-4' />
                    <FaInstagram className='mx-4' />
                    </div>

                    
                    <div onClick={()=>{handleNav()}} className='sm:hidden'>
                    <FaBars size={20} className='mr-4 cursor-pointer' />
                    </div>

                    <div  onClick={()=>{handleNav()}} className={nav?'overflow-y-hidden sm:hidden ease-in duration-500 absolute text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex flex-col ' : 'absolute top-0 h-screen left-[-100%] ease-in duration-500 '}>
                    <ul className='h-full w-full text-center pt-12'>
                    <li className='text-2xl py-8'>
                    <a href="/">Home</a>
                    </li>
                    <li className='text-2xl py-8'>
                    <a href="#gallery">Gallery</a>
                    </li>
                    <li className='text-2xl py-8'>
                        <a href="#booking">Booking</a>
                    </li>
                    <li className='text-2xl py-8'>
                    <a href="#Contact">Contact</a>
                    </li>
                    </ul>
                    
                    </div>

                    
                    </div>
                    </div>
                    )
                }
                
                export default Navbar