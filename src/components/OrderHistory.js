import React, { useEffect, useState } from 'react'
import { useUser } from './userContext'


const OrderHistory = () => {
  const [orderHistory, setOrderHistory] = useState([])

  const userInfo  = localStorage.getItem("user")

  const userData  = JSON.parse(userInfo)
  const userId = userData.userId
  console.log(userData)
  

  console.log('*****************************', userId)

  useEffect(() => {handleOrderHistoryData()}, [])

    const handleOrderHistoryData = async() => {
    try{
      const data = await fetch('http://localhost:8080/account', {
        userId
      },
      {
      headers: {
        Authorization:  `Bearer ${process.env.REACT_APP_AUTH_TOKEN}`
    }
  })
    const jsonData = await data.json()
    setOrderHistory(jsonData.orderList);
    console.log(orderHistory)
    }
    catch(error){
      console.error(error, "userId doesn't exist")
    }
  }
  
  return (<>
    <div>
      <div className='text-2xl text-orange-300 font-bold'>
      Orders History
      </div>
      {orderHistory.map((item, index)=> {
        return (<> 
        <div className='bg-orange-300 w-56 h-8 rounded-full'>{item?.orderData?.orderNumber}</div>
        <div className=''>{Object.values(item?.orderData?.cartInfo.orderData).map((item,subIndex)=> {
          return <div>{item?.item?.name}</div>
        })
        }</div>
        </>)})
      }   
    </div>
  </>)
}

export default OrderHistory
