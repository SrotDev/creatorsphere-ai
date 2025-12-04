import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Sparkles, LogOut } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import { ThemeToggle } from "@/components/ThemeToggle";

type Plan = {
    name: "Free" | "Pro" | "Exclusive";
    price: string;
    description: string;
    features: string[];
    popular?: boolean;
};

const plans: Plan[] = [
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
        name: "Exclusive",
        price: "3499",
        description: "For scaling creators and teams",
        features: [
            "Everything in Pro",
            "Agentic AI automation",
            "Full analytics dashboard",
            "AI Growth Coach",
            "Market Pulse access",
            "Premium onboarding & support",
        ],
    },
];

const Pricing = () => {
    const navigate = useNavigate();
    const [activePlan, setActivePlan] = useState<Plan["name"]>("Free");

    return (
        <div className="min-h-screen bg-gradient-subtle">
            {/* Header (Dashboard Navbar) */}
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
                        <Button variant="ghost" size="sm" onClick={() => navigate('/dashboard') }>
                            <LogOut className="w-4 h-4 mr-2" />
                            Logout
                        </Button>
                    </div>
                </div>
            </header>

            {/* Hero */}
            <section className="relative overflow-hidden">
                <div
                    className="absolute inset-0 opacity-10 bg-cover bg-center"
                    style={{ backgroundImage: `url(${heroImage})` }}
                />
                <div className="container mx-auto px-4 py-10 relative z-10">
                    <div className="max-w-3xl mx-auto text-center space-y-6">
                        <h2 className="text-5xl md:text-6xl font-bold bg-gradient-hero bg-clip-text text-transparent leading-tight">Flexible plans for every creator </h2>
                        {/* <h1 className="text-5xl md:text-6xl font-bold bg-gradient-hero bg-clip-text ">
                            Simple, Transparent Pricing
                        </h1> */}
                        <p className="text-lg md:text-xl text-muted-foreground">
                            Start free and grow at your pace. Upgrade any time.
                        </p>
                    </div>
                </div>
            </section>

            {/* Plans */}
            <section className="container mx-auto px-4 pb-20">
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan) => {
                        const isActive = activePlan === plan.name;
                        return (
                            <Card
                                key={plan.name}
                                role="button"
                                tabIndex={0}
                                onClick={() => setActivePlan(plan.name)}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter" || e.key === " ") setActivePlan(plan.name);
                                }}
                                className={`relative border-2 transition-all cursor-pointer hover:shadow-card ${
                                    isActive ? "border-primary shadow-elevated" : ""
                                }`}
                            >
                                {plan.popular && (
                                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-primary text-white">
                                        Most Popular
                                    </Badge>
                                )}
                                {isActive && (
                                    <Badge className="absolute -top-3 right-4 bg-primary/10 text-primary border-primary/20">
                                        Active
                                    </Badge>
                                )}
                                <CardHeader className="text-center">
                                    <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                                    <div className="mb-4">
                                        <span className="text-4xl font-bold">৳{plan.price}</span>
                                        {plan.price !== "0" && (
                                            <span className="text-muted-foreground">/month</span>
                                        )}
                                    </div>
                                    <CardDescription className="text-base">
                                        {plan.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-3 mb-6">
                                        {plan.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-2">
                                                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Button
                                        variant={isActive ? "gradient" : plan.popular ? "gradient" : "outline"}
                                        className="w-full"
                                        size="lg"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setActivePlan(plan.name);
                                            navigate("/dashboard");
                                        }}
                                    >
                                        {plan.price === "0" ? "Get Started" : "Start Free Trial"}
                                    </Button>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </section>

            {/* CTA */}
            <section className="container mx-auto px-4 pb-20">
                <Card className="bg-gradient-primary text-white border-0 shadow-elevated">
                    <CardContent className="p-10 md:p-12 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            You’re on the {activePlan} plan
                        </h2>
                        <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                            {activePlan === "Free"
                                ? "Unlock unlimited ideas, advanced planning, and priority support with Pro."
                                : activePlan === "Pro"
                                ? "Level up to Exclusive for premium automation and white-glove support."
                                : "Enjoy the full power of CreatorSphere with Exclusive features and support."}
                        </p>
                        <Button
                            variant="outline"
                            size="lg"
                            className="bg-white text-primary hover:bg-white/90 border-0 text-lg px-8"
                            onClick={() => navigate("/dashboard")}
                        >
                            Continue with {activePlan}
                        </Button>
                    </CardContent>
                </Card>
            </section>
        </div>
    );
};

export default Pricing;