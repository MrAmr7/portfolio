import sono from "../assets/sono.jpg"
import { TypeAnimation } from "react-type-animation"
import { FaTwitter, FaWhatsapp, FaGithub, FaInstagram, FaFacebook ,FaLinkedin } from 'react-icons/fa';
const Hero = () => {
  return (
    <div id="home"className="girt grid-cols-2 md:grid-cols-3 gap-9 max-w[1200px] h-auto md:h-full bg-black py-12">
      <div className="flex flex-col-reverse md:flex-row justify-center ">
        
        <div className="col-span-2 px-10 pt-10">
          <h1 className=" text-purple-950 text-5xl font-extrabold float-right">Eng-Amr
            <br />
            <TypeAnimation
              sequence={
                [ "Full-Stack Web Developer", 150,
                  "Webdesigner", 150,
                  "Consultant", 150,
                ]}
              wrapper="span"
              speed={10}
              repeat={Infinity} /></h1>


          <button

            className="px-6 py-10 float-right clear-both mt-3 bg-blue-700 text-purple-950 text-7xl font-semibold rounded-xl shadow-md hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-700 transition ease-in-out duration-300"
          > Eng-AMR

          </button>

<button className="px-3 py-6 float-right clear-both mt-3 bg-blue-700 text-purple-950 text-4xl font-semibold rounded-xl shadow-md hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-700 transition ease-in-out duration-300"><a href="./cv.pdf" download={'/my_cv.pdf'}
           
            > Download CV</a></button>
          <p className="text-white text-2xl font-serif  my-10 p-10 clear-right text-justify"> <button className="text-4xl text-purple-900 border-purple-700 rounded-md ">Hi There!</button> <br></br> I'm Eng-Amr  <br/>
           Full-Stack Web Developer
          Passionate about building dynamic, scalable, and user-centric web applications, I specialize in both frontend and backend development. With expertise in modern technologies, I create seamless digital experiences that are efficient, responsive, and visually engaging.</p>
          
        </div>

        <img className="ml-auto rounded-xl" src={sono} width={500} height={500} />
      </div>
      <div className=" flex justify-center space-x-4 ">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:text-blue-500" >
          <FaTwitter size={50} />
        </a>
        <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="text-green-800 hover:text-green-500">
          <FaWhatsapp size={50} />
        </a>
        <a href="https://github.com/MrAmr7" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-white">
          <FaGithub size={50} />
        </a>
        <a href="https://www.instagram.com/mr_mo2ry/" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-700">
          <FaInstagram size={50} />
        </a>
        <a href="https://www.facebook.com/Sho2me4ever" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
          <FaFacebook size={50} />
        </a>
        <a href="https://www.linkedin.com/in/mr-amr-29ba8434a/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
        <FaLinkedin size={50} />
        </a>
      </div>

    </div>
  )
}
export default Hero