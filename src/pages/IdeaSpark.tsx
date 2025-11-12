import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles, Copy, Check, Save, Calendar, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";

const IdeaSpark = () => {
  const navigate = useNavigate();
  const [selectedNiche, setSelectedNiche] = useState("tech");
  const [customPrompt, setCustomPrompt] = useState("");
  const [generatedIdea, setGeneratedIdea] = useState<any>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const niches = ["Tech", "Lifestyle", "Education", "Entertainment", "Business", "Health"];

  const handleGenerateIdea = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setGeneratedIdea({
        title: customPrompt || "10 Must-Have VS Code Extensions for React Developers in 2024",
        caption: "Level up your React development game with these essential VS Code extensions! 🚀 From productivity boosters to debugging tools, I've tested them all so you don't have to. Which one is your favorite? Drop a comment below! 💻✨",
        hashtags: "#ReactJS #WebDevelopment #VSCode #Programming #TechTips #CodeNewbie #Developer #JavaScript #ReactDeveloper #TechEducation",
        format: "Instagram Reel / YouTube Short",
        engagement: "High potential for shares and saves",
        hooks: [
          "Stop wasting time with basic VS Code!",
          "You're coding React wrong...",
          "These extensions changed my workflow"
        ],
        cta: "Save this post for later and follow for more dev tips!"
      });
      setIsGenerating(false);
    }, 2000);
  };

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

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
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl">AI Idea Spark</span>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Generate Viral Content Ideas</h1>
            <p className="text-muted-foreground text-lg">
              Let AI create personalized content ideas, captions, and hashtags for your niche
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 space-y-6">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle>Customize Your Idea</CardTitle>
                  <CardDescription>Fine-tune the AI generation</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Select Niche</Label>
                    <div className="flex flex-wrap gap-2">
                      {niches.map((niche) => (
                        <Badge
                          key={niche}
                          variant={selectedNiche === niche.toLowerCase() ? "default" : "outline"}
                          className="cursor-pointer"
                          onClick={() => setSelectedNiche(niche.toLowerCase())}
                        >
                          {niche}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="prompt">Custom Prompt (Optional)</Label>
                    <Textarea
                      id="prompt"
                      placeholder="E.g., Create a video idea about productivity tips for students"
                      value={customPrompt}
                      onChange={(e) => setCustomPrompt(e.target.value)}
                      rows={4}
                    />
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
                        Generating...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4 mr-2" />
                        Generate Idea
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-2">
              {!generatedIdea ? (
                <Card className="border-2 border-dashed h-full flex items-center justify-center min-h-[500px]">
                  <CardContent className="text-center">
                    <Sparkles className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                    <h3 className="text-xl font-semibold mb-2">Ready to Create?</h3>
                    <p className="text-muted-foreground">
                      Customize your settings and click generate to get started
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <Card className="border-2 shadow-elevated">
                  <CardHeader>
                    <CardTitle>Your Generated Idea</CardTitle>
                    <CardDescription>Copy, save, or schedule this content</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1">
                            <Label className="text-base font-semibold">Content Title</Label>
                            <p className="text-foreground mt-2">{generatedIdea.title}</p>
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
                            <Label className="text-base font-semibold">Caption</Label>
                            <p className="text-foreground mt-2">{generatedIdea.caption}</p>
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
                            <Label className="text-base font-semibold">Hashtags</Label>
                            <p className="text-foreground text-sm mt-2">{generatedIdea.hashtags}</p>
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

                      <div className="space-y-2">
                        <Label className="text-base font-semibold">Hook Ideas</Label>
                        <ul className="list-disc list-inside space-y-1 text-foreground">
                          {generatedIdea.hooks.map((hook: string, idx: number) => (
                            <li key={idx}>{hook}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-2">
                        <Label className="text-base font-semibold">Call to Action</Label>
                        <p className="text-foreground">{generatedIdea.cta}</p>
                      </div>

                      <div className="flex gap-4 pt-2">
                        <Badge variant="outline">{generatedIdea.format}</Badge>
                        <Badge className="bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20">
                          {generatedIdea.engagement}
                        </Badge>
                      </div>

                      <div className="flex gap-2 pt-2">
                        <Button variant="outline" className="flex-1" onClick={() => navigate('/idea-vault')}>
                          <Save className="w-4 h-4 mr-2" />
                          Save to Vault
                        </Button>
                        <Button variant="gradient" className="flex-1" onClick={() => navigate('/planner')}>
                          <Calendar className="w-4 h-4 mr-2" />
                          Schedule Post
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdeaSpark;
