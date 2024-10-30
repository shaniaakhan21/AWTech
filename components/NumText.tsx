import React from 'react';

interface NumTextProps {
    title: string;
    subtitle: string;
}

const NumText: React.FC<NumTextProps> = ({ title, subtitle }) => {
    return (
        <div className='py-10'>
            <h1 className='text-8xl text-[#FFC527] font-bold'>{title}</h1>
            <h4 className='text-lg text-[#F9F9F9]'>{subtitle}</h4>
        </div>
    );
};

export default NumText;
