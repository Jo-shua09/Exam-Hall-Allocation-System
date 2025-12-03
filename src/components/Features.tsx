import { Search, Shield, Zap, Printer } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Instant Search",
    description:
      "Find your examination hall in seconds. Simply enter your matriculation number and other details to get your hall assignment immediately.",
    color: "bg-secondary",
  },
  {
    icon: Shield,
    title: "Accurate Information",
    description: "Get reliable and up-to-date hall allocations directly from the examination office. No more outdated or incorrect information.",
    color: "bg-primary",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Our optimized system delivers results in under 5 seconds. No waiting, no delays — just instant access to your exam details.",
    color: "bg-accent",
  },
  {
    icon: Printer,
    title: "Print & Save",
    description: "Download or print your hall allocation slip for easy reference. Keep a copy for your records and share with classmates.",
    color: "bg-secondary",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 md:py-32 bg-background relative">
      <div className="absolute inset-0 pattern-grid opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">Features</span>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">Why Use Our System?</h2>
          <p className="text-muted-foreground text-lg">
            Designed with students in mind, our examination hall allocation system makes finding your exam venue effortless.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group glass-card p-4 md:p-6 card-hover animate-fade-in-up opacity-0"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
            >
              <div
                className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-poppins font-semibold text-xl text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="glass-card p-8 md:p-12 max-w-3xl mx-auto">
            <h3 className="font-poppins font-bold text-2xl md:text-3xl text-foreground mb-4">Ready to Find Your Hall?</h3>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Join thousands of students who have already found their examination halls using our system. It's quick, easy, and free!
            </p>
            <a href="/allocation" className="btn-hero inline-flex items-center gap-2">
              <Search className="w-5 h-5" />
              <span>Search Now</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
