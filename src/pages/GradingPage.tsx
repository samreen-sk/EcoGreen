import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Shield, Lock, CheckCircle2, AlertCircle } from "lucide-react";
import { toast } from "sonner";

const GradingPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  
  // Simulated daily password - In production, this would come from a secure backend
  const dailyPassword = "eco2025";

  const [gradingData, setGradingData] = useState({
    citizenId: "",
    segregationQuality: "",
    wasteAmount: "",
    notes: "",
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === dailyPassword) {
      setIsAuthenticated(true);
      toast.success("Access granted! Welcome, collector.");
    } else {
      toast.error("Incorrect password. Please try again.");
    }
  };

  const handleSubmitGrade = (e: React.FormEvent) => {
    e.preventDefault();
    if (!gradingData.citizenId || !gradingData.segregationQuality) {
      toast.error("Please fill in all required fields.");
      return;
    }
    
    toast.success(`Grade submitted for Citizen ID: ${gradingData.citizenId}`);
    setGradingData({
      citizenId: "",
      segregationQuality: "",
      wasteAmount: "",
      notes: "",
    });
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-md">
            <Card className="p-8 bg-gradient-to-br from-card to-primary/5 shadow-[var(--shadow-card)] animate-in fade-in slide-in-from-bottom">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[hsl(var(--eco-green))] to-[hsl(var(--eco-green-light))] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Shield className="w-8 h-8 text-primary-foreground" />
                </div>
                <h1 className="text-2xl font-bold text-foreground mb-2">
                  Collector Access Portal
                </h1>
                <p className="text-sm text-muted-foreground">
                  Enter today's password to access the grading system
                </p>
              </div>

              <form onSubmit={handleLogin} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="password" className="flex items-center gap-2">
                    <Lock className="w-4 h-4 text-primary" />
                    Daily Password
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border-border focus:border-primary"
                  />
                </div>

                <Button type="submit" variant="hero" className="w-full" size="lg">
                  Access Grading System
                </Button>
              </form>

              <div className="mt-6 p-4 bg-[hsl(var(--eco-yellow))]/10 border border-[hsl(var(--eco-yellow))]/30 rounded-lg">
                <p className="text-xs text-muted-foreground text-center">
                  🔒 Password changes daily. Contact your supervisor for today's code.
                </p>
              </div>
            </Card>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Shield className="w-8 h-8 text-primary" />
              <h1 className="text-4xl font-bold text-foreground">
                Citizen Grading System
              </h1>
            </div>
            <p className="text-lg text-muted-foreground">
              Evaluate waste segregation quality and submit grades
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Grading Form */}
            <Card className="p-8 bg-gradient-to-br from-card to-primary/5 shadow-[var(--shadow-card)] animate-in fade-in slide-in-from-left">
              <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                Submit Grade
              </h2>

              <form onSubmit={handleSubmitGrade} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="citizenId">Citizen/Household ID *</Label>
                  <Input
                    id="citizenId"
                    placeholder="e.g., ECO-2024-12345"
                    value={gradingData.citizenId}
                    onChange={(e) => setGradingData({ ...gradingData, citizenId: e.target.value })}
                    className="border-border focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="segregation">Segregation Quality *</Label>
                  <Select
                    value={gradingData.segregationQuality}
                    onValueChange={(value) => setGradingData({ ...gradingData, segregationQuality: value })}
                  >
                    <SelectTrigger className="border-border">
                      <SelectValue placeholder="Select grade" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="A+">A+ - Excellent (Perfect segregation)</SelectItem>
                      <SelectItem value="A">A - Very Good (Minor issues)</SelectItem>
                      <SelectItem value="B">B - Good (Some mixing)</SelectItem>
                      <SelectItem value="C">C - Fair (Needs improvement)</SelectItem>
                      <SelectItem value="D">D - Poor (Major violations)</SelectItem>
                      <SelectItem value="F">F - Fail (No segregation)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="wasteAmount">Waste Amount (kg)</Label>
                  <Input
                    id="wasteAmount"
                    type="number"
                    placeholder="e.g., 5.5"
                    value={gradingData.wasteAmount}
                    onChange={(e) => setGradingData({ ...gradingData, wasteAmount: e.target.value })}
                    className="border-border focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes">Notes / Feedback</Label>
                  <textarea
                    id="notes"
                    placeholder="Any observations or recommendations..."
                    value={gradingData.notes}
                    onChange={(e) => setGradingData({ ...gradingData, notes: e.target.value })}
                    className="w-full min-h-24 px-3 py-2 text-sm rounded-md border border-border bg-background focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  />
                </div>

                <Button type="submit" variant="hero" className="w-full" size="lg">
                  Submit Grade
                </Button>
              </form>
            </Card>

            {/* Guidelines & Info */}
            <div className="space-y-6 animate-in fade-in slide-in-from-right">
              <Card className="p-6 bg-gradient-to-br from-card to-[hsl(var(--eco-green))]/5 shadow-[var(--shadow-card)]">
                <h3 className="font-bold text-lg text-foreground mb-4 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-primary" />
                  Grading Guidelines
                </h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="p-3 bg-background/60 rounded-lg border border-border">
                    <p className="font-semibold text-foreground mb-1">A/A+ Grade:</p>
                    <p>Waste properly segregated into green, blue, and red bins. No contamination.</p>
                  </div>
                  <div className="p-3 bg-background/60 rounded-lg border border-border">
                    <p className="font-semibold text-foreground mb-1">B/C Grade:</p>
                    <p>Partial segregation with some mixing. Requires guidance and improvement.</p>
                  </div>
                  <div className="p-3 bg-background/60 rounded-lg border border-border">
                    <p className="font-semibold text-foreground mb-1">D/F Grade:</p>
                    <p>Poor or no segregation. May result in fines. Educational intervention needed.</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-card to-accent/10 shadow-[var(--shadow-card)]">
                <h3 className="font-bold text-lg text-foreground mb-4">Bin Color Reference</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 p-2 bg-green-500/10 border border-green-500/30 rounded">
                    <div className="w-6 h-6 bg-green-500 rounded" />
                    <p className="text-sm text-foreground"><strong>Green:</strong> Wet/Organic waste</p>
                  </div>
                  <div className="flex items-center gap-3 p-2 bg-blue-500/10 border border-blue-500/30 rounded">
                    <div className="w-6 h-6 bg-blue-500 rounded" />
                    <p className="text-sm text-foreground"><strong>Blue:</strong> Dry/Recyclable waste</p>
                  </div>
                  <div className="flex items-center gap-3 p-2 bg-red-500/10 border border-red-500/30 rounded">
                    <div className="w-6 h-6 bg-red-500 rounded" />
                    <p className="text-sm text-foreground"><strong>Red:</strong> Hazardous waste</p>
                  </div>
                </div>
              </Card>

              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => setIsAuthenticated(false)}
              >
                Logout
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GradingPage;
