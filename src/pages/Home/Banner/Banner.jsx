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
                <div>
                    <img src={img1} />
                </div>
                <div>
                    <img src={img2} />
                </div>
                <div>
                    <img src={img3} />
                </div>
                <div>
                    <img src={img4} />
                </div>
                <div>
                    <img src={img5} />
                </div>
                <div>
                    <img src={img6} />
                </div>
                <div>
                    <img src={img7} />
                </div>
            </Carousel>
            <div className='z-0'>
                <h1 className='text-xl z-10'>Summer Sports for Kids</h1>
            </div>
        </div>
    );
};

export default Banner;