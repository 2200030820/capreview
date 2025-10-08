import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Clock, 
  Users, 
  Star,
  Filter,
  Search,
  Zap,
  Trophy,
  TrendingUp
} from "lucide-react";

const Courses = () => {
  const objectives = [
    "Display comprehensive course catalog with filtering and search",
    "Show course details including difficulty, duration, and ratings",
    "Provide category-based navigation and recommendations",
    "Enable course enrollment and wishlist functionality",
    "Present instructor information and course previews"
  ];

  const todos = {
    ux: [
      "Design course card layouts with proper hierarchy",
      "Create filtering sidebar with categories and levels",
      "Design search interface with autocomplete",
      "Plan course detail modal or page layout"
    ],
    data: [
      "Fetch course catalog with metadata",
      "Implement search and filtering API",
      "Get course ratings and enrollment numbers",
      "Load instructor profiles and course previews"
    ],
    interactions: [
      "Course card hover effects and quick preview",
      "Filter and search functionality",
      "Enrollment button and wishlist actions",
      "Course comparison features"
    ],
    animations: [
      "Course card loading skeletons",
      "Filter application animations",
      "Search result transitions",
      "Enrollment success animations"
    ],
    validations: [
      "Search input validation and error handling",
      "Filter state management",
      "Course availability verification",
      "User enrollment eligibility checks"
    ]
  };

  const categories = [
    { name: "Programming", count: 124, trending: true },
    { name: "Data Science", count: 89, trending: true },
    { name: "Design", count: 67, trending: false },
    { name: "Business", count: 156, trending: false },
    { name: "AI & ML", count: 78, trending: true },
    { name: "Cybersecurity", count: 45, trending: false }
  ];

  const featuredCourses = [
    {
      title: "Complete React Development Bootcamp",
      instructor: "Sarah Johnson",
      rating: 4.9,
      students: 12500,
      duration: "42 hours",
      level: "Intermediate",
      price: "₹7,399",
      image: "🚀",
      tags: ["React", "JavaScript", "Frontend"],
      url: "https://www.coursera.org/learn/react-basics"
    },
    {
      title: "Machine Learning with Python",
      instructor: "Dr. Michael Chen",
      rating: 4.8,
      students: 8900,
      duration: "38 hours", 
      level: "Advanced",
      price: "₹10,699",
      image: "🤖",
      tags: ["Python", "ML", "Data Science"],
      url: "https://www.coursera.org/learn/machine-learning"
    },
    {
      title: "UI/UX Design Fundamentals",
      instructor: "Emily Rodriguez",
      rating: 4.7,
      students: 6700,
      duration: "24 hours",
      level: "Beginner",
      price: "₹5,699",
      image: "🎨",
      tags: ["Design", "Figma", "UX"],
      url: "https://www.coursera.org/learn/ui-ux-design"
    },
    {
      title: "Advanced Node.js & Express",
      instructor: "Alex Kumar",
      rating: 4.9,
      students: 5400,
      duration: "35 hours",
      level: "Advanced", 
      price: "₹8,199",
      image: "⚡",
      tags: ["Node.js", "Backend", "Express"],
      url: "https://www.coursera.org/learn/server-side-nodejs"
    },
    {
      title: "DevOps with Docker & Kubernetes",
      instructor: "James Wilson",
      rating: 4.6,
      students: 4200,
      duration: "28 hours",
      level: "Intermediate",
      price: "₹9,899",
      image: "🐳",
      tags: ["DevOps", "Docker", "K8s"],
      url: "https://www.coursera.org/learn/docker-kubernetes"
    },
    {
      title: "Mobile App Development with React Native",
      instructor: "Lisa Park",
      rating: 4.8,
      students: 7800,
      duration: "45 hours",
      level: "Intermediate",
      price: "₹9,099",
      image: "📱",
      tags: ["React Native", "Mobile", "iOS"],
      url: "https://www.coursera.org/learn/react-native"
    }
  ];

  return (
    <PageLayout title="Course Catalog" objectives={objectives} todos={todos}>
      <div className="space-y-8">
        {/* Search and Filter Section */}
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <input
              type="text"
              placeholder="Search courses, instructors, or topics..."
              className="w-full pl-10 pr-4 py-2 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <Button variant="outline" className="lg:w-auto">
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
        </div>

        {/* Categories */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Popular Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <Card key={index} className="text-center hover:shadow-hover transition-all duration-300 cursor-pointer">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">{category.name}</h3>
                    {category.trending && (
                      <TrendingUp className="h-4 w-4 text-success" />
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{category.count} courses</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Featured Courses */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Featured Courses</h2>
            <Button variant="outline">View All</Button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCourses.map((course, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-hover transition-all duration-300 group">
                <div className="p-6 bg-gradient-ai text-white">
                  <div className="text-4xl mb-2">{course.image}</div>
                  <Badge variant="outline" className="bg-white/20 text-white border-white/30">
                    {course.level}
                  </Badge>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2 line-clamp-2">{course.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3">by {course.instructor}</p>
                  
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{course.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-muted-foreground text-sm">
                      <Users className="h-4 w-4" />
                      <span>{course.students.toLocaleString()}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1 text-muted-foreground text-sm">
                      <Clock className="h-4 w-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="text-lg font-bold text-primary">{course.price}</div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {course.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button 
                      variant="ai" 
                      className="flex-1"
                      onClick={() => window.open(course.url, '_blank')}
                    >
                      <BookOpen className="h-4 w-4 mr-1" />
                      Enroll Now
                    </Button>
                    <Button variant="outline" size="icon">
                      <Trophy className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Learning Paths */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Zap className="h-5 w-5 text-primary" />
              <span>Recommended Learning Paths</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border rounded-lg p-4 hover:shadow-hover transition-all duration-300">
                <h3 className="font-semibold mb-2">Full-Stack Developer Path</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Complete journey from frontend to backend development
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm">6 courses • 180 hours</span>
                  <Button variant="outline" size="sm">Explore</Button>
                </div>
              </div>
              
              <div className="border rounded-lg p-4 hover:shadow-hover transition-all duration-300">
                <h3 className="font-semibold mb-2">Data Scientist Path</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Master data analysis, ML, and statistical modeling
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm">8 courses • 240 hours</span>
                  <Button variant="outline" size="sm">Explore</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
};

export default Courses;