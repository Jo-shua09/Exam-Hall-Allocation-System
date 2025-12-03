import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Users, Clock } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-hero-pattern" />
      <div className="absolute inset-0 pattern-dots opacity-30" />

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-accent/20 rounded-full blur-2xl animate-float" />
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-secondary/20 rounded-full blur-3xl animate-float animation-delay-200" />
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-primary-foreground/10 rounded-full blur-2xl animate-float animation-delay-400" />

      <div className="container mx-auto px-4 relative z-10 py-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-7xl text-primary-foreground mb-6 animate-fade-in-up opacity-0 animation-delay-100">
            Find Your
            <span className="block mt-2 text-accent">Examination Hall</span>
            <span className="block mt-2">In Seconds</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 animate-fade-in-up opacity-0 animation-delay-200">
            Quickly locate your assigned examination hall with our streamlined allocation system. No more confusion, no more stress — just enter your
            details and get your hall assignment instantly.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up opacity-0 animation-delay-300">
            <Link to="/allocation" className="btn-hero flex items-center gap-3 group">
              <span>Find Your Exam Hall</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <a
              href="#features"
              className="px-8 py-4 rounded-xl font-semibold text-primary-foreground border-2 border-primary-foreground/30 hover:bg-primary-foreground/10 transition-all duration-300"
            >
              Learn More
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 mt-16 animate-fade-in-up opacity-0 animation-delay-400 pb-12">
            <div className="text-center p-4">
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-accent" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-primary-foreground">50+</div>
              <div className="text-sm text-primary-foreground/60">Exam Halls</div>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-primary-foreground">10K+</div>
              <div className="text-sm text-primary-foreground/60">Students</div>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-primary-foreground">&lt;5s</div>
              <div className="text-sm text-primary-foreground/60">Search Time</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
