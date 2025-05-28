import { Instagram, Facebook, Linkedin, StarHalf } from "lucide-react";
import logoPath from "@assets/342076980_734004598519479_3083377340864964193_n.jpeg";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <img 
              src={logoPath} 
              alt="Livy Events Logo" 
              className="h-10 w-auto mb-6"
            />
            <p className="text-gray-300 mb-6">
              Creating extraordinary celebrations and memorable experiences that exceed expectations.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-secondary/80 transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-secondary/80 transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-secondary/80 transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-secondary/80 transition-all"
              >
                <StarHalf className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-secondary transition-colors">Wedding Planning</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Corporate Events</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Private Parties</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Conferences</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Venue Selection</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-secondary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Portfolio</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Testimonials</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <div className="space-y-3 text-gray-300">
              <p>(555) 123-4567</p>
              <p>hello@livyevents.com</p>
              <p>San Francisco Bay Area</p>
              <p>Available 7 days a week</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Livy Events. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}
