import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Play, 
  Clock, 
  Users, 
  Star,
  Download,
  Award,
  BookOpen,
  CheckCircle,
  Lock,
  Globe,
  Trophy,
  Heart
} from "lucide-react";

const CourseDetail = () => {
  const objectives = [
    "Display comprehensive course information and curriculum",
    "Show instructor details and student reviews",
    "Provide course preview and enrollment options",
    "Present learning outcomes and requirements",
    "Enable progress tracking for enrolled students"
  ];

  const todos = {
    ux: [
      "Design course header with video preview",
      "Create curriculum accordion with lesson details",
      "Design instructor profile section",
      "Plan review and rating display layout"
    ],
    data: [
      "Fetch course details and metadata",
      "Load curriculum structure and lesson content",
      "Get instructor information and ratings",
      "Retrieve student reviews and course analytics"
    ],
    interactions: [
      "Course preview video player",
      "Enrollment and wishlist functionality",
      "Curriculum expansion and navigation",
      "Review filtering and sorting"
    ],
    animations: [
      "Video player loading and controls",
      "Curriculum section expansions",
      "Progress indicators and completions",
      "Review loading and pagination"
    ],
    validations: [
      "Course availability and prerequisites",
      "User enrollment eligibility",
      "Payment processing validation",
      "Progress tracking accuracy"
    ]
  };

  const curriculum = [
    {
      title: "Getting Started",
      lessons: 5,
      duration: "45 min",
      completed: true,
      items: [
        { title: "Course Introduction", duration: "5 min", completed: true },
        { title: "Setting Up Development Environment", duration: "15 min", completed: true },
        { title: "React Fundamentals Review", duration: "10 min", completed: true },
        { title: "Project Structure Overview", duration: "8 min", completed: true },
        { title: "Your First Component", duration: "7 min", completed: true }
      ]
    },
    {
      title: "Advanced React Patterns",
      lessons: 8,
      duration: "2.5 hours",
      completed: false,
      current: true,
      items: [
        { title: "Higher-Order Components", duration: "20 min", completed: true },
        { title: "Render Props Pattern", duration: "18 min", completed: true },
        { title: "Custom Hooks Deep Dive", duration: "25 min", current: true },
        { title: "Context API Advanced Usage", duration: "22 min", locked: true },
        { title: "Performance Optimization", duration: "30 min", locked: true },
        { title: "Error Boundaries", duration: "15 min", locked: true },
        { title: "Suspense and Lazy Loading", duration: "20 min", locked: true },
        { title: "Advanced State Management", duration: "25 min", locked: true }
      ]
    },
    {
      title: "Testing & Deployment",
      lessons: 6,
      duration: "1.8 hours",
      completed: false,
      items: [
        { title: "Unit Testing with Jest", duration: "20 min", locked: true },
        { title: "Component Testing with Testing Library", duration: "25 min", locked: true },
        { title: "Integration Testing", duration: "18 min", locked: true },
        { title: "E2E Testing with Cypress", duration: "22 min", locked: true },
        { title: "Building for Production", duration: "15 min", locked: true },
        { title: "Deployment Strategies", duration: "20 min", locked: true }
      ]
    }
  ];

  const reviews = [
    {
      name: "Emily Johnson",
      rating: 5,
      date: "2 weeks ago",
      comment: "Excellent course! The instructor explains complex concepts in a very clear and understandable way. The hands-on projects really helped solidify my understanding."
    },
    {
      name: "Michael Chen",
      rating: 5,
      date: "1 month ago",
      comment: "Best React course I've taken. The advanced patterns section was particularly valuable for my work projects."
    },
    {
      name: "Sarah Davis",
      rating: 4,
      date: "3 weeks ago",
      comment: "Great content and well-structured. Would love to see more real-world examples in the final section."
    }
  ];

  return (
    <PageLayout title="Course Details" objectives={objectives} todos={todos}>
      <div className="space-y-8">
        {/* Course Header */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Course Title & Info */}
            <div>
              <div className="flex items-center space-x-2 mb-3">
                <Badge variant="secondary">Best Seller</Badge>
                <Badge variant="outline">Updated 2024</Badge>
              </div>
              <h1 className="text-3xl font-bold mb-4">Complete React Development Bootcamp</h1>
              <p className="text-lg text-muted-foreground mb-4">
                Master React from basics to advanced patterns with hands-on projects and real-world applications.
                Build modern, scalable applications using the latest React features and best practices.
              </p>
              
              <div className="flex flex-wrap items-center gap-4 text-sm">
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">4.9</span>
                  <span className="text-muted-foreground">(2,847 ratings)</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span>12,500 students</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Globe className="h-4 w-4 text-muted-foreground" />
                  <span>English</span>
                </div>
              </div>
            </div>

            {/* What You'll Learn */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>What You'll Learn</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "Build modern React applications from scratch",
                    "Master advanced React patterns and hooks",
                    "Implement state management with Context API",
                    "Test React components effectively",
                    "Optimize app performance and bundle size",
                    "Deploy React apps to production"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Course Curriculum */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Course Curriculum</CardTitle>
                <p className="text-muted-foreground">19 sections • 65 lessons • 12h 30m total</p>
              </CardHeader>
              <CardContent className="space-y-4">
                {curriculum.map((section, index) => (
                  <div key={index} className="border rounded-lg">
                    <div className="flex items-center justify-between p-4 cursor-pointer hover:bg-accent">
                      <div className="flex items-center space-x-3">
                        {section.completed ? (
                          <CheckCircle className="h-5 w-5 text-success" />
                        ) : section.current ? (
                          <Play className="h-5 w-5 text-primary" />
                        ) : (
                          <Lock className="h-5 w-5 text-muted-foreground" />
                        )}
                        <div>
                          <h3 className="font-semibold">{section.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            {section.lessons} lessons • {section.duration}
                          </p>
                        </div>
                      </div>
                      {section.current && (
                        <Badge variant="secondary">Current</Badge>
                      )}
                    </div>
                    
                    {section.current && (
                      <div className="border-t bg-accent/50">
                        <div className="p-4 space-y-2">
                          {section.items.map((lesson, lessonIndex) => (
                            <div key={lessonIndex} className="flex items-center justify-between py-2">
                              <div className="flex items-center space-x-3">
                                {lesson.completed ? (
                                  <CheckCircle className="h-4 w-4 text-success" />
                                ) : lesson.current ? (
                                  <Play className="h-4 w-4 text-primary" />
                                ) : (
                                  <Lock className="h-4 w-4 text-muted-foreground" />
                                )}
                                <span className={lesson.locked ? "text-muted-foreground" : ""}>
                                  {lesson.title}
                                </span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Clock className="h-3 w-3 text-muted-foreground" />
                                <span className="text-sm text-muted-foreground">{lesson.duration}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Course Preview */}
            <Card className="shadow-card">
              <div className="aspect-video bg-gradient-ai rounded-t-lg flex items-center justify-center">
                <div className="text-center text-white">
                  <Play className="h-16 w-16 mx-auto mb-4 opacity-80" />
                  <p className="text-sm opacity-90">Preview this course</p>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-center mb-4">₹7,399</div>
                <div className="space-y-3 mb-6">
                  <Button variant="ai" className="w-full" size="lg">
                    Enroll Now
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Heart className="h-4 w-4 mr-2" />
                    Add to Wishlist
                  </Button>
                </div>
                
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span>Full lifetime access</span>
                    <CheckCircle className="h-4 w-4 text-success" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Certificate of completion</span>
                    <Award className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Downloadable resources</span>
                    <Download className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Mobile and TV access</span>
                    <Globe className="h-4 w-4 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Instructor */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Instructor</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-ai rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">SJ</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Sarah Johnson</h3>
                    <p className="text-sm text-muted-foreground">Senior Frontend Developer</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400" />
                    <span>4.9 rating</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>50K students</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <BookOpen className="h-4 w-4 text-muted-foreground" />
                    <span>12 courses</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Trophy className="h-4 w-4 text-muted-foreground" />
                    <span>8 years exp</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Frontend developer with 8+ years experience building scalable React applications.
                </p>
              </CardContent>
            </Card>

            {/* Progress (for enrolled students) */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Your Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Course completion</span>
                    <span>34%</span>
                  </div>
                  <Progress value={34} />
                  <div className="text-sm text-muted-foreground">
                    13 of 65 lessons completed
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Reviews */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Student Reviews</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {reviews.map((review, index) => (
              <div key={index} className="border-b last:border-b-0 pb-4 last:pb-0">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-ai rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-semibold">
                        {review.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="font-medium">{review.name}</div>
                      <div className="text-sm text-muted-foreground">{review.date}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${
                          i < review.rating 
                            ? "fill-yellow-400 text-yellow-400" 
                            : "text-gray-300"
                        }`} 
                      />
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground">{review.comment}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
};

export default CourseDetail;