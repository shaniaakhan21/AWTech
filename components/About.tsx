"use client";
import Image from 'next/image';
import React, { useEffect } from 'react';
import AboutOne from '../assests/images/about-one.png';
import JustOne from '../assests/images/servicesCards/JustOne.png';
import JustTwo from '../assests/images/servicesCards/JustTwo.png';
import JustThree from '../assests/images/servicesCards/JustThree.png';
import JustFour from '../assests/images/servicesCards/JustFour.png';
import Servicecard from './Servicecard';
import Button from '@mui/material/Button';
import PhoneSVG from '../assests/images/servicesCards/phone.svg';
import AOS from "aos";
import "aos/dist/aos.css";

const About: React.FC = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    const handleClick = () => {
        window.location.href = '/services'; // Use this for navigation
    };

    return (
        <div className='px-2 pb-2 pt-4 sm:px-32 sm:pt-20 sm:pb-4'>
            <div data-aos="fade-up" data-aos-duration="1000">
                <div>
                    <h2 className='text-[#434343] text-sm text-center sm:text-start'>24/7 hassle-free</h2>
                </div>
                <div className='flex flex-col sm:flex-row mt-2'>
                    <div className='w-full sm:w-1/2'>
                        <h1 className='text-center sm:text-start text-[#222222] text-2xl sm:text-5xl font-bold mb-2 sm:border-r sm:border-[#222222]'>Repair And Maintenance Service Company</h1>
                    </div>
                    <div className='w-full sm:w-1/2'>
                        <h3 className='text-center px-6 sm:px-0 sm:text-start text-[#434343] text-[10px] sm:text-lg sm:ml-8'>Backed by impeccable experience and absolute customer satisfaction, we provide all-inclusive building maintenance and renovation services in Dubai, UAE.
                        </h3>
                    </div>
                </div>
            </div>
            <div className='flex flex-col sm:flex-row justify-between w-full pt-4 sm:pt-20 sm:pb-10'>
                <div className='w-full sm:w-1/2 p-4 sm:p-0' data-aos="fade-right" data-aos-duration="1000">
                    <Image src={AboutOne} alt={'People Doing Repair work'} />
                </div>
                <div className='w-full sm:w-1/2' data-aos="fade-left" data-aos-duration="1000">
                    <Servicecard
                        imageSrc={JustOne}
                        title="Experienced Professionals"
                        subtitle="Our team consists of highly skilled professionals with years of experience in building maintenance and renovation, ensuring flawless execution."
                    />
                    <Servicecard
                        imageSrc={JustTwo}
                        title="Quality Assurance"
                        subtitle="We are committed to delivering top-tier services, guaranteeing quality craftsmanship and durable results, no matter the size of the project."
                    />
                    <Servicecard
                        imageSrc={JustThree}
                        title="Affordable Pricing"
                        subtitle="We respect your time. All projects are completed within the agreed timeframe, with strict adherence to deadlines."
                    />
                    <Servicecard
                        imageSrc={JustFour}
                        title="All-In-One Service"
                        subtitle="We deliver efficient solutions tailored to each client's preferences, ensuring convenience and satisfaction with every project."
                    />
                    <div className='flex flex-row items-center p-4 sm:p-6'>
                        <div className='pr-4 w-5/12 sm:w-4/12'>
                            <Button className="custom-button-black capitalize rounded-full mr-4 w-full sm:w-fit px-2 text-xs py-2 sm:text-sm sm:px-8 bg-[#222222] font-semibold text-[#F9F9F9] shadow-2xl"
                                onClick={handleClick}>
                                Read More
                            </Button>
                        </div>
                        <div className='flex flex-row items-center w-7/12 sm:w-8/12'>
                            <div className='pr-2'>
                                <Image src={PhoneSVG} alt='phone icon' />
                            </div>
                            <div>
                                <h2 className='text-base sm:text-xl text-[#222222]'>+971 557736634</h2>
                                <p className='text-xs sm:text-sm text-[#434343]'>Call For Booking</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
