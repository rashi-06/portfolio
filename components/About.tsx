const About = () => {
  return (
    <section id="about" className="bg-black py-16 px-6 md:px-16 lg:px-32">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-white">
          About <span className="text-[#956afa]">Me</span>
        </h2>

        {/* Short Bio */}
        <p className="text-gray-400 mt-4 text-lg leading-relaxed max-w-3xl">
          Hey there! I'm <span className="text-white font-semibold">Rashi Sharma</span>,
          a passionate <span className="text-[#956afa]">Full Stack Developer</span> with experience in
          **Angular, React.js, Next.js, Spring Boot, and Node.js**. I love solving problems,
          building scalable applications, and continuously learning new technologies.
        </p>

        <p className="text-gray-400 mt-3 text-lg max-w-3xl">
          Apart from coding, I enjoy **exploring Machine Learning**, **playing guitar**,
          and **listening to Imagine Dragons**. 🎸🎵
        </p>

        {/* Contact Me Button - Centered */}
        <div className="mt-6">
          <a
            href="#contact"
            className="bg-[#956afa] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#7a4ee9] transition"
          >
            Contact Me 📩
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
