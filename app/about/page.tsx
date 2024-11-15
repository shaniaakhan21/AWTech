"use client";
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React, { useEffect} from 'react';
import AboutBG from '../../assests/images/Pages/About/bg-about-withlogo.png';
import AboutOne from '../../assests/images/Pages/About/one.jpg';
import Image from 'next/image';
import Sleek from '@/components/Sleek';
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div className='about-page'>
            <Header />
            <div className='relative top-16'>
                <Image src={AboutBG} alt={'People Doing Repair work'} className='w-fit' data-aos="fade-down" data-aos-duration="1000"/>
                <div className='m-12'>
                    <div className='p-2 mb-6' data-aos="fade-up" data-aos-duration="1000">
                        <h1 className='mt-2 text-6xl font-light text-center px-32 text-[#FFC527] shadow-text-custom'>&quot;A well-maintained space is not just a matter of function, but a reflection of care and respect.&quot;</h1>
                    </div>
                    <div className=''>
                        <div className='flex flex-row w-full pl-4'>
                            <div className='p-2'>
                                <p className='text-[#434343] text-xs sm:text-lg' data-aos="fade-left" data-aos-duration="1000">
                                    At AW Technical Services, we take immense pride in offering comprehensive and reliable building maintenance and renovation solutions across Dubai, UAE. With years of experience and a proven track record of customer satisfaction, we ensure that every project, whether big or small, is executed with precision and care. Our team is committed to delivering the highest standard of service, from the initial consultation to the final result, ensuring that every detail is addressed to perfection.
                                </p>
                            </div>
                            <div className='p-2'>
                                <p className='text-[#434343] text-xs sm:text-lg' data-aos="fade-right" data-aos-duration="1000">
                                    Abdul Waqas Technical Services is a leading Facilities Management company specializing in all aspects of general building management and maintenance. We are dedicated to handling any maintenance task, no matter the size or complexity, at any given time. Our skilled team oversees a wide range of services, including masonry, electrical work, plumbing, painting, gardening, villa and building renovations, and more. We pride ourselves on offering a complete suite of services to address every need, making us your trusted partner for all property management and redevelopment projects.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='py-10 px-20' data-aos="fade-up" data-aos-duration="1000">
                        <Image src={AboutOne} alt={'People Doing Repair work'} className='w-fit rounded-2xl shadow-lg' />
                    </div>
                    <div className='flex flex-row bg-white p-4 rounded-2xl border-2 border-[#FFC527]'>
                        <div>
                            <div className='p-2' data-aos="fade-up" data-aos-duration="1000">
                                <h3 className='font-semibold text-2xl pb-2'>Our Mission</h3>
                                <p className='text-[#434343] text-xs sm:text-lg'>Our mission is to meet the maintenance needs of both residential and commercial clients in Dubai, offering cost-effective, tailored solutions that align with your budget and requirements. At AW Technical Services, we prioritize customer satisfaction by delivering high-quality results that exceed expectations.</p>
                            </div>
                        </div>
                        <div>
                            <div className='p-2' data-aos="fade-up" data-aos-duration="1500">
                                <h3 className='font-semibold text-2xl pb-2'>Our Plan</h3>
                                <p className='text-[#434343] text-xs sm:text-lg'>We are committed to improving the community by providing a safe, clean, and productive environment for all. Our professional services are designed to ensure sustainable, high-quality maintenance that supports living excellence. Whether it's for residential or commercial spaces, we strive to create spaces that are not only well-maintained but also conducive to a thriving, productive atmosphere.</p>
                            </div>
                        </div>
                        <div>
                            <div className='p-2' data-aos="fade-up" data-aos-duration="2000">
                                <h3 className='font-semibold text-2xl pb-2'>Our Vision</h3>
                                <p className='text-[#434343] text-xs sm:text-lg'>Our vision is to be recognized as the premier maintenance service provider in the region. We aim to achieve this by offering a wide range of expertly delivered solutions and unmatched customer support, all while maintaining the highest standards of professionalism, integrity, and transparency. We are dedicated to becoming the go-to provider for all building maintenance and renovation needs in Dubai and beyond.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Sleek/>
                <div className='border-t border-white'></div>
                <Footer />
            </div>
        </div>
    );
};

export default About;
