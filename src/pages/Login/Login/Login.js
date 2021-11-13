import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import login1 from '../../../images/login.png'
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';
import { Alert, CircularProgress } from '@mui/material';

const Login = () => {
    const { user, login, googleSignIn, isLoading, error } = useAuth();
    const [loginData, setLoginData] = useState()

    const location = useLocation();
    const history = useHistory();

    const handleonBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newlogin = { ...loginData };
        newlogin[field] = value;
        setLoginData(newlogin)
        e.preventDefault()
        // console.log(newlogin)
    }

    const handlefrom = (e) => {
        login(loginData.email, loginData.password, location, history)
        e.preventDefault()
    }

    const handleGoogle = () => {
        googleSignIn(location, history)
    }

    return (
        <Container>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} sm={12} sx={{ mt: 8 }}>
                        <Typography variant="h3" sx={{ color: "#8e44ad", fontWeight: 600, my: 5 }}>
                            Login
                        </Typography>
                        {!isLoading && <form onSubmit={handlefrom}>
                            <TextField
                                sx={{ width: "75%", m: 1 }}
                                required
                                id="standard-basic"
                                label="Your Email"
                                name="email"
                                onBlur={handleonBlur}
                                type="email"
                                variant="standard" />
                            <TextField
                                sx={{ width: "75%", m: 1 }}
                                id="standard-basic"
                                label="Password"
                                name="password"
                                onBlur={handleonBlur}
                                type="password"
                                variant="standard" />
                            <Button sx={{ width: "75%", m: 3 }} type="submit" variant="contained">Login</Button>
                        </form>}

                        {user?.email && <Alert sx={{width: "75%", marginLeft: '55px'}} severity="success">user logged successfully!</Alert>}

                        {error && <Alert sx={{width: "75%", marginLeft: '55px'}} severity="error">{error}</Alert>}

                        <Grid itam xs={12} md={6} sx={{margin: 'auto'}}>
                            {isLoading && <Typography variant="h6" sx={{color: 'green'}}>Please Wait</Typography>}
                        {isLoading && <CircularProgress />}
                        </Grid>

                        <Button onClick={handleGoogle} sx={{ width: "75%", m: 3 }} variant="contained">Google sign in</Button>
                        <NavLink style={{ textDecoration: 'none' }} to="/register"><Button variant="text" sx={{ width: "75%", m: 1 }}>New User?Register Here</Button></NavLink>
                    </Grid>
                    <Grid item xs={12} md={6} sm={12}>
                        <img src={login1} width="100%" alt="" style={{ marginTop: "60px" }} />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Login;