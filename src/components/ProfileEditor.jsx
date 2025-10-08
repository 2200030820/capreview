import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useProfile } from "@/hooks/useProfile";
import { useAuth } from "@/hooks/useAuth";
import { Save, User, Settings, Shield, Palette } from "lucide-react";

const ProfileEditor = () => {
  const { user } = useAuth();
  const { profile, updateProfile, loading } = useProfile();
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState(profile || {});

  if (loading) {
    return <div>Loading profile...</div>;
  }

  if (!profile) {
    return <div>No profile data available</div>;
  }

  const handleSave = async () => {
    const success = await updateProfile(editData);
    if (success) {
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditData(profile);
    setIsEditing(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Profile Settings</h2>
        {!isEditing ? (
          <Button onClick={() => setIsEditing(true)} variant="outline">
            <User className="h-4 w-4 mr-2" />
            Edit Profile
          </Button>
        ) : (
          <div className="space-x-2">
            <Button onClick={handleCancel} variant="outline">
              Cancel
            </Button>
            <Button onClick={handleSave} variant="default">
              <Save className="h-4 w-4 mr-2" />
              Save Changes
            </Button>
          </div>
        )}
      </div>

      <Tabs defaultValue="personal" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="personal">Personal Info</TabsTrigger>
          <TabsTrigger value="preferences">Preferences</TabsTrigger>
          <TabsTrigger value="privacy">Privacy</TabsTrigger>
        </TabsList>

        <TabsContent value="personal" className="space-y-6">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <User className="h-5 w-5" />
                <span>Personal Information</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    value={editData.first_name || ''}
                    onChange={(e) => setEditData({ ...editData, first_name: e.target.value })}
                    disabled={!isEditing}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    value={editData.last_name || ''}
                    onChange={(e) => setEditData({ ...editData, last_name: e.target.value })}
                    disabled={!isEditing}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={user?.email || ''}
                  disabled
                  className="bg-muted"
                />
                <p className="text-xs text-muted-foreground">Email cannot be changed here</p>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={editData.phone || ''}
                  onChange={(e) => setEditData({ ...editData, phone: e.target.value })}
                  disabled={!isEditing}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  value={editData.location || ''}
                  onChange={(e) => setEditData({ ...editData, location: e.target.value })}
                  disabled={!isEditing}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  value={editData.bio || ''}
                  onChange={(e) => setEditData({ ...editData, bio: e.target.value })}
                  disabled={!isEditing}
                  rows={3}
                  placeholder="Tell us about yourself..."
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

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
                  <Switch
                    checked={editData.learning_preferences?.daily_reminders ?? true}
                    onCheckedChange={(checked) => 
                      setEditData({
                        ...editData,
                        learning_preferences: {
                          ...editData.learning_preferences,
                          daily_reminders: checked,
                        }
                      })
                    }
                    disabled={!isEditing}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Course Recommendations</h3>
                    <p className="text-sm text-muted-foreground">Receive personalized course suggestions</p>
                  </div>
                  <Switch
                    checked={editData.learning_preferences?.course_recommendations ?? true}
                    onCheckedChange={(checked) => 
                      setEditData({
                        ...editData,
                        learning_preferences: {
                          ...editData.learning_preferences,
                          course_recommendations: checked,
                        }
                      })
                    }
                    disabled={!isEditing}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Achievement Notifications</h3>
                    <p className="text-sm text-muted-foreground">Get alerts when you unlock achievements</p>
                  </div>
                  <Switch
                    checked={editData.learning_preferences?.achievement_notifications ?? true}
                    onCheckedChange={(checked) => 
                      setEditData({
                        ...editData,
                        learning_preferences: {
                          ...editData.learning_preferences,
                          achievement_notifications: checked,
                        }
                      })
                    }
                    disabled={!isEditing}
                  />
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="font-medium mb-4">Preferred Learning Style</h3>
                <Select
                  value={editData.learning_preferences?.style || 'mixed'}
                  onValueChange={(value) => 
                    setEditData({
                      ...editData,
                      learning_preferences: {
                        ...editData.learning_preferences,
                        style: value,
                      }
                    })
                  }
                  disabled={!isEditing}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="visual">Visual (videos, diagrams)</SelectItem>
                    <SelectItem value="reading">Reading (articles, documentation)</SelectItem>
                    <SelectItem value="hands-on">Hands-on (projects, exercises)</SelectItem>
                    <SelectItem value="mixed">Mixed approach</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="privacy" className="space-y-6">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="h-5 w-5" />
                <span>Privacy Settings</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Profile Visibility</h3>
                  <p className="text-sm text-muted-foreground">Control who can see your profile</p>
                </div>
                <Select
                  value={editData.privacy_settings?.profile_visibility || 'public'}
                  onValueChange={(value) => 
                    setEditData({
                      ...editData,
                      privacy_settings: {
                        ...editData.privacy_settings,
                        profile_visibility: value,
                      }
                    })
                  }
                  disabled={!isEditing}
                >
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="public">Public</SelectItem>
                    <SelectItem value="students">Students Only</SelectItem>
                    <SelectItem value="private">Private</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Learning Analytics</h3>
                  <p className="text-sm text-muted-foreground">Share anonymous learning data to improve platform</p>
                </div>
                <Switch
                  checked={editData.privacy_settings?.learning_analytics ?? true}
                  onCheckedChange={(checked) => 
                    setEditData({
                      ...editData,
                      privacy_settings: {
                        ...editData.privacy_settings,
                        learning_analytics: checked,
                      }
                    })
                  }
                  disabled={!isEditing}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Marketing Emails</h3>
                  <p className="text-sm text-muted-foreground">Receive updates about new courses and features</p>
                </div>
                <Switch
                  checked={editData.privacy_settings?.marketing_emails ?? false}
                  onCheckedChange={(checked) => 
                    setEditData({
                      ...editData,
                      privacy_settings: {
                        ...editData.privacy_settings,
                        marketing_emails: checked,
                      }
                    })
                  }
                  disabled={!isEditing}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProfileEditor;
