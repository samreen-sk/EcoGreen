import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StudyModules from "@/components/StudyModules";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";

const StudyCleanliness = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center animate-in fade-in slide-in-from-bottom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Cleanliness & Waste Segregation Study Module
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Learn everything about proper waste segregation and hygiene practices through our interactive modules.
          </p>

          <Button variant="hero" size="lg">
            <PlayCircle className="mr-2 w-5 h-5" />
            Start Learning
          </Button>
        </div>
      </section>

      {/* Study Modules Section */}
      <StudyModules />

      {/* Optional: Extra Resources / Quick Tips */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="p-8 bg-gradient-to-br from-card to-secondary/30 shadow-[var(--shadow-card)] animate-in fade-in slide-in-from-bottom">
            <h2 className="text-2xl font-bold text-foreground mb-4">Quick Tips for Cleanliness</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Always segregate wet and dry waste properly.</li>
              <li>Use color-coded bins for easy identification.</li>
              <li>Dispose of hazardous items like batteries and medical waste separately.</li>
              <li>Maintain a clean area around your home to prevent contamination.</li>
            </ul>

            <div className="mt-6 flex justify-center">
              <Button variant="outline" size="lg">
                <PlayCircle className="mr-2 w-5 h-5" />
                Watch Tutorial
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StudyCleanliness;
