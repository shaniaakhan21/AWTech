import React from 'react';

interface NumTextProps {
    title: string;
    subtitle: string;
}

const NumText: React.FC<NumTextProps> = ({ title, subtitle }) => {
    return (
        <div className='py-2 sm:py-10 px-2'>
            <h1 className='text-xl sm:text-8xl text-[#FFC527] font-bold text-center sm:text-start'>{title}</h1>
            <h4 className='text-[8px] sm:text-lg text-[#F9F9F9]'>{subtitle}</h4>
        </div>
    );
};

export default NumText;
