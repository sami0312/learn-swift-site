import { Facebook, Twitter, Instagram, Youtube, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">
                DriveMaster<span className="text-secondary">Pro</span>
              </h3>
              <p className="text-background/80 leading-relaxed">
                Leading driving school with over 10 years of experience helping students pass their driving test safely and confidently.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-background/60 hover:text-secondary transition-colors duration-300">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-background/60 hover:text-secondary transition-colors duration-300">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-background/60 hover:text-secondary transition-colors duration-300">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-background/60 hover:text-secondary transition-colors duration-300">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-background/80 hover:text-secondary transition-colors duration-300">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#courses" className="text-background/80 hover:text-secondary transition-colors duration-300">
                    Our Courses
                  </a>
                </li>
                <li>
                  <a href="#resources" className="text-background/80 hover:text-secondary transition-colors duration-300">
                    Learning Resources
                  </a>
                </li>
                <li>
                  <a href="#support" className="text-background/80 hover:text-secondary transition-colors duration-300">
                    Help & Support
                  </a>
                </li>
                <li>
                  <a href="#" className="text-background/80 hover:text-secondary transition-colors duration-300">
                    Book Online
                  </a>
                </li>
              </ul>
            </div>

            {/* Courses */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Our Courses</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-background/80 hover:text-secondary transition-colors duration-300">
                    Manual Lessons
                  </a>
                </li>
                <li>
                  <a href="#" className="text-background/80 hover:text-secondary transition-colors duration-300">
                    Automatic Lessons
                  </a>
                </li>
                <li>
                  <a href="#" className="text-background/80 hover:text-secondary transition-colors duration-300">
                    Intensive Courses
                  </a>
                </li>
                <li>
                  <a href="#" className="text-background/80 hover:text-secondary transition-colors duration-300">
                    Refresher Courses
                  </a>
                </li>
                <li>
                  <a href="#" className="text-background/80 hover:text-secondary transition-colors duration-300">
                    Pass Plus
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Contact Us</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-secondary" />
                  <span className="text-background/80">020 3051 4245</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-secondary" />
                  <span className="text-background/80">info@drivemasterpro.co.uk</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-4 w-4 text-secondary mt-1" />
                  <span className="text-background/80">
                    London & Greater London<br />
                    Free pickup & drop-off
                  </span>
                </div>
              </div>
              
              <div className="pt-4">
                <p className="text-sm text-background/60 mb-2">Business Hours:</p>
                <p className="text-sm text-background/80">Mon-Fri: 9:00 AM - 6:00 PM</p>
                <p className="text-sm text-background/80">Saturday: 9:00 AM - 4:00 PM</p>
                <p className="text-sm text-background/80">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Methods & Certifications */}
        <div className="border-t border-background/20 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="text-center lg:text-left">
              <p className="text-sm text-background/80 mb-2">We Accept:</p>
              <div className="flex gap-4 justify-center lg:justify-start">
                <div className="bg-background/10 px-3 py-1 rounded text-xs font-medium">VISA</div>
                <div className="bg-background/10 px-3 py-1 rounded text-xs font-medium">MASTERCARD</div>
                <div className="bg-background/10 px-3 py-1 rounded text-xs font-medium">PAYPAL</div>
                <div className="bg-background/10 px-3 py-1 rounded text-xs font-medium">BANK TRANSFER</div>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-sm text-background/80 mb-2">Approved By:</p>
              <div className="flex gap-4 justify-center">
                <div className="bg-secondary/20 px-3 py-1 rounded text-xs font-bold text-secondary">DVSA</div>
                <div className="bg-primary/20 px-3 py-1 rounded text-xs font-bold text-primary">APPROVED</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-background/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-background/60 text-center md:text-left">
              © 2024 DriveMasterPro. All rights reserved.
            </div>
            
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="#" className="text-background/60 hover:text-secondary transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-background/60 hover:text-secondary transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-background/60 hover:text-secondary transition-colors duration-300">
                Refund Policy
              </a>
              <a href="#" className="text-background/60 hover:text-secondary transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;