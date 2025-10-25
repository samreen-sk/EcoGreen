import { Leaf, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-[hsl(var(--eco-green-dark))] to-[hsl(var(--eco-green))] text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-primary-foreground/20 rounded-lg">
                <Leaf className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold">EcoGreen</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Together for a cleaner tomorrow. Making waste management smarter, one citizen at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a href="#home" className="hover:text-primary-foreground transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#study" className="hover:text-primary-foreground transition-colors duration-300">
                  Study Modules
                </a>
              </li>
              <li>
                <a href="#store" className="hover:text-primary-foreground transition-colors duration-300">
                  Store
                </a>
              </li>
              <li>
                <a href="#rewards" className="hover:text-primary-foreground transition-colors duration-300">
                  Rewards
                </a>
              </li>
              <li>
                <a href="#community" className="hover:text-primary-foreground transition-colors duration-300">
                  Community
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors duration-300">
                  Waste Guide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors duration-300">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors duration-300">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors duration-300">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>support@ecogreen.in</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>1800-ECO-GREEN</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>New Delhi, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/80">
          <p>&copy; {currentYear} EcoGreen. All rights reserved. Building a sustainable future together.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
