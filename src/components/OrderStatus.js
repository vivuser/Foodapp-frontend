import React, { useEffect, useState } from 'react';

const OrderStatus = () => {
    const [orderStatus, setOrderStatus] = useState(null);
    const orderId = "6506dd85d379670de4858e24" ;

    useEffect(() => {
        getOrderStatus(orderId);
    },[orderId])


    async function getOrderStatus(orderId){
        try{
        const response = await fetch(`http://localhost:8080/order-status/${orderId}`,
        {
            headers:{
              Authorization: `Bearer ${process.env.REACT_APP_AUTH_TOKEN}`
            }
        })
        if (!response.ok){
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setOrderStatus(data.status);
        console.log('Order status: ', data.status);
    }   catch (error) {
        console.error('Error fetching order status:', error);
    }
}


  return (
        <div>
            {orderStatus !== null? (
                <p>Order status: {orderStatus}</p>
            ) : (
                <p>Loading</p>
            )}
        </div>
  );
};

export default OrderStatus;
