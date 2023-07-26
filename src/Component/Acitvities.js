import React from 'react';

const Acitvities = (props) => {
  return (
    <div className={`max-w-full  sm:flex mt-[-75px]  ${props.opacity ? 'opacity-80' : ' '}`}>
      <div className='relative p-6 '>
        <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white font-bold'>
          Resorts
        </h3>
        <img
          className={`w-full h-full object-cover relative border-4 border-white shadow-lg`}
          src='https://cdn.wallpapersafari.com/53/0/SvACwP.jpg'
          alt='/'
        />
      </div>
      <div className='relative p-6 '>
        <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white font-bold'>
          Activities
        </h3>
        <img
          className={`w-full h-full object-cover relative border-4 border-white shadow-lg`}
          src='https://wallpapercave.com/wp/wp4083790.jpg'
          alt=''
        />
      </div>
      <div className='relative p-6 '>
        <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white font-bold'>
          Animals
        </h3>
        <img
          className={`w-full h-full object-cover relative border-4 border-white shadow-lg`}
          src='https://www.worldatlas.com/r/w1200/upload/96/7b/b6/shutterstock-1271728555.jpg'
          alt=''
        />
      </div>
    </div>
  );
};

export default Acitvities;
