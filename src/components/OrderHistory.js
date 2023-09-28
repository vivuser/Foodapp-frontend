import React, { useState } from 'react'
import { useSelector } from 'react-redux';

const OrderHistory = () => {
  let orderedHis = useSelector((store)=> store.orderHistory);
  const orderElem = orderedHis['orders']
  
  return (<>
    <div>
      {orderElem.map((item,index) => {
        console.log(item['order']['orderData']?.cartItems);
        return (
          <div className='font-bold bg-red-500'>
        {item['order']?.orderData?.cartItems?.map((subItem,index) => (
          <div key={index}>{subItem?.item?.name}</div>
          ))}
    </div>
        );
      })}   
    </div>
  </>)
}

export default OrderHistory
