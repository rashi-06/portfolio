import { FaReact, FaNodeJs, FaGitAlt,FaDatabase,FaJava,FaPython,FaGithub } from "react-icons/fa";
import { SiSpringboot, SiNextdotjs, SiMongodb, SiJavascript, SiTypescript, SiAngular, SiHtml5, SiCss3,SiCplusplus } from "react-icons/si";

const skills = [
  { name: "Angular", icon: <SiAngular className="text-red-500" /> },
  { name: "React.js", icon: <FaReact className="text-blue-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Spring Boot", icon: <SiSpringboot className="text-green-700" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "SQL", icon: <FaDatabase className="text-yellow-500" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
  { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <SiCss3 className="text-blue-500" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
  { name: "Github", icon: <FaGithub className="text-gray-500" /> },
  { name: "Java", icon: <FaJava className="text-red-600" /> },
  { name: "C++", icon: <SiCplusplus className="text-blue-600" /> },
  { name: "Python", icon: <FaPython className="text-yellow-400" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-black py-10">
      <h2 className="text-4xl font-bold text-white text-center mb-8">
        My <span className="text-[#956afa]">Skills</span>
      </h2>
      <div className="flex flex-wrap justify-center gap-6 px-5">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="group bg-gray-900 border border-[#956afa] rounded-xl p-5 flex flex-col items-center shadow-lg transition-transform transform hover:scale-110"
          >
            <div className="text-6xl">{skill.icon}</div>
            <p className="text-white mt-2 text-lg font-medium group-hover:text-[#956afa] transition-colors">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
