import Image from 'next/image';
import React from 'react';
import ReviewerImage from '../assests/images/rating.png';
import CustomerReview from './CustomerReview';
import PersonIcon from '@mui/icons-material/Person';

const Reviews: React.FC = () => {
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
            text: "Hi all this is good company they doing our home panting job that's good and cheepar then other.Amazing service! Highly recommended.",
            name: "Kimverly Timtim",
            designation: "Customer",
        },
    ];
    return (
        <div className='px-10 py-8 sm:px-32 sm:py-20 bg-white'>
            <div className='flex flex-col sm:flex-row justify-between items-center w-full'>
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
                            <PersonIcon className="rounded-full" style={{ fontSize: 50, color: '#FFC527' }} /> {/* MUI Person Icon */}
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
