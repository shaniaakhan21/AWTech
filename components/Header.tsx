"use client";
import React from "react";
import { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import AWLogo from '../assests/images/logo.png';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import CloseIcon from '@mui/icons-material/Close';
import MobileLogo from '../assests/images/phone-logo.png'
import Link from "next/link";
const Header: React.FC = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const isMobile = useMediaQuery('(max-width: 600px)');

    // Function to handle scroll and navigation
    const handleScroll = (id: string) => {
        if (window.location.pathname !== "/") {
            // Navigate to homepage with the ID in the URL
            window.location.href = `/#${id}`;
        } else {
            // If already on the homepage, scroll directly to the section
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        }
    };

    const toggleDrawer = (open: boolean) => () => {
        setDrawerOpen(open);
    };

    return (
        <AppBar className="bg-white shadow-none pos-sticky background-white">
            <Toolbar className="flex justify-between items-center py-2">
                {/* Logo */}
                <div className="flex items-center">
                    <Link href="/">
                        <Image className='w-1/4 sm:w-full' src={isMobile ? MobileLogo : AWLogo} alt="Logo" />
                    </Link>
                </div>

                {/* Desktop Menu */}
                <nav className="hidden sm:flex flex-grow justify-center">
                    <Button color="inherit" className="text-[#222222] text-22-black" href="/">Home</Button>
                    <Button color="inherit" className="text-[#222222] text-22-black" href="/about">About</Button>
                    <Button color="inherit" className="text-[#222222] text-22-black" href="/services">Services</Button>
                    <Button color="inherit" className="text-[#222222] text-22-black" onClick={() => handleScroll("projects")}>Projects</Button>
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
                    className="sm:hidden text-[#222222] text-22-black"
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
                            <ListItemButton component="a" onClick={() => { handleScroll("projects"); toggleDrawer(false); }}>
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
