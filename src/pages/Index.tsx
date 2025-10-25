import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, ShoppingCart, Users, Trophy, Recycle, Leaf, Award } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Study Cleanliness",
      description: "Learn proper waste segregation with interactive modules and video guides",
      href: "/study",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: ShoppingCart,
      title: "Eco Store",
      description: "Shop for color-coded bins, compost kits, and eco-friendly products",
      href: "/store",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Users,
      title: "Community Connect",
      description: "Join cleanup drives, share photos, and collaborate with neighbors",
      href: "/community",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Trophy,
      title: "Rewards & Points",
      description: "Earn points, grow your eco tree, and redeem exciting rewards",
      href: "/rewards",
      color: "from-yellow-500 to-yellow-600",
    },
  ];

  const stats = [
    { icon: Recycle, value: "10,000+", label: "Citizens Trained" },
    { icon: Leaf, value: "50 Tons", label: "Waste Segregated" },
    { icon: Award, value: "5,000+", label: "Rewards Claimed" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-in fade-in slide-in-from-bottom duration-700">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Explore{" "}
              <span className="bg-gradient-to-r from-[hsl(var(--eco-green-dark))] to-[hsl(var(--eco-green-light))] bg-clip-text text-transparent">
                EcoGreen
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need for a cleaner, greener tomorrow
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Link key={index} to={feature.href}>
                  <Card
                    className="p-6 bg-gradient-to-br from-card to-secondary/20 hover:shadow-[var(--shadow-card)] transition-all duration-500 hover:scale-105 cursor-pointer h-full animate-in fade-in slide-in-from-bottom"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="space-y-4">
                      <div className={`p-4 rounded-xl bg-gradient-to-br ${feature.color} shadow-lg w-fit`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                      <Button variant="ghost" className="w-full justify-start p-0 h-auto font-semibold text-primary hover:text-primary">
                        Explore →
                      </Button>
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card
                  key={index}
                  className="p-8 text-center bg-gradient-to-br from-card to-primary/5 shadow-[var(--shadow-card)] animate-in fade-in slide-in-from-bottom"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <p className="text-4xl font-bold text-primary mb-2">{stat.value}</p>
                  <p className="text-muted-foreground font-medium">{stat.label}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[hsl(var(--eco-green))]/10 to-background">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Ready to Make a Difference?
            </h2>
            <p className="text-lg text-muted-foreground">
              Join thousands of citizens working together for a cleaner, greener India
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/study">
                <Button variant="hero" size="lg">
                  Start Learning
                </Button>
              </Link>
              <Link to="/community">
                <Button variant="accent" size="lg">
                  Join Community
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
