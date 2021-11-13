import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import delete1 from '../../../../images/delete-removebg-preview.png'
import { Alert, Button, Grid } from '@mui/material';

const ManageOrder = () => {
    const [allOrder, setAllOrder] = useState([])
    const [deleteSuccess, setDeleteSuccess] = useState(false);
    const [orderConfirm, setOrderConfirm] = useState(false)

    useEffect(()=>{
        fetch('https://mysterious-cove-34253.herokuapp.com/booking/:id')
        .then(res=> res.json())
        .then(data=> {
            setAllOrder(data)
        })
    },[]);

    const confirm = (id) => {
        setOrderConfirm(true, id)
    }

    const handleDelete = (id) => {
        const proceed = window.confirm("Are You sure Admin, You Want to Delete user Order?")
        if (proceed) {
            fetch(`https://mysterious-cove-34253.herokuapp.com/booking/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount) {
                        const remaining = allOrder.filter(order => order._id !== id)
                        setAllOrder(remaining)
                        setDeleteSuccess(true)
                    }
                })
        };
    };

    return (
        <>
            <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
                Manage all Order
            </Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 600, fontSize: 18 }}>Customer Name</TableCell>
                            <TableCell sx={{ fontWeight: 600, fontSize: 18 }} align="right">Product Name</TableCell>
                            <TableCell sx={{ fontWeight: 600, fontSize: 18 }} align="right">Quantity</TableCell>
                            <TableCell sx={{ fontWeight: 600, fontSize: 18 }} align="right">Phone Number</TableCell>
                            <TableCell sx={{ fontWeight: 600, fontSize: 18 }} align="right">Status</TableCell>
                            <TableCell sx={{ fontWeight: 600, fontSize: 18 }} align="right">Action</TableCell>
                            <TableCell sx={{ fontWeight: 600, fontSize: 18 }} align="right">Confirm</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {allOrder.map((row) => (
                            <TableRow
                                key={row?._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.customerName}
                                </TableCell>
                                <TableCell align="right">{row.productName}</TableCell>
                                <TableCell align="right">{row.quantity}</TableCell>
                                <TableCell align="right">{row.phoneNumber}</TableCell>
                                {!orderConfirm && <TableCell align="right">pending</TableCell>}
                                {orderConfirm && <TableCell align="right">confirm</TableCell>}
                                <TableCell align="right"> <Button sx={{color: 'red'}} onClick={() => handleDelete(row?._id)}>Delete</Button> </TableCell>
                                <TableCell align="right"> <Button sx={{color: 'red'}} onClick={() => confirm(row?._id)}>Yes</Button> </TableCell>
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