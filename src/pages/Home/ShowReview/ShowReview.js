import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import SingleReview from './SingleReview/SingleReview';

const ShowReview = () => {
    const [chatchReview, setChatchReview] = useState([])

    useEffect(() => {
        fetch('https://mysterious-cove-34253.herokuapp.com/review')
            .then(res => res.json())
            .then(data => {
                setChatchReview(data)
            })
    }, []);

    return (
        <>
            <Box sx={{ color: 'lightslategrey' }}>
                <Box sx={{ flexGrow: 1 }}>
                    <Container>
                        <Typography variant="h3" sx={{ color: '#8e24aa', fontWeight: 600, my: 3 }}>
                            OUR REVIEW
                        </Typography>
                        <Grid container spacing={2}>
                            {
                                chatchReview.map(review => <SingleReview key={review?._id} review={review}></SingleReview>)
                            }
                        </Grid>
                    </Container>
                </Box>
            </Box>
        </>
    );
};

export default ShowReview;