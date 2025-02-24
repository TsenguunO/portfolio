// import { useEffect } from "react";

// export const Navbar = ({ menuOpen, setMenuOpen }) => {
//     useEffect(() => {
//       document.body.style.overflow = menuOpen ? "hidden" : "";
//     }, [menuOpen]);
//     return (
//         <nav className="fixed top-0 w-full z-0 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
//             <div className="max-w-5xl mx-auto px-0">
//                 <div className="flex justify-between items-center h-16">
                    
//                     <a href="#home" className="text-2xl md:text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
//                         Tim<span className="text-white-500">.tech</span>
//                     </a>

//                     <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" 
//                         onClick={() => setMenuOpen((prev) => !prev)}>
//                         &#9776;
//                     </div>

//                     <div className="hidden md:flex space-x-4">
//                         <a href="#home" className="tex-gray-300 hove:text-white transition-colors"
//                         >
//                             {" "}
//                             Home{" "}   
//                         </a>
//                         <a href="#about" className="tex-gray-300 hove:text-white transition-colors"
//                         >
//                             {" "}
//                             About{" "}   
//                         </a>
//                         <a href="#projects" className="tex-gray-300 hove:text-white transition-colors"
//                         >
//                             {" "}
//                             Projects{" "}   
//                         </a>
//                         <a href="#resume" className="tex-gray-300 hove:text-white transition-colors"
//                         >
//                             {" "}
//                             Resume{" "}   
//                         </a>
//                     </div>
//                 </div>
//             </div>
//         </nav>
//     );
// }



import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
    useEffect(() => {
      document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);
    return (
        <nav className="fixed top-0 left-0 right-0 w-full z-50 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg m-0 p-0">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <a href="#home" className="text-2xl md:text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                        Tim<span className="text-white-500">.tech</span>
                    </a>

                    <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" 
                        onClick={() => setMenuOpen((prev) => !prev)}>
                        &#9776;
                    </div>
                    
                    <div className="hidden md:flex space-x-4">
                        <a href="#home" className="text-gray-300 hover:text-white transition-colors">
                            Home
                        </a>
                        <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                            About
                        </a>
                        <a href="#projects" className="text-gray-300 hover:text-white transition-colors">
                            Projects
                        </a>
                        <a href="#resume" className="text-gray-300 hover:text-white transition-colors">
                            Resume
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}