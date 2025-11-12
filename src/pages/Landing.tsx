import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { Sparkles, Zap, TrendingUp, Target, BarChart3, Brain, Rocket, CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Landing = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Sparkles,
      title: "AI Idea Generator",
      description: "Get unlimited content ideas tailored to your niche and audience.",
    },
    {
      icon: Zap,
      title: "Smart Automation",
      description: "Schedule posts, auto-reply to comments, and A/B test content.",
    },
    {
      icon: TrendingUp,
      title: "Market Pulse",
      description: "Stay ahead with live trending formats and hashtags in your niche.",
    },
    {
      icon: Target,
      title: "Content Planner",
      description: "Organize your content calendar with drag-and-drop simplicity.",
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Track growth, engagement, and optimize your strategy.",
    },
    {
      icon: Brain,
      title: "AI Growth Coach",
      description: "Get personalized tips and strategies to accelerate your growth.",
    },
  ];

  const pricingTiers = [
    {
      name: "Free",
      price: "0",
      description: "Perfect for getting started",
      features: [
        "3 AI ideas per day",
        "Basic captions & hashtags",
        "Community support",
      ],
    },
    {
      name: "Pro",
      price: "999",
      description: "For serious creators",
      features: [
        "Unlimited AI ideas",
        "Multi-language support",
        "Content planner with heatmap",
        "Priority support",
      ],
      popular: true,
    },
    {
      name: "Growth Suite",
      price: "3499",
      description: "For scaling creators",
      features: [
        "Everything in Pro",
        "Agentic AI automation",
        "Full analytics dashboard",
        "AI Growth Coach",
        "Market Pulse access",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2">
              <Rocket className="w-4 h-4 mr-2 inline" />
              Your AI Co-Pilot for Content Creation
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-hero bg-clip-text text-transparent leading-tight">
              From First Post to Fame
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Let AI handle the heavy lifting. Generate ideas, automate workflows, and grow your audience faster with CreatorSphere.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                variant="hero" 
                size="lg" 
                className="text-lg px-8"
                onClick={() => navigate('/auth')}
              >
                Start Free Trial
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 border-2"
              >
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything You Need to Grow
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful AI tools designed to help creators like you succeed
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-2 hover:border-primary/50 transition-all hover:shadow-card cursor-pointer group"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:shadow-glow transition-all">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your creator journey
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <Card 
              key={index}
              className={`relative ${tier.popular ? 'border-primary border-2 shadow-elevated' : 'border-2'}`}
            >
              {tier.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-primary text-white">
                  Most Popular
                </Badge>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-2xl mb-2">{tier.name}</CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold">৳{tier.price}</span>
                  {tier.price !== "0" && <span className="text-muted-foreground">/month</span>}
                </div>
                <CardDescription className="text-base">{tier.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  variant={tier.popular ? "gradient" : "outline"}
                  className="w-full"
                  size="lg"
                  onClick={() => navigate('/auth')}
                >
                  {tier.price === "0" ? "Get Started" : "Start Free Trial"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <Card className="bg-gradient-primary text-white border-0 shadow-elevated">
          <CardContent className="p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Content Game?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of creators using AI to grow faster and smarter.
            </p>
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 border-0 text-lg px-8"
              onClick={() => navigate('/auth')}
            >
              Start Your Journey Today
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t py-12">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p className="mb-4">© 2024 CreatorSphere. Empowering creators with AI.</p>
          <div className="flex gap-6 justify-center">
            <button onClick={() => navigate('/about')} className="hover:text-primary transition-colors">About</button>
            <button onClick={() => navigate('/privacy')} className="hover:text-primary transition-colors">Privacy</button>
            <button onClick={() => navigate('/terms')} className="hover:text-primary transition-colors">Terms</button>
            <button onClick={() => navigate('/contact')} className="hover:text-primary transition-colors">Contact</button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
