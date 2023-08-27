import React from 'react';

const Shimmer = () => {
  return (
    Array(10).fill("").map((e)=>
    <div class="border border-grey-500 bg-gray-300 shadow rounded-md p-6 mt-5 mb-4 max-w-2lg m-10 justify-center animate-pulse">
    {/* {/* <div class=" flex space-x-4 "> */}
      <div class="rounded-sm  bg-slate-400 h-10 w-10 animate-pulse"></div>
      <div class="flex-1 space-y-6 py-1 animate-pulse">
        </div>
  </div>)
  
  );
};

export default Shimmer;
