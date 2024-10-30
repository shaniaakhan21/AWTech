import * as React from 'react';
import Button from '@mui/material/Button';

interface HeroSectionProps {
    title: string;
    subtitle: string;
    buttonText1: string;
    buttonText2: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle, buttonText1, buttonText2 }) => {
    return (
        <section className="bg-white py-24">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold mb-4">{title}</h1>
                <p className="text-lg mb-8">{subtitle}</p>
                <div className="flex space-x-4">
                    <Button variant="contained" color="primary">{buttonText1}</Button>
                    <Button variant="outlined" color="secondary">{buttonText2}</Button>
                </div>
            </div>
            <div>
                <h1 className='text-3xl'>djBFIYAERWEHHOVHRWIOAJRWVIHOAEBNHY EGVIUVAER IUGfyaw eg87ofgtewYFGIUL gesFi idgsuFw eyGT7ritf EWO7ITfp(89ET TFIgw9t eD8O</h1>
                <h1 className='text-3xl'>djBFIYAERWEHHOVHRWIOAJRWVIHOAEBNHY EGVIUVAER IUGfyaw eg87ofgtewYFGIUL gesFi idgsuFw eyGT7ritf EWO7ITfp(89ET TFIgw9t eD8O</h1>
                <h1 className='text-3xl'>djBFIYAERWEHHOVHRWIOAJRWVIHOAEBNHY EGVIUVAER IUGfyaw eg87ofgtewYFGIUL gesFi idgsuFw eyGT7ritf EWO7ITfp(89ET TFIgw9t eD8O</h1>
                <h1 className='text-3xl'>djBFIYAERWEHHOVHRWIOAJRWVIHOAEBNHY EGVIUVAER IUGfyaw eg87ofgtewYFGIUL gesFi idgsuFw eyGT7ritf EWO7ITfp(89ET TFIgw9t eD8O</h1>
                <h1 className='text-3xl'>djBFIYAERWEHHOVHRWIOAJRWVIHOAEBNHY EGVIUVAER IUGfyaw eg87ofgtewYFGIUL gesFi idgsuFw eyGT7ritf EWO7ITfp(89ET TFIgw9t eD8O</h1>
                <h1 className='text-3xl'>djBFIYAERWEHHOVHRWIOAJRWVIHOAEBNHY EGVIUVAER IUGfyaw eg87ofgtewYFGIUL gesFi idgsuFw eyGT7ritf EWO7ITfp(89ET TFIgw9t eD8O</h1>
                <h1 className='text-3xl'>djBFIYAERWEHHOVHRWIOAJRWVIHOAEBNHY EGVIUVAER IUGfyaw eg87ofgtewYFGIUL gesFi idgsuFw eyGT7ritf EWO7ITfp(89ET TFIgw9t eD8O</h1>
                <h1 className='text-3xl'>djBFIYAERWEHHOVHRWIOAJRWVIHOAEBNHY EGVIUVAER IUGfyaw eg87ofgtewYFGIUL gesFi idgsuFw eyGT7ritf EWO7ITfp(89ET TFIgw9t eD8O</h1>
            </div>
        </section>
    );
};

export default HeroSection;