import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ExplorePro from './ExplorePro/ExplorePro';
import { Typography } from '@mui/material';

const Explore = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        const url = "http://localhost:5000/products";
        fetch(url)
        .then(res=> res.json())
        .then(data=> {
            setProducts(data)
        })
    },[])

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h3" sx={{color: '#8e24aa', fontWeight: 600, my: 3}}>
                 WE HAVE LOT OF PRODUCTS
            </Typography>
            <Grid container spacing={2}>
                {
                    products.map(expo=> <ExplorePro key={expo._id} expo={expo}></ExplorePro>)
                }
            </Grid>
        </Box>
    );
};

export default Explore;