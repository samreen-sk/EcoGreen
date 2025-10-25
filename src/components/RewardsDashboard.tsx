import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Trophy, Star, Award, TrendingUp, AlertTriangle, Gift } from "lucide-react";
import { Progress } from "./ui/progress";

const RewardsDashboard = () => {
  const weeklyGrade = "A";
  const pointsEarned = 850;
  const maxPoints = 1000;
  const progressPercentage = (pointsEarned / maxPoints) * 100;

  const achievements = [
    { icon: Trophy, label: "Eco Hero", earned: true },
    { icon: Award, label: "Green Champion", earned: true },
    { icon: Star, label: "Perfect Week", earned: false },
  ];

  return (
    <section id="rewards" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-in fade-in slide-in-from-bottom duration-700">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Points &{" "}
            <span className="bg-gradient-to-r from-[hsl(var(--eco-green-dark))] to-[hsl(var(--eco-green-light))] bg-clip-text text-transparent">
              Rewards
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Track your performance and earn rewards for sustainable actions
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Weekly Grade Card */}
          <Card className="p-8 bg-gradient-to-br from-card to-primary/5 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-glow)] transition-all duration-500 animate-in fade-in slide-in-from-left">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-[hsl(var(--eco-green))] to-[hsl(var(--eco-green-light))] shadow-[var(--shadow-glow)] animate-pulse">
                <span className="text-5xl font-bold text-primary-foreground">{weeklyGrade}</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Weekly Grade</h3>
                <p className="text-sm text-muted-foreground">Excellent performance this week!</p>
              </div>
              <div className="pt-4 border-t border-border">
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  <span>Up from B+ last week</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Points Progress Card */}
          <Card className="p-8 bg-gradient-to-br from-card to-accent/10 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-glow)] transition-all duration-500 animate-in fade-in slide-in-from-bottom duration-700 delay-150">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-foreground">Eco Points</h3>
                <Gift className="w-6 h-6 text-primary" />
              </div>

              <div>
                <div className="flex items-end justify-between mb-2">
                  <span className="text-4xl font-bold text-primary">{pointsEarned}</span>
                  <span className="text-lg text-muted-foreground">/ {maxPoints}</span>
                </div>
                <Progress value={progressPercentage} className="h-3" />
              </div>

              <div className="space-y-3 pt-4 border-t border-border">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Proper segregation</span>
                  <span className="font-semibold text-foreground">+500 pts</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Community cleanup</span>
                  <span className="font-semibold text-foreground">+250 pts</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Awareness activity</span>
                  <span className="font-semibold text-foreground">+100 pts</span>
                </div>
              </div>

              <Button variant="hero" className="w-full">
                Redeem Points
              </Button>
            </div>
          </Card>

          {/* Achievements & Penalties Card */}
          <Card className="p-8 bg-gradient-to-br from-card to-secondary/20 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-glow)] transition-all duration-500 animate-in fade-in slide-in-from-right">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-foreground">Achievements</h3>

              <div className="space-y-3">
                {achievements.map((achievement, index) => {
                  const Icon = achievement.icon;
                  return (
                    <div
                      key={index}
                      className={`flex items-center gap-3 p-3 rounded-lg border-2 transition-all duration-300 ${
                        achievement.earned
                          ? "bg-primary/10 border-primary/30"
                          : "bg-muted/50 border-border opacity-60"
                      }`}
                    >
                      <div
                        className={`p-2 rounded-lg ${
                          achievement.earned
                            ? "bg-gradient-to-br from-[hsl(var(--eco-green))] to-[hsl(var(--eco-green-light))]"
                            : "bg-muted"
                        }`}
                      >
                        <Icon
                          className={`w-5 h-5 ${
                            achievement.earned ? "text-primary-foreground" : "text-muted-foreground"
                          }`}
                        />
                      </div>
                      <span
                        className={`font-semibold ${
                          achievement.earned ? "text-foreground" : "text-muted-foreground"
                        }`}
                      >
                        {achievement.label}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="pt-6 border-t border-border">
                <div className="flex items-start gap-3 p-4 bg-accent/20 rounded-lg border border-accent">
                  <AlertTriangle className="w-5 h-5 text-accent-foreground flex-shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="font-semibold text-sm text-foreground">Penalty Compensation</p>
                    <p className="text-xs text-muted-foreground">
                      If fined, compensate through awareness activities or redeem collected points
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RewardsDashboard;
