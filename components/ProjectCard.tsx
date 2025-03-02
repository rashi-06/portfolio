import Image, { StaticImageData } from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string | StaticImageData; // Allow both types
  github: string;
  demo: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, github, demo }) => {
  return (
    <div className="bg-black shadow-lg rounded-2xl overflow-hidden transition-transform transform hover:scale-105 border border-[#956afa]">
      <div className="relative w-full h-56">
        {typeof image === "string" ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <Image src={image} alt={title} layout="fill" objectFit="cover" />
        )}
      </div>
      <div className="p-5 text-white">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-gray-300">{description}</p>
        <div className="flex justify-between items-center mt-4">
          <a
            href={github}
            target="_blank"
            className="text-[#956afa] hover:text-white flex items-center gap-2"
            rel="noopener noreferrer"
          >
            <FaGithub size={20} /> GitHub
          </a>
          <a
            href={demo}
            target="_blank"
            className="text-[#956afa] hover:text-white flex items-center gap-2"
            rel="noopener noreferrer"
          >
            <FaExternalLinkAlt size={18} /> Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
