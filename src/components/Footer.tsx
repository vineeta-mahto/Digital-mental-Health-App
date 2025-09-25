import { Brain, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "./ui/button";

export function Footer() {
  const footerLinks = {
    support: [
      { label: "Crisis Support", href: "#support" },
      { label: "Contact Counselor", href: "#counselor" },
      { label: "Emergency Contacts", href: "#emergency" },
      { label: "FAQ", href: "#faq" }
    ],
    resources: [
      { label: "Article Library", href: "#articles" },
      { label: "Video Content", href: "#videos" },
      { label: "Audio Resources", href: "#audio" },
      { label: "Assessment Tools", href: "#assessment" }
    ],
    about: [
      { label: "Our Mission", href: "#mission" },
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Terms of Service", href: "#terms" },
      { label: "Accessibility", href: "#accessibility" }
    ]
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <Brain className="h-8 w-8 text-blue-400 mr-2" />
              <span className="text-xl font-semibold">WeCare</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Supporting student mental health through comprehensive digital resources, 
              professional guidance, and peer community connections.
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>Crisis Line: 988 (24/7)</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>support@wecare.edu</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Available on all campuses</span>
              </div>
            </div>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-lg mb-4">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About Links */}
          <div>
            <h4 className="text-lg mb-4">About</h4>
            <ul className="space-y-2">
              {footerLinks.about.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media and Newsletter */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-300">Follow us:</span>
              <div className="flex space-x-3">
                <Button size="sm" variant="ghost" className="text-gray-300 hover:text-white p-2">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="ghost" className="text-gray-300 hover:text-white p-2">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="ghost" className="text-gray-300 hover:text-white p-2">
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="ghost" className="text-gray-300 hover:text-white p-2">
                  <Linkedin className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-sm text-gray-400">
                © 2025 WeCare. All rights reserved. | 
                <span className="text-blue-400"> Developed for SIH 2025</span>
              </p>
            </div>
          </div>
        </div>

        {/* Crisis Notice */}
        <div className="mt-6 p-4 bg-red-900 bg-opacity-50 rounded-lg border border-red-800">
          <div className="flex items-center justify-center gap-2 text-center">
            <Phone className="h-4 w-4 text-red-400" />
            <span className="text-sm text-red-200">
              <strong>Crisis Support:</strong> If you're in immediate danger, call 911. 
              For mental health crises, call or text 988 for free, confidential support 24/7.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}