import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Alert, AlertDescription } from "./ui/alert";
import { 
  Phone, 
  MessageCircle, 
  AlertTriangle, 
  Clock, 
  MapPin, 
  Heart,
  Shield,
  Users
} from "lucide-react";

export function CrisisSupport() {
  const emergencyContacts = [
    {
      name: "National Crisis Helpline",
      phone: "988",
      description: "24/7 free and confidential support for people in distress",
      availability: "24/7"
    },
    {
      name: "Crisis Text Line",
      phone: "Text HOME to 741741",
      description: "Free, 24/7 support via text message",
      availability: "24/7"
    },
    {
      name: "Student Support Services",
      phone: "(555) 123-4567",
      description: "Campus-specific mental health crisis support",
      availability: "8 AM - 10 PM"
    }
  ];

  const localResources = [
    {
      name: "Campus Counseling Center",
      address: "Student Services Building, Room 101",
      phone: "(555) 123-4567",
      hours: "Mon-Fri: 8:00 AM - 6:00 PM"
    },
    {
      name: "Community Mental Health Center",
      address: "123 Main Street, City",
      phone: "(555) 987-6543",
      hours: "Mon-Sat: 9:00 AM - 8:00 PM"
    },
    {
      name: "Emergency Room",
      address: "City General Hospital, 456 Health Ave",
      phone: "(555) 911-0000",
      hours: "24/7"
    }
  ];

  const warningSignsData = [
    "Thoughts of suicide or self-harm",
    "Overwhelming feelings of hopelessness",
    "Severe anxiety or panic attacks",
    "Inability to cope with daily activities",
    "Substance abuse as coping mechanism",
    "Social isolation from friends and family",
    "Dramatic mood swings",
    "Talking about feeling trapped or in unbearable pain"
  ];

  return (
    <section id="support" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <AlertTriangle className="h-8 w-8 text-red-500" />
            <h2 className="text-3xl lg:text-4xl text-foreground">
              Crisis Support
            </h2>
          </div>
          <p className="text-xl text-foreground/80">
            If you're experiencing a mental health crisis, you're not alone. 
            Help is available 24/7.
          </p>
        </div>

        {/* Emergency Alert */}
        <Alert className="mb-8 border-red-500/30 bg-red-500/10 backdrop-blur-sm">
          <AlertTriangle className="h-4 w-4 text-red-500" />
          <AlertDescription className="text-red-300 dark:text-red-200">
            <strong>If you're having thoughts of suicide or self-harm, please reach out immediately.</strong> 
            Call 988 (National Crisis Lifeline) or go to your nearest emergency room. 
            Your life matters, and help is available.
          </AlertDescription>
        </Alert>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Emergency Contacts */}
          <Card className="border-red-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-700">
                <Phone className="h-5 w-5" />
                Emergency Contacts
              </CardTitle>
              <CardDescription>
                Immediate help when you need it most
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {emergencyContacts.map((contact, index) => (
                <div key={index} className="border border-red-200 rounded-lg p-4 bg-white">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-lg text-red-700">{contact.name}</h4>
                    <Badge className="bg-red-100 text-red-800 flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {contact.availability}
                    </Badge>
                  </div>
                  <p className="text-gray-600 mb-3 text-sm">{contact.description}</p>
                  <div className="flex gap-2">
                    <Button className="bg-red-600 hover:bg-red-700 flex-1">
                      <Phone className="h-4 w-4 mr-2" />
                      {contact.phone}
                    </Button>
                    {contact.name === "Crisis Text Line" && (
                      <Button variant="outline" className="border-red-200 text-red-700">
                        <MessageCircle className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Local Resources */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-blue-600" />
                Local Resources
              </CardTitle>
              <CardDescription>
                In-person support in your area
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {localResources.map((resource, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <h4 className="text-lg mb-2">{resource.name}</h4>
                  <div className="space-y-1 text-sm text-gray-600 mb-3">
                    <p className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {resource.address}
                    </p>
                    <p className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      {resource.hours}
                    </p>
                  </div>
                  <Button variant="outline" className="w-full">
                    <Phone className="h-4 w-4 mr-2" />
                    {resource.phone}
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Warning Signs and Self-Care */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Warning Signs */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-yellow-600" />
                Warning Signs to Watch For
              </CardTitle>
              <CardDescription>
                Recognizing when you or someone else needs help
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {warningSignsData.map((sign, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0" />
                    {sign}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Immediate Coping Strategies */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-green-600" />
                Immediate Coping Strategies
              </CardTitle>
              <CardDescription>
                Quick techniques to help in crisis moments
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                <Shield className="h-5 w-5 text-green-600 mt-0.5" />
                <div>
                  <h5 className="text-sm mb-1">Ground Yourself</h5>
                  <p className="text-xs text-gray-600">Name 5 things you can see, 4 you can touch, 3 you can hear, 2 you can smell, 1 you can taste</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                <Heart className="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <h5 className="text-sm mb-1">Breathing Exercise</h5>
                  <p className="text-xs text-gray-600">Breathe in for 4 counts, hold for 4, breathe out for 6. Repeat until you feel calmer</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                <Users className="h-5 w-5 text-purple-600 mt-0.5" />
                <div>
                  <h5 className="text-sm mb-1">Reach Out</h5>
                  <p className="text-xs text-gray-600">Call a trusted friend, family member, or counselor. You don't have to face this alone</p>
                </div>
              </div>
              <Button className="w-full bg-green-600 hover:bg-green-700">
                Access Guided Coping Tools
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}