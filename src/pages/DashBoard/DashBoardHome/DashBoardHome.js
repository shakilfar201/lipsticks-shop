import { Grid } from '@mui/material';
import React from 'react';
import Bookinfo from '../Bookinfo/Bookinfo';

const DashBoardHome = () => {
    return (
        <>
            <Grid container spacing={2}>
                        <Grid item xs={12} md={12} sm={12}>
                            <Bookinfo></Bookinfo>
                        </Grid>
                    </Grid>
        </>
    );
};

export default DashBoardHome;