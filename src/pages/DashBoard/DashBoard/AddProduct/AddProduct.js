import { Alert, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const AddProduct = () => {
    const [addProduct, setAddProduct] = useState([])
    const [addSuccess, setAddSuccess] = useState(false)

    const handleonBlur = (e) => {
        e.preventDefault()
        const field = e.target.name;
        const value = e.target.value;
        const newAddProduct = { ...addProduct };
        newAddProduct[field] = value;
        setAddProduct(newAddProduct)
        console.log(newAddProduct)
    }

    const handleProduct = (e) => {
        e.preventDefault()
        fetch('https://mysterious-cove-34253.herokuapp.com/products', {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(addProduct)
        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data)
            if(data.insertedId){
                // console.log(data)
                setAddSuccess(true)
            }
        })
    }
    return (
        <>
            <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
                ADD A PRODUCT**
            </Typography>
            {addSuccess && <Alert sx={{width: "75%", marginLeft: 18, mb: 2}} severity="success">Add Product Successfully</Alert>}
            <form onSubmit={handleProduct}>
                <TextField
                    sx={{ width: "75%", m: 1 }}
                    required
                    id="standard-basic"
                    label="Product Name"
                    name="name"
                    onBlur={handleonBlur}
                    type="text"
                    variant="standard" />


                <TextField
                    sx={{ width: "75%", m: 1 }}
                    required
                    id="standard-basic"
                    label="Picture"
                    name="url"
                    onBlur={handleonBlur}
                    type="text"
                    variant="standard" />

                <TextField
                    sx={{ width: "75%", m: 1 }}
                    required
                    id="standard-basic"
                    label="Price"
                    name="price"
                    onBlur={handleonBlur}
                    type="text"
                    variant="standard" />

                <TextField
                    sx={{ width: "75%", m: 1 }}
                    required
                    id="standard-basic"
                    label="Discription"
                    name="discription"
                    onBlur={handleonBlur}
                    type="text-area"
                    variant="standard" />

                <Button sx={{ width: "75%", m: 3 }} type="submit" variant="contained">Add Product</Button>
            </form>
        </>
    );
};

export default AddProduct;