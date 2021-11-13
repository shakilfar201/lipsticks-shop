import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography, Button } from '@mui/material';

const Footer = () => {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} sx={{p: 4}}>
                    <Grid item xs={12} md={6} sm={12}>
                        <Typography variant="h5" sx={{color: 'blue', fontWeight: 600, ml: 6, mb: 2}}>
                            Our Address
                        </Typography>
                        <Typography variant="body1" sx={{ml: 11}}>
                            77/2, Bangla bazar,Dhaka
                        </Typography>
                        <Typography variant="body1" sx={{ml: 14}}>
                            emali:lipsProduct@gmail.com
                        </Typography>
                        <Typography variant="body1" sx={{ml: 15}}>
                           contact Number: 01548156455
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6} sm={12} sx={{ml: -20}}>
                    <Typography variant="h5" sx={{color: 'blue', fontWeight: 600, mb: 2}}>
                            Services
                        </Typography>
                        <Typography variant="body1" sx={{ml: 8}}>
                            <Button>Emergency service</Button>
                        </Typography>
                        <Typography variant="body1" sx={{ml: -3}}>
                            <Button>About Us</Button>
                        </Typography>
                        <Typography variant="body1" sx={{ml: 8}}>
                            <Button>Terms and condition</Button>
                        </Typography>
                        <Typography variant="body1" sx={{ml: 8}}>
                            <Button>Explore Our Website</Button>
                        </Typography>
                    </Grid>
                </Grid>
                <Typography variant="caption" sx={{fontWeight: 700, fontSize: 30, color: 'lightsalmon'}}>
                    All Right reservrd by Lips Web
                </Typography>
            </Box>
        </>
    );
};

export default Footer;