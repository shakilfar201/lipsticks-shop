import { Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const SingleReview = (props) => {
    const { customerName, userReview } = props.review;
    return (
        <>
            <Grid item xs={6} md={4} sm={12}>
                <Card sx={{ minWidth: 275, height: 200, mb: 4 }}>
                    <CardContent>
                        <Typography variant="h5" sx={{mb: 4, color: 'magenta', fontWeight: 600}} component="div">
                            {customerName}
                        </Typography>
                        <Typography variant="body2">
                            {userReview}
                            <br />
                            <br />
                            {'"Thanks for Review"'}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </>
    );
};

export default SingleReview;