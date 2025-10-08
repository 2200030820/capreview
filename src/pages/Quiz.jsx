import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Brain, 
  CheckCircle, 
  XCircle, 
  Clock, 
  Trophy,
  BookOpen,
  ArrowRight,
  RefreshCw,
  Target,
  Award
} from "lucide-react";

const quizzes = [
  {
    id: "ml-fundamentals",
    title: "Machine Learning Fundamentals",
    description: "Test your knowledge of basic ML concepts, algorithms, and applications",
    category: "Machine Learning",
    timeLimit: 15,
    difficulty: "Beginner to Intermediate",
    questions: [
      {
        id: 1,
        question: "Which of the following is a supervised learning algorithm?",
        options: ["K-Means Clustering", "Linear Regression", "DBSCAN", "Principal Component Analysis"],
        correctAnswer: 1,
        explanation: "Linear Regression is a supervised learning algorithm that learns from labeled training data to predict continuous values.",
        difficulty: "Easy"
      },
      {
        id: 2,
        question: "What is overfitting in machine learning?",
        options: [
          "When a model performs poorly on both training and test data",
          "When a model performs well on training data but poorly on test data", 
          "When a model takes too long to train",
          "When a model uses too much memory"
        ],
        correctAnswer: 1,
        explanation: "Overfitting occurs when a model learns the training data too well, including its noise and specific patterns, making it perform poorly on unseen data.",
        difficulty: "Medium"
      },
      {
        id: 3,
        question: "Which evaluation metric is most appropriate for a highly imbalanced classification dataset?",
        options: ["Accuracy", "F1-Score", "Mean Squared Error", "R-squared"],
        correctAnswer: 1,
        explanation: "F1-Score is ideal for imbalanced datasets as it considers both precision and recall, providing a balanced measure of the model's performance.",
        difficulty: "Medium"
      },
      {
        id: 4,
        question: "What is the purpose of cross-validation?",
        options: [
          "To increase the size of the training dataset",
          "To evaluate model performance and reduce overfitting",
          "To speed up the training process", 
          "To visualize the data"
        ],
        correctAnswer: 1,
        explanation: "Cross-validation helps assess how well a model generalizes to unseen data by training and testing on different subsets of the data.",
        difficulty: "Medium"
      },
      {
        id: 5,
        question: "In a neural network, what is the purpose of an activation function?",
        options: [
          "To initialize the weights",
          "To introduce non-linearity into the model",
          "To calculate the loss function",
          "To determine the learning rate"
        ],
        correctAnswer: 1,
        explanation: "Activation functions introduce non-linearity, allowing neural networks to learn and represent complex patterns and relationships in data.",
        difficulty: "Hard"
      }
    ]
  },
  {
    id: "devops-essentials", 
    title: "DevOps Essentials",
    description: "Assess your understanding of DevOps practices, tools, and methodologies",
    category: "DevOps",
    timeLimit: 12,
    difficulty: "Beginner to Advanced",
    questions: [
      {
        id: 1,
        question: "What is the primary goal of DevOps?",
        options: [
          "To replace developers with operations staff",
          "To bridge the gap between development and operations teams",
          "To eliminate the need for testing",
          "To reduce software development costs only"
        ],
        correctAnswer: 1,
        explanation: "DevOps aims to improve collaboration between development and operations teams, enabling faster and more reliable software delivery.",
        difficulty: "Easy"
      },
      {
        id: 2,
        question: "Which of the following is NOT a core principle of CI/CD?",
        options: [
          "Frequent code integration",
          "Automated testing",
          "Manual deployment approval for every change",
          "Continuous monitoring"
        ],
        correctAnswer: 2,
        explanation: "CI/CD emphasizes automation and frequent releases. Manual approval for every change contradicts the principle of continuous delivery.",
        difficulty: "Easy"
      },
      {
        id: 3,
        question: "What is Infrastructure as Code (IaC)?",
        options: [
          "Writing application code that runs on infrastructure",
          "Managing and provisioning infrastructure through code and automation",
          "Converting infrastructure costs into code metrics",
          "A programming language for system administrators"
        ],
        correctAnswer: 1,
        explanation: "IaC involves managing infrastructure through code, enabling version control, automation, and consistent deployments.",
        difficulty: "Medium"
      },
      {
        id: 4,
        question: "In containerization, what is the main advantage of Docker over virtual machines?",
        options: [
          "Docker provides better security",
          "Docker containers share the host OS kernel, making them more lightweight",
          "Docker is easier to install",
          "Docker applications run faster in all cases"
        ],
        correctAnswer: 1,
        explanation: "Docker containers share the host OS kernel, making them much more resource-efficient and faster to start compared to VMs.",
        difficulty: "Medium"
      },
      {
        id: 5,
        question: "What is the purpose of Kubernetes in a DevOps pipeline?",
        options: [
          "To write better application code",
          "To orchestrate and manage containerized applications at scale",
          "To replace version control systems",
          "To monitor network traffic only"
        ],
        correctAnswer: 1,
        explanation: "Kubernetes provides container orchestration, handling deployment, scaling, and management of containerized applications across clusters.",
        difficulty: "Hard"
      }
    ]
  }
];

