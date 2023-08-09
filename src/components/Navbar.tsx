import { useEffect, useState } from 'react';
import { BsList, BsX } from 'react-icons/Bs';

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const toggleMobileMenu = () => {
        setShowMobileMenu(!showMobileMenu);
    };

    return (
        <nav className='bg-[#283845] fixed w-full mb-20 top-0 left-0 right-0 z-10 p-4'>
            <div className='flex items-center justify-between max-w-7xl mx-auto py-5 px-4 sm:px-14'>
                <div className="flex items-center px-2">
                    <span className='text-[#F29759] text-2xl sm:text-4xl 
                    font-serif'>Venedict Chen</span>
                </div>

                <ul className="hidden sm:flex space-x-16">
                    <li>
                        <a href="#experience" className="text-[#F29759] text-lg sm:text-xl">Experience</a>
                    </li>
                    <li>
                        <a href="#about" className="text-[#F29759] text-lg sm:text-xl">About</a>
                    </li>
                    <li>
                        <a href="#project" className="text-[#F29759] text-lg sm:text-xl">Projects</a>
                    </li>

                    <li>
                        <a href="#contact" className="text-[#F29759] text-lg sm:text-xl">Contact</a>
                    </li>
                </ul>
                {/* Mobile menu */}
                <div className="sm:hidden flex items-center">
                        <BsList onClick={toggleMobileMenu} className="h-11 w-11 text-[#F29759]" />
   
                </div>
            </div>
            <div className={`fixed top-0 left-0 w-full sm:hidden h-screen 
            bg-[#202C3A] p-10 transition-transform ${
                showMobileMenu ? 
                'ease-in-out duration-500 transform translate-y-0 opacity-100' : 
                'ease-in-out duration-500 transform -translate-y-full opacity-0'
            }`}>

                <div className="flex w-full items-center justify-end">
                    <div className="cursor-pointer">
                        <BsX onClick={toggleMobileMenu} className="h-12 w-12 text-[#F29759]" />
                    </div>
                </div>
                {/* Links */}
                <div className="flex flex-col justify-center h-full">
                    <ul className="flex flex-col items-center gap-16">
                        <li>
                            <a href="#" className="text-[#E6E8E6] text-3xl sm:text-xl">Experience</a>
                        </li>
                        <li>
                            <a href="#" className="text-[#E6E8E6] text-3xl sm:text-xl">Skills</a>
                        </li>
                        <li>
                            <a href="#" className="text-[#E6E8E6] text-3xl sm:text-xl">Projects</a>
                        </li>
                        <li>
                            <a href="#" className="text-[#E6E8E6] text-3xl sm:text-xl">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar