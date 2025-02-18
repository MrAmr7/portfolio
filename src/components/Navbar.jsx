import { Menu, X, Home, User, Star, Briefcase, Layers, Mail } from "lucide-react";
import { useState } from "react";
import foto from "../assets/Amr.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home", icon: <Home size={20} /> },
    { name: "About Me", href: "#About Me", icon: <User size={20} /> },
    { name: "Skills", href: "#Skills", icon: <Star size={20} /> },
    { name: "Experience", href: "#Ex", icon: <Briefcase size={20} /> },
    { name: "Projects", href: "#Projects", icon: <Layers size={20} /> },
    { name: "Contact", href: "#Contact", icon: <Mail size={20} /> },
  ];

  return (
    <header className="bg-blue-800 fixed w-full top-0 left-0 z-50 shadow-lg">
      <nav className="w-full  mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img className="rounded-full" src={foto} alt="Logo" width={40} height={40} />
          <h1 className="text-white text-2xl font-serif">Amr's Portfolio</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-4">
          {navLinks.map(({ name, href, icon }) => (
            <a
              key={name}
              href={href}
              className="flex items-center gap-2 text-white text-lg font-medium hover:text-purple-900 transition"
            >
              {icon} {name}
            </a>
          ))}
        </ul>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center bg-blue-900 space-y-4 py-4">
          {navLinks.map(({ name, href, icon }) => (
            <a
              key={name}
              href={href}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 text-white text-lg hover:text-purple-900 transition"
            >
              {icon} {name}
            </a>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Navbar;
