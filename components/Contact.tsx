import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="bg-black py-16 px-6 md:px-16 lg:px-32">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white">
          Get In <span className="text-[#956afa]">Touch</span>
        </h2>
        <p className="text-gray-400 mt-4 text-lg">
          I’d love to connect with like-minded individuals! Whether you have an exciting 
          project, an opportunity to collaborate, or just want to discuss tech, feel free 
          to reach out. My inbox is always open! 🚀
        </p>
        <p className="text-gray-400 mt-2 text-lg">
          You can find me on various platforms. Drop me a message, and let’s build something 
          awesome together!
        </p>

        {/* Contact Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          {/* Email */}
          <a
            href="mailto:rashis0681@gmail.com" // Replace with your email
            className="flex items-center gap-3 bg-[#956afa] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#7a4ee9] transition"
          >
            <FaEnvelope size={20} /> Email Me
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/rashi-06" // Replace with your GitHub profile
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 border border-[#956afa] text-[#956afa] px-6 py-3 rounded-lg shadow-md hover:bg-[#956afa] hover:text-white transition"
          >
            <FaGithub size={20} /> GitHub
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/rashi-sharma-b1b548210/" // Replace with your LinkedIn profile
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 border border-[#956afa] text-[#956afa] px-6 py-3 rounded-lg shadow-md hover:bg-[#956afa] hover:text-white transition"
          >
            <FaLinkedin size={20} /> LinkedIn
          </a>

          {/* Twitter */}
          <a
            href="https://x.com/rashis23" // Replace with your Twitter profile
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 border border-[#956afa] text-[#956afa] px-6 py-3 rounded-lg shadow-md hover:bg-[#956afa] hover:text-white transition"
          >
            <FaTwitter size={20} /> Twitter
          </a>

        </div>
      </div>
    </section>
  );
};

export default Contact;
