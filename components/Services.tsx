"use client";
import React, { useEffect} from 'react';
import Carousel from './Carousel';
import Image1 from '../assests/images/Carousel/01.jpg';
import Image2 from '../assests/images/Carousel/aluminius.jpg';
import Image3 from '../assests/images/Carousel/MEP.jpg';
import Image4 from '../assests/images/Carousel/Door.jpeg';
import Image5 from '../assests/images/Carousel/tiles.jpg';
import Image6 from '../assests/images/Carousel/painting.jpg';
import SingleSlideCarousel from './SingleSlideCarousel';
import AOS from "aos";
import "aos/dist/aos.css";

const slides = [
    {
        imageSrc: Image1,
        title: "Building Maintenance",
        subtitle: "Our building maintenance solutions are designed to serve repair and refurbishment for swimming pool and pergola work. We ensure the project is completed promptly with a routine check-up on any problems and resolved without affecting your budget.",
    },
    {
        imageSrc: Image2,
        title: "Glass & Aluminium",
        subtitle: "The Abdul Waqas Technical Team is professional and experienced in the design layout, manufacture, and installation of high-quality glass and aluminum work tailored to the client's requirements.",
    },
    {
        imageSrc: Image3,
        title: "MEP Works",
        subtitle: "We handle all major mechanical, electrical, and plumbing (MEP) projects since these are the three technical disciplines that encompass the systems enabling buildings to be suitable for human use and occupancy. We undertake all air conditioning and chiller servicing tasks and the related preventative maintenance solutions.",
    },
    {
        imageSrc: Image4,
        title: "Door Polishing",
        subtitle: "With the aim of turning your ideas into reality, we provide skilled, accessible, and high-quality carpentry services. We are experienced workers who use the most up-to-date polishing equipment and are capable of meeting both basic and excellent demands for any wood work, exceeding our clients' standards.",
    },
    {
        imageSrc: Image5,
        title: "Fixing & Support",
        subtitle: "Abdul Waqas Technical deals with a wide range of fixing and support facilities for your building. Wallpaper installation and upgrades, false ceilings, wall plastering, and fixing projects such as carpet tiles, hardwood, interlocks, and artificial grass are few among our excellent facilities.",
    },
    {
        imageSrc: Image6,
        title: "Painting",
        subtitle: "We offer comprehensive painting services. We specialize in interior and exterior painting for your home, office, villa, and warehouse. We often address wall surfacing preparation before painting to ensure the smoothest and ultimate result.",
    },
];

const Services: React.FC = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <><div className='px-2 pb-4 pt-4 sm:px-32 sm:pt-20 sm:pb-60 bg-[#222222]'>
            <div className='flex flex-col sm:flex-row mt-2' data-aos="fade-up" data-aos-duration="1000">
                <div className='w-full sm:w-1/2'>
                    <h1 className='text-center sm:text-start  text-white text-3xl sm:text-5xl font-bold mb-2 sm:border-r sm:border-white'>Ideal Solution For time
                        consuming problems</h1>
                </div>
                <div className='w-full sm:w-1/2'>
                    <h3 className='text-center sm:text-start  text-[#EEEEEE] text-[10px] sm:text-base font-thin ml-8 mt-2 px-2 pb-2 sm:px-0 sm:pb-0'>With years of expertise in the industry, our team handles all aspects of property management, including electrical work, plumbing, masonry, painting, and beyond. From routine maintenance to large-scale renovations, we provide a full range of services to keep your property safe, clean, and functional.
                    </h3>
                </div>
            </div>
        </div>
            <div>
                <div className='bg-[#F9F9F9] hidden sm:block flex justify-center sm:justify-end'  data-aos="fade-left" data-aos-duration="1000">
                    <Carousel slides={slides} />
                </div>
                <div className='bg-[#F9F9F9] flex justify-center sm:justify-end sm:hidden'  data-aos="fade-up" data-aos-duration="1000">
                    <SingleSlideCarousel slides={slides} />
                </div>
            </div>
        </>
    );
};

export default Services;
