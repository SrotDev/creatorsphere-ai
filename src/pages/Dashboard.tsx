import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Sparkles, 
  Calendar, 
  TrendingUp, 
  BarChart3, 
  Lightbulb, 
  LogOut,
  Zap,
  Copy,
  Check
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";

const Dashboard = () => {
  const navigate = useNavigate();
  const [selectedNiche, setSelectedNiche] = useState("tech");
  const [generatedIdea, setGeneratedIdea] = useState<any>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleGenerateIdea = () => {
    setIsGenerating(true);
    // Simulate AI generation
    setTimeout(() => {
      setGeneratedIdea({
        title: "10 Must-Have VS Code Extensions for React Developers in 2024",
        caption: "Level up your React development game with these essential VS Code extensions! 🚀 From productivity boosters to debugging tools, I've tested them all so you don't have to. Which one is your favorite? Drop a comment below! 💻✨",
        hashtags: "#ReactJS #WebDevelopment #VSCode #Programming #TechTips #CodeNewbie #Developer #JavaScript #ReactDeveloper #TechEducation",
        format: "Instagram Reel / YouTube Short",
        engagement: "High potential for shares and saves"
      });
      setIsGenerating(false);
    }, 2000);
  };

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const stats = [
    { label: "Ideas Generated", value: "127", icon: Lightbulb },
    { label: "Content Scheduled", value: "23", icon: Calendar },
    { label: "Growth Rate", value: "+18%", icon: TrendingUp },
    { label: "Engagement", value: "4.2K", icon: BarChart3 },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-primary p-2 rounded-lg">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl">CreatorSphere</span>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button variant="ghost" size="sm" onClick={() => navigate('/')}>
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">
            Welcome back, Creator! 👋
          </h1>
          <p className="text-muted-foreground text-lg">
            Ready to create something amazing today?
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="border-2">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                    <p className="text-3xl font-bold">{stat.value}</p>
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Idea Generator */}
          <div className="lg:col-span-2">
            <Card className="border-2 shadow-card">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-5 h-5 text-primary" />
                  <CardTitle>AI Idea Spark</CardTitle>
                </div>
                <CardDescription>
                  Generate fresh content ideas powered by AI
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Select Your Niche</Label>
                    <div className="flex flex-wrap gap-2">
                      {['Tech', 'Lifestyle', 'Education', 'Entertainment'].map((niche) => (
                        <Badge
                          key={niche}
                          variant={selectedNiche === niche.toLowerCase() ? "default" : "outline"}
                          className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                          onClick={() => setSelectedNiche(niche.toLowerCase())}
                        >
                          {niche}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button 
                    className="w-full" 
                    variant="gradient"
                    size="lg"
                    onClick={handleGenerateIdea}
                    disabled={isGenerating}
                  >
                    {isGenerating ? (
                      <>
                        <Sparkles className="w-4 h-4 mr-2 animate-spin" />
                        Generating Magic...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4 mr-2" />
                        Generate Idea
                      </>
                    )}
                  </Button>
                </div>

                {generatedIdea && (
                  <div className="space-y-4 p-6 bg-muted/50 rounded-lg border-2 border-primary/20 animate-fade-in">
                    <div className="space-y-2">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1">
                          <Label className="text-base font-semibold mb-2 block">Content Title</Label>
                          <p className="text-foreground">{generatedIdea.title}</p>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => copyToClipboard(generatedIdea.title, 'title')}
                        >
                          {copiedField === 'title' ? (
                            <Check className="w-4 h-4 text-green-500" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1">
                          <Label className="text-base font-semibold mb-2 block">Caption</Label>
                          <p className="text-foreground">{generatedIdea.caption}</p>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => copyToClipboard(generatedIdea.caption, 'caption')}
                        >
                          {copiedField === 'caption' ? (
                            <Check className="w-4 h-4 text-green-500" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1">
                          <Label className="text-base font-semibold mb-2 block">Hashtags</Label>
                          <p className="text-foreground text-sm">{generatedIdea.hashtags}</p>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => copyToClipboard(generatedIdea.hashtags, 'hashtags')}
                        >
                          {copiedField === 'hashtags' ? (
                            <Check className="w-4 h-4 text-green-500" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </Button>
                      </div>
                    </div>

                    <div className="flex gap-4 pt-2">
                      <Badge variant="outline">{generatedIdea.format}</Badge>
                      <Badge className="bg-green-500/10 text-green-700 border-green-500/20">
                        {generatedIdea.engagement}
                      </Badge>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Button variant="outline" className="flex-1" onClick={() => navigate('/idea-vault')}>
                        Save to Vault
                      </Button>
                      <Button variant="gradient" className="flex-1" onClick={() => navigate('/planner')}>
                        Schedule Post
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions Sidebar */}
          <div className="space-y-6">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start" onClick={() => navigate('/planner')}>
                  <Calendar className="w-4 h-4 mr-2" />
                  Content Planner
                </Button>
                <Button variant="outline" className="w-full justify-start" onClick={() => navigate('/market-pulse')}>
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Market Pulse
                </Button>
                <Button variant="outline" className="w-full justify-start" onClick={() => navigate('/analytics')}>
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Analytics
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 bg-gradient-primary text-white">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Upgrade to Pro</h3>
                    <p className="text-sm opacity-90 mb-4">
                      Unlock unlimited ideas and advanced features
                    </p>
                    <Button 
                      variant="outline" 
                      className="w-full bg-white text-primary hover:bg-white/90"
                    >
                      View Plans
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
