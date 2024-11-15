import React from "react";
import Image, { StaticImageData } from "next/image";

interface ServiceBoxProps {
    imageSrc: StaticImageData;
    title: string;
    description: string;
    className?: string;
    "data-aos"?: string;  // Optional AOS prop
    "data-aos-duration"?: string;  
}

const ServiceBox: React.FC<ServiceBoxProps> = ({ imageSrc, title, description, className = "",  "data-aos": aos, "data-aos-duration": duration  }) => {
    return (
        <div className={`border border-[#43434345] p-4 rounded-2xl text-center max-w-sm mx-auto ${className}`} data-aos={aos} data-aos-duration={duration}>
            <div className="flex justify-center items-center mb-4">
                <Image src={imageSrc} alt={title} className="w-fit object-contain rounded-2xl shadow-lg" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-sm text-[#434343]">{description}</p>
        </div>
    );
};

export default ServiceBox;
