"use client";
import React, { useEffect, useRef, useState } from "react";
import { Code, Menu, X } from "lucide-react";
import { navItems } from "@/constant/data";
import useNavbar from "@/hooks/useNavbar";

const Navbar = () => {
  const { isMenuOpen, setIsMenuOpen, activeSection, setActiveSection } =
    useNavbar();

  useEffect(() => {
    const handleScroll = () => {
      const current = navItems.find((section) => {
        const element = document.getElementById(section.toLowerCase());
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) setActiveSection(current.toLowerCase());
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-[#0a192f]/95 backdrop-blur-sm shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-r from-[#2A75BB] to-[#3498db] p-2 rounded-lg">
              <Code className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-[#2A75BB] to-[#3498db] bg-clip-text text-transparent">
              TechSoft
            </span>
          </div>

          <div className="hidden md:block">
            <div className="flex space-x-6">
              {navItems?.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`px-3 py-2 font-medium transition-colors ${
                    activeSection === item.toLowerCase()
                      ? "text-[#2A75BB]"
                      : "text-gray-300 hover:text-[#2A75BB]"
                  } relative group`}
                >
                  {item}
                  <span
                    className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#2A75BB] to-[#3498db] transition-all duration-300 ${
                      activeSection === item.toLowerCase()
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  ></span>
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-300"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0d1b36] border-t border-gray-800">
          <div className="px-2 pt-2 pb-4 space-y-1">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`block px-4 py-3 text-base font-medium w-full text-left rounded-lg transition-colors ${
                  activeSection === item.toLowerCase()
                    ? "bg-[#2A75BB]/20 text-[#2A75BB]"
                    : "text-gray-300 hover:bg-[#2A75BB]/10"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
