import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, ArrowLeft, Hash, Video, Plus, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";

const MarketPulse = () => {
  const navigate = useNavigate();

  const trendingHashtags = [
    { tag: "#TechTips", posts: "2.4M", growth: "+185%", category: "Tech" },
    { tag: "#ProductivityHacks", posts: "1.8M", growth: "+142%", category: "Lifestyle" },
    { tag: "#WebDev2024", posts: "980K", growth: "+98%", category: "Tech" },
    { tag: "#LearnToCode", posts: "3.2M", growth: "+76%", category: "Education" },
    { tag: "#CreatorEconomy", posts: "1.5M", growth: "+124%", category: "Business" },
    { tag: "#AITools", posts: "2.9M", growth: "+210%", category: "Tech" },
  ];

  const trendingFormats = [
    { 
      format: "Before & After Transformations", 
      platforms: ["Instagram", "TikTok"], 
      engagement: "Very High",
      description: "Show progress, results, or transformations in a split-screen format"
    },
    { 
      format: "Day in the Life", 
      platforms: ["YouTube", "Instagram"], 
      engagement: "High",
      description: "Document your daily routine as a creator or professional"
    },
    { 
      format: "Quick Tips (60 sec)", 
      platforms: ["TikTok", "Instagram"], 
      engagement: "Very High",
      description: "Fast-paced, actionable tips that viewers can implement immediately"
    },
    { 
      format: "POV Content", 
      platforms: ["TikTok", "Instagram"], 
      engagement: "High",
      description: "Point of view content that puts the viewer in a specific scenario"
    },
  ];

  const regionalTrends = [
    { region: "Global", trend: "AI & Automation", interest: "Rising Fast" },
    { region: "South Asia", trend: "Tech Education in Bengali", interest: "Growing" },
    { region: "India", trend: "Career Development", interest: "Very High" },
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
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl">Market Pulse</span>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Live Market Trends</h1>
            <p className="text-muted-foreground text-lg">
              Stay ahead with real-time trending formats, hashtags, and topics
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <Card className="border-2 shadow-elevated">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Hash className="w-5 h-5 text-primary" />
                    <CardTitle>Trending Hashtags</CardTitle>
                  </div>
                  <CardDescription>Most popular hashtags in your niche right now</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {trendingHashtags.map((item, idx) => (
                      <div key={idx} className="p-4 bg-muted/50 rounded-lg border-2 hover:border-primary/50 transition-all cursor-pointer">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-bold text-lg text-primary">{item.tag}</h3>
                          <Badge variant="outline">{item.category}</Badge>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">{item.posts} posts</span>
                          <div className="flex items-center gap-1 text-green-500">
                            <TrendingUp className="w-4 h-4" />
                            <span className="font-semibold">{item.growth}</span>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm" className="w-full mt-3" onClick={() => navigate('/idea-spark')}>
                          <Plus className="w-4 h-4 mr-2" />
                          Generate Idea
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 shadow-elevated">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Video className="w-5 h-5 text-primary" />
                    <CardTitle>Trending Formats</CardTitle>
                  </div>
                  <CardDescription>Content formats that are performing well</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {trendingFormats.map((item, idx) => (
                      <div key={idx} className="p-4 bg-muted/50 rounded-lg border-2 hover:border-primary/50 transition-all">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex-1">
                            <h3 className="font-bold text-lg mb-1">{item.format}</h3>
                            <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                            <div className="flex flex-wrap gap-2 mb-2">
                              {item.platforms.map((platform, pIdx) => (
                                <Badge key={pIdx} variant="outline">{platform}</Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <Badge className={
                            item.engagement === "Very High" 
                              ? "bg-gradient-primary text-white" 
                              : "bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20"
                          }>
                            {item.engagement} Engagement
                          </Badge>
                          <Button variant="ghost" size="sm" onClick={() => navigate('/idea-spark')}>
                            Use Format
                            <ExternalLink className="w-4 h-4 ml-2" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle>Regional Insights</CardTitle>
                  <CardDescription>Trends by location</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {regionalTrends.map((item, idx) => (
                    <div key={idx} className="p-3 bg-muted/50 rounded-lg border">
                      <div className="font-semibold mb-1">{item.region}</div>
                      <div className="text-sm text-foreground mb-2">{item.trend}</div>
                      <Badge variant="outline" className="text-xs">
                        {item.interest}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-2 bg-gradient-primary text-white">
                <CardContent className="pt-6">
                  <TrendingUp className="w-12 h-12 mb-4" />
                  <h3 className="font-bold text-lg mb-2">AI Trend Alerts</h3>
                  <p className="text-sm opacity-90 mb-4">
                    Get real-time notifications when new trends emerge in your niche
                  </p>
                  <Button variant="outline" className="w-full bg-white text-primary hover:bg-white/90">
                    Enable Alerts
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button variant="outline" className="w-full justify-start" onClick={() => navigate('/idea-spark')}>
                    Generate Trending Idea
                  </Button>
                  <Button variant="outline" className="w-full justify-start" onClick={() => navigate('/planner')}>
                    Schedule Trending Post
                  </Button>
                  <Button variant="outline" className="w-full justify-start" onClick={() => navigate('/idea-vault')}>
                    Save to Idea Vault
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketPulse;
