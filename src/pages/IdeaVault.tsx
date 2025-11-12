import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Save, ArrowLeft, Search, Calendar, Trash2, Edit, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";

const IdeaVault = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  const savedIdeas = [
    {
      id: 1,
      title: "10 Must-Have VS Code Extensions for React Developers",
      platform: "YouTube",
      niche: "Tech",
      savedDate: "2024-01-15",
      status: "Draft",
    },
    {
      id: 2,
      title: "Morning Routine of Successful Content Creators",
      platform: "Instagram",
      niche: "Lifestyle",
      savedDate: "2024-01-14",
      status: "Scheduled",
    },
    {
      id: 3,
      title: "Productivity Hacks That Actually Work",
      platform: "TikTok",
      niche: "Education",
      savedDate: "2024-01-13",
      status: "Draft",
    },
    {
      id: 4,
      title: "Web Development Trends to Watch in 2024",
      platform: "YouTube",
      niche: "Tech",
      savedDate: "2024-01-12",
      status: "Published",
    },
    {
      id: 5,
      title: "How to Beat Algorithm Changes",
      platform: "Instagram",
      niche: "Business",
      savedDate: "2024-01-10",
      status: "Draft",
    },
  ];

  const filters = ["All", "Tech", "Lifestyle", "Education", "Business"];
  const statusFilters = ["All Status", "Draft", "Scheduled", "Published"];

  const filteredIdeas = savedIdeas.filter(idea => {
    const matchesSearch = idea.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = selectedFilter === "all" || idea.niche.toLowerCase() === selectedFilter;
    return matchesSearch && matchesFilter;
  });

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
                <Save className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl">Idea Vault</span>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Your Saved Ideas</h1>
            <p className="text-muted-foreground text-lg">
              Manage and organize all your content ideas in one place
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            <div className="space-y-6">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle>Filters</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-semibold text-sm">By Niche</h3>
                    <div className="flex flex-wrap gap-2">
                      {filters.map((filter) => (
                        <Badge
                          key={filter}
                          variant={selectedFilter === filter.toLowerCase() ? "default" : "outline"}
                          className="cursor-pointer"
                          onClick={() => setSelectedFilter(filter.toLowerCase())}
                        >
                          {filter}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-sm">By Status</h3>
                    <div className="flex flex-wrap gap-2">
                      {statusFilters.map((status) => (
                        <Badge
                          key={status}
                          variant="outline"
                          className="cursor-pointer"
                        >
                          {status}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle>Quick Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Ideas</span>
                    <span className="font-bold">{savedIdeas.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Drafts</span>
                    <span className="font-bold">
                      {savedIdeas.filter(i => i.status === "Draft").length}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Scheduled</span>
                    <span className="font-bold">
                      {savedIdeas.filter(i => i.status === "Scheduled").length}
                    </span>
                  </div>
                </CardContent>
              </Card>

              <Button variant="gradient" className="w-full" onClick={() => navigate('/idea-spark')}>
                Generate New Idea
              </Button>
            </div>

            <div className="lg:col-span-3">
              <Card className="border-2 shadow-elevated mb-6">
                <CardContent className="pt-6">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                    <Input
                      placeholder="Search your ideas..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-4">
                {filteredIdeas.map((idea) => (
                  <Card key={idea.id} className="border-2 hover:border-primary/50 transition-all">
                    <CardContent className="pt-6">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-start gap-3 mb-3">
                            <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                              <Save className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-bold text-lg mb-2">{idea.title}</h3>
                              <div className="flex flex-wrap gap-2">
                                <Badge variant="outline">{idea.platform}</Badge>
                                <Badge variant="outline">{idea.niche}</Badge>
                                <Badge 
                                  className={
                                    idea.status === "Published" 
                                      ? "bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20"
                                      : idea.status === "Scheduled"
                                      ? "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20"
                                      : "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 border-yellow-500/20"
                                  }
                                >
                                  {idea.status}
                                </Badge>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span>Saved: {new Date(idea.savedDate).toLocaleDateString()}</span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="icon">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="icon" onClick={() => navigate('/planner')}>
                            <Calendar className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <ExternalLink className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Trash2 className="w-4 h-4 text-destructive" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {filteredIdeas.length === 0 && (
                <Card className="border-2 border-dashed">
                  <CardContent className="pt-12 pb-12 text-center">
                    <Save className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                    <h3 className="text-xl font-semibold mb-2">No Ideas Found</h3>
                    <p className="text-muted-foreground mb-4">
                      Try adjusting your filters or generate new ideas
                    </p>
                    <Button variant="gradient" onClick={() => navigate('/idea-spark')}>
                      Generate New Idea
                    </Button>
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

export default IdeaVault;
