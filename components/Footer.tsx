import React from 'react';
import Image from 'next/image';
import Clock from '../assests/images/clock.png';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LightLogo from '../assests/images/logo-light.png';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#222222] text-[#F9F9F9] px-10 py-8 sm:px-32 sm:py-10">
            <div className="flex flex-col sm:flex-row justify-between">
                {/* Company Info Section */}
                <div className="w-full sm:w-1/3">
                    <div className="flex items-center mb-2 sm:mb-4">
                        <Image src={LightLogo} alt="Company Logo" />
                    </div>
                    <p className="text-xs sm:text-sm mb-2 sm:mb-6 text-[#f9f9f994] font-thin">
                        We are a building maintenace company with a wide variety of services covering basic and advanced
                        aspects of daily life. We offer the highest level of service, project management, and supervision
                        to meet the needs of our clients.
                    </p>
                    {/* <div className="flex flex-col flex-wrap sm:space-x-4">
                         Social Media Icons (Replace "#" with actual links) 
                        <a href="#"><i className="fab fa-facebook-f text-lg"></i></a>
                        <a href="#"><i className="fab fa-pinterest text-lg"></i></a>
                        <a href="#"><i className="fab fa-youtube text-lg"></i></a>
                        <a href="#"><i className="fab fa-twitter text-lg"></i></a>
                        <a href="#"><i className="fab fa-instagram text-lg"></i></a>
                    </div> */}
                    <div className="flex flex-row items-center mt-4">
                        <Image src={Clock} alt='Clock icon' />
                        <div className="ml-2">
                            <p className="text-sm">Opening Hours</p>
                            <p className="text-lg font-bold">8AM – 7PM</p>
                        </div>
                    </div>
                </div>
                <div className='w-full sm:w-2/3 flex flex-row items-center justify-between sm:justify-around mt-4 sm:mt-0'>
                    {/* Links Section */}
                    <div className="w-full sm:w-1/6">
                        <h4 className="text-yellow-500 font-semibold sm:mb-4">Links</h4>
                        <ul className="flex flex-col space-y-2">
                            <li><a href="#" className="hover:text-yellow-500 text-xs sm:text-sm">About Us</a></li>
                            <li><a href="#" className="hover:text-yellow-500 text-xs sm:text-sm">Services</a></li>
                            <li><a href="#" className="hover:text-yellow-500 text-xs sm:text-sm">Our Projects</a></li>
                            <li><a href="#" className="hover:text-yellow-500 text-xs sm:text-sm">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Quick Contact Section */}
                    <div className="w-full sm:w-1/3 mt-4 sm:mt-0">
                        <h4 className="text-yellow-500 font-semibold sm:mb-4">Quick Contact</h4>
                        <p className="flex items-center mb-2 text-xs sm:text-sm">
                            <LocationOnIcon className="text-yellow-500 mr-2" />
                            Hor Al Anz, Dubai, UAE
                        </p>
                        <p className="flex items-center mb-2 text-xs sm:text-sm">
                            <PhoneIcon className="text-yellow-500 mr-2" />
                            +971 557736634
                        </p>
                        <p className="flex items-center mb-6 text-xs sm:text-sm">
                            <EmailIcon className="text-yellow-500 mr-2" />
                            info@awtechnical.com
                        </p>
                    </div>
                </div>
            </div>

            {/* Footer Bottom Section */}
            <div className="flex justify-between items-center mt-10 border-t border-[#f9f9f994] pt-4">
                <p className="text-[8px] sm:text-sm">© AW Technical Services, All Right Reserved.</p>
                <a href="#" className="text-[8px] sm:text-sm hover:text-yellow-500">Privacy Policy</a>
            </div>
        </footer>
    );
};

export default Footer;
