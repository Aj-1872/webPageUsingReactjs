import React from 'react'

const Contact = (props) => {
    return (
        <div id='contact' className={`max-w-[1140px] m-auto w-full p-4 py-15 text-${props.textMode}`}>

            <h2 className='text-center'>Send us a message</h2>
            <p className='text-center py-2'>We're standing by!</p>
            <div className='grid md:grid-cols-2'>
                <img src="https://wallpaperaccess.com/full/3396532.jpg" alt="/"
                className='w-full md:h-full object-center p-2 max-h-[500px] h-[200px] object-cover'
                />
                <form>
                    <div className=' grid grid-cols-2 '>
                            <input className='border rounded-sm m-2 p-2' type="text" placeholder='First' />
                            <input className='border rounded-sm m-2 p-2' type="text" placeholder='Last' />
                            <input className='border rounded-sm m-2 p-2' type="email" placeholder='Email' />
                            <input className='border rounded-sm m-2 p-2' type="tel" placeholder='Phone' />
                            <input className='border rounded-sm col-span-2 p-2 m-2' type="text" placeholder='Address' />
                            <button className='rounded-sm  col-span-2 m-2'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact