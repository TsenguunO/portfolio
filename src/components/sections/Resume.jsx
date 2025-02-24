import React, { useState, useEffect } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css"; // Improves text rendering
import pdf from "../../assets/TimTsenguun_Resume_DataEngineer.pdf";

// ✅ Set PDF.js worker source
// pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export const Resume = () => {
  const [width, setWidth] = useState(window.innerWidth);

  // ✅ Handle window resize for better PDF responsiveness
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    // Cleanup event listener when component unmounts
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ PDF loading error handling
  const onLoadError = (error) => console.error("Error loading PDF:", error);

  return (
    <section id="resume" className="min-h-screen flex items-top justify-center py-30">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          {/* ✅ Resume Title */}
          <h2 className="text-3xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent leading-normal">
            Resume
          </h2>

          {/* ✅ Download Resume Button */}
          <div className="flex justify-center mb-6">
            <a
              href={pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white font-semibold py-2 px-6 rounded-full shadow-md hover:shadow-lg hover:scale-105 transform transition duration-300 flex items-center justify-center"
            >
              <svg className="mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 9H15V3H9V9H5L12 16L19 9ZM5 18V20H19V18H5Z" fill="white"/>
              </svg>
              Download
            </a>
          </div>

          {/* ✅ Resume PDF Viewer */}
          <div className="flex justify-center">
            <div className="box_transition">
              <Document file={pdf} onLoadError={onLoadError}>
                <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
              </Document>
            </div>
          </div>


                    {/* ✅ Download Resume Button */}
                    <div className="flex justify-center mb-6">
            <a
              href={pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white font-semibold py-2 px-6 rounded-full shadow-md hover:shadow-lg hover:scale-105 transform transition duration-300 flex items-center justify-center"
            >
              <svg className="mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 9H15V3H9V9H5L12 16L19 9ZM5 18V20H19V18H5Z" fill="white"/>
              </svg>
              Download
            </a>
          </div> 

        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Resume;
