import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter, FaCode } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si"; // Importing LeetCode icon

const Contact = () => {
  return (
    <section id="contact" className="bg-black py-16 px-6 md:px-16 lg:px-32">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white">
          Get In <span className="text-[#956afa]">Touch</span>
        </h2>
        <p className="text-gray-400 mt-4 text-lg">
          Feel free to reach out! Whether you have a project in mind or just want to say hi, 
          my inbox is always open. 🚀
        </p>

        {/* Contact Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          {/* Email */}
          <a
            href="mailto:rashi@example.com" // Replace with your email
            className="flex items-center gap-3 bg-[#956afa] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#7a4ee9] transition"
          >
            <FaEnvelope size={20} /> Email Me
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/yourgithub" // Replace with your GitHub profile
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 border border-[#956afa] text-[#956afa] px-6 py-3 rounded-lg shadow-md hover:bg-[#956afa] hover:text-white transition"
          >
            <FaGithub size={20} /> GitHub
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/yourlinkedin" // Replace with your LinkedIn profile
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 border border-[#956afa] text-[#956afa] px-6 py-3 rounded-lg shadow-md hover:bg-[#956afa] hover:text-white transition"
          >
            <FaLinkedin size={20} /> LinkedIn
          </a>

          {/* Twitter */}
          <a
            href="https://twitter.com/yourtwitter" // Replace with your Twitter profile
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 border border-[#956afa] text-[#956afa] px-6 py-3 rounded-lg shadow-md hover:bg-[#956afa] hover:text-white transition"
          >
            <FaTwitter size={20} /> Twitter
          </a>

          {/* LeetCode */}
          <a
            href="https://leetcode.com/yourleetcode" // Replace with your LeetCode profile
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 border border-[#956afa] text-[#956afa] px-6 py-3 rounded-lg shadow-md hover:bg-[#956afa] hover:text-white transition"
          >
            <SiLeetcode size={20} /> LeetCode
          </a>

          {/* GeeksForGeeks */}
          <a
            href="https://auth.geeksforgeeks.org/user/yourgfg" // Replace with your GFG profile
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 border border-[#956afa] text-[#956afa] px-6 py-3 rounded-lg shadow-md hover:bg-[#956afa] hover:text-white transition"
          >
            <FaCode size={20} /> GeeksForGeeks
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
