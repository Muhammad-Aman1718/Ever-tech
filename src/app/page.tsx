import AboutUsSection from "@/components/aboutUsSection/AboutUsSection";
import ContactUsSection from "@/components/contactUsSection/ContactUsSection";
import CoursesSection from "@/components/coursesSection/CoursesSection";
import Footer from "@/components/footer/Footer";
import HeroSection from "@/components/heroSection/HeroSection";
import MainContainer from "@/components/MainContainer";
import Navbar from "@/components/navbar/Navbar";
import OurClients from "@/components/ourClients/OurClients";
import OurCommunity from "@/components/ourCommunity/OurCommunity";
import OurServicesSection from "@/components/ourServicesSection/OurServicesSection";
import React from "react";

const Home = () => {
  return (
    <div className="h-[5000px] ">
      <div className=" bg-[#F5F7FA] ">
        <MainContainer className="  ">
          <Navbar />
          <HeroSection />
        </MainContainer>
      </div>
      <MainContainer className="">
        <OurClients />
      </MainContainer>
      <div className=" bg-[#F5F7FA] ">
        <MainContainer>
          <OurCommunity />
        </MainContainer>
      </div>
      <MainContainer className="py-10 ">
        <CoursesSection />
      </MainContainer>
      <div className=" bg-[#F5F7FA] py-10 ">
        <MainContainer>
          <OurServicesSection />
        </MainContainer>
      </div>
      <MainContainer>
        <AboutUsSection />
      </MainContainer>
      <div className=" bg-[#F5F7FA] ">
        <MainContainer>
          <ContactUsSection />
        </MainContainer>
      </div>
      <div className=" bg-[#112f4b] ">
        <MainContainer>
          <Footer />
        </MainContainer>
      </div>
    </div>
  );
};

export default Home;
