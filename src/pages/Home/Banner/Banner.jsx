import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from '../../../assets/home/badminton.png';
import img2 from '../../../assets/home/cricket.png';
import img3 from '../../../assets/home/cycling.png';
import img4 from '../../../assets/home/frisbee.png';
import img5 from '../../../assets/home/hiking.png';
import img6 from '../../../assets/home/swimming.png';
import img7 from '../../../assets/home/tennis.png';


const Banner = () => {
    return (
        <div>
            <Carousel>
                <div className='relative'>
                    <img src={img1} />
                    <div className='absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515]'>
                        <h1 className='text-6xl font-bold text-white text-center ms-10'>Summer Sports for Kids</h1>
                    </div>
                </div>
                <div className='relative'>
                    <img src={img2} />
                    <div className='absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515]'>
                        <h1 className='text-6xl font-bold text-white text-center ms-10'>Summer Sports for Kids</h1>
                    </div>
                </div>
                <div className='relative'>
                    <img src={img3} />
                    <div className='absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515]'>
                        <h1 className='text-6xl font-bold text-white text-center ms-10'>Summer Sports for Kids</h1>
                    </div>
                </div>
                <div className='relative'>
                    <img src={img4} />
                    <div className='absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515]'>
                        <h1 className='text-6xl font-bold text-white text-center ms-10'>Summer Sports for Kids</h1>
                    </div>
                </div >
                <div className='relative'>
                    <img src={img5} />
                    <div className='absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515]'>
                        <h1 className='text-6xl font-bold text-white text-center ms-10'>Summer Sports for Kids</h1>
                    </div>
                </div>
                <div className='relative'>
                    <img src={img6} />
                    <div className='absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515]'>
                        <h1 className='text-6xl font-bold text-white text-center ms-10'>Summer Sports for Kids</h1>
                    </div>
                </div>
                <div className='relative'>
                    <img src={img7} />
                    <div className='absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515]'>
                        <h1 className='text-6xl font-bold text-white text-center ms-10'>Summer Sports for Kids</h1>
                    </div>
                </div>
            </Carousel>

        </div>
    );
};

export default Banner;