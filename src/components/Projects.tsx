
import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Calendar } from "lucide-react";
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
    description: "The project involves the development of an American Sign Language (ASL) recognition system capable of converting hand gestures into text and speech. The primary goal is to create an assistive technology tool for bridging communication gaps between the hearing-impaired community and others. The system leverages computer vision for gesture detection and recurrent neural networks (RNN) for real-time gesture classification and translation into text and voice.",
    skills: ["OpenCV", "Model Training", "AI", "CNN", "Team Leadership", "Keras"],
    images: [
      "/lovable-uploads/6921e3b2-2448-4452-9010-b8fea4cfb21a.png",
      "/lovable-uploads/edc749da-2bd7-467f-8ab2-b0027c760326.png",
      "/lovable-uploads/26d6a278-b5dd-476c-9803-1f7881575409.png"
    ]
  },
  {
    title: "Blockchain-Based Voting System",
    period: "Jan 2024 - Mar 2024",
    association: "Oasis Infobyte",
    description: "A secure, transparent, and tamper-proof digital voting platform using blockchain technology. The system leverages the decentralized and immutable nature of blockchain to ensure that every vote cast is recorded permanently and cannot be altered or deleted.",
    skills: ["Blockchain Development", "Smart Contracts", "Cryptography", "Web Development"],
    images: [
      "/lovable-uploads/93583455-6ace-4cbd-bbcd-043dd8425761.png",
      "/lovable-uploads/827ce4f0-fc04-4fa4-a6cb-0ac2584d1c18.png",
      "/lovable-uploads/f2a365ef-abbb-4290-9879-530c6632dc5f.png",
      "/lovable-uploads/feefeb30-cb3a-49ea-ba4c-fc5371e070b2.png"
    ]
  },
  {
    title: "Daily Planner Website",
    period: "Feb 2023 - Mar 2023",
    description: "A responsive web application designed to help users organize tasks, set reminders, and manage daily schedules efficiently. Built with HTML, CSS, JavaScript, and MySQL for storing user data, it offers an intuitive interface for seamless task tracking and productivity.",
    skills: ["HTML", "CSS", "JavaScript", "MySQL"],
    images: [
      "/lovable-uploads/4a7d2943-c876-4bc4-815e-63cfa15556a5.png",
      "/lovable-uploads/7c5e9645-2552-4531-a55c-420a7de6d5a9.png",
      "/lovable-uploads/d94da43d-dcd3-410a-94ee-830e02e39a5e.png",
      "/lovable-uploads/dd1aa1b5-446d-4083-b589-ffcf80f92e0c.png",
      "/lovable-uploads/d7ac2654-2d72-44cd-925f-092108d97927.png",
      "/lovable-uploads/888a4c16-8505-4491-bb01-ef349bdfeda8.png"
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
