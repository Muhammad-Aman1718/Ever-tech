import React from "react";
import AboutUsSection from "@/components/aboutUsSection/AboutUsSection";
import ContactUsSection from "@/components/contactUsSection/ContactUsSection";
import CoursesSection from "@/components/coursesSection/CoursesSection";
import Footer from "@/components/footer/Footer";
import HeroSection from "@/components/heroSection/HeroSection";
import Navbar from "@/components/navbar/Navbar";
import OurClients from "@/components/ourClients/OurClients";
import OurCommunity from "@/components/ourCommunity/OurCommunity";
import OurServicesSection from "@/components/ourServicesSection/OurServicesSection";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a192f] to-[#0d1b36] font-sans text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <OurClients />
      <OurCommunity />
      <CoursesSection />
      <OurServicesSection />
      <AboutUsSection />
      <ContactUsSection />
      <Footer />
    </div>
  );
};

export default Home;
