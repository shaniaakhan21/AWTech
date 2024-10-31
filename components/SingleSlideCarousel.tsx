"use client";
import React, { useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';

interface CarouselSlide {
    imageSrc: StaticImageData;
    title: string;
    subtitle: string;
}

interface SingleSlideCarouselProps {
    slides: CarouselSlide[];
}

const SingleSlideCarousel: React.FC<SingleSlideCarouselProps> = ({ slides }) => {

    return (
        <div className="relative w-[95%] px-4 pt-4 mb-2 overflow-hidden">
            <div className="flex items-center justify-center">
                <div className="overflow-hidden w-full">
                    <div>
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-full p-4"
                            >
                                <div className="overflow-hidden border-b border-[#AAAAAA]">
                                    <Image
                                        src={slide.imageSrc}
                                        alt={slide.title}
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                    <div className="p-4 h-fit sm:h-[14em]">
                                        <h2 className="text-lg font-bold text-[#222222]">{slide.title}</h2>
                                        <p className="text-gray-600 text-[#434343]">{slide.subtitle}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SingleSlideCarousel;
