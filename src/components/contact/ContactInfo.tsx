
import { Mail, Phone, MapPin } from "lucide-react";

const ContactInfo = () => {
  return (
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
    </div>
  );
};

export default ContactInfo;
