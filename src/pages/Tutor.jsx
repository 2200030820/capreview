import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Bot, Send, Mic, Image, Code, Brain } from "lucide-react";
import { useState } from "react";

const Tutor = () => {
  const { toast } = useToast();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hello! I'm your AI tutor. I can help you with explanations, practice problems, code review, and answering questions. What would you like to learn about today?" }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!message.trim()) return;
    
    const userMessage = message;
    setMessage("");
    setMessages(prev => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);
    
    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "That's a great question! Let me explain that concept step by step...",
        "I'd be happy to help you understand this topic better. Here's a detailed explanation...",
        "Let me break this down for you with some examples...",
        "That's an interesting problem! Here's how I would approach it..."
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      setMessages(prev => [...prev, { role: "assistant", content: randomResponse }]);
      setIsLoading(false);
    }, 1500);
  };

  const handleQuickAction = (action) => {
    toast({
      title: `${action} Mode Activated`,
      description: `I'm ready to help you with ${action.toLowerCase()}!`,
    });
  };

  const objectives = [
    "Provide interactive AI tutoring with natural language chat",
    "Support multiple learning modes: Q&A, explanations, practice",
    "Enable voice and image inputs for diverse learning styles",
    "Track tutoring sessions and learning progress",
    "Offer subject-specific AI assistance and code help"
  ];

  const todos = {
    ux: ["Design chat interface", "Voice/image input UI", "Session history"],
    data: ["AI chat integration", "Session tracking", "Knowledge base"],
    interactions: ["Real-time chat", "Voice recognition", "Code assistance"],
    animations: ["Typing indicators", "Message animations", "Voice visualization"],
    validations: ["Input sanitization", "AI response quality", "Session management"]
  };

  return (
    <PageLayout title="AI Tutor" objectives={objectives} todos={todos}>
      <div className="max-w-4xl mx-auto">
        <Card className="shadow-card min-h-[600px] flex flex-col">
          <CardHeader className="bg-gradient-ai text-white">
            <CardTitle className="flex items-center space-x-2">
              <Bot className="h-6 w-6" />
              <span>Your AI Learning Assistant</span>
            </CardTitle>
          </CardHeader>
          
          <CardContent className="flex-1 p-6 flex flex-col">
            <div className="flex-1 bg-muted rounded-lg p-4 mb-4 min-h-[400px] overflow-y-auto">
              <div className="space-y-4">
                {messages.map((msg, index) => (
                  <div key={index} className={`flex items-start space-x-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      msg.role === 'assistant' 
                        ? 'bg-gradient-ai' 
                        : 'bg-primary'
                    }`}>
                      {msg.role === 'assistant' ? (
                        <Bot className="h-4 w-4 text-white" />
                      ) : (
                        <span className="text-white text-sm font-semibold">U</span>
                      )}
                    </div>
                    <div className={`p-3 rounded-lg max-w-lg ${
                      msg.role === 'assistant' 
                        ? 'bg-card' 
                        : 'bg-primary text-primary-foreground'
                    }`}>
                      <p>{msg.content}</p>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gradient-ai rounded-full flex items-center justify-center">
                      <Bot className="h-4 w-4 text-white animate-pulse" />
                    </div>
                    <div className="bg-card p-3 rounded-lg max-w-lg">
                      <p className="animate-pulse">Thinking...</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex space-x-2">
                <Input 
                  placeholder="Ask me anything about your studies..." 
                  className="flex-1" 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <Button 
                  variant="ai" 
                  size="icon" 
                  onClick={handleSendMessage}
                  disabled={isLoading || !message.trim()}
                >
                  <Send className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon"><Mic className="h-4 w-4" /></Button>
                <Button variant="outline" size="icon"><Image className="h-4 w-4" /></Button>
              </div>
              
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handleQuickAction("Explain Concept")}
                >
                  <Brain className="h-4 w-4 mr-1" />Explain Concept
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handleQuickAction("Code Help")}
                >
                  <Code className="h-4 w-4 mr-1" />Code Help
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handleQuickAction("Practice Quiz")}
                >
                  Practice Quiz
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
};

export default Tutor;