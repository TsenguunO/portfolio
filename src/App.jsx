// // import { useState } from "react";
// // import { LoadingScreen } from "./components/LoadingScreen";
// // import { Navbar } from "./components/Navbar";
// // import { MobileMenu } from "./components/MobileMenu";
// // import { Home } from "./components/sections/Home";
// // import { About } from "./components/sections/About";
// // import { Projects } from "./components/sections/Projects";
// // import { Resume } from "./components/sections/Resume";
// // import { Footer } from "./components/sections/Footer";
// // import "./App.css";
// // import "./index.css";

// // function App() {
// //   const [isLoaded, setIsLoaded] = useState(false);
// //   const [menuOpen, setMenuOpen] = useState(false);
// //   return (
// //     <>
// //       {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{" "}
// //       <div
// //         className={`min-h-screen transition-opacity duration-700 ${
// //           isLoaded ? "opacity-100" : "opacity-0"
// //         } text-gray-100`}>
// //         <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
// //         <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
// //         <Home />
// //         <About />
// //         <Projects />
// //         <Resume />
// //       </div>
// //       <Footer />
// //     </>
// //   );
// // }

// // export default App;
// import { useState } from "react";
// import { LoadingScreen } from "./components/LoadingScreen";
// import { Navbar } from "./components/Navbar";
// import { MobileMenu } from "./components/MobileMenu";
// import { Home } from "./components/sections/Home";
// import { About } from "./components/sections/About";
// import { Projects } from "./components/sections/Projects";
// import { Resume } from "./components/sections/Resume";
// import { Footer } from "./components/sections/Footer";
// import "./App.css";
// import "./index.css";

// function App() {
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <>
//       {/* Show loading screen until it completes */}
//       {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

//       {/*
//         min-h-screen -> make container at least the full viewport height
//         flex flex-col -> arrange items in a column
//         flex-grow -> main content expands, pushing footer to the bottom
//       */}
//       <div
//         className={`min-h-screen flex flex-col transition-opacity duration-700 ${
//           isLoaded ? "opacity-100" : "opacity-0"
//         } text-gray-100`}>
//         <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
//         <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

//         {/* Main content grows to fill available space */}
//         <main className="flex-grow">
//           <Home />
//           <About />
//           <Projects />
//           <Resume />
//           <Footer />
//         </main>
//       </div>
//     </>
//   );
// }

// export default App;

import { useState, useEffect } from "react";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Resume } from "./components/sections/Resume";
import { Footer } from "./components/sections/Footer";
import "./App.css";
import "./index.css";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showFooter, setShowFooter] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById("home");
      const aboutSection = document.getElementById("about");
      const resumeSection = document.getElementById("resume");

      if (!homeSection || !aboutSection || !resumeSection) return;

      // Get the position and height of each section
      const homeTop = homeSection.offsetTop;
      const homeHeight = homeSection.offsetHeight;
      const aboutTop = aboutSection.offsetTop;
      const aboutHeight = aboutSection.offsetHeight;
      const resumeTop = resumeSection.offsetTop;
      const resumeHeight = resumeSection.offsetHeight;

      // Hide footer when in the "About" section
      if (
        window.scrollY >= aboutTop - 100 &&
        window.scrollY < aboutTop + aboutHeight
      ) {
        setShowFooter(false);
      } else if (
        (window.scrollY >= homeTop && window.scrollY < homeTop + homeHeight) ||
        (window.scrollY >= resumeTop &&
          window.scrollY < resumeTop + resumeHeight)
      ) {
        setShowFooter(true); // Show footer for "Home" and "Resume"
      } else {
        setShowFooter(false); // Hide footer in other sections
      }
    };

    // Listen for scroll events
    window.addEventListener("scroll", handleScroll);

    // Check once when page loads to set the footer visibility
    handleScroll();

    // Cleanup the scroll event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

      <div
        className={`min-h-screen flex flex-col transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } text-gray-100`}>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        <main className="flex-grow">
          <Home id="home" />
          <About id="about" />
          <Projects />
          <Resume id="resume" />
        </main>
      </div>

      {showFooter && <Footer />}
    </>
  );
}

export default App;
