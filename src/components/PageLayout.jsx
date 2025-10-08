import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, Target, Code, Palette, Zap, CheckCircle } from "lucide-react";
import Navigation from "./Navigation";

const PageLayout = ({ title, objectives, todos, children }) => {
  const [todoOpen, setTodoOpen] = useState(false);

  const todoSections = [
    { key: "ux", label: "UX Design", icon: Palette, items: todos.ux || [] },
    { key: "data", label: "Data & API", icon: Code, items: todos.data || [] },
    { key: "interactions", label: "Interactions", icon: Zap, items: todos.interactions || [] },
    { key: "animations", label: "Animations", icon: Target, items: todos.animations || [] },
    { key: "validations", label: "Validations", icon: CheckCircle, items: todos.validations || [] },
  ];

  return (
    <div className="min-h-screen bg-gradient-background">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-ai bg-clip-text text-transparent mb-4">
            {title}
          </h1>
        </div>

        {/* Content Area */}
        {children && (
          <div className="mb-8">
            {children}
          </div>
        )}

        {/* Objectives Section */}
        <Card className="mb-6 shadow-card border-l-4 border-l-primary">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Target className="h-5 w-5 text-primary" />
              <span>Page Objectives</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {objectives.map((objective, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">{objective}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Developer TODOs Section */}
        <Collapsible open={todoOpen} onOpenChange={setTodoOpen}>
          <CollapsibleTrigger asChild>
            <Card className="cursor-pointer hover:shadow-hover transition-all duration-300 border-l-4 border-l-secondary">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Code className="h-5 w-5 text-secondary" />
                    <span>Developer TODOs</span>
                  </div>
                  <ChevronDown 
                    className={`h-4 w-4 transition-transform duration-200 ${
                      todoOpen ? "rotate-180" : ""
                    }`} 
                  />
                </CardTitle>
              </CardHeader>
            </Card>
          </CollapsibleTrigger>
          
          <CollapsibleContent className="mt-4 space-y-4">
            {todoSections.map(({ key, label, icon: Icon, items }) => 
              items.length > 0 && (
                <Card key={key} className="shadow-card">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base flex items-center space-x-2">
                      <Icon className="h-4 w-4 text-muted-foreground" />
                      <span>{label}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1">
                      {items.map((item, index) => (
                        <li key={index} className="flex items-start space-x-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            )}
          </CollapsibleContent>
        </Collapsible>
      </main>
    </div>
  );
};

export default PageLayout;
