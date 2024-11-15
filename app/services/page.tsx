"use client";
import * as React from 'react';
import { useState, useEffect } from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import House from '../../assests/images/house.png';
import { Button } from '@mui/material';
import GetStartedPopup from '@/components/GetStartedPopup';
import ServiceBox from '@/components/ServiceBox';
import Build from '../../assests/images/Pages/Services/one.jpg';
import HomeRepairService from '../../assests/images/Pages/Services/three.jpg';
import Door from '../../assests/images/Pages/Services/five.jpg';
import Fixing from '../../assests/images/Pages/Services/six.jpg';
import PaintingService from '../../assests/images/Pages/Services/seven.jpg';
import MEPWorks from '../../assests/images/Pages/Services/four.jpg';
import Image from 'next/image';
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
    const [showPopup, setShowPopup] = useState(false);

    const handlePopupClose = () => {
        setShowPopup(false);
    };

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    const handleClick = () => {
        window.location.href = '/about'; // Use this for navigation
    };

    return (
        <div className='service-page'>
            <Header />
            <div className='relative top-16'>
                <div className='px-6 py-2 sm:px-72 sm:py-10'>
                    <h1 className='text-xl sm:text-5xl font-bold text-center mb-4 mt-6' data-aos="fade-up" data-aos-duration="1000">Our Services: Transforming Spaces, Elevating Standards</h1>
                    <p className='text-[#434343] text-xs sm:text-lg px-2 py-2 sm:px-20 sm:py-4 text-center' data-aos="fade-up" data-aos-duration="1000">
                        At Abdul Waqas Technical Services, we specialize in comprehensive building maintenance and renovation solutions tailored to your unique needs. Our diverse range of services ensures excellence, efficiency, and elegance in every project we undertake.
                    </p>
                    <div className="flex flex-row justify-center" data-aos="fade-up" data-aos-duration="1000">
                        <Button className="custom-button capitalize rounded-full mr-4 w-fit px-2 text-xs sm:text-sm sm:px-4 text-[#222222] font-medium bg-[#FFC527] shadow-2xl"
                            onClick={() => setShowPopup(true)}
                        >
                            Get a quote
                        </Button>
                        <GetStartedPopup isOpen={showPopup} onClose={handlePopupClose} />
                        <Button className="custom-button-black capitalize rounded-full w-fit px-2 text-xs sm:text-sm sm:px-4 font-medium text-[#222222] font-medium bg-[#F9F9F9] shadow-2xl"
                            onClick={handleClick}
                        >
                            Know more
                        </Button>
                    </div>
                    <div className="grid gap-6 md:grid-cols-3 mt-4 pt-4 sm:pt-10 mb-6 sm:mb-20">
                        <ServiceBox
                            data-aos="flip-left" data-aos-duration="1000"
                            imageSrc={Build}
                            title="Building Maintenance"
                            description="Our building maintenance services are designed to provide end-to-end solutions for repair and refurbishment, including specialized projects like swimming pool and pergola enhancements. We emphasize timely project execution, routine inspections, and seamless resolutions to any maintenance issues—all while staying within your budget. Let us help you maintain a space that is both functional and visually appealing."
                        />
                        <ServiceBox
                            className='relative sm:top-10'
                            data-aos="flip-left" data-aos-duration="2000"
                            imageSrc={HomeRepairService}
                            title="Glass & Aluminium"
                            description="At Abdul Waqas Technical Services, we excel in creating bespoke glass and aluminum solutions that blend style with durability. Our experienced team handles everything from design conceptualization to precision installation, offering custom layouts, high-quality finishes, and exceptional craftsmanship. Whether it's a residential upgrade or a commercial project, we bring your vision to life with unparalleled attention to detail."
                        />
                        <ServiceBox
                            className='relative sm:top-20'
                            data-aos="flip-left" data-aos-duration="3000"
                            imageSrc={MEPWorks}
                            title="MEP Works"
                            description="Mechanical, electrical, and plumbing (MEP) systems are essential for ensuring buildings are safe, efficient, and habitable. We specialize in comprehensive MEP services, including air conditioning and chiller maintenance, as well as preventive solutions tailored to your needs. Our expertise guarantees optimal comfort, energy efficiency, and long-term reliability for your property."
                        />
                        <ServiceBox
                            data-aos="flip-left" data-aos-duration="1000"
                            imageSrc={Door}
                            title="Door Polishing & Carpentry"
                            description="Bring your woodwork ideas to life with our exceptional door polishing and carpentry services. From standard refinishing to intricate custom detailing, we utilize cutting-edge equipment and techniques to deliver unparalleled craftsmanship. Our goal is to exceed your expectations by providing functional and aesthetic woodwork that stands out."
                        />
                        <ServiceBox
                            className='relative sm:top-10'
                            data-aos="flip-left" data-aos-duration="2000"
                            imageSrc={Fixing}
                            title="Fixing & Support Services"
                            description="Our fixing and support services cover a wide range of enhancement solutions to elevate your living or working spaces. We specialize in wallpaper installations, false ceilings, wall plastering, and floor upgrades, including carpet tiles, hardwood, interlocks, and artificial grass. With creativity and expertise, we transform ordinary spaces into extraordinary ones."
                        />
                        <ServiceBox
                            data-aos="flip-left" data-aos-duration="3000"
                            className='relative sm:top-20'
                            imageSrc={PaintingService}
                            title="Painting Services"
                            description="Transform your property with our professional painting services, tailored for both interior and exterior projects. We cater to homes, offices, villas, and warehouses, ensuring flawless wall preparation and smooth finishes. Our vibrant and long-lasting results reflect sophistication, leaving your spaces refreshed and beautifully renewed."
                        />
                    </div>
                </div>
                <div className='px-6 py-4 sm:py-0 sm:px-32 sm:pb-0 bg-[#222222] flex flex-row justify-between items-center'>
                    <div className='w-3/12 sm:bottom-[35px] relative' data-aos="zoom-out" data-aos-anchor-placement="top-center" data-aos-duration="1000">
                        <Image src={House} alt={''} />
                    </div>
                    <div className='w-9/12'>
                        <div data-aos="fade-left" data-aos-duration="1000">
                            <h1 className='font-bold text-[#F9F9F9] text-sm sm:text-4xl'>Ready to pull the trigger? Get a quote today.</h1>
                            <h6 className='text-[#f9f9f9b5] text-[8px] sm:text-xs font-thin'>Take the first step toward transforming your space. Let us provide you with a customized quote tailored to your needs—quick, efficient, and hassle-free.</h6>
                        </div>
                        <div className="flex flex-row mt-2 sm:mt-4" data-aos="fade-left" data-aos-duration="2000">
                            <Button id="cust-btn" className="custom-button text-[8px] sm:text-sm capitalize rounded-full mr-4 w-fit px-2 py-1 sm:py-2 sm:px-4 text-[#222222] font-medium bg-[#FFC527] shadow-2xl"
                                 onClick={() => setShowPopup(true)}
                            >
                                Get A Quote
                            </Button>
                            <Button className="custom-button-white text-[8px] sm:text-sm capitalize rounded-full w-fit px-2 py-1 sm:py-2 sm:px-4 font-medium text-[#222222] font-medium bg-[#F9F9F9] shadow-2xl ml-2" id="cust-btn"
                                 onClick={() => window.open('https://wa.me/971557736634', '_blank')}
                            >
                                Book Your Services
                            </Button>
                        </div>
                    </div>
                </div>
                <div className='border-t border-white'></div>
                <Footer />
            </div>
        </div>
    );
};

export default Services;
