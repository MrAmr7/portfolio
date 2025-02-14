import foto from"../assets/Amr.jpg"
 const Navbar = () => {
  return (
    <header>
    <nav className="bg-blue-800 w-5xl mx-auto  font-serif flex fixed top-0 left-0 w-full z-50 items-center justify-between h-[60xp] p-4 ">
  <img className="rounded-md"src={foto} width={40} height={5}/>
<ul className="space-x-10">

 <a className="text-white text-2xl    hover:text-purple-950" href="#home">Home</a>
 <a className="text-white text-2xl    hover:text-purple-950" href="#About Me">AboutMe</a>
 <a className="text-white text-2xl    hover:text-purple-950" href="#Skills">Skills</a>
 <a className="text-white text-2xl    hover:text-purple-950" href="#Ex">Ex</a>
 <a className="text-white text-2xl    hover:text-purple-950" href="#Projects">Projects</a>
    <a className="text-white text-2xl hover:text-purple-950" href="#Contact">Contact</a>
</ul>

    </nav>
    </header>
    
  )
}
 export default Navbar