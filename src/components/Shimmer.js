import React from 'react';

const Shimmer = () => {
  return (<>
    <div className='flex flex-wrap max-w-6xl m-8 pl-6 mx-auto'>
    {Array(2).fill("").map((e, index) =>(
    <div 
      key={index}
      class="border border-grey-500 bg-gray-200 m-4 shadow h-24 w-36 mx-auto mt-8 animate-pulse"
      >
  </div>))}
  </div>
  <div className='max-w-4xl mx-auto justify-items'>
  <div className='border border-grey-500 bg-gray-200 m-8 h-3 w-full mx-auto'></div>
  <div className='flex'>
  <div className='border border-grey-500 bg-gray-200 m-8 h-2 w-1/2 mx-auto'></div>
  <div className="border border-grey-500 bg-gray-200 m-4 shadow h-24 w-24 animate-pulse "></div>
  </div>
  <div className='border border-grey-500 bg-gray-200 mt-8 h-2 w-full'></div>
  <div className='flex'>
  <div className='border border-grey-500 bg-gray-200 m-8 h-2 w-1/2 mx-auto'></div>
  <div className="border border-grey-500 bg-gray-200 m-4 shadow h-24 w-24 animate-pulse "></div>
  </div>
  <div className='border border-grey-500 bg-gray-200 mt-8 h-2 w-full mx-auto'></div>
  <div className='flex'>
  <div className='border border-grey-500 bg-gray-200 m-8 h-2 w-1/2 mx-auto'></div>
  <div className="border border-grey-500 bg-gray-200 m-4 shadow h-24 w-24 animate-pulse "></div>
  </div>
  <div className='border border-grey-500 bg-gray-200 mt-8 h-2 w-full mx-auto'></div>
  <div className='flex'>
  <div className='border border-grey-500 bg-gray-200 m-8 h-2 w-1/2 mx-auto'></div>
  <div className="border border-grey-500 bg-gray-200 m-4 shadow h-24 w-24 animate-pulse "></div>
  </div>
  <div className='border border-grey-500 bg-gray-200 mt-8 h-2 w-full mx-auto'></div>
  <div className='flex'>
  <div className='border border-grey-500 bg-gray-200 m-8 h-2 w-1/2 mx-auto'></div>
  <div className="border border-grey-500 bg-gray-200 m-4 shadow h-24 w-24 animate-pulse "></div>
  </div>
  <div className='flex'>
  <div className='border border-grey-500 bg-gray-200 mt-8 h-2 w-full mx-auto'></div>
  <div className="border border-grey-500 bg-gray-200 m-4 shadow h-24 w-24 animate-pulse "></div>
  </div>
 </div>
  
  </>);
};

export default Shimmer;
