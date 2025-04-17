
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Data Analytics",
    company: "Oasis Infobyte",
    period: "Feb 2025 - Mar 2025",
    location: "Remote",
    type: "Internship",
    description: "Worked on data analysis and visualization projects, including predictive models and customer segmentation analysis.",
    skills: ["Data Analysis", "Data Visualization", "Predictive Modeling"]
  },
  {
    title: "Summer Intern",
    company: "Eimple Labs",
    period: "Jun 2023 - Jul 2023",
    location: "Remote",
    type: "Internship",
    description: "Contributed to web development projects and gained experience with JavaScript and related technologies.",
    skills: ["JavaScript", "Web Development", "+4 skills"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="section-heading">Experience</h2>
          <p className="text-gray-600 mt-4">
            My professional journey in the field of data science and software development
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="timeline-item"
            >
              <div className="bg-white p-6 rounded-lg shadow-md ml-4 card-hover">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{exp.title}</h3>
                    <p className="text-data font-medium">{exp.company} · {exp.type}</p>
                  </div>
                  <div className="mt-2 md:mt-0 bg-beige-light px-3 py-1 rounded text-sm font-medium text-data-dark inline-flex">
                    {exp.period}
                  </div>
                </div>
                
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin size={16} className="mr-2" />
                  <span>{exp.location}</span>
                </div>
                
                <p className="text-gray-700 mb-4">
                  {exp.description}
                </p>
                
                <div className="flex flex-wrap">
                  {exp.skills.map((skill, idx) => (
                    <span key={idx} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
