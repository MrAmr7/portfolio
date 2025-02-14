import photo from "../assets/Amr.png";
const AboutMe = () => {
  return (
    <main
      id="About Me"
      className="h-auto md:h-screen w-[100vw] bg-black pt-[8rem] z-0 flex justify-center items-center"
    >
      <div className="w-full h-auto md:w-[90%] mx-auto flex flex-col md:flex-row">
        <div className="w-full md:w-[70%]  my-auto p-2 mx-2">
          <h2 className="text-4xl font-bold  mp-4 text-purple-950">
            {" "}
            About Me
          </h2>
          <p className="text-lg md:text-2xl font-serif  text-white text-justify">
            Tech Stack & Skills: Frontend: React,Tailwind CSS, JavaScript(ES6+),
            HTML, CSS. Backend: Python,JavaScript(ES6+),Node.js, Express.js,
            APIs.
            <br />
            Database: MongoDB, MySQL.
            <br />
            Tools & DevOps: Git, GitHub, Docker, CI/CD, Vercel.
            <br />
            Other Skills: Web Performance Optimization, Authentication (JWT,
            OAuth), Testing (Jest, Cypress)
            <br />
            What I Do:
            <br />
            <p className="text-justify">
              Develop full-stack applications that prioritize performance and
              usability Implement secure, scalable, and well-structured backend
              architectures Craft interactive and visually appealing UI/UX
              designs Integrate third-party APIs and services for enhanced
              functionality Continuously learn and adapt to new technologies to
              stay ahead My Approach: I believe in clean, maintainable code and
              a user-first mindset. Every project I build is optimized for
              speed, accessibility, and scalability. Collaboration,
              problem-solving, and continuous improvement drive my development
              process.{" "}
            </p>
          </p>
        </div>
        <img
          className="mx-auto md:py-0 rounded-3xl w-full h-[400px] md:w-[30%] md:h-auto "
          src={photo}
        />
      </div>
    </main>
  );
};

export default AboutMe;
