import { Button } from "./ui/button";
import { ArrowRight, Users, Recycle, TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-[hsl(var(--secondary))] to-background opacity-70" />

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
            <div className="inline-block">
              <span className="px-4 py-2 bg-[hsl(var(--accent))] text-accent-foreground rounded-full text-sm font-semibold border-2 border-primary/20 shadow-[var(--shadow-soft)]">
                🌱 Building a Greener India
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Together for a{" "}
              <span className="bg-gradient-to-r from-[hsl(var(--eco-green-dark))] to-[hsl(var(--eco-green-light))] bg-clip-text text-transparent">
                Cleaner Tomorrow
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Join EcoGreen to transform India's waste management. Learn smart segregation, 
              earn rewards for sustainable actions, and be part of a community making real change.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 py-6">
              <div className="text-center p-4 bg-card rounded-lg shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:scale-105">
                <Users className="w-8 h-8 mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold text-foreground">10k+</div>
                <div className="text-xs text-muted-foreground">Citizens</div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:scale-105">
                <Recycle className="w-8 h-8 mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold text-foreground">500T</div>
                <div className="text-xs text-muted-foreground">Waste Recycled</div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:scale-105">
                <TrendingUp className="w-8 h-8 mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold text-foreground">85%</div>
                <div className="text-xs text-muted-foreground">Compliance</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" asChild>
                <a href="#study">
                  Get Started <ArrowRight className="ml-2" />
                </a>
              </Button>
              <Button variant="accent" size="lg" asChild>
                <a href="#store">Explore Store</a>
              </Button>
            </div>

            {/* Impact Badge */}
            <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-[hsl(var(--eco-green))]/10 to-[hsl(var(--eco-yellow))]/10 rounded-lg border border-primary/20">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center animate-pulse">
                <Recycle className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="font-semibold text-foreground">1 Citizen Trained</div>
                <div className="text-sm text-muted-foreground">= 10 kg Less Waste Mismanaged</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-in fade-in slide-in-from-right duration-700 delay-150">
            <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-glow)] transition-all duration-500 group">
              <img
                src="/assets/hero-banner.jpg"
                alt="Community participating in waste management and environmental conservation"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--eco-green-dark))]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[hsl(var(--eco-yellow))] rounded-full opacity-20 blur-3xl animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[hsl(var(--eco-green-light))] rounded-full opacity-20 blur-3xl animate-pulse delay-75" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
