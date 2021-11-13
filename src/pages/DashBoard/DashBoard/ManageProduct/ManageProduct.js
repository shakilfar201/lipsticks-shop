import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import delete1 from '../../../../images/delete-removebg-preview.png'
import { Alert, Button, Grid, Typography } from '@mui/material';

const ManageOrder = () => {
    const [allProduct, setAllProduct] = useState([])
    const [deleteSuccess, setDeleteSuccess] = useState(false);

    useEffect(()=>{
        fetch('https://mysterious-cove-34253.herokuapp.com/products')
        .then(res=> res.json())
        .then(data=> {
            setAllProduct(data)
            console.log(data)
        })
    },[]);

    const handleDelete = (id) => {
        const proceed = window.confirm("Are You sure Admin, You Want to Delete this product?")
        if (proceed) {
            fetch(`https://mysterious-cove-34253.herokuapp.com/products/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount) {
                        const remaining = allProduct.filter(order => order._id !== id)
                        setAllProduct(remaining)
                        setDeleteSuccess(true)
                    }
                })
        };
    };

    return (
        <>
            <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
                Manage all Products
            </Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 600, fontSize: 18 }}>Product ID</TableCell>
                            <TableCell sx={{ fontWeight: 600, fontSize: 18 }} align="right">Product Name</TableCell>
                            <TableCell sx={{ fontWeight: 600, fontSize: 18 }} align="right">Price</TableCell>
                            <TableCell sx={{ fontWeight: 600, fontSize: 18 }} align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {allProduct.map((row) => (
                            <TableRow
                                key={row?._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row._id}
                                </TableCell>
                                <TableCell align="right">{row?.name}</TableCell>
                                <TableCell align="right">{row.price}</TableCell>
                                <TableCell align="right"> <Button sx={{color: 'red'}} onClick={() => handleDelete(row?._id)}>Delete</Button> </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            {deleteSuccess &&
                <Grid container spacing={2}>
                    <Grid item xs={5} md={6} sm={12}>
                    <Alert sx={{width: "75%", marginLeft: '60px', mt: 25}} severity="success"> Admin Order Delete Successfully!</Alert>
                    </Grid>
                    <Grid item xs={6} md={6} sm={12}>
                        <img src={delete1} widthh="100%" alt=""/>
                    </Grid>
                </Grid>
            }
        </>
    );
};

export default ManageOrder;