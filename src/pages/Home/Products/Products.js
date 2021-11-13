import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Product from './Product/Product';
import { Typography } from '@mui/material';


const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        const url = "https://mysterious-cove-34253.herokuapp.com/products";
        fetch(url)
        .then(res=> res.json())
        .then(data=> {
            setProducts(data)
        })
    },[])
    
    return (
        <>
        <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h3" sx={{color: '#8e24aa', fontWeight: 600, my: 3}}>
                OUR PRODUCT
            </Typography>
            <Grid container spacing={2}>
                {
                    products.slice(0,6).map(product=> <Product key={product?._id} product={product}></Product>)
                }
            </Grid>
        </Box>
        </>
    );
};

export default Products;