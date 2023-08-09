"use client"
import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// component
import SearchBar from '@/components/shop/SearchBar';

// redux store
import { useSelector, useDispatch } from 'react-redux';
import { selectIsLoggedIn, loginSuccess, logout } from '@/redux/features/auth';

// API
import axios from 'axios';

// components from MUI
import {
    Box,
    Container,
    Button,
    Avatar,
    Divider,
    Tooltip,
    IconButton,
    Menu,
    MenuItem,
    Typography,
} from '@mui/material';

// icons from MUI 
import {
    DashboardCustomize as DashboardIcon,
    StorefrontOutlined as SellIcon,
    DarkModeOutlined as DarkIcon,
    LogoutRounded as LogoutIcon,
} from '@mui/icons-material';

const Navbar = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const categoryList = useSelector((state) => state.products.categoryList);

    const dispatch = useDispatch();

    // check if a users has already logged in?
    useEffect(() => {
        const authToken = localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY);
        if (authToken) {
            const sessionid = {
                "authtoken": authToken
            }
            axios({
                method: "post",
                url: `https://reuseit.onrender.com/api/auth/session`,
                data: sessionid,
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                },
            })
                .then(function (response) {
                    if (!response.data.status) {
                        console.log("error");
                    }
                    else {
                        dispatch(loginSuccess());
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }, [dispatch]);

    // logout
    const handleLogout = async () => {
        dispatch(logout());
        localStorage.clear();
    };

    // user menu
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenUserMenu = React.useCallback((event) => {
        setAnchorElUser(event.currentTarget);
    }, []);

    const handleCloseUserMenu = React.useCallback(() => {
        setAnchorElUser(null);
    }, []);

    const handleSearch = (query) => {
        console.log('Search for:', query);
    };

    const handleLogoutAndCloseUserMenu = () => {
        // Call both functions
        handleLogout();
        handleCloseUserMenu();
    };

    return (
        <Box sx={{ height: '60px', width: '100%', position: 'fixed', top: 0, zIndex: 1001, backgroundColor: 'white', boxShadow: 1 }}>
            <Container maxWidth="xl" sx={{ display: 'flex', justifyContent: 'space-between', height: '100%' }}>
                <Box sx={{ flex: '1', display: "flex" }}>
                    <Box component={Link} href={"/"} sx={{ display: 'flex', alignItems: 'center', color: 'black', textDecoration: "none" }}>
                        <Image priority={true} src='/image/reuseit.svg' alt="reuseit" height={40} width={40} />
                        <Typography ml={1} mt={1} variant='h6'>
                            Reuseit
                        </Typography>
                    </Box>
                </Box>

                <SearchBar suggestions={categoryList} onSearch={handleSearch} />

                <Box sx={{ flex: '1', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                    {!isLoggedIn ? (
                        <>
                            <Link href="/login">
                                <Button variant="outlined" sx={{ ml: 1.5, textTransform: 'none' }}>Login</Button>
                            </Link>
                            <Link href="/signup">
                                <Button variant="contained" sx={{ ml: 1.5, textTransform: 'none' }}>Signup</Button>
                            </Link>
                        </>
                    ) : (
                        <Box sx={{ flexGrow: 0, ml: 1 }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="User Name" src="/static/images/avatar/2.jpg" />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px', p: '10px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                <MenuItem sx={{ minWidth: '220px', py: 1 }}>
                                    <Typography textAlign="center" sx={{ ml: 1 }}>
                                        {/* {username} */}
                                        narengavli
                                    </Typography>
                                </MenuItem>

                                <Divider />

                                <MenuItem component={Link} href="/sell" onClick={handleCloseUserMenu} sx={{ minWidth: '220px', py: 1 }}>
                                    <SellIcon />
                                    <Typography textAlign="center" sx={{ ml: 1 }}>
                                        Sell
                                    </Typography>
                                </MenuItem>

                                <MenuItem component={Link} href="/dashboard" onClick={handleCloseUserMenu} sx={{ minWidth: '220px', py: 1 }}>
                                    <DashboardIcon />
                                    <Typography textAlign="center" sx={{ ml: 1 }}>
                                        Dashboard
                                    </Typography>
                                </MenuItem>

                                <MenuItem onClick={handleCloseUserMenu} sx={{ minWidth: '220px', py: 1 }}>
                                    <DarkIcon />
                                    <Typography textAlign="center" sx={{ ml: 1 }}>
                                        Dark Mode
                                    </Typography>
                                </MenuItem>

                                <MenuItem onClick={handleLogoutAndCloseUserMenu} sx={{ minWidth: '220px', py: 1 }}>
                                    <LogoutIcon />
                                    <Typography textAlign="center" sx={{ ml: 1 }}>
                                        Logout
                                    </Typography>
                                </MenuItem>
                            </Menu>
                        </Box>
                    )}
                </Box>
            </Container>
        </Box >
    );
};

export default Navbar;
