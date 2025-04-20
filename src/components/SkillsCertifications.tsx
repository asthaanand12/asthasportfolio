
import { motion } from "framer-motion";
import { skillCategories, certifications } from "@/data/skills-certifications";
import SkillCategory from "./skills/SkillCategory";
import CertificationCard from "./certifications/CertificationCard";

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
                <SkillCategory
                  key={index}
                  name={category.name}
                  skills={category.skills}
                  index={index}
                />
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
                <CertificationCard
                  key={index}
                  certification={cert}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsCertifications;
