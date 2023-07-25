import React from 'react';

const Booking = () => {
    return (
        <div id='booking' className='max-w-[1140] m-auto w-full p-4'>
            <form className='lg:flex lg:justify-between w-full items-center'>
                <div className='flex flex-col my-2 py-2'>
                    <label htmlFor='destination'>Destination</label>
                    <select className='lg:w-[300px] md:w-full border rounded-md p-2'>
                        <option value='' key='0' disabled>Select a destination</option>
                        <option value='india' key='1'>India</option>
                        <option value='key_west' key='2'>Key West</option>
                        <option value='maldives' key='3'>Maldives</option>
                        <option value='himalayas' key='4'>Himalayas</option>
                    </select>
                </div>
                <div className='flex w-full '>
                    <div className='flex flex-col lg:max-w-[250px] my-2 p-2'>
                        <label>Check-In</label>
                        <input className='border rounded-sm p-2' type='date' />
                    </div>
                    <div className='flex flex-col lg:max-w-[250px] my-2 p-2'>
                        <label>Check-Out</label>
                        <input className='border rounded-sm p-2' type='date' />
                    </div>
                </div>
                <div className='flex flex-col my-2 p-2 w-full'>
                    <label>Search</label>
                    <button>Rate and Availabilities</button>
                </div>
            </form>
        </div>
    );
};

export default Booking;
