import { useState } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-primary">
              DriveMaster<span className="text-secondary">Pro</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors duration-200">
              Home
            </a>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-foreground hover:text-primary transition-colors duration-200">
                Courses & Prices <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-popover">
                <DropdownMenuItem>
                  <a href="#automatic" className="w-full">Automatic Courses</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="#manual" className="w-full">Manual Courses</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="#courses" className="w-full">All Courses</a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <a href="#resources" className="text-foreground hover:text-primary transition-colors duration-200">
              Resources
            </a>
            <a href="#areas" className="text-foreground hover:text-primary transition-colors duration-200">
              Areas Covered
            </a>
            <a href="#support" className="text-foreground hover:text-primary transition-colors duration-200">
              Help & Support
            </a>
          </nav>

          {/* Phone and CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center text-primary font-semibold">
              <Phone className="h-4 w-4 mr-2" />
              <span>020 3051 4245</span>
            </div>
            <Button className="btn-secondary">Book Online</Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-foreground hover:text-primary transition-colors duration-200">
                Home
              </a>
              <a href="#courses" className="text-foreground hover:text-primary transition-colors duration-200">
                Courses & Prices
              </a>
              <a href="#resources" className="text-foreground hover:text-primary transition-colors duration-200">
                Resources
              </a>
              <a href="#areas" className="text-foreground hover:text-primary transition-colors duration-200">
                Areas Covered
              </a>
              <a href="#support" className="text-foreground hover:text-primary transition-colors duration-200">
                Help & Support
              </a>
              <div className="flex items-center text-primary font-semibold pt-2">
                <Phone className="h-4 w-4 mr-2" />
                <span>020 3051 4245</span>
              </div>
              <Button className="btn-secondary w-full">Book Online</Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;