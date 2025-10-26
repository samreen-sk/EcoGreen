// src/pages/StudyCleanliness.tsx
import Navigation from "@/components/Navigation";
import StudyModules from "@/components/StudyModules";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";

const StudyCleanliness = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-secondary/10 to-background">
        <div className="container mx-auto px-4 max-w-4xl text-center animate-in fade-in slide-in-from-bottom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Cleanliness & Waste Segregation Study Module
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Learn how to manage waste properly and keep your environment clean
            through our interactive learning modules.
          </p>
        </div>
      </section>

      {/* <-- RENDER THE SINGLE SOURCE: StudyModules (cards + buttons live here) --> */}
      <StudyModules />

      {/* Quick Tips Section (keeps the tutorial card below modules) */}
<section className="py-10 bg-muted/10">
  <div className="container mx-auto px-4 max-w-4xl">
    <Card className="p-8 bg-gradient-to-br from-card to-secondary/30 shadow-[var(--shadow-card)] animate-in fade-in slide-in-from-bottom">
      <h2 className="text-2xl font-bold text-foreground mb-4">
        Quick Tips for Cleanliness
      </h2>
      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
        <li>Always segregate wet and dry waste properly.</li>
        <li>Use color-coded bins for easy identification.</li>
        <li>Dispose of hazardous items like batteries and medical waste separately.</li>
        <li>Maintain a clean area around your home to prevent contamination.</li>
      </ul>

      {/* YouTube Section */}
      <div className="mt-10 text-center">
        <h3 className="text-xl font-semibold text-green-600 mb-4">
          🎥 Watch: Cleanliness Tutorial Video (Watch this for Awareness)
        </h3>

        <div className="w-full max-w-3xl mx-auto aspect-video rounded-xl overflow-hidden shadow-lg border border-secondary">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/EyLJ4158Y3s?si=xqQ2ZUsK6qaH68xv"
            title="Cleanliness Study Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </Card>
  </div>
</section>


      <Footer />
    </div>
  );
};

export default StudyCleanliness;
