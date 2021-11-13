import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {
    const {user, logOut} = useAuth();
    const history = useHistory();
    const location = useLocation();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        News
                    </Typography>
                    <NavLink style={{textDecoration: "none", color: '#FFF'}} to="/dashboard"> <Button color="inherit">Dashboard</Button> </NavLink>

                    <NavLink style={{textDecoration: "none", color: '#FFF'}} to="/home"> <Button color="inherit">Home</Button> </NavLink>
                    {
                        user?.email ? <Button onClick={()=>logOut(location,history)} color="inherit" sx={{textDecoration: 'none', color: '#fff'}}>Logout</Button>
                        
                        :

                         <Link to="/login"><Button color="inherit" sx={{textDecoration: 'none', color: '#fff'}}>Login</Button></Link>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;