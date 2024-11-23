"use client";
import React, { useEffect } from 'react';
import ReviewerImage from '../assests/images/rating.png';
import Image from 'next/image';
import NumText from './NumText';
import ImgCard from './ImgCard';
import one from '../assests/images/project-01.jpeg';
import two from '../assests/images/project-02.jpeg';
import three from '../assests/images/project-03.jpeg';
import four from '../assests/images/project-04.jpeg';
import five from '../assests/images/portfolio-05.jpeg';
import six from '../assests/images/project-06.jpeg';
import AOS from "aos";
import "aos/dist/aos.css";

const Projects: React.FC = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div className='px-2 pb-2 pt-4 sm:px-32 sm:pt-20 sm:pb-10 bg-[#222222] relative sm:bottom-[100px]' id="projects">
            <div data-aos="fade-up" data-aos-duration="1000">
                <div>
                    <h2 className='text-center sm:text-start text-[#FFC527] text-sm uppercase'>Stunning Success</h2>
                </div>
                <div className='flex flex-col sm:flex-row mt-2'>
                    <div className='w-full sm:w-1/2'>
                        <h1 className='text-center sm:text-start text-white text-3xl sm:text-5xl font-bold mb-2 sm:border-r sm:border-white'>Crafting Excellence: Our Featured Projects</h1>
                    </div>
                    <div className='w-full sm:w-1/2'>
                        <h3 className='text-center sm:text-start text-white font-light text-[10px] sm:text-base sm:ml-8'>Our portfolio showcases projects completed with precision, quality, and dedication. From residential renovations to large-scale commercial maintenance, each project reflects our commitment to excellence and client satisfaction.
                        </h3>
                    </div>
                    <div className='flex flex-row sm:flex-col items-center sm:items-start py-4 sm:py-0 justify-center sm:justify-start'>
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
            </div>

            <div className='flex flex-row sm:flex-row justify-center sm:justify-between items-center'>
                <NumText title={'980+'} subtitle={'Successful Services'} data-aos="zoom-in" data-aos-duration="1000" />
                <NumText title={'900+'} subtitle={'Satisfied Clients'} data-aos="zoom-out" data-aos-duration="2000" />
                <NumText title={'450+'} subtitle={'Professionals Services'} data-aos="zoom-out" data-aos-duration="2500" />
                <NumText title={'220+'} subtitle={'Positive Reviews'} data-aos="zoom-in" data-aos-duration="1500" />
            </div>

            <div className='flex flex-row flex-wrap' data-aos="fade"
                data-aos-duration="2000">
                <ImgCard src={one} />
                <ImgCard src={two} />
                <ImgCard src={three} />
                <ImgCard src={four} />
                <ImgCard src={five} />
                <ImgCard src={six} />
            </div>
        </div>
    );
};

export default Projects;
