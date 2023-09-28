import React, { useState } from 'react';
import AddressTab from './AddressTab';
import OrderHistory from './OrderHistory';
import FavouriteTab from './FavouriteTab';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { createTheme , ThemeProvider } from '@mui/material/styles';

const Profile = () => {
    const [activeTab , setActiveTab] = useState('address');

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
            <div className='m-8 bg-gray-400 flex flex-row' style={{ width: '300px', flexDirection: 'column' }}>
            <div className='min-h-screen m-8 bg-gray-400' style={{ width: '100px', flexDirection: 'column' }}   >
                <Grid container spacing={4} style={{ flexDirection: 'column', margin: '10px 0 0  0'}}>
                    <Grid item xs={3}>
                    <div className='profile-tabs'>
                        <Button 
                            onClick={() => handleTabClick('address')}
                            variant={activeTab === 'address' ? 'contained':'outlined'}
                            fullWidth
                        >   
                        Address 
                        </Button>
                    </div>
                </Grid>
                
               
              <Grid item xs={3}>
                  <div className='profile-tabs'>
                  <Button 
                    onClick={() => handleTabClick('orderHistory')}
                    variant={activeTab === 'orderHistory' ? 'contained': 'outlined'}
                    fullWidth
                >
                Order History
                </Button>
                </div>
                </Grid>
                
                 
                 <Grid item xs={3}>
                <div className='profile-tabs'>
                <Button 
                onClick={() => handleTabClick('favourites')}
                variant={activeTab === 'favourites' ? 'contained' : 'outlined'}
                fullWidth
                >
                    Favourites
                </Button>
            </div>
            </Grid>
                
                
                </Grid>
            <div className='profile-content'>
                {activeTab === 'address' && <AddressTab/>}
                {activeTab === 'orderHistory' && <OrderHistory/>}
                {activeTab === 'favourites' && <FavouriteTab/>}
            </div>

        </div>

        <div className='max-w-3xl bg-yellow-100'>
                <Grid item xs={3}>
                    <Grid container>
                        <Grid item xs={12}>
                        <div className='w-56 h-20'>
                            </div>
                        </Grid>
                    </Grid>


                </Grid>

           
        </div>

        </div>
        </ThemeProvider>
    )

}

export default Profile;