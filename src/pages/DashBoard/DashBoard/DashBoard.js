import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import DashBoardHome from '../DashBoardHome/DashBoardHome';
import {
    Switch,
    Route,
    useRouteMatch,
    useHistory,
    useLocation
} from "react-router-dom";
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddProduct from './AddProduct/AddProduct';
import ManageOrder from './ManageOrder/ManageOrder';
import useAuth from '../../../hooks/useAuth';
import ManageProduct from './ManageProduct/ManageProduct';
import Review from './Review/Review';
import UserPay from './UserPay/UserPay';

const drawerWidth = 240;

function DashBoard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { admin, logOut } = useAuth();

    const history = useHistory()  
    const location = useLocation()  
    
    let { path, url } = useRouteMatch();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider sx={{ mb: 3 }} />
            <Link to="/home"> <Button color="inherit" variant="text">home</Button> </Link>
            <Link to="/explorehome"> <Button color="inherit" variant="text">Explore Product</Button> </Link>

            <Link to={`${url}`}> <Button color="inherit" variant="text">My Order</Button> </Link>
            <Link to={`${url}/payment`}> <Button color="inherit" variant="text">pay</Button> </Link>
            <Link to={`${url}/review`}> <Button color="inherit" variant="text">Review</Button> </Link>

            {admin && <Box>
                <Link to={`${url}/makeAdmin`}> <Button color="inherit" variant="text">Make Admin</Button> </Link>

                <Link to={`${url}/addProduct`}> <Button color="inherit" variant="text">Add Product</Button> </Link>
                <Link to={`${url}/manageOrders`}> <Button color="inherit" variant="text">Manage Order</Button> </Link>
                <Link to={`${url}/manageproduct`}> <Button color="inherit" variant="text">Manage Product</Button> </Link>
            </Box>}
            <Button onClick={()=>logOut(location,history)} color="inherit" variant="text">Logout</Button>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                <Switch>
                    <Route exact path={path}>
                        <DashBoardHome></DashBoardHome>
                    </Route>
                    <Route path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </Route>
                    <Route path={`${path}/addProduct`}>
                        <AddProduct></AddProduct>
                    </Route>
                    <Route path={`${path}/manageOrders`}>
                        <ManageOrder></ManageOrder>
                    </Route>
                    <Route path={`${path}/manageproduct`}>
                        <ManageProduct></ManageProduct>
                    </Route>
                    <Route path={`${path}/payment`}>
                        <UserPay></UserPay>
                    </Route>
                    <Route path={`${path}/review`}>
                        <Review></Review>
                    </Route>
                </Switch>

            </Box>
        </Box>
    );
}

DashBoard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default DashBoard;
