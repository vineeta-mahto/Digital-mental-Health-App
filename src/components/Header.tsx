import { Brain, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-card/80 backdrop-blur-lg border-b border-border sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Brain className="h-8 w-8 text-primary mr-2" />
            <span className="text-xl font-semibold text-primary">WeCare</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-foreground/80 hover:text-primary transition-all duration-300 hover:scale-105">Home</a>
            <a href="#features" className="text-foreground/80 hover:text-primary transition-all duration-300 hover:scale-105">Features</a>
            <a href="#resources" className="text-foreground/80 hover:text-primary transition-all duration-300 hover:scale-105">Resources</a>
            <a href="#support" className="text-foreground/80 hover:text-primary transition-all duration-300 hover:scale-105">Support</a>
            <a href="#about" className="text-foreground/80 hover:text-primary transition-all duration-300 hover:scale-105">About</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Button variant="outline" className="hover:scale-105 transition-all duration-300">Sign In</Button>
            <Button className="hover:scale-105 transition-all duration-300 bg-primary hover:bg-primary/90">Get Started</Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card border-t border-border transition-colors duration-300">
              <a href="#home" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">Home</a>
              <a href="#features" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">Features</a>
              <a href="#resources" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">Resources</a>
              <a href="#support" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">Support</a>
              <a href="#about" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">About</a>
              <div className="flex flex-col space-y-2 px-3 py-2">
                <div className="flex justify-center mb-2">
                  <ThemeToggle />
                </div>
                <Button variant="outline" className="w-full">Sign In</Button>
                <Button className="w-full">Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}