"use client";
import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Image from 'next/image';
import backgroundImage from '../assests/images/section-one.png';
import ReviewerImage from '../assests/images/rating.png';
import GetStartedPopup from './GetStartedPopup';

interface HeroSectionProps {
    title: string;
    buttonText1: string;
    buttonText2: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, buttonText1, buttonText2 }) => {
    const [showPopup, setShowPopup] = useState(false);

    const handlePopupClose = () => {
        setShowPopup(false);
    };
    return (
        <section
            className="relative bg-cover bg-center px-0 pb-0 pt-0 sm:pb-96 sm:pt-32 sm:px-32"
            style={{ backgroundImage: `url(${backgroundImage.src})` }}
        >
            <div className="container w-full sm:w-1/2 pl-4 bg-[#00000045] sm:bg-transparent px-[4px] pb-20 pt-20 sm:px-0 sm:pb-0 sm:pt-0">
                <div className="text-white mb-4 sm:mb-8">
                    <h1 className="text-[8px] sm:text-sm">{title}</h1>
                    <h2 className="text-xl sm:text-5xl font-bold sm:mb-2 py-2">Expertised In All In <br />One Technical Services</h2>
                    <p className="text-xs sm:text-sm mb-1 sm:mb-8 w-9/12 sm:w-10/12">
                        AW Technical Service is a committed Facilities Management company responsible for all general building management.
                    </p>
                </div>

                <div className="flex flex-row justify-between mb-4 sm:mb-8">
                    <div className="flex flex-row w-9/12">
                        <Button className="custom-button capitalize rounded-full mr-4 w-fit px-2 text-xs sm:text-sm sm:px-4 text-[#222222] font-medium bg-[#FFC527] shadow-2xl"
                        onClick={() => setShowPopup(true)}
                        >
                            {buttonText1}
                        </Button>
                        <GetStartedPopup isOpen={showPopup} onClose={handlePopupClose} />
                        <Button className="custom-button-white capitalize rounded-full w-fit px-2 text-xs sm:text-sm sm:px-4 font-medium text-[#222222] font-medium bg-[#F9F9F9] shadow-2xl">
                            {buttonText2}
                        </Button>
                    </div>
                </div>

                <div className="flex flex-row justify-start items-center">
                    <div className="flex space-x-4">
                        <div className="flex flex-col items-center">
                            <Image src={ReviewerImage} alt="Reviewer" className="rounded-full" />
                        </div>
                    </div>
                    <div className='flex flex-col ml-4'>
                        <p className="text-xs">⭐️⭐️⭐️⭐️⭐️</p>
                        <p className="text-sm text-white">4.0k reviews</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
