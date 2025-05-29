// "use client"
// import React, { useState, useEffect } from 'react';
// import { ChevronDown, Code, Users, BookOpen, Settings, Mail, Phone, MapPin, Star, ArrowRight, Menu, X } from 'lucide-react';

// const SoftwareHouseWebsite = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState('home');
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     subject: '',
//     message: ''
//   });

//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = ['home', 'clients', 'community', 'courses', 'services', 'about', 'contact'];
//       const current = sections.find(section => {
//         const element = document.getElementById(section);
//         if (element) {
//           const rect = element.getBoundingClientRect();
//           return rect.top <= 100 && rect.bottom >= 100;
//         }
//         return false;
//       });
//       if (current) setActiveSection(current);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToSection = (sectionId) => {
//     document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
//     setIsMenuOpen(false);
//   };

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert('Thank you for your message! We will get back to you soon.');
//     setFormData({
//       firstName: '',
//       lastName: '',
//       email: '',
//       subject: '',
//       message: ''
//     });
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Navigation */}
//       <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-lg z-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16">
//             <div className="flex items-center">
//               <div className="bg-blue-600 p-2 rounded-lg">
//                 <Code className="h-6 w-6 text-white" />
//               </div>
//               <span className="ml-3 text-xl font-bold text-gray-800">TechSoft</span>
//             </div>

//             <div className="hidden md:block">
//               <div className="flex space-x-8">
//                 {['Home', 'Clients', 'Community', 'Courses', 'Services', 'About', 'Contact'].map((item) => (
//                   <button
//                     key={item}
//                     onClick={() => scrollToSection(item.toLowerCase())}
//                     className={`px-3 py-2 text-sm font-medium transition-colors ${
//                       activeSection === item.toLowerCase()
//                         ? 'text-blue-600 border-b-2 border-blue-600'
//                         : 'text-gray-700 hover:text-blue-600'
//                     }`}
//                   >
//                     {item}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="md:hidden p-2"
//             >
//               {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="md:hidden bg-white border-t">
//             <div className="px-2 pt-2 pb-3 space-y-1">
//               {['Home', 'Clients', 'Community', 'Courses', 'Services', 'About', 'Contact'].map((item) => (
//                 <button
//                   key={item}
//                   onClick={() => scrollToSection(item.toLowerCase())}
//                   className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 w-full text-left"
//                 >
//                   {item}
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}
//       </nav>

//       {/* Hero Section */}
//       <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-blue-600 to-blue-800 text-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div className="space-y-8">
//               <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
//                 Building Digital
//                 <span className="block text-blue-200">Excellence</span>
//               </h1>
//               <p className="text-xl text-blue-100 leading-relaxed">
//                 We are a leading software house providing cutting-edge development services and comprehensive training courses to empower businesses and individuals in the digital world.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4">
//                 <button
//                   onClick={() => scrollToSection('services')}
//                   className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center group"
//                 >
//                   Explore Services
//                   <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
//                 </button>
//                 <button
//                   onClick={() => scrollToSection('courses')}
//                   className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
//                 >
//                   View Courses
//                 </button>
//               </div>
//             </div>
//             <div className="relative">
//               <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 space-y-6">
//                 <div className="flex items-center space-x-4">
//                   <div className="bg-green-400 h-3 w-3 rounded-full animate-pulse"></div>
//                   <span className="text-blue-100">Live Projects Running</span>
//                 </div>
//                 <div className="space-y-4">
//                   <div className="bg-white/20 h-2 rounded-full">
//                     <div className="bg-white h-2 rounded-full w-3/4 animate-pulse"></div>
//                   </div>
//                   <div className="bg-white/20 h-2 rounded-full">
//                     <div className="bg-white h-2 rounded-full w-1/2 animate-pulse"></div>
//                   </div>
//                   <div className="bg-white/20 h-2 rounded-full">
//                     <div className="bg-white h-2 rounded-full w-5/6 animate-pulse"></div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//           <ChevronDown className="h-8 w-8 text-white/70" />
//         </div>
//       </section>

//       {/* Our Clients */}
//       <section id="clients" className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Trusted Clients</h2>
//             <p className="text-xl text-gray-600">Working with industry leaders worldwide</p>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
//             {['TechCorp', 'InnovateLab', 'DataFlow', 'CloudSync', 'DevPro', 'SmartSoft'].map((client, index) => (
//               <div key={index} className="bg-gray-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow group">
//                 <div className="bg-blue-600 w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform">
//                   <span className="text-white font-bold">{client[0]}</span>
//                 </div>
//                 <p className="font-semibold text-gray-700">{client}</p>
//               </div>
//             ))}
//           </div>

