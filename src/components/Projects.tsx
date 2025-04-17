
import { motion } from "framer-motion";
import { ExternalLink, Github, Calendar } from "lucide-react";

const projects = [
  {
    title: "ASL Sign Language Detection System",
    period: "May 2024 - Jun 2024",
    association: "Jharkhand Raksha Shakti University",
    description: "The project involves the development of an American Sign Language (ASL) recognition system capable of converting hand gestures into text and speech. The primary goal is to create an assistive technology tool for bridging communication gaps between the hearing-impaired community and others. The system leverages computer vision for gesture detection and recurrent neural networks (RNN) for real-time gesture classification and translation into text and voice.",
    skills: ["Analytical Skills", "Attention to Detail", "+4 skills"],
    image: "/lovable-uploads/bc6cefdc-1375-48f3-aa5c-76ec7a406fb6.png"
  },
  {
    title: "Predicting House Prices with Linear Regression",
    period: "Mar 2025",
    association: "Oasis Infobyte",
    description: "Developed a machine learning model using Linear Regression to predict house prices based on various features like square footage, number of bedrooms, location, etc. Performed data preprocessing, feature engineering, and model evaluation to achieve accurate predictions.",
    skills: ["Python", "Machine Learning", "Linear Regression", "Data Analysis"],
    image: "/lovable-uploads/bc6cefdc-1375-48f3-aa5c-76ec7a406fb6.png"
  },
  {
    title: "Customer Segmentation Analysis",
    period: "Mar 2025",
    association: "Oasis Infobyte",
    description: "Applied clustering techniques to segment customers based on purchasing behavior, demographic information, and other relevant features. Created actionable insights to help businesses target specific customer groups with tailored marketing strategies.",
    skills: ["Data Analytics", "Clustering", "Customer Insights", "Visualization"],
    image: "/lovable-uploads/bc6cefdc-1375-48f3-aa5c-76ec7a406fb6.png"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="section-heading">Projects</h2>
          <p className="text-gray-600 mt-4">
            Showcasing my technical capabilities through practical applications
          </p>
        </motion.div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-8 items-center`}
            >
              <div className="w-full lg:w-1/2">
                <div className="bg-beige-light/30 p-2 rounded-lg shadow-md overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover rounded"
                  />
                </div>
              </div>

              <div className="w-full lg:w-1/2">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                    <div className="flex space-x-2">
                      <a
                        href="#"
                        className="text-gray-600 hover:text-data-dark transition-colors"
                        aria-label="View Project"
                      >
                        <ExternalLink size={20} />
                      </a>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-data-dark transition-colors"
                        aria-label="GitHub Repository"
                      >
                        <Github size={20} />
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center text-gray-600 mb-4">
                    <Calendar size={16} className="mr-2" />
                    <span>{project.period}</span>
                    {project.association && (
                      <span className="ml-2 text-data">• {project.association}</span>
                    )}
                  </div>

                  <p className="text-gray-700 mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap">
                    {project.skills.map((skill, idx) => (
                      <span key={idx} className="skill-badge">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
