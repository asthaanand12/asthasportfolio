
import { Calendar, ExternalLink } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { motion } from "framer-motion";

interface CertificationCardProps {
  certification: {
    name: string;
    issuer: string;
    date: string;
    credentialId: string;
    skills: string[];
    logo: string;
    verifyUrl?: string;
    fullImage: string;
    type?: string;
  };
  index: number;
}

const CertificationCard = ({ certification, index }: CertificationCardProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="bg-white p-6 rounded-lg shadow-md card-hover cursor-pointer"
        >
          <div className="flex items-start">
            <div className="w-16 h-16 mr-4 flex-shrink-0">
              <img
                src={certification.logo}
                alt={certification.issuer}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-800">
                {certification.name}
              </h3>
              <p className="text-data font-medium">{certification.issuer}</p>

              <div className="flex items-center text-gray-600 mt-2 mb-3">
                <Calendar size={16} className="mr-2" />
                <span>Issued {certification.date}</span>
              </div>

              <p className="text-sm text-gray-600 mb-1">
                Credential ID: {certification.credentialId}
              </p>

              {certification.verifyUrl && (
                <a
                  href={certification.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-data text-sm flex items-center font-medium mt-1 hover:text-data-dark transition-colors"
                >
                  <ExternalLink size={14} className="mr-1" />
                  Verify credential
                </a>
              )}

              {certification.skills.length > 0 && (
                <div className="mt-4">
                  <p className="text-sm text-gray-600 mb-2">Skills:</p>
                  <div className="flex flex-wrap">
                    {certification.skills.map((skill, idx) => (
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
      </DialogTrigger>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>{certification.name}</DialogTitle>
          <DialogDescription>
            Issued by {certification.issuer} on {certification.date}
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <img
            src={certification.fullImage}
            alt={certification.name}
            className="w-full rounded-lg"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CertificationCard;
