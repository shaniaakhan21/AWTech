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

interface CarouselProps {
    slides: CarouselSlide[];
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    // Check screen width on load and on resize
    useEffect(() => {
        const checkIsMobile = () => setIsMobile(window.innerWidth < 640);
        checkIsMobile(); // Initial check
        window.addEventListener("resize", checkIsMobile);
        return () => window.removeEventListener("resize", checkIsMobile);
    }, []);

    // Handlers for mobile
    const handleNextMobile = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide < slides.length - 1.5 ? prevSlide + 1 : 0
        );
    };

    const handlePrevMobile = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide > 0 ? prevSlide - 1 : slides.length - 1
        );
    };

    // Handlers for desktop
    const handleNextDesktop = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide < slides.length - 2.5 ? prevSlide + 1 : prevSlide
        );
    };

    const handlePrevDesktop = () => {
        setCurrentSlide((prevSlide) => (prevSlide > 0 ? prevSlide - 1 : prevSlide));
    };

    // Auto-change slides every 2 seconds
    useEffect(() => {
        const interval = setInterval(
            isMobile ? handleNextMobile : handleNextDesktop,
            10000
        );
        return () => clearInterval(interval);
    }, [isMobile]);

    return (
        <div className="relative w-[95%] px-4 pt-4 mb-2 overflow-hidden bottom-[150px] sm:bottom-[200px]">
            <div className="flex items-center space-x-4 pb-18">
                <div
                    className="flex transition-transform duration-300 ease-in-out"
                    style={{
                        transform: `translateX(-${currentSlide * (isMobile ? 105 : 25)}%)`,
                    }}
                >
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`p-4 flex-shrink-0 ${isMobile ? 'w-[30%]' : 'w-[30%]'}`} 
                        >
                            <div className="overflow-hidden border-b border-[#AAAAAA]">
                                <Image
                                    src={slide.imageSrc}
                                    alt={slide.title}
                                    className="w-full h-full object-cover rounded-lg"
                                />
                                <div className="p-4 h-fit sm:h-[13em]">
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
                onClick={isMobile ? handlePrevMobile : handlePrevDesktop}
                className="absolute top-[35%] sm:top-1/2 left-2 transform -translate-y-1/2 bg-white border border-[#222222] hover:bg-gray-400 rounded-full sm:p-2 z-10"
            >
                <ChevronLeftOutlinedIcon />
            </button>
            <button
                onClick={isMobile ? handleNextMobile : handleNextDesktop}
                className="absolute top-[35%] sm:top-1/2 right-2 transform -translate-y-1/2 bg-white border border-[#222222] hover:bg-gray-400 rounded-full sm:p-2 z-10"
            >
                <ChevronRightOutlinedIcon />
            </button>
        </div>
    );
};

export default Carousel;
