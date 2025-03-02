import ProjectCard from "./ProjectCard";
import letsshop from "@/public/letsshop.png";
import khub from "@/public/khub.png";
import rmp from "@/public/rmp.png";
import bot from "@/public/bot.png";
import sorting from "@/public/sorting.png"
import lplay from "@/public/lplay.png"

const projects = [
  {
    title: "LetsShop",
    description: "A full-stack Nextjs-Sanity e-commerce platform with Paypal payments..",
    image: letsshop,
    github: "https://github.com/rashi-06/letsShop-ecom",
    demo: "https://lets-shop-ecom.vercel.app/",
  },
  {
    title: "Knowledge Hub",
    description: "A JAMstack based blogging application with authentication using Google auth..",
    image: khub,
    github: "https://github.com/rashi-06/knowledgeHub",
    demo: "https://khub-knowledge-hub.netlify.app/",
  },
  {
    title: "Rock-Mine Predictor",
    description: "Machine Learning model to predict Rock or Mine underneth the water .",
    image: rmp,
    github: "https://github.com/rashi-06/RockMinePrediction",
    demo: "https://github.com/rashi-06/RockMinePrediction",
  },
  {
    title: "Minion BOT",
    description: "This is a Discord BOT that is built using discord.js javascript library .",
    image: bot,
    github: "https://github.com/rashi-06/Minion-BOT",
    demo: "https://github.com/rashi-06/Minion-BOT",
  },
  {
    title: "Sorting Algorithm Simulation",
    description: "A full-stack MERN e-commerce platform with Stripe payments.",
    image: sorting,
    github: "https://github.com/yourusername/ecommerce",
    demo: "https://sorting-simulations.netlify.app/",
  },
  {
    title: "LetsPlay CLI",
    description: "A CLI based game build using Nodejs. ",
    image: lplay,
    github: "https://github.com/rashi-06/letsplay-cli",
    demo: "https://github.com/rashi-06/letsplay-cli",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">My <span className="text-[#956afa]">Projects</span></h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
