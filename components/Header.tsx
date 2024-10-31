"use client";
import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import AWLogo from '../assests/images/logo.png';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import CloseIcon from '@mui/icons-material/Close';

const Header: React.FC = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open: boolean) => () => {
        setDrawerOpen(open);
    };

    return (
        <AppBar className="bg-white shadow-none sticky">
            <Toolbar className="flex justify-between items-center py-2">
                {/* Logo */}
                <div className="flex items-center">
                    <Image className='w-full' src={AWLogo} alt="Logo" />
                </div>

                {/* Desktop Menu */}
                <nav className="hidden sm:flex flex-grow justify-center">
                    <Button color="inherit" className="text-[#222222]" href="/">Home</Button>
                    <Button color="inherit" className="text-[#222222]" href="/about">About</Button>
                    <Button color="inherit" className="text-[#222222]" href="/services">Services</Button>
                    <Button color="inherit" className="text-[#222222]" href="/projects">Projects</Button>
                    {/* <Button color="inherit" className="text-[#222222]" href="/contact">Contact</Button> */}
                </nav>

                {/* Contact Section */}
                <div className="hidden sm:flex text-[#222222] items-center">
                    <div className="flex justify-center items-center border border-black rounded-full w-8 h-8 mr-2">
                        <LocalPhoneOutlinedIcon className="text-3xl p-1" />
                    </div>
                    <div className="flex flex-col justify-start items-start">
                        <Typography variant="body2" className="text-xs">Need Help? Talk to Experts</Typography>
                        <Typography variant="body2">+971 557736634</Typography>
                    </div>
                </div>

                {/* Mobile Menu Icon */}
                <IconButton
                    edge="end"
                    color="inherit"
                    aria-label="menu"
                    onClick={toggleDrawer(true)}
                    className="sm:hidden text-[#222222]"
                >
                    <MenuIcon />
                </IconButton>

                {/* Mobile Drawer */}
                <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                    <div className="flex justify-end p-4">
                        <IconButton onClick={toggleDrawer(false)} aria-label="close drawer">
                            <CloseIcon />
                        </IconButton>
                    </div>
                    <List className="w-64">
                        <ListItem disablePadding>
                            <ListItemButton component="a" href="/" onClick={toggleDrawer(false)}>
                                <ListItemText primary="Home" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton component="a" href="/about" onClick={toggleDrawer(false)}>
                                <ListItemText primary="About" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton component="a" href="/services" onClick={toggleDrawer(false)}>
                                <ListItemText primary="Services" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton component="a" href="/projects" onClick={toggleDrawer(false)}>
                                <ListItemText primary="Projects" />
                            </ListItemButton>
                        </ListItem>
                        {/* <ListItem disablePadding>
                            <ListItemButton component="a" href="/contact" onClick={toggleDrawer(false)}>
                                <ListItemText primary="Contact" />
                            </ListItemButton>
                        </ListItem> */}
                        <div className="flex sm:hidden text-[#222222] items-center pl-4 mt-2">
                            <div className="flex justify-center items-center border border-black rounded-full w-8 h-8 mr-2">
                                <LocalPhoneOutlinedIcon className="text-3xl p-1" />
                            </div>
                            <div className="flex flex-col justify-start items-start">
                                <Typography variant="body2" className="text-xs">Need Help? Talk to Experts</Typography>
                                <Typography variant="body2">+971 557736634</Typography>
                            </div>
                        </div>
                    </List>
                </Drawer>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
