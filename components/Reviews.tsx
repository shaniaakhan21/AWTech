import Image from 'next/image';
import React from 'react';
import ReviewerImage from '../assests/images/rating.png';
import CustomerReview from './CustomerReview';

const Reviews: React.FC = () => {
    const reviewData = [
        {
            stars: 5,
            text: "Amazing service! Highly recommended.",
            name: "Shaniya Khan",
            designation: "CEO, Tech Corp",
            image: "/path/to/image.jpg",
        },
        
        {
            stars: 5,
            text: "Amazing service! Highly recommended.",
            name: "John Doe",
            designation: "CEO, Tech Corp",
            image: "/path/to/image.jpg",
        },

        {
            stars: 5,
            text: "Amazing service! Highly recommended.",
            name: "JIra=",
            designation: "CEO, Tech Corp",
            image: "/path/to/image.jpg",
        },

        {
            stars: 5,
            text: "Amazing service! Highly recommended.",
            name: "John Doe",
            designation: "CEO, Tech Corp",
            image: "/path/to/image.jpg",
        },
    ];
    return (
        <div className='px-32 py-20 bg-white'>
            <div className='flex flex-row justify-between items-center w-full'>
                <div className='w-1/2'>
                    <h4 className='text-[#434343] font-thin uppercase'>Our Clients Reviews</h4>
                    <h1 className='text-[#222222] font-bold text-4xl pt-4 pb-4'>Happy Customers</h1>
                </div>
                <div className='w-1/2 pl-8 border-l border-[#FFC527]'>
                    <p>
                        Sem viverra aliquet eget sit amet tellus cras. Scelerisque felis
                        imperdiet proin fermentum leo vel orci.Tortor at auctor urna
                        nunc id. Sit amet facilisis magna etiam odio mollis.
                    </p>
                    <div className="flex flex-row justify-start items-center mt-2">
                        <div className="flex space-x-4">
                            <div className="flex flex-col items-center">
                                <Image src={ReviewerImage} alt="Reviewer" className="rounded-full" />
                            </div>
                        </div>
                        <div className='flex flex-col ml-4'>
                            <p className="text-lg">★ ★ ★ ★ ★</p>
                            <p className="text-sm text-[#222222]">4.0k reviews</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <CustomerReview reviews={reviewData}/>
            </div>
        </div>
    );
};

export default Reviews;
