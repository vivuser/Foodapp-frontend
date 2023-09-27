import React, { useState } from 'react';
import AddressTab from './AddressTab';
import OrderHistory from './OrderHistory';
import FavouriteTab from './FavouriteTab';

const Profile = () => {
    const [activeTab , setActiveTab] = useState('address');

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <div>
            <div className='profile-tabs'>
                <button onClick={() => handleTabClick('address')}
                className={activeTab === 'address' ? 'active':''}
                >   
                Address 
                </button>
                <button onClick={() => handleTabClick('orderHistory')}
                className={activeTab === 'orderHistory' ? 'active': ''}
                >
                Order History
                </button>
                <button onClick={() => handleTabClick('favourites')}
                className={activeTab === 'favourites' ? 'active' : ''}
                >
                </button>
            </div>
            <div className='profile-content'>
                {activeTab === 'address' && <AddressTab/>}
                {activeTab === 'orderHistory' && <OrderHistory/>}
                {activeTab === 'favourites' && <FavouriteTab/>}
            </div>

        </div>
    )

}

export default Profile;