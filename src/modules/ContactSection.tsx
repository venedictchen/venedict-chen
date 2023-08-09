import React from 'react';
import { BiLogoInstagram, BiLogoGithub, BiLogoTwitter, BiLogoFacebookSquare } from 'react-icons/bi';
import { ImLinkedin } from 'react-icons/im';

const ContactFooter = () => {
    return (
        <footer id='contact' className='bg-[#283845] py-10'>
            <div className="container mx-auto md:px-0">
                <h3 className='text-5xl text-white mb-6 text-center'>
                    Connect With Me!</h3>
                <div className="flex flex-wrap gap-10 py-10  justify-center 
                text-[#F29759] text-5xl">
                    <a href="https://github.com/venedictchen" target="_blank" rel="noopener noreferrer">
                        <BiLogoGithub className="transition duration-300 transform 
                hover:scale-125 hover:text-gray-300" />
                    </a>
                    <a href="https://www.linkedin.com/in/venedictchen/"
                        target="_blank" rel="noopener noreferrer">
                        <ImLinkedin className="transition duration-300 transform 
                hover:scale-125 hover:text-blue-600" />
                    </a>
                    <a href="https://www.linkedin.com/in/yourlinkedinprofile"
                        target="_blank" rel="noopener noreferrer">
                        <BiLogoInstagram className="transition duration-300 transform 
                hover:scale-125 hover:text-yellow-500" />
                    </a>
                    <a href="https://twitter.com/theonlyvenee"
                        target="_blank" rel="noopener noreferrer">
                        <BiLogoTwitter className="transition duration-300 transform 
                hover:scale-125 hover:text-blue-500" />
                    </a>
                    <a href="https://www.facebook.com/venedictchen.venedictchen.1/"
                        target="_blank" rel="noopener noreferrer">
                        <BiLogoFacebookSquare className="transition duration-300 transform 
                hover:scale-125 hover:text-blue-700" />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default ContactFooter;
