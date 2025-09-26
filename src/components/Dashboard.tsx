import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";
import { 
  Calendar, 
  TrendingUp, 
  Heart, 
  BookOpen, 
  MessageCircle,
  Activity,
  Target,
  Award
} from "lucide-react";

export function Dashboard() {
  const [moodData] = useState([
    { day: "Mon", mood: 7 },
    { day: "Tue", mood: 6 },
    { day: "Wed", mood: 8 },
    { day: "Thu", mood: 5 },
    { day: "Fri", mood: 9 },
    { day: "Sat", mood: 8 },
    { day: "Sun", mood: 7 }
  ]);

  const upcomingActivities = [
    { title: "Mindfulness Session", time: "2:00 PM", type: "meditation" },
    { title: "Study Group Chat", time: "4:30 PM", type: "peer-support" },
    { title: "Counselor Appointment", time: "Tomorrow 10:00 AM", type: "counseling" }
  ];

  const weeklyGoals = [
    { title: "Daily Mood Check-in", progress: 85, completed: 6, total: 7 },
    { title: "Mindfulness Practice", progress: 60, completed: 3, total: 5 },
    { title: "Resource Reading", progress: 40, completed: 2, total: 5 }
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl mb-4 text-foreground">
            Your Personal Wellness Dashboard
          </h2>
          <p className="text-xl text-foreground/80">
            Track your progress, manage your wellness journey, and stay connected with support resources.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Dashboard */}
          <div className="lg:col-span-2 space-y-6">
            {/* Mood Tracking Chart */}
            <Card className="bg-card/50 backdrop-blur-lg border border-primary/20 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-blue-600" />
                  Weekly Mood Trend
                </CardTitle>
                <CardDescription>Your mood patterns over the past week</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-end justify-between h-32 gap-2">
                  {moodData.map((data, index) => (
                    <div key={index} className="flex flex-col items-center flex-1">
                      <div 
                        className="bg-blue-500 rounded-t w-full"
                        style={{ height: `${(data.mood / 10) * 100}%` }}
                      />
                      <span className="text-xs text-gray-500 mt-2">{data.day}</span>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-4">
                  <span>Poor (1)</span>
                  <span>Excellent (10)</span>
                </div>
              </CardContent>
            </Card>

            {/* Weekly Goals */}
            <Card className="bg-card/50 backdrop-blur-lg border border-primary/20 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-green-600" />
                  Weekly Wellness Goals
                </CardTitle>
                <CardDescription>Track your wellness activities and build healthy habits</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {weeklyGoals.map((goal, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">{goal.title}</span>
                      <span className="text-sm text-gray-500">{goal.completed}/{goal.total}</span>
                    </div>
                    <Progress value={goal.progress} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-card/50 backdrop-blur-lg border border-primary/20 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Access your most-used tools and features</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Button variant="outline" className="flex flex-col items-center p-4 h-auto hover:scale-105 transition-all duration-300 border-primary/30 hover:bg-primary/10">
                    <Heart className="h-6 w-6 mb-2 text-red-400" />
                    <span className="text-xs">Log Mood</span>
                  </Button>
                  <Button variant="outline" className="flex flex-col items-center p-4 h-auto hover:scale-105 transition-all duration-300 border-primary/30 hover:bg-primary/10">
                    <Activity className="h-6 w-6 mb-2 text-blue-400" />
                    <span className="text-xs">Assessment</span>
                  </Button>
                  <Button variant="outline" className="flex flex-col items-center p-4 h-auto hover:scale-105 transition-all duration-300 border-primary/30 hover:bg-primary/10">
                    <BookOpen className="h-6 w-6 mb-2 text-green-400" />
                    <span className="text-xs">Resources</span>
                  </Button>
                  <Button variant="outline" className="flex flex-col items-center p-4 h-auto hover:scale-105 transition-all duration-300 border-primary/30 hover:bg-primary/10">
                    <MessageCircle className="h-6 w-6 mb-2 text-purple-400" />
                    <span className="text-xs">Chat</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Today's Summary */}
            <Card className="bg-card/50 backdrop-blur-lg border border-primary/20 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-purple-600" />
                  Today's Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Mood logged</span>
                  <Badge variant="secondary">8/10</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Activities completed</span>
                  <Badge variant="secondary">2/3</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Wellness streak</span>
                  <Badge className="bg-green-100 text-green-800">5 days</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Activities */}
            <Card className="bg-card/50 backdrop-blur-lg border border-primary/20 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
              <CardHeader>
                <CardTitle>Upcoming Activities</CardTitle>
                <CardDescription>Your scheduled wellness activities</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {upcomingActivities.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="text-sm">{activity.title}</p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {activity.type}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="bg-card/50 backdrop-blur-lg border border-primary/20 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-yellow-600" />
                  Recent Achievements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3 p-2 bg-yellow-50 rounded-lg">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                    🔥
                  </div>
                  <div>
                    <p className="text-sm">5-Day Streak!</p>
                    <p className="text-xs text-gray-500">Consistent mood logging</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-2 bg-blue-50 rounded-lg">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    📚
                  </div>
                  <div>
                    <p className="text-sm">Wellness Explorer</p>
                    <p className="text-xs text-gray-500">Read 5 articles</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
