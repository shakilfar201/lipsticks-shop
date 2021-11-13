import React, { useState } from 'react';
import { Alert, Button, TextField, Typography } from '@mui/material';
import useAuth from '../../../../hooks/useAuth';

const Review = () => {
    const {user} = useAuth();
    const [success, setSucess] = useState(false)

    const initialize = { customerName: user.displayName}
    const [addOld, setAddOld] = useState(initialize);

    const handleReview = (e) => {
        const pushReview ={
            ...addOld,
        }
        e.preventDefault();
        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(pushReview)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.insertedId){
                    setSucess(true)
                }
                
            })
    };

    const handleonBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newReview = {...addOld};
        newReview[field] = value;
        setAddOld(newReview);
        console.log(newReview)
        e.preventDefault();
    }

    return (
        <>
            <Typography variant="h3" sx={{ color: 'green', fontWeight: 700 }}>
                Review Here
            </Typography>

            {success && <Alert sx={{width: "50%", marginLeft: 38, mb: 2}} severity="success">Review Added Successfully</Alert>}

            <form onSubmit={handleReview}>
                <TextField
                    sx={{ width: "50%", m: 1 }}
                    label="Name"
                    id="outlined-size-small"
                    name="customerName"
                    onBlur={handleonBlur}
                    defaultValue={user.displayName}
                    variant="outlined"
                />
                <TextField
                    sx={{ width: "50%", m: 2 }}
                    id="outlined-basic"
                    label="Please Review"
                    name="userReview"
                    type="text"
                    onBlur={handleonBlur}
                    variant="outlined" /> <br />
                <Button type="submit" variant="contained">Add Review </Button>
            </form>
        </>
    );
};

export default Review;