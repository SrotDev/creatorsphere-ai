import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Terms = () => {
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
          <h1 className="text-5xl font-bold mb-6">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Last updated: January 2024</p>

          <Card className="border-2 shadow-elevated mb-6">
            <CardContent className="pt-8 space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-3">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground">
                  By accessing and using CreatorSphere, you accept and agree to be bound by these 
                  Terms of Service. If you do not agree to these terms, please do not use our service.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-3">2. Service Description</h2>
                <p className="text-muted-foreground">
                  CreatorSphere provides AI-powered tools for content creators, including idea generation, 
                  content planning, analytics, and growth coaching. We reserve the right to modify or 
                  discontinue any feature at any time.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-3">3. User Accounts</h2>
                <p className="text-muted-foreground mb-3">
                  To use CreatorSphere, you must:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Be at least 13 years old</li>
                  <li>Provide accurate and complete registration information</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Notify us immediately of any unauthorized access</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-3">4. Acceptable Use</h2>
                <p className="text-muted-foreground mb-3">
                  You agree not to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Use the service for any illegal or unauthorized purpose</li>
                  <li>Generate content that violates copyright or intellectual property rights</li>
                  <li>Attempt to reverse engineer or hack our systems</li>
                  <li>Share your account credentials with others</li>
                  <li>Use automated tools to scrape or extract data</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-3">5. Content Ownership</h2>
                <p className="text-muted-foreground">
                  You retain full ownership of all content you create using CreatorSphere. 
                  However, you grant us a license to use, store, and process your content to provide 
                  and improve our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-3">6. AI-Generated Content</h2>
                <p className="text-muted-foreground">
                  While our AI generates creative suggestions, you are responsible for reviewing and 
                  ensuring all content meets platform guidelines, copyright laws, and your own standards 
                  before publication.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-3">7. Subscription and Payments</h2>
                <p className="text-muted-foreground mb-3">
                  Subscription terms:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Free tier includes limited features</li>
                  <li>Paid subscriptions are billed monthly or annually</li>
                  <li>Refunds are provided according to our refund policy</li>
                  <li>You may cancel your subscription at any time</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-3">8. Limitation of Liability</h2>
                <p className="text-muted-foreground">
                  CreatorSphere is provided "as is" without warranties. We are not liable for any 
                  damages arising from your use of the service, including but not limited to loss of 
                  data, revenue, or opportunities.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-3">9. Termination</h2>
                <p className="text-muted-foreground">
                  We reserve the right to suspend or terminate your account for violations of these 
                  terms or for any other reason at our discretion.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-3">10. Changes to Terms</h2>
                <p className="text-muted-foreground">
                  We may update these terms from time to time. Continued use of CreatorSphere after 
                  changes constitutes acceptance of the new terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-3">11. Contact</h2>
                <p className="text-muted-foreground">
                  For questions about these Terms of Service, contact us at terms@creatorsphere.com
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Terms;
