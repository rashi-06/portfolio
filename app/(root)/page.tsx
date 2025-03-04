import About from "@/components/About";
import Hero from "@/components/Hero";
// import ProjectCard from "@/components/ProjectCard";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* <h1>Home</h1>
      <h1>light walabackground</h1> 
      <h1>Typography</h1>
       */}

       {/* <div className="py-[139px] flex justify-center items-center">
          <h1 className="">Hi, I am Rashi Sharma</h1>
       </div> */}

       {/* <div className="h-[50vh] flex items-center justify-center text-5xl">
        <p>Hi, I am </p>
        <div className="text-purple-700">
          <span>Rashi Sharma</span>
          <span>a Software Engineer</span>
          <span>a Full Stack Developer</span>
          <span>a Passionate Coder</span>
        </div>
       </div> */}
       <Hero />
       <Skills />
       <Projects />
       <About />
       <Contact />
       <Footer />
    </div>
  );
}
