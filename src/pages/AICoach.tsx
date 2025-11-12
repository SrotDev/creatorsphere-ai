import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, ArrowLeft, CheckCircle2, AlertCircle, TrendingUp, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";

const AICoach = () => {
  const navigate = useNavigate();

  const weeklyReport = {
    score: 87,
    trend: "up",
    previousScore: 81,
  };

  const insights = [
    {
      type: "success",
      title: "Great Job on Consistency!",
      description: "You posted 5 times this week, maintaining your schedule perfectly.",
      icon: CheckCircle2,
    },
    {
      type: "warning",
      title: "Optimize Your Posting Times",
      description: "Your best engagement happens at 2 PM. Try scheduling more posts around this time.",
      icon: AlertCircle,
    },
    {
      type: "tip",
      title: "Add More CTAs",
      description: "Posts with clear calls-to-action get 40% more engagement. Try adding 'Save this post' or 'Share with friends'.",
      icon: Target,
    },
  ];

  const recommendations = [
    {
      category: "Content Strategy",
      tips: [
        "Focus more on 'Quick Tips' format - it's your highest performer (4.8% engagement)",
        "Increase video content - videos get 3x more engagement than images",
        "Try carousel posts - they have great save rates in your niche",
      ]
    },
    {
      category: "Engagement",
      tips: [
        "Respond to comments within first hour - boosts algorithm visibility",
        "Ask questions in your captions to encourage comments",
        "Use polls in your stories - they have 67% completion rate",
      ]
    },
    {
      category: "Growth Tactics",
      tips: [
        "Collaborate with creators in similar size range (3K-8K followers)",
        "Cross-promote on 2-3 platforms instead of focusing on just one",
        "Repurpose your top content into different formats",
      ]
    },
  ];

  const missingElements = [
    { element: "Trending Hashtags", impact: "Medium", action: "Add 3-5 trending hashtags to increase discoverability" },
    { element: "Video Captions", impact: "High", action: "80% of viewers watch without sound - add captions to videos" },
    { element: "Consistent Branding", impact: "Medium", action: "Use consistent colors and fonts across all posts" },
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
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl">AI Growth Coach</span>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Your Personal Growth Coach</h1>
            <p className="text-muted-foreground text-lg">
              AI-powered insights and recommendations to accelerate your growth
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <Card className="border-2 shadow-elevated bg-gradient-primary text-white">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className="text-3xl font-bold mb-2">Weekly Report Card</h2>
                      <p className="opacity-90">Your performance this week</p>
                    </div>
                    <div className="text-center">
                      <div className="text-5xl font-bold mb-2">{weeklyReport.score}</div>
                      <div className="flex items-center gap-1 justify-center">
                        <TrendingUp className="w-5 h-5" />
                        <span className="text-lg font-semibold">+{weeklyReport.score - weeklyReport.previousScore}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 shadow-elevated">
                <CardHeader>
                  <CardTitle>Key Insights This Week</CardTitle>
                  <CardDescription>What's working and what needs attention</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {insights.map((insight, idx) => {
                    const Icon = insight.icon;
                    return (
                      <div key={idx} className="p-4 bg-muted/50 rounded-lg border-2 flex gap-4">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                          insight.type === "success" ? "bg-green-500/10" :
                          insight.type === "warning" ? "bg-yellow-500/10" :
                          "bg-blue-500/10"
                        }`}>
                          <Icon className={`w-6 h-6 ${
                            insight.type === "success" ? "text-green-500" :
                            insight.type === "warning" ? "text-yellow-500" :
                            "text-blue-500"
                          }`} />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg mb-1">{insight.title}</h3>
                          <p className="text-muted-foreground">{insight.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>

              <Card className="border-2 shadow-elevated">
                <CardHeader>
                  <CardTitle>Missing Elements</CardTitle>
                  <CardDescription>Quick wins to improve your content</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {missingElements.map((item, idx) => (
                      <div key={idx} className="p-4 bg-muted/50 rounded-lg border flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-semibold">{item.element}</h3>
                            <Badge variant={item.impact === "High" ? "default" : "outline"} className="text-xs">
                              {item.impact} Impact
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{item.action}</p>
                        </div>
                        <Button variant="outline" size="sm">Fix</Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 shadow-elevated">
                <CardHeader>
                  <CardTitle>Personalized Recommendations</CardTitle>
                  <CardDescription>Tailored strategies for your growth</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {recommendations.map((rec, idx) => (
                      <div key={idx}>
                        <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                          {rec.category}
                        </h3>
                        <ul className="space-y-2 ml-4">
                          {rec.tips.map((tip, tipIdx) => (
                            <li key={tipIdx} className="flex gap-3 text-muted-foreground">
                              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                              <span>{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle>Growth Goals</CardTitle>
                  <CardDescription>Your progress this month</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Followers Goal</span>
                      <span className="text-sm font-bold">5.8K / 10K</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-gradient-primary h-2 rounded-full" style={{ width: '58%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Engagement Rate</span>
                      <span className="text-sm font-bold">4.2% / 5%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-gradient-primary h-2 rounded-full" style={{ width: '84%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Posts This Month</span>
                      <span className="text-sm font-bold">18 / 20</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-gradient-primary h-2 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle>Next Steps</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button variant="gradient" className="w-full justify-start" onClick={() => navigate('/idea-spark')}>
                    Generate Optimized Content
                  </Button>
                  <Button variant="outline" className="w-full justify-start" onClick={() => navigate('/planner')}>
                    Schedule at Best Times
                  </Button>
                  <Button variant="outline" className="w-full justify-start" onClick={() => navigate('/market-pulse')}>
                    Check Trending Topics
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 bg-muted/50">
                <CardContent className="pt-6 text-center">
                  <Brain className="w-12 h-12 mx-auto mb-3 text-primary" />
                  <h3 className="font-bold mb-2">Pro Tip</h3>
                  <p className="text-sm text-muted-foreground">
                    Creators who follow AI Coach recommendations grow 3x faster on average!
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AICoach;
