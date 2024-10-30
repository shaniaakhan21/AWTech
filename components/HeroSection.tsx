import * as React from 'react';
import Button from '@mui/material/Button';
import Image from 'next/image';
import backgroundImage from '../assests/images/section-one.png';
import ReviewerImage from '../assests/images/rating.png';

interface HeroSectionProps {
    title: string;
    buttonText1: string;
    buttonText2: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, buttonText1, buttonText2 }) => {
    return (
        <section
            className="relative bg-cover bg-center pb-96 pt-32 px-32"
            style={{ backgroundImage: `url(${backgroundImage.src})` }}
        >
            <div className="container w-1/2 pl-4">
                <div className="text-white mb-8">
                    <h1 className="text-sm">{title}</h1>
                    <h2 className="text-5xl font-bold mb-2 py-2">Expertised In All In <br />One Technical Services</h2>
                    <p className="text-sm mb-8 w-10/12">
                        AW Technical Service is a committed Facilities Management company responsible for all general building management.
                    </p>
                </div>

                <div className="flex flex-row justify-between mb-8">
                    <div className="flex flex-row w-8/12">
                        <Button className="capitalize rounded-full mr-4 w-fit px-4 text-[#222222] font-medium bg-[#FFC527] shadow-2xl">
                            {buttonText1}
                        </Button>
                        <Button className="capitalize rounded-full w-fit px-4 font-medium text-[#222222] font-medium bg-[#F9F9F9] shadow-2xl">
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
