import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowLeft, Plus, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";

const ContentPlanner = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState<number | null>(null);

  const daysInMonth = 31;
  const firstDayOfWeek = 3; // Wednesday
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const scheduledContent = {
    5: { title: "React Hooks Tutorial", platform: "YouTube", time: "10:00 AM" },
    12: { title: "Productivity Tips", platform: "Instagram", time: "2:00 PM" },
    18: { title: "Tech News Roundup", platform: "TikTok", time: "6:00 PM" },
    22: { title: "Code Review Session", platform: "YouTube", time: "3:00 PM" },
    28: { title: "Web Dev Trends 2024", platform: "Instagram", time: "12:00 PM" },
  };

  const bestTimes = [
    { day: "Monday", time: "10:00 AM - 12:00 PM", engagement: "High" },
    { day: "Wednesday", time: "2:00 PM - 4:00 PM", engagement: "Very High" },
    { day: "Friday", time: "6:00 PM - 8:00 PM", engagement: "High" },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <header className="border-b bg-background/95 backdrop-blur sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => navigate('/dashboard')}>
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div className="flex items-center gap-2">
              <div className="bg-gradient-primary p-2 rounded-lg">
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl">Content Planner</span>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Plan Your Content Calendar</h1>
            <p className="text-muted-foreground text-lg">
              Schedule posts and manage your content strategy
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="border-2 shadow-elevated">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-2xl">January 2024</CardTitle>
                      <CardDescription>Click on dates to schedule content</CardDescription>
                    </div>
                    <Button variant="gradient">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Post
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-7 gap-2">
                    {weekDays.map((day) => (
                      <div key={day} className="text-center font-semibold text-sm text-muted-foreground py-2">
                        {day}
                      </div>
                    ))}
                    {Array.from({ length: firstDayOfWeek }).map((_, idx) => (
                      <div key={`empty-${idx}`} />
                    ))}
                    {Array.from({ length: daysInMonth }).map((_, idx) => {
                      const day = idx + 1;
                      const hasContent = day in scheduledContent;
                      const content = hasContent ? scheduledContent[day as keyof typeof scheduledContent] : null;
                      
                      return (
                        <div
                          key={day}
                          onClick={() => setSelectedDate(day)}
                          className={`
                            aspect-square p-2 rounded-lg border-2 cursor-pointer transition-all
                            ${selectedDate === day ? 'border-primary bg-primary/10' : 'border-border hover:border-primary/50'}
                            ${hasContent ? 'bg-gradient-primary text-white hover:opacity-90' : ''}
                          `}
                        >
                          <div className="text-sm font-semibold">{day}</div>
                          {hasContent && content && (
                            <div className="mt-1">
                              <div className="text-[10px] font-medium truncate">{content.title}</div>
                              <Badge variant="secondary" className="text-[8px] px-1 py-0 mt-1">
                                {content.platform}
                              </Badge>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    Best Times to Post
                  </CardTitle>
                  <CardDescription>Based on your audience engagement</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {bestTimes.map((time, idx) => (
                    <div key={idx} className="p-3 bg-muted/50 rounded-lg border">
                      <div className="font-semibold">{time.day}</div>
                      <div className="text-sm text-muted-foreground">{time.time}</div>
                      <Badge variant="outline" className="mt-2 text-xs">
                        {time.engagement} Engagement
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {selectedDate && scheduledContent[selectedDate as keyof typeof scheduledContent] && (
                <Card className="border-2 border-primary">
                  <CardHeader>
                    <CardTitle>Scheduled for Jan {selectedDate}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {(() => {
                      const content = scheduledContent[selectedDate as keyof typeof scheduledContent];
                      return (
                        <>
                          <div>
                            <div className="text-sm text-muted-foreground">Title</div>
                            <div className="font-semibold">{content.title}</div>
                          </div>
                          <div>
                            <div className="text-sm text-muted-foreground">Platform</div>
                            <Badge>{content.platform}</Badge>
                          </div>
                          <div>
                            <div className="text-sm text-muted-foreground">Time</div>
                            <div className="font-semibold">{content.time}</div>
                          </div>
                          <div className="flex gap-2 pt-2">
                            <Button variant="outline" size="sm" className="flex-1">Edit</Button>
                            <Button variant="destructive" size="sm" className="flex-1">Delete</Button>
                          </div>
                        </>
                      );
                    })()}
                  </CardContent>
                </Card>
              )}

              <Card className="border-2">
                <CardHeader>
                  <CardTitle>Quick Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">This Month</span>
                    <span className="font-bold">5 Posts</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Next Week</span>
                    <span className="font-bold">2 Posts</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Draft Ideas</span>
                    <span className="font-bold">12</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentPlanner;
