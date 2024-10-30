"use client";
import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';

interface CarouselSlide {
    imageSrc: StaticImageData;
    title: string;
    subtitle: string;
}

interface CarouselProps {
    slides: CarouselSlide[];
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleNext = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide < slides.length - 4.5 ? prevSlide + 1 : prevSlide
        );
    };

    const handlePrev = () => {
        setCurrentSlide((prevSlide) => (prevSlide > 0 ? prevSlide - 1 : prevSlide));
    };

    return (
        <div className="relative w-[95%] px-4 pt-4 mb-2 overflow-hidden bottom-[200px]">
            <div className="flex items-center space-x-4 pb-18">
                <div
                    className="flex transition-transform duration-300 ease-in-out"
                    style={{
                        transform: `translateX(-${currentSlide * 25}%)`,
                    }}
                >
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className="w-[30%] p-4 flex-shrink-0" 
                        >
                            <div className="overflow-hidden border-b border-[#AAAAAA]">
                                <Image
                                    src={slide.imageSrc}
                                    alt={slide.title}
                                    className="w-full h-full object-cover  rounded-lg"
                                />
                                <div className="p-4 h-[13em]">
                                    <h2 className="text-lg font-bold text-[#222222]">{slide.title}</h2>
                                    <p className="text-gray-600 text-[#434343]">{slide.subtitle}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Buttons */}
            <button
                onClick={handlePrev}
                className="absolute top-1/2 left-4  w-[3%] transform -translate-y-1/2 bg-white border border-[#222222] hover:bg-gray-400 rounded-full p-2 z-10"
            >
                <ChevronLeftOutlinedIcon/>
            </button>
            <button
                onClick={handleNext}
                className="absolute top-1/2 right-4 w-[3%] transform -translate-y-1/2 bg-white border border-[#222222] hover:bg-gray-400 rounded-full p-2 z-10"
            >
                <ChevronRightOutlinedIcon/>
            </button>
        </div>
    );
};

export default Carousel;
