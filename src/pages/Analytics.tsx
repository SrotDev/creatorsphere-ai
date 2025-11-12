import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart3, ArrowLeft, TrendingUp, TrendingDown, Eye, Heart, MessageCircle, Share2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Analytics = () => {
  const navigate = useNavigate();

  const growthData = [
    { month: 'Jan', followers: 1200, engagement: 450 },
    { month: 'Feb', followers: 1900, engagement: 680 },
    { month: 'Mar', followers: 2400, engagement: 920 },
    { month: 'Apr', followers: 3100, engagement: 1150 },
    { month: 'May', followers: 4200, engagement: 1580 },
    { month: 'Jun', followers: 5800, engagement: 2100 },
  ];

  const contentPerformance = [
    { type: 'Reels', views: 45000, engagement: 3200 },
    { type: 'Posts', views: 28000, engagement: 1900 },
    { type: 'Stories', views: 18000, engagement: 950 },
    { type: 'IGTV', views: 12000, engagement: 680 },
  ];

  const topPosts = [
    { title: "React Hooks Tutorial", platform: "YouTube", views: 15200, likes: 1240, comments: 180 },
    { title: "Productivity Hacks", platform: "Instagram", views: 12800, likes: 980, comments: 145 },
    { title: "Web Dev Trends", platform: "TikTok", views: 21500, likes: 1850, comments: 220 },
  ];

  const stats = [
    { label: "Total Followers", value: "5.8K", change: "+23%", trend: "up", icon: Eye },
    { label: "Avg. Engagement", value: "4.2%", change: "+0.8%", trend: "up", icon: Heart },
    { label: "Total Reach", value: "128K", change: "+18%", trend: "up", icon: TrendingUp },
    { label: "Total Shares", value: "2.1K", change: "-5%", trend: "down", icon: Share2 },
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
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl">Analytics Dashboard</span>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Performance Analytics</h1>
            <p className="text-muted-foreground text-lg">
              Track your growth and optimize your content strategy
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, idx) => (
              <Card key={idx} className="border-2">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                      <p className="text-3xl font-bold mb-2">{stat.value}</p>
                      <div className="flex items-center gap-1">
                        {stat.trend === "up" ? (
                          <TrendingUp className="w-4 h-4 text-green-500" />
                        ) : (
                          <TrendingDown className="w-4 h-4 text-red-500" />
                        )}
                        <span className={`text-sm font-semibold ${stat.trend === "up" ? "text-green-500" : "text-red-500"}`}>
                          {stat.change}
                        </span>
                      </div>
                    </div>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <stat.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <Card className="border-2 shadow-elevated">
              <CardHeader>
                <CardTitle>Growth Over Time</CardTitle>
                <CardDescription>Followers and engagement trends</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={growthData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="followers" stroke="hsl(var(--primary))" strokeWidth={2} />
                    <Line type="monotone" dataKey="engagement" stroke="hsl(var(--secondary))" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="border-2 shadow-elevated">
              <CardHeader>
                <CardTitle>Content Performance by Type</CardTitle>
                <CardDescription>Views and engagement by format</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={contentPerformance}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="type" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="views" fill="hsl(var(--primary))" />
                    <Bar dataKey="engagement" fill="hsl(var(--secondary))" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          <Card className="border-2 shadow-elevated">
            <CardHeader>
              <CardTitle>Top Performing Content</CardTitle>
              <CardDescription>Your best posts this month</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topPosts.map((post, idx) => (
                  <div key={idx} className="p-4 bg-muted/50 rounded-lg border-2 hover:border-primary/50 transition-all">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{post.title}</h3>
                        <Badge variant="outline" className="mt-1">{post.platform}</Badge>
                      </div>
                      <Badge className="bg-gradient-primary text-white">#{idx + 1}</Badge>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Eye className="w-4 h-4 text-muted-foreground" />
                        <span className="font-semibold">{post.views.toLocaleString()}</span>
                        <span className="text-muted-foreground">views</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Heart className="w-4 h-4 text-muted-foreground" />
                        <span className="font-semibold">{post.likes.toLocaleString()}</span>
                        <span className="text-muted-foreground">likes</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MessageCircle className="w-4 h-4 text-muted-foreground" />
                        <span className="font-semibold">{post.comments}</span>
                        <span className="text-muted-foreground">comments</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
