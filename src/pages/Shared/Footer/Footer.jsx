import { TiSocialFacebook } from 'react-icons/ti';
import logo from '../../../../src/assets/logoSchool.png'


const Footer = () => {
    return (
        <footer>
            <div className="footer px-20 py-10 bg-neutral text-neutral-content">
                <div>
                    <img className="w-20 rounded-full" src={logo} alt="" />
                    <p>Anandaniketan School<br />Sports Summer Camp-2023</p>
                </div>
                <div>
                    <span className="footer-title text-center">For More Info</span><a className='text-4xl text-center ps-8'>
                        <TiSocialFacebook></TiSocialFacebook></a>
                    
                </div>
                <div>
                <span className="footer-title">Contact Us</span>
                    <p>24/A Subidbazar, Sylhet 3100</p>
                    <p>Phone: +8801712828878</p>
                    <p>Email: info@anandaniketan.com</p>
                </div>
            </div>

            <div className='flex-1 text-center bg-neutral pb-4'>
               <p>copyright @2023 www.anandaniketan.com</p>
            </div>
        </footer>
    );
};

export default Footer;