//           <div className="mt-16 grid md:grid-cols-3 gap-8">
//             <div className="text-center">
//               <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
//               <p className="text-gray-600">Happy Clients</p>
//             </div>
//             <div className="text-center">
//               <div className="text-4xl font-bold text-blue-600 mb-2">200+</div>
//               <p className="text-gray-600">Projects Completed</p>
//             </div>
//             <div className="text-center">
//               <div className="text-4xl font-bold text-blue-600 mb-2">5+</div>
//               <p className="text-gray-600">Years Experience</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Our Community */}
//       <section id="community" className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Growing Community</h2>
//             <p className="text-xl text-gray-600">Join thousands of developers and learners</p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
//               <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
//               <h3 className="text-2xl font-bold text-gray-800 mb-2">5000+</h3>
//               <p className="text-gray-600">Active Members</p>
//             </div>
//             <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
//               <BookOpen className="h-12 w-12 text-blue-600 mx-auto mb-4" />
//               <h3 className="text-2xl font-bold text-gray-800 mb-2">1200+</h3>
//               <p className="text-gray-600">Course Graduates</p>
//             </div>
//             <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
//               <Star className="h-12 w-12 text-blue-600 mx-auto mb-4" />
//               <h3 className="text-2xl font-bold text-gray-800 mb-2">4.9/5</h3>
//               <p className="text-gray-600">Average Rating</p>
//             </div>
//             <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
//               <Code className="h-12 w-12 text-blue-600 mx-auto mb-4" />
//               <h3 className="text-2xl font-bold text-gray-800 mb-2">100+</h3>
//               <p className="text-gray-600">Expert Mentors</p>
//             </div>
//           </div>

//           <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
//             <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Community Testimonials</h3>
//             <div className="grid md:grid-cols-3 gap-8">
//               {[
//                 { name: "Ahmed Ali", role: "Full Stack Developer", text: "This community helped me land my dream job. The support and resources are incredible!" },
//                 { name: "Sara Khan", role: "UI/UX Designer", text: "Amazing learning environment with practical projects and expert guidance." },
//                 { name: "Muhammad Hassan", role: "Mobile Developer", text: "Best investment in my career. The courses are top-notch and mentors are very supportive." }
//               ].map((testimonial, index) => (
//                 <div key={index} className="border-l-4 border-blue-600 pl-6">
//                   <p className="text-gray-600 italic mb-4">"{testimonial.text}"</p>
//                   <div>
//                     <p className="font-semibold text-gray-800">{testimonial.name}</p>
//                     <p className="text-sm text-gray-500">{testimonial.role}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Courses Section */}
//       <section id="courses" className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Courses</h2>
//             <p className="text-xl text-gray-600">Master the latest technologies with industry experts</p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               { title: "Full Stack Web Development", duration: "6 months", students: "500+", level: "Beginner to Advanced" },
//               { title: "Mobile App Development", duration: "4 months", students: "300+", level: "Intermediate" },
//               { title: "UI/UX Design Mastery", duration: "3 months", students: "400+", level: "Beginner" },
//               { title: "Data Science & AI", duration: "8 months", students: "250+", level: "Advanced" },
//               { title: "DevOps & Cloud Computing", duration: "5 months", students: "200+", level: "Intermediate" },
//               { title: "Cybersecurity Fundamentals", duration: "4 months", students: "150+", level: "Beginner" }
//             ].map((course, index) => (
//               <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow group">
//                 <div className="bg-blue-600 p-3 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform">
//                   <BookOpen className="h-6 w-6 text-white" />
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-800 mb-3">{course.title}</h3>
//                 <div className="space-y-2 text-gray-600">
//                   <p>Duration: {course.duration}</p>
//                   <p>Students: {course.students}</p>
//                   <p>Level: {course.level}</p>
//                 </div>
//                 <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors w-full">
//                   Enroll Now
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section id="services" className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
//             <p className="text-xl text-gray-600">Comprehensive software solutions for your business</p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               { icon: Code, title: "Custom Software Development", desc: "Tailored software solutions built with cutting-edge technologies" },
//               { icon: Settings, title: "Web Application Development", desc: "Responsive and scalable web applications for all platforms" },
//               { icon: Users, title: "Mobile App Development", desc: "Native and cross-platform mobile applications" },
//               { icon: BookOpen, title: "E-commerce Solutions", desc: "Complete online store development with payment integration" },
//               { icon: Star, title: "Digital Marketing", desc: "SEO, social media marketing, and digital brand building" },
//               { icon: Mail, title: "IT Consulting", desc: "Strategic technology consulting for business growth" }
//             ].map((service, index) => (
//               <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow group">
//                 <div className="bg-blue-600 p-4 rounded-lg w-fit mb-6 group-hover:scale-110 transition-transform">
//                   <service.icon className="h-8 w-8 text-white" />
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
//                 <p className="text-gray-600 leading-relaxed">{service.desc}</p>
//                 <button className="mt-6 text-blue-600 font-semibold hover:text-blue-700 transition-colors flex items-center">
//                   Learn More <ArrowRight className="ml-2 h-4 w-4" />
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* About Us */}
//       <section id="about" className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <h2 className="text-4xl font-bold text-gray-800 mb-6">About TechSoft</h2>
//               <p className="text-lg text-gray-600 leading-relaxed mb-6">
//                 We are a passionate team of developers, designers, and educators committed to delivering exceptional software solutions and empowering the next generation of tech professionals.
//               </p>
//               <p className="text-lg text-gray-600 leading-relaxed mb-8">
//                 Founded in 2019, we have grown from a small startup to a trusted technology partner for businesses worldwide. Our mission is to bridge the gap between innovative technology and practical business solutions.
//               </p>
//               <div className="space-y-4">
//                 <div className="flex items-center space-x-3">
//                   <div className="bg-blue-600 p-1 rounded-full">
//                     <div className="bg-white w-2 h-2 rounded-full"></div>
//                   </div>
//                   <span className="text-gray-700">Expert team of 50+ professionals</span>
//                 </div>
//                 <div className="flex items-center space-x-3">
//                   <div className="bg-blue-600 p-1 rounded-full">
//                     <div className="bg-white w-2 h-2 rounded-full"></div>
//                   </div>
//                   <span className="text-gray-700">5+ years of industry experience</span>
//                 </div>
//                 <div className="flex items-center space-x-3">
//                   <div className="bg-blue-600 p-1 rounded-full">
//                     <div className="bg-white w-2 h-2 rounded-full"></div>
//                   </div>
//                   <span className="text-gray-700">200+ successful projects delivered</span>
//                 </div>
//               </div>
//             </div>
//             <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
//               <h3 className="text-2xl font-bold mb-6">Our Vision & Mission</h3>
//               <div className="space-y-6">
//                 <div>
//                   <h4 className="text-lg font-semibold mb-2">Vision</h4>
//                   <p className="text-blue-100">To become the leading technology partner that transforms businesses through innovative software solutions.</p>
//                 </div>
//                 <div>
//                   <h4 className="text-lg font-semibold mb-2">Mission</h4>
//                   <p className="text-blue-100">To deliver high-quality software solutions and provide world-class training to create skilled professionals for the global market.</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contact Us */}
//       <section id="contact" className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
//             <p className="text-xl text-gray-600">Ready to start your project? Let's discuss your needs</p>
//           </div>

//           <div className="grid lg:grid-cols-2 gap-12">
//             <div className="space-y-8">
//               <div className="flex items-start space-x-4">
//                 <div className="bg-blue-600 p-3 rounded-lg">
//                   <MapPin className="h-6 w-6 text-white" />
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-800 mb-2">Office Address</h3>
//                   <p className="text-gray-600">123 Tech Street, Innovation District<br />Karachi, Pakistan 75000</p>
//                 </div>
//               </div>

//               <div className="flex items-start space-x-4">
//                 <div className="bg-blue-600 p-3 rounded-lg">
//                   <Phone className="h-6 w-6 text-white" />
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-800 mb-2">Phone Number</h3>
//                   <p className="text-gray-600">+92 300 1234567<br />+92 21 12345678</p>
//                 </div>
//               </div>

//               <div className="flex items-start space-x-4">
//                 <div className="bg-blue-600 p-3 rounded-lg">
//                   <Mail className="h-6 w-6 text-white" />
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-800 mb-2">Email Address</h3>
//                   <p className="text-gray-600">info@techsoft.com<br />support@techsoft.com</p>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white p-8 rounded-xl shadow-lg">
//               <div className="space-y-6">
//                 <div className="grid md:grid-cols-2 gap-6">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
//                     <input
//                       type="text"
//                       name="firstName"
//                       value={formData.firstName}
//                       onChange={handleInputChange}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-colors"
//                       placeholder="Your first name"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
//                     <input
//                       type="text"
//                       name="lastName"
//                       value={formData.lastName}
//                       onChange={handleInputChange}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-colors"
//                       placeholder="Your last name"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-colors"
//                     placeholder="your.email@example.com"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
//                   <input
//                     type="text"
//                     name="subject"
//                     value={formData.subject}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-colors"
//                     placeholder="What's this about?"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
//                   <textarea
//                     rows={5}
//                     name="message"
//                     value={formData.message}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-colors resize-none"
//                     placeholder="Tell us about your project or inquiry..."
//                   ></textarea>
//                 </div>

