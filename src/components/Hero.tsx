import { Button } from "./ui/button";
import { Heart, Shield, Users } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section id="home" className="relative py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-float">
            <h1 className="text-4xl lg:text-6xl mb-6 text-foreground">
              Your Mental Health,
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient"> Our Priority</span>
            </h1>
            <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
              A comprehensive digital platform designed specifically for students in higher education. 
              Get personalized support, track your wellness journey, and connect with resources that matter.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="text-lg px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/25">
                Start Your Journey
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3 border-primary/50 hover:bg-primary/10 transform hover:scale-105 transition-all duration-300">
                Learn More
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3 transform hover:scale-105 transition-all duration-300">
                <div className="bg-blue-500/20 p-2 rounded-full backdrop-blur-sm border border-blue-500/30">
                  <Heart className="h-5 w-5 text-blue-400" />
                </div>
                <span className="text-sm text-foreground/70">24/7 Support Available</span>
              </div>
              <div className="flex items-center space-x-3 transform hover:scale-105 transition-all duration-300">
                <div className="bg-green-500/20 p-2 rounded-full backdrop-blur-sm border border-green-500/30">
                  <Shield className="h-5 w-5 text-green-400" />
                </div>
                <span className="text-sm text-foreground/70">Completely Confidential</span>
              </div>
              <div className="flex items-center space-x-3 transform hover:scale-105 transition-all duration-300">
                <div className="bg-purple-500/20 p-2 rounded-full backdrop-blur-sm border border-purple-500/30">
                  <Users className="h-5 w-5 text-purple-400" />
                </div>
                <span className="text-sm text-foreground/70">Peer Support Network</span>
              </div>
            </div>
          </div>

          <div className="relative animate-float animation-delay-2000">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1620147512372-9e00421556bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW50YWwlMjBoZWFsdGglMjBzdXBwb3J0JTIwc3R1ZGVudHN8ZW58MXx8fHwxNzU4NzA2MTQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Students receiving mental health support"
              className="w-full h-96 object-cover rounded-2xl shadow-2xl border border-primary/20 hover:scale-105 transition-all duration-500"
            />
            <div className="absolute -bottom-6 -right-6 bg-card/90 backdrop-blur-lg p-6 rounded-xl shadow-lg border border-primary/20 hover:scale-105 transition-all duration-300">
              <div className="text-center">
                <p className="text-2xl text-primary mb-1">95%</p>
                <p className="text-sm text-foreground/60">Student Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}