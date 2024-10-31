"use client";
import React, { useState, useEffect } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import StarIcon from '@mui/icons-material/Star';
import PersonIcon from '@mui/icons-material/Person';
interface Review {
    stars: number;
    text: string;
    name: string;
    designation: string;
}

interface CustomerReviewProps {
    reviews: Review[];
}

const CustomerReview: React.FC<CustomerReviewProps> = ({ reviews }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Automatically move to the next review every 2 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [reviews.length]);

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    };

    const { stars, text, name, designation } = reviews[currentIndex];

    return (
        <div className="flex items-center justify-between py-10">
            <div className="w-full">
                {Array.from({ length: stars }, (_, index) => (
                    <StarIcon sx={{ color: '#FFC527' }} key={index} />
                ))}
                <p className="pb-10 pt-4 text-gray-700 text-lg border-b border-[#FFC527]">{text}</p>
                <div className="flex items-center justify-between pt-4">
                    <div className='flex flex-row'>
                        <PersonIcon className="rounded-full" style={{ fontSize: 50, color: '#FFC527' }} /> {/* MUI Person Icon */}
                        <div className="ml-4">
                            <p className="text-lg font-semibold">{name}</p>
                            <p className="text-sm text-gray-500">{designation}</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <ArrowBackIosIcon onClick={handlePrevClick} fontSize="small" className="cursor-pointer mx-2" />
                        <ArrowForwardIosIcon onClick={handleNextClick} fontSize="small" className="cursor-pointer mx-2" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerReview;