//                 <button
//                   onClick={handleSubmit}
//                   className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
//                 >
//                   Send Message
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-white py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             <div>
//               <div className="flex items-center mb-6">
//                 <div className="bg-blue-600 p-2 rounded-lg">
//                   <Code className="h-6 w-6 text-white" />
//                 </div>
//                 <span className="ml-3 text-xl font-bold">TechSoft</span>
//               </div>
//               <p className="text-gray-400 leading-relaxed">
//                 Building digital excellence through innovative software solutions and comprehensive training programs.
//               </p>
//             </div>

//             <div>
//               <h3 className="text-lg font-semibold mb-6">Services</h3>
//               <ul className="space-y-3 text-gray-400">
//                 <li><a href="#" className="hover:text-white transition-colors">Custom Development</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Web Applications</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Mobile Apps</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">E-commerce</a></li>
//               </ul>
//             </div>

//             <div>
//               <h3 className="text-lg font-semibold mb-6">Courses</h3>
//               <ul className="space-y-3 text-gray-400">
//                 <li><a href="#" className="hover:text-white transition-colors">Full Stack Development</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Mobile Development</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">UI/UX Design</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Data Science</a></li>
//               </ul>
//             </div>

//             <div>
//               <h3 className="text-lg font-semibold mb-6">Connect With Us</h3>
//               <div className="space-y-3 text-gray-400">
//                 <p>📧 info@techsoft.com</p>
//                 <p>📞 +92 300 1234567</p>
//                 <p>📍 Karachi, Pakistan</p>
//               </div>
//             </div>
//           </div>

//           <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
//             <p>&copy; 2024 TechSoft. All rights reserved. Built with passion for technology.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default SoftwareHouseWebsite;



// this is Deepseek
// this is Deepseek
// this is Deepseek
// this is Deepseek



// this is forth time
// this is forth time
// this is forth time
// this is forth time
// this is forth time
// this is forth time
// this is forth time
// this is forth time
// this is forth time

