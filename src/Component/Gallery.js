import React from 'react'

const Gallery = (props) => {
    return (
        <div id='gallery' className='max-w-[1140px] m-auto w-full px-4 py-16'>
            <h2 className={`text-center text-${props.textMode} p-4`}>Gallery</h2>
            <div className='grid sm:grid-cols-5 gap-4'>
                <div className='sm:col-span-3 col-span-2 row-span-2'>
                <img className='w-full h-full object-cover' src="https://d22ir9aoo7cbf6.cloudfront.net/wp-content/uploads/sites/4/2019/05/Thomas-Beach-Uluwatu-Bali.jpg" alt="" />
                </div>
                <div>
                <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1521706862577-47b053587f91?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max" alt="" />
                </div>
                <div>
                <img className='w-full h-full object-cover' src="https://wallpaperaccess.com/full/1124157.jpg" alt="" />
                </div>
                <div>
                <img className='w-full h-full object-cover' src="https://www.hdwallpapers.in/download/white_cruise_ship_on_sea_during_daytime_4k_hd_cool-HD.jpg" alt="" />
                </div>
                <div>
                <img className='w-full h-full object-cover' src="https://th.bing.com/th/id/OIP.fdSJjYWJNXqZ7zc4PVTMugHaFj?pid=ImgDet&rs=1" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Gallery