import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, BookOpen, BarChart3, Settings, Shield, Database } from "lucide-react";

const Admin = () => {
  const objectives = [
    "Provide administrative dashboard for platform management",
    "Display user analytics and course performance metrics",
    "Enable content management and instructor tools",
    "Show system health and platform statistics",
    "Manage user roles and permissions"
  ];

  const todos = {
    ux: ["Admin dashboard layout", "User management UI", "Content management"],
    data: ["User analytics", "Course metrics", "System monitoring"],
    interactions: ["User management", "Content approval", "System controls"],
    animations: ["Dashboard transitions", "Data visualization", "Action feedback"],
    validations: ["Admin permissions", "Data integrity", "Security checks"]
  };

  return (
    <PageLayout title="Admin Dashboard" objectives={objectives} todos={todos}>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="shadow-card hover:shadow-hover transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-primary" />
              <span>User Management</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">Manage users, roles, and permissions</p>
            <Button variant="outline" className="w-full">View Users</Button>
          </CardContent>
        </Card>
        
        <Card className="shadow-card hover:shadow-hover transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BookOpen className="h-5 w-5 text-secondary" />
              <span>Content Management</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">Review and approve course content</p>
            <Button variant="outline" className="w-full">Manage Content</Button>
          </CardContent>
        </Card>
        
        <Card className="shadow-card hover:shadow-hover transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BarChart3 className="h-5 w-5 text-success" />
              <span>Analytics</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">Platform performance and insights</p>
            <Button variant="outline" className="w-full">View Analytics</Button>
          </CardContent>
        </Card>
        
        <Card className="shadow-card hover:shadow-hover transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Settings className="h-5 w-5 text-progress" />
              <span>System Settings</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">Configure platform settings</p>
            <Button variant="outline" className="w-full">Settings</Button>
          </CardContent>
        </Card>
        
        <Card className="shadow-card hover:shadow-hover transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-destructive" />
              <span>Security</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">Security monitoring and logs</p>
            <Button variant="outline" className="w-full">Security Center</Button>
          </CardContent>
        </Card>
        
        <Card className="shadow-card hover:shadow-hover transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Database className="h-5 w-5 text-muted-foreground" />
              <span>Database</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">Database management and backups</p>
            <Button variant="outline" className="w-full">Database Tools</Button>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
};

export default Admin;