import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen pt-20 flex items-center relative overflow-hidden bg-gradient-to-br from-beige-light to-white"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2 text-center md:text-left"
          >
            <p className="text-data-light font-medium mb-2">Hello, I'm</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
              Astha Anand
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 mb-6 font-light">
              Designing and developing intelligent solutions with purpose, precision, and people in mind.
            </h2>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
              Passionate about data, software, and intuitive digital solutions. I explore the intersection 
              of technology and human-centered design to build meaningful, accessible, and functional experiences.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a 
                href="#contact" 
                className="bg-data px-6 py-3 rounded-md text-white font-medium transition duration-300 hover:bg-data-dark"
              >
                Contact Me
              </a>
              <a 
                href="#projects" 
                className="bg-transparent px-6 py-3 rounded-md text-data border border-data font-medium transition duration-300 hover:bg-data hover:text-white"
              >
                View Projects
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full md:w-1/2 flex justify-center md:justify-end mt-12 md:mt-0"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-beige-light shadow-xl">
              <img
                src="/lovable-uploads/4150ac88-8cbf-4064-b5b9-8e8de807210f.png"
                alt="Astha Anand"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="flex flex-col items-center cursor-pointer"
          >
            <span className="text-gray-600 text-sm mb-2">Scroll Down</span>
            <ChevronDown className="text-data-light animate-bounce" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
