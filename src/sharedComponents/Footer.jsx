import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
const Footer = () => {
    return (
        <div className='mt-10 bg-[#00335A] text-white py-12 px-10'>
            <div className='flex flex-col lg:flex-row items-center justify-center gap-3 lg:gap-20'>
                <a href=""><p className='flex items-center gap-3'><FaFacebook />Faceebook</p></a>
                <a href=""><p className='flex items-center gap-3'><FaTwitter />Twitter</p></a>
                <a href=""><p className='flex items-center gap-3'><FaInstagram />Instagram</p></a>
                <a href=""><p className='flex items-center gap-3'><FaLinkedin />Linkedin</p></a><a href=""></a>
            </div>
            <div>
                <h1 className='text-2xl md:text-4xl font-bold font-serif text-center mt-10'>Eastate-Hub</h1>
                <small className='flex justify-center mt-10'>© EastateHub - All rights reserved</small>
            </div>
        </div>
    );
};

export default Footer;