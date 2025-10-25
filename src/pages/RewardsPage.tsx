import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, Gift, TreeDeciduous, Sprout, TrendingUp } from "lucide-react";
import { useState } from "react";

const RewardsPage = () => {
  const [userPoints] = useState(2450);
  const [weeklyGrade] = useState("A+");
  const [fines] = useState(0);

  // Tree growth stages based on points
  const getTreeStage = (points: number) => {
    if (points < 500) return 1;
    if (points < 1000) return 2;
    if (points < 2000) return 3;
    if (points < 3000) return 4;
    return 5;
  };

  const treeStage = getTreeStage(userPoints);

  const achievements = [
    { title: "First Steps", points: 100, unlocked: true, icon: Sprout },
    { title: "Eco Warrior", points: 500, unlocked: true, icon: TreeDeciduous },
    { title: "Green Champion", points: 1000, unlocked: true, icon: Trophy },
    { title: "Sustainability Hero", points: 2000, unlocked: true, icon: TrendingUp },
    { title: "Planet Protector", points: 3000, unlocked: false, icon: Gift },
  ];

  const redeemableRewards = [
    { name: "10% Store Discount", cost: 500, available: true },
    { name: "Free Compost Kit", cost: 1000, available: true },
    { name: "Eco Hero T-Shirt", cost: 1500, available: true },
    { name: "Premium Bin Set", cost: 2000, available: true },
    { name: "Community Leader Badge", cost: 3000, available: false },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 animate-in fade-in slide-in-from-bottom duration-700">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Your Eco{" "}
              <span className="bg-gradient-to-r from-[hsl(var(--eco-green-dark))] to-[hsl(var(--eco-green-light))] bg-clip-text text-transparent">
                Rewards
              </span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Watch your impact grow as you earn points and unlock rewards
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Tree Growth Animation */}
            <Card className="p-8 bg-gradient-to-br from-card to-[hsl(var(--eco-green))]/5 shadow-[var(--shadow-card)] animate-in fade-in slide-in-from-left">
              <div className="text-center space-y-6">
                <h2 className="text-2xl font-bold text-foreground">Your Eco Tree</h2>
                <p className="text-muted-foreground">
                  The more you contribute, the more your tree grows!
                </p>

                {/* Tree Growth Visual */}
                <div className="relative h-64 flex items-end justify-center">
                  <div className="absolute bottom-0 w-full h-full flex items-end justify-center">
                    {/* Tree stages */}
                    <div className="relative transition-all duration-1000 ease-out"
                         style={{ 
                           transform: `scale(${0.4 + (treeStage * 0.15)})`,
                           opacity: 1
                         }}>
                      <TreeDeciduous 
                        className="w-32 h-32 transition-all duration-1000"
                        style={{
                          color: `hsl(var(--eco-green-${treeStage >= 3 ? 'dark' : 'light'}))`
                        }}
                      />
                    </div>
                  </div>
                  
                  {/* Growth rings */}
                  {[1, 2, 3, 4, 5].map((stage) => (
                    <div
                      key={stage}
                      className={`absolute bottom-0 rounded-full border-2 transition-all duration-700 ${
                        stage <= treeStage 
                          ? 'border-[hsl(var(--eco-green))] opacity-30' 
                          : 'border-border opacity-10'
                      }`}
                      style={{
                        width: `${stage * 60}px`,
                        height: `${stage * 60}px`,
                      }}
                    />
                  ))}
                </div>

                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Tree Stage: {treeStage}/5</p>
                  <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-[hsl(var(--eco-green))] to-[hsl(var(--eco-green-light))] transition-all duration-1000 rounded-full"
                      style={{ width: `${(treeStage / 5) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            </Card>

            {/* Stats Card */}
            <Card className="p-8 bg-gradient-to-br from-card to-primary/5 shadow-[var(--shadow-card)] animate-in fade-in slide-in-from-right">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                  <Trophy className="w-6 h-6 text-primary" />
                  Your Performance
                </h2>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-background/60 rounded-lg border border-border">
                    <p className="text-sm text-muted-foreground mb-1">Weekly Grade</p>
                    <p className="text-3xl font-bold text-primary">{weeklyGrade}</p>
                  </div>
                  <div className="p-4 bg-background/60 rounded-lg border border-border">
                    <p className="text-sm text-muted-foreground mb-1">Total Points</p>
                    <p className="text-3xl font-bold text-[hsl(var(--eco-green))]">{userPoints}</p>
                  </div>
                  <div className="p-4 bg-background/60 rounded-lg border border-border">
                    <p className="text-sm text-muted-foreground mb-1">Active Fines</p>
                    <p className="text-3xl font-bold text-destructive">₹{fines}</p>
                  </div>
                  <div className="p-4 bg-background/60 rounded-lg border border-border">
                    <p className="text-sm text-muted-foreground mb-1">Next Reward</p>
                    <p className="text-3xl font-bold text-[hsl(var(--eco-yellow))]">550</p>
                  </div>
                </div>

                {/* Achievements */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-foreground">Achievements</h3>
                  {achievements.map((achievement, index) => {
                    const Icon = achievement.icon;
                    return (
                      <div
                        key={index}
                        className={`flex items-center gap-3 p-3 rounded-lg border transition-all duration-300 ${
                          achievement.unlocked
                            ? 'bg-[hsl(var(--eco-green))]/10 border-[hsl(var(--eco-green))]'
                            : 'bg-muted/50 border-border opacity-50'
                        }`}
                      >
                        <Icon className={`w-5 h-5 ${achievement.unlocked ? 'text-[hsl(var(--eco-green))]' : 'text-muted-foreground'}`} />
                        <div className="flex-1">
                          <p className="font-medium text-sm">{achievement.title}</p>
                          <p className="text-xs text-muted-foreground">{achievement.points} points</p>
                        </div>
                        {achievement.unlocked && (
                          <span className="text-xs font-semibold text-[hsl(var(--eco-green))]">✓</span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </Card>
          </div>

          {/* Redeemable Rewards */}
          <Card className="p-8 bg-gradient-to-br from-card to-accent/10 shadow-[var(--shadow-card)] animate-in fade-in slide-in-from-bottom duration-700 delay-200">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Gift className="w-6 h-6 text-primary" />
              Redeem Your Points
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {redeemableRewards.map((reward, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border transition-all duration-300 ${
                    reward.available && userPoints >= reward.cost
                      ? 'bg-background/60 border-primary hover:border-primary hover:shadow-lg cursor-pointer'
                      : 'bg-muted/30 border-border opacity-60'
                  }`}
                >
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-semibold text-foreground">{reward.name}</h3>
                      <p className="text-sm text-muted-foreground">{reward.cost} points</p>
                    </div>
                    <Button 
                      size="sm" 
                      variant={reward.available && userPoints >= reward.cost ? "hero" : "secondary"}
                      className="w-full"
                      disabled={!reward.available || userPoints < reward.cost}
                    >
                      {userPoints >= reward.cost ? 'Redeem' : 'Locked'}
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-[hsl(var(--eco-yellow))]/10 border border-[hsl(var(--eco-yellow))]/30 rounded-lg">
              <p className="text-sm text-muted-foreground">
                💡 <strong>Pro Tip:</strong> You can also use your points to offset fines or donate to community cleanup drives!
              </p>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RewardsPage;
