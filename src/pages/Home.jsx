import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  BookOpen, 
  Clock, 
  Trophy, 
  TrendingUp, 
  Star,
  Play,
  Calendar,
  Brain,
  Target,
  Award,
  Zap
} from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const Home = () => {
  const currentCourses = [
    {
      id: 1,
      title: "Advanced React Patterns",
      progress: 75,
      timeLeft: "2 hours",
      nextLesson: "Custom Hooks Deep Dive",
      category: "Frontend Development"
    },
    {
      id: 2,
      title: "Machine Learning Fundamentals", 
      progress: 45,
      timeLeft: "4 hours",
      nextLesson: "Neural Network Basics",
      category: "AI & ML"
    },
    {
      id: 3,
      title: "UI/UX Design Principles",
      progress: 90,
      timeLeft: "30 minutes", 
      nextLesson: "Final Project Review",
      category: "Design"
    }
  ];

  const achievements = [
    { title: "Week Streak", count: 7, icon: Trophy, color: "text-amber-500" },
    { title: "Courses Completed", count: 3, icon: Star, color: "text-blue-500" },
    { title: "Study Hours", count: 24, icon: Clock, color: "text-green-500" },
    { title: "AI Interactions", count: 45, icon: Brain, color: "text-purple-500" }
  ];

  const quickActions = [
    {
      title: "Continue Learning",
      description: "Pick up where you left off",
      icon: Play,
      link: "/courses",
      variant: "default"
    },
    {
      title: "AI Tutor",
      description: "Get instant help with studies",
      icon: Brain,
      link: "/tutor",
      variant: "secondary"
    },
    {
      title: "Take Quiz",
      description: "Test your knowledge",
      icon: Target,
      link: "/quiz",
      variant: "outline"
    },
    {
      title: "View Progress",
      description: "Track your learning journey",
      icon: TrendingUp,
      link: "/analytics",
      variant: "outline"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-background">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="bg-gradient-ai rounded-xl p-6 text-white mb-8 shadow-ai">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Welcome back! 👋</h1>
              <p className="opacity-90 text-lg">Ready to continue your learning journey today?</p>
            </div>
            <div className="mt-4 md:mt-0">
              <Link to="/courses">
                <Button variant="secondary" size="lg" className="shadow-lg">
                  <Play className="h-5 w-5 mr-2" />
                  Continue Learning
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <Card key={index} className="text-center hover:shadow-hover transition-all duration-300 border-0 bg-card/60 backdrop-blur">
                <CardContent className="pt-6">
                  <Icon className={`h-8 w-8 mx-auto mb-3 ${achievement.color}`} />
                  <div className="text-2xl font-bold text-foreground">{achievement.count}</div>
                  <div className="text-sm text-muted-foreground">{achievement.title}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Continue Learning */}
          <div className="lg:col-span-2">
            <Card className="shadow-card border-0 bg-card/80 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <span>Continue Learning</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {currentCourses.map((course) => (
                  <div key={course.id} className="border border-border/50 rounded-lg p-4 hover:shadow-hover transition-all duration-300 bg-background/50">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground">{course.title}</h3>
                        <p className="text-sm text-muted-foreground mb-1">{course.category}</p>
                        <p className="text-sm text-muted-foreground">Next: {course.nextLesson}</p>
                      </div>
                      <Link to={`/courses/${course.id}`}>
                        <Button variant="default" size="sm" className="shadow-ai">
                          <Play className="h-4 w-4 mr-1" />
                          Continue
                        </Button>
                      </Link>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-foreground font-medium">{course.progress}% Complete</span>
                        <span className="flex items-center text-muted-foreground">
                          <Clock className="h-3 w-3 mr-1" />
                          {course.timeLeft} left
                        </span>
                      </div>
                      <Progress value={course.progress} className="h-2" />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions & Goals */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="shadow-card border-0 bg-card/80 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Zap className="h-5 w-5 text-secondary" />
                  <span>Quick Actions</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {quickActions.map((action, index) => {
                  const Icon = action.icon;
                  return (
                    <Link key={index} to={action.link}>
                      <Button 
                        variant={action.variant} 
                        className="w-full justify-start h-auto p-3 text-left"
                      >
                        <div className="flex items-center space-x-3">
                          <Icon className="h-5 w-5" />
                          <div>
                            <div className="font-medium">{action.title}</div>
                            <div className="text-xs opacity-80">{action.description}</div>
                          </div>
                        </div>
                      </Button>
                    </Link>
                  );
                })}
              </CardContent>
            </Card>

            {/* Weekly Goals */}
            <Card className="shadow-card border-0 bg-card/80 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5 text-success" />
                  <span>Weekly Goals</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Study 20 hours</span>
                      <span className="text-sm font-bold text-success">16/20h</span>
                    </div>
                    <Progress value={80} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Complete 3 modules</span>
                      <span className="text-sm font-bold text-primary">2/3</span>
                    </div>
                    <Progress value={67} className="h-2" />
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Take 5 quizzes</span>
                      <span className="text-sm font-bold text-secondary">3/5</span>
                    </div>
                    <Progress value={60} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Upcoming Sessions */}
        <Card className="shadow-card border-0 bg-card/80 backdrop-blur mt-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-primary" />
              <span>Upcoming Sessions</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center justify-between p-4 bg-accent/50 rounded-lg border border-border/50">
                <div>
                  <div className="font-medium text-foreground">React Advanced Concepts</div>
                  <div className="text-sm text-muted-foreground">Live Q&A Session</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-foreground">Today, 3:00 PM</div>
                  <div className="text-xs text-muted-foreground">30 minutes</div>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-accent/50 rounded-lg border border-border/50">
                <div>
                  <div className="font-medium text-foreground">ML Study Group</div>
                  <div className="text-sm text-muted-foreground">Peer Discussion</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-foreground">Tomorrow, 7:00 PM</div>
                  <div className="text-xs text-muted-foreground">60 minutes</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Home;