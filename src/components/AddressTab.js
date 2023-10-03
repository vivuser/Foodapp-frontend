import React, { useState } from 'react'

const AddressTab = () => {
  const [city, setCity ] = useState([])
  const [state, setState] = useState([])
  const [ country, setCountry] = useState([])
  const [zip, setZip]  = useState([])
  const [landmark, setLandMark] = useState([])
  const [ data, setData] = useState([])


  return (
    <div className='flex flex-col m-4 '>
      <input className='m-2 p-2 border border-gray-200 rounded-md'
      name='city'
      type='text'
      placeholder='city'
      onChange={(e)=> setCity(e.target.value)}></input>
      <input className='m-2 p-2 border border-gray-200 rounded-md'
      name='state'
      type='text'
      placeholder='state'
      onChange={(e)=> setState(e.target.value)}
      ></input>
      <input className='m-2 p-2 border border-gray-200 rounded-md'
      name='country'
      type='text'
      placeholder='country'
      onChange={(e) => setCountry(e.target.value) }
      ></input>
      <input className='m-2 p-2 border border-gray-200 rounded-md'
      name='zip'
      type='text'
      placeholder='zipcode'
      onChange={(e) => setZip(e.target.value)}
      ></input>
       <input className='m-2 p-2 border border-gray-200 rounded-md'
      name='landmark'
      type='text'
      placeholder='landmark'
      onChange={(e) => setLandMark(e.target.value)}
      ></input>
      <button className='bg-green-400 w-20 h-8 rounded-md mx-auto'>save</button>
      
    </div>
  )
}

export default AddressTab
