import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";

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
          ? "bg-white/90 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          className="cursor-pointer"
        >
          <h1 className="font-display text-2xl font-bold text-data-dark">
            Astha <span className="text-data-light">Anand</span>
          </h1>
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
              className="relative group text-gray-700 font-medium cursor-pointer transition-colors px-4 py-2 rounded-md hover:bg-gradient-to-br hover:from-data-light hover:to-beige-light hover:text-white shadow-custom-md focus:bg-data-dark focus:text-white active:scale-95"
              activeClass="text-data-dark bg-gradient-to-br from-data-dark to-data-light"
              style={{ transition: "background 0.3s, color 0.3s, box-shadow 0.3s" }}
            >
              <span className="z-10 relative group-hover:drop-shadow-lg">{link.name}</span>
              {/* Animated underline */}
              <span className="absolute left-3 right-3 -bottom-1 h-1 bg-data-light rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </Link>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 hover:text-data-dark transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 py-4 px-4">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={link.id}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-gray-700 hover:text-data-dark font-medium py-2 cursor-pointer transition-colors"
                activeClass="text-data-dark"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
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
