"use client";
import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// Define the interface for the props
interface FAQItem {
    question: string;
    answer: string;
}

interface FAQAccordionProps {
    faqs: FAQItem[];
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ faqs }) => {
    const [expanded, setExpanded] = useState<number | false>(false);

    const handleChange = (panel: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div>
            {faqs.map((faq, index) => (
                <Accordion
                    key={index}
                    expanded={expanded === index}
                    onChange={handleChange(index)}
                    className='mb-4'
                    style={{
                        borderRadius: '1rem'
                    }}
                >
                    <AccordionSummary
                        aria-controls={`panel${index + 1}a-content`}
                        id={`panel${index + 1}a-header`}
                        style={{
                            background: expanded === index ? '#222222' : 'white',
                            color: expanded === index ? 'white' : '#222222',
                        }}
                        expandIcon={
                            <ExpandMoreIcon
                                style={{ color: expanded === index ? 'white' : 'black' }}
                            />
                        }
                    >
                        <h4>{faq.question}</h4>
                    </AccordionSummary>
                    <AccordionDetails
                        style={{
                            background: expanded === index ? '#F9F9F9' : 'white',
                            color: expanded === index ? '#222222' : '#222222',
                            borderRadius: '1rem'
                        }}
                    >
                        <p>{faq.answer}</p>
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    );
};

export default FAQAccordion;
