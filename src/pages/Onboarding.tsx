import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";

const Onboarding = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [selectedNiche, setSelectedNiche] = useState<string[]>([]);
  const [selectedTone, setSelectedTone] = useState<string[]>([]);
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);

  const niches = ["Tech", "Lifestyle", "Education", "Entertainment", "Business", "Health", "Travel", "Fashion"];
  const tones = ["Funny", "Motivational", "Professional", "Casual", "Educational", "Inspirational"];
  const platforms = ["YouTube", "TikTok", "Instagram", "Twitter", "LinkedIn", "Facebook"];

  const toggleSelection = (item: string, array: string[], setter: (arr: string[]) => void) => {
    if (array.includes(item)) {
      setter(array.filter(i => i !== item));
    } else {
      setter([...array, item]);
    }
  };

  const handleComplete = () => {
    navigate('/dashboard');
  };

  const canProceed = () => {
    if (step === 1) return selectedNiche.length > 0;
    if (step === 2) return selectedTone.length > 0;
    if (step === 3) return selectedPlatforms.length > 0;
    return false;
  };

  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center p-4">
      <div className="w-full max-w-3xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-gradient-primary px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-5 h-5 text-white" />
            <span className="font-bold text-white text-lg">CreatorSphere</span>
          </div>
          <h1 className="text-4xl font-bold mb-2">Let's Personalize Your Experience</h1>
          <p className="text-muted-foreground text-lg">
            Tell us about yourself so we can tailor the perfect AI assistant for you
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-2">
            {[1, 2, 3].map((num) => (
              <div key={num} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
                    step >= num
                      ? "bg-gradient-primary text-white shadow-glow"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {step > num ? <CheckCircle2 className="w-5 h-5" /> : num}
                </div>
                {num < 3 && (
                  <div
                    className={`w-16 h-1 mx-2 transition-all ${
                      step > num ? "bg-gradient-primary" : "bg-muted"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <Card className="border-2 shadow-elevated">
          <CardHeader>
            <CardTitle className="text-2xl">
              {step === 1 && "Choose Your Niche"}
              {step === 2 && "Select Your Tone"}
              {step === 3 && "Pick Your Platforms"}
            </CardTitle>
            <CardDescription>
              {step === 1 && "What topics do you create content about? Select all that apply."}
              {step === 2 && "How do you want your content to sound? Pick your preferred styles."}
              {step === 3 && "Where do you share your content? Select your platforms."}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {step === 1 && (
              <div className="flex flex-wrap gap-3">
                {niches.map((niche) => (
                  <Badge
                    key={niche}
                    variant={selectedNiche.includes(niche) ? "default" : "outline"}
                    className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-all text-base px-4 py-2"
                    onClick={() => toggleSelection(niche, selectedNiche, setSelectedNiche)}
                  >
                    {niche}
                  </Badge>
                ))}
              </div>
            )}

            {step === 2 && (
              <div className="flex flex-wrap gap-3">
                {tones.map((tone) => (
                  <Badge
                    key={tone}
                    variant={selectedTone.includes(tone) ? "default" : "outline"}
                    className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-all text-base px-4 py-2"
                    onClick={() => toggleSelection(tone, selectedTone, setSelectedTone)}
                  >
                    {tone}
                  </Badge>
                ))}
              </div>
            )}

            {step === 3 && (
              <div className="flex flex-wrap gap-3">
                {platforms.map((platform) => (
                  <Badge
                    key={platform}
                    variant={selectedPlatforms.includes(platform) ? "default" : "outline"}
                    className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-all text-base px-4 py-2"
                    onClick={() => toggleSelection(platform, selectedPlatforms, setSelectedPlatforms)}
                  >
                    {platform}
                  </Badge>
                ))}
              </div>
            )}

            <div className="flex gap-4 pt-4">
              {step > 1 && (
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setStep(step - 1)}
                  className="flex-1"
                >
                  Back
                </Button>
              )}
              <Button
                variant="gradient"
                size="lg"
                onClick={() => step === 3 ? handleComplete() : setStep(step + 1)}
                disabled={!canProceed()}
                className="flex-1"
              >
                {step === 3 ? "Complete Setup" : "Next Step"}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {step === 3 && (
          <div className="mt-6 p-4 bg-muted/50 rounded-lg border-2 border-primary/20">
            <h3 className="font-semibold mb-2">Your Profile Summary</h3>
            <div className="space-y-1 text-sm text-muted-foreground">
              <p><strong>Niches:</strong> {selectedNiche.join(", ")}</p>
              <p><strong>Tone:</strong> {selectedTone.join(", ")}</p>
              <p><strong>Platforms:</strong> {selectedPlatforms.join(", ")}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Onboarding;
