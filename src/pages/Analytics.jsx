import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { BarChart3, TrendingUp, Clock, Trophy, Target, Calendar } from "lucide-react";

const Analytics = () => {
  const objectives = [
    "Display comprehensive learning analytics and progress metrics",
    "Show time tracking and study habit patterns",
    "Present skill development and completion rates",
    "Provide insights for learning optimization",
    "Enable goal setting and progress monitoring"
  ];

  const todos = {
    ux: ["Chart layouts", "Progress visualizations", "Goal tracking UI"],
    data: ["Learning analytics", "Time tracking", "Performance metrics"],
    interactions: ["Chart interactions", "Date filtering", "Goal management"],
    animations: ["Chart animations", "Progress transitions", "Goal celebrations"],
    validations: ["Data accuracy", "Chart rendering", "Goal validation"]
  };

  return (
    <PageLayout title="Learning Analytics" objectives={objectives} todos={todos}>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="shadow-card">
          <CardContent className="pt-6 text-center">
            <BarChart3 className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold">156h</div>
            <div className="text-sm text-muted-foreground">Total Study Time</div>
          </CardContent>
        </Card>
        
        <Card className="shadow-card">
          <CardContent className="pt-6 text-center">
            <Trophy className="h-8 w-8 text-success mx-auto mb-2" />
            <div className="text-2xl font-bold">12</div>
            <div className="text-sm text-muted-foreground">Courses Completed</div>
          </CardContent>
        </Card>
        
        <Card className="shadow-card">
          <CardContent className="pt-6 text-center">
            <Target className="h-8 w-8 text-secondary mx-auto mb-2" />
            <div className="text-2xl font-bold">85%</div>
            <div className="text-sm text-muted-foreground">Average Score</div>
          </CardContent>
        </Card>
        
        <Card className="shadow-card">
          <CardContent className="pt-6 text-center">
            <Calendar className="h-8 w-8 text-progress mx-auto mb-2" />
            <div className="text-2xl font-bold">28</div>
            <div className="text-sm text-muted-foreground">Day Streak</div>
          </CardContent>
        </Card>
      </div>
      
      <Card className="shadow-card mt-6">
        <CardHeader>
          <CardTitle>Learning Progress This Month</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span>React Development</span>
                <span>75%</span>
              </div>
              <Progress value={75} />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span>JavaScript Fundamentals</span>
                <span>90%</span>
              </div>
              <Progress value={90} />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span>Machine Learning</span>
                <span>45%</span>
              </div>
              <Progress value={45} />
            </div>
          </div>
        </CardContent>
      </Card>
    </PageLayout>
  );
};

export default Analytics;