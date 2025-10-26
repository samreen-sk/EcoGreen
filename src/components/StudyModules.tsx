// src/components/StudyModules.tsx
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Recycle, Leaf, AlertCircle, CheckCircle2, PlayCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";


const StudyModules = () => {
  const navigate = useNavigate();

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
      route: "/study/recyclable",
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
      route: "/study/decomposable",
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
      route: "/study/non-recyclable",
    },
  ];

  return (
    <section id="study" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* header ... */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {modules.map((module, index) => {
            const Icon = module.icon;
            return (
              <Card key={module.id} className={`p-6 ${module.bgColor} ${module.borderColor} border-2 hover:shadow-[var(--shadow-card)] transition-all duration-500 hover:scale-105`} style={{ animationDelay: `${index * 150}ms` }}>
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${module.color} shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 bg-background/80 rounded-full border border-border">{module.binColor}</span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">{module.title}</h3>
                    <p className="text-sm text-muted-foreground">{module.description}</p>
                  </div>

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

                  <Button className="w-full mt-4" variant="default" onClick={() => navigate(module.route)}>
                    <PlayCircle className="mr-2 w-4 h-4" />
                    Start Learning
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* video and other content is in StudyCleanliness (not duplicated here) */}
      </div>
    </section>
  );
};

export default StudyModules;
