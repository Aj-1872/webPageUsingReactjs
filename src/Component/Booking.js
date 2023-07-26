import React from 'react';
import { useState } from 'react';
import Gallery from './Gallery';

const Booking = (props) => {

    

    return (
        <div id='booking' className='max-w-[1140] m-auto w-full p-4'>
            <form className='flex justify-between w-full items-center'>
                <div className='w-full'>
                <input id='search'  className={`w-full focus:outline-none border-2 rounded-lg ${props.bgMode} text-${props.textMode} `} type="text" placeholder='search...' />
                </div>
                <div className='max-w-fit'>
                    <button className='rounded-lg p-1 m-1'>Search</button>
                </div>
            </form>
        </div>
    );
};

export default Booking;
