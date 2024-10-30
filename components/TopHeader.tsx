import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const TopHeader: React.FC = () => {
    return (
        <AppBar position="static" className="bg-black">
            <Toolbar className="flex justify-between items-center py-2">
                {/* Left side: Social media icons */}
                <div className="flex space-x-4 w-1/2">
                    <IconButton href="https://facebook.com" target="_blank" color="inherit">
                        <FacebookIcon />
                    </IconButton>
                    <IconButton href="https://instagram.com" target="_blank" color="inherit">
                        <InstagramIcon />
                    </IconButton>
                </div>

                {/* Right side: Address and email */}
                <div className="text-white text-sm w-1/2 flex justify-end">
                    <Typography component="span" className="mr-4 text-xs flex flex-row items-center"><CalendarMonthIcon className='mr-1'/> Opening Hours: 8:00 AM - 7:00 PM</Typography>
                    <Typography component="span" className="mr-4 text-xs flex flex-row items-center"><EmailIcon className='mr-1'/> info@example.com</Typography>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default TopHeader;
