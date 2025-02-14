import { CgCPlusPlus } from 'react-icons/cg';
import Card from '../components/Card';
import { FaCss3, FaFigma, FaHtml5, FaJava, FaJs, FaNodeJs, FaPython,FaReact } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiExpress ,SiMongodb } from "react-icons/si";


const Skills = () => {
  const skillsList = [
    { skillsName: 'C++', text: 'professional', buttonColor: 'bg-blue-500 hover:bg-blue-400', icon: <CgCPlusPlus className="group-hover:text-blue-500" /> },
    { skillsName: 'NodeJs', text: 'Advanced', buttonColor: 'bg-green-600 hover:bg-green-400', icon: <FaNodeJs className="group-hover:text-green-500" /> },
    { skillsName: 'Java', text: 'Advanced', buttonColor: 'bg-red-700 hover:bg-red-500', icon: <FaJava className="group-hover:text-red-500" /> },
    { skillsName: 'JavaScript', text: 'professional', buttonColor: 'bg-yellow-700 hover:bg-yellow-400', icon: <FaJs className="group-hover:text-yellow-500" /> },
    { skillsName: 'Python', text: 'professional', buttonColor: 'bg-yellow-700 hover:bg-yellow-400', icon: <FaPython className="group-hover:text-yellow-500" /> },
    { skillsName: 'HTML', text: 'professional', buttonColor: 'bg-red-600 hover:bg-red-700', icon: <FaHtml5 className="group-hover:text-red-500" /> },
    { skillsName: 'CSS', text: 'professional', buttonColor: 'bg-blue-600 hover:bg-blue-700', icon: <FaCss3 className="group-hover:text-blue-500" /> },
    { skillsName: 'React', text: 'professional', buttonColor: 'bg-blue-500 hover:bg-blue-300', icon: <FaReact className="group-hover:text-blue-500" /> },
    { skillsName: 'Tailwindcss', text: 'professional', buttonColor: 'bg-teal-500 hover:bg-teal-300', icon: <RiTailwindCssFill className="group-hover:text-teal-500" /> },
    { skillsName: 'Express', text: 'Advanced', buttonColor: 'bg-blue-500 hover:bg-blue-300', icon: < SiExpress className="group-hover:text-black" /> },
    { skillsName: 'Mongodb', text: 'Advanced', buttonColor: 'bg-black-500 hover:bg-black', icon: <SiMongodb  className="group-hover:text-green-600" /> },
    { skillsName: 'Figma', text: 'Advanced', buttonColor: 'bg-black hover:bg-black', icon: <FaFigma className="group-hover:text-white" /> },

  ];

  return (
    <div id="Skills" className="bg-black min-h-screen border-none py-40">
      <h2 className="text-5xl text-left text-purple-950 font-bold mb-10 ">My Skills</h2>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
        {skillsList.map((skill, index) => (
          <Card
            key={index}
            skillsName={skill.skillsName}
            text={skill.text}
            buttonColor={skill.buttonColor}
            icon={skill.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;




