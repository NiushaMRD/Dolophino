import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Courses from "@/components/Courses";
import About from "@/components/About";
import CTA from "@/components/CTA";
import ReservationSection from "@/components/ReservationSection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Features />
        <Courses />
        <About />
        <CTA />
<ReservationSection/>

<FAQ/>
      </main>

      <Footer />
    </>
  );
}