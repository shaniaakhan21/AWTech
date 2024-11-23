"use client";
import Image from 'next/image';
import React, { useEffect } from 'react';
import ReviewerImage from '../assests/images/rating.png';
import CustomerReview from './CustomerReview';
import AOS from "aos";
import "aos/dist/aos.css";

const Reviews: React.FC = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    const reviewData = [
        {
            stars: 5,
            text: "All of my problems that I had for a year in my work place has gone in a day.They fixed all our electrical problems in a professional way. They are good at managing time and great price also!!",
            name: "양지애",
            designation: "Customer",
        },

        {
            stars: 5,
            text: "The employees of the company are very nice and their services are good, they have lot of experience of good teamwork and they give satisfactory results.",
            name: "Vipin kapil",
            designation: "Customer",
        },

        {
            stars: 5,
            text: "Your service is very good. I was very pleased with their work. I like their way of working too. 👍",
            name: "Jitender Khanna",
            designation: "Customer",
        },

        {
            stars: 5,
            text: "Do your home mantinace work with Aw technical services thy will be do good job our villa spring",
            name: "Sea Andsand",
            designation: "Customer",
        },
        {
            stars: 5,
            text: "The company is good nice staff and thy are cheep then other",
            name: "Jonalyn Caballero",
            designation: "Customer",
        },

        {
            stars: 5,
            text: "Excellent service and always on time.",
            name: "Richard Rodrigues",
            designation: "Customer",
        },

        {
            stars: 5,
            text: "Full waterproofing of my Villa done with excellent outcome. Communication was easy via whatsapp and workers adapted to the sleeping schedule of my baby as well. Easy to recommend them 👍",
            name: "T B",
            designation: "Customer",
        },

        {
            stars: 5,
            text: "Good service, well done.. they dealt with plant removal, water leaks, patch and paint work, and pipes!! Thank you so much!!",
            name: "J",
            designation: "Customer",
        },
        {
            stars: 5,
            text: "hi all this is good company they doing our home panting job that's good and cheepar then other",
            name: "Kimverly Timtim",
            designation: "Customer",
        },
        {
            stars: 5,
            text: "Hi evry one i have good expirance this company do work with him and good quality",
            name: "Mohammad Mohiuddin",
            designation: "Customer",
        },
        {
            stars: 5,
            text: "I have good experience this company they are reliable and good experience Staff also nice good communication good experience nice one",
            name: "Khurram Sarwar",
            designation: "Customer",
        },
        {
            stars: 5,
            text: "Very very good team work. Hard work technicians. Gives very satisfactory results.",
            name: "Devesh Sharma",
            designation: "Customer",
        },
        {
            stars: 5,
            text: "Very good service...and affordable .....do with work all kind off technical services",
            name: "Niyas N",
            designation: "Customer",
        },
    ];
    return (
        <div className='px-10 py-8 sm:px-32 sm:py-20 bg-white'>
            <div className='flex flex-col sm:flex-row justify-between items-center w-full' data-aos="fade-up" data-aos-duration="1000">
                <div className='w-full sm:w-1/2'>
                    <h4 className='text-[#434343] font-thin uppercase text-xs sm:text-sm'>Our Clients Reviews</h4>
                    <h1 className='text-[#222222] font-bold text-2xl sm:text-4xl pt-4 pb-4'>Happy Customers</h1>
                </div>
                <div className='w-full sm:w-1/2 pl-8 border-l border-[#FFC527]'>
                    <p>
                        For dependable, 24/7 building maintenance and technical services in Dubai, contact us today at +971 557736634. Your satisfaction is our priority, and our expert team is ready to tackle all your property management needs with care and professionalism.
                    </p>
                    <div className="flex flex-row justify-start items-center mt-2">
                        <div className="flex space-x-4">
                            <div className="flex flex-col items-center">
                                <Image src={ReviewerImage} alt="Reviewer" className="rounded-full" />
                            </div>
                        </div>
                        <div className='flex flex-col ml-4'>
                            <p className="text-lg">★ ★ ★ ★ ★</p>
                            <p className="text-sm text-[#222222]">4.0k reviews</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <CustomerReview reviews={reviewData} />
            </div>
        </div>
    );
};

export default Reviews;
