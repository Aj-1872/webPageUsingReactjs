import React from 'react'
import { AiFillPhone, AiOutlineClockCircle } from 'react-icons/ai';
import { BsChatSquareDots } from 'react-icons/bs';
import '../index.css'; // Import the CSS file




const Topbar = (props) => {

    return (
        <div>
            <div >
                <div className='flex justify-between items-center px-4 py-2'>
                    <div className='flex items-center'>
                        <BsChatSquareDots size={30} className='text-[#5651e5] mr-2'/>
                        <h1>
                            WEEKAWAY
                        </h1>
                    </div>
                    <div className='flex '>
                        <div className='hidden md:flex items-center px-6'>
                            <AiOutlineClockCircle size={20} className='mr-2 text-[#5651e5]'/>
                            <p className='text-sm text-gray-800'>9AM-5PM</p>
                        </div>
                        <div className='hidden md:flex items-center px-6'>
                            <AiFillPhone size={20} className='mr-2 text-[#5651e5]'/>
                            <p className='text-sm text-gray-800'>1-888-+878-1234</p>
                        </div>
                        <button onClick={()=>{props.handleMode()}}>Mode</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar