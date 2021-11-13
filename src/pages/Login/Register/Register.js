import React,{useState} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import login from '../../../images/login.png'
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth.js'; 
import { useHistory } from 'react-router';
import { Alert, CircularProgress } from '@mui/material';

const Register = () => {
    const [registerData, setRegisterData] = useState()
    const {user, register, error, isLoading} = useAuth()

    const history = useHistory()

    const handleonBlur = (e) => {
        e.preventDefault()
        const field = e.target.name;
        const value = e.target.value;
        const newRegister = {...registerData};
        newRegister[field] = value;
        setRegisterData(newRegister)
        // console.log(newRegister)
    }


    const handlefrom = (e) => {
        register(registerData.email, registerData.password, registerData.name, history, registerData.country, registerData.address, registerData.phone)
        e.preventDefault()
    }
    
    return (
        <Container>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} sm={12} sx={{ mt: 2 }}>
                    <Typography variant="h3" sx={{ color: "blue", fontWeight: 600, my: 5 }}>
                            Register
                        </Typography>
                        {!isLoading && <form onSubmit={handlefrom}>
                        <TextField
                            sx={{width: "75%", m: 1}}
                            required
                            id="standard-basic"
                            label="Your Name"
                            name="name"
                            onBlur={handleonBlur}
                            type="text"
                            variant="standard" />


                        <TextField
                            sx={{width: "75%", m: 1}}
                            required
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            onBlur={handleonBlur}
                            type="email"
                            variant="standard" />

                        <TextField
                            sx={{width: "75%", m: 1}}
                            required
                            id="standard-basic"
                            label="Country"
                            name="country"
                            onBlur={handleonBlur}
                            type="text"
                            variant="standard" />

                        <TextField
                            sx={{width: "75%", m: 1}}
                            required
                            id="standard-basic"
                            label="Address"
                            name="address"
                            onBlur={handleonBlur}
                            type="text"
                            variant="standard" />

                        <TextField
                            sx={{width: "75%", m: 1}}
                            required
                            id="standard-basic"
                            label="phone"
                            name="phone"
                            onBlur={handleonBlur}
                            type="text"
                            variant="standard" />

                            <TextField
                            sx={{width: "75%", m: 1}}
                             id="standard-basic"
                            label="Password"
                            name="password"
                            onBlur={handleonBlur}
                            type="password"
                            variant="standard" />
                            <Button sx={{width: "75%", m: 3}} type="submit" variant="contained">Sign Up</Button>
                        </form>}

                        {user?.email && <Alert sx={{width: "75%", marginLeft: '55px'}} severity="success">user created successfully!</Alert>}

                        {error && <Alert sx={{width: "75%", marginLeft: '55px'}} severity="error">{error}</Alert>}

                        <Grid itam xs={12} md={6} sx={{margin: 'auto'}}>
                        {isLoading && <Typography variant="h6" sx={{color: 'green'}}>Please Wait</Typography>}
                        {isLoading && <CircularProgress />}
                        </Grid>

                        <NavLink style={{textDecoration: 'none'}} to="/login"><Button variant="text" sx={{width: "75%", m: 1}}>Already Register? please login</Button></NavLink>
                    </Grid>
                    <Grid item xs={12} md={6} sm={12}>
                        <img src={login} width="100%" alt="" style={{marginTop: "70px"}} />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Register;