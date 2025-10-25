import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X, Leaf } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Study", href: "/study" },
    { name: "Store", href: "/store" },
    { name: "Community", href: "/community" },
    { name: "Rewards", href: "/rewards" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-[var(--shadow-soft)]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-[hsl(var(--eco-green))] to-[hsl(var(--eco-green-light))] rounded-full flex items-center justify-center shadow-lg">
              <Leaf className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-[hsl(var(--eco-green-dark))] to-[hsl(var(--eco-green-light))] bg-clip-text text-transparent">
              EcoGreen
            </span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`transition-colors duration-200 font-medium ${
                  location.pathname === item.href
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/study">
              <Button variant="hero" size="sm">
                Get Started
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {
          isOpen && (
            <div className="absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border shadow-lg animate-in fade-in slide-in-from-top duration-300">
              <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`transition-colors duration-200 font-medium py-2 ${
                      location.pathname === item.href
                        ? "text-primary"
                        : "text-foreground hover:text-primary"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link to="/study">
                  <Button variant="hero" size="sm" className="mt-2">
                    Get Started
                  </Button>
                </Link>
              </nav>
            </div>
          )
        }
      </div>
    </nav>
  );
};

export default Navigation;
