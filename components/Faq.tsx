import { Button } from '@mui/material';
import React from 'react';
import backgroundImage from '../assests/images/bg.png';
import FAQAccordion from './FAQAccordion';

const Faq: React.FC = () => {

    const faqs = [
        {
            question: "What is your return policy?",
            answer: "You can return items within 30 days of receipt for a full refund."
        },
        {
            question: "How long does shipping take?",
            answer: "Shipping usually takes 5-7 business days, depending on your location."
        },
        {
            question: "Do you offer customer support?",
            answer: "Yes, our customer support team is available 24/7 to assist you."
        },
        {
            question: "What is your return policy?",
            answer: "You can return items within 30 days of receipt for a full refund."
        },
        {
            question: "How long does shipping take?",
            answer: "Shipping usually takes 5-7 business days, depending on your location."
        },
        {
            question: "How long does shipping take?",
            answer: "Shipping usually takes 5-7 business days, depending on your location."
        }

    ];

    return (
        <div className='px-32 pb-10 bg-white relative bottom-[50px]'>
            <div className='flex flex-row w-full'>
                <div className='w-4/12 px-10 pt-96 pb-4 bg-cover bg-center rounded-2xl' style={{ backgroundImage: `url(${backgroundImage.src})` }}>
                    <div className='bg-[#222222] p-4 rounded-2xl shadow-xl'>
                        <h1 className='text-white text-2xl pb-2'>Still You Have Doubts ?</h1>
                        <h5 className='text-[#f9f9f99c] font-extralight text-xs pb-4'>Tellus in hac habitasse platea dictumst</h5>
                        <Button className="capitalize text-sm rounded-full mr-4 w-fit px-8 py-2 bg-[#FFC527] font-semibold text-[#222222] shadow-2xl">
                            Submit Your Query
                        </Button>
                    </div>
                </div>
                <div className='w-7/12 pr-4 pl-10 py-4 py-4'>
                    <h4 className='text-[#434343] font-thin uppercase'>Clear Your Every Confusion</h4>
                    <h1 className='text-[#222222] font-bold text-4xl pt-4 pb-4'>Freqently Asked Questions</h1>
                    <div>
                        <FAQAccordion faqs={faqs} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;
