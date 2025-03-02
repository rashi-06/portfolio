const About = () => {
    return (
      <section id="about" className="bg-black py-16 px-6 md:px-16 lg:px-32">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          
          {/* Image Section */}
          <div className="w-64 h-64 md:w-80 md:h-80 flex-shrink-0">
            <img
              src="/profile.jpg" // Replace with your actual image path
              alt="Rashi Sharma"
              className="w-full h-full object-cover rounded-full border-4 border-[#956afa] shadow-lg"
            />
          </div>
  
          {/* Text Section */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl font-bold text-white">
              About <span className="text-[#956afa]">Me</span>
            </h2>
            <p className="text-gray-400 mt-4 text-lg leading-relaxed">
              Hey there! I'm <span className="text-white font-semibold">Rashi Sharma</span>, 
              a passionate <span className="text-[#956afa]">Full Stack Developer</span> with experience in 
              **Angular, React.js, Next.js, Spring Boot, and Node.js**. I love solving problems, 
              building scalable applications, and continuously learning new technologies.
            </p>
            <p className="text-gray-400 mt-3 text-lg">
              Apart from coding, I enjoy **exploring Machine Learning**, **playing guitar**, 
              and **listening to Imagine Dragons**. 🎸🎵
            </p>
  
            {/* Contact & Resume Buttons */}
            <div className="mt-6 flex justify-center md:justify-start gap-4">
              <a
                href="/resume.pdf" // Replace with your resume link
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#956afa] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#7a4ee9] transition"
              >
                Download Resume
              </a>
              <a
                href="#contact"
                className="border border-[#956afa] text-[#956afa] px-6 py-3 rounded-lg shadow-md hover:bg-[#956afa] hover:text-white transition"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;
  