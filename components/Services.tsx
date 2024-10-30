import React from 'react';
import Carousel from './Carousel';
import Image1 from '../assests/images/Carousel/one.png';
import Image2 from '../assests/images/Carousel/two.png';

const slides = [
    {
        imageSrc: Image1,
        title: "Building Maintenance",
        subtitle: "Our building maintenance solutions are designed to serve repair and refurbishment for swimming pool and pergola work. We ensure the project is completed promptly with a routine check-up on any problems and resolved without affecting your budget.",
    },
    {
        imageSrc: Image2,
        title: "Glass & Aluminium",
        subtitle: "The AW Technical Team is professional and experienced in the design layout, manufacture, and installation of high-quality glass and aluminum work tailored to the client's requirements.",
    },
    {
        imageSrc: Image1,
        title: "Building Maintenance",
        subtitle: "Our building maintenance solutions are designed to serve repair and refurbishment for swimming pool and pergola work. We ensure the project is completed promptly with a routine check-up on any problems and resolved without affecting your budget.",
    },
    {
        imageSrc: Image2,
        title: "Glass & Aluminium",
        subtitle: "The AW Technical Team is professional and experienced in the design layout, manufacture, and installation of high-quality glass and aluminum work tailored to the client's requirements.",
    },
    {
        imageSrc: Image1,
        title: "Building Maintenance",
        subtitle: "Our building maintenance solutions are designed to serve repair and refurbishment for swimming pool and pergola work. We ensure the project is completed promptly with a routine check-up on any problems and resolved without affecting your budget.",
    },
    {
        imageSrc: Image2,
        title: "Glass & Aluminium",
        subtitle: "The AW Technical Team is professional and experienced in the design layout, manufacture, and installation of high-quality glass and aluminum work tailored to the client's requirements.",
    },
];

const Services: React.FC = () => {
    return (
        <><div className='px-32 pt-20 pb-60 bg-[#222222]'>
            <div className='flex flex-row mt-2'>
                <div className='w-1/2'>
                    <h1 className='text-white text-5xl font-bold mb-2 border-r border-white'>Ideal Solution For time
                        consuming problems</h1>
                </div>
                <div className='w-1/2'>
                    <h3 className='text-[#EEEEEE] text-base font-thin ml-8 mt-2'>Volutpat maecenas volutpat blandit aliquam etiam erat. Enim praesent elementum facilisis leo vel fringilla est. Vel elit scelerisque mauris pellentesque. Id ornare arcu odio ut sem. Dapibus ultrices in iaculis nunc sed augue lacus.
                    </h3>
                </div>
            </div>
        </div>
            <div>
                <div className='bg-[#F9F9F9] flex justify-end'>
                    <Carousel slides={slides} />
                </div>
            </div>
        </>
    );
};

export default Services;
