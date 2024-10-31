import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface ServicecardProps {
    imageSrc: StaticImageData;        
    title: string;           
    subtitle: string;        
}

const Servicecard: React.FC<ServicecardProps> = ({ imageSrc, title, subtitle }) => {
    return (
        <div className="flex items-center space-x-4 p-4 bg-white shadow-none ">
            <div className="relative p-2 sm:p-4 bg-[#EDEDED] rounded-full">
                <Image src={imageSrc} alt={title}  width={96} height={96} />
            </div>

            <div>
                <h2 className="text-base sm:text-xl text-[#222222] font-semibold">{title}</h2>
                <p className="text-[#434343] text-xs sm:text-sm">{subtitle}</p>
            </div>
        </div>
    );
};

export default Servicecard;
