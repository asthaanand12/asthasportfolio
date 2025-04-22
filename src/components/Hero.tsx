
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen pt-20 flex items-center relative overflow-hidden bg-gradient-to-br from-beige-light via-white to-beige/10"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full md:w-1/2 text-center md:text-left"
          >
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-data-light font-medium mb-2"
            >
              Hello, I'm
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4"
            >
              Astha Anand
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-xl md:text-2xl text-gray-600 mb-6 font-light"
            >
              Designing and developing intelligent solutions with purpose, precision, and people in mind.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-gray-600 mb-8 max-w-lg mx-auto md:mx-0"
            >
              Passionate about data, software, and intuitive digital solutions. I explore the intersection 
              of technology and human-centered design to build meaningful, accessible, and functional experiences.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap justify-center md:justify-start gap-4"
            >
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                className="relative group bg-data px-8 py-3 rounded-md text-white font-medium transition-all duration-300 hover:bg-data-dark transform hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="relative z-10">Contact Me</span>
                <div className="absolute inset-0 bg-gradient-to-r from-data-light to-data-dark rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                duration={500}
                className="relative overflow-hidden bg-transparent px-8 py-3 rounded-md text-data border-2 border-data font-medium transition-all duration-300 hover:text-white transform hover:-translate-y-1 hover:shadow-lg group"
              >
                <span className="relative z-10">View Projects</span>
                <div className="absolute inset-0 bg-data transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="w-full md:w-1/2 flex justify-center md:justify-end mt-12 md:mt-0"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-data-light to-data-dark rounded-full blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-beige-light shadow-xl relative transform transition-transform duration-500 hover:scale-105">
                <img
                  src="/lovable-uploads/4150ac88-8cbf-4064-b5b9-8e8de807210f.png"
                  alt="Astha Anand"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="flex flex-col items-center cursor-pointer group"
          >
            <span className="text-gray-600 text-sm mb-2 group-hover:text-data-dark transition-colors">Scroll Down</span>
            <ChevronDown className="text-data-light animate-bounce group-hover:text-data-dark transition-colors" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
