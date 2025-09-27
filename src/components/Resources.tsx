import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { 
  BookOpen, 
  Video, 
  Headphones, 
  Download, 
  Clock, 
  Search,
  Star,
  Play
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Resources() {
  const [searchTerm, setSearchTerm] = useState("");

  const articles = [
    {
      title: "Managing Exam Stress: A Student's Guide",
      description: "Practical strategies to handle academic pressure and maintain mental wellness during exams.",
      readTime: "5 min read",
      category: "Stress Management",
      rating: 4.8,
      downloads: 1250
    },
    {
      title: "Building Healthy Sleep Habits in College",
      description: "Why sleep matters for mental health and how to establish better sleep routines.",
      readTime: "7 min read",
      category: "Sleep Health",
      rating: 4.9,
      downloads: 980
    },
    {
      title: "Dealing with Social Anxiety on Campus",
      description: "Understanding social anxiety and practical tips for building connections in college.",
      readTime: "6 min read",
      category: "Social Wellness",
      rating: 4.7,
      downloads: 1100
    }
  ];

  const videos = [
    {
      title: "5-Minute Breathing Exercise for Anxiety",
      description: "A guided breathing technique to help calm anxiety and reduce stress.",
      duration: "5:23",
      category: "Mindfulness",
      views: "15K views",
      thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=225&fit=crop",
      youtubeUrl: "https://www.youtube.com/watch?v=YRPh_GaiL8s"
    },
    {
      title: "Understanding Depression in Students",
      description: "A comprehensive look at recognizing and addressing depression in academic settings.",
      duration: "12:45",
      category: "Mental Health Education",
      views: "8.2K views",
      thumbnail: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=225&fit=crop",
      youtubeUrl: "https://www.youtube.com/watch?v=z-IR48Mb3W0"
    },
    {
      title: "Progressive Muscle Relaxation Technique",
      description: "Learn this effective relaxation method to reduce physical tension and mental stress.",
      duration: "8:30",
      category: "Relaxation",
      views: "12K views",
      thumbnail: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=225&fit=crop",
      youtubeUrl: "https://www.youtube.com/watch?v=1nZEdqcGVzo"
    }
  ];

  const audioResources = [
    {
      title: "Daily Meditation for Students",
      description: "A 10-minute guided meditation designed specifically for student life challenges.",
      duration: "10:00",
      category: "Meditation",
      downloads: 2500
    },
    {
      title: "Study Focus Soundscape",
      description: "Ambient sounds to help maintain concentration during study sessions.",
      duration: "60:00",
      category: "Focus",
      downloads: 1800
    },
    {
      title: "Sleep Stories for Better Rest",
      description: "Calming narratives to help you unwind and fall asleep more easily.",
      duration: "25:00",
      category: "Sleep",
      downloads: 3200
    }
  ];

  return (
    <section id="resources" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl mb-4 text-foreground">
            Wellness Resource Library
          </h2>
          <p className="text-xl text-foreground/80 mb-8">
            Explore our curated collection of articles, videos, and audio resources designed 
            specifically for student mental health and wellness.
          </p>
          
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              placeholder="Search resources..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <Tabs defaultValue="articles" className="w-full">
          <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-8">
            <TabsTrigger value="articles" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Articles
            </TabsTrigger>
            <TabsTrigger value="videos" className="flex items-center gap-2">
              <Video className="h-4 w-4" />
              Videos
            </TabsTrigger>
            <TabsTrigger value="audio" className="flex items-center gap-2">
              <Headphones className="h-4 w-4" />
              Audio
            </TabsTrigger>
          </TabsList>

          <TabsContent value="articles" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur-lg border border-primary/20 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {article.category}
                      </Badge>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm text-gray-600">{article.rating}</span>
                      </div>
                    </div>
                    <CardTitle className="text-lg">{article.title}</CardTitle>
                    <CardDescription>{article.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {article.readTime}
                        </div>
                        <div className="flex items-center gap-1">
                          <Download className="h-4 w-4" />
                          {article.downloads}
                        </div>
                      </div>
                    </div>
                    <Button className="w-full">Read Article</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="videos" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((video, index) => (
                <a href={video.youtubeUrl} target="_blank" rel="noopener noreferrer" key={index}>
                  <Card className="hover:shadow-lg transition-shadow duration-300 h-full">
                    <div className="relative">
                      <ImageWithFallback
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 rounded-t-lg flex items-center justify-center">
                        <div className="bg-white bg-opacity-90 rounded-full p-3">
                          <Play className="h-6 w-6 text-gray-800 ml-0.5" />
                        </div>
                      </div>
                      <Badge className="absolute top-2 right-2 bg-black bg-opacity-75">
                        {video.duration}
                      </Badge>
                    </div>
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {video.category}
                        </Badge>
                        <span className="text-xs text-gray-500">{video.views}</span>
                      </div>
                      <CardTitle className="text-lg">{video.title}</CardTitle>
                      <CardDescription>{video.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full">Watch Video</Button>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="audio" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {audioResources.map((audio, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {audio.category}
                      </Badge>
                      <span className="text-sm text-gray-500">{audio.duration}</span>
                    </div>
                    <CardTitle className="text-lg">{audio.title}</CardTitle>
                    <CardDescription>{audio.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <Download className="h-4 w-4" />
                        {audio.downloads} downloads
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button className="flex-1">
                        <Play className="h-4 w-4 mr-2" />
                        Play
                      </Button>
                      <Button variant="outline">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
