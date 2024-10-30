import React from 'react';
import ReviewerImage from '../assests/images/rating.png';
import Image from 'next/image';
import NumText from './NumText';
import ImgCard from './ImgCard';
import one from '../assests/images/Gallery/one.png';
import two from '../assests/images/Gallery/two.png';
import three from '../assests/images/Gallery/three.png';
import four from '../assests/images/Gallery/four.png';
import five from '../assests/images/Gallery/five.png';
import six from '../assests/images/Gallery/six.png';

const Projects: React.FC = () => {
    return (
        <div className='px-32 pt-20 pb-10 bg-[#222222] relative bottom-[100px]'>
            <div>
                <div>
                    <h2 className='text-[#FFC527] text-sm uppercase'>Stunning Success</h2>
                </div>
                <div className='flex flex-row mt-2'>
                    <div className='w-1/2'>
                        <h1 className='text-white text-5xl font-bold mb-2 border-r border-white'>Crafting Excellence: Our Featured Projects</h1>
                    </div>
                    <div className='w-1/2'>
                        <h3 className='text-white font-light text-base ml-8'>Egestas erat lorem mollis. Nunc scelerisque viverra mauris in aliquam. Morbi non arcu risus quis.Libero enim sed faucibus turpis in eu mi. Aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh.
                        </h3>
                    </div>
                    <div>
                        <div className="flex space-x-4">
                            <div className="flex flex-col items-center">
                                <Image src={ReviewerImage} alt="Reviewer" className="rounded-full" />
                            </div>
                        </div>
                        <div className='flex flex-col ml-4'>
                            <p className="text-xs">⭐️⭐️⭐️⭐️⭐️</p>
                            <p className="text-sm text-white">4.0k reviews</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-row justify-between items-center'>
                <NumText title={'980+'} subtitle={'Successful Services'}/>
                <NumText title={'900+'} subtitle={'Satisfied Clients'}/>
                <NumText title={'450+'} subtitle={'Professionals Services'}/>
                <NumText title={'220+'} subtitle={'Global Stores'}/>
            </div>

            <div className='flex flex-row flex-wrap'>
                <ImgCard src={one}/>
                <ImgCard src={two}/>
                <ImgCard src={three}/>
                <ImgCard src={four}/>
                <ImgCard src={five}/>
                <ImgCard src={six}/>
            </div>
        </div>
    );
};

export default Projects;
