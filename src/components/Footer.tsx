
import { ArrowUp } from "lucide-react";
import { Link } from "react-scroll";
import { Github, Linkedin } from "lucide-react"; // Use explicit icon import

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 text-gray-600">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="font-display text-2xl font-bold text-data-dark">
              Astha <span className="text-data-light">Anand</span>
            </h2>
            <p className="mt-2">Data Science | Data Analytics | AI enthusiast | Software Developer</p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="font-medium hover:text-data-dark cursor-pointer transition-colors"
            >
              Home
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="font-medium hover:text-data-dark cursor-pointer transition-colors"
            >
              About
            </Link>
            <Link
              to="experience"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="font-medium hover:text-data-dark cursor-pointer transition-colors"
            >
              Experience
            </Link>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="font-medium hover:text-data-dark cursor-pointer transition-colors"
            >
              Projects
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="font-medium hover:text-data-dark cursor-pointer transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
        
        <hr className="my-8 border-gray-200" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {currentYear} Astha Anand. All rights reserved.</p>
          
          <div className="mt-4 md:mt-0 flex items-center space-x-4">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
              className="inline-flex items-center justify-center w-10 h-10 bg-beige rounded-full hover:bg-beige-dark cursor-pointer transition-colors"
            >
              <ArrowUp size={20} className="text-data-dark" />
            </Link>
            {/* Social Icons */}
            <a
              href="https://github.com/asthaanand12/My-Portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 ml-2 bg-gray-200 rounded-full hover:bg-data hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github />
            </a>
            <a
              href="https://www.linkedin.com/in/astha12"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full hover:bg-data hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

