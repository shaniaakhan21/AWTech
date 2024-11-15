"use client";
import Image from 'next/image';
import React, { useEffect, useState} from 'react';
import House from '../assests/images/house.png';
import { Button } from '@mui/material';
import AOS from "aos";
import "aos/dist/aos.css";
import GetStartedPopup from './GetStartedPopup';

const Sleek: React.FC = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    const [showPopup, setShowPopup] = useState(false);

    const handlePopupClose = () => {
        setShowPopup(false);
    };

    return (
        <div className='px-6 py-4 sm:py-0 sm:px-32 sm:pb-0 bg-[#222222] flex flex-row justify-between items-center'>
            <div className='w-3/12 sm:bottom-[35px] relative' data-aos="zoom-out" data-aos-anchor-placement="top-center" data-aos-duration="1000">
                <Image src={House} alt={''} />
            </div>
            <div className='w-9/12'>
                <div data-aos="fade-left" data-aos-duration="1000"> 
                    <h1 className='font-bold text-[#F9F9F9] text-sm sm:text-6xl'>Need to Schedule Your First Service?</h1>
                    <h6 className='text-[#f9f9f9b5] text-[8px] sm:text-xs font-thin'>Take the first step toward transforming your space. Let us provide you with a customized quote tailored to your needs—quick, efficient, and hassle-free.</h6>
                </div>
                <div className="flex flex-row mt-2 sm:mt-4" data-aos="fade-left" data-aos-duration="2000">
                    <Button className="custom-button text-[8px] sm:text-sm capitalize rounded-full mr-4 w-fit px-2 py-1 sm:py-2 sm:px-4 text-[#222222] font-medium bg-[#FFC527] shadow-2xl"
                        onClick={() => setShowPopup(true)}
                    >
                        Get A Quote
                    </Button>
                    <GetStartedPopup isOpen={showPopup} onClose={handlePopupClose} />
                    <Button className="custom-button-white text-[8px] sm:text-sm capitalize rounded-full w-fit px-2 py-1 sm:py-2 sm:px-4 font-medium text-[#222222] font-medium bg-[#F9F9F9] shadow-2xl ml-2"
                        onClick={() => window.open('https://wa.me/971557736634', '_blank')}
                    >
                        Book Your Services
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Sleek;
