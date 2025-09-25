import { 
  Brain, 
  BarChart3, 
  BookOpen, 
  MessageCircle, 
  Phone, 
  Users, 
  Clock, 
  Shield 
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

export function Features() {
  const features = [
    {
      icon: Brain,
      title: "Mental Health Assessment",
      description: "Quick, scientifically-backed assessments to understand your mental wellness and get personalized recommendations.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: BarChart3,
      title: "Mood Tracking",
      description: "Track your daily mood, identify patterns, and gain insights into factors affecting your mental health.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: BookOpen,
      title: "Resource Library",
      description: "Access curated articles, videos, and self-help tools specifically designed for student mental health.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: MessageCircle,
      title: "Peer Support Chat",
      description: "Connect with other students in safe, moderated spaces to share experiences and support each other.",
      color: "bg-orange-100 text-orange-600"
    },
    {
      icon: Phone,
      title: "Crisis Support",
      description: "Immediate access to crisis helplines and emergency contacts when you need urgent support.",
      color: "bg-red-100 text-red-600"
    },
    {
      icon: Users,
      title: "Counselor Connect",
      description: "Book appointments with licensed mental health professionals who understand student life.",
      color: "bg-teal-100 text-teal-600"
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Access support resources and tools anytime, anywhere. Mental health doesn't follow a schedule.",
      color: "bg-indigo-100 text-indigo-600"
    },
    {
      icon: Shield,
      title: "Complete Privacy",
      description: "Your data is encrypted and protected. Anonymous options available for sensitive conversations.",
      color: "bg-pink-100 text-pink-600"
    }
  ];

  return (
    <section id="features" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl mb-6 text-foreground">
            Comprehensive Mental Health Support
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Our platform offers a complete suite of tools and resources designed specifically 
            for the unique challenges faced by students in higher education.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-lg border border-primary/20 shadow-md hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:scale-105 hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-4`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground/70">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}