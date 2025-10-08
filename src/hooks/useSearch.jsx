import { useState, useEffect, useMemo } from "react";

const mockCourses = [
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
    tags: ["Python", "ML", "Data Science", "Neural Networks"],
    url: "https://www.coursera.org/learn/machine-learning"
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
    tags: ["Python", "ML", "Beginner", "Statistics"],
    url: "https://www.khanacademy.org/computing/intro-to-algorithms"
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
    tags: ["TensorFlow", "Deep Learning", "Neural Networks", "Python"],
    url: "https://www.coursera.org/specializations/deep-learning"
  },
  {
    type: "course",
    title: "DevOps Engineering Fundamentals",
    description: "Learn CI/CD, containerization, cloud platforms, and automation tools. Master the DevOps pipeline from development to deployment.",
    instructor: "Michael Chen",
    rating: 4.7,
    students: 12400,
    duration: "35 hours",
    level: "Intermediate",
    price: "₹9,299",
    tags: ["DevOps", "Docker", "AWS", "CI/CD", "Kubernetes"],
    url: "https://www.coursera.org/learn/devops-culture-and-mindset"
  },
  {
    type: "course",
    title: "AWS DevOps Professional",
    description: "Advanced AWS DevOps practices including infrastructure as code, monitoring, and scalable deployment strategies.",
    instructor: "Jennifer Liu",
    rating: 4.9,
    students: 5600,
    duration: "42 hours",
    level: "Advanced",
    price: "₹14,199",
    tags: ["AWS", "DevOps", "Infrastructure", "Monitoring", "CloudFormation"],
    url: "https://aws.amazon.com/training/classroom/devops-engineering-on-aws/"
  },
  {
    type: "course",
    title: "Docker and Kubernetes Mastery",
    description: "Comprehensive guide to containerization with Docker and orchestration with Kubernetes. Build scalable applications.",
    instructor: "David Park",
    rating: 4.8,
    students: 9800,
    duration: "32 hours",
    level: "Intermediate",
    price: "₹8,799",
    tags: ["Docker", "Kubernetes", "Containers", "DevOps", "Microservices"],
    url: "https://www.udemy.com/course/docker-kubernetes-the-practical-guide/"
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
    type: "article",
    title: "DevOps Best Practices 2024",
    description: "Latest trends and best practices in DevOps including GitOps, security integration, and observability.",
    author: "DevOps Weekly",
    readTime: "8 min read",
    tags: ["DevOps", "Best Practices", "2024", "GitOps"]
  }
];

export const useSearch = () => {
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState({
    type: "all",
    level: "all",
    price: "all",
    duration: "all",
  });
  const [isLoading, setIsLoading] = useState(false);

  const filteredResults = useMemo(() => {
    let results = mockCourses;

    // Filter by search query
    if (query.trim()) {
      const searchTerms = query.toLowerCase().split(' ');
      results = results.filter(result =>
        searchTerms.some(term =>
          result.title.toLowerCase().includes(term) ||
          result.description.toLowerCase().includes(term) ||
          result.tags.some(tag => tag.toLowerCase().includes(term)) ||
          result.instructor?.toLowerCase().includes(term) ||
          result.author?.toLowerCase().includes(term)
        )
      );
    }

    // Apply filters
    if (filters.type !== "all") {
      results = results.filter(result => result.type === filters.type);
    }

    if (filters.level !== "all") {
      results = results.filter(result => result.level === filters.level);
    }

    if (filters.price !== "all") {
      results = results.filter(result => {
        if (!result.price) return filters.price === "free";
        const price = parseInt(result.price.replace(/[₹,]/g, ''));
        switch (filters.price) {
          case "free":
            return price === 0;
          case "₹0-₹4,000":
            return price <= 4000;
          case "₹4,000-₹8,000":
            return price > 4000 && price <= 8000;
          case "₹8,000+":
            return price > 8000;
          default:
            return true;
        }
      });
    }

    if (filters.duration !== "all") {
      results = results.filter(result => {
        if (!result.duration) return false;
        const hours = parseInt(result.duration.split(' ')[0]);
        switch (filters.duration) {
          case "0-5 hours":
            return hours <= 5;
          case "5-20 hours":
            return hours > 5 && hours <= 20;
          case "20+ hours":
            return hours > 20;
          default:
            return true;
        }
      });
    }

    return results;
  }, [query, filters]);

  const search = (searchQuery) => {
    setIsLoading(true);
    setQuery(searchQuery);
    
    // Simulate API delay
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  const updateFilters = (newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  const clearFilters = () => {
    setFilters({
      type: "all",
      level: "all",
      price: "all",
      duration: "all",
    });
  };

  return {
    query,
    filters,
    results: filteredResults,
    isLoading,
    search,
    updateFilters,
    clearFilters,
    setQuery,
  };
};