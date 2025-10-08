import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Search as SearchIcon, 
  Filter, 
  BookOpen, 
  Users, 
  Clock, 
  Star,
  TrendingUp,
  History,
  Tag,
  SlidersHorizontal
} from "lucide-react";

const Search = () => {
  const objectives = [
    "Provide comprehensive search functionality across courses and content",
    "Display search results with relevant filters and sorting options",
    "Show search suggestions and trending topics",
    "Enable advanced search with multiple criteria",
    "Present search history and saved searches"
  ];

  const todos = {
    ux: [
      "Design search interface with autocomplete",
      "Create advanced filter sidebar",
      "Design search result card layouts",
      "Plan search history and suggestions UI"
    ],
    data: [
      "Implement search API with full-text indexing",
      "Build search filters and faceted search",
      "Get trending search terms and suggestions",
      "Store and retrieve user search history"
    ],
    interactions: [
      "Real-time search with debouncing",
      "Filter application and clearing",
      "Search result sorting and pagination",
      "Save search and bookmark functionality"
    ],
    animations: [
      "Search loading states and skeletons",
      "Filter slide-in animations",
      "Result appearing transitions",
      "Search suggestion hover effects"
    ],
    validations: [
      "Search input sanitization",
      "Filter combination validation",
      "Search result accuracy verification",
      "Performance optimization for large datasets"
    ]
  };

  const trendingSearches = [
    "Machine Learning",
    "React Hooks",
    "Python for Beginners", 
    "UI/UX Design",
    "JavaScript ES6",
    "Data Science",
    "Node.js",
    "Cybersecurity"
  ];

  const recentSearches = [
    "Advanced React Patterns",
    "Machine Learning with Python",
    "UI/UX Design Fundamentals",
    "JavaScript Testing"
  ];

  const searchResults = [
    {
      type: "course",
      title: "Complete Machine Learning Bootcamp",
      description: "Master machine learning algorithms, deep learning, and neural networks with Python. Build real-world projects and gain hands-on experience.",
      instructor: "Dr. Sarah Chen",
      rating: 4.8,
      students: 15200,
      duration: "45 hours",
      level: "Intermediate",
      price: "₹10,699",
      tags: ["Python", "ML", "Data Science", "Neural Networks"]
    },
    {
      type: "course", 
      title: "Machine Learning Fundamentals",
      description: "Introduction to machine learning concepts, algorithms, and practical applications. Perfect for beginners starting their ML journey.",
      instructor: "Alex Kumar",
      rating: 4.6,
      students: 8900,
      duration: "28 hours",
      level: "Beginner",
      price: "₹7,399",
      tags: ["Python", "ML", "Beginner", "Statistics"]
    },
    {
      type: "article",
      title: "Understanding Machine Learning Algorithms",
      description: "Deep dive into the most important ML algorithms including linear regression, decision trees, and ensemble methods.",
      author: "Tech Blog",
      readTime: "12 min read",
      tags: ["ML", "Algorithms", "Theory"]
    },
    {
      type: "course",
      title: "Deep Learning with TensorFlow",
      description: "Advanced course covering neural networks, CNNs, RNNs, and modern deep learning architectures using TensorFlow.",
      instructor: "Emily Rodriguez",
      rating: 4.9,
      students: 6700,
      duration: "38 hours", 
      level: "Advanced",
      price: "₹12,399",
      tags: ["TensorFlow", "Deep Learning", "Neural Networks", "Python"]
    }
  ];

  const categories = [
    { name: "Programming", count: 124 },
    { name: "Data Science", count: 89 },
    { name: "Design", count: 67 },
    { name: "Business", count: 156 },
    { name: "AI & ML", count: 78 },
    { name: "Cybersecurity", count: 45 }
  ];

  return (
    <PageLayout title="Search" objectives={objectives} todos={todos}>
      <div className="space-y-8">
        {/* Search Header */}
        <div className="space-y-4">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                type="text"
                placeholder="Search courses, instructors, topics..."
                className="pl-12 pr-4 py-3 text-lg h-14"
                defaultValue="Machine Learning"
              />
            </div>
            <Button variant="outline" className="h-14 px-6">
              <SlidersHorizontal className="h-5 w-5 mr-2" />
              Advanced Filters
            </Button>
          </div>

          {/* Quick Filters */}
          <div className="flex flex-wrap gap-2">
            <Button variant="secondary" size="sm">All Results</Button>
            <Button variant="outline" size="sm">Courses</Button>
            <Button variant="outline" size="sm">Articles</Button>
            <Button variant="outline" size="sm">Instructors</Button>
            <Button variant="outline" size="sm">Free</Button>
            <Button variant="outline" size="sm">Beginner</Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="space-y-6">
            {/* Trending Searches */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-base">
                  <TrendingUp className="h-4 w-4 text-primary" />
                  <span>Trending Searches</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {trendingSearches.map((search, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="text-xs"
                    >
                      {search}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Searches */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-base">
                  <History className="h-4 w-4 text-muted-foreground" />
                  <span>Recent Searches</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {recentSearches.map((search, index) => (
                    <button
                      key={index}
                      className="w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {search}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Categories */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-base">
                  <Tag className="h-4 w-4 text-muted-foreground" />
                  <span>Categories</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {categories.map((category, index) => (
                    <button
                      key={index}
                      className="flex items-center justify-between w-full text-left text-sm hover:text-primary transition-colors"
                    >
                      <span>{category.name}</span>
                      <span className="text-muted-foreground">{category.count}</span>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Filters */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-base">
                  <Filter className="h-4 w-4 text-muted-foreground" />
                  <span>Filters</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Level</h4>
                  <div className="space-y-2">
                    {["Beginner", "Intermediate", "Advanced", "Expert"].map((level) => (
                      <label key={level} className="flex items-center space-x-2 cursor-pointer">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">{level}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Duration</h4>
                  <div className="space-y-2">
                    {["0-5 hours", "5-20 hours", "20+ hours"].map((duration) => (
                      <label key={duration} className="flex items-center space-x-2 cursor-pointer">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">{duration}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Price</h4>
                  <div className="space-y-2">
                    {["Free", "₹0-₹4,000", "₹4,000-₹8,000", "₹8,000+"].map((price) => (
                      <label key={price} className="flex items-center space-x-2 cursor-pointer">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">{price}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <Button variant="outline" className="w-full">Clear Filters</Button>
              </CardContent>
            </Card>
          </div>

          {/* Search Results */}
          <div className="lg:col-span-3 space-y-6">
            {/* Results Header */}
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold">Search Results</h2>
                <p className="text-muted-foreground">Found 1,247 results for "Machine Learning"</p>
              </div>
              <select className="p-2 border border-input rounded-md bg-background">
                <option value="relevance">Most Relevant</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest</option>
                <option value="price">Price: Low to High</option>
              </select>
            </div>

            {/* Results */}
            <div className="space-y-4">
              {searchResults.map((result, index) => (
                <Card key={index} className="hover:shadow-hover transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      {/* Content Type Icon */}
                      <div className="w-12 h-12 bg-gradient-ai rounded-lg flex items-center justify-center flex-shrink-0">
                        {result.type === "course" ? (
                          <BookOpen className="h-6 w-6 text-white" />
                        ) : (
                          <Tag className="h-6 w-6 text-white" />
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="font-bold text-lg mb-1 hover:text-primary cursor-pointer">
                              {result.title}
                            </h3>
                            <p className="text-muted-foreground mb-2 line-clamp-2">
                              {result.description}
                            </p>
                          </div>
                          <Badge variant="outline" className="ml-4 flex-shrink-0">
                            {result.type}
                          </Badge>
                        </div>

                        {/* Course Metadata */}
                        {result.type === "course" && (
                          <div className="flex flex-wrap items-center gap-4 mb-3 text-sm text-muted-foreground">
                            <span>by {result.instructor}</span>
                            <div className="flex items-center space-x-1">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              <span>{result.rating}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Users className="h-4 w-4" />
                              <span>{result.students.toLocaleString()}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="h-4 w-4" />
                              <span>{result.duration}</span>
                            </div>
                            <Badge variant="secondary">{result.level}</Badge>
                          </div>
                        )}

                        {/* Article Metadata */}
                        {result.type === "article" && (
                          <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                            <span>by {result.author}</span>
                            <div className="flex items-center space-x-1">
                              <Clock className="h-4 w-4" />
                              <span>{result.readTime}</span>
                            </div>
                          </div>
                        )}

                        {/* Tags and Price */}
                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-1">
                            {result.tags.map((tag, tagIndex) => (
                              <Badge key={tagIndex} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          
                          {result.type === "course" && (
                            <div className="flex items-center space-x-3">
                              <span className="text-lg font-bold text-primary">{result.price}</span>
                              <Button variant="ai" size="sm">
                                View Course
                              </Button>
                            </div>
                          )}
                          
                          {result.type === "article" && (
                            <Button variant="outline" size="sm">
                              Read Article
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center space-x-2 pt-6">
              <Button variant="outline" disabled>Previous</Button>
              <Button variant="default">1</Button>
              <Button variant="outline">2</Button>
              <Button variant="outline">3</Button>
              <Button variant="outline">...</Button>
              <Button variant="outline">25</Button>
              <Button variant="outline">Next</Button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Search;