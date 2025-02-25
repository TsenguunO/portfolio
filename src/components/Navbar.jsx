import { useEffect } from "react";
import { BoxesLoader } from 'react-awesome-loaders';

export const Navbar = ({ menuOpen, setMenuOpen }) => {
    useEffect(() => {
      document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);
    return (
        <nav className="fixed top-0 left-0 right-0 w-full z-50 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-xs border-b border-white/10 shadow-lg m-0 p-0">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <div className="hidden md:flex items-center space-x-4 font-bold mt-20 ">
                        <a href="#home">
                        <BoxesLoader 
                            boxColor="#3d5a81"
                            shadowColor="#85C1E9"
                            size="20px"
                        />
                        </a>
                        <a href="#home" className="text-2xl md:text-2xl font-bold bg-gradient-to-r from-[#85C1E9] to-[#242C38] bg-clip-text text-transparent mb-20 -ml-15">
                            Tim<span className="text-white-500">.tech</span>
                        </a>
                    </div>

                    {/* <a href="#home" className="text-2xl md:text-2xl font-bold bg-gradient-to-r from-[#85C1E9] to-[#242C38] bg-clip-text text-transparent">
                        Tim<span className="text-white-500">.tech</span>
                    </a> */}

                    <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" 
                        onClick={() => setMenuOpen((prev) => !prev)}>
                        &#9776;
                    </div>

                    <div className="hidden md:flex space-x-4 font-bold">
                        <a href="#home" className="text-[#85C1E9] relative hover:text-black transition-all">
                            Home
                        </a>
                        <a href="#about" className="text-[#658FAE] hover:text-black transition-all">
                            About
                        </a>
                        <a href="#projects" className="text-[#445E73] hover:text-black transition-all">
                            Projects
                        </a>
                        <a href="#resume" className="text-[var(--color-secondary)] hover:text-black transition-all">
                            Resume
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}