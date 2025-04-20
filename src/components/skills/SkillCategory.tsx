
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

interface SkillCategoryProps {
  name: string;
  skills: string[];
  index: number;
}

const SkillCategory = ({ name, skills, index }: SkillCategoryProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <h3 className="text-xl font-semibold text-data-dark mb-4">{name}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, idx) => (
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
  );
};

export default SkillCategory;
