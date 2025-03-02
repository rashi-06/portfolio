"use-client";

import { FaGithub, FaLinkedin, FaTwitter, FaArrowUp } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      };

  return (
    <footer className="bg-black text-white py-8 px-6 md:px-16 lg:px-32">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        {/* Footer Links */}
        <div>
          <h2 className="text-2xl font-bold text-[#956afa]">Rashi Sharma</h2>
          <p className="text-gray-400 mt-2">
            Full Stack Developer | Software Engineer
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap gap-6 mt-4 md:mt-0">
          <a href="#home" className="text-gray-400 hover:text-[#956afa] transition">
            Home
          </a>
          <a href="#skills" className="text-gray-400 hover:text-[#956afa] transition">
            Skills
          </a>
          <a href="#projects" className="text-gray-400 hover:text-[#956afa] transition">
            Projects
          </a>
          <a href="#contact" className="text-gray-400 hover:text-[#956afa] transition">
            Contact
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 mt-6 md:mt-0">
          <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} className="text-gray-400 hover:text-[#956afa] transition" />
          </a>
          <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} className="text-gray-400 hover:text-[#956afa] transition" />
          </a>
          <a href="https://twitter.com/yourtwitter" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={24} className="text-gray-400 hover:text-[#956afa] transition" />
          </a>
          <a href="https://leetcode.com/yourleetcode" target="_blank" rel="noopener noreferrer">
            <SiLeetcode size={24} className="text-gray-400 hover:text-[#956afa] transition" />
          </a>
          <a href="https://www.geeksforgeeks.org/user/yourgfg" target="_blank" rel="noopener noreferrer">
            <SiGeeksforgeeks size={24} className="text-gray-400 hover:text-[#956afa] transition" />
          </a>
        </div>
      </div>

      {/* Copyright and Back to Top */}
      <div className="mt-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
        <p>© 2025 Rashi Sharma. All Rights Reserved.</p>
        <a href="#home" className="text-gray-400 hover:text-[#956afa] transition">
        <FaArrowUp /> Back to Top
          </a>
        {/* <button 
          onClick={scrollToTop}
          className="mt-4 md:mt-0 bg-[#956afa] text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-[#7a4ee9] transition"
        >
          <FaArrowUp /> Back to Top
        </button> */}
      </div>
    </footer>
  );
};

export default Footer;
