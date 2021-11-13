import { Alert, Button, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import delete1 from '../../../images/delete-removebg-preview.png'

const Bookinfo = () => {

    const { user } = useAuth();
    const [showOrder, setShowOrder] = useState([]);
    const [deleteSuccess, setDeleteSuccess] = useState(false)

    const handleDelete = (id) => {
        const proceed = window.confirm("Are You sure You Want to Delete?")
        if (proceed) {
            fetch(`http://localhost:5000/booking/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount) {
                        alert('DELETED SUCCESSFULLY')
                        const remaining = showOrder.filter(order => order._id !== id)
                        setShowOrder(remaining)
                        setDeleteSuccess(true)
                    }
                })
        };
    };


    useEffect(() => {
        const url = `http://localhost:5000/booking?email=${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setShowOrder(data)
            })
    }, [user.email])


    return (
        <>
            <Typography variant="h5" >
                Your Orders: {showOrder.length}
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
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {showOrder.map((row) => (
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
                                <TableCell sx={{color: '#c0392b'}} align="right">pending</TableCell>
                                <TableCell align="right"> <Button sx={{color: 'red'}} onClick={() => handleDelete(row?._id)}>Delete</Button> </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {deleteSuccess &&
                <Grid container spacing={2}>
                    <Grid item xs={5} md={6} sm={12}>
                    <Alert sx={{width: "75%", marginLeft: '60px', mt: 25}} severity="success">Order Delete Successfully!</Alert>
                    </Grid>
                    <Grid item xs={6} md={6} sm={12}>
                        <img src={delete1} widthh="100%" alt=""/>
                    </Grid>
                </Grid>
            }
        </>
    );
};

export default Bookinfo;