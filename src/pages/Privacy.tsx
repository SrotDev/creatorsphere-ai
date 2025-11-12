import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Privacy = () => {
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
          <h1 className="text-5xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: January 2024</p>

          <Card className="border-2 shadow-elevated mb-6">
            <CardContent className="pt-8 space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-3">1. Information We Collect</h2>
                <p className="text-muted-foreground mb-3">
                  We collect information you provide directly to us, including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Account information (name, email, profile details)</li>
                  <li>Content preferences and niche selections</li>
                  <li>Generated content ideas and saved drafts</li>
                  <li>Usage statistics and analytics data</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-3">2. How We Use Your Information</h2>
                <p className="text-muted-foreground mb-3">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Personalize your AI-generated content recommendations</li>
                  <li>Send you technical notices and support messages</li>
                  <li>Analyze usage patterns to enhance user experience</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-3">3. Data Security</h2>
                <p className="text-muted-foreground">
                  We implement appropriate technical and organizational measures to protect your 
                  personal information against unauthorized access, alteration, disclosure, or destruction. 
                  Your content and ideas are encrypted and stored securely.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-3">4. Data Sharing</h2>
                <p className="text-muted-foreground">
                  We do not sell your personal information. We may share your information only in the 
                  following circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mt-3">
                  <li>With your consent</li>
                  <li>To comply with legal obligations</li>
                  <li>With service providers who assist in our operations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-3">5. Your Rights</h2>
                <p className="text-muted-foreground mb-3">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Export your content and ideas</li>
                  <li>Opt-out of marketing communications</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-3">6. Cookies and Tracking</h2>
                <p className="text-muted-foreground">
                  We use cookies and similar tracking technologies to improve your experience, 
                  analyze usage patterns, and personalize content. You can control cookie preferences 
                  through your browser settings.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-3">7. Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have any questions about this Privacy Policy, please contact us at 
                  privacy@creatorsphere.com
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
