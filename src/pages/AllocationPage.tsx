import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import AllocationForm from "@/components/AllocationForm";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const AllocationPage = () => {
  return (
    <>
      <Helmet>
        <title>Find Your Exam Hall - ExamHall Allocation System</title>
        <meta
          name="description"
          content="Enter your matriculation number and details to find your examination hall allocation. Get instant results with hall number, date, and time."
        />
      </Helmet>

      <div className="min-h-screen bg-background flex flex-col">
        <Navigation />

        <main className="flex-1 pt-24 md:pt-28 pb-16">
          <div className="container mx-auto px-4">
            {/* Page Header */}
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4 animate-fade-in-down">
                Hall Allocation
              </span>
              <h1 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 animate-fade-in-up opacity-0 animation-delay-100">
                Find Your Examination Hall
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-in-up opacity-0 animation-delay-200">
                Enter your student information below to locate your assigned examination venue. All fields are required for accurate results.
              </p>
            </div>

            {/* Form Container */}
            <div className="max-w-2xl mx-auto animate-fade-in-up opacity-0 animation-delay-300">
              <AllocationForm />
            </div>

            {/* Help Section */}
            <div className="mt-16 max-w-2xl mx-auto">
              <div className="glass-card p-6 md:p-8">
                <h3 className="font-poppins font-semibold text-lg text-foreground mb-4">Need Help?</h3>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Where do I find my matriculation number?</h4>
                    <p className="text-sm">Your 12-digit matriculation number can be found on your student ID card or admission letter.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">What if I can't find my hall?</h4>
                    <p className="text-sm">
                      If your hall allocation is not found, please visit the Examination Office during working hours or contact support at
                      support@examhall.edu.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Can I change my allocated hall?</h4>
                    <p className="text-sm">
                      Hall allocations are final. If you have a valid reason for a change, please submit a request to the Examination Office at least
                      48 hours before your exam.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AllocationPage;
