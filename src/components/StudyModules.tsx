import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Recycle, Leaf, AlertCircle, CheckCircle2, PlayCircle } from "lucide-react";

const StudyModules = () => {
  const modules = [
    {
      id: 1,
      title: "Recyclable Waste",
      icon: Recycle,
      color: "from-blue-500 to-blue-600",
      binColor: "Blue Bin",
      description: "Learn about dry waste that can be recycled and reused",
      examples: ["Plastic bottles", "Paper & cardboard", "Glass items", "Metal cans"],
      bgColor: "bg-blue-50 dark:bg-blue-950/20",
      borderColor: "border-blue-200 dark:border-blue-800",
    },
    {
      id: 2,
      title: "Decomposable Waste",
      icon: Leaf,
      color: "from-green-500 to-green-600",
      binColor: "Green Bin",
      description: "Organic waste that naturally breaks down",
      examples: ["Food scraps", "Garden waste", "Biodegradable items", "Natural materials"],
      bgColor: "bg-green-50 dark:bg-green-950/20",
      borderColor: "border-green-200 dark:border-green-800",
    },
    {
      id: 3,
      title: "Non-Recyclable Waste",
      icon: AlertCircle,
      color: "from-red-500 to-red-600",
      binColor: "Red Bin",
      description: "Hazardous and non-recyclable items requiring special handling",
      examples: ["Styrofoam", "Sanitary waste", "Batteries", "Medical waste"],
      bgColor: "bg-red-50 dark:bg-red-950/20",
      borderColor: "border-red-200 dark:border-red-800",
    },
  ];

  return (
    <section id="study" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-in fade-in slide-in-from-bottom duration-700">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Master{" "}
            <span className="bg-gradient-to-r from-[hsl(var(--eco-green-dark))] to-[hsl(var(--eco-green-light))] bg-clip-text text-transparent">
              Waste Segregation
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Learn the fundamentals of proper waste management through our interactive modules
          </p>
        </div>

        {/* Module Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {modules.map((module, index) => {
            const Icon = module.icon;
            return (
              <Card
                key={module.id}
                className={`p-6 ${module.bgColor} ${module.borderColor} border-2 hover:shadow-[var(--shadow-card)] transition-all duration-500 hover:scale-105 animate-in fade-in slide-in-from-bottom`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="space-y-4">
                  {/* Icon & Title */}
                  <div className="flex items-start justify-between">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${module.color} shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 bg-background/80 rounded-full border border-border">
                      {module.binColor}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">{module.title}</h3>
                    <p className="text-sm text-muted-foreground">{module.description}</p>
                  </div>

                  {/* Examples */}
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-foreground">Examples:</p>
                    <ul className="space-y-1">
                      {module.examples.map((example, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                          <span>{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Button */}
                  <Button className="w-full mt-4" variant="default">
                    <PlayCircle className="mr-2 w-4 h-4" />
                    Start Learning
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Video Section */}
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-gradient-to-br from-card to-secondary/30 shadow-[var(--shadow-card)] animate-in fade-in slide-in-from-bottom duration-700 delay-300">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1 space-y-4">
                <h3 className="text-2xl font-bold text-foreground">
                  Watch Our Quick Guide
                </h3>
                <p className="text-muted-foreground">
                  A 5-minute video covering all essential waste segregation practices for your home
                </p>
                <Button variant="hero" size="lg">
                  <PlayCircle className="mr-2" />
                  Play Tutorial
                </Button>
              </div>
              <div className="w-full md:w-1/3 aspect-video bg-muted rounded-lg flex items-center justify-center border-2 border-border hover:border-primary transition-colors duration-300">
                <PlayCircle className="w-16 h-16 text-primary opacity-60" />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default StudyModules;
