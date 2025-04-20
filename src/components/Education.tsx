import { motion } from "framer-motion";
import { Calendar, Award } from "lucide-react";

const educations = [
  {
    institution: "Jharkhand Raksha Shakti University",
    degree: "Bachelor of Computer Applications in Cyber Security",
    field: "Cyber Security",
    period: "2021 - 2024",
    grade: "9.25/10",
    skills: [
      "Organization Skills", 
      "Computer Science", 
      "Microsoft Excel", 
      "Research Skills", 
      "Communication"
    ]
  },
  {
    institution: "Kendriya Vidyalaya",
    degree: "Intermediate",
    field: "Science",
    period: "Jun 2019 - Mar 2021",
    grade: "88%",
    skills: ["Reasoning Skills"]
  },
  {
    institution: "St. Francis School Banhora Ranchi",
    degree: "Matriculation",
    field: "",
    period: "Mar 2010 - Mar 2019",
    grade: "93%",
    skills: []
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="section-heading">Education</h2>
          <p className="text-gray-600 mt-4">
            My academic background and qualifications
          </p>
        </motion.div>

        <div className="space-y-8">
          {educations.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="timeline-item"
            >
              <div className="bg-white p-6 rounded-lg shadow-md ml-4 card-hover">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div className="flex items-start">
                    <div className="mr-4">
                      {index === 1 ? (
                        <img 
                          src="/lovable-uploads/25666937-6c8d-46c7-b67d-9fc5f2508999.png" 
                          alt={edu.institution} 
                          className="w-16 h-16 object-contain"
                        />
                      ) : (
                        <div className="w-16 h-16 bg-beige flex items-center justify-center rounded-full">
                          <Award className="text-data-dark" size={28} />
                        </div>
                      )}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">{edu.institution}</h3>
                      <p className="text-data font-medium">{edu.degree}{edu.field && `, ${edu.field}`}</p>
                      <p className="text-gray-600">{edu.period}</p>
                    </div>
                  </div>
                  
                  {edu.grade && (
                    <div className="mt-4 md:mt-0 bg-beige-light px-3 py-1 rounded text-sm font-medium text-data-dark inline-flex items-center">
                      <Award size={16} className="mr-2" />
                      Grade: {edu.grade}
                    </div>
                  )}
                </div>
                
                {edu.skills.length > 0 && (
                  <div className="mt-4">
                    <p className="text-sm text-gray-600 mb-2">Skills:</p>
                    <div className="flex flex-wrap">
                      {edu.skills.map((skill, idx) => (
                        <span key={idx} className="skill-badge">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
