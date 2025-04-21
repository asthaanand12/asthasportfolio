import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import ZoomableImage from "./ZoomableImage";

const experiences = [
  {
    title: "Data Analytics Internship",
    company: "Oasis Infobyte",
    period: "Feb 2025 - Mar 2025",
    location: "Remote",
    type: "AICTE OIB-SIP Internship",
    description: "Conducted comprehensive exploratory data analysis (EDA) to extract actionable insights. Built a housing price prediction model using linear regression with Scikit-Learn.",
    skills: ["Data Analytics", "Data Visualization", "Statistical Analysis"],
    certificate: "/lovable-uploads/537d7189-471a-466d-bee3-4f4927a323a7.png",
    credentialId: "OIB/F1/IP326"
  },
  {
    title: "Summer Intern at Eimple Labs Bangalore",
    company: "Eimple Labs",
    period: "Jun 2023 - Jul 2023",
    location: "Bangalore, India",
    type: "Internship",
    description: "Designed and developed responsive web interfaces using HTML, CSS, and JavaScript. Utilized Git for version control and collaborated with design prototypes using Figma.",
    skills: ["JavaScript", "Web Development", "Application Development"],
    certificate: "/lovable-uploads/da528dc6-a4a1-4e49-b82f-40f43222b141.png",
    credentialId: "EE/23/IN/EL/2304047"
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
            <Dialog key={index}>
              <DialogTrigger asChild>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="timeline-item cursor-pointer"
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
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, idx) => (
                        <span key={idx} className="skill-badge">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl">
                <DialogHeader>
                  <DialogTitle>{exp.title} Certificate</DialogTitle>
                </DialogHeader>
                <div className="mt-4">
                  {exp.title === "Summer Intern at Eimple Labs Bangalore" ? (
                    <ZoomableImage
                      src={exp.certificate}
                      alt={`${exp.title} Certificate`}
                    />
                  ) : (
                    <img
                      src={exp.certificate}
                      alt={`${exp.title} Certificate`}
                      className="w-full rounded-lg"
                    />
                  )}
                  <p className="text-sm text-gray-500 mt-2">
                    Credential ID: {exp.credentialId}
                  </p>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
