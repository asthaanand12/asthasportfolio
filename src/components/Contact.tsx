import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-beige-light/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-data-dark">Get In Touch</h2>
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
          >
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-beige rounded-full p-3 mr-4">
                    <Mail className="text-data-dark" size={20} />
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-medium">Email</h4>
                    <a 
                      href="mailto:asthaanand1211@gmail.com" 
                      className="text-data hover:text-data-dark transition-colors"
                    >
                      asthaanand1211@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-beige rounded-full p-3 mr-4">
                    <Phone className="text-data-dark" size={20} />
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-medium">Phone</h4>
                    <a 
                      href="tel:+916207513926" 
                      className="text-data hover:text-data-dark transition-colors"
                    >
                      +91 6207513926
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-beige rounded-full p-3 mr-4">
                    <MapPin className="text-data-dark" size={20} />
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-medium">Location</h4>
                    <p className="text-gray-600">
                      Ranchi, Jharkhand, India
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Connect With Me</h3>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="bg-beige hover:bg-beige-dark transition-colors rounded-full p-3"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="text-data-dark" size={24} />
                  </a>
                  <a 
                    href="#" 
                    className="bg-beige hover:bg-beige-dark transition-colors rounded-full p-3"
                    aria-label="GitHub"
                  >
                    <Github className="text-data-dark" size={24} />
                  </a>
                  <a 
                    href="#" 
                    className="bg-beige hover:bg-beige-dark transition-colors rounded-full p-3"
                    aria-label="Twitter"
                  >
                    <Twitter className="text-data-dark" size={24} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Send Me a Message</h3>
              
              {submitted ? (
                <div className="bg-green-50 border border-green-200 text-green-700 rounded-md p-4 mb-6">
                  Thank you for your message! I'll get back to you as soon as possible.
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      Your Name
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full p-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-data/50"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      Your Email
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full p-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-data/50"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                      Subject
                    </label>
                    <input 
                      type="text" 
                      id="subject" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full p-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-data/50"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                      Message
                    </label>
                    <textarea 
                      id="message" 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full p-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-data/50"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className={`w-full bg-data hover:bg-data-dark text-white font-medium py-3 px-4 rounded-md transition-colors ${
                      isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
