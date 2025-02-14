import Photo from "../assets/Pasted image.png";
import Photos from "../assets/Pasted image (2).png";
import Photoi from "../assets/website-design-nz.webp";
import Photoe from "../assets/cover.jpg";
import Photon from "../assets/cc.png";
const Projects = () => {
  return (
    <div
      className="h-[100vh] bg-black max-w[1200px] mx-auto p-5 py-40 z-1 "
      id="Projects"
    >
      <div className="pb-8">
        <p className="text-4xl font-bold mb-3- text-purple-950"> Projects</p>
        <div className="grid: sm:grid-cols-2 md:grid-cols-3 gap-4 bg-black">
          <div
            className="transform transition-transform duration-300 hover:scale-110 overflow-hidden shadow-xl
           shadow-blue-900 group container rounded-md flex justify-center items-center mx-auto 
           content-div h-[180xp] bg-cover-relative"
          >
            <img src={Photoe} width={200} height={5} />
            <img src={Photo} width={300} height={300} />
            <img src={Photos} width={300} height={300} />
            <img src={Photon} width={250} height={100} />
            <img src={Photoi} width={300} height={800} />
            <div className="pt-8 text-center">
              <a href="/" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
