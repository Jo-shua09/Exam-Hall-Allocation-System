import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>ExamHall - Find Your Examination Hall Instantly</title>
        <meta
          name="description"
          content="Quickly find your assigned examination hall with our streamlined allocation system. No more confusion, no stress - enter your details and get your hall assignment instantly."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <Hero />
          <Features />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
