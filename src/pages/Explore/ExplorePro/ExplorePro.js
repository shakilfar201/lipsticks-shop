import React from 'react';
import {useHistory} from 'react-router';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { pink } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button, Container, Grid } from '@mui/material';


const ExplorePro = (props) => {
    const { url, discription, name, price, _id } = props.expo;

    
    const history = useHistory();

    const handleUrl = (_id) => {
        const url = `/placeOrder/${_id}`
        history.push(url)
    }


    
    return (
        <Grid item xs={6} md={4} sm={12}>
            <Container>
                <Card sx={{ maxWidth: 345, m: 'auto' }}>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: pink[800] }} aria-label="recipe">
                                Lip
                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title={name}
                    />
                    <CardMedia
                        component="img"
                        height="300"
                        image={url}
                        alt="Loading Wait"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            {discription}
                        </Typography>
                        <Typography variant="h4" sx={{color: '#f50057'}}>
                            {price}
                        </Typography>
                    </CardContent>
                    <Button onClick={()=>handleUrl(_id)} variant="contained">Order Now</Button>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                    </CardActions>
                </Card>
            </Container>
        </Grid>
    );
};

export default ExplorePro;