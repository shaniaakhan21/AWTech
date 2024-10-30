import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import Image from 'next/image';
import AWLogo from '../assests/images/logo.png';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';

const Header: React.FC = () => {
    return (
        <AppBar className="bg-[#F9F9F9] shadow-none sticky">
            <Toolbar className="flex flex-col sm:flex-row justify-between items-center py-2">
                <div className="flex items-center">
                    <Image src={AWLogo} alt="Logo" />
                </div>

                <nav className="flex-grow text-center">
                    <Button color="inherit" className='text-black' href="/">Home</Button>
                    <Button color="inherit" className='text-black' href="/about">About</Button>
                    <Button color="inherit" className='text-black' href="/services">Services</Button>
                    <Button color="inherit" className='text-black' href="/projects">Projects</Button>
                    <Button color="inherit" className='text-black' href="/contact">Contact</Button>
                </nav>

                <div className="text-black text-right flex flex-row items-center">
                    <div className='flex justify-center items-center border border-black rounded-full w-8 h-8 mr-2'>
                        <LocalPhoneOutlinedIcon className='text-3xl p-1'/>
                    </div>
                    <div className='flex flex-col justify-start items-start'>
                        <Typography variant="body2" className='text-xs'>Need Help? Talk to Experts</Typography>
                        <Typography variant="body2">+971 557736634</Typography>
                    </div>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Header;