import Image from 'next/image';
import React from 'react';
import AboutOne from '../assests/images/about-one.png';
import JustOne from '../assests/images/servicesCards/JustOne.png';
import JustTwo from '../assests/images/servicesCards/JustTwo.png';
import JustThree from '../assests/images/servicesCards/JustThree.png';
import JustFour from '../assests/images/servicesCards/JustFour.png';
import Servicecard from './Servicecard';
import Button from '@mui/material/Button';
import PhoneSVG from '../assests/images/servicesCards/phone.svg';

const About: React.FC = () => {
    return (
        <div className='px-32 pt-20 pb-4'>
            <div>
                <div>
                    <h2 className='text-[#434343] text-sm'>24/7 hassle-free</h2>
                </div>
                <div className='flex flex-row mt-2'>
                    <div className='w-1/2'>
                        <h1 className='text-[#222222] text-5xl font-bold mb-2 border-r border-[#222222]'>Repair And Maintenance Service Company</h1>
                    </div>
                    <div className='w-1/2'>
                        <h3 className='text-[#434343] text-lg ml-8'>Backed by impeccable experience and absolute customer satisfaction, we provide all-inclusive building maintenance and renovation services in Dubai, UAE.
                        </h3>
                    </div>
                </div>
            </div>
            <div className='flex flex-row justify-between w-full pt-20 pb-10'>
                <div className='w-1/2'>
                    <Image src={AboutOne} alt={'People Doing Repair work'} />
                </div>
                <div className='w-1/2'>
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
                        subtitle="Pellentesque id nibh tortor id. Quis vel eros donec ac odio tempor orci. Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam."
                    />
                    <div className='flex flex-row items-center p-6'>
                        <div className='pr-4'>
                            <Button className="capitalize rounded-full mr-4 w-fit px-8 py-2 bg-[#222222] font-semibold text-[#F9F9F9] shadow-2xl">
                                Read More
                            </Button>
                        </div>
                        <div className='flex flex-row items-center'>
                            <div className='pr-2'>
                                <Image src={PhoneSVG} alt='phone icon'/>
                            </div>
                            <div>
                                <h2 className='text-xl text-[#222222]'>+971 557736634</h2>
                                <p className='text-sm text-[#434343]'>Call For Booking</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
