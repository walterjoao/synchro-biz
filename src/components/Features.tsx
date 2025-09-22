import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Users, 
  BarChart3, 
  Zap, 
  Shield, 
  Workflow, 
  Globe,
  ArrowRight
} from "lucide-react";
import collaborationIcon from "@/assets/collaboration-icon.jpg";
import financeIcon from "@/assets/finance-icon.jpg";
import automationIcon from "@/assets/automation-icon.jpg";

const Features = () => {
  const features = [
    {
      icon: Users,
      title: "Collaboration & Projects",
      description: "Complete project management with Kanban boards, timesheets, staff workload tracking, and integrated messaging.",
      image: collaborationIcon,
      highlights: ["Task Management", "Team Collaboration", "Time Tracking", "Workload Balancing"]
    },
    {
      icon: BarChart3,
      title: "Finance & Analytics",
      description: "Comprehensive financial management including payroll, invoicing, expense tracking, and detailed reporting.",
      image: financeIcon,
      highlights: ["Payroll Management", "Invoice Generation", "Expense Tracking", "Financial Reports"]
    },
    {
      icon: Zap,
      title: "AI & Automation",
      description: "Powerful automation tools with AI integrations, REST APIs, webhooks, and intelligent project analysis.",
      image: automationIcon,
      highlights: ["AI Project Analyzer", "Custom Integrations", "Workflow Automation", "Smart Analytics"]
    }
  ];

  const additionalFeatures = [
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Advanced security features including audit logs, password policies, and compliance tools."
    },
    {
      icon: Workflow,
      title: "Multi-Workspace",
      description: "Tenant isolation with subdomain support and role-based access control."
    },
    {
      icon: Globe,
      title: "Global Ready",
      description: "Multi-language support, multi-currency, and RTL language compatibility."
    }
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Everything Your Business Needs
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive platform combines project management, finance, HR, inventory, and automation tools in one seamless solution.
          </p>
        </div>

        {/* Main Feature Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-border">
              <CardHeader className="space-y-4">
                <div className="relative">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-hero opacity-10 rounded-lg"></div>
                  <feature.icon className="absolute top-4 right-4 w-8 h-8 text-white bg-primary/80 p-1.5 rounded-lg" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-2">
                  {feature.highlights.map((highlight, i) => (
                    <div key={i} className="text-sm text-muted-foreground bg-muted rounded-lg px-3 py-2">
                      {highlight}
                    </div>
                  ))}
                </div>
                <Button variant="ghost" className="w-full group">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Features Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {additionalFeatures.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
              <feature.icon className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;