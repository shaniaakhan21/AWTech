import Image from 'next/image';
import React from 'react';
import One from '../assests/images/Why/one.png';
import Two from '../assests/images/Why/two.png';
import Three from '../assests/images/Why/three.png';

const Why: React.FC = () => {
    return (
        <>
            <div className='px-2 pt-4 pb-2 sm:px-32 sm:pt-20 sm:pb-4 bg-white relative sm:bottom-[165px]'>
                <div className='flex flex-col sm:flex-row items-center'>
                    <div className='flex flex-col shadow-lg justify-center items-start w-full sm:w-3/12 sm:pr-12 bg-[#222222] rounded-2xl px-8 py-6 sm:px-10 sm:py-20'>
                        <p className='text-sm text-white'>People Trust Us</p>
                        <div className='py-4'>
                            <h1 className='text-4xl text-lg font-bold text-white'>Why Are We Best ?</h1>
                        </div>
                        <div>
                            <h6 className='text-sm text-white'>Our skilled team ensures precision and quality in every project. With 24/7 support and exceptional service tailored to residential and commercial needs, we’re Dubai’s trusted choice for building maintenance.</h6>
                        </div>
                    </div>
                    <div className='flex flex-col sm:flex-row w-full sm:w-9/12 sm:pl-10 bg-[#F9F9F9] py-2 sm:py-0 rounded-r-2xl'>
                        <div className='flex flex-col justify-center items-center px-2 sm:px-10 rounded-2xl border border-grey sm:border-none m-2 pt-2 pb-6 sm:m-0 pt-0 pb-0'>
                            <Image className='rounded-full p-2 bg-white' src={One} alt={'Team Expert'} />
                            <h2 className='text-center text-lg font-bold py-2'>Expert Team</h2>
                            <p className='text-center text-sm'>Specialized and mastered crew for exceptional demands for maintenance needs.</p>
                        </div>

                        <div className='flex flex-col justify-center items-center px-2 sm:px-10 rounded-2xl border border-grey sm:border-none m-2 pt-2 pb-6 sm:m-0 pt-0 pb-0'>
                            <Image className='rounded-full p-2 bg-white' src={Two} alt={'Team Expert'} />
                            <h2 className='text-center text-lg font-bold py-2'>Excellent Service</h2>
                            <p className='text-center text-sm'>Innovative & leading service provider for residential and commercial properties.</p>
                        </div>

                        <div className='flex flex-col justify-center items-center px-2 sm:px-10 rounded-2xl border border-grey sm:border-none m-2 pt-2 pb-6 sm:m-0 pt-0 pb-0'>
                            <Image className='rounded-full p-2 bg-white' src={Three} alt={'Team Expert'} />
                            <h2 className='text-center text-lg font-bold py-2'>24/7 Support</h2>
                            <p className='text-center text-sm'>Need emergency support? We are delighted to take up your challenges and demands.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Why;
