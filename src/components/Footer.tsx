import { Button } from "@/components/ui/button";
import { 
  Github, 
  Twitter, 
  Linkedin, 
  Mail, 
  MapPin, 
  Phone,
  ArrowRight
} from "lucide-react";

const Footer = () => {
  const footerLinks = {
    product: [
      { label: "Features", href: "#features" },
      { label: "Modules", href: "#modules" },
      { label: "Pricing", href: "#pricing" },
      { label: "Integrations", href: "#integrations" },
      { label: "API", href: "#api" }
    ],
    company: [
      { label: "About Us", href: "#about" },
      { label: "Careers", href: "#careers" },
      { label: "Blog", href: "#blog" },
      { label: "Press", href: "#press" },
      { label: "Partners", href: "#partners" }
    ],
    resources: [
      { label: "Documentation", href: "#docs" },
      { label: "Help Center", href: "#help" },
      { label: "Community", href: "#community" },
      { label: "Templates", href: "#templates" },
      { label: "Webinars", href: "#webinars" }
    ],
    legal: [
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Terms of Service", href: "#terms" },
      { label: "Security", href: "#security" },
      { label: "Compliance", href: "#compliance" },
      { label: "GDPR", href: "#gdpr" }
    ]
  };

  return (
    <footer className="bg-foreground text-background">
      {/* Newsletter Section */}
      <div className="border-b border-background/10">
        <div className="container mx-auto px-6 py-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
              <p className="text-background/80 text-lg">
                Get the latest updates on new features, integrations, and business insights.
              </p>
            </div>
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-background/10 border border-background/20 text-background placeholder:text-background/60 focus:outline-none focus:border-primary"
              />
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <span className="text-xl font-bold">BusinessOS</span>
            </div>
            
            <p className="text-background/80 leading-relaxed">
              Complete business management platform that combines project management, finance, HR, and automation tools in one powerful solution.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-background/80">
                <MapPin className="w-4 h-4" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-3 text-background/80">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-background/80">
                <Mail className="w-4 h-4" />
                <span>hello@businessos.com</span>
              </div>
            </div>
            
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-4 grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-3">
                {footerLinks.product.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-background/80 hover:text-background transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-background/80 hover:text-background transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-background/80 hover:text-background transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-background/80 hover:text-background transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-sm">
              © 2024 BusinessOS. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-background/60">
              <span>Built with ❤️ for modern businesses</span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>All systems operational</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;