import React from 'react'

const Home = () => {
    return (
        <div id='Home' className='w-full h-[90vh] ' >
        <img src="https://images2.alphacoders.com/891/891889.jpg" alt="/" 
        className="w-full h-full object-cover "
        
        />
            <div className=' max-w-[1140px] m-auto'>
                <div className='absolute top-[48%] w-full md:[50%] max-w-[600px] h-full flex flex-col text-white p-4 '>
                <h2>Find Your Special Trip</h2>
                <h2>With WeekAway</h2>
                <p>Embark on an unforgettable journey with Your Tour Company Name. Our carefully crafted tours are designed to take you on a mesmerizing adventure through breathtaking landscapes, vibrant cultures, and hidden gems. Get ready to create lasting memories as you explore the world with us.</p>
                </div>
            </div>
        </div>
    )
}

export default Home