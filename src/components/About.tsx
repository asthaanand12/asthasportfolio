
import { motion } from "framer-motion";
import { Mail, MapPin, GraduationCap, Briefcase } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="section-heading">About Me</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="col-span-2"
          >
            <p className="text-gray-700 leading-relaxed mb-6">
              I am a passionate software, data science, and machine learning enthusiast with a strong commitment to turning complex data into actionable insights. Recently, I participated in a comprehensive data visualization program, enhancing my ability to present data effectively and drive informed decision-making.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              I am actively seeking opportunities to contribute my skills in developing innovative solutions, leveraging data-driven strategies, and collaborating on impactful projects.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="flex items-center">
                <div className="bg-beige rounded-full p-3 mr-4">
                  <MapPin className="text-data-dark" size={20} />
                </div>
                <div>
                  <h3 className="text-gray-900 font-semibold">Location</h3>
                  <p className="text-gray-600">Ranchi, Jharkhand, India</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-beige rounded-full p-3 mr-4">
                  <Mail className="text-data-dark" size={20} />
                </div>
                <div>
                  <h3 className="text-gray-900 font-semibold">Email</h3>
                  <p className="text-gray-600">contact@asthaanand.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-beige rounded-full p-3 mr-4">
                  <GraduationCap className="text-data-dark" size={20} />
                </div>
                <div>
                  <h3 className="text-gray-900 font-semibold">Education</h3>
                  <p className="text-gray-600">Bachelor's in Cyber Security</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-beige rounded-full p-3 mr-4">
                  <Briefcase className="text-data-dark" size={20} />
                </div>
                <div>
                  <h3 className="text-gray-900 font-semibold">Experience</h3>
                  <p className="text-gray-600">Data Analytics & Software Development</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-beige-light/60 p-6 rounded-lg shadow-md"
          >
            <h3 className="font-display text-xl font-semibold mb-4 text-data-dark">Key Interests</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-data-light mr-3"></div>
                <span className="text-gray-700">Data Science & Analytics</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-data-light mr-3"></div>
                <span className="text-gray-700">Machine Learning</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-data-light mr-3"></div>
                <span className="text-gray-700">Software Development</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-data-light mr-3"></div>
                <span className="text-gray-700">Data Visualization</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-data-light mr-3"></div>
                <span className="text-gray-700">AI & Predictive Modeling</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-data-light mr-3"></div>
                <span className="text-gray-700">Web Development</span>
              </li>
            </ul>
            
            <div className="mt-8">
              <h3 className="font-display text-xl font-semibold mb-4 text-data-dark">Open To</h3>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <p className="text-gray-700">
                  Freelance and Software Engineer roles. Currently looking for opportunities to apply my data science and software development skills in innovative projects.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
