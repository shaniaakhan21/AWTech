"use client";
import Image from 'next/image';
import React from 'react';
import House from '../assests/images/house.png';
import { Button } from '@mui/material';

const Sleek: React.FC = () => {
    return (
        <div className='px-6 py-4 sm:py-0 sm:px-32 sm:pb-0 bg-[#222222] flex flex-row justify-between items-center'>
            <div className='w-3/12 sm:bottom-[35px] relative'>
                <Image src={House} alt={''} />
            </div>
            <div className='w-9/12'>
                <div>
                    <h1 className='font-bold text-[#F9F9F9] text-sm sm:text-5xl'>Need to Schedule Your First Service?</h1>
                    <h6 className='text-[#f9f9f9b5] text-[8px] sm:text-xs font-thin'>Aliquam nulla facilisi cras fermentum odio eu Cras fermentum odio eu feugiat pretium.</h6>
                </div>
                <div className="flex flex-row mt-2 sm:mt-4">
                    <Button className="text-[8px] sm:text-sm capitalize rounded-full mr-4 w-fit px-2 py-1 sm:py-2 sm:px-4 text-[#222222] font-medium bg-[#FFC527] shadow-2xl"
                        onClick={() => window.open('https://wa.me/971557736634', '_blank')}
                    >
                        Get A Quote
                    </Button>
                    <Button className="text-[8px] sm:text-sm capitalize rounded-full w-fit px-2 py-1 sm:py-2 sm:px-4 font-medium text-[#222222] font-medium bg-[#F9F9F9] shadow-2xl ml-2"
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
