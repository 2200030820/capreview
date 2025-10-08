import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";
import { 
  Star, 
  Clock, 
  Users, 
  BookOpen, 
  TrendingUp,
  Target,
  Brain,
  Zap,
  Award,
  RefreshCw,
  ThumbsUp,
  ThumbsDown
} from "lucide-react";
import { useState } from "react";

const Recommendations = () => {
  const { toast } = useToast();
  const [isRefreshing, setIsRefreshing] = useState(false);
  
  const handleRefresh = async () => {
    setIsRefreshing(true);
    toast({
      title: "Refreshing Recommendations",
      description: "Getting your latest personalized suggestions...",
    });
    
    // Simulate API call
    setTimeout(() => {
      setIsRefreshing(false);
      toast({
        title: "Recommendations Updated",
        description: "Your suggestions have been refreshed based on latest activity.",
      });
    }, 2000);
  };
  
  const objectives = [
    "Provide AI-powered personalized course recommendations",
    "Display recommendations based on learning history and goals",
    "Show trending courses and popular picks in user's areas",
    "Enable recommendation feedback and refinement",
    "Present learning path suggestions for skill development"
  ];

  const todos = {
    ux: [
      "Design recommendation card layouts with clear reasoning",
      "Create recommendation category sections",
      "Design feedback system for improving recommendations",
      "Plan learning path visualization interface"
    ],
    data: [
      "Implement AI recommendation algorithm",
      "Analyze user learning patterns and preferences",
      "Fetch trending courses and popularity metrics",
      "Store and process recommendation feedback"
    ],
    interactions: [
      "Recommendation like/dislike feedback",
      "Course preview and enrollment from recommendations",
      "Recommendation refresh and customization",
      "Learning path exploration and planning"
    ],
    animations: [
      "Recommendation card reveal animations",
      "Feedback button interactions",
      "Loading states for recommendation updates",
      "Learning path progression animations"
    ],
    validations: [
      "Recommendation relevance scoring",
      "User preference accuracy validation",
      "Feedback processing and algorithm improvement",
      "Learning path coherence verification"
    ]
  };

  const personalizedRecommendations = [
    {
      id: 1,
      title: "Advanced React State Management",
      instructor: "Sarah Johnson",
      rating: 4.9,
      students: 8500,
      duration: "18 hours",
      level: "Advanced",
      price: "₹8,199",
      reason: "Based on your React learning progress",
      matchScore: 95,
      tags: ["React", "Redux", "State Management"]
    },
    {
      id: 2,
      title: "Node.js Performance Optimization",
      instructor: "Michael Chen",
      rating: 4.7,
      students: 6200,
      duration: "14 hours",
      level: "Advanced", 
      price: "₹7,399",
      reason: "Complements your full-stack learning path",
      matchScore: 88,
      tags: ["Node.js", "Performance", "Backend"]
    },
    {
      id: 3,
      title: "TypeScript Design Patterns",
      instructor: "Emily Rodriguez",
      rating: 4.8,
      students: 4900,
      duration: "22 hours",
      level: "Intermediate",
      price: "₹9,099",
      reason: "Popular among React developers",
      matchScore: 82,
      tags: ["TypeScript", "Design Patterns", "JavaScript"]
    }
  ];

  const trendingInCategory = [
    {
      title: "Machine Learning with PyTorch",
      instructor: "Dr. Alex Kumar",
      rating: 4.9,
      students: 12000,
      duration: "35 hours",
      level: "Intermediate",
      price: "₹12,399",
      trending: "+245% enrollment this month"
    },
    {
      title: "React Native Mobile Development",
      instructor: "Lisa Park",
      rating: 4.6,
      students: 9800,
      duration: "28 hours",
      level: "Intermediate",
      price: "₹9,899",
      trending: "+180% enrollment this month"
    },
    {
      title: "DevOps with Kubernetes",
      instructor: "James Wilson",
      rating: 4.8,
      students: 7500,
      duration: "32 hours",
      level: "Advanced",
      price: "₹11,599",
      trending: "+320% enrollment this month"
    }
  ];

  const learningPaths = [
    {
      title: "Full-Stack JavaScript Developer",
      description: "Complete path from frontend to backend JavaScript development",
      courses: 8,
      duration: "120 hours",
      level: "Beginner to Advanced",
      completion: 65,
      skills: ["React", "Node.js", "Express", "MongoDB", "TypeScript"]
    },
    {
      title: "AI/ML Engineer Track",
      description: "Comprehensive machine learning and artificial intelligence curriculum",
      courses: 12,
      duration: "180 hours",
      level: "Intermediate to Expert",
      completion: 25,
      skills: ["Python", "TensorFlow", "PyTorch", "Data Science", "Deep Learning"]
    },
    {
      title: "Cloud Solutions Architect",
      description: "Master cloud computing and DevOps practices",
      courses: 10,
      duration: "150 hours",
      level: "Intermediate to Advanced",
      completion: 0,
      skills: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD"]
    }
  ];

  const recommendationCategories = [
    { 
      name: "Continue Your Journey", 
      icon: Target, 
      count: personalizedRecommendations.length,
      description: "Next steps based on your current progress"
    },
    { 
      name: "Trending Now", 
      icon: TrendingUp, 
      count: trendingInCategory.length,
      description: "Popular courses in your areas of interest"
    },
    { 
      name: "Skill Gaps", 
      icon: Brain, 
      count: 4,
      description: "Fill knowledge gaps in your profile"
    },
    { 
      name: "Career Boost", 
      icon: Award, 
      count: 6,
      description: "Courses that enhance your career prospects"
    }
  ];

  return (
    <PageLayout title="Recommendations" objectives={objectives} todos={todos}>
      <div className="space-y-8">
        {/* Recommendation Overview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {recommendationCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="text-center hover:shadow-hover transition-all duration-300 cursor-pointer">
                <CardContent className="pt-6">
                  <Icon className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">{category.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{category.description}</p>
                  <Badge variant="secondary">{category.count} courses</Badge>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* AI Recommendations */}
        <Card className="shadow-card border-l-4 border-l-primary">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center space-x-2">
                <Brain className="h-5 w-5 text-primary" />
                <span>AI-Powered Recommendations</span>
              </CardTitle>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleRefresh}
                disabled={isRefreshing}
              >
                <RefreshCw className={`h-4 w-4 mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
                {isRefreshing ? 'Refreshing...' : 'Refresh'}
              </Button>
            </div>
            <p className="text-muted-foreground">
              Personalized course suggestions based on your learning patterns and goals
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            {personalizedRecommendations.map((course, index) => (
              <div key={course.id} className="border rounded-lg p-4 hover:shadow-hover transition-all duration-300">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="font-bold text-lg">{course.title}</h3>
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                        {course.matchScore}% match
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">by {course.instructor}</p>
                    <p className="text-sm text-primary font-medium mb-3">💡 {course.reason}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-primary mb-1">{course.price}</div>
                    <Badge variant="secondary">{course.level}</Badge>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span>{course.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{course.students.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{course.duration}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {course.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm">
                      <ThumbsDown className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <ThumbsUp className="h-4 w-4" />
                    </Button>
                    <Button variant="ai" size="sm">
                      <BookOpen className="h-4 w-4 mr-1" />
                      Enroll
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Trending Courses */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-success" />
              <span>Trending in Your Areas</span>
            </CardTitle>
            <p className="text-muted-foreground">
              Popular courses among learners with similar interests
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {trendingInCategory.map((course, index) => (
                <div key={index} className="border rounded-lg p-4 hover:shadow-hover transition-all duration-300">
                  <div className="flex items-center space-x-2 mb-2">
                    <Zap className="h-4 w-4 text-success" />
                    <span className="text-xs text-success font-medium">{course.trending}</span>
                  </div>
                  
                  <h3 className="font-semibold mb-2">{course.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">by {course.instructor}</p>
                  
                  <div className="flex items-center justify-between mb-3 text-sm">
                    <div className="flex items-center space-x-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span>{course.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-3 w-3 text-muted-foreground" />
                      <span>{course.students.toLocaleString()}</span>
                    </div>
                    <Badge variant="outline" className="text-xs">{course.level}</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-primary">{course.price}</span>
                    <Button variant="outline" size="sm">View Course</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Learning Paths */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Target className="h-5 w-5 text-secondary" />
              <span>Recommended Learning Paths</span>
            </CardTitle>
            <p className="text-muted-foreground">
              Structured journeys to achieve your career goals
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            {learningPaths.map((path, index) => (
              <div key={index} className="border rounded-lg p-6 hover:shadow-hover transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-2">{path.title}</h3>
                    <p className="text-muted-foreground mb-3">{path.description}</p>
                    
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                      <span>{path.courses} courses</span>
                      <span>{path.duration}</span>
                      <span>{path.level}</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-1">
                      {path.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="text-center ml-6">
                    <div className="text-2xl font-bold text-primary mb-1">{path.completion}%</div>
                    <div className="text-xs text-muted-foreground">Complete</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex-1 mr-4">
                    <div className="bg-muted rounded-full h-2">
                      <div 
                        className="bg-gradient-learning h-2 rounded-full transition-all duration-300"
                        style={{ width: `${path.completion}%` }}
                      />
                    </div>
                  </div>
                  <Button variant={path.completion > 0 ? "ai" : "outline"}>
                    {path.completion > 0 ? "Continue Path" : "Start Path"}
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recommendation Settings */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Improve Your Recommendations</CardTitle>
            <p className="text-muted-foreground">
              Help us personalize your learning experience
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Learning Preferences</h3>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="checkbox" defaultChecked />
                    <span className="text-sm">Prioritize hands-on projects</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="checkbox" defaultChecked />
                    <span className="text-sm">Include beginner-friendly content</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="checkbox" />
                    <span className="text-sm">Focus on career advancement</span>
                  </label>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3">Areas of Interest</h3>
                <div className="flex flex-wrap gap-2">
                  {["React", "Python", "AI/ML", "Data Science", "DevOps", "Mobile"].map((area) => (
                    <Button key={area} variant="outline" size="sm">
                      {area}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t">
              <Button variant="ai">Update Preferences</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
};

export default Recommendations;