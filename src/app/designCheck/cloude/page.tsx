
"use client";
import React, { useState, useEffect, FormEvent } from "react";
import { ChevronDown, Code, Users, BookOpen, Settings, Mail, Phone, MapPin, Star, ArrowRight, Menu, X, Instagram, Twitter, Linkedin, Zap, Award, Rocket, Globe, Shield, Database } from "lucide-react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

const SoftwareHouseWebsite: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const sections = ["home", "clients", "community", "courses", "services", "about", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const navItems = ["Home", "Clients", "Community", "Courses", "Services", "About", "Contact"];

  return (
    <div className="min-h-screen bg-gray-50 font-sans overflow-x-hidden">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

        :root {
          --primary: #3B82F6;
          --primary-dark: #1E3A8A;
          --secondary: #EFF6FF;
          --accent: #F59E0B;
          --text-dark: #0F172A;
          --text-light: #64748B;
          --glass: rgba(255, 255, 255, 0.1);
        }

        * {
          font-family: 'Inter', sans-serif;
        }

        .animate-gradient {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          background-size: 400% 400%;
          animation: gradientShift 8s ease infinite;
        }

        .animate-gradient-2 {
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          background-size: 400% 400%;
          animation: gradientShift 6s ease infinite;
        }

        .animate-gradient-3 {
          background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
          background-size: 400% 400%;
          animation: gradientShift 10s ease infinite;
        }

        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .glassmorphism {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }

        .glass-card {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }

        .floating {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        .pulse-ring {
          animation: pulse-ring 2s infinite;
        }

        @keyframes pulse-ring {
          0% { transform: scale(0.8); opacity: 1; }
          100% { transform: scale(2.4); opacity: 0; }
        }

        .text-shadow {
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .hover-lift {
          transition: all 0.3s ease;
        }

        .hover-lift:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
        }

        .parallax-bg {
          background-attachment: fixed;
          background-size: cover;
          background-position: center;
        }

        .glow-on-hover {
          position: relative;
          transition: all 0.3s ease;
        }

        .glow-on-hover:hover {
          box-shadow: 0 0 30px rgba(59, 130, 246, 0.5);
        }

        .typewriter {
          overflow: hidden;
          border-right: 2px solid;
          white-space: nowrap;
          animation: typing 3s steps(40, end), blink-caret 0.75s step-end infinite;
        }

        @keyframes typing {
          from { width: 0; }
          to { width: 100%; }
        }

        @keyframes blink-caret {
          from, to { border-color: transparent; }
          50% { border-color: white; }
        }

        .particle {
          position: absolute;
          background: radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 70%);
          border-radius: 50%;
          animation: particle-float 20s linear infinite;
        }

        @keyframes particle-float {
          0% { transform: translateY(100vh) translateX(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100vh) translateX(100px); opacity: 0; }
        }

        .cursor-glow {
          pointer-events: none;
          position: fixed;
          top: 0;
          left: 0;
          width: 100px;
          height: 100px;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%);
          border-radius: 50%;
          z-index: 1000;
          transition: all 0.1s ease;
        }
      `}</style>

      {/* Cursor Glow Effect */}
      <div
        className="cursor-glow"
        style={{
          transform: `translate(${mousePosition.x - 50}px, ${mousePosition.y - 50}px)`
        }}
      />

      {/* Floating Particles */}
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 20}s`,
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
          }}
        />
      ))}

      {/* Navigation */}
      <nav className="fixed top-0 w-full glassmorphism shadow-lg z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center group">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-xl group-hover:scale-110 transition-transform duration-300">
                <Code className="h-6 w-6 text-white" />
              </div>
              <span className="ml-3 text-xl font-bold text-text-dark">TechSoft</span>
            </div>
            <div className="hidden md:flex space-x-8">
              {navItems.map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg relative overflow-hidden ${
                    activeSection === item.toLowerCase()
                      ? "text-blue-600 bg-blue-50"
                      : "text-text-dark hover:text-blue-600 hover:bg-blue-50"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item}
                  {activeSection === item.toLowerCase() && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-10 rounded-lg" />
                  )}
                </button>
              ))}
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden glassmorphism border-t border-white/20">
            <div className="px-4 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-text-dark hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-16 min-h-screen flex items-center relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`,
          transform: `translateY(${scrollY * 0.5}px)`
        }}
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse" />
          <div className="absolute top-40 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '4s' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight text-white text-shadow">
                  Building
                  <span className="block bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
                    Digital
                  </span>
                  <span className="block typewriter">Excellence</span>
                </h1>
                <p className="text-xl text-blue-100 leading-relaxed max-w-lg">
                  We craft cutting-edge software solutions and provide world-class training to transform businesses and careers in the digital age.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection("services")}
                  className="group bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold hover:shadow-2xl transition-all duration-300 flex items-center justify-center glow-on-hover"
                >
                  Explore Services
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                </button>
                <button
                  onClick={() => scrollToSection("courses")}
                  className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold hover:bg-white hover:text-blue-600 transition-all duration-300 backdrop-blur-sm"
                >
                  View Courses
                </button>
              </div>

              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">50+</div>
                  <div className="text-blue-200 text-sm">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">200+</div>
                  <div className="text-blue-200 text-sm">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">5+</div>
                  <div className="text-blue-200 text-sm">Years</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="glass-card rounded-3xl p-8 space-y-6 floating">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <div className="bg-green-400 h-4 w-4 rounded-full animate-pulse" />
                      <div className="absolute inset-0 bg-green-400 h-4 w-4 rounded-full pulse-ring" />
                    </div>
                    <span className="text-gray-700 font-semibold">Live Projects</span>
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                    <div className="w-3 h-3 bg-green-400 rounded-full" />
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    { label: "Web Development", progress: 85, color: "bg-blue-500" },
                    { label: "Mobile Apps", progress: 70, color: "bg-purple-500" },
                    { label: "AI Solutions", progress: 90, color: "bg-pink-500" }
                  ].map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm font-medium text-gray-700">
                        <span>{item.label}</span>
                        <span>{item.progress}%</span>
                      </div>
                      <div className="bg-gray-200 h-2 rounded-full overflow-hidden">
                        <div
                          className={`${item.color} h-2 rounded-full transition-all duration-2000 ease-out`}
                          style={{
                            width: `${item.progress}%`,
                            animationDelay: `${index * 0.5}s`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-center pt-4">
                  <div className="flex -space-x-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div
                        key={i}
                        className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full border-2 border-white hover:scale-110 transition-transform cursor-pointer"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Icons */}
              <div className="absolute -top-10 -right-10 bg-white p-4 rounded-2xl shadow-lg floating" style={{ animationDelay: '1s' }}>
                <Rocket className="h-8 w-8 text-blue-500" />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white p-4 rounded-2xl shadow-lg floating" style={{ animationDelay: '2s' }}>
                <Zap className="h-8 w-8 text-yellow-500" />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" onClick={() => scrollToSection("clients")}>
          <ChevronDown className="h-8 w-8 text-white/70" />
        </div>
      </section>

      {/* Clients Section */}
      <section id="clients" className="py-20 bg-gradient-to-br from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-text-dark mb-4">Trusted by Industry Leaders</h2>
            <p className="text-xl text-text-light">Join our growing family of successful partners</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
            {["TechCorp", "InnovateLab", "DataFlow", "CloudSync", "DevPro", "SmartSoft"].map((client, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-2xl text-center hover-lift group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold text-xl">{client[0]}</span>
                </div>
                <p className="font-semibold text-text-dark group-hover:text-blue-600 transition-colors">{client}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { value: "50+", label: "Happy Clients", icon: Users },
              { value: "200+", label: "Projects Completed", icon: Award },
              { value: "5+", label: "Years Experience", icon: Star },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <p className="text-text-light font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-text-dark mb-4">Join Our Thriving Community</h2>
            <p className="text-xl text-text-light">Connect, learn, and grow with like-minded professionals</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { icon: Users, value: "5000+", label: "Active Members", color: "from-blue-500 to-purple-600" },
              { icon: BookOpen, value: "1200+", label: "Course Graduates", color: "from-green-500 to-teal-600" },
              { icon: Star, value: "4.9/5", label: "Average Rating", color: "from-yellow-500 to-orange-600" },
              { icon: Code, value: "100+", label: "Expert Mentors", color: "from-pink-500 to-red-600" },
            ].map((item, index) => (
              <div
                key={index}
                className="glass-card p-8 rounded-2xl text-center hover-lift group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform`}>
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-text-dark mb-2">{item.value}</h3>
                <p className="text-text-light font-medium">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="glass-card rounded-3xl p-8">
            <h3 className="text-3xl font-bold text-text-dark mb-8 text-center">What Our Community Says</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Ahmed Ali",
                  role: "Full Stack Developer",
                  text: "This community transformed my career. The mentorship and resources are unparalleled!",
                  avatar: "AA"
                },
                {
                  name: "Sara Khan",
                  role: "UI/UX Designer",
                  text: "Incredible learning environment with hands-on projects and industry experts.",
                  avatar: "SK"
                },
                {
                  name: "Muhammad Hassan",
                  role: "Mobile Developer",
                  text: "Best investment I've made. The courses are comprehensive and support is amazing.",
                  avatar: "MH"
                },
              ].map((testimonial, index) => (
                <div key={index} className="relative group">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-1 w-0 group-hover:w-full transition-all duration-500 rounded-full mb-4" />
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <p className="font-bold text-text-dark">{testimonial.name}</p>
                        <p className="text-sm text-text-light">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-text-light italic leading-relaxed">"{testimonial.text}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

   <section id="services" className="pt-16 py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Our Premium Services</h2>
            <p className="text-xl text-gray-600">Comprehensive solutions to accelerate your digital transformation</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Custom Web Development",
                description: "Build scalable, responsive websites with cutting-edge technologies",
                features: ["React/Next.js", "Node.js Backend", "Database Design", "API Integration"],
                icon: Code,
                color: "from-blue-500 to-purple-600"
              },
              {
                title: "Mobile App Development",
                description: "Native and cross-platform mobile solutions for iOS and Android",
                features: ["React Native", "Flutter", "Native iOS/Android", "App Store Publishing"],
                icon: Globe,
                color: "from-green-500 to-teal-600"
              },
              {
                title: "AI & Machine Learning",
                description: "Intelligent solutions powered by artificial intelligence",
                features: ["Computer Vision", "NLP Processing", "Predictive Analytics", "Chatbots"],
                icon: Database,
                color: "from-purple-500 to-pink-600"
              },
              {
                title: "Cloud Solutions",
                description: "Scalable cloud infrastructure and deployment services",
                features: ["AWS/Azure Setup", "DevOps Pipeline", "Container Orchestration", "Monitoring"],
                icon: Zap,
                color: "from-yellow-500 to-orange-500"
              },
              {
                title: "UI/UX Design",
                description: "Beautiful, intuitive designs that enhance user experience",
                features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
                icon: Star,
                color: "from-pink-500 to-red-500"
              },
              {
                title: "Cybersecurity",
                description: "Comprehensive security audits and protection services",
                features: ["Security Audits", "Penetration Testing", "Compliance", "Training"],
                icon: Shield,
                color: "from-red-500 to-orange-600"
              }
            ].map((service, index) => (
              <div
                key={index}
                className="glass-card rounded-3xl p-8 hover-lift group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-5xl font-bold text-gray-900 mb-6">About TechSoft</h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  We're a passionate team of developers, designers, and innovators dedicated to transforming businesses through technology. With over 5 years of experience, we've helped countless companies achieve their digital goals.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our mission is to bridge the gap between complex technology and business success, delivering solutions that are not just functional, but transformational.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8">
                {[
                  { number: "200+", label: "Projects Delivered" },
                  { number: "50+", label: "Happy Clients" },
                  { number: "5+", label: "Years Experience" },
                  { number: "24/7", label: "Support Available" }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                    <p className="text-gray-600 font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold hover:shadow-lg transition-all duration-300 glow-on-hover"
                >
                  Get Started
                </button>
                <button className="border-2 border-blue-500 text-blue-600 px-8 py-4 rounded-2xl font-bold hover:bg-blue-50 transition-all duration-300">
                  Our Portfolio
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="glass-card rounded-3xl p-8 floating">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us?</h3>
                <div className="space-y-6">
                  {[
                    { icon: Award, title: "Expert Team", desc: "Certified professionals with proven track record" },
                    { icon: Rocket, title: "Fast Delivery", desc: "Agile development with quick turnaround times" },
                    { icon: Users, title: "24/7 Support", desc: "Round-the-clock assistance and maintenance" },
                    { icon: Star, title: "Quality Assured", desc: "Rigorous testing and quality control processes" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg">
                        <item.icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-xl text-blue-200">Ready to start your next project? Let's talk!</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="glass-card rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {[
                    { icon: Mail, title: "Email", info: "hello@techsoft.com", link: "mailto:hello@techsoft.com" },
                    { icon: Phone, title: "Phone", info: "+92 300 1234567", link: "tel:+923001234567" },
                    { icon: MapPin, title: "Address", info: "Faisalabad, Punjab, Pakistan", link: "#" }
                  ].map((contact, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-lg">
                        <contact.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{contact.title}</h4>
                        <a
                          href={contact.link}
                          className="text-gray-600 hover:text-blue-600 transition-colors"
                        >
                          {contact.info}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    {[
                      { icon: Instagram, link: "#", color: "from-pink-500 to-purple-600" },
                      { icon: Twitter, link: "#", color: "from-blue-400 to-blue-600" },
                      { icon: Linkedin, link: "#", color: "from-blue-600 to-blue-800" }
                    ].map((social, index) => (
                      <a
                        key={index}
                        href={social.link}
                        className={`p-3 bg-gradient-to-r ${social.color} rounded-lg hover:scale-110 transition-transform`}
                      >
                        <social.icon className="h-5 w-5 text-white" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-lg font-bold hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed glow-on-hover"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

 <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-xl">
                <Code className="h-8 w-8 text-white" />
              </div>
              <span className="ml-3 text-2xl font-bold">TechSoft</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Transforming businesses through innovative technology solutions. Your trusted partner in digital transformation.
            </p>
            <div className="border-t border-gray-800 pt-6">
              <p className="text-gray-400 text-sm">
                © 2024 TechSoft. All rights reserved. | Built with passion in Faisalabad, Pakistan
              </p>
            </div>
          </div>
        </div>
      </footer>

      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center mb-6">
                <div className="p-2 rounded-lg" >
                  <Code className="h-7 w-7 text-white" />
                </div>
                <span className="ml-3 text-2xl font-extrabold">TechSoft</span>
              </div>
              <p className="text-gray-400 leading-relaxed text-sm">
                Building digital excellence through innovative software solutions and comprehensive training programs for a brighter future.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">Services</h3>
              <ul className="space-y-4 text-gray-400 text-base">
                <li><a href="#services" className="hover:text-white transition-colors duration-300">Custom Development</a></li>
                <li><a href="#services" className="hover:text-white transition-colors duration-300">Web Applications</a></li>
                <li><a href="#services" className="hover:text-white transition-colors duration-300">Mobile Apps</a></li>
                <li><a href="#services" className="hover:text-white transition-colors duration-300">E-commerce Solutions</a></li>
                <li><a href="#services" className="hover:text-white transition-colors duration-300">IT Consulting</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">Courses</h3>
              <ul className="space-y-4 text-gray-400 text-base">
                <li><a href="#courses" className="hover:text-white transition-colors duration-300">Full Stack Development</a></li>
                <li><a href="#courses" className="hover:text-white transition-colors duration-300">Mobile Development</a></li>
                <li><a href="#courses" className="hover:text-white transition-colors duration-300">UI/UX Design</a></li>
                <li><a href="#courses" className="hover:text-white transition-colors duration-300">Data Science & AI</a></li>
                <li><a href="#courses" className="hover:text-white transition-colors duration-300">DevOps & Cloud</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">Connect With Us</h3>
              <div className="space-y-4 text-gray-400 text-base">
                <p className="flex items-center">📧 <span className="ml-2">info@techsoft.com</span></p>
                <p className="flex items-center">📞 <span className="ml-2">+92 300 1234567</span></p>
                <p className="flex items-center">📍 <span className="ml-2">Karachi, Pakistan</span></p>
                <div className="flex space-x-4 mt-4">
                  {/* Social Media Icons (placeholders) */}
                  <a href="#" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.79c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V22C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.884c6.766 0 10.457-5.617 10.457-10.457 0-.159 0-.317-.01-.476A7.47 7.47 0 0022 7.027a7.28 7.28 0 01-2.083.57 3.664 3.664 0 001.62-1.996 7.306 7.306 0 01-2.316.885 3.655 3.655 0 00-6.227 3.344A10.355 10.355 0 013.23 4.296a3.655 3.655 0 001.134 4.887 3.633 3.633 0 01-1.658-.456v.045a3.658 3.658 0 002.934 3.585 3.64 3.64 0 01-.96.126 3.651 3.651 0 01-.65-.06 3.665 3.665 0 003.414 2.54A7.323 7.323 0 014 18.068a10.323 10.323 0 004.29 2.816z" /></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 TechSoft. All rights reserved. Built with passion for technology.</p>
          </div>
        </div>
      </footer>

      {/* Custom Tailwind CSS animations - Add this to your main CSS file (e.g., globals.css or tailwind.css) */}
      <style jsx global>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounceSlow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes pulseProgress {
          0% {
            transform: scaleX(0.75);
            opacity: 0.8;
          }
          50% {
            transform: scaleX(1);
            opacity: 1;
          }
          100% {
            transform: scaleX(0.75);
            opacity: 0.8;
          }
        }

        @keyframes pulseProgressSlow {
          0% {
            transform: scaleX(0.5);
            opacity: 0.7;
          }
          50% {
            transform: scaleX(0.9);
            opacity: 1;
          }
          100% {
            transform: scaleX(0.5);
            opacity: 0.7;
          }
        }

        .animate-fade-in-down {
          animation: fadeInDown 0.6s ease-out forwards;
        }

        .animate-fade-in-left {
          animation: fadeInLeft 0.8s ease-out forwards;
          opacity: 0; /* Ensures element is hidden before animation */
        }

        .animate-fade-in-right {
          animation: fadeInRight 0.8s ease-out forwards;
          opacity: 0; /* Ensures element is hidden before animation */
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0; /* Ensures element is hidden before animation */
        }

        .animate-bounce-slow {
          animation: bounceSlow 3s infinite ease-in-out;
        }

        .animate-pulse-progress {
          animation: pulseProgress 2s infinite ease-in-out;
        }

        .animate-pulse-progress-slow {
          animation: pulseProgressSlow 3s infinite ease-in-out;
        }

      `}</style>
    </div>
  );
};

export default SoftwareHouseWebsite;