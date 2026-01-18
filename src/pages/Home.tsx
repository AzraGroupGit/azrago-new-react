// src/pages/Home.tsx

import AboutUs from "../components/layout/AboutUs";
import Articles from "../components/layout/Articles";
import Clients from "../components/layout/Clients";
import Footer from "../components/layout/Footer";
import Hero from "../components/layout/Hero";
import HowItWorks from "../components/layout/HowItWork";
import Navbar from "../components/layout/Navbar";
import PopularDestinations from "../components/layout/PopularDestination";
import WhyChooseUs from "../components/layout/WhyChooseUs";

function Home() {
  return (
    <>
      <Navbar />
      <section id="hero" className="h-screen bg-gray-900">
        <Hero />
      </section>
      <section id="destinations">
        <PopularDestinations />
      </section>
      <section id="why-choose-us">
        <WhyChooseUs />
      </section>
      <section id="how-it-works">
        <HowItWorks />
      </section>
      <Clients />
      <section id="articles">
        <Articles />
      </section>
      <section id="about-us">
        <AboutUs />
      </section>
      <Footer />
    </>
  );
}

export default Home;