const Quiz = () => {
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);

  const objectives = [
    "Assess learning progress through interactive quizzes",
    "Provide personalized course recommendations based on quiz results",
    "Track knowledge gaps and suggest improvement areas",
    "Gamify the learning experience with achievements and scoring",
    "Enable skill-based learning path customization"
  ];

  const todos = {
    ux: [
      "Design engaging quiz interface with progress tracking",
      "Create result visualization with performance insights",
      "Design course recommendation cards based on quiz outcomes",
      "Plan achievement and scoring system display"
    ],
    data: [
      "Build question bank with difficulty levels",
      "Implement scoring and analytics system",
      "Create course recommendation algorithm",
      "Store quiz results and learning progress"
    ],
    interactions: [
      "Quiz taking flow with timer functionality",
      "Answer selection and review capabilities",
      "Result analysis and course suggestions",
      "Retake quiz and progress tracking"
    ],
    animations: [
      "Question transition effects",
      "Progress bar animations",
      "Result reveal animations",
      "Achievement unlock celebrations"
    ],
    validations: [
      "Answer selection validation",
      "Time limit enforcement",
      "Quiz completion tracking",
      "Score calculation accuracy"
    ]
  };

  const startQuiz = (quiz) => {
    setSelectedQuiz(quiz);
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResults(false);
    setTimeRemaining(quiz.timeLimit * 60);
    setQuizStarted(true);
  };

  const selectAnswer = (answerIndex) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const nextQuestion = () => {
    if (currentQuestion < selectedQuiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      finishQuiz();
    }
  };

  const finishQuiz = () => {
    setShowResults(true);
    setQuizStarted(false);
  };

  const calculateScore = () => {
    if (!selectedQuiz) return 0;
    let correct = 0;
    selectedQuiz.questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        correct++;
      }
    });
    return Math.round((correct / selectedQuiz.questions.length) * 100);
  };

  const getRecommendations = () => {
    const score = calculateScore();
    const category = selectedQuiz?.category.toLowerCase();
    
    if (category?.includes('machine learning') || category?.includes('ml')) {
      if (score < 60) {
        return [
          {
            title: "Machine Learning Fundamentals",
            description: "Start with the basics of ML concepts and algorithms",
            level: "Beginner",
            price: "₹7,399",
            url: "https://www.khanacademy.org/computing/intro-to-algorithms"
          },
          {
            title: "Python for Data Science",
            description: "Learn Python programming specifically for data science applications",
            level: "Beginner",
            price: "₹5,999",
            url: "https://www.coursera.org/learn/python-data-analysis"
          }
        ];
      } else if (score < 80) {
        return [
          {
            title: "Complete Machine Learning Bootcamp",
            description: "Comprehensive ML course covering advanced algorithms and techniques",
            level: "Intermediate",
            price: "₹10,699",
            url: "https://www.coursera.org/learn/machine-learning"
          }
        ];
      } else {
        return [
          {
            title: "Deep Learning with TensorFlow",
            description: "Advanced deep learning and neural network architectures",
            level: "Advanced",
            price: "₹12,399",
            url: "https://www.coursera.org/specializations/deep-learning"
          }
        ];
      }
    } else if (category?.includes('devops')) {
      if (score < 60) {
        return [
          {
            title: "DevOps Fundamentals",
            description: "Introduction to DevOps practices and basic tools",
            level: "Beginner",
            price: "₹6,799",
            url: "https://www.coursera.org/learn/devops-culture-and-mindset"
          },
          {
            title: "Linux Command Line Basics",
            description: "Essential Linux skills for DevOps engineers",
            level: "Beginner",
            price: "₹4,999",
            url: "https://www.udemy.com/course/linux-command-line-volume1/"
          }
        ];
      } else if (score < 80) {
        return [
          {
            title: "Docker and Kubernetes Mastery",
            description: "Comprehensive containerization and orchestration course",
            level: "Intermediate",
            price: "₹8,799",
            url: "https://www.udemy.com/course/docker-kubernetes-the-practical-guide/"
          }
        ];
      } else {
        return [
          {
            title: "AWS DevOps Professional",
            description: "Advanced AWS DevOps practices and certifications",
            level: "Advanced", 
            price: "₹14,199",
            url: "https://aws.amazon.com/training/classroom/devops-engineering-on-aws/"
          }
        ];
      }
    }
    
    return [];
  };

  const resetQuiz = () => {
    setSelectedQuiz(null);
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResults(false);
    setQuizStarted(false);
  };

  if (showResults) {
    const score = calculateScore();
    const recommendations = getRecommendations();
    
    return (
      <PageLayout title="Quiz Results" objectives={objectives} todos={todos}>
        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="shadow-card">
            <CardHeader className="text-center">
              <div className="w-20 h-20 bg-gradient-ai rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="h-10 w-10 text-white" />
              </div>
              <CardTitle className="text-2xl">{selectedQuiz?.title} - Results</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <div className="space-y-4">
                <div className="text-4xl font-bold text-primary">{score}%</div>
                <div className="text-lg text-muted-foreground">
                  You answered {selectedAnswers.filter((answer, index) => answer === selectedQuiz?.questions[index].correctAnswer).length} out of {selectedQuiz?.questions.length} questions correctly
                </div>
                
                <div className="flex justify-center">
                  <Badge variant={score >= 80 ? "default" : score >= 60 ? "secondary" : "destructive"} className="text-lg px-4 py-2">
                    {score >= 80 ? "Excellent!" : score >= 60 ? "Good!" : "Needs Improvement"}
                  </Badge>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold mb-2 flex items-center">
                    <Target className="h-4 w-4 mr-2 text-primary" />
                    Performance Analysis
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Correct Answers:</span>
                      <span className="font-medium">{selectedAnswers.filter((answer, index) => answer === selectedQuiz?.questions[index].correctAnswer).length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Questions Attempted:</span>
                      <span className="font-medium">{selectedAnswers.filter(answer => answer !== undefined).length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Accuracy Rate:</span>
                      <span className="font-medium">{score}%</span>
                    </div>
                  </div>
                </div>
                
                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold mb-2 flex items-center">
                    <Award className="h-4 w-4 mr-2 text-success" />
                    Achievement Level
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between">
                      <span>Knowledge Level:</span>
                      <Badge variant="outline">
                        {score >= 80 ? "Advanced" : score >= 60 ? "Intermediate" : "Beginner"}
                      </Badge>
                    </div>
                    <div className="text-muted-foreground">
                      {score >= 80 
                        ? "You have strong knowledge in this area!" 
                        : score >= 60 
                        ? "You have good understanding with room for improvement."
                        : "Consider reviewing the fundamentals in this area."}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {recommendations.length > 0 && (
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <span>Recommended Courses for You</span>
                </CardTitle>
                <p className="text-muted-foreground">Based on your quiz performance, here are some courses to help you improve:</p>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {recommendations.map((course, index) => (
                    <Card key={index} className="border hover:shadow-hover transition-all duration-300">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg mb-2">{course.title}</h3>
                            <p className="text-muted-foreground mb-3">{course.description}</p>
                            <div className="flex items-center space-x-4">
                              <Badge variant="outline">{course.level}</Badge>
                              <span className="text-lg font-bold text-primary">{course.price}</span>
                            </div>
                          </div>
                          <Button 
                            variant="default" 
                            onClick={() => window.open(course.url, '_blank')}
                            className="ml-4"
                          >
                            Enroll Now
                            <ArrowRight className="h-4 w-4 ml-2" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          <div className="flex justify-center space-x-4">
            <Button variant="outline" onClick={resetQuiz}>
              <RefreshCw className="h-4 w-4 mr-2" />
              Take Another Quiz
            </Button>
            <Button variant="default" onClick={() => window.history.back()}>
              Back to Learning
            </Button>
          </div>
        </div>
      </PageLayout>
    );
  }

  if (selectedQuiz && quizStarted) {
    const question = selectedQuiz.questions[currentQuestion];
    const progress = ((currentQuestion + 1) / selectedQuiz.questions.length) * 100;
    
    return (
      <PageLayout title={`Quiz: ${selectedQuiz.title}`} objectives={objectives} todos={todos}>
        <div className="max-w-3xl mx-auto">
          <Card className="shadow-card">
            <CardHeader>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Badge variant="outline">Question {currentQuestion + 1} of {selectedQuiz.questions.length}</Badge>
                  <Badge variant={question.difficulty === "Easy" ? "secondary" : question.difficulty === "Medium" ? "default" : "destructive"}>
                    {question.difficulty}
                  </Badge>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{Math.floor(timeRemaining / 60)}:{(timeRemaining % 60).toString().padStart(2, '0')}</span>
                </div>
              </div>
              <Progress value={progress} className="h-2 mb-4" />
              <CardTitle className="text-xl">{question.question}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                {question.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => selectAnswer(index)}
                    className={`w-full text-left p-4 rounded-lg border transition-all duration-200 ${
                      selectedAnswers[currentQuestion] === index
                        ? 'border-primary bg-primary/10'
                        : 'border-border hover:border-primary/50 hover:bg-muted/50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        selectedAnswers[currentQuestion] === index
                          ? 'border-primary bg-primary text-primary-foreground'
                          : 'border-muted-foreground'
                      }`}>
                        {selectedAnswers[currentQuestion] === index && (
                          <CheckCircle className="h-4 w-4" />
                        )}
                      </div>
                      <span>{option}</span>
                    </div>
                  </button>
                ))}
              </div>
              
              <div className="flex justify-between pt-6">
                <Button 
                  variant="outline" 
                  onClick={() => currentQuestion > 0 && setCurrentQuestion(currentQuestion - 1)}
                  disabled={currentQuestion === 0}
                >
                  Previous
                </Button>
                <Button 
                  onClick={nextQuestion}
                  disabled={selectedAnswers[currentQuestion] === undefined}
                  variant="default"
                >
                  {currentQuestion === selectedQuiz.questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout title="Knowledge Assessment Quizzes" objectives={objectives} todos={todos}>
      <div className="space-y-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Test Your Knowledge</h2>
          <p className="text-lg text-muted-foreground">
            Take our interactive quizzes to assess your skills and get personalized course recommendations
            to accelerate your learning journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {quizzes.map((quiz) => (
            <Card key={quiz.id} className="shadow-card hover:shadow-hover transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 bg-gradient-ai rounded-lg flex items-center justify-center">
                    <Brain className="h-6 w-6 text-white" />
                  </div>
                  <Badge variant="outline">{quiz.category}</Badge>
                </div>
                <CardTitle className="text-xl">{quiz.title}</CardTitle>
                <p className="text-muted-foreground">{quiz.description}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>{quiz.timeLimit} minutes</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Target className="h-4 w-4 text-muted-foreground" />
                    <span>{quiz.questions.length} questions</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Trophy className="h-4 w-4 text-muted-foreground" />
                    <span>{quiz.difficulty}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <BookOpen className="h-4 w-4 text-muted-foreground" />
                    <span>Get recommendations</span>
                  </div>
                </div>
                
                <Button 
                  onClick={() => startQuiz(quiz)}
                  className="w-full"
                  variant="default"
                >
                  Start Quiz
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="shadow-card bg-gradient-ai text-white">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Why Take Our Quizzes?</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <Target className="h-8 w-8 mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Assess Your Skills</h4>
                <p className="text-white/90">Get an objective evaluation of your current knowledge level</p>
              </div>
              <div>
                <BookOpen className="h-8 w-8 mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Personalized Recommendations</h4>
                <p className="text-white/90">Receive course suggestions tailored to your skill gaps</p>
              </div>
              <div>
                <Trophy className="h-8 w-8 mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Track Progress</h4>
                <p className="text-white/90">Monitor your learning journey and celebrate achievements</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
};

export default Quiz;