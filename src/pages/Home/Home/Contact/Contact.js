import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, TextField, Typography } from '@mui/material';
import contact1 from '../../../../images/Web_Photo_Editor-removebg-preview.png'

const Contact = () => {
    const [contact, setContact] = useState([])

    const handleForm = (e) => {
        e.preventDefault()
    }
    const handleonBlur = (e) => {
        e.preventDefault()
        const field = e.target.name;
        const value = e.target.value;
        const newContact = {...contact};
        newContact[field] = value;
        setContact(newContact);
    }
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={12} sm={12}>
                        <Typography variant="h3" sx={{ color: '#8e24aa', fontWeight: 600, my: 3 }}>
                            CONTACT WITH US
                        </Typography>
                        <Typography variant="body1" sx={{ width: 700, m: 'auto', fontWeight: 600, my: 3 }}>
                            we can contact with us any time.our customer services is alaways help you to provide valid information.if you face any problem to see and buy and whatever to our product, You can add review to the Dashboard section, and you can contact our customer services help, We are helping you to reach as soon as possible!!
                            <br />
                            <br />
                            {"Thanks For Contacting With Us"}
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6} sm={12} sx={{ml: 4}}>
                                <form onSubmit={handleForm}>
                                    <TextField
                                        sx={{ width: "50%", m: 1 }}
                                        required
                                        id="standard-basic"
                                        label="Your Name"
                                        name="name"
                                        onBlur={handleonBlur}
                                        type="text"
                                        variant="standard" />
                                    <TextField
                                        sx={{ width: "50%", m: 1 }}
                                        required
                                        id="standard-basic"
                                        label="Your Email"
                                        name="email"
                                        onBlur={handleonBlur}
                                        type="text"
                                        variant="standard" />
                                    <TextField
                                        sx={{ width: "50%", m: 1 }}
                                        required
                                        id="standard-basic"
                                        label="What Your Problem"
                                        name="discription"
                                        onBlur={handleonBlur}
                                        type="text"
                                        variant="standard" />
                                    <TextField
                                        sx={{ width: "50%", m: 1 }}
                                        required
                                        id="standard-basic"
                                        label="Phone Number"
                                        name="phone"
                                        onBlur={handleonBlur}
                                        type="text"
                                        variant="standard" />
                                        <Button sx={{width: "50%", m: 3}} type="submit" variant="contained">Send</Button>
                                </form>
                            </Grid>
                            <Grid item xs={12} md={6} sm={12} sx={{ml: -8, mt: -8}}>
                                <img src={contact1} alt=""/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default Contact;