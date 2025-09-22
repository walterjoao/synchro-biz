import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      description: "Perfect for small teams getting started",
      price: "$29",
      period: "per workspace/month",
      badge: null,
      features: [
        "Up to 10 users",
        "Core project management",
        "Basic file storage (10GB)",
        "Email support",
        "Standard integrations",
        "Mobile app access"
      ],
      cta: "Start Free Trial",
      popular: false,
      variant: "outline" as const
    },
    {
      name: "Professional",
      description: "Advanced features for growing businesses",
      price: "$79",
      period: "per workspace/month",
      badge: "Most Popular",
      features: [
        "Up to 50 users",
        "All collaboration modules",
        "Advanced file storage (100GB)",
        "Priority support",
        "Advanced integrations",
        "Custom workflows",
        "Basic AI features",
        "Payroll management",
        "Financial reporting"
      ],
      cta: "Get Started",
      popular: true,
      variant: "hero" as const
    },
    {
      name: "Enterprise",
      description: "Complete solution for large organizations",
      price: "$199",
      period: "per workspace/month",
      badge: "Enterprise",
      features: [
        "Unlimited users",
        "All modules included",
        "Unlimited storage",
        "24/7 dedicated support",
        "Custom integrations",
        "Advanced AI & automation",
        "White-label options",
        "Advanced security",
        "Audit & compliance",
        "Custom deployment"
      ],
      cta: "Contact Sales",
      popular: false,
      variant: "premium" as const
    }
  ];

  const enterpriseFeatures = [
    "Multi-tenant architecture",
    "Custom subdomain support",
    "Advanced role-based access",
    "99.9% uptime SLA",
    "Data residency options",
    "Custom integrations",
    "Dedicated account manager",
    "Training & onboarding"
  ];

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the plan that fits your business size and needs. Scale up as you grow with additional modules and features.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`group relative border-2 transition-all duration-300 ${
                plan.popular 
                  ? 'border-primary shadow-elegant transform scale-105' 
                  : 'border-border hover:border-primary/50 hover:shadow-elegant'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge variant="default" className="bg-gradient-hero text-white">
                    <Star className="w-3 h-3 mr-1" />
                    {plan.badge}
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center space-y-4 pt-8">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription className="text-base">{plan.description}</CardDescription>
                
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-foreground">
                    {plan.price}
                    <span className="text-lg font-normal text-muted-foreground">/{plan.period.split('/')[1]}</span>
                  </div>
                  <div className="text-sm text-muted-foreground">{plan.period.split('/')[0]}</div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <Button variant={plan.variant} className="w-full">
                  {plan.cta}
                </Button>
                
                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enterprise Features */}
        <div className="bg-muted/50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-2">Enterprise-Grade Features</h3>
            <p className="text-muted-foreground">
              All plans include enterprise-level security, reliability, and support features.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {enterpriseFeatures.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check className="w-4 h-4 text-primary flex-shrink-0" />
                {feature}
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="text-center mt-16">
          <h3 className="text-xl font-bold text-foreground mb-4">Questions about pricing?</h3>
          <p className="text-muted-foreground mb-6">
            Our team is here to help you find the perfect plan for your business needs.
          </p>
          <Button variant="outline">
            Contact Sales Team
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;