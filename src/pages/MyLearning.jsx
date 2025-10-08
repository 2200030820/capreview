import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Play, 
  Clock, 
  BookOpen, 
  CheckCircle,
  Trophy,
  Calendar,
  Download,
  Star,
  RotateCcw,
  Bookmark
} from "lucide-react";

const MyLearning = () => {
  const objectives = [
    "Display user's enrolled courses and learning progress",
    "Show completed courses and earned certificates",
    "Provide quick access to continue learning sessions",
    "Present learning statistics and achievements",
    "Enable course management and study planning"
  ];

  const todos = {
    ux: [
      "Design progress tracking dashboard layout",
      "Create course completion celebration UI",
      "Design learning streak and achievement displays",
      "Plan study schedule and reminder interface"
    ],
    data: [
      "Fetch user's enrolled courses and progress",
      "Load completion data and certificates",
      "Get learning analytics and time tracking",
      "Retrieve achievement data and milestones"
    ],
    interactions: [
      "Continue learning functionality",
      "Course completion marking",
      "Achievement unlock animations",
      "Study session timer and tracking"
    ],
    animations: [
      "Progress bar completion animations",
      "Achievement celebration effects",
      "Course card hover states",
      "Learning streak visual indicators"
    ],
    validations: [
      "Progress calculation accuracy",
      "Course access permissions",
      "Achievement criteria verification",
      "Study time tracking validation"
    ]
  };

  const inProgressCourses = [
    {
      id: 1,
      title: "Advanced React Patterns",
      instructor: "Sarah Johnson",
      progress: 75,
      totalLessons: 24,
      completedLessons: 18,
      timeLeft: "2 hours",
      lastAccessed: "2 hours ago",
      nextLesson: "Custom Hooks Deep Dive",
      certificate: false
    },
    {
      id: 2,
      title: "Machine Learning Fundamentals",
      instructor: "Dr. Michael Chen", 
      progress: 45,
      totalLessons: 32,
      completedLessons: 14,
      timeLeft: "8 hours",
      lastAccessed: "1 day ago",
      nextLesson: "Neural Network Basics",
      certificate: false
    },
    {
      id: 3,
      title: "UI/UX Design Principles",
      instructor: "Emily Rodriguez",
      progress: 90,
      totalLessons: 16,
      completedLessons: 14,
      timeLeft: "30 minutes",
      lastAccessed: "3 hours ago", 
      nextLesson: "Final Project Review",
      certificate: false
    }
  ];

  const completedCourses = [
    {
      id: 4,
      title: "JavaScript ES6+ Masterclass",
      instructor: "Alex Kumar",
      completedDate: "2024-01-15",
      duration: "12 hours",
      certificate: true,
      rating: 5
    },
    {
      id: 5,
      title: "CSS Grid & Flexbox Complete Guide",
      instructor: "Lisa Park",
      completedDate: "2024-01-08",
      duration: "8 hours", 
      certificate: true,
      rating: 4
    },
    {
      id: 6,
      title: "Git & GitHub for Beginners",
      instructor: "James Wilson",
      completedDate: "2023-12-22",
      duration: "6 hours",
      certificate: true,
      rating: 5
    }
  ];

  const learningStats = [
    { label: "Courses in Progress", value: 3, icon: BookOpen },
    { label: "Courses Completed", value: 6, icon: CheckCircle },
    { label: "Learning Streak", value: 12, icon: Trophy },
    { label: "Study Hours This Week", value: 18, icon: Clock }
  ];

  const achievements = [
    { title: "First Course Complete", description: "Completed your first course", earned: true, date: "Dec 22, 2023" },
    { title: "Week Warrior", description: "Studied for 7 consecutive days", earned: true, date: "Jan 10, 2024" },
    { title: "Speed Learner", description: "Completed a course in under a week", earned: true, date: "Jan 8, 2024" },
    { title: "Knowledge Seeker", description: "Enroll in 5 different categories", earned: false, progress: 80 },
    { title: "Master Student", description: "Complete 10 courses", earned: false, progress: 60 }
  ];

  return (
    <PageLayout title="My Learning" objectives={objectives} todos={todos}>
      <div className="space-y-8">
        {/* Learning Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {learningStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="text-center hover:shadow-hover transition-all duration-300">
                <CardContent className="pt-6">
                  <Icon className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Learning Tabs */}
        <Tabs defaultValue="in-progress" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="in-progress">In Progress</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="bookmarks">Bookmarks</TabsTrigger>
          </TabsList>

          {/* In Progress Courses */}
          <TabsContent value="in-progress" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Continue Learning</h2>
              <Button variant="outline">
                <Calendar className="h-4 w-4 mr-2" />
                Study Schedule
              </Button>
            </div>

            <div className="grid gap-6">
              {inProgressCourses.map((course) => (
                <Card key={course.id} className="overflow-hidden hover:shadow-hover transition-all duration-300">
                  <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-48 bg-gradient-ai p-6 text-white flex items-center justify-center">
                      <div className="text-center">
                        <BookOpen className="h-12 w-12 mx-auto mb-2 opacity-80" />
                        <div className="text-sm opacity-90">Course</div>
                      </div>
                    </div>
                    
                    <div className="flex-1 p-6">
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-bold mb-1">{course.title}</h3>
                          <p className="text-muted-foreground">by {course.instructor}</p>
                        </div>
                        <div className="flex items-center space-x-2 mt-2 lg:mt-0">
                          <Button variant="ai">
                            <Play className="h-4 w-4 mr-2" />
                            Continue
                          </Button>
                          <Button variant="outline" size="icon">
                            <Bookmark className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-sm">
                          <span>Progress: {course.completedLessons} of {course.totalLessons} lessons</span>
                          <span className="font-medium">{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                        
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm text-muted-foreground">
                          <div className="flex items-center space-x-4">
                            <span>Next: {course.nextLesson}</span>
                            <div className="flex items-center space-x-1">
                              <Clock className="h-3 w-3" />
                              <span>{course.timeLeft} remaining</span>
                            </div>
                          </div>
                          <span>Last accessed {course.lastAccessed}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Completed Courses */}
          <TabsContent value="completed" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Completed Courses</h2>
              <Badge variant="secondary">{completedCourses.length} courses</Badge>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {completedCourses.map((course) => (
                <Card key={course.id} className="hover:shadow-hover transition-all duration-300">
                  <div className="p-4 bg-success/10 text-center">
                    <CheckCircle className="h-8 w-8 text-success mx-auto mb-2" />
                    <Badge variant="secondary" className="bg-success text-success-foreground">
                      Completed
                    </Badge>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-2">{course.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">by {course.instructor}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span>Completed</span>
                        <span>{new Date(course.completedDate).toLocaleDateString()}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Duration</span>
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Rating</span>
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`h-3 w-3 ${
                                i < course.rating 
                                  ? "fill-yellow-400 text-yellow-400" 
                                  : "text-gray-300"
                              }`} 
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      {course.certificate && (
                        <Button variant="outline" className="flex-1" size="sm">
                          <Download className="h-4 w-4 mr-2" />
                          Certificate
                        </Button>
                      )}
                      <Button variant="ghost" className="flex-1" size="sm">
                        <RotateCcw className="h-4 w-4 mr-2" />
                        Review
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Achievements */}
          <TabsContent value="achievements" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Achievements</h2>
              <Badge variant="secondary">
                {achievements.filter(a => a.earned).length} of {achievements.length} earned
              </Badge>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <Card key={index} className={`transition-all duration-300 ${achievement.earned ? 'border-success shadow-hover' : 'opacity-75'}`}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        achievement.earned ? 'bg-success' : 'bg-muted'
                      }`}>
                        <Trophy className={`h-6 w-6 ${achievement.earned ? 'text-white' : 'text-muted-foreground'}`} />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{achievement.title}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{achievement.description}</p>
                        
                        {achievement.earned ? (
                          <Badge variant="secondary" className="bg-success text-success-foreground">
                            Earned {achievement.date}
                          </Badge>
                        ) : (
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span>Progress</span>
                              <span>{achievement.progress}%</span>
                            </div>
                            <Progress value={achievement.progress} className="h-2" />
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Bookmarks */}
          <TabsContent value="bookmarks" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Bookmarked Content</h2>
              <Button variant="outline">Clear All</Button>
            </div>

            <Card className="shadow-card">
              <CardContent className="p-8 text-center">
                <Bookmark className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">No bookmarks yet</h3>
                <p className="text-muted-foreground mb-4">
                  Save lessons, articles, and resources you want to revisit later.
                </p>
                <Button variant="outline">Browse Courses</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </PageLayout>
  );
};

export default MyLearning;