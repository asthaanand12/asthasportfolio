
import { motion } from "framer-motion";
import { CheckCircle, Calendar, ExternalLink } from "lucide-react";

const skillCategories = [
  {
    name: "Data Science & Analytics",
    skills: [
      "Data Science", 
      "Data Analytics", 
      "Statistical Data Analysis", 
      "Exploratory Data Analysis (EDA)",
      "Data Visualization",
      "Data Clean Up"
    ]
  },
  {
    name: "Programming & Development",
    skills: [
      "Python Programming", 
      "JavaScript", 
      "Web Development", 
      "Software Development"
    ]
  },
  {
    name: "AI & Machine Learning",
    skills: [
      "AI", 
      "Predictive Modeling", 
      "Regression Models", 
      "Kaggle"
    ]
  },
  {
    name: "Tools & Technologies",
    skills: [
      "Microsoft Excel", 
      "Microsoft Power BI"
    ]
  },
  {
    name: "Soft Skills",
    skills: [
      "Organization Skills", 
      "Research Skills", 
      "Communication", 
      "Analytical Skills",
      "Attention to Detail", 
      "Reasoning Skills"
    ]
  }
];

const certifications = [
  {
    name: "Google Advanced Data Analytics Professional Certificate",
    issuer: "Google",
    date: "Mar 2025",
    credentialId: "Y39J96CDHAFW",
    skills: [
      "Data Science", 
      "Statistical Data Analysis", 
      "Python Programming", 
      "Regression Models", 
      "Predictive Modeling", 
      "Kaggle", 
      "Exploratory Data Analysis (EDA)"
    ],
    logo: "/lovable-uploads/bdade880-7fd6-4eb4-a4fe-d1bf6c75f25a.png"
  },
  {
    name: "Power BI for Beginners: Interactive dashboard Fundamentals",
    issuer: "Coursera",
    date: "Mar 2025",
    credentialId: "CDRW3VP7F1HO",
    skills: ["Microsoft Power BI"],
    logo: "/lovable-uploads/df2e7f0e-9247-47ab-bb42-da4d0a993905.png"
  },
  {
    name: "Tata Group - Data Visualization: Empowering Business with Effective Insights Job Simulation",
    issuer: "Forage",
    date: "Jan 2025",
    credentialId: "pXFZh5PSZc9qD6PfP",
    skills: ["Data Analytics", "Data Visualization", "Data Clean Up"],
    logo: "/lovable-uploads/a6ee4902-4059-460f-b964-612d4cb6deee.png"
  }
];

const SkillsCertifications = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="section-heading">Skills</h2>
              <p className="text-gray-600 mt-4">
                My technical and professional competencies
              </p>
            </motion.div>

            <div className="space-y-8">
              {skillCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-semibold text-data-dark mb-4">{category.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <div 
                        key={idx} 
                        className="bg-white border border-beige rounded-full px-4 py-2 text-gray-700 flex items-center"
                      >
                        <CheckCircle size={16} className="text-data-light mr-2" />
                        {skill}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="section-heading">Certifications</h2>
              <p className="text-gray-600 mt-4">
                Professional certifications and achievements
              </p>
            </motion.div>

            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg shadow-md card-hover"
                >
                  <div className="flex items-start">
                    <div className="w-16 h-16 mr-4 flex-shrink-0">
                      <img 
                        src={cert.logo} 
                        alt={cert.issuer} 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-800">{cert.name}</h3>
                      <p className="text-data font-medium">{cert.issuer}</p>
                      
                      <div className="flex items-center text-gray-600 mt-2 mb-3">
                        <Calendar size={16} className="mr-2" />
                        <span>Issued {cert.date}</span>
                      </div>
                      
                      <p className="text-sm text-gray-600 mb-1">
                        Credential ID: {cert.credentialId}
                      </p>
                      
                      <button className="text-data text-sm flex items-center font-medium mt-1 hover:text-data-dark transition-colors">
                        <ExternalLink size={14} className="mr-1" />
                        Show credential
                      </button>
                      
                      {cert.skills.length > 0 && (
                        <div className="mt-4">
                          <p className="text-sm text-gray-600 mb-2">Skills:</p>
                          <div className="flex flex-wrap">
                            {cert.skills.map((skill, idx) => (
                              <span key={idx} className="skill-badge">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsCertifications;
