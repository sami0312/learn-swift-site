import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StudentVideos from "@/components/StudentVideos";
import Courses from "@/components/Courses";
import Pricing from "@/components/Pricing";
import Areas from "@/components/Areas";
import Resources from "@/components/Resources";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <StudentVideos />
        <Courses />
        <Pricing />
        <Areas />
        <Resources />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
