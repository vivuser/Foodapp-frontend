import React, { useState } from 'react';
import AddressTab from './AddressTab';
import OrderHistory from './OrderHistory';
import FavouriteTab from './FavouriteTab';
import LogoutUser from './LogoutUser';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import HistoryIcon from '@mui/icons-material/History';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Logout } from '@mui/icons-material';


const Profile = ({onClickHandler}) => {


  const [activeTab, setActiveTab] = useState('address');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: '#FFFFFF',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
        <div style={{display:'flex'}}>
        <div className='min-h-screen  bg-gray-400' style={{ width: '300px', flexDirection: 'column', marginTop: '0px' }}>
          <Grid container xs={12} spacing={5} style={{ flexDirection: 'column', margin: '10px 0 0 0' }}>
            <Grid item xs={6}>
              <div className='profile-tabs'>
                <Button
                  onClick={() => handleTabClick('address')}
                  variant={activeTab === 'address' ? 'contained' : 'outlined'}
                  fullWidth
                  startIcon={<HomeIcon />} // Add a home icon
                >
                  Address
                </Button>
              </div>
            </Grid>

            <Grid item xs={10}>
              <div className='profile-tabs'>
                <Button
                  onClick={() => handleTabClick('orderHistory')}
                  variant={activeTab === 'orderHistory' ? 'contained' : 'outlined'}
                  fullWidth
                  startIcon={<HistoryIcon />} // Add a history icon
                >
                  Order History
                </Button>
              </div>
            </Grid>

            <Grid item xs={10}>
              <div className='profile-tabs'>
                <Button
                  onClick={() => handleTabClick('favourites')}
                  variant={activeTab === 'favourites' ? 'contained' : 'outlined'}
                  fullWidth
                  startIcon={<FavoriteIcon />} // Add a favorite icon
                >
                  Favourites
                </Button>
              </div>
            </Grid>

            <Grid item xs={10}>
              <div className='profile-tabs'>
              <Button
                  onClick={() => handleTabClick('logout')}
                  variant={activeTab === 'logout' ? 'contained' : 'outlined'}
                  fullWidth
                  startIcon={<Logout />} // Add a favorite icon
                >
                  Logout
                </Button>

              
              </div>
            </Grid>
          </Grid>
        </div>
            <div>
            {activeTab === 'address' && <AddressTab />}
            {activeTab === 'orderHistory' && <OrderHistory />}
            {activeTab === 'favourites' && <FavouriteTab />}
            {activeTab === 'logout' && <LogoutUser />}
            </div>
        </div>
        
    </ThemeProvider>
  );
};

export default Profile;
