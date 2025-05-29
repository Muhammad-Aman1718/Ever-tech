"use client";
import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  Code,
  Users,
  BookOpen,
  Settings,
  Mail,
  Phone,
  MapPin,
  Star,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";

const SoftwareHouseWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "clients",
        "community",
        "courses",
        "services",
        "about",
        "contact",
      ];
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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div className="bg-indigo-600 p-2 rounded-lg">
                <Code className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                TechSoft
              </span>
            </div>

            <div className="hidden md:block">
              <div className="flex space-x-6">
                {[
                  "Home",
                  "Clients",
                  "Community",
                  "Courses",
                  "Services",
                  "About",
                  "Contact",
                ].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`px-3 py-2 font-medium transition-colors ${
                      activeSection === item.toLowerCase()
                        ? "text-indigo-600"
                        : "text-gray-600 hover:text-indigo-600"
                    } relative group`}
                  >
                    {item}
                    <span
                      className={`absolute -bottom-1 left-0 w-full h-0.5 bg-indigo-600 transition-all duration-300 ${
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
              className="md:hidden p-2 text-gray-600"
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
          <div className="md:hidden bg-white border-t shadow-inner">
            <div className="px-2 pt-2 pb-4 space-y-1">
              {[
                "Home",
                "Clients",
                "Community",
                "Courses",
                "Services",
                "About",
                "Contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`block px-4 py-3 text-base font-medium w-full text-left rounded-lg transition-colors ${
                    activeSection === item.toLowerCase()
                      ? "bg-indigo-50 text-indigo-600"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
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
        className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-gray-900 to-gray-800 text-white"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-indigo-500 rounded-full mix-blend-soft-light filter blur-3xl"></div>
          <div className="absolute bottom-10 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-soft-light filter blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-block bg-indigo-500/10 px-4 py-1.5 rounded-full text-sm font-medium mb-4 border border-indigo-500/30">
                <span className="mr-2">🚀</span> Leading software solutions
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Building Digital
                <span className="block mt-2 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Excellence
                </span>
              </h1>

              <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
                We provide cutting-edge development services and comprehensive
                training programs to empower businesses and individuals in the
                digital world.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection("services")}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30"
                >
                  Explore Services
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => scrollToSection("courses")}
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-300"
                >
                  View Courses
                </button>
              </div>

              <div className="flex items-center pt-4 gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-white overflow-hidden"
                    >
                      <div className="w-full h-full bg-gray-200 border-2 border-dashed rounded-xl" />
                    </div>
                  ))}
                </div>
                <p className="text-gray-300">
                  <span className="font-semibold text-white">50+</span> Experts
                  Team
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 space-y-6 border border-white/10 shadow-xl">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-green-500 rounded-full blur opacity-75 animate-pulse"></div>
                    <div className="relative bg-green-500 h-3 w-3 rounded-full"></div>
                  </div>
                  <span className="text-green-300 font-medium">
                    Live Projects Running
                  </span>
                </div>

                <div className="space-y-4">
                  {[
                    { label: "Web Development", value: 85 },
                    { label: "Mobile Apps", value: 70 },
                    { label: "UI/UX Design", value: 90 },
                  ].map((item, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-300">{item.label}</span>
                        <span className="text-white font-medium">
                          {item.value}%
                        </span>
                      </div>
                      <div className="bg-gray-700 h-2 rounded-full">
                        <div
                          className="bg-gradient-to-r from-green-400 to-cyan-400 h-2 rounded-full"
                          style={{ width: `${item.value}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex justify-center">
                  <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-0.5 rounded-full">
                    <div className="bg-gray-900 rounded-full px-6 py-2 text-center">
                      <span className="text-sm font-medium bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                        200+ Projects Completed
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-white/70" />
        </div>
      </section>

      {/* Our Clients */}
      <section id="clients" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted By Industry Leaders
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We partner with innovative companies worldwide to deliver
              exceptional digital solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center">
            {[
              "TechCorp",
              "InnovateLab",
              "DataFlow",
              "CloudSync",
              "DevPro",
              "SmartSoft",
            ].map((client, index) => (
              <div
                key={index}
                className="bg-gray-50 p-4 rounded-xl text-center hover:shadow-md transition-all duration-300 group border border-gray-100"
              >
                <div className="bg-gradient-to-br from-indigo-100 to-purple-100 w-14 h-14 rounded-xl mx-auto mb-3 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <span className="text-xl font-bold text-indigo-600">
                    {client[0]}
                  </span>
                </div>
                <p className="font-semibold text-gray-800">{client}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 grid md:grid-cols-3 gap-8">
            {[
              {
                value: "50+",
                label: "Happy Clients",
                icon: <Users className="h-8 w-8 text-indigo-600" />,
              },
              {
                value: "200+",
                label: "Projects Completed",
                icon: <Code className="h-8 w-8 text-indigo-600" />,
              },
              {
                value: "5+",
                label: "Years Experience",
                icon: <Star className="h-8 w-8 text-indigo-600" />,
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl text-center border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-50 rounded-full mb-4">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Community */}
      <section
        id="community"
        className="py-20 bg-gradient-to-br from-gray-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Join Our Thriving Community
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Thousands of developers and learners growing together
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                value: "5000+",
                label: "Active Members",
                icon: <Users className="h-10 w-10 text-white" />,
                color: "from-indigo-500 to-indigo-600",
              },
              {
                value: "1200+",
                label: "Course Graduates",
                icon: <BookOpen className="h-10 w-10 text-white" />,
                color: "from-purple-500 to-purple-600",
              },
              {
                value: "4.9/5",
                label: "Average Rating",
                icon: <Star className="h-10 w-10 text-white" />,
                color: "from-amber-500 to-amber-600",
              },
              {
                value: "100+",
                label: "Expert Mentors",
                icon: <Code className="h-10 w-10 text-white" />,
                color: "from-cyan-500 to-cyan-600",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${item.color} p-6 rounded-2xl text-center text-white shadow-lg hover:shadow-xl transition-shadow duration-300`}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{item.value}</h3>
                <p>{item.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold text-gray-900">
                What Our Community Says
              </h3>
              <p className="text-gray-600 mt-2">
                Real stories from our members
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Ahmed Ali",
                  role: "Full Stack Developer",
                  text: "This community helped me land my dream job. The support and resources are incredible!",
                },
                {
                  name: "Sara Khan",
                  role: "UI/UX Designer",
                  text: "Amazing learning environment with practical projects and expert guidance.",
                },
                {
                  name: "Muhammad Hassan",
                  role: "Mobile Developer",
                  text: "Best investment in my career. The courses are top-notch and mentors are very supportive.",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white font-bold">
                      {testimonial.name[0]}
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold text-gray-800">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600">"{testimonial.text}"</p>
                  <div className="flex mt-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="h-5 w-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transform Your Career
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Master the latest technologies with industry experts
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Full Stack Web Development",
                duration: "6 months",
                students: "500+",
                level: "Beginner to Advanced",
                tags: ["React", "Node.js", "MongoDB"],
              },
              {
                title: "Mobile App Development",
                duration: "4 months",
                students: "300+",
                level: "Intermediate",
                tags: ["Flutter", "React Native", "Firebase"],
              },
              {
                title: "UI/UX Design Mastery",
                duration: "3 months",
                students: "400+",
                level: "Beginner",
                tags: ["Figma", "Adobe XD", "Prototyping"],
              },
              {
                title: "Data Science & AI",
                duration: "8 months",
                students: "250+",
                level: "Advanced",
                tags: ["Python", "TensorFlow", "ML"],
              },
              {
                title: "DevOps & Cloud Computing",
                duration: "5 months",
                students: "200+",
                level: "Intermediate",
                tags: ["AWS", "Docker", "Kubernetes"],
              },
              {
                title: "Cybersecurity Fundamentals",
                duration: "4 months",
                students: "150+",
                level: "Beginner",
                tags: ["Ethical Hacking", "Network Security", "Encryption"],
              },
            ].map((course, index) => (
              <div
                key={index}
                className="bg-gradient-to-b from-white to-gray-50 rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-3 rounded-lg mb-4 group-hover:scale-105 transition-transform">
                      <BookOpen className="h-6 w-6 text-white" />
                    </div>
                    <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      {course.level}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {course.title}
                  </h3>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {course.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between text-gray-600 text-sm mb-6">
                    <span>⏱ {course.duration}</span>
                    <span>👥 {course.students} students</span>
                  </div>

                  <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-lg font-medium hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-md shadow-indigo-500/20 hover:shadow-indigo-500/30">
                    Enroll Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-20 bg-gradient-to-br from-gray-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Digital Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive services to transform your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Code,
                title: "Custom Software Development",
                desc: "Tailored software solutions built with cutting-edge technologies",
              },
              {
                icon: Settings,
                title: "Web Application Development",
                desc: "Responsive and scalable web applications for all platforms",
              },
              {
                icon: Users,
                title: "Mobile App Development",
                desc: "Native and cross-platform mobile applications",
              },
              {
                icon: BookOpen,
                title: "E-commerce Solutions",
                desc: "Complete online store development with payment integration",
              },
              {
                icon: Star,
                title: "Digital Marketing",
                desc: "SEO, social media marketing, and digital brand building",
              },
              {
                icon: Mail,
                title: "IT Consulting",
                desc: "Strategic technology consulting for business growth",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-2xl mb-6 group-hover:bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:text-white transition-all duration-300">
                  <service.icon className="h-8 w-8 text-indigo-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.desc}
                </p>
                <button className="inline-flex items-center text-indigo-600 font-medium group-hover:text-purple-600 transition-colors">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96 lg:h-[500px]" />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl w-3/4 h-72 -z-10"></div>

              <div className="absolute -top-8 -left-8 bg-white p-6 rounded-2xl shadow-lg border border-gray-100 max-w-xs">
                <div className="text-4xl font-bold text-indigo-600 mb-2">
                  5+
                </div>
                <p className="text-gray-800 font-medium">Years of Excellence</p>
              </div>
            </div>

            <div>
              <div className="inline-block bg-indigo-100 text-indigo-800 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                About TechSoft
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Innovating Since 2019
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We are a passionate team of developers, designers, and educators
                committed to delivering exceptional software solutions and
                empowering the next generation of tech professionals.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Founded in 2019, we've grown from a small startup to a trusted
                technology partner for businesses worldwide, bridging the gap
                between innovative technology and practical business solutions.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  "Expert team of 50+ professionals",
                  "200+ successful projects delivered",
                  "Global clients across 15+ countries",
                  "Industry-leading training programs",
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                      <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-indigo-500/20">
                Our Vision & Mission
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's Build Together
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Ready to start your project? Get in touch with our team
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Office Address</h3>
                  <p className="text-gray-300">
                    123 Tech Street, Innovation District
                    <br />
                    Karachi, Pakistan 75000
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Phone Number</h3>
                  <p className="text-gray-300">
                    +92 300 1234567
                    <br />
                    +92 21 12345678
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Email Address</h3>
                  <p className="text-gray-300">
                    info@techsoft.com
                    <br />
                    support@techsoft.com
                  </p>
                </div>
              </div>

              <div className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
                <div className="space-y-2 text-gray-300">
                  <p className="flex justify-between">
                    <span>Monday - Friday</span> <span>9:00 AM - 6:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Saturday</span> <span>10:00 AM - 4:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Sunday</span> <span>Closed</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700">
              <h3 className="text-2xl font-bold mb-8">Send us a message</h3>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors placeholder:text-gray-500"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors placeholder:text-gray-500"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors placeholder:text-gray-500"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors placeholder:text-gray-500"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors resize-none placeholder:text-gray-500"
                    placeholder="Tell us about your project or inquiry..."
                  ></textarea>
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-indigo-500/20"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

       {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-indigo-600 p-2 rounded-lg">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">TechSoft</span>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Building digital excellence through innovative software solutions and comprehensive training programs.
              </p>
              <div className="flex space-x-4">
                {['twitter', 'linkedin', 'github', 'dribbble'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-indigo-600 transition-colors"
                  >
                    <div className="bg-gray-400 border-2 border-dashed rounded-xl w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Services</h3>
              <ul className="space-y-3 text-gray-400">
                {[
                  "Custom Development",
                  "Web Applications",
                  "Mobile Apps",
                  "E-commerce",
                  "Digital Marketing",
                  "IT Consulting"
                ].map((service, index) => (
                  <li key={index}>
                    <a href="#" className="hover:text-indigo-400 transition-colors">{service}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Courses</h3>
              <ul className="space-y-3 text-gray-400">
                {[
                  "Full Stack Development",
                  "Mobile Development",
                  "UI/UX Design",
                  "Data Science & AI",
                  "DevOps & Cloud",
                  "Cybersecurity"
                ].map((course, index) => (
                  <li key={index}>
                    <a href="#" className="hover:text-indigo-400 transition-colors">{course}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Newsletter</h3>
              <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates and offers.</p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-3 bg-gray-800 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-indigo-500 w-full"
                />
                <button className="bg-gradient-to-r from-indigo-600 to-purple-600 px-4 rounded-r-lg font-medium hover:from-indigo-700 hover:to-purple-700 transition-all">
                  Join
                </button>
              </form>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} TechSoft. All rights reserved. Crafted with passion for technology.</p>
          </div>
        </div>
      </footer>

      {/* Footer */}
      {/* <footer className="bg-gray-900 text-white pt-16 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-indigo-600 p-2 rounded-lg">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">TechSoft</span>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Building digital excellence through innovative software solutions and comprehensive training programs.
              </p>
              <div className="flex space-x-4">
                {['twitter', 'linkedin', 'github', 'dribbble'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-indigo-600 transition-colors"
                  >
                    <div className="bg-gray-400 border-2 border-dashed rounded-xl w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Services</h3>
              <ul className="space-y-3 text-gray-400">
                {[
                  "Custom Development",
                  "Web
 */}
    </div>
  );
};

export default SoftwareHouseWebsite;