import { Link, useLocation } from "react-router-dom";
import { GraduationCap, Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-hero-pattern flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
              <GraduationCap className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
            </div>
            <div className="hidden sm:block">
              <h1 className="font-poppins font-bold text-lg md:text-xl text-foreground">ExamHall</h1>
              <p className="text-xs text-muted-foreground -mt-1">Allocation System</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={cn(
                "font-medium transition-colors duration-300 relative py-2",
                isActive("/") ? "text-secondary" : "text-muted-foreground hover:text-foreground"
              )}
            >
              Home
              {isActive("/") && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary rounded-full" />}
            </Link>
            <Link
              to="/allocation"
              className={cn(
                "font-medium transition-colors duration-300 relative py-2",
                isActive("/allocation") ? "text-secondary" : "text-muted-foreground hover:text-foreground"
              )}
            >
              Find Your Hall
              {isActive("/allocation") && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary rounded-full" />}
            </Link>
            <Link to="/allocation" className="btn-hero text-sm px-6 py-2.5">
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6 text-foreground" /> : <Menu className="w-6 h-6 text-foreground" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in-down">
            <div className="flex flex-col gap-4">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "font-medium px-4 py-2 rounded-lg transition-colors duration-300",
                  isActive("/") ? "bg-secondary/10 text-secondary" : "text-muted-foreground hover:bg-muted"
                )}
              >
                Home
              </Link>
              <Link
                to="/allocation"
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "font-medium px-4 py-2 rounded-lg transition-colors duration-300",
                  isActive("/allocation") ? "bg-secondary/10 text-secondary" : "text-muted-foreground hover:bg-muted"
                )}
              >
                Find Your Hall
              </Link>
              <Link to="/allocation" onClick={() => setIsMenuOpen(false)} className="btn-hero text-center mt-2">
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
