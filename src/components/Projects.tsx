import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

const projects = [
  {
    title: "ASL Sign Language Detection System",
    period: "May 2024 - Jun 2024",
    association: "Jharkhand Raksha Shakti University",
    description: "Developed a real-time American Sign Language (ASL) detection system using Convolutional Neural Networks (CNN), integrated with OpenCV, Keras, and TensorFlow. The system captures hand gestures through webcam input, processes the frames using image preprocessing techniques, and classifies the signs with high accuracy. It enables intuitive, camera-based gesture recognition to support inclusive and accessible communication.",
    skills: ["CNN", "OpenCV", "Keras", "TensorFlow", "Python"],
    images: [
      "/lovable-uploads/9a0ab027-7e91-404f-80f3-063bc8e9ef66.png",
      "/lovable-uploads/2443f5e9-c37a-41a5-8b65-cd4477f333ad.png",
      "/lovable-uploads/deab305f-8373-4255-9e58-3ca737f654a1.png",
      "/lovable-uploads/40fafc8f-c1fa-4033-89da-683bf0e257e5.png"
    ]
  },
  {
    title: "Blockchain-Based Voting System",
    period: "Jan 2024 - Mar 2024",
    description: "A secure and transparent digital voting platform built using blockchain technology. This system ensures tamper-proof vote recording, leveraging the decentralized and immutable nature of blockchain.\n\nKey features:\n\n• Voter authentication using digital IDs\n• End-to-end encryption for vote privacy\n• Smart contracts to automate fair voting\n• Publicly verifiable ledger without revealing voter identities\n\nThis project promotes trust, accessibility, and transparency in digital elections.",
    skills: ["Blockchain Development", "Smart Contracts", "Cryptography", "Web Development"],
    images: [
      "/lovable-uploads/731cffef-39ba-48ab-bdde-dd7a4d8de568.png",
      "/lovable-uploads/1bc78405-ba12-4f0b-adc0-6b2674f3965d.png",
      "/lovable-uploads/b6c5b411-71f3-4c26-8e92-fd48f82f509b.png",
      "/lovable-uploads/6924da23-7c9c-4d3c-a4b6-7ad6c974d49c.png",
      "/lovable-uploads/f78a006b-64e9-4f09-aa14-0ac69d6dd93a.png",
      "/lovable-uploads/d417dcd4-4c0e-479a-a6b6-94a2426f9e18.png"
    ]
  },
  {
    title: "Daily Planner Website",
    period: "Feb 2023 - Mar 2023",
    description: "A responsive web application designed to help users organize tasks, set reminders, and manage daily schedules efficiently. Features include task management, reminders, weekly targets, and note-taking capabilities. Built with HTML, CSS, JavaScript for an intuitive user experience.",
    skills: ["HTML", "CSS", "JavaScript", "MySQL"],
    images: [
      "/lovable-uploads/478df39a-51c9-4f9b-b014-efaa46792cd9.png",
      "/lovable-uploads/a4e19db1-afc8-4a36-8b96-a7e813d32f20.png", 
      "/lovable-uploads/2b03c07a-d28d-4ed3-bc0e-d2ab9b932e44.png",
      "/lovable-uploads/06af4e60-33df-43a7-ad1e-1129b5d07504.png",
      "/lovable-uploads/ec2dd6f8-f965-4a1c-9b00-ca489c7a1df9.png",
      "/lovable-uploads/ce8ecd4d-dc18-43a9-bea3-54445b89e77d.png"
    ]
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

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
            <Dialog key={index}>
              <DialogTrigger asChild>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex flex-col ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  } gap-8 items-center cursor-pointer`}
                >
                  <div className="w-full lg:w-1/2">
                    <div className="bg-beige-light/30 p-2 rounded-lg shadow-md overflow-hidden">
                      <img
                        src={project.images[0]}
                        alt={project.title}
                        className="w-full h-64 object-cover rounded"
                      />
                    </div>
                  </div>

                  <div className="w-full lg:w-1/2">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold text-gray-800">
                          {project.title}
                        </h3>
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
              </DialogTrigger>
              <DialogContent className="max-w-4xl">
                <DialogHeader>
                  <DialogTitle>{project.title}</DialogTitle>
                  <DialogDescription>
                    {project.period} {project.association && `• ${project.association}`}
                  </DialogDescription>
                </DialogHeader>
                <div className="mt-4 space-y-4">
                  <p className="text-gray-700">{project.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.images.map((image, idx) => (
                      <img
                        key={idx}
                        src={image}
                        alt={`${project.title} screenshot ${idx + 1}`}
                        className="w-full rounded-lg shadow-md"
                      />
                    ))}
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
