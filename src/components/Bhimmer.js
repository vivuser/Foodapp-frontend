import React from 'react';

const Bhimmer = () => {
  return (
<div class="flex flex-wrap mt-20 justify-center">
    {Array(10).fill("").map((e, index)=> (
        <div class='w-56 h-44 bg-gray-300 rounded-md animate-pulse m-2 gap-4'
        key={index} ></div>
    ))}
 </div>
)
};

export default Bhimmer;
