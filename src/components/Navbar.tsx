import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Experience", id: "experience" },
  { name: "Education", id: "education" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "References", id: "references" },
  { name: "Contact", id: "contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          className="cursor-pointer transform transition-transform hover:scale-105"
        >
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="font-display text-2xl font-bold"
          >
            <span className="bg-gradient-to-r from-data-dark to-data-light bg-clip-text text-transparent">
              Astha
            </span>
            <span className="text-data-light"> Anand</span>
          </motion.h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-2">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.id}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="relative group px-4 py-2 rounded-md text-gray-700 font-medium transition-all duration-300 hover:text-data-dark"
              activeClass="text-data-dark"
            >
              <span className="relative z-10">{link.name}</span>
              <span className="absolute inset-0 bg-gradient-to-r from-data-light/10 to-beige-light rounded-md scale-0 group-hover:scale-100 transition-transform duration-300 ease-out" />
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-data to-data-light transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
            </Link>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 hover:text-data-dark transition-colors p-2 rounded-md hover:bg-gray-100"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -20 }}
        transition={{ duration: 0.2 }}
        className={`md:hidden bg-white/95 backdrop-blur-sm shadow-lg absolute top-full left-0 right-0 py-4 px-4 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.id}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-gray-700 hover:text-data-dark hover:bg-gray-50 font-medium py-2 px-4 rounded-md transition-colors"
              activeClass="text-data-dark bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </motion.div>
      
      <style>
        {`
          .shadow-custom-md {
            box-shadow: 0 2px 8px 0 rgba(156, 92, 246, 0.08);
          }
        `}
      </style>
    </nav>
  );
};

export default Navbar;
