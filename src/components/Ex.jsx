import Photoi from "../assets/c.png"
import Photo from "../assets/g.png"
import Photos from "../assets/Task.jpg"
import Photoe from "../assets/b.webp"
import Photon from "../assets/ga.avif"



const Ex = () => {
  return (
    <div className="h-[100vh] bg-black max-w[1200px] mx-auto p-5 py-40 z-1" id="Ex">
      <div className="pb-8">
        <p className="text-4xl font-bold mb-3- text-purple-950"> Experience</p>
        <div className="grid: sm:grid-cols-2 md:grid-cols-3 gap-4 bg-black">
          <div className="transform transition-transform duration-300 hover:scale-110 overflow-hidden shadow-xl
           shadow-blue-900 group container rounded-md flex justify-center items-center mx-auto 
           content-div h-[180xp] bg-cover-relative">
            <img src={Photoi} width={200} height={5} />
            <img src={Photo} width={350} height={100} />
            <img src={Photos} width={300} height={400} />
            <img src={Photoe} width={300} height={500} />
            <img src={Photon} width={300} height={100} />
             
            <div className="pt-8 text-center" >
              <a href="/" />


            </div>
          </div>
        </div>
      </div>

    </div>


  )
}
export default Ex