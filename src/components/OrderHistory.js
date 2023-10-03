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
    console.log(data)
    }
    catch(error){
      console.error(error, "userId doesn't exist")
    }
  }
  
  return (<>
    <div>
      Orders History
      {

      }   
    </div>
  </>)
}

export default OrderHistory
