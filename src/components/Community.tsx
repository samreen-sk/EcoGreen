import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Calendar, Users, MapPin, Heart, Camera, Trophy } from "lucide-react";

const Community = () => {
  const events = [
    {
      title: "Community Cleanup Day",
      date: "Sunday, 10 AM",
      location: "Central Park",
      participants: 45,
      icon: Users,
    },
    {
      title: "Waste Segregation Workshop",
      date: "Saturday, 3 PM",
      location: "Community Hall",
      participants: 30,
      icon: Calendar,
    },
  ];

  const topContributors = [
    { name: "Rajesh Kumar", points: 2500, badge: "🏆" },
    { name: "Priya Sharma", points: 2300, badge: "🥈" },
    { name: "Amit Patel", points: 2100, badge: "🥉" },
  ];

  return (
    <section id="community" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-in fade-in slide-in-from-bottom duration-700">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Community{" "}
            <span className="bg-gradient-to-r from-[hsl(var(--eco-green-dark))] to-[hsl(var(--eco-green-light))] bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Join local events, share your progress, and celebrate together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Upcoming Events */}
          <div className="space-y-6 animate-in fade-in slide-in-from-left">
            <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <Calendar className="w-6 h-6 text-primary" />
              Upcoming Events
            </h3>

            {events.map((event, index) => {
              const Icon = event.icon;
              return (
                <Card
                  key={index}
                  className="p-6 bg-gradient-to-br from-card to-secondary/20 hover:shadow-[var(--shadow-card)] transition-all duration-500 hover:scale-[1.02]"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-[hsl(var(--eco-green))] to-[hsl(var(--eco-green-light))] shadow-lg">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1 space-y-3">
                      <div>
                        <h4 className="font-bold text-lg text-foreground mb-1">{event.title}</h4>
                        <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                          <span className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {event.date}
                          </span>
                          <span className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            {event.location}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between pt-2 border-t border-border">
                        <span className="text-sm text-muted-foreground">
                          {event.participants} participants
                        </span>
                        <Button size="sm" variant="default">
                          Join Now
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}

            <Button variant="accent" className="w-full" size="lg">
              <Heart className="mr-2" />
              Volunteer for Events
            </Button>
          </div>

          {/* Top Contributors & Community Feed */}
          <div className="space-y-6 animate-in fade-in slide-in-from-right">
            {/* Top Contributors */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Trophy className="w-6 h-6 text-primary" />
                Top Eco Contributors
              </h3>

              <Card className="p-6 bg-gradient-to-br from-card to-primary/5 shadow-[var(--shadow-card)]">
                <div className="space-y-4">
                  {topContributors.map((contributor, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-background/60 rounded-lg border border-border hover:border-primary transition-colors duration-300"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{contributor.badge}</span>
                        <div>
                          <p className="font-semibold text-foreground">{contributor.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {contributor.points} points
                          </p>
                        </div>
                      </div>
                      <Button size="sm" variant="ghost">
                        View
                      </Button>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Community Photos */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Camera className="w-6 h-6 text-primary" />
                Community Gallery
              </h3>

              <Card className="p-6 bg-gradient-to-br from-card to-accent/10 shadow-[var(--shadow-card)]">
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Share your cleanup photos and inspire others in the community!
                  </p>
                  <div className="grid grid-cols-3 gap-3">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="aspect-square bg-muted rounded-lg border-2 border-border hover:border-primary transition-colors duration-300 flex items-center justify-center group cursor-pointer"
                      >
                        <Camera className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                      </div>
                    ))}
                  </div>
                  <Button variant="hero" className="w-full">
                    <Camera className="mr-2" />
                    Upload Photo
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
