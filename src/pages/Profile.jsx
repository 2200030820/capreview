import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from "@/hooks/useAuth";
import { useProfile } from "@/hooks/useProfile";
import ProfileEditor from "@/components/ProfileEditor";
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  Edit,
  Trophy,
  Target,
  Brain,
  Settings,
  Bell,
  Shield,
  Globe,
  Palette
} from "lucide-react";

const Profile = () => {
  const { user } = useAuth();
  const { profile, loading } = useProfile();
  const objectives = [
    "Display and edit user profile information and preferences",
    "Show learning profile and personalized recommendations",
    "Manage account settings and privacy controls",
    "Present learning achievements and progress statistics",
    "Configure notification and study preferences"
  ];

  const todos = {
    ux: [
      "Design profile editing interface with form validation",
      "Create learning preference selection UI",
      "Design achievement showcase layout",
      "Plan privacy and security settings interface"
    ],
    data: [
      "Fetch user profile and account information",
      "Load learning preferences and history",
      "Get achievement data and certifications",
      "Retrieve notification and privacy settings"
    ],
    interactions: [
      "Profile editing and validation",
      "Learning preference updates",
      "Achievement sharing functionality",
      "Settings management and sync"
    ],
    animations: [
      "Profile picture upload animations",
      "Achievement unlock celebrations",
      "Settings toggle animations",
      "Form validation feedback effects"
    ],
    validations: [
      "Profile information validation",
      "Email and phone verification",
      "Password strength requirements",
      "Privacy setting confirmations"
    ]
  };

  const userStats = [
    { label: "Courses Completed", value: 12, icon: Trophy },
    { label: "Study Hours", value: 156, icon: Target },
    { label: "Skill Areas", value: 8, icon: Brain },
    { label: "Certificates", value: 6, icon: Trophy }
  ];

  const skillAreas = [
    { name: "React Development", level: "Advanced", progress: 85 },
    { name: "JavaScript", level: "Expert", progress: 95 },
    { name: "UI/UX Design", level: "Intermediate", progress: 70 },
    { name: "Machine Learning", level: "Beginner", progress: 30 },
    { name: "Node.js", level: "Intermediate", progress: 65 },
    { name: "Python", level: "Intermediate", progress: 60 }
  ];

  const learningGoals = [
    { goal: "Complete Advanced React course", deadline: "March 2024", progress: 75 },
    { goal: "Master Machine Learning fundamentals", deadline: "June 2024", progress: 40 },
    { goal: "Build 3 portfolio projects", deadline: "April 2024", progress: 67 }
  ];

  return (
    <PageLayout title="Learning Profile" objectives={objectives} todos={todos}>
      <div className="space-y-8">
        {/* Profile Header */}
        <Card className="shadow-card">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-6">
              {/* Profile Picture */}
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-ai rounded-full flex items-center justify-center">
                  <span className="text-3xl text-white font-bold">
                    {user?.email?.substring(0, 2).toUpperCase() || 'U'}
                  </span>
                </div>
                <Button size="icon" variant="outline" className="absolute -bottom-2 -right-2 h-8 w-8">
                  <Edit className="h-4 w-4" />
                </Button>
              </div>

              {/* Profile Info */}
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-2">
                  {user?.user_metadata?.full_name || user?.email?.split('@')[0] || 'User'}
                </h2>
                <p className="text-muted-foreground mb-4">Student | Learning Enthusiast</p>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                  <div className="flex items-center space-x-2 text-sm">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span>{user?.email || 'Not provided'}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>Location not set</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>Joined {user?.created_at ? new Date(user.created_at).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : 'Recently'}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Globe className="h-4 w-4 text-muted-foreground" />
                    <span>English</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Premium Member</Badge>
                  <Badge variant="outline">7-Day Streak</Badge>
                  <Badge variant="outline">Early Adopter</Badge>
                </div>
              </div>

              <Button variant="outline">
                <Edit className="h-4 w-4 mr-2" />
                Edit Profile
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {userStats.map((stat, index) => {
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

        {/* Profile Tabs */}
        <Tabs defaultValue="learning" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="learning">Learning</TabsTrigger>
            <TabsTrigger value="personal">Personal</TabsTrigger>
            <TabsTrigger value="preferences">Preferences</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="edit">Edit Profile</TabsTrigger>
          </TabsList>

          {/* Learning Profile */}
          <TabsContent value="learning" className="space-y-6">
            {/* Skill Areas */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Skill Areas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {skillAreas.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <Badge variant={
                        skill.level === "Expert" ? "default" :
                        skill.level === "Advanced" ? "secondary" :
                        skill.level === "Intermediate" ? "outline" : "secondary"
                      }>
                        {skill.level}
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="flex-1 bg-muted rounded-full h-2">
                        <div 
                          className="bg-gradient-ai h-2 rounded-full transition-all duration-300"
                          style={{ width: `${skill.progress}%` }}
                        />
                      </div>
                      <span className="text-sm text-muted-foreground w-12">{skill.progress}%</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Learning Goals */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Learning Goals</span>
                  <Button variant="outline" size="sm">Add Goal</Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {learningGoals.map((goal, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium">{goal.goal}</h3>
                      <span className="text-sm text-muted-foreground">{goal.deadline}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="flex-1 bg-muted rounded-full h-2">
                        <div 
                          className="bg-gradient-learning h-2 rounded-full transition-all duration-300"
                          style={{ width: `${goal.progress}%` }}
                        />
                      </div>
                      <span className="text-sm text-muted-foreground w-12">{goal.progress}%</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Personal Information */}
          <TabsContent value="personal" className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" defaultValue={user?.user_metadata?.first_name || ''} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" defaultValue={user?.user_metadata?.last_name || ''} />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue={user?.email || ''} disabled />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" defaultValue="San Francisco, CA" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea 
                    id="bio" 
                    defaultValue="Full-stack developer passionate about AI and machine learning. Currently expanding my skills in React and Python."
                    rows={3}
                  />
                </div>

                <Button variant="ai">Save Changes</Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Preferences */}
          <TabsContent value="preferences" className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Settings className="h-5 w-5" />
                  <span>Learning Preferences</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Daily Study Reminders</h3>
                      <p className="text-sm text-muted-foreground">Get notified to maintain your learning streak</p>
                    </div>
                    <input type="checkbox" defaultChecked className="toggle" />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Course Recommendations</h3>
                      <p className="text-sm text-muted-foreground">Receive personalized course suggestions</p>
                    </div>
                    <input type="checkbox" defaultChecked className="toggle" />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Achievement Notifications</h3>
                      <p className="text-sm text-muted-foreground">Get alerts when you unlock achievements</p>
                    </div>
                    <input type="checkbox" defaultChecked className="toggle" />
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="font-medium mb-4">Preferred Learning Style</h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input type="radio" name="learningStyle" value="visual" defaultChecked />
                      <span>Visual (videos, diagrams)</span>
                    </label>
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input type="radio" name="learningStyle" value="reading" />
                      <span>Reading (articles, documentation)</span>
                    </label>
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input type="radio" name="learningStyle" value="hands-on" />
                      <span>Hands-on (projects, exercises)</span>
                    </label>
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input type="radio" name="learningStyle" value="mixed" />
                      <span>Mixed approach</span>
                    </label>
                  </div>
                </div>

                <Button variant="ai">Save Preferences</Button>
              </CardContent>
            </Card>

            {/* Theme and Language */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Palette className="h-5 w-5" />
                  <span>Appearance & Language</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="theme">Theme</Label>
                  <select id="theme" className="w-full mt-1 p-2 border border-input rounded-md bg-background">
                    <option value="system">System Default</option>
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                  </select>
                </div>
                
                <div>
                  <Label htmlFor="language">Language</Label>
                  <select id="language" className="w-full mt-1 p-2 border border-input rounded-md bg-background">
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                    <option value="de">German</option>
                  </select>
                </div>

                <Button variant="outline">Apply Changes</Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Security */}
          <TabsContent value="security" className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-5 w-5" />
                  <span>Account Security</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h3 className="font-medium">Password</h3>
                    <p className="text-sm text-muted-foreground">Last changed 3 months ago</p>
                  </div>
                  <Button variant="outline">Change Password</Button>
                </div>
                
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h3 className="font-medium">Two-Factor Authentication</h3>
                    <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
                  </div>
                  <Button variant="outline">Enable 2FA</Button>
                </div>
                
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h3 className="font-medium">Active Sessions</h3>
                    <p className="text-sm text-muted-foreground">Manage your active devices</p>
                  </div>
                  <Button variant="outline">View Sessions</Button>
                </div>
              </CardContent>
            </Card>

            {/* Privacy Settings */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Privacy Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Profile Visibility</h3>
                    <p className="text-sm text-muted-foreground">Control who can see your profile</p>
                  </div>
                  <select className="p-2 border border-input rounded-md bg-background">
                    <option value="public">Public</option>
                    <option value="students">Students Only</option>
                    <option value="private">Private</option>
                  </select>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Learning Analytics</h3>
                    <p className="text-sm text-muted-foreground">Share anonymous learning data to improve platform</p>
                  </div>
                  <input type="checkbox" defaultChecked className="toggle" />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Marketing Emails</h3>
                    <p className="text-sm text-muted-foreground">Receive updates about new courses and features</p>
                  </div>
                  <input type="checkbox" className="toggle" />
                </div>

                <Button variant="ai">Save Privacy Settings</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="edit" className="space-y-6">
            <ProfileEditor />
          </TabsContent>
        </Tabs>
      </div>
    </PageLayout>
  );
};

export default Profile;