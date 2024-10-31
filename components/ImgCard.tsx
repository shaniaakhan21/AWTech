import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface ImgCardProps {
    src: StaticImageData;     
}

const ImgCard: React.FC<ImgCardProps> = ({ src }) => { // Default values for width and height
    return (
        <div className='rounded-2xl m-[10px]'>
            <Image className='rounded-2xl' src={src} alt={'Gallery Images'} />
        </div>
    );
};

export default ImgCard;
