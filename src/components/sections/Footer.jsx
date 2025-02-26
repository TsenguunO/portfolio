import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-[rgba(10,10,10,0.1)] border-t border-white/10 shadow-lg text-white py-4 w-full fixed bottom-0 left-0 z-50">
      <div className="max-w-5xl mx-auto px-4 flex justify-between items-center">
        {/* Left: Copyright Information */}
        <p className="text-left">
          &copy; {new Date().getFullYear()} Tim Tsenguun. All rights reserved.
        </p>

        {/* Right: Social Icons */}
        <ul className="flex space-x-4">
          <li>
            <a
              href="https://github.com/tsenguunO"
              className="text-white cursor-pointer inline-block transition-transform hover:-translate-y-1"
              target="_blank"
              rel="noopener noreferrer">
              <AiFillGithub size={24} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/tsenguun-tim/"
              className="text-white cursor-pointer inline-block transition-transform hover:-translate-y-1"
              target="_blank"
              rel="noopener noreferrer">
              <FaLinkedinIn size={24} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
