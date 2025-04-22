
import { motion } from "framer-motion";
import ContactInfo from "./contact/ContactInfo";
import ContactForm from "./contact/ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-beige-light/30 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-data-dark to-data bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Interested in working together or have any questions? Feel free to reach out to me using the form below or connect with me on social media.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="transform hover:-translate-y-1 transition-transform duration-300"
          >
            <ContactInfo />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="transform hover:-translate-y-1 transition-transform duration-300"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
