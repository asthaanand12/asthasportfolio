
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ZoomableImage from "./ZoomableImage";

const references = [
  {
    name: "Mr. Vikash Kumar Agarwal",
    title: "Head of Department",
    department: "Computer Application and Cyber Security",
    institution: "Jharkhand Raksha Shakti University",
    letter: [
      "/lovable-uploads/df8744f1-2ee3-473d-a409-31c833925700.png",
      "/lovable-uploads/8f35c6bc-7753-4304-8e35-cab2b417f0fb.png",
    ],
    pdf: null,
  },
  {
    name: "Dr. Priya Namrata Topno",
    title: "Placement Cell In-Charge",
    institution: "Jharkhand Raksha Shakti University",
    letter: "/lovable-uploads/881b3de7-3dd1-45b8-b889-f6b12575a9e1.png",
    pdf: null,
  }
];

const References = () => {
  return (
    <section id="references" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="section-heading">Letters of Reference</h2>
          <p className="text-gray-600 mt-4">
            Professional recommendations from my professors
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {references.map((ref, index) => (
            <motion.div
              key={ref.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <div className="bg-white p-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-semibold text-gray-800">{ref.name}</h3>
                    <p className="text-data font-medium">{ref.title}</p>
                    {ref.department && (
                      <p className="text-gray-600">{ref.department}</p>
                    )}
                    <p className="text-gray-600">{ref.institution}</p>
                    <button className="mt-4 text-blue-600 hover:text-blue-700">
                      View Reference Letter
                    </button>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl w-[90vw]">
                  <DialogHeader>
                    <DialogTitle>Reference Letter from {ref.name}</DialogTitle>
                  </DialogHeader>
                  <div className="mt-4">
                    {/* Handle both single string and array for letter */}
                    {ref.letter &&
                      (Array.isArray(ref.letter) ? (
                        <ZoomableImage
                          srcList={ref.letter}
                          alt={`Reference letter from ${ref.name}`}
                        />
                      ) : (
                        <ZoomableImage
                          src={ref.letter}
                          alt={`Reference letter from ${ref.name}`}
                        />
                      ))}
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default References;
