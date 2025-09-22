import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  FolderKanban, 
  Users, 
  DollarSign, 
  Package, 
  Shield, 
  UserCheck, 
  FileText, 
  MessageSquare,
  Zap,
  Crown
} from "lucide-react";

const Modules = () => {
  const moduleGroups = [
    {
      category: "Core Platform",
      badge: "MVP Ready",
      badgeVariant: "default" as const,
      modules: [
        {
          icon: FolderKanban,
          name: "Multi-Workspace",
          description: "Tenant isolation with subdomain support and role-based access control",
          features: ["Subdomain routing", "Role management", "Workspace isolation"]
        },
        {
          icon: Users,
          name: "User Authentication",
          description: "Complete authentication system with social logins and 2FA",
          features: ["Email/password", "Social logins", "Two-factor auth"]
        },
        {
          icon: DollarSign,
          name: "Payment & Billing",
          description: "Integrated payment processing with subscription management",
          features: ["Stripe integration", "Subscriptions", "Invoice generation"]
        }
      ]
    },
    {
      category: "Collaboration & Projects",
      badge: "High Priority",
      badgeVariant: "secondary" as const,
      modules: [
        {
          icon: FolderKanban,
          name: "Project Management",
          description: "Complete project lifecycle management with Kanban boards",
          features: ["Task management", "Kanban boards", "Project roadmaps"]
        },
        {
          icon: Users,
          name: "Team Collaboration",
          description: "Real-time messaging, file sharing, and team coordination",
          features: ["Team messaging", "File sharing", "Video calls"]
        },
        {
          icon: UserCheck,
          name: "Staff Workload",
          description: "Advanced workload tracking and resource allocation",
          features: ["Workload tracking", "Resource planning", "Capacity management"]
        }
      ]
    },
    {
      category: "Finance & HR",
      badge: "Enterprise",
      badgeVariant: "destructive" as const,
      modules: [
        {
          icon: DollarSign,
          name: "Payroll Management",
          description: "Complete payroll processing with automated calculations",
          features: ["Salary processing", "Tax calculations", "Benefits management"]
        },
        {
          icon: FileText,
          name: "Accounting & Bookkeeping",
          description: "Full accounting suite with financial reporting",
          features: ["Double-entry", "Financial reports", "Tax compliance"]
        },
        {
          icon: UserCheck,
          name: "HR Management",
          description: "Employee records, performance tracking, and leave management",
          features: ["Employee records", "Performance reviews", "Leave tracking"]
        }
      ]
    },
    {
      category: "Inventory & Sales",
      badge: "Commerce",
      badgeVariant: "outline" as const,
      modules: [
        {
          icon: Package,
          name: "Warehouse Management",
          description: "Complete inventory control with stock alerts and tracking",
          features: ["Stock tracking", "Inventory alerts", "Warehouse management"]
        },
        {
          icon: DollarSign,
          name: "Sales & POS",
          description: "Point of sale system with sales reporting and analytics",
          features: ["POS system", "Sales reports", "Customer management"]
        },
        {
          icon: FileText,
          name: "Purchase Management",
          description: "Vendor management and purchase order processing",
          features: ["Vendor management", "Purchase orders", "Procurement tracking"]
        }
      ]
    },
    {
      category: "Automation & AI",
      badge: "Advanced",
      badgeVariant: "secondary" as const,
      modules: [
        {
          icon: Zap,
          name: "AI Project Analyzer",
          description: "Intelligent project analysis and recommendations",
          features: ["Project insights", "Performance analytics", "Predictive modeling"]
        },
        {
          icon: MessageSquare,
          name: "AI Chatbot",
          description: "Workspace agent and public-facing customer support",
          features: ["Customer support", "Workspace assistant", "Knowledge base"]
        },
        {
          icon: Zap,
          name: "Automation Hub",
          description: "Workflow automation with REST APIs and webhooks",
          features: ["Workflow automation", "API integrations", "Custom webhooks"]
        }
      ]
    },
    {
      category: "Security & Compliance",
      badge: "Enterprise",
      badgeVariant: "destructive" as const,
      modules: [
        {
          icon: Shield,
          name: "Cyber Security",
          description: "Advanced security monitoring and threat detection",
          features: ["Security monitoring", "Threat detection", "Compliance reporting"]
        },
        {
          icon: FileText,
          name: "Audit & Logs",
          description: "Comprehensive audit trails and system logging",
          features: ["Audit trails", "System logs", "Compliance tracking"]
        },
        {
          icon: Shield,
          name: "Access Control",
          description: "Advanced permission system with role-based access",
          features: ["Role management", "Permission control", "Access monitoring"]
        }
      ]
    }
  ];

  return (
    <section id="modules" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Modular Business Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the modules your business needs and scale as you grow. Each module is designed to work seamlessly together.
          </p>
        </div>

        <div className="space-y-12">
          {moduleGroups.map((group, groupIndex) => (
            <div key={groupIndex} className="space-y-6">
              <div className="flex items-center gap-4">
                <h3 className="text-2xl font-bold text-foreground">{group.category}</h3>
                <Badge variant={group.badgeVariant}>{group.badge}</Badge>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {group.modules.map((module, moduleIndex) => (
                  <Card key={moduleIndex} className="group hover:shadow-elegant transition-all duration-300 border-border">
                    <CardHeader className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
                          <module.icon className="w-5 h-5 text-white" />
                        </div>
                        <CardTitle className="text-lg">{module.name}</CardTitle>
                      </div>
                      <CardDescription className="text-base">
                        {module.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {module.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 p-8 rounded-2xl bg-gradient-hero text-white">
          <Crown className="w-12 h-12 mx-auto mb-4 animate-glow" />
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Start with our MVP modules and expand as your business grows. Every module is designed for enterprise-scale operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-white/90 transition-colors">
              Start Free Trial
            </button>
            <button className="px-8 py-3 border border-white/20 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Modules;