"use client";
import React, { useState, useEffect, useRef } from "react";
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
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

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

      // Animation trigger
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setIsVisible(rect.top <= window.innerHeight / 2);
      }
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
    <div className="min-h-screen bg-gradient-to-b from-[#0c1120] to-[#0d1529] font-sans text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#0c1120]/90 backdrop-blur-xl shadow-xl z-50 border-b border-[#2a3b5c]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] p-2 rounded-xl shadow-lg">
                <Code className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-[#8b5cf6] to-[#ec4899] bg-clip-text text-transparent tracking-tighter">
                TECHNOVA
              </span>
            </div>

            <div className="hidden md:block">
              <div className="flex space-x-8">
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
                    className={`px-3 py-2 font-medium transition-all duration-300 ${
                      activeSection === item.toLowerCase()
                        ? "text-white"
                        : "text-[#94a3b8] hover:text-white"
                    } relative group`}
                  >
                    {item}
                    <span
                      className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#6366f1] to-[#ec4899] transition-all duration-500 ${
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
              className="md:hidden p-2 text-[#94a3b8]"
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
          <div className="md:hidden bg-[#0d1529] border-t border-[#2a3b5c]/30">
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
                      ? "bg-[#1e293b] text-white"
                      : "text-[#94a3b8] hover:bg-[#1e293b]"
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
        className="pt-20 min-h-screen flex items-center relative overflow-hidden"
        ref={heroRef}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-[#6366f1]/10 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-10 right-20 w-72 h-72 bg-[#ec4899]/10 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse-slow"></div>
          <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-[#8b5cf6]/20 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse-slow animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-32 h-32 bg-[#0ea5e9]/20 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse-slow animation-delay-3000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div
              className={`space-y-8 transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="inline-block bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] px-4 py-2 rounded-full text-sm font-medium mb-4 shadow-lg shadow-[#6366f1]/30">
                <span className="mr-2">🚀</span> Leading software solutions
                since 2018
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Building{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8b5cf6] to-[#ec4899]">
                  Digital
                </span>
                <span className="block mt-2 bg-gradient-to-r from-[#0ea5e9] to-[#6366f1] bg-clip-text text-transparent">
                  Excellence
                </span>
              </h1>

              <p className="text-lg text-[#cbd5e1] leading-relaxed max-w-2xl">
                We create cutting-edge digital solutions and comprehensive
                training programs to empower businesses and individuals in the
                tech world.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection("services")}
                  className="relative overflow-hidden group bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center shadow-lg shadow-[#6366f1]/30 hover:shadow-[#6366f1]/50"
                >
                  <span className="relative z-10">Explore Services</span>
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#8b5cf6] to-[#ec4899] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                <button
                  onClick={() => scrollToSection("courses")}
                  className="relative overflow-hidden group bg-transparent border-2 border-[#6366f1] text-[#6366f1] px-8 py-4 rounded-xl font-semibold transition-colors duration-300"
                >
                  <span className="relative z-10">View Courses</span>
                  <div className="absolute inset-0 bg-[#6366f1]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>

              <div className="flex items-center pt-4 gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-white/50 overflow-hidden shadow-md"
                    >
                      <div className="w-full h-full bg-gradient-to-br from-[#1e293b] to-[#0f172a] border-2 border-dashed rounded-xl" />
                    </div>
                  ))}
                </div>
                <p className="text-[#cbd5e1]">
                  <span className="font-semibold text-white">50+</span> Expert
                  Team Members
                </p>
              </div>
            </div>

            <div
              className={`relative transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="bg-gradient-to-br from-[#1e293b]/60 to-[#0f172a]/60 backdrop-blur-2xl rounded-3xl p-8 space-y-6 border border-[#2a3b5c]/50 shadow-2xl relative overflow-hidden">
                {/* Animated background */}
                <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#6366f1]/10 rounded-full z-0 animate-pulse-slow"></div>

                <div className="relative z-10">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <div className="absolute -inset-1 bg-[#10b981] rounded-full blur opacity-75 animate-pulse"></div>
                      <div className="relative bg-[#10b981] h-3 w-3 rounded-full"></div>
                    </div>
                    <span className="text-[#10b981] font-medium">
                      Live Projects Running
                    </span>
                  </div>

                  <div className="space-y-4 mt-6">
                    {[
                      { label: "Web Development", value: 92 },
                      { label: "Mobile Apps", value: 85 },
                      { label: "UI/UX Design", value: 96 },
                    ].map((item, index) => (
                      <div key={index}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-[#cbd5e1]">{item.label}</span>
                          <span className="text-white font-medium">
                            {item.value}%
                          </span>
                        </div>
                        <div className="bg-[#1e293b] h-3 rounded-full overflow-hidden">
                          <div
                            className="bg-gradient-to-r from-[#0ea5e9] to-[#8b5cf6] h-3 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${isVisible ? item.value : 0}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 flex justify-center">
                    <div className="bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] p-0.5 rounded-full">
                      <div className="bg-[#1e293b]/80 rounded-full px-6 py-2 text-center backdrop-blur-sm">
                        <span className="text-sm font-medium text-white">
                          250+ Projects Completed
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <ChevronDown className="h-8 w-8 text-[#8b5cf6]" />
        </div>
      </section>

      {/* Our Clients */}
      <section id="clients" className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted By Industry Leaders
            </h2>
            <p className="text-lg text-[#94a3b8] max-w-2xl mx-auto">
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
                className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-4 rounded-xl text-center hover:shadow-xl transition-all duration-300 group border border-[#2a3b5c]/50 hover:border-[#6366f1]/50 transform hover:-translate-y-1"
              >
                <div className="bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] w-14 h-14 rounded-xl mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                  <span className="text-xl font-bold text-white">
                    {client[0]}
                  </span>
                </div>
                <p className="font-semibold text-white">{client}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 grid md:grid-cols-3 gap-8">
            {[
              {
                value: "120+",
                label: "Happy Clients",
                icon: <Users className="h-8 w-8 text-[#8b5cf6]" />,
                color: "from-[#6366f1] to-[#8b5cf6]",
              },
              {
                value: "250+",
                label: "Projects Completed",
                icon: <Code className="h-8 w-8 text-[#ec4899]" />,
                color: "from-[#ec4899] to-[#f97316]",
              },
              {
                value: "6+",
                label: "Years Experience",
                icon: <Star className="h-8 w-8 text-[#0ea5e9]" />,
                color: "from-[#0ea5e9] to-[#6366f1]",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${stat.color} p-8 rounded-2xl text-center border border-white/10 shadow-2xl transform hover:-translate-y-2 transition-transform duration-300`}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <p className="text-white/90">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Community */}
      <section
        id="community"
        className="py-20 bg-gradient-to-br from-[#0c1120] to-[#0d1529] relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#ec4899]/10 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse-slow"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Join Our Thriving Community
            </h2>
            <p className="text-lg text-[#94a3b8] max-w-2xl mx-auto">
              Thousands of developers and learners growing together
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                value: "8,500+",
                label: "Active Members",
                icon: <Users className="h-10 w-10 text-white" />,
                color: "from-[#6366f1] to-[#8b5cf6]",
              },
              {
                value: "2,400+",
                label: "Course Graduates",
                icon: <BookOpen className="h-10 w-10 text-white" />,
                color: "from-[#ec4899] to-[#f97316]",
              },
              {
                value: "4.95/5",
                label: "Average Rating",
                icon: <Star className="h-10 w-10 text-white" />,
                color: "from-[#f59e0b] to-[#f97316]",
              },
              {
                value: "150+",
                label: "Expert Mentors",
                icon: <Code className="h-10 w-10 text-white" />,
                color: "from-[#0ea5e9] to-[#6366f1]",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${item.color} p-6 rounded-2xl text-center text-white shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2`}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{item.value}</h3>
                <p>{item.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-2xl p-8 shadow-2xl border border-[#2a3b5c]/50">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold text-white">
                What Our Community Says
              </h3>
              <p className="text-[#94a3b8] mt-2">
                Real stories from our members
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Alex Johnson",
                  role: "Full Stack Developer",
                  text: "This community transformed my career. The resources and mentorship are unparalleled in the industry.",
                },
                {
                  name: "Sarah Williams",
                  role: "UI/UX Designer",
                  text: "The practical approach to learning with real-world projects accelerated my design career beyond expectations.",
                },
                {
                  name: "Michael Chen",
                  role: "Mobile Developer",
                  text: "The courses provided me with cutting-edge skills that made me stand out in the competitive job market.",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-[#2a3b5c]/50 hover:border-[#6366f1]/50 transform hover:-translate-y-1"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] flex items-center justify-center text-white font-bold">
                      {testimonial.name[0]}
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold text-white">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-[#94a3b8]">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-[#cbd5e1]">"{testimonial.text}"</p>
                  <div className="flex mt-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="h-5 w-5 fill-[#f59e0b] text-[#f59e0b]"
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
      <section id="courses" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#0ea5e9]/10 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse-slow"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transform Your Career
            </h2>
            <p className="text-lg text-[#94a3b8] max-w-2xl mx-auto">
              Master the latest technologies with industry experts
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Full Stack Web Development",
                duration: "6 months",
                students: "850+",
                level: "Beginner to Advanced",
                tags: ["React", "Node.js", "MongoDB"],
              },
              {
                title: "Mobile App Development",
                duration: "4 months",
                students: "620+",
                level: "Intermediate",
                tags: ["Flutter", "React Native", "Firebase"],
              },
              {
                title: "UI/UX Design Mastery",
                duration: "3 months",
                students: "720+",
                level: "Beginner",
                tags: ["Figma", "Adobe XD", "Prototyping"],
              },
              {
                title: "Data Science & AI",
                duration: "8 months",
                students: "480+",
                level: "Advanced",
                tags: ["Python", "TensorFlow", "ML"],
              },
              {
                title: "DevOps & Cloud Computing",
                duration: "5 months",
                students: "390+",
                level: "Intermediate",
                tags: ["AWS", "Docker", "Kubernetes"],
              },
              {
                title: "Cybersecurity Fundamentals",
                duration: "4 months",
                students: "310+",
                level: "Beginner",
                tags: ["Ethical Hacking", "Network Security", "Encryption"],
              },
            ].map((course, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-2xl border border-[#2a3b5c]/50 overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 group transform hover:-translate-y-2"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <div className="bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] p-3 rounded-lg mb-4 group-hover:scale-110 transition-transform">
                      <BookOpen className="h-6 w-6 text-white" />
                    </div>
                    <span className="bg-[#6366f1]/20 text-[#c7d2fe] text-xs font-medium px-2.5 py-0.5 rounded-full">
                      {course.level}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {course.title}
                  </h3>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {course.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-[#2a3b5c] text-[#c7d2fe] text-xs px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between text-[#94a3b8] text-sm mb-6">
                    <span>⏱ {course.duration}</span>
                    <span>👥 {course.students} students</span>
                  </div>

                  <button className="relative overflow-hidden w-full bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white py-3 rounded-lg font-medium hover:from-[#8b5cf6] hover:to-[#ec4899] transition-all duration-300 shadow-md shadow-[#6366f1]/30">
                    <span className="relative z-10">Enroll Now</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#8b5cf6] to-[#ec4899] opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
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
        className="py-20 bg-gradient-to-br from-[#0c1120] to-[#0d1529] relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-[#8b5cf6]/10 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse-slow"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Digital Solutions
            </h2>
            <p className="text-lg text-[#94a3b8] max-w-2xl mx-auto">
              Comprehensive services to transform your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Code,
                title: "Custom Software Development",
                desc: "Tailored solutions built with cutting-edge technologies for your unique business needs",
              },
              {
                icon: Settings,
                title: "Web Application Development",
                desc: "Responsive and scalable web applications optimized for all platforms",
              },
              {
                icon: Users,
                title: "Mobile App Development",
                desc: "Native and cross-platform mobile applications with modern UX",
              },
              {
                icon: BookOpen,
                title: "E-commerce Solutions",
                desc: "Complete online store development with secure payment integration",
              },
              {
                icon: Star,
                title: "Digital Marketing",
                desc: "Data-driven SEO, social media marketing, and brand building",
              },
              {
                icon: Mail,
                title: "IT Consulting",
                desc: "Strategic technology consulting for sustainable business growth",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-8 rounded-2xl shadow-2xl border border-[#2a3b5c]/50 hover:border-[#6366f1]/50 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] rounded-2xl mb-6">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-[#cbd5e1] leading-relaxed mb-6">
                  {service.desc}
                </p>
                <button className="inline-flex items-center text-[#93c5fd] font-medium group hover:text-white transition-colors">
                  Learn More{" "}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-2xl p-8 border border-[#2a3b5c]/50 shadow-2xl">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Our Vision & Mission
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-[#93c5fd] mb-2">
                        Vision
                      </h4>
                      <p className="text-[#cbd5e1]">
                        To be the premier technology partner transforming
                        businesses through innovative digital solutions
                        worldwide.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-[#93c5fd] mb-2">
                        Mission
                      </h4>
                      <p className="text-[#cbd5e1]">
                        To deliver exceptional software solutions and provide
                        industry-leading training to develop tomorrow's tech
                        leaders.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-8 -left-8 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] p-6 rounded-2xl shadow-lg max-w-xs">
                <div className="text-4xl font-bold text-white mb-2">6+</div>
                <p className="text-white font-medium">Years of Excellence</p>
              </div>
            </div>

            <div>
              <div className="inline-block bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] px-4 py-2 rounded-full text-sm font-medium mb-6">
                About TECHNOVA
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Innovating Since 2018
              </h2>

              <p className="text-lg text-[#cbd5e1] leading-relaxed mb-6">
                We are a passionate team of developers, designers, and educators
                committed to delivering exceptional digital solutions and
                empowering the next generation of tech professionals.
              </p>

              <p className="text-lg text-[#cbd5e1] leading-relaxed mb-8">
                Founded in 2018, we've grown from a small startup to a trusted
                technology partner for businesses worldwide, bridging the gap
                between innovative technology and practical business solutions.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  "Expert team of 120+ professionals",
                  "250+ successful projects delivered",
                  "Global clients across 25+ countries",
                  "Industry-leading training programs",
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#6366f1]/20 flex items-center justify-center mr-3">
                      <div className="w-2 h-2 rounded-full bg-[#6366f1]"></div>
                    </div>
                    <span className="text-[#cbd5e1]">{item}</span>
                  </div>
                ))}
              </div>

              <button className="relative overflow-hidden bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white px-8 py-4 rounded-xl font-semibold hover:from-[#8b5cf6] hover:to-[#ec4899] transition-all duration-300 shadow-lg shadow-[#6366f1]/30">
                <span className="relative z-10">Our Journey</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#8b5cf6] to-[#ec4899] opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-[#0c1120] to-[#0d1529] relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0ea5e9]/10 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse-slow"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Let's Build Together
            </h2>
            <p className="text-lg text-[#94a3b8] max-w-2xl mx-auto">
              Ready to start your project? Get in touch with our team
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] flex items-center justify-center shadow-md">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Office Address
                  </h3>
                  <p className="text-[#cbd5e1]">
                    123 Innovation Drive, Tech District
                    <br />
                    San Francisco, CA 94103
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] flex items-center justify-center shadow-md">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Phone Number
                  </h3>
                  <p className="text-[#cbd5e1]">
                    +1 (415) 123-4567
                    <br />
                    +1 (800) 987-6543
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] flex items-center justify-center shadow-md">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Email Address
                  </h3>
                  <p className="text-[#cbd5e1]">
                    info@technova.com
                    <br />
                    support@technova.com
                  </p>
                </div>
              </div>

              <div className="pt-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Business Hours
                </h3>
                <div className="space-y-2 text-[#cbd5e1]">
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

            <div className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-8 rounded-2xl border border-[#2a3b5c]/50 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-8">
                Send us a message
              </h3>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#94a3b8] mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-[#1e293b] border border-[#2a3b5c] rounded-xl focus:ring-2 focus:ring-[#6366f1] focus:border-[#6366f1] outline-none transition-colors placeholder:text-[#475569]"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#94a3b8] mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-[#1e293b] border border-[#2a3b5c] rounded-xl focus:ring-2 focus:ring-[#6366f1] focus:border-[#6366f1] outline-none transition-colors placeholder:text-[#475569]"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#94a3b8] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#1e293b] border border-[#2a3b5c] rounded-xl focus:ring-2 focus:ring-[#6366f1] focus:border-[#6366f1] outline-none transition-colors placeholder:text-[#475569]"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#94a3b8] mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#1e293b] border border-[#2a3b5c] rounded-xl focus:ring-2 focus:ring-[#6366f1] focus:border-[#6366f1] outline-none transition-colors placeholder:text-[#475569]"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#94a3b8] mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#1e293b] border border-[#2a3b5c] rounded-xl focus:ring-2 focus:ring-[#6366f1] focus:border-[#6366f1] outline-none transition-colors resize-none placeholder:text-[#475569]"
                    placeholder="Tell us about your project or inquiry..."
                  ></textarea>
                </div>

                <button
                  onClick={handleSubmit}
                  className="relative overflow-hidden w-full bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white py-4 px-6 rounded-xl font-semibold hover:from-[#8b5cf6] hover:to-[#ec4899] transition-all duration-300 shadow-lg shadow-[#6366f1]/30"
                >
                  <span className="relative z-10">Send Message</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#8b5cf6] to-[#ec4899] opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0c1120] border-t border-[#2a3b5c]/30 pt-16 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] p-2 rounded-lg">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-[#8b5cf6] to-[#ec4899] bg-clip-text text-transparent tracking-tighter">
                  TECHNOVA
                </span>
              </div>
              <p className="text-[#94a3b8] leading-relaxed mb-6">
                Building digital excellence through innovative software
                solutions and comprehensive training programs.
              </p>
              <div className="flex space-x-4">
                {["twitter", "linkedin", "github", "dribbble"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 rounded-full bg-[#1e293b] flex items-center justify-center hover:bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] transition-colors shadow-md"
                  >
                    <div className="bg-[#94a3b8] border-2 border-dashed rounded-xl w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-6">
                Services
              </h3>
              <ul className="space-y-3 text-[#94a3b8]">
                {[
                  "Custom Development",
                  "Web Applications",
                  "Mobile Apps",
                  "E-commerce",
                  "Digital Marketing",
                  "IT Consulting",
                ].map((service, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="hover:text-[#93c5fd] transition-colors"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Courses</h3>
              <ul className="space-y-3 text-[#94a3b8]">
                {[
                  "Full Stack Development",
                  "Mobile Development",
                  "UI/UX Design",
                  "Data Science & AI",
                  "DevOps & Cloud",
                  "Cybersecurity",
                ].map((course, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="hover:text-[#93c5fd] transition-colors"
                    >
                      {course}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-6">
                Newsletter
              </h3>
              <p className="text-[#94a3b8] mb-4">
                Subscribe to our newsletter for the latest updates and offers.
              </p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-3 bg-[#1e293b] rounded-l-xl focus:outline-none focus:ring-1 focus:ring-[#6366f1] w-full placeholder:text-[#475569]"
                />
                <button className="bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] px-4 rounded-r-xl font-medium hover:opacity-90 transition-opacity shadow-md">
                  Join
                </button>
              </form>
            </div>
          </div>

          <div className="border-t border-[#2a3b5c]/30 mt-12 pt-8 text-center text-[#64748b]">
            <p>
              &copy; {new Date().getFullYear()} TECHNOVA. All rights reserved.
              Crafted with ❤️ for technology.
            </p>
          </div>
        </div>
      </footer>

      {/* Custom styles for animations */}
      <style jsx global>{`
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-3000 {
          animation-delay: 3s;
        }
      `}</style>
    </div>
  );
};

export default SoftwareHouseWebsite;
