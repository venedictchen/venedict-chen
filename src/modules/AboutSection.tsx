import { AiFillHtml5 } from 'react-icons/ai';
import { BiLogoReact, BiLogoTailwindCss, BiLogoCss3 } from 'react-icons/bi';
import { TbBrandNextjs } from 'react-icons/tb';
import { AiOutlineGithub } from 'react-icons/ai';
import { SiChakraui, SiTypescript } from 'react-icons/si';
import { BiLogoJava, BiLogoPython } from 'react-icons/bi';
import React from 'react';

const AboutSection = () => {
    return (
        <section id='about' className='mt-20'>
            <div className='bg-[#283845] py-10  md:py-20 flex flex-col md:flex-row items-center 
            md:justify-center'>
                <div className="w-full bg-[#283845] mx-auto md:w-3/4 lg:w-2/3 xl:w-1/2 
            text-center items-center">
                    <h3 className='text-5xl text-white mb-4 md:mb-6'>About Me</h3>
                    <p className='text-white leading-loose mt-8 md:text-center md:max-w-2xl mx-auto'>
                        I am Venedict Chen, an ambitious student at the University of Indonesia, pursuing a degree in Computer Science.
                        I'm a Front End Developer specializing in NextJS. Willing to learn more into
                        Web Development and become great. I've become Front End Developer for BEM Fasilkom UI and I want
                        to have more experience either in University or Outside. My Passion is I want to become a great Developer
                        and make great things happen. I am dedicated to realizing my aspirations and contributing to impactful projects.
                        Should you wish to connect, please feel free to <a href="#" className="text-blue-500 underline hover:text-blue-700">reach out to me here</a>.
                    </p>
                    <div className="bg-white w-full flex flex-wrap gap-4 md:gap-8 justify-center 
                 shadow-lg rounded-lg p-4 md:p-6 mt-6 md:mt-10">
                        <div className="flex flex-col items-center transform hover:scale-110 transition duration-300">
                            <AiFillHtml5 className="text-orange-500 text-7xl" />
                            <p className="text-[#202C3A] mt-4 text-xl font-semibold">HTML</p>
                        </div>
                        <div className="flex flex-col items-center transform hover:scale-110 transition duration-300">
                            <BiLogoCss3 className="text-blue-700 text-7xl" />
                            <p className="text-[#202C3A] mt-4 text-xl font-semibold">CSS</p>
                        </div>
                        <div className="flex flex-col items-center transform hover:scale-110 transition duration-300">
                            <TbBrandNextjs className="text-black text-7xl" />
                            <p className="text-[#202C3A] mt-4 text-xl font-semibold">NextJS</p>
                        </div>
                        <div className="flex flex-col items-center transform hover:scale-110 transition duration-300">
                            <BiLogoReact className="text-blue-500 text-7xl" />
                            <p className="text-[#202C3A] mt-4 text-xl font-semibold">React</p>
                        </div>
                        <div className="flex flex-col items-center transform hover:scale-110 transition duration-300">
                            < BiLogoTailwindCss className="text-blue-700 text-7xl" />
                            <p className="text-[#202C3A] mt-4 text-xl font-semibold">Tailwind</p>
                        </div>
                        <div className="flex flex-col items-center transform hover:scale-110 transition duration-300">
                            < SiChakraui className="text-cyan-400 text-7xl" />
                            <p className="text-[#202C3A] mt-4 text-xl font-semibold">Chakra UI</p>
                        </div>
                        <div className="flex flex-col items-center transform hover:scale-110 transition duration-300">
                            <  AiOutlineGithub className="text-black text-7xl" />
                            <p className="text-[#202C3A] mt-4 text-xl font-semibold">GitHub</p>
                        </div>
                        <div className="flex flex-col items-center transform hover:scale-110 transition duration-300">
                            <  SiTypescript className="text-blue-700 text-7xl" />
                            <p className="text-[#202C3A] mt-4 text-xl font-semibold">TypeScript</p>
                        </div>

                        <div className="flex flex-col items-center transform hover:scale-110 transition duration-300">
                            <BiLogoPython className="text-yellow-700 text-7xl" />
                            <p className="text-[#202C3A] text-xl font-semibold mt-4">Python</p>
                        </div>
                        <div className="flex flex-col items-center transform hover:scale-110 transition duration-300">
                            <BiLogoJava className="text-red-600 text-7xl" />
                            <p className="text-[#202C3A] text-xl font-semibold mt-4">Java</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
