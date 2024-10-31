"use client";
import { Button } from '@mui/material';
import React from 'react';
import backgroundImage from '../assests/images/bg.png';
import FAQAccordion from './FAQAccordion';

const Faq: React.FC = () => {

    const faqs = [
        {
            question: "What services do you offer?",
            answer: "We provide comprehensive building maintenance and renovation services, including electrical work, plumbing, masonry, painting, gardening, villa and building renovations, and more. Our all-in-one solutions cater to residential and commercial needs."
        },
        {
            question: "Are your services available 24/7?",
            answer: "Yes, we operate 24/7 to accommodate urgent maintenance needs and provide uninterrupted support. Our team is ready to handle emergencies anytime, ensuring prompt assistance."
        },
        {
            question: "How do I get a quote for my project?",
            answer: "Simply click on the 'Get A Quote' button on our website or contact us directly via WhatsApp at +971 557736634. Our team will discuss your needs and provide a personalized, transparent quote."
        },
        {
            question: "How quickly can you complete a project?",
            answer: "Our timeline depends on the project's complexity, but we commit to completing all tasks within agreed deadlines, ensuring quality results on schedule."
        },
        {
            question: "Are your services affordable?",
            answer: "Yes, we offer competitive pricing without compromising on quality. Our goal is to provide cost-effective solutions that meet your budget and exceed your expectations."
        },
        {
            question: "What areas do you serve?",
            answer: "We provide services across Dubai, UAE, for both residential and commercial clients. Contact us to confirm availability for your specific location."
        }

    ];

    return (
        <div className='px-32 pb-10 bg-white hidden sm:block relative bottom-[50px]'>
            <div className='flex flex-row w-full'>
                <div className='w-4/12 px-10 pt-96 pb-4 bg-cover bg-center rounded-2xl' style={{ backgroundImage: `url(${backgroundImage.src})` }}>
                    <div className='bg-[#222222] p-4 rounded-2xl shadow-xl'>
                        <h1 className='text-white text-2xl pb-2'>Still You Have Doubts ?</h1>
                        <h5 className='text-[#f9f9f99c] font-extralight text-xs pb-4'>Tellus in hac habitasse platea dictumst</h5>
                        <Button className="capitalize text-sm rounded-full mr-4 w-fit px-8 py-2 bg-[#FFC527] font-semibold text-[#222222] shadow-2xl " onClick={() => window.open('https://wa.me/971557736634', '_blank')}>
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
