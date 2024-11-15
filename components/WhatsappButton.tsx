"use client";
import React from 'react';
import { IconButton } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const WhatsappButton: React.FC = () => {
    const handleClick = () => {
        // Pre-filled message for WhatsApp
        const message = "Hey there! I'm looking for your services. Could you assist me?";
        window.open(`https://wa.me/971557736634?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <div className="fixed bottom-12 right-4 z-50">
            <IconButton 
                color="primary" 
                onClick={handleClick} 
                className="green-bg text-white rounded-full shadow-lg p-3 hover:bg-green-600 transition duration-300"
            >
                <WhatsAppIcon className="text-white text-3xl sm:text-6xl" />
            </IconButton>
        </div>
    );
};

export default WhatsappButton;
