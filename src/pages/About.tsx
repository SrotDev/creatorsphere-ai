import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Target, Users, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <header className="border-b bg-background/95 backdrop-blur sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-primary p-2 rounded-lg">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl">CreatorSphere</span>
          </div>
          <Button variant="ghost" onClick={() => navigate('/')}>
            Back to Home
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 text-center">About CreatorSphere</h1>
          <p className="text-xl text-muted-foreground text-center mb-12">
            Empowering creators with AI to grow faster and smarter
          </p>

          <Card className="border-2 shadow-elevated mb-8">
            <CardContent className="pt-8">
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                We believe that every creator deserves access to powerful tools that help them succeed. 
                CreatorSphere democratizes content creation by bringing enterprise-level AI capabilities 
                to creators of all sizes, from students posting their first video to established influencers 
                scaling their brands.
              </p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="border-2">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Our Vision</h3>
                <p className="text-muted-foreground">
                  To become the #1 AI co-pilot for creators worldwide, helping millions turn their 
                  passion into successful content careers.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Our Community</h3>
                <p className="text-muted-foreground">
                  Join thousands of creators who are already using CreatorSphere to generate ideas, 
                  automate workflows, and grow their audience.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="border-2 shadow-elevated mb-8">
            <CardContent className="pt-8">
              <h2 className="text-3xl font-bold mb-4">Why CreatorSphere?</h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <Zap className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">AI-First Approach</h3>
                    <p className="text-muted-foreground">
                      Built from the ground up with AI at its core, not as an afterthought.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Zap className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Local Language Support</h3>
                    <p className="text-muted-foreground">
                      Full support for Bengali and other South Asian languages, helping regional creators thrive.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Zap className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">End-to-End Solution</h3>
                    <p className="text-muted-foreground">
                      From idea generation to analytics, everything you need in one platform.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Join CreatorSphere today and transform your content creation journey
            </p>
            <Button variant="gradient" size="lg" onClick={() => navigate('/auth')}>
              Start Free Trial
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
