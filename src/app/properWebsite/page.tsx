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

// this is GROK

// "use client";
// import React, { useState, useEffect, FormEvent } from "react";
// import { ChevronDown, Code, Users, BookOpen, Settings, Mail, Phone, MapPin, Star, ArrowRight, Menu, X, Instagram, Twitter, Linkedin } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// interface FormData {
//   firstName: string;
//   lastName: string;
//   email: string;
//   subject: string;
//   message: string;
// }

// const SoftwareHouseWebsite: React.FC = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
//   const [activeSection, setActiveSection] = useState<string>("home");
//   const [formData, setFormData] = useState<FormData>({
//     firstName: "",
//     lastName: "",
//     email: "",
//     subject: "",
//     message: "",
//   });
//   const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = ["home", "clients", "community", "courses", "services", "about", "contact"];
//       const current = sections.find((section) => {
//         const element = document.getElementById(section);
//         if (element) {
//           const rect = element.getBoundingClientRect();
//           return rect.top <= 100 && rect.bottom >= 100;
//         }
//         return false;
//       });
//       if (current) setActiveSection(current);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToSection = (sectionId: string) => {
//     document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
//     setIsMenuOpen(false);
//   };

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call
//     alert("Thank you for your message! We will get back to you soon.");
//     setFormData({
//       firstName: "",
//       lastName: "",
// email: "",
//       subject: "",
//       message: "",
//     });
//     setIsSubmitting(false);
//   };

//   const sectionVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
//   };

//   const navItems = ["Home", "Clients", "Community", "Courses", "Services", "About", "Contact"];

//   return (
//     <div className="min-h-screen bg-gray-50 font-poppins">
//       <style jsx global>{`
//         @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
//         :root {
//           --primary: #2A75BB;
//           --primary-dark: #1E4D87;
//           --secondary: #E6F0FA;
//           --text-dark: #1F2937;
//           --text-light: #6B7280;
//         }
//         .animate-gradient {
//           background: linear-gradient(45deg, var(--primary), var(--primary-dark));
//           background-size: 200% 200%;
//           animation: gradientShift 8s ease infinite;
//         }
//         @keyframes gradientShift {
//           0% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//           100% { background-position: 0% 50%; }
//         }
//         .glassmorphism {
//           background: rgba(255, 255, 255, 0.1);
//           backdrop-filter: blur(10px);
//           border: 1px solid rgba(255, 255, 255, 0.2);
//         }
//       `}</style>

//       {/* Navigation */}
//       <motion.nav
//         className="fixed top-0 w-full glassmorphism shadow-md z-50"
//         initial={{ y: -100 }}
//         animate={{ y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16">
//             <div className="flex items-center">
//               <div className="bg-primary p-2 rounded-full">
//                 <Code className="h-6 w-6 text-white" />
//               </div>
//               <span className="ml-3 text-xl font-bold text-text-dark">TechSoft</span>
//             </div>
//             <div className="hidden md:flex space-x-8">
//               {navItems.map((item) => (
//                 <button
//                   key={item}
//                   onClick={() => scrollToSection(item.toLowerCase())}
//                   className={`px-3 py-2 text-sm font-medium transition-all duration-300 ${
//                     activeSection === item.toLowerCase()
//                       ? "text-primary border-b-2 border-primary"
//                       : "text-text-dark hover:text-primary"
//                   }`}
//                   aria-current={activeSection === item.toLowerCase() ? "page" : undefined}
//                 >
//                   {item}
//                 </button>
//               ))}
//             </div>
//             <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2" aria-label="Toggle menu">
//               {isMenuOpen ? <X className="h-6 w-6 text-text-dark" /> : <Menu className="h-6 w-6 text-text-dark" />}
//             </button>
//           </div>
//         </div>
//         <AnimatePresence>
//           {isMenuOpen && (
//             <motion.div
//               initial={{ height: 0, opacity: 0 }}
//               animate={{ height: "auto", opacity: 1 }}
//               exit={{ height: 0, opacity: 0 }}
//               transition={{ duration: 0.3 }}
//               className="md:hidden glassmorphism"
//             >
//               <div className="px-2 pt-2 pb-3 space-y-1">
//                 {navItems.map((item) => (
//                   <button
//                     key={item}
//                     onClick={() => scrollToSection(item.toLowerCase())}
//                     className="block px-3 py-2 text-base font-medium text-text-dark hover:text-primary w-full text-left transition-colors"
//                     aria-label={`Navigate to ${item} section`}
//                   >
//                     {item}
//                   </button>
//                 ))}
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </motion.nav>

//       {/* Hero Section */}
//       <motion.section
//         id="home"
//         className="pt-16 min-h-screen flex items-center animate-gradient text-white relative overflow-hidden"
//         variants={sectionVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div className="space-y-8">
//               <motion.h1
//                 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 1, delay: 0.2 }}
//               >
//                 Building Digital
//                 <span className="block text-blue-200">Excellence</span>
//               </motion.h1>
//               <motion.p
//                 className="text-lg text-blue-100 leading-relaxed"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 1, delay: 0.4 }}
//               >
//                 We are a leading software house providing cutting-edge development services and comprehensive training courses to empower businesses and individuals in the digital world.
//               </motion.p>
//               <div className="flex flex-col sm:flex-row gap-4">
//                 <motion.button
//                   onClick={() => scrollToSection("services")}
//                   className="bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-dark transition-all duration-300 flex items-center justify-center group shadow-lg"
//                   whileHover={{ scale: 1.05, boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)" }}
//                 >
//                   Explore Services
//                   <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
//                 </motion.button>
//                 <motion.button
//                   onClick={() => scrollToSection("courses")}
//                   className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary transition-all duration-300"
//                   whileHover={{ scale: 1.05, boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)" }}
//                 >
//                   View Courses
//                 </motion.button>
//               </div>
//             </div>
//             <motion.div
//               className="glassmorphism rounded-2xl p-8 space-y-6 shadow-xl"
//               initial={{ opacity: 0, x: 50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, delay: 0.6 }}
//             >
//               <div className="flex items-center space-x-4">
//                 <div className="bg-green-400 h-3 w-3 rounded-full animate-pulse"></div>
//                 <span className="text-blue-100 font-medium">Live Projects Running</span>
//               </div>
//               <div className="space-y-4">
//                 {[75, 50, 85].map((width, index) => (
//                   <div key={index} className="bg-white/20 h-2 rounded-full overflow-hidden">
//                     <motion.div
//                       className="bg-white h-2 rounded-full"
//                       initial={{ width: 0 }}
//                       animate={{ width: `${width}%` }}
//                       transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: index * 0.2 }}
//                     />
//                   </div>
//                 ))}
//               </div>
//             </motion.div>
//           </div>
//         </div>
//         <motion.div
//           className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1, delay: 0.8 }}
//         >
//           <ChevronDown className="h-8 w-8 text-white/70" />
//         </motion.div>
//       </motion.section>

//       {/* Our Clients */}
//       <motion.section
//         id="clients"
//         className="py-20 bg-white"
//         variants={sectionVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-text-dark mb-4">Our Trusted Clients</h2>
//             <p className="text-xl text-text-light">Working with industry leaders worldwide</p>
//           </div>
//           <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
//             {["TechCorp", "InnovateLab", "DataFlow", "CloudSync", "DevPro", "SmartSoft"].map((client, index) => (
//               <motion.div
//                 key={index}
//                 className="glassmorphism p-6 rounded-lg text-center transition-all duration-300 group"
//                 whileHover={{ scale: 1.05, boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)" }}
//               >
//                 <div className="bg-primary w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform">
//                   <span className="text-white font-bold">{client[0]}</span>
//                 </div>
//                 <p className="font-semibold text-text-dark">{client}</p>
//               </motion.div>
//             ))}
//           </div>
//           <div className="mt-16 grid md:grid-cols-3 gap-8">
//             {[
//               { value: "50+", label: "Happy Clients" },
//               { value: "200+", label: "Projects Completed" },
//               { value: "5+", label: "Years Experience" },
//             ].map((stat, index) => (
//               <motion.div
//                 key={index}
//                 className="text-center"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.2 }}
//               >
//                 <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
//                 <p className="text-text-light">{stat.label}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </motion.section>

//       {/* Our Community */}
//       <motion.section
//         id="community"
//         className="py-20 bg-secondary"
//         variants={sectionVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-text-dark mb-4">Our Growing Community</h2>
//             <p className="text-xl text-text-light">Join thousands of developers and learners</p>
//           </div>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               { icon: Users, value: "5000+", label: "Active Members" },
//               { icon: BookOpen, value: "1200+", label: "Course Graduates" },
//               { icon: Star, value: "4.9/5", label: "Average Rating" },
//               { icon: Code, value: "100+", label: "Expert Mentors" },
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 className="glassmorphism p-8 rounded-xl text-center transition-all duration-300"
//                 whileHover={{ scale: 1.05, boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)" }}
//               >
//                 <item.icon className="h-12 w-12 text-primary mx-auto mb-4" />
//                 <h3 className="text-2xl font-bold text-text-dark mb-2">{item.value}</h3>
//                 <p className="text-text-light">{item.label}</p>
//               </motion.div>
//             ))}
//           </div>
//           <div className="mt-16 glassmorphism rounded-2xl p-8">
//             <h3 className="text-2xl font-bold text-text-dark mb-6 text-center">Community Testimonials</h3>
//             <div className="grid md:grid-cols-3 gap-8">
//               {[
//                 { name: "Ahmed Ali", role: "Full Stack Developer", text: "This community helped me land my dream job. The support and resources are incredible!" },
//                 { name: "Sara Khan", role: "UI/UX Designer", text: "Amazing learning environment with practical projects and expert guidance." },
//                 { name: "Muhammad Hassan", role: "Mobile Developer", text: "Best investment in my career. The courses are top-notch and mentors are very supportive." },
//               ].map((testimonial, index) => (
//                 <motion.div
//                   key={index}
//                   className="border-l-4 border-primary pl-6"
//                   initial={{ opacity: 0, x: -20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.5, delay: index * 0.2 }}
//                 >
//                   <p className="text-text-light italic mb-4">"{testimonial.text}"</p>
//                   <div>
//                     <p className="font-semibold text-text-dark">{testimonial.name}</p>
//                     <p className="text-sm text-text-light">{testimonial.role}</p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </motion.section>

//       {/* Courses Section */}
//       <motion.section
//         id="courses"
//         className="py-20 bg-white"
//         variants={sectionVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-text-dark mb-4">Our Courses</h2>
//             <p className="text-xl text-text-light">Master the latest technologies with industry experts</p>
//           </div>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               { title: "Full Stack Web Development", duration: "6 months", students: "500+", level: "Beginner to Advanced" },
//               { title: "Mobile App Development", duration: "4 months", students: "300+", level: "Intermediate" },
//               { title: "UI/UX Design Mastery", duration: "3 months", students: "400+", level: "Beginner" },
//               { title: "Data Science & AI", duration: "8 months", students: "250+", level: "Advanced" },
//               { title: "DevOps & Cloud Computing", duration: "5 months", students: "200+", level: "Intermediate" },
//               { title: "Cybersecurity Fundamentals", duration: "4 months", students: "150+", level: "Beginner" },
//             ].map((course, index) => (
//               <motion.div
//                 key={index}
//                 className="glassmorphism rounded-xl p-6 transition-all duration-300 group"
//                 whileHover={{ scale: 1.05, boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)" }}
//               >
//                 <div className="bg-primary p-3 rounded-full w-fit mb-4 group-hover:scale-110 transition-transform">
//                   <BookOpen className="h-6 w-6 text-white" />
//                 </div>
//                 <h3 className="text-xl font-bold text-text-dark mb-3">{course.title}</h3>
//                 <div className="space-y-2 text-text-light">
//                   <p>Duration: {course.duration}</p>
//                   <p>Students: {course.students}</p>
//                   <p>Level: {course.level}</p>
//                 </div>
//                 <button className="mt-4 bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-dark transition-colors w-full">
//                   Enroll Now
//                 </button>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </motion.section>

//       {/* Services Section */}
//       <motion.section
//         id="services"
//         className="py-20 bg-secondary"
//         variants={sectionVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-text-dark mb-4">Our Services</h2>
//             <p className="text-xl text-text-light">Comprehensive software solutions for your business</p>
//           </div>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               { icon: Code, title: "Custom Software Development", desc: "Tailored software solutions built with cutting-edge technologies" },
//               { icon: Settings, title: "Web Application Development", desc: "Responsive and scalable web applications for all platforms" },
//               { icon: Users, title: "Mobile App Development", desc: "Native and cross-platform mobile applications" },
//               { icon: BookOpen, title: "E-commerce Solutions", desc: "Complete online store development with payment integration" },
//               { icon: Star, title: "Digital Marketing", desc: "SEO, social media marketing, and digital brand building" },
//               { icon: Mail, title: "IT Consulting", desc: "Strategic technology consulting for business growth" },
//             ].map((service, index) => (
//               <motion.div
//                 key={index}
//                 className="glassmorphism p-8 rounded-xl transition-all duration-300 group"
//                 whileHover={{ scale: 1.05, boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)" }}
//               >
//                 <div className="bg-primary p-4 rounded-full w-fit mb-6 group-hover:scale-110 transition-transform">
//                   <service.icon className="h-8 w-8 text-white" />
//                 </div>
//                 <h3 className="text-xl font-bold text-text-dark mb-4">{service.title}</h3>
//                 <p className="text-text-light leading-relaxed">{service.desc}</p>
//                 <button className="mt-6 text-primary font-semibold hover:text-primary-dark transition-colors flex items-center">
//                   Learn More <ArrowRight className="ml-2 h-4 w-4" />
//                 </button>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </motion.section>

//       {/* About Us */}
//       <motion.section
//         id="about"
//         className="py-20 bg-white"
//         variants={sectionVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <h2 className="text-4xl font-bold text-text-dark mb-6">About TechSoft</h2>
//               <p className="text-lg text-text-light leading-relaxed mb-6">
//                 We are a passionate team of developers, designers, and educators committed to delivering exceptional software solutions and empowering the next generation of tech professionals.
//               </p>
//               <p className="text-lg text-text-light leading-relaxed mb-8">
//                 Founded in 2019, we have grown from a small startup to a trusted technology partner for businesses worldwide. Our mission is to bridge the gap between innovative technology and practical business solutions.
//               </p>
//               <div className="space-y-4">
//                 {[
//                   "Expert team of 50+ professionals",
//                   "5+ years of industry experience",
//                   "200+ successful projects delivered",
//                 ].map((item, index) => (
//                   <motion.div
//                     key={index}
//                     className="flex items-center space-x-3"
//                     initial={{ opacity: 0, x: -20 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.5, delay: index * 0.2 }}
//                   >
//                     <div className="bg-primary p-1 rounded-full">
//                       <div className="bg-white w-2 h-2 rounded-full"></div>
//                     </div>
//                     <span className="text-text-dark">{item}</span>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//             <motion.div
//               className="animate-gradient rounded-2xl p-8 text-white shadow-xl"
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//             >
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
//             </motion.div>
//           </div>
//         </div>
//       </motion.section>

//       {/* Contact Us */}
//       <motion.section
//         id="contact"
//         className="py-20 bg-secondary"
//         variants={sectionVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-text-dark mb-4">Get In Touch</h2>
//             <p className="text-xl text-text-light">Ready to start your project? Let's discuss your needs</p>
//           </div>
//           <div className="grid lg:grid-cols-2 gap-12">
//             <div className="space-y-8">
//               {[
//                 { icon: MapPin, title: "Office Address", text: "123 Tech Street, Innovation District<br />Karachi, Pakistan 75000" },
//                 { icon: Phone, title: "Phone Number", text: "+92 300 1234567<br />+92 21 12345678" },
//                 { icon: Mail, title: "Email Address", text: "info@techsoft.com<br />support@techsoft.com" },
//               ].map((item, index) => (
//                 <motion.div
//                   key={index}
//                   className="flex items-start space-x-4"
//                   initial={{ opacity: 0, x: -20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.5, delay: index * 0.2 }}
//                 >
//                   <div className="bg-primary p-3 rounded-full">
//                     <item.icon className="h-6 w-6 text-white" />
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-semibold text-text-dark mb-2">{item.title}</h3>
//                     <p className="text-text-light" dangerouslySetInnerHTML={{ __html: item.text }} />
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//             <motion.div
//               className="glassmorphism p-8 rounded-xl"
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//             >
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="grid md:grid-cols-2 gap-6">
//                   {["firstName", "lastName"].map((field) => (
//                     <div key={field} className="relative">
//                       <label className="block text-sm font-medium text-text-dark mb-2 capitalize">{field}</label>
//                       <input
//                         type="text"
//                         name={field}
//                         value={formData[field as keyof FormData]}
//                         onChange={handleInputChange}
//                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
//                         placeholder={`Your ${field}`}
//                         required
//                         aria-label={field}
//                       />
//                     </div>
//                   ))}
//                 </div>
//                 <div className="relative">
//                   <label className="block text-sm font-medium text-text-dark mb-2">Email</label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
//                     placeholder="your.email@example.com"
//                     required
//                     aria-label="Email"
//                   />
//                 </div>
//                 <div className="relative">
//                   <label className="block text-sm font-medium text-text-dark mb-2">Subject</label>
//                   <input
//                     type="text"
//                     name="subject"
//                     value={formData.subject}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
//                     placeholder="What's this about?"
//                     required
//                     aria-label="Subject"
//                   />
//                 </div>
//                 <div className="relative">
//                   <label className="block text-sm font-medium text-text-dark mb-2">Message</label>
//                   <textarea
//                     rows={5}
//                     name="message"
//                     value={formData.message}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors resize-none"
//                     placeholder="Tell us about your project or inquiry..."
//                     required
//                     aria-label="Message"
//                   />
//                 </div>
//                 <motion.button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className="w-full bg-primary text-white py-3 px-6 rounded-full font-semibold hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   {isSubmitting ? (
//                     <>
//                       <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
//                         <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
//                         <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
//                       </svg>
//                       Sending...
//                     </>
//                   ) : (
//                     "Send Message"
//                   )}
//                 </motion.button>
//               </form>
//             </motion.div>
//           </div>
//         </div>
//       </motion.section>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-white py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             <div>
//               <div className="flex items-center mb-6">
//                 <div className="bg-primary p-2 rounded-full">
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
//                 {["Custom Development", "Web Applications", "Mobile Apps", "E-commerce"].map((item) => (
//                   <li key={item}>
//                     <a href="#" className="hover:text-white transition-colors">
//                       {item}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <div>
//               <h3 className="text-lg font-semibold mb-6">Courses</h3>
//               <ul className="space-y-3 text-gray-400">
//                 {["Full Stack Development", "Mobile Development", "UI/UX Design", "Data Science"].map((item) => (
//                   <li key={item}>
//                     <a href="#" className="hover:text-white transition-colors">
//                       {item}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <div>
//               <h3 className="text-lg font-semibold mb-6">Connect With Us</h3>
//               <div className="space-y-3 text-gray-400">
//                 <p>📧 info@techsoft.com</p>
//                 <p>📞 +92 300 1234567</p>
//                 <p>📍 Karachi, Pakistan</p>
//                 <div className="flex space-x-4 mt-4">
//                   {[
//                     { icon: Instagram, label: "Instagram" },
//                     { icon: Twitter, label: "Twitter" },
//                     { icon: Linkedin, label: "LinkedIn" },
//                   ].map((social, index) => (
//                     <motion.a
//                       key={index}
//                       href="#"
//                       className="hover:text-white transition-colors"
//                       whileHover={{ scale: 1.2 }}
//                       aria-label={`Follow us on ${social.label}`}
//                     >
//                       <social.icon className="h-6 w-6" />
//                     </motion.a>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
//             <p>© 2024 TechSoft. All rights reserved. Built with passion for technology.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default SoftwareHouseWebsite;

//  this is CLOUDE.AI
//  this is CLOUDE.AI
//  this is CLOUDE.AI
//  this is CLOUDE.AI
//  this is CLOUDE.AI
//  this is CLOUDE.AI
//  this is CLOUDE.AI
//  this is CLOUDE.AI
//  this is CLOUDE.AI
//  this is CLOUDE.AI
//  this is CLOUDE.AI
//  this is CLOUDE.AI
//  this is CLOUDE.AI
//  this is CLOUDE.AI
//  this is CLOUDE.AI
//  this is CLOUDE.AI
//  this is CLOUDE.AI
//  this is CLOUDE.AI
//  this is CLOUDE.AI
//  this is CLOUDE.AI
//  this is CLOUDE.AI
//  this is CLOUDE.AI
//  this is CLOUDE.AI

// "use client";
// import React, { useState, useEffect, FormEvent } from "react";
// import { ChevronDown, Code, Users, BookOpen, Settings, Mail, Phone, MapPin, Star, ArrowRight, Menu, X, Instagram, Twitter, Linkedin, Zap, Award, Rocket, Globe, Shield, Database } from "lucide-react";

// interface FormData {
//   firstName: string;
//   lastName: string;
//   email: string;
//   subject: string;
//   message: string;
// }

// const SoftwareHouseWebsite: React.FC = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
//   const [activeSection, setActiveSection] = useState<string>("home");
//   const [formData, setFormData] = useState<FormData>({
//     firstName: "",
//     lastName: "",
//     email: "",
//     subject: "",
//     message: "",
//   });
//   const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [scrollY, setScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollY(window.scrollY);
//       const sections = ["home", "clients", "community", "courses", "services", "about", "contact"];
//       const current = sections.find((section) => {
//         const element = document.getElementById(section);
//         if (element) {
//           const rect = element.getBoundingClientRect();
//           return rect.top <= 100 && rect.bottom >= 100;
//         }
//         return false;
//       });
//       if (current) setActiveSection(current);
//     };

//     const handleMouseMove = (e: MouseEvent) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };

//     window.addEventListener("scroll", handleScroll);
//     window.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   const scrollToSection = (sectionId: string) => {
//     document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
//     setIsMenuOpen(false);
//   };

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     await new Promise((resolve) => setTimeout(resolve, 1000));
//     alert("Thank you for your message! We will get back to you soon.");
//     setFormData({
//       firstName: "",
//       lastName: "",
//       email: "",
//       subject: "",
//       message: "",
//     });
//     setIsSubmitting(false);
//   };

//   const navItems = ["Home", "Clients", "Community", "Courses", "Services", "About", "Contact"];

//   return (
//     <div className="min-h-screen bg-gray-50 font-sans overflow-x-hidden">
//       <style jsx global>{`
//         @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

//         :root {
//           --primary: #3B82F6;
//           --primary-dark: #1E3A8A;
//           --secondary: #EFF6FF;
//           --accent: #F59E0B;
//           --text-dark: #0F172A;
//           --text-light: #64748B;
//           --glass: rgba(255, 255, 255, 0.1);
//         }

//         * {
//           font-family: 'Inter', sans-serif;
//         }

//         .animate-gradient {
//           background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
//           background-size: 400% 400%;
//           animation: gradientShift 8s ease infinite;
//         }

//         .animate-gradient-2 {
//           background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
//           background-size: 400% 400%;
//           animation: gradientShift 6s ease infinite;
//         }

//         .animate-gradient-3 {
//           background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
//           background-size: 400% 400%;
//           animation: gradientShift 10s ease infinite;
//         }

//         @keyframes gradientShift {
//           0%, 100% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//         }

//         .glassmorphism {
//           background: rgba(255, 255, 255, 0.15);
//           backdrop-filter: blur(20px);
//           border: 1px solid rgba(255, 255, 255, 0.2);
//           box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
//         }

//         .glass-card {
//           background: rgba(255, 255, 255, 0.9);
//           backdrop-filter: blur(20px);
//           border: 1px solid rgba(255, 255, 255, 0.3);
//           box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
//         }

//         .floating {
//           animation: float 6s ease-in-out infinite;
//         }

//         @keyframes float {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-20px); }
//         }

//         .pulse-ring {
//           animation: pulse-ring 2s infinite;
//         }

//         @keyframes pulse-ring {
//           0% { transform: scale(0.8); opacity: 1; }
//           100% { transform: scale(2.4); opacity: 0; }
//         }

//         .text-shadow {
//           text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//         }

//         .hover-lift {
//           transition: all 0.3s ease;
//         }

//         .hover-lift:hover {
//           transform: translateY(-8px);
//           box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
//         }

//         .parallax-bg {
//           background-attachment: fixed;
//           background-size: cover;
//           background-position: center;
//         }

//         .glow-on-hover {
//           position: relative;
//           transition: all 0.3s ease;
//         }

//         .glow-on-hover:hover {
//           box-shadow: 0 0 30px rgba(59, 130, 246, 0.5);
//         }

//         .typewriter {
//           overflow: hidden;
//           border-right: 2px solid;
//           white-space: nowrap;
//           animation: typing 3s steps(40, end), blink-caret 0.75s step-end infinite;
//         }

//         @keyframes typing {
//           from { width: 0; }
//           to { width: 100%; }
//         }

//         @keyframes blink-caret {
//           from, to { border-color: transparent; }
//           50% { border-color: white; }
//         }

//         .particle {
//           position: absolute;
//           background: radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 70%);
//           border-radius: 50%;
//           animation: particle-float 20s linear infinite;
//         }

//         @keyframes particle-float {
//           0% { transform: translateY(100vh) translateX(0); opacity: 0; }
//           10% { opacity: 1; }
//           90% { opacity: 1; }
//           100% { transform: translateY(-100vh) translateX(100px); opacity: 0; }
//         }

//         .cursor-glow {
//           pointer-events: none;
//           position: fixed;
//           top: 0;
//           left: 0;
//           width: 100px;
//           height: 100px;
//           background: radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%);
//           border-radius: 50%;
//           z-index: 1000;
//           transition: all 0.1s ease;
//         }
//       `}</style>

//       {/* Cursor Glow Effect */}
//       <div
//         className="cursor-glow"
//         style={{
//           transform: `translate(${mousePosition.x - 50}px, ${mousePosition.y - 50}px)`
//         }}
//       />

//       {/* Floating Particles */}
//       {Array.from({ length: 5 }).map((_, i) => (
//         <div
//           key={i}
//           className="particle"
//           style={{
//             left: `${Math.random() * 100}%`,
//             animationDelay: `${Math.random() * 20}s`,
//             width: `${Math.random() * 4 + 2}px`,
//             height: `${Math.random() * 4 + 2}px`,
//           }}
//         />
//       ))}

//       {/* Navigation */}
//       <nav className="fixed top-0 w-full glassmorphism shadow-lg z-50 transition-all duration-300">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16">
//             <div className="flex items-center group">
//               <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-xl group-hover:scale-110 transition-transform duration-300">
//                 <Code className="h-6 w-6 text-white" />
//               </div>
//               <span className="ml-3 text-xl font-bold text-text-dark">TechSoft</span>
//             </div>
//             <div className="hidden md:flex space-x-8">
//               {navItems.map((item, index) => (
//                 <button
//                   key={item}
//                   onClick={() => scrollToSection(item.toLowerCase())}
//                   className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg relative overflow-hidden ${
//                     activeSection === item.toLowerCase()
//                       ? "text-blue-600 bg-blue-50"
//                       : "text-text-dark hover:text-blue-600 hover:bg-blue-50"
//                   }`}
//                   style={{ animationDelay: `${index * 0.1}s` }}
//                 >
//                   {item}
//                   {activeSection === item.toLowerCase() && (
//                     <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-10 rounded-lg" />
//                   )}
//                 </button>
//               ))}
//             </div>
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
//             >
//               {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>
//         {isMenuOpen && (
//           <div className="md:hidden glassmorphism border-t border-white/20">
//             <div className="px-4 pt-2 pb-3 space-y-1">
//               {navItems.map((item) => (
//                 <button
//                   key={item}
//                   onClick={() => scrollToSection(item.toLowerCase())}
//                   className="block w-full text-left px-3 py-2 text-base font-medium text-text-dark hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
//                 >
//                   {item}
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}
//       </nav>

//       {/* Hero Section */}
//       <section
//         id="home"
//         className="pt-16 min-h-screen flex items-center relative overflow-hidden"
//         style={{
//           background: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`,
//           transform: `translateY(${scrollY * 0.5}px)`
//         }}
//       >
//         <div className="absolute inset-0 opacity-20">
//           <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse" />
//           <div className="absolute top-40 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '2s' }} />
//           <div className="absolute -bottom-8 left-20 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '4s' }} />
//         </div>

//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div className="space-y-8">
//               <div className="space-y-4">
//                 <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight text-white text-shadow">
//                   Building
//                   <span className="block bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
//                     Digital
//                   </span>
//                   <span className="block typewriter">Excellence</span>
//                 </h1>
//                 <p className="text-xl text-blue-100 leading-relaxed max-w-lg">
//                   We craft cutting-edge software solutions and provide world-class training to transform businesses and careers in the digital age.
//                 </p>
//               </div>

//               <div className="flex flex-col sm:flex-row gap-4">
//                 <button
//                   onClick={() => scrollToSection("services")}
//                   className="group bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold hover:shadow-2xl transition-all duration-300 flex items-center justify-center glow-on-hover"
//                 >
//                   Explore Services
//                   <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
//                 </button>
//                 <button
//                   onClick={() => scrollToSection("courses")}
//                   className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold hover:bg-white hover:text-blue-600 transition-all duration-300 backdrop-blur-sm"
//                 >
//                   View Courses
//                 </button>
//               </div>

//               <div className="flex items-center space-x-8 pt-8">
//                 <div className="text-center">
//                   <div className="text-3xl font-bold text-white">50+</div>
//                   <div className="text-blue-200 text-sm">Happy Clients</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-3xl font-bold text-white">200+</div>
//                   <div className="text-blue-200 text-sm">Projects</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-3xl font-bold text-white">5+</div>
//                   <div className="text-blue-200 text-sm">Years</div>
//                 </div>
//               </div>
//             </div>

//             <div className="relative">
//               <div className="glass-card rounded-3xl p-8 space-y-6 floating">
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center space-x-3">
//                     <div className="relative">
//                       <div className="bg-green-400 h-4 w-4 rounded-full animate-pulse" />
//                       <div className="absolute inset-0 bg-green-400 h-4 w-4 rounded-full pulse-ring" />
//                     </div>
//                     <span className="text-gray-700 font-semibold">Live Projects</span>
//                   </div>
//                   <div className="flex space-x-2">
//                     <div className="w-3 h-3 bg-red-400 rounded-full" />
//                     <div className="w-3 h-3 bg-yellow-400 rounded-full" />
//                     <div className="w-3 h-3 bg-green-400 rounded-full" />
//                   </div>
//                 </div>

//                 <div className="space-y-4">
//                   {[
//                     { label: "Web Development", progress: 85, color: "bg-blue-500" },
//                     { label: "Mobile Apps", progress: 70, color: "bg-purple-500" },
//                     { label: "AI Solutions", progress: 90, color: "bg-pink-500" }
//                   ].map((item, index) => (
//                     <div key={index} className="space-y-2">
//                       <div className="flex justify-between text-sm font-medium text-gray-700">
//                         <span>{item.label}</span>
//                         <span>{item.progress}%</span>
//                       </div>
//                       <div className="bg-gray-200 h-2 rounded-full overflow-hidden">
//                         <div
//                           className={`${item.color} h-2 rounded-full transition-all duration-2000 ease-out`}
//                           style={{
//                             width: `${item.progress}%`,
//                             animationDelay: `${index * 0.5}s`
//                           }}
//                         />
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 <div className="flex justify-center pt-4">
//                   <div className="flex -space-x-2">
//                     {Array.from({ length: 5 }).map((_, i) => (
//                       <div
//                         key={i}
//                         className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full border-2 border-white hover:scale-110 transition-transform cursor-pointer"
//                         style={{ animationDelay: `${i * 0.1}s` }}
//                       />
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               {/* Floating Icons */}
//               <div className="absolute -top-10 -right-10 bg-white p-4 rounded-2xl shadow-lg floating" style={{ animationDelay: '1s' }}>
//                 <Rocket className="h-8 w-8 text-blue-500" />
//               </div>
//               <div className="absolute -bottom-10 -left-10 bg-white p-4 rounded-2xl shadow-lg floating" style={{ animationDelay: '2s' }}>
//                 <Zap className="h-8 w-8 text-yellow-500" />
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" onClick={() => scrollToSection("clients")}>
//           <ChevronDown className="h-8 w-8 text-white/70" />
//         </div>
//       </section>

//       {/* Clients Section */}
//       <section id="clients" className="py-20 bg-gradient-to-br from-white to-blue-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-5xl font-bold text-text-dark mb-4">Trusted by Industry Leaders</h2>
//             <p className="text-xl text-text-light">Join our growing family of successful partners</p>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
//             {["TechCorp", "InnovateLab", "DataFlow", "CloudSync", "DevPro", "SmartSoft"].map((client, index) => (
//               <div
//                 key={index}
//                 className="glass-card p-6 rounded-2xl text-center hover-lift group cursor-pointer"
//                 style={{ animationDelay: `${index * 0.1}s` }}
//               >
//                 <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
//                   <span className="text-white font-bold text-xl">{client[0]}</span>
//                 </div>
//                 <p className="font-semibold text-text-dark group-hover:text-blue-600 transition-colors">{client}</p>
//               </div>
//             ))}
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               { value: "50+", label: "Happy Clients", icon: Users },
//               { value: "200+", label: "Projects Completed", icon: Award },
//               { value: "5+", label: "Years Experience", icon: Star },
//             ].map((stat, index) => (
//               <div key={index} className="text-center group">
//                 <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
//                   <stat.icon className="h-8 w-8 text-white" />
//                 </div>
//                 <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
//                 <p className="text-text-light font-medium">{stat.label}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Community Section */}
//       <section id="community" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-5xl font-bold text-text-dark mb-4">Join Our Thriving Community</h2>
//             <p className="text-xl text-text-light">Connect, learn, and grow with like-minded professionals</p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
//             {[
//               { icon: Users, value: "5000+", label: "Active Members", color: "from-blue-500 to-purple-600" },
//               { icon: BookOpen, value: "1200+", label: "Course Graduates", color: "from-green-500 to-teal-600" },
//               { icon: Star, value: "4.9/5", label: "Average Rating", color: "from-yellow-500 to-orange-600" },
//               { icon: Code, value: "100+", label: "Expert Mentors", color: "from-pink-500 to-red-600" },
//             ].map((item, index) => (
//               <div
//                 key={index}
//                 className="glass-card p-8 rounded-2xl text-center hover-lift group"
//                 style={{ animationDelay: `${index * 0.1}s` }}
//               >
//                 <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform`}>
//                   <item.icon className="h-8 w-8 text-white" />
//                 </div>
//                 <h3 className="text-3xl font-bold text-text-dark mb-2">{item.value}</h3>
//                 <p className="text-text-light font-medium">{item.label}</p>
//               </div>
//             ))}
//           </div>

//           <div className="glass-card rounded-3xl p-8">
//             <h3 className="text-3xl font-bold text-text-dark mb-8 text-center">What Our Community Says</h3>
//             <div className="grid md:grid-cols-3 gap-8">
//               {[
//                 {
//                   name: "Ahmed Ali",
//                   role: "Full Stack Developer",
//                   text: "This community transformed my career. The mentorship and resources are unparalleled!",
//                   avatar: "AA"
//                 },
//                 {
//                   name: "Sara Khan",
//                   role: "UI/UX Designer",
//                   text: "Incredible learning environment with hands-on projects and industry experts.",
//                   avatar: "SK"
//                 },
//                 {
//                   name: "Muhammad Hassan",
//                   role: "Mobile Developer",
//                   text: "Best investment I've made. The courses are comprehensive and support is amazing.",
//                   avatar: "MH"
//                 },
//               ].map((testimonial, index) => (
//                 <div key={index} className="relative group">
//                   <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-1 w-0 group-hover:w-full transition-all duration-500 rounded-full mb-4" />
//                   <div className="space-y-4">
//                     <div className="flex items-center space-x-4">
//                       <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
//                         {testimonial.avatar}
//                       </div>
//                       <div>
//                         <p className="font-bold text-text-dark">{testimonial.name}</p>
//                         <p className="text-sm text-text-light">{testimonial.role}</p>
//                       </div>
//                     </div>
//                     <p className="text-text-light italic leading-relaxed">"{testimonial.text}"</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//    <section id="services" className="pt-16 py-20 bg-gradient-to-br from-gray-50 to-blue-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-5xl font-bold text-gray-900 mb-4">Our Premium Services</h2>
//             <p className="text-xl text-gray-600">Comprehensive solutions to accelerate your digital transformation</p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               {
//                 title: "Custom Web Development",
//                 description: "Build scalable, responsive websites with cutting-edge technologies",
//                 features: ["React/Next.js", "Node.js Backend", "Database Design", "API Integration"],
//                 icon: Code,
//                 color: "from-blue-500 to-purple-600"
//               },
//               {
//                 title: "Mobile App Development",
//                 description: "Native and cross-platform mobile solutions for iOS and Android",
//                 features: ["React Native", "Flutter", "Native iOS/Android", "App Store Publishing"],
//                 icon: Globe,
//                 color: "from-green-500 to-teal-600"
//               },
//               {
//                 title: "AI & Machine Learning",
//                 description: "Intelligent solutions powered by artificial intelligence",
//                 features: ["Computer Vision", "NLP Processing", "Predictive Analytics", "Chatbots"],
//                 icon: Database,
//                 color: "from-purple-500 to-pink-600"
//               },
//               {
//                 title: "Cloud Solutions",
//                 description: "Scalable cloud infrastructure and deployment services",
//                 features: ["AWS/Azure Setup", "DevOps Pipeline", "Container Orchestration", "Monitoring"],
//                 icon: Zap,
//                 color: "from-yellow-500 to-orange-500"
//               },
//               {
//                 title: "UI/UX Design",
//                 description: "Beautiful, intuitive designs that enhance user experience",
//                 features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
//                 icon: Star,
//                 color: "from-pink-500 to-red-500"
//               },
//               {
//                 title: "Cybersecurity",
//                 description: "Comprehensive security audits and protection services",
//                 features: ["Security Audits", "Penetration Testing", "Compliance", "Training"],
//                 icon: Shield,
//                 color: "from-red-500 to-orange-600"
//               }
//             ].map((service, index) => (
//               <div
//                 key={index}
//                 className="glass-card rounded-3xl p-8 hover-lift group cursor-pointer"
//                 style={{ animationDelay: `${index * 0.1}s` }}
//               >
//                 <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform`}>
//                   <service.icon className="h-8 w-8 text-white" />
//                 </div>

//                 <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
//                   {service.title}
//                 </h3>
//                 <p className="text-gray-600 mb-6 leading-relaxed">
//                   {service.description}
//                 </p>

//                 <div className="space-y-2 mb-6">
//                   {service.features.map((feature, featureIndex) => (
//                     <div key={featureIndex} className="flex items-center space-x-2">
//                       <div className="w-2 h-2 bg-blue-500 rounded-full" />
//                       <span className="text-sm text-gray-700">{feature}</span>
//                     </div>
//                   ))}
//                 </div>

//                 <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 group-hover:scale-105">
//                   Learn More
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section id="about" className="py-20 bg-gradient-to-br from-white to-purple-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             <div className="space-y-8">
//               <div>
//                 <h2 className="text-5xl font-bold text-gray-900 mb-6">About TechSoft</h2>
//                 <p className="text-xl text-gray-600 leading-relaxed mb-6">
//                   We're a passionate team of developers, designers, and innovators dedicated to transforming businesses through technology. With over 5 years of experience, we've helped countless companies achieve their digital goals.
//                 </p>
//                 <p className="text-lg text-gray-600 leading-relaxed">
//                   Our mission is to bridge the gap between complex technology and business success, delivering solutions that are not just functional, but transformational.
//                 </p>
//               </div>

//               <div className="grid grid-cols-2 gap-8">
//                 {[
//                   { number: "200+", label: "Projects Delivered" },
//                   { number: "50+", label: "Happy Clients" },
//                   { number: "5+", label: "Years Experience" },
//                   { number: "24/7", label: "Support Available" }
//                 ].map((stat, index) => (
//                   <div key={index} className="text-center">
//                     <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
//                     <p className="text-gray-600 font-medium">{stat.label}</p>
//                   </div>
//                 ))}
//               </div>

//               <div className="flex space-x-4">
//                 <button
//                   onClick={() => scrollToSection("contact")}
//                   className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold hover:shadow-lg transition-all duration-300 glow-on-hover"
//                 >
//                   Get Started
//                 </button>
//                 <button className="border-2 border-blue-500 text-blue-600 px-8 py-4 rounded-2xl font-bold hover:bg-blue-50 transition-all duration-300">
//                   Our Portfolio
//                 </button>
//               </div>
//             </div>

//             <div className="relative">
//               <div className="glass-card rounded-3xl p-8 floating">
//                 <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us?</h3>
//                 <div className="space-y-6">
//                   {[
//                     { icon: Award, title: "Expert Team", desc: "Certified professionals with proven track record" },
//                     { icon: Rocket, title: "Fast Delivery", desc: "Agile development with quick turnaround times" },
//                     { icon: Users, title: "24/7 Support", desc: "Round-the-clock assistance and maintenance" },
//                     { icon: Star, title: "Quality Assured", desc: "Rigorous testing and quality control processes" }
//                   ].map((item, index) => (
//                     <div key={index} className="flex items-start space-x-4">
//                       <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg">
//                         <item.icon className="h-5 w-5 text-white" />
//                       </div>
//                       <div>
//                         <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
//                         <p className="text-sm text-gray-600">{item.desc}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 to-purple-900">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-5xl font-bold text-white mb-4">Get In Touch</h2>
//             <p className="text-xl text-blue-200">Ready to start your next project? Let's talk!</p>
//           </div>

//           <div className="grid lg:grid-cols-2 gap-16">
//             <div className="space-y-8">
//               <div className="glass-card rounded-3xl p-8">
//                 <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
//                 <div className="space-y-6">
//                   {[
//                     { icon: Mail, title: "Email", info: "hello@techsoft.com", link: "mailto:hello@techsoft.com" },
//                     { icon: Phone, title: "Phone", info: "+92 300 1234567", link: "tel:+923001234567" },
//                     { icon: MapPin, title: "Address", info: "Faisalabad, Punjab, Pakistan", link: "#" }
//                   ].map((contact, index) => (
//                     <div key={index} className="flex items-start space-x-4">
//                       <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-lg">
//                         <contact.icon className="h-6 w-6 text-white" />
//                       </div>
//                       <div>
//                         <h4 className="font-semibold text-gray-900 mb-1">{contact.title}</h4>
//                         <a
//                           href={contact.link}
//                           className="text-gray-600 hover:text-blue-600 transition-colors"
//                         >
//                           {contact.info}
//                         </a>
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 <div className="mt-8 pt-8 border-t border-gray-200">
//                   <h4 className="font-semibold text-gray-900 mb-4">Follow Us</h4>
//                   <div className="flex space-x-4">
//                     {[
//                       { icon: Instagram, link: "#", color: "from-pink-500 to-purple-600" },
//                       { icon: Twitter, link: "#", color: "from-blue-400 to-blue-600" },
//                       { icon: Linkedin, link: "#", color: "from-blue-600 to-blue-800" }
//                     ].map((social, index) => (
//                       <a
//                         key={index}
//                         href={social.link}
//                         className={`p-3 bg-gradient-to-r ${social.color} rounded-lg hover:scale-110 transition-transform`}
//                       >
//                         <social.icon className="h-5 w-5 text-white" />
//                       </a>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="glass-card rounded-3xl p-8">
//               <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
//               <div className="space-y-6">
//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
//                     <input
//                       type="text"
//                       name="firstName"
//                       value={formData.firstName}
//                       onChange={handleInputChange}
//                       required
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
//                       placeholder="John"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
//                     <input
//                       type="text"
//                       name="lastName"
//                       value={formData.lastName}
//                       onChange={handleInputChange}
//                       required
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
//                       placeholder="Doe"
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
//                     required
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
//                     placeholder="john@example.com"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
//                   <input
//                     type="text"
//                     name="subject"
//                     value={formData.subject}
//                     onChange={handleInputChange}
//                     required
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
//                     placeholder="Project Inquiry"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
//                   <textarea
//                     name="message"
//                     value={formData.message}
//                     onChange={handleInputChange}
//                     required
//                     rows={5}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
//                     placeholder="Tell us about your project..."
//                   />
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-lg font-bold hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed glow-on-hover"
//                 >
//                   {isSubmitting ? "Sending..." : "Send Message"}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//  <footer className="bg-gray-900 text-white py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <div className="flex items-center justify-center mb-6">
//               <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-xl">
//                 <Code className="h-8 w-8 text-white" />
//               </div>
//               <span className="ml-3 text-2xl font-bold">TechSoft</span>
//             </div>
//             <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
//               Transforming businesses through innovative technology solutions. Your trusted partner in digital transformation.
//             </p>
//             <div className="border-t border-gray-800 pt-6">
//               <p className="text-gray-400 text-sm">
//                 © 2024 TechSoft. All rights reserved. | Built with passion in Faisalabad, Pakistan
//               </p>
//             </div>
//           </div>
//         </div>
//       </footer>

//       <footer className="bg-gray-900 text-white py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
//             <div>
//               <div className="flex items-center mb-6">
//                 <div className="p-2 rounded-lg" >
//                   <Code className="h-7 w-7 text-white" />
//                 </div>
//                 <span className="ml-3 text-2xl font-extrabold">TechSoft</span>
//               </div>
//               <p className="text-gray-400 leading-relaxed text-sm">
//                 Building digital excellence through innovative software solutions and comprehensive training programs for a brighter future.
//               </p>
//             </div>

//             <div>
//               <h3 className="text-xl font-bold mb-6">Services</h3>
//               <ul className="space-y-4 text-gray-400 text-base">
//                 <li><a href="#services" className="hover:text-white transition-colors duration-300">Custom Development</a></li>
//                 <li><a href="#services" className="hover:text-white transition-colors duration-300">Web Applications</a></li>
//                 <li><a href="#services" className="hover:text-white transition-colors duration-300">Mobile Apps</a></li>
//                 <li><a href="#services" className="hover:text-white transition-colors duration-300">E-commerce Solutions</a></li>
//                 <li><a href="#services" className="hover:text-white transition-colors duration-300">IT Consulting</a></li>
//               </ul>
//             </div>

//             <div>
//               <h3 className="text-xl font-bold mb-6">Courses</h3>
//               <ul className="space-y-4 text-gray-400 text-base">
//                 <li><a href="#courses" className="hover:text-white transition-colors duration-300">Full Stack Development</a></li>
//                 <li><a href="#courses" className="hover:text-white transition-colors duration-300">Mobile Development</a></li>
//                 <li><a href="#courses" className="hover:text-white transition-colors duration-300">UI/UX Design</a></li>
//                 <li><a href="#courses" className="hover:text-white transition-colors duration-300">Data Science & AI</a></li>
//                 <li><a href="#courses" className="hover:text-white transition-colors duration-300">DevOps & Cloud</a></li>
//               </ul>
//             </div>

//             <div>
//               <h3 className="text-xl font-bold mb-6">Connect With Us</h3>
//               <div className="space-y-4 text-gray-400 text-base">
//                 <p className="flex items-center">📧 <span className="ml-2">info@techsoft.com</span></p>
//                 <p className="flex items-center">📞 <span className="ml-2">+92 300 1234567</span></p>
//                 <p className="flex items-center">📍 <span className="ml-2">Karachi, Pakistan</span></p>
//                 <div className="flex space-x-4 mt-4">
//                   {/* Social Media Icons (placeholders) */}
//                   <a href="#" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
//                     <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.79c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V22C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
//                   </a>
//                   <a href="#" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
//                     <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.884c6.766 0 10.457-5.617 10.457-10.457 0-.159 0-.317-.01-.476A7.47 7.47 0 0022 7.027a7.28 7.28 0 01-2.083.57 3.664 3.664 0 001.62-1.996 7.306 7.306 0 01-2.316.885 3.655 3.655 0 00-6.227 3.344A10.355 10.355 0 013.23 4.296a3.655 3.655 0 001.134 4.887 3.633 3.633 0 01-1.658-.456v.045a3.658 3.658 0 002.934 3.585 3.64 3.64 0 01-.96.126 3.651 3.651 0 01-.65-.06 3.665 3.665 0 003.414 2.54A7.323 7.323 0 014 18.068a10.323 10.323 0 004.29 2.816z" /></svg>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-400 text-sm">
//             <p>&copy; 2024 TechSoft. All rights reserved. Built with passion for technology.</p>
//           </div>
//         </div>
//       </footer>

//       {/* Custom Tailwind CSS animations - Add this to your main CSS file (e.g., globals.css or tailwind.css) */}
//       <style jsx global>{`
//         @keyframes fadeInDown {
//           from {
//             opacity: 0;
//             transform: translateY(-20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes fadeInLeft {
//           from {
//             opacity: 0;
//             transform: translateX(-40px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }

//         @keyframes fadeInRight {
//           from {
//             opacity: 0;
//             transform: translateX(40px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }

//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes bounceSlow {
//           0%, 100% {
//             transform: translateY(0);
//           }
//           50% {
//             transform: translateY(-15px);
//           }
//         }

//         @keyframes pulseProgress {
//           0% {
//             transform: scaleX(0.75);
//             opacity: 0.8;
//           }
//           50% {
//             transform: scaleX(1);
//             opacity: 1;
//           }
//           100% {
//             transform: scaleX(0.75);
//             opacity: 0.8;
//           }
//         }

//         @keyframes pulseProgressSlow {
//           0% {
//             transform: scaleX(0.5);
//             opacity: 0.7;
//           }
//           50% {
//             transform: scaleX(0.9);
//             opacity: 1;
//           }
//           100% {
//             transform: scaleX(0.5);
//             opacity: 0.7;
//           }
//         }

//         .animate-fade-in-down {
//           animation: fadeInDown 0.6s ease-out forwards;
//         }

//         .animate-fade-in-left {
//           animation: fadeInLeft 0.8s ease-out forwards;
//           opacity: 0; /* Ensures element is hidden before animation */
//         }

//         .animate-fade-in-right {
//           animation: fadeInRight 0.8s ease-out forwards;
//           opacity: 0; /* Ensures element is hidden before animation */
//         }

//         .animate-fade-in-up {
//           animation: fadeInUp 0.8s ease-out forwards;
//           opacity: 0; /* Ensures element is hidden before animation */
//         }

//         .animate-bounce-slow {
//           animation: bounceSlow 3s infinite ease-in-out;
//         }

//         .animate-pulse-progress {
//           animation: pulseProgress 2s infinite ease-in-out;
//         }

//         .animate-pulse-progress-slow {
//           animation: pulseProgressSlow 3s infinite ease-in-out;
//         }

//       `}</style>
//     </div>
//   );
// };

// export default SoftwareHouseWebsite;

// this is Deepseek
// this is Deepseek
// this is Deepseek
// this is Deepseek

// "use client";
// import React, { useState, useEffect } from "react";
// import {
//   ChevronDown,
//   Code,
//   Users,
//   BookOpen,
//   Settings,
//   Mail,
//   Phone,
//   MapPin,
//   Star,
//   ArrowRight,
//   Menu,
//   X,
// } from "lucide-react";

// const SoftwareHouseWebsite = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState("home");
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = [
//         "home",
//         "clients",
//         "community",
//         "courses",
//         "services",
//         "about",
//         "contact",
//       ];
//       const current = sections.find((section) => {
//         const element = document.getElementById(section);
//         if (element) {
//           const rect = element.getBoundingClientRect();
//           return rect.top <= 100 && rect.bottom >= 100;
//         }
//         return false;
//       });
//       if (current) setActiveSection(current);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToSection = (sectionId) => {
//     document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
//     setIsMenuOpen(false);
//   };

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Thank you for your message! We will get back to you soon.");
//     setFormData({
//       firstName: "",
//       lastName: "",
//       email: "",
//       subject: "",
//       message: "",
//     });
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 font-sans">
//       {/* Navigation */}
//       <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-20">
//             <div className="flex items-center gap-3">
//               <div className="bg-indigo-600 p-2 rounded-lg">
//                 <Code className="h-6 w-6 text-white" />
//               </div>
//               <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
//                 TechSoft
//               </span>
//             </div>

//             <div className="hidden md:block">
//               <div className="flex space-x-6">
//                 {[
//                   "Home",
//                   "Clients",
//                   "Community",
//                   "Courses",
//                   "Services",
//                   "About",
//                   "Contact",
//                 ].map((item) => (
//                   <button
//                     key={item}
//                     onClick={() => scrollToSection(item.toLowerCase())}
//                     className={`px-3 py-2 font-medium transition-colors ${
//                       activeSection === item.toLowerCase()
//                         ? "text-indigo-600"
//                         : "text-gray-600 hover:text-indigo-600"
//                     } relative group`}
//                   >
//                     {item}
//                     <span
//                       className={`absolute -bottom-1 left-0 w-full h-0.5 bg-indigo-600 transition-all duration-300 ${
//                         activeSection === item.toLowerCase()
//                           ? "scale-x-100"
//                           : "scale-x-0 group-hover:scale-x-100"
//                       }`}
//                     ></span>
//                   </button>
//                 ))}
//               </div>
//             </div>

//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="md:hidden p-2 text-gray-600"
//             >
//               {isMenuOpen ? (
//                 <X className="h-6 w-6" />
//               ) : (
//                 <Menu className="h-6 w-6" />
//               )}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="md:hidden bg-white border-t shadow-inner">
//             <div className="px-2 pt-2 pb-4 space-y-1">
//               {[
//                 "Home",
//                 "Clients",
//                 "Community",
//                 "Courses",
//                 "Services",
//                 "About",
//                 "Contact",
//               ].map((item) => (
//                 <button
//                   key={item}
//                   onClick={() => scrollToSection(item.toLowerCase())}
//                   className={`block px-4 py-3 text-base font-medium w-full text-left rounded-lg transition-colors ${
//                     activeSection === item.toLowerCase()
//                       ? "bg-indigo-50 text-indigo-600"
//                       : "text-gray-700 hover:bg-gray-100"
//                   }`}
//                 >
//                   {item}
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}
//       </nav>

//       {/* Hero Section */}
//       <section
//         id="home"
//         className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-gray-900 to-gray-800 text-white"
//       >
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute top-20 left-20 w-64 h-64 bg-indigo-500 rounded-full mix-blend-soft-light filter blur-3xl"></div>
//           <div className="absolute bottom-10 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-soft-light filter blur-3xl"></div>
//         </div>

//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             <div className="space-y-8">
//               <div className="inline-block bg-indigo-500/10 px-4 py-1.5 rounded-full text-sm font-medium mb-4 border border-indigo-500/30">
//                 <span className="mr-2">🚀</span> Leading software solutions
//               </div>

//               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
//                 Building Digital
//                 <span className="block mt-2 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
//                   Excellence
//                 </span>
//               </h1>

//               <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
//                 We provide cutting-edge development services and comprehensive
//                 training programs to empower businesses and individuals in the
//                 digital world.
//               </p>

//               <div className="flex flex-col sm:flex-row gap-4">
//                 <button
//                   onClick={() => scrollToSection("services")}
//                   className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30"
//                 >
//                   Explore Services
//                   <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
//                 </button>
//                 <button
//                   onClick={() => scrollToSection("courses")}
//                   className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-300"
//                 >
//                   View Courses
//                 </button>
//               </div>

//               <div className="flex items-center pt-4 gap-4">
//                 <div className="flex -space-x-3">
//                   {[1, 2, 3, 4].map((i) => (
//                     <div
//                       key={i}
//                       className="w-10 h-10 rounded-full border-2 border-white overflow-hidden"
//                     >
//                       <div className="w-full h-full bg-gray-200 border-2 border-dashed rounded-xl" />
//                     </div>
//                   ))}
//                 </div>
//                 <p className="text-gray-300">
//                   <span className="font-semibold text-white">50+</span> Experts
//                   Team
//                 </p>
//               </div>
//             </div>

//             <div className="relative">
//               <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 space-y-6 border border-white/10 shadow-xl">
//                 <div className="flex items-center space-x-4">
//                   <div className="relative">
//                     <div className="absolute -inset-1 bg-green-500 rounded-full blur opacity-75 animate-pulse"></div>
//                     <div className="relative bg-green-500 h-3 w-3 rounded-full"></div>
//                   </div>
//                   <span className="text-green-300 font-medium">
//                     Live Projects Running
//                   </span>
//                 </div>

//                 <div className="space-y-4">
//                   {[
//                     { label: "Web Development", value: 85 },
//                     { label: "Mobile Apps", value: 70 },
//                     { label: "UI/UX Design", value: 90 },
//                   ].map((item, index) => (
//                     <div key={index}>
//                       <div className="flex justify-between text-sm mb-1">
//                         <span className="text-gray-300">{item.label}</span>
//                         <span className="text-white font-medium">
//                           {item.value}%
//                         </span>
//                       </div>
//                       <div className="bg-gray-700 h-2 rounded-full">
//                         <div
//                           className="bg-gradient-to-r from-green-400 to-cyan-400 h-2 rounded-full"
//                           style={{ width: `${item.value}%` }}
//                         ></div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 <div className="pt-4 flex justify-center">
//                   <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-0.5 rounded-full">
//                     <div className="bg-gray-900 rounded-full px-6 py-2 text-center">
//                       <span className="text-sm font-medium bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
//                         200+ Projects Completed
//                       </span>
//                     </div>
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
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//               Trusted By Industry Leaders
//             </h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               We partner with innovative companies worldwide to deliver
//               exceptional digital solutions
//             </p>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center">
//             {[
//               "TechCorp",
//               "InnovateLab",
//               "DataFlow",
//               "CloudSync",
//               "DevPro",
//               "SmartSoft",
//             ].map((client, index) => (
//               <div
//                 key={index}
//                 className="bg-gray-50 p-4 rounded-xl text-center hover:shadow-md transition-all duration-300 group border border-gray-100"
//               >
//                 <div className="bg-gradient-to-br from-indigo-100 to-purple-100 w-14 h-14 rounded-xl mx-auto mb-3 flex items-center justify-center group-hover:scale-105 transition-transform">
//                   <span className="text-xl font-bold text-indigo-600">
//                     {client[0]}
//                   </span>
//                 </div>
//                 <p className="font-semibold text-gray-800">{client}</p>
//               </div>
//             ))}
//           </div>

//           <div className="mt-20 grid md:grid-cols-3 gap-8">
//             {[
//               {
//                 value: "50+",
//                 label: "Happy Clients",
//                 icon: <Users className="h-8 w-8 text-indigo-600" />,
//               },
//               {
//                 value: "200+",
//                 label: "Projects Completed",
//                 icon: <Code className="h-8 w-8 text-indigo-600" />,
//               },
//               {
//                 value: "5+",
//                 label: "Years Experience",
//                 icon: <Star className="h-8 w-8 text-indigo-600" />,
//               },
//             ].map((stat, index) => (
//               <div
//                 key={index}
//                 className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl text-center border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
//               >
//                 <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-50 rounded-full mb-4">
//                   {stat.icon}
//                 </div>
//                 <div className="text-4xl font-bold text-gray-900 mb-2">
//                   {stat.value}
//                 </div>
//                 <p className="text-gray-600">{stat.label}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Our Community */}
//       <section
//         id="community"
//         className="py-20 bg-gradient-to-br from-gray-50 to-white"
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//               Join Our Thriving Community
//             </h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               Thousands of developers and learners growing together
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {[
//               {
//                 value: "5000+",
//                 label: "Active Members",
//                 icon: <Users className="h-10 w-10 text-white" />,
//                 color: "from-indigo-500 to-indigo-600",
//               },
//               {
//                 value: "1200+",
//                 label: "Course Graduates",
//                 icon: <BookOpen className="h-10 w-10 text-white" />,
//                 color: "from-purple-500 to-purple-600",
//               },
//               {
//                 value: "4.9/5",
//                 label: "Average Rating",
//                 icon: <Star className="h-10 w-10 text-white" />,
//                 color: "from-amber-500 to-amber-600",
//               },
//               {
//                 value: "100+",
//                 label: "Expert Mentors",
//                 icon: <Code className="h-10 w-10 text-white" />,
//                 color: "from-cyan-500 to-cyan-600",
//               },
//             ].map((item, index) => (
//               <div
//                 key={index}
//                 className={`bg-gradient-to-br ${item.color} p-6 rounded-2xl text-center text-white shadow-lg hover:shadow-xl transition-shadow duration-300`}
//               >
//                 <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
//                   {item.icon}
//                 </div>
//                 <h3 className="text-2xl font-bold mb-2">{item.value}</h3>
//                 <p>{item.label}</p>
//               </div>
//             ))}
//           </div>

//           <div className="mt-20 bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
//             <div className="text-center mb-10">
//               <h3 className="text-2xl font-bold text-gray-900">
//                 What Our Community Says
//               </h3>
//               <p className="text-gray-600 mt-2">
//                 Real stories from our members
//               </p>
//             </div>

//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {[
//                 {
//                   name: "Ahmed Ali",
//                   role: "Full Stack Developer",
//                   text: "This community helped me land my dream job. The support and resources are incredible!",
//                 },
//                 {
//                   name: "Sara Khan",
//                   role: "UI/UX Designer",
//                   text: "Amazing learning environment with practical projects and expert guidance.",
//                 },
//                 {
//                   name: "Muhammad Hassan",
//                   role: "Mobile Developer",
//                   text: "Best investment in my career. The courses are top-notch and mentors are very supportive.",
//                 },
//               ].map((testimonial, index) => (
//                 <div
//                   key={index}
//                   className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow duration-300"
//                 >
//                   <div className="flex items-center mb-4">
//                     <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white font-bold">
//                       {testimonial.name[0]}
//                     </div>
//                     <div className="ml-4">
//                       <p className="font-semibold text-gray-800">
//                         {testimonial.name}
//                       </p>
//                       <p className="text-sm text-gray-500">
//                         {testimonial.role}
//                       </p>
//                     </div>
//                   </div>
//                   <p className="text-gray-600">"{testimonial.text}"</p>
//                   <div className="flex mt-4">
//                     {[1, 2, 3, 4, 5].map((star) => (
//                       <Star
//                         key={star}
//                         className="h-5 w-5 fill-yellow-400 text-yellow-400"
//                       />
//                     ))}
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
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//               Transform Your Career
//             </h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               Master the latest technologies with industry experts
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               {
//                 title: "Full Stack Web Development",
//                 duration: "6 months",
//                 students: "500+",
//                 level: "Beginner to Advanced",
//                 tags: ["React", "Node.js", "MongoDB"],
//               },
//               {
//                 title: "Mobile App Development",
//                 duration: "4 months",
//                 students: "300+",
//                 level: "Intermediate",
//                 tags: ["Flutter", "React Native", "Firebase"],
//               },
//               {
//                 title: "UI/UX Design Mastery",
//                 duration: "3 months",
//                 students: "400+",
//                 level: "Beginner",
//                 tags: ["Figma", "Adobe XD", "Prototyping"],
//               },
//               {
//                 title: "Data Science & AI",
//                 duration: "8 months",
//                 students: "250+",
//                 level: "Advanced",
//                 tags: ["Python", "TensorFlow", "ML"],
//               },
//               {
//                 title: "DevOps & Cloud Computing",
//                 duration: "5 months",
//                 students: "200+",
//                 level: "Intermediate",
//                 tags: ["AWS", "Docker", "Kubernetes"],
//               },
//               {
//                 title: "Cybersecurity Fundamentals",
//                 duration: "4 months",
//                 students: "150+",
//                 level: "Beginner",
//                 tags: ["Ethical Hacking", "Network Security", "Encryption"],
//               },
//             ].map((course, index) => (
//               <div
//                 key={index}
//                 className="bg-gradient-to-b from-white to-gray-50 rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group"
//               >
//                 <div className="p-6">
//                   <div className="flex justify-between items-start">
//                     <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-3 rounded-lg mb-4 group-hover:scale-105 transition-transform">
//                       <BookOpen className="h-6 w-6 text-white" />
//                     </div>
//                     <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
//                       {course.level}
//                     </span>
//                   </div>

//                   <h3 className="text-xl font-bold text-gray-900 mb-3">
//                     {course.title}
//                   </h3>

//                   <div className="flex flex-wrap gap-2 mb-4">
//                     {course.tags.map((tag, tagIndex) => (
//                       <span
//                         key={tagIndex}
//                         className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
//                       >
//                         {tag}
//                       </span>
//                     ))}
//                   </div>

//                   <div className="flex justify-between text-gray-600 text-sm mb-6">
//                     <span>⏱ {course.duration}</span>
//                     <span>👥 {course.students} students</span>
//                   </div>

//                   <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-lg font-medium hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-md shadow-indigo-500/20 hover:shadow-indigo-500/30">
//                     Enroll Now
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section
//         id="services"
//         className="py-20 bg-gradient-to-br from-gray-50 to-white"
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//               Our Digital Solutions
//             </h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               Comprehensive services to transform your business
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: Code,
//                 title: "Custom Software Development",
//                 desc: "Tailored software solutions built with cutting-edge technologies",
//               },
//               {
//                 icon: Settings,
//                 title: "Web Application Development",
//                 desc: "Responsive and scalable web applications for all platforms",
//               },
//               {
//                 icon: Users,
//                 title: "Mobile App Development",
//                 desc: "Native and cross-platform mobile applications",
//               },
//               {
//                 icon: BookOpen,
//                 title: "E-commerce Solutions",
//                 desc: "Complete online store development with payment integration",
//               },
//               {
//                 icon: Star,
//                 title: "Digital Marketing",
//                 desc: "SEO, social media marketing, and digital brand building",
//               },
//               {
//                 icon: Mail,
//                 title: "IT Consulting",
//                 desc: "Strategic technology consulting for business growth",
//               },
//             ].map((service, index) => (
//               <div
//                 key={index}
//                 className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 group"
//               >
//                 <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-2xl mb-6 group-hover:bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:text-white transition-all duration-300">
//                   <service.icon className="h-8 w-8 text-indigo-600 group-hover:text-white transition-colors" />
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-4">
//                   {service.title}
//                 </h3>
//                 <p className="text-gray-600 leading-relaxed mb-6">
//                   {service.desc}
//                 </p>
//                 <button className="inline-flex items-center text-indigo-600 font-medium group-hover:text-purple-600 transition-colors">
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
//             <div className="relative">
//               <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96 lg:h-[500px]" />
//               <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl w-3/4 h-72 -z-10"></div>

//               <div className="absolute -top-8 -left-8 bg-white p-6 rounded-2xl shadow-lg border border-gray-100 max-w-xs">
//                 <div className="text-4xl font-bold text-indigo-600 mb-2">
//                   5+
//                 </div>
//                 <p className="text-gray-800 font-medium">Years of Excellence</p>
//               </div>
//             </div>

//             <div>
//               <div className="inline-block bg-indigo-100 text-indigo-800 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
//                 About TechSoft
//               </div>

//               <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
//                 Innovating Since 2019
//               </h2>

//               <p className="text-lg text-gray-600 leading-relaxed mb-6">
//                 We are a passionate team of developers, designers, and educators
//                 committed to delivering exceptional software solutions and
//                 empowering the next generation of tech professionals.
//               </p>

//               <p className="text-lg text-gray-600 leading-relaxed mb-8">
//                 Founded in 2019, we've grown from a small startup to a trusted
//                 technology partner for businesses worldwide, bridging the gap
//                 between innovative technology and practical business solutions.
//               </p>

//               <div className="space-y-4 mb-10">
//                 {[
//                   "Expert team of 50+ professionals",
//                   "200+ successful projects delivered",
//                   "Global clients across 15+ countries",
//                   "Industry-leading training programs",
//                 ].map((item, index) => (
//                   <div key={index} className="flex items-center">
//                     <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
//                       <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
//                     </div>
//                     <span className="text-gray-700">{item}</span>
//                   </div>
//                 ))}
//               </div>

//               <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-indigo-500/20">
//                 Our Vision & Mission
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contact Us */}
//       <section
//         id="contact"
//         className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white"
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">
//               Let's Build Together
//             </h2>
//             <p className="text-lg text-gray-300 max-w-2xl mx-auto">
//               Ready to start your project? Get in touch with our team
//             </p>
//           </div>

//           <div className="grid lg:grid-cols-2 gap-12">
//             <div className="space-y-8">
//               <div className="flex items-start space-x-6">
//                 <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
//                   <MapPin className="h-6 w-6 text-white" />
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-semibold mb-2">Office Address</h3>
//                   <p className="text-gray-300">
//                     123 Tech Street, Innovation District
//                     <br />
//                     Karachi, Pakistan 75000
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-start space-x-6">
//                 <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
//                   <Phone className="h-6 w-6 text-white" />
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-semibold mb-2">Phone Number</h3>
//                   <p className="text-gray-300">
//                     +92 300 1234567
//                     <br />
//                     +92 21 12345678
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-start space-x-6">
//                 <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
//                   <Mail className="h-6 w-6 text-white" />
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-semibold mb-2">Email Address</h3>
//                   <p className="text-gray-300">
//                     info@techsoft.com
//                     <br />
//                     support@techsoft.com
//                   </p>
//                 </div>
//               </div>

//               <div className="pt-6">
//                 <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
//                 <div className="space-y-2 text-gray-300">
//                   <p className="flex justify-between">
//                     <span>Monday - Friday</span> <span>9:00 AM - 6:00 PM</span>
//                   </p>
//                   <p className="flex justify-between">
//                     <span>Saturday</span> <span>10:00 AM - 4:00 PM</span>
//                   </p>
//                   <p className="flex justify-between">
//                     <span>Sunday</span> <span>Closed</span>
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700">
//               <h3 className="text-2xl font-bold mb-8">Send us a message</h3>

//               <form className="space-y-6">
//                 <div className="grid md:grid-cols-2 gap-6">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-300 mb-2">
//                       First Name
//                     </label>
//                     <input
//                       type="text"
//                       name="firstName"
//                       value={formData.firstName}
//                       onChange={handleInputChange}
//                       className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors placeholder:text-gray-500"
//                       placeholder="Your first name"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-300 mb-2">
//                       Last Name
//                     </label>
//                     <input
//                       type="text"
//                       name="lastName"
//                       value={formData.lastName}
//                       onChange={handleInputChange}
//                       className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors placeholder:text-gray-500"
//                       placeholder="Your last name"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-300 mb-2">
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors placeholder:text-gray-500"
//                     placeholder="your.email@example.com"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-300 mb-2">
//                     Subject
//                   </label>
//                   <input
//                     type="text"
//                     name="subject"
//                     value={formData.subject}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors placeholder:text-gray-500"
//                     placeholder="What's this about?"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-300 mb-2">
//                     Message
//                   </label>
//                   <textarea
//                     rows={5}
//                     name="message"
//                     value={formData.message}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors resize-none placeholder:text-gray-500"
//                     placeholder="Tell us about your project or inquiry..."
//                   ></textarea>
//                 </div>

//                 <button
//                   onClick={handleSubmit}
//                   className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-indigo-500/20"
//                 >
//                   Send Message
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>

//        {/* Footer */}
//       <footer className="bg-gray-900 text-white pt-16 pb-10">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
//             <div>
//               <div className="flex items-center mb-6">
//                 <div className="bg-indigo-600 p-2 rounded-lg">
//                   <Code className="h-6 w-6 text-white" />
//                 </div>
//                 <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">TechSoft</span>
//               </div>
//               <p className="text-gray-400 leading-relaxed mb-6">
//                 Building digital excellence through innovative software solutions and comprehensive training programs.
//               </p>
//               <div className="flex space-x-4">
//                 {['twitter', 'linkedin', 'github', 'dribbble'].map((social) => (
//                   <a
//                     key={social}
//                     href="#"
//                     className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-indigo-600 transition-colors"
//                   >
//                     <div className="bg-gray-400 border-2 border-dashed rounded-xl w-6 h-6" />
//                   </a>
//                 ))}
//               </div>
//             </div>

//             <div>
//               <h3 className="text-lg font-semibold mb-6">Services</h3>
//               <ul className="space-y-3 text-gray-400">
//                 {[
//                   "Custom Development",
//                   "Web Applications",
//                   "Mobile Apps",
//                   "E-commerce",
//                   "Digital Marketing",
//                   "IT Consulting"
//                 ].map((service, index) => (
//                   <li key={index}>
//                     <a href="#" className="hover:text-indigo-400 transition-colors">{service}</a>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <div>
//               <h3 className="text-lg font-semibold mb-6">Courses</h3>
//               <ul className="space-y-3 text-gray-400">
//                 {[
//                   "Full Stack Development",
//                   "Mobile Development",
//                   "UI/UX Design",
//                   "Data Science & AI",
//                   "DevOps & Cloud",
//                   "Cybersecurity"
//                 ].map((course, index) => (
//                   <li key={index}>
//                     <a href="#" className="hover:text-indigo-400 transition-colors">{course}</a>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <div>
//               <h3 className="text-lg font-semibold mb-6">Newsletter</h3>
//               <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates and offers.</p>
//               <form className="flex">
//                 <input
//                   type="email"
//                   placeholder="Your email"
//                   className="px-4 py-3 bg-gray-800 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-indigo-500 w-full"
//                 />
//                 <button className="bg-gradient-to-r from-indigo-600 to-purple-600 px-4 rounded-r-lg font-medium hover:from-indigo-700 hover:to-purple-700 transition-all">
//                   Join
//                 </button>
//               </form>
//             </div>
//           </div>

//           <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
//             <p>&copy; {new Date().getFullYear()} TechSoft. All rights reserved. Crafted with passion for technology.</p>
//           </div>
//         </div>
//       </footer>

//       {/* Footer */}
//       {/* <footer className="bg-gray-900 text-white pt-16 pb-10">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
//             <div>
//               <div className="flex items-center mb-6">
//                 <div className="bg-indigo-600 p-2 rounded-lg">
//                   <Code className="h-6 w-6 text-white" />
//                 </div>
//                 <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">TechSoft</span>
//               </div>
//               <p className="text-gray-400 leading-relaxed mb-6">
//                 Building digital excellence through innovative software solutions and comprehensive training programs.
//               </p>
//               <div className="flex space-x-4">
//                 {['twitter', 'linkedin', 'github', 'dribbble'].map((social) => (
//                   <a
//                     key={social}
//                     href="#"
//                     className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-indigo-600 transition-colors"
//                   >
//                     <div className="bg-gray-400 border-2 border-dashed rounded-xl w-6 h-6" />
//                   </a>
//                 ))}
//               </div>
//             </div>

//             <div>
//               <h3 className="text-lg font-semibold mb-6">Services</h3>
//               <ul className="space-y-3 text-gray-400">
//                 {[
//                   "Custom Development",
//                   "Web
//  */}
//     </div>
//   );
// };

// export default SoftwareHouseWebsite;

// this is second time
// this is second time
// this is second time
// this is second time
// this is second time
// this is second time
// this is second time
// this is second time
// this is second time
// this is second time
// this is second time
// this is second time

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
//     <div className="min-h-screen bg-gray-50 font-sans">
//       {/* Navigation */}
//       <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-20">
//             <div className="flex items-center gap-3">
//               <div className="bg-[#2A75BB] p-2 rounded-lg">
//                 <Code className="h-6 w-6 text-white" />
//               </div>
//               <span className="text-2xl font-bold text-[#2A75BB]">TechSoft</span>
//             </div>

//             <div className="hidden md:block">
//               <div className="flex space-x-6">
//                 {['Home', 'Clients', 'Community', 'Courses', 'Services', 'About', 'Contact'].map((item) => (
//                   <button
//                     key={item}
//                     onClick={() => scrollToSection(item.toLowerCase())}
//                     className={`px-3 py-2 font-medium transition-colors ${
//                       activeSection === item.toLowerCase()
//                         ? 'text-[#2A75BB]'
//                         : 'text-gray-600 hover:text-[#2A75BB]'
//                     } relative group`}
//                   >
//                     {item}
//                     <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-[#2A75BB] transition-all duration-300 ${activeSection === item.toLowerCase() ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
//                   </button>
//                 ))}
//               </div>
//             </div>

//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="md:hidden p-2 text-gray-600"
//             >
//               {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="md:hidden bg-white border-t shadow-inner">
//             <div className="px-2 pt-2 pb-4 space-y-1">
//               {['Home', 'Clients', 'Community', 'Courses', 'Services', 'About', 'Contact'].map((item) => (
//                 <button
//                   key={item}
//                   onClick={() => scrollToSection(item.toLowerCase())}
//                   className={`block px-4 py-3 text-base font-medium w-full text-left rounded-lg transition-colors ${
//                     activeSection === item.toLowerCase()
//                       ? 'bg-blue-50 text-[#2A75BB]'
//                       : 'text-gray-700 hover:bg-gray-100'
//                   }`}
//                 >
//                   {item}
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}
//       </nav>

//       {/* Hero Section */}
//       <section id="home" className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-[#2A75BB] to-[#1a5d9e] text-white">
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute top-20 left-20 w-64 h-64 bg-blue-300 rounded-full mix-blend-soft-light filter blur-3xl"></div>
//           <div className="absolute bottom-10 right-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-soft-light filter blur-3xl"></div>
//         </div>

//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             <div className="space-y-8">
//               <div className="inline-block bg-blue-500/20 px-4 py-1.5 rounded-full text-sm font-medium mb-4 border border-blue-400/30">
//                 <span className="mr-2">🚀</span> Leading software solutions
//               </div>

//               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
//                 Building Digital
//                 <span className="block mt-2 text-blue-200">Excellence</span>
//               </h1>

//               <p className="text-lg text-blue-100 leading-relaxed max-w-2xl">
//                 We provide cutting-edge development services and comprehensive training programs to empower businesses and individuals in the digital world.
//               </p>

//               <div className="flex flex-col sm:flex-row gap-4">
//                 <button
//                   onClick={() => scrollToSection('services')}
//                   className="bg-white text-[#2A75BB] px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 flex items-center justify-center group shadow-lg"
//                 >
//                   Explore Services
//                   <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
//                 </button>
//                 <button
//                   onClick={() => scrollToSection('courses')}
//                   className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-300"
//                 >
//                   View Courses
//                 </button>
//               </div>

//               <div className="flex items-center pt-4 gap-4">
//                 <div className="flex -space-x-3">
//                   {[1,2,3,4].map((i) => (
//                     <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
//                       <div className="w-full h-full bg-gray-200 border-2 border-dashed rounded-xl" />
//                     </div>
//                   ))}
//                 </div>
//                 <p className="text-blue-100">
//                   <span className="font-semibold text-white">50+</span> Experts Team
//                 </p>
//               </div>
//             </div>

//             <div className="relative">
//               <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 space-y-6 border border-white/10 shadow-xl">
//                 <div className="flex items-center space-x-4">
//                   <div className="relative">
//                     <div className="absolute -inset-1 bg-green-400 rounded-full blur opacity-75 animate-pulse"></div>
//                     <div className="relative bg-green-500 h-3 w-3 rounded-full"></div>
//                   </div>
//                   <span className="text-green-300 font-medium">Live Projects Running</span>
//                 </div>

//                 <div className="space-y-4">
//                   {[
//                     { label: "Web Development", value: 85 },
//                     { label: "Mobile Apps", value: 70 },
//                     { label: "UI/UX Design", value: 90 }
//                   ].map((item, index) => (
//                     <div key={index}>
//                       <div className="flex justify-between text-sm mb-1">
//                         <span className="text-blue-100">{item.label}</span>
//                         <span className="text-white font-medium">{item.value}%</span>
//                       </div>
//                       <div className="bg-blue-900/50 h-2 rounded-full">
//                         <div
//                           className="bg-gradient-to-r from-green-400 to-cyan-400 h-2 rounded-full"
//                           style={{ width: `${item.value}%` }}
//                         ></div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 <div className="pt-4 flex justify-center">
//                   <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-0.5 rounded-full">
//                     <div className="bg-blue-900/50 rounded-full px-6 py-2 text-center">
//                       <span className="text-sm font-medium text-blue-100">
//                         200+ Projects Completed
//                       </span>
//                     </div>
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
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Trusted By Industry Leaders</h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">We partner with innovative companies worldwide to deliver exceptional digital solutions</p>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center">
//             {['TechCorp', 'InnovateLab', 'DataFlow', 'CloudSync', 'DevPro', 'SmartSoft'].map((client, index) => (
//               <div key={index} className="bg-blue-50 p-4 rounded-xl text-center hover:shadow-md transition-all duration-300 group border border-blue-100">
//                 <div className="bg-white w-14 h-14 rounded-xl mx-auto mb-3 flex items-center justify-center group-hover:scale-105 transition-transform shadow-sm">
//                   <span className="text-xl font-bold text-[#2A75BB]">{client[0]}</span>
//                 </div>
//                 <p className="font-semibold text-gray-800">{client}</p>
//               </div>
//             ))}
//           </div>

//           <div className="mt-20 grid md:grid-cols-3 gap-8">
//             {[
//               { value: "50+", label: "Happy Clients", icon: <Users className="h-8 w-8 text-[#2A75BB]" /> },
//               { value: "200+", label: "Projects Completed", icon: <Code className="h-8 w-8 text-[#2A75BB]" /> },
//               { value: "5+", label: "Years Experience", icon: <Star className="h-8 w-8 text-[#2A75BB]" /> }
//             ].map((stat, index) => (
//               <div key={index} className="bg-white p-8 rounded-2xl text-center border border-blue-100 shadow-sm hover:shadow-md transition-shadow duration-300">
//                 <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full mb-4">
//                   {stat.icon}
//                 </div>
//                 <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
//                 <p className="text-gray-600">{stat.label}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Our Community */}
//       <section id="community" className="py-20 bg-blue-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Join Our Thriving Community</h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">Thousands of developers and learners growing together</p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {[
//               { value: "5000+", label: "Active Members", icon: <Users className="h-10 w-10 text-white" />, color: "from-blue-500 to-blue-600" },
//               { value: "1200+", label: "Course Graduates", icon: <BookOpen className="h-10 w-10 text-white" />, color: "from-blue-600 to-blue-700" },
//               { value: "4.9/5", label: "Average Rating", icon: <Star className="h-10 w-10 text-white" />, color: "from-amber-500 to-amber-600" },
//               { value: "100+", label: "Expert Mentors", icon: <Code className="h-10 w-10 text-white" />, color: "from-cyan-500 to-cyan-600" }
//             ].map((item, index) => (
//               <div key={index} className={`bg-gradient-to-br ${item.color} p-6 rounded-2xl text-center text-white shadow-lg hover:shadow-xl transition-shadow duration-300`}>
//                 <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
//                   {item.icon}
//                 </div>
//                 <h3 className="text-2xl font-bold mb-2">{item.value}</h3>
//                 <p>{item.label}</p>
//               </div>
//             ))}
//           </div>

//           <div className="mt-20 bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
//             <div className="text-center mb-10">
//               <h3 className="text-2xl font-bold text-gray-900">What Our Community Says</h3>
//               <p className="text-gray-600 mt-2">Real stories from our members</p>
//             </div>

//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {[
//                 { name: "Ahmed Ali", role: "Full Stack Developer", text: "This community helped me land my dream job. The support and resources are incredible!" },
//                 { name: "Sara Khan", role: "UI/UX Designer", text: "Amazing learning environment with practical projects and expert guidance." },
//                 { name: "Muhammad Hassan", role: "Mobile Developer", text: "Best investment in my career. The courses are top-notch and mentors are very supportive." }
//               ].map((testimonial, index) => (
//                 <div key={index} className="bg-blue-50 rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
//                   <div className="flex items-center mb-4">
//                     <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold">
//                       {testimonial.name[0]}
//                     </div>
//                     <div className="ml-4">
//                       <p className="font-semibold text-gray-800">{testimonial.name}</p>
//                       <p className="text-sm text-gray-500">{testimonial.role}</p>
//                     </div>
//                   </div>
//                   <p className="text-gray-600">"{testimonial.text}"</p>
//                   <div className="flex mt-4">
//                     {[1,2,3,4,5].map((star) => (
//                       <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
//                     ))}
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
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Transform Your Career</h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">Master the latest technologies with industry experts</p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               {
//                 title: "Full Stack Web Development",
//                 duration: "6 months",
//                 students: "500+",
//                 level: "Beginner to Advanced",
//                 tags: ["React", "Node.js", "MongoDB"]
//               },
//               {
//                 title: "Mobile App Development",
//                 duration: "4 months",
//                 students: "300+",
//                 level: "Intermediate",
//                 tags: ["Flutter", "React Native", "Firebase"]
//               },
//               {
//                 title: "UI/UX Design Mastery",
//                 duration: "3 months",
//                 students: "400+",
//                 level: "Beginner",
//                 tags: ["Figma", "Adobe XD", "Prototyping"]
//               },
//               {
//                 title: "Data Science & AI",
//                 duration: "8 months",
//                 students: "250+",
//                 level: "Advanced",
//                 tags: ["Python", "TensorFlow", "ML"]
//               },
//               {
//                 title: "DevOps & Cloud Computing",
//                 duration: "5 months",
//                 students: "200+",
//                 level: "Intermediate",
//                 tags: ["AWS", "Docker", "Kubernetes"]
//               },
//               {
//                 title: "Cybersecurity Fundamentals",
//                 duration: "4 months",
//                 students: "150+",
//                 level: "Beginner",
//                 tags: ["Ethical Hacking", "Network Security", "Encryption"]
//               }
//             ].map((course, index) => (
//               <div key={index} className="bg-white rounded-2xl border border-blue-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group">
//                 <div className="p-6">
//                   <div className="flex justify-between items-start">
//                     <div className="bg-blue-100 p-3 rounded-lg mb-4 group-hover:bg-blue-200 transition-colors">
//                       <BookOpen className="h-6 w-6 text-[#2A75BB]" />
//                     </div>
//                     <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
//                       {course.level}
//                     </span>
//                   </div>

//                   <h3 className="text-xl font-bold text-gray-900 mb-3">{course.title}</h3>

//                   <div className="flex flex-wrap gap-2 mb-4">
//                     {course.tags.map((tag, tagIndex) => (
//                       <span key={tagIndex} className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded">
//                         {tag}
//                       </span>
//                     ))}
//                   </div>

//                   <div className="flex justify-between text-gray-600 text-sm mb-6">
//                     <span>⏱ {course.duration}</span>
//                     <span>👥 {course.students} students</span>
//                   </div>

//                   <button className="w-full bg-[#2A75BB] text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 shadow-md shadow-blue-500/20">
//                     Enroll Now
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section id="services" className="py-20 bg-blue-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Digital Solutions</h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">Comprehensive services to transform your business</p>
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
//               <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-blue-100 hover:shadow-md transition-all duration-300 group">
//                 <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6 group-hover:bg-blue-200 transition-colors">
//                   <service.icon className="h-8 w-8 text-[#2A75BB]" />
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
//                 <p className="text-gray-600 leading-relaxed mb-6">{service.desc}</p>
//                 <button className="inline-flex items-center text-[#2A75BB] font-medium group-hover:text-blue-700 transition-colors">
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
//             <div className="relative">
//               <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96 lg:h-[500px]" />
//               <div className="absolute -bottom-6 -right-6 bg-blue-200 rounded-xl w-3/4 h-72 -z-10"></div>

//               <div className="absolute -top-8 -left-8 bg-white p-6 rounded-2xl shadow-lg border border-blue-100 max-w-xs">
//                 <div className="text-4xl font-bold text-[#2A75BB] mb-2">5+</div>
//                 <p className="text-gray-800 font-medium">Years of Excellence</p>
//               </div>
//             </div>

//             <div>
//               <div className="inline-block bg-blue-100 text-blue-800 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
//                 About TechSoft
//               </div>

//               <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Innovating Since 2019</h2>

//               <p className="text-lg text-gray-600 leading-relaxed mb-6">
//                 We are a passionate team of developers, designers, and educators committed to delivering exceptional software solutions and empowering the next generation of tech professionals.
//               </p>

//               <p className="text-lg text-gray-600 leading-relaxed mb-8">
//                 Founded in 2019, we've grown from a small startup to a trusted technology partner for businesses worldwide, bridging the gap between innovative technology and practical business solutions.
//               </p>

//               <div className="space-y-4 mb-10">
//                 {[
//                   "Expert team of 50+ professionals",
//                   "200+ successful projects delivered",
//                   "Global clients across 15+ countries",
//                   "Industry-leading training programs"
//                 ].map((item, index) => (
//                   <div key={index} className="flex items-center">
//                     <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3">
//                       <div className="w-2 h-2 rounded-full bg-[#2A75BB]"></div>
//                     </div>
//                     <span className="text-gray-700">{item}</span>
//                   </div>
//                 ))}
//               </div>

//               <button className="bg-[#2A75BB] text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-500/20">
//                 Our Vision & Mission
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contact Us */}
//       <section id="contact" className="py-20 bg-gradient-to-br from-[#2A75BB] to-[#1a5d9e] text-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Build Together</h2>
//             <p className="text-lg text-blue-100 max-w-2xl mx-auto">Ready to start your project? Get in touch with our team</p>
//           </div>

//           <div className="grid lg:grid-cols-2 gap-12">
//             <div className="space-y-8">
//               <div className="flex items-start space-x-6">
//                 <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center">
//                   <MapPin className="h-6 w-6 text-white" />
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-semibold mb-2">Office Address</h3>
//                   <p className="text-blue-100">123 Tech Street, Innovation District<br />Karachi, Pakistan 75000</p>
//                 </div>
//               </div>

//               <div className="flex items-start space-x-6">
//                 <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center">
//                   <Phone className="h-6 w-6 text-white" />
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-semibold mb-2">Phone Number</h3>
//                   <p className="text-blue-100">+92 300 1234567<br />+92 21 12345678</p>
//                 </div>
//               </div>

//               <div className="flex items-start space-x-6">
//                 <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center">
//                   <Mail className="h-6 w-6 text-white" />
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-semibold mb-2">Email Address</h3>
//                   <p className="text-blue-100">info@techsoft.com<br />support@techsoft.com</p>
//                 </div>
//               </div>

//               <div className="pt-6">
//                 <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
//                 <div className="space-y-2 text-blue-100">
//                   <p className="flex justify-between"><span>Monday - Friday</span> <span>9:00 AM - 6:00 PM</span></p>
//                   <p className="flex justify-between"><span>Saturday</span> <span>10:00 AM - 4:00 PM</span></p>
//                   <p className="flex justify-between"><span>Sunday</span> <span>Closed</span></p>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
//               <h3 className="text-2xl font-bold mb-8">Send us a message</h3>

//               <form className="space-y-6">
//                 <div className="grid md:grid-cols-2 gap-6">
//                   <div>
//                     <label className="block text-sm font-medium text-blue-100 mb-2">First Name</label>
//                     <input
//                       type="text"
//                       name="firstName"
//                       value={formData.firstName}
//                       onChange={handleInputChange}
//                       className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-white focus:border-white outline-none transition-colors placeholder:text-blue-200"
//                       placeholder="Your first name"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-blue-100 mb-2">Last Name</label>
//                     <input
//                       type="text"
//                       name="lastName"
//                       value={formData.lastName}
//                       onChange={handleInputChange}
//                       className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-white focus:border-white outline-none transition-colors placeholder:text-blue-200"
//                       placeholder="Your last name"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-blue-100 mb-2">Email</label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-white focus:border-white outline-none transition-colors placeholder:text-blue-200"
//                     placeholder="your.email@example.com"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-blue-100 mb-2">Subject</label>
//                   <input
//                     type="text"
//                     name="subject"
//                     value={formData.subject}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-white focus:border-white outline-none transition-colors placeholder:text-blue-200"
//                     placeholder="What's this about?"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-blue-100 mb-2">Message</label>
//                   <textarea
//                     rows={5}
//                     name="message"
//                     value={formData.message}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-white focus:border-white outline-none transition-colors resize-none placeholder:text-blue-200"
//                     placeholder="Tell us about your project or inquiry..."
//                   ></textarea>
//                 </div>

//                 <button
//                   onClick={handleSubmit}
//                   className="w-full bg-white text-[#2A75BB] py-4 px-6 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300"
//                 >
//                   Send Message
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-white pt-16 pb-10">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
//             <div>
//               <div className="flex items-center mb-6">
//                 <div className="bg-[#2A75BB] p-2 rounded-lg">
//                   <Code className="h-6 w-6 text-white" />
//                 </div>
//                 <span className="ml-3 text-2xl font-bold text-[#2A75BB]">TechSoft</span>
//               </div>
//               <p className="text-gray-400 leading-relaxed mb-6">
//                 Building digital excellence through innovative software solutions and comprehensive training programs.
//               </p>
//               <div className="flex space-x-4">
//                 {['twitter', 'linkedin', 'github', 'dribbble'].map((social) => (
//                   <a
//                     key={social}
//                     href="#"
//                     className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#2A75BB] transition-colors"
//                   >
//                     <div className="bg-gray-400 border-2 border-dashed rounded-xl w-6 h-6" />
//                   </a>
//                 ))}
//               </div>
//             </div>

//             <div>
//               <h3 className="text-lg font-semibold mb-6">Services</h3>
//               <ul className="space-y-3 text-gray-400">
//                 {[
//                   "Custom Development",
//                   "Web Applications",
//                   "Mobile Apps",
//                   "E-commerce",
//                   "Digital Marketing",
//                   "IT Consulting"
//                 ].map((service, index) => (
//                   <li key={index}>
//                     <a href="#" className="hover:text-blue-400 transition-colors">{service}</a>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <div>
//               <h3 className="text-lg font-semibold mb-6">Courses</h3>
//               <ul className="space-y-3 text-gray-400">
//                 {[
//                   "Full Stack Development",
//                   "Mobile Development",
//                   "UI/UX Design",
//                   "Data Science & AI",
//                   "DevOps & Cloud",
//                   "Cybersecurity"
//                 ].map((course, index) => (
//                   <li key={index}>
//                     <a href="#" className="hover:text-blue-400 transition-colors">{course}</a>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <div>
//               <h3 className="text-lg font-semibold mb-6">Newsletter</h3>
//               <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates and offers.</p>
//               <form className="flex">
//                 <input
//                   type="email"
//                   placeholder="Your email"
//                   className="px-4 py-3 bg-gray-800 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
//                 />
//                 <button className="bg-[#2A75BB] px-4 rounded-r-lg font-medium hover:bg-blue-700 transition-colors">
//                   Join
//                 </button>
//               </form>
//             </div>
//           </div>

//           <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
//             <p>&copy; {new Date().getFullYear()} TechSoft. All rights reserved. Crafted with passion for technology.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default SoftwareHouseWebsite;

// this is third time
// this is third time
// this is third time
// this is third time
// this is third time
// this is third time
// this is third time
// this is third time
// this is third time
// this is third time
// this is third time

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
    <div className="min-h-screen bg-gradient-to-b from-[#0a192f] to-[#0d1b36] font-sans text-white overflow-x-hidden">
      {/* Navigation */}
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

      {/* Hero Section */}
      <section
        id="home"
        className="pt-20 min-h-screen flex items-center relative overflow-hidden"
        ref={heroRef}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-[#2A75BB]/10 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-10 right-20 w-72 h-72 bg-[#3498db]/10 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse-slow"></div>
          <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-[#2A75BB]/20 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse-slow animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-32 h-32 bg-[#3498db]/20 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse-slow animation-delay-3000"></div>
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
              <div className="inline-block bg-gradient-to-r from-[#2A75BB] to-[#3498db] px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                <span className="mr-2">🚀</span> Leading software solutions
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Building Digital
                <span className="block mt-2 bg-gradient-to-r from-[#2A75BB] to-[#3498db] bg-clip-text text-transparent">
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
                  className="bg-gradient-to-r from-[#2A75BB] to-[#3498db] text-white px-8 py-4 rounded-lg font-semibold hover:from-[#2A75BB]/90 hover:to-[#3498db]/90 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-[#2A75BB]/30"
                >
                  Explore Services
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => scrollToSection("courses")}
                  className="bg-transparent border-2 border-[#2A75BB] text-[#2A75BB] px-8 py-4 rounded-lg font-semibold hover:bg-[#2A75BB]/10 transition-colors duration-300"
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
                      <div className="w-full h-full bg-gray-700 border-2 border-dashed rounded-xl" />
                    </div>
                  ))}
                </div>
                <p className="text-gray-300">
                  <span className="font-semibold text-white">50+</span> Experts
                  Team
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
              <div className="bg-gradient-to-br from-[#2A75BB]/10 to-[#3498db]/10 backdrop-blur-lg rounded-3xl p-8 space-y-6 border border-[#2A75BB]/30 shadow-xl relative overflow-hidden">
                {/* Animated background */}
                <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#2A75BB]/10 rounded-full z-0 animate-pulse-slow"></div>

                <div className="relative z-10">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <div className="absolute -inset-1 bg-green-400 rounded-full blur opacity-75 animate-pulse"></div>
                      <div className="relative bg-green-500 h-3 w-3 rounded-full"></div>
                    </div>
                    <span className="text-green-300 font-medium">
                      Live Projects Running
                    </span>
                  </div>

                  <div className="space-y-4 mt-6">
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
                        <div className="bg-[#0d1b36] h-2 rounded-full">
                          <div
                            className="bg-gradient-to-r from-green-400 to-cyan-400 h-2 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${isVisible ? item.value : 0}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 flex justify-center">
                    <div className="bg-gradient-to-r from-[#2A75BB] to-[#3498db] p-0.5 rounded-full">
                      <div className="bg-[#0a192f] rounded-full px-6 py-2 text-center">
                        <span className="text-sm font-medium text-gray-300">
                          200+ Projects Completed
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-[#2A75BB]" />
        </div>
      </section>

      {/* Our Clients */}
      <section id="clients" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted By Industry Leaders
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
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
                className="bg-gradient-to-br from-[#0d1b36] to-[#0a192f] p-4 rounded-xl text-center hover:shadow-xl transition-all duration-300 group border border-[#2A75BB]/20 hover:border-[#2A75BB]/50"
              >
                <div className="bg-gradient-to-r from-[#2A75BB] to-[#3498db] w-14 h-14 rounded-xl mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
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
                value: "50+",
                label: "Happy Clients",
                icon: <Users className="h-8 w-8 text-[#2A75BB]" />,
              },
              {
                value: "200+",
                label: "Projects Completed",
                icon: <Code className="h-8 w-8 text-[#2A75BB]" />,
              },
              {
                value: "5+",
                label: "Years Experience",
                icon: <Star className="h-8 w-8 text-[#2A75BB]" />,
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#0d1b36] to-[#0a192f] p-8 rounded-2xl text-center border border-[#2A75BB]/20 hover:border-[#2A75BB]/50 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#2A75BB]/10 rounded-full mb-4">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Community */}
      <section
        id="community"
        className="py-20 bg-gradient-to-br from-[#0a192f] to-[#0d1b36] relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#2A75BB]/5 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse-slow"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Join Our Thriving Community
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Thousands of developers and learners growing together
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                value: "5000+",
                label: "Active Members",
                icon: <Users className="h-10 w-10 text-white" />,
                color: "from-[#2A75BB] to-[#3498db]",
              },
              {
                value: "1200+",
                label: "Course Graduates",
                icon: <BookOpen className="h-10 w-10 text-white" />,
                color: "from-[#2A75BB] to-[#1e3c72]",
              },
              {
                value: "4.9/5",
                label: "Average Rating",
                icon: <Star className="h-10 w-10 text-white" />,
                color: "from-[#f39c12] to-[#e67e22]",
              },
              {
                value: "100+",
                label: "Expert Mentors",
                icon: <Code className="h-10 w-10 text-white" />,
                color: "from-[#2A75BB] to-[#16a085]",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${item.color} p-6 rounded-2xl text-center text-white shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1`}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{item.value}</h3>
                <p>{item.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 bg-gradient-to-br from-[#0d1b36] to-[#0a192f] rounded-2xl p-8 shadow-xl border border-[#2A75BB]/20">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold text-white">
                What Our Community Says
              </h3>
              <p className="text-gray-400 mt-2">
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
                  className="bg-gradient-to-br from-[#0d1b36] to-[#0a192f] rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-[#2A75BB]/20 hover:border-[#2A75BB]/50"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#2A75BB] to-[#3498db] flex items-center justify-center text-white font-bold">
                      {testimonial.name[0]}
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold text-white">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-400">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-300">"{testimonial.text}"</p>
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
      <section id="courses" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#3498db]/5 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse-slow"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transform Your Career
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
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
                className="bg-gradient-to-br from-[#0d1b36] to-[#0a192f] rounded-2xl border border-[#2A75BB]/20 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group transform hover:-translate-y-1"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <div className="bg-gradient-to-r from-[#2A75BB] to-[#3498db] p-3 rounded-lg mb-4 group-hover:scale-110 transition-transform">
                      <BookOpen className="h-6 w-6 text-white" />
                    </div>
                    <span className="bg-[#2A75BB]/20 text-[#2A75BB] text-xs font-medium px-2.5 py-0.5 rounded-full">
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
                        className="bg-[#2A75BB]/10 text-[#2A75BB] text-xs px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between text-gray-400 text-sm mb-6">
                    <span>⏱ {course.duration}</span>
                    <span>👥 {course.students} students</span>
                  </div>

                  <button className="w-full bg-gradient-to-r from-[#2A75BB] to-[#3498db] text-white py-3 rounded-lg font-medium hover:from-[#2A75BB]/90 hover:to-[#3498db]/90 transition-all duration-300 shadow-md shadow-[#2A75BB]/30">
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
        className="py-20 bg-gradient-to-br from-[#0a192f] to-[#0d1b36] relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-[#2A75BB]/5 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse-slow"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Digital Solutions
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
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
                className="bg-gradient-to-br from-[#0d1b36] to-[#0a192f] p-8 rounded-2xl shadow-xl border border-[#2A75BB]/20 hover:border-[#2A75BB]/50 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#2A75BB] to-[#3498db] rounded-2xl mb-6">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  {service.desc}
                </p>
                <button className="inline-flex items-center text-[#2A75BB] font-medium group hover:text-[#3498db] transition-colors">
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
              <div className="bg-gradient-to-br from-[#0d1b36] to-[#0a192f] rounded-2xl p-8 border border-[#2A75BB]/20 shadow-xl">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Our Vision & Mission
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-[#2A75BB] mb-2">
                        Vision
                      </h4>
                      <p className="text-gray-300">
                        To become the leading technology partner that transforms
                        businesses through innovative software solutions.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-[#2A75BB] mb-2">
                        Mission
                      </h4>
                      <p className="text-gray-300">
                        To deliver high-quality software solutions and provide
                        world-class training to create skilled professionals for
                        the global market.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-8 -left-8 bg-gradient-to-r from-[#2A75BB] to-[#3498db] p-6 rounded-2xl shadow-lg max-w-xs">
                <div className="text-4xl font-bold text-white mb-2">5+</div>
                <p className="text-white font-medium">Years of Excellence</p>
              </div>
            </div>

            <div>
              <div className="inline-block bg-gradient-to-r from-[#2A75BB] to-[#3498db] px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                About TechSoft
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Innovating Since 2019
              </h2>

              <p className="text-lg text-gray-400 leading-relaxed mb-6">
                We are a passionate team of developers, designers, and educators
                committed to delivering exceptional software solutions and
                empowering the next generation of tech professionals.
              </p>

              <p className="text-lg text-gray-400 leading-relaxed mb-8">
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
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#2A75BB]/20 flex items-center justify-center mr-3">
                      <div className="w-2 h-2 rounded-full bg-[#2A75BB]"></div>
                    </div>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>

              <button className="bg-gradient-to-r from-[#2A75BB] to-[#3498db] text-white px-8 py-4 rounded-lg font-semibold hover:from-[#2A75BB]/90 hover:to-[#3498db]/90 transition-all duration-300 shadow-lg shadow-[#2A75BB]/30">
                Our Journey
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-[#0a192f] to-[#0d1b36] relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#3498db]/5 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse-slow"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Let's Build Together
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Ready to start your project? Get in touch with our team
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-r from-[#2A75BB] to-[#3498db] flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Office Address
                  </h3>
                  <p className="text-gray-400">
                    123 Tech Street, Innovation District
                    <br />
                    Karachi, Pakistan 75000
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-r from-[#2A75BB] to-[#3498db] flex items-center justify-center">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Phone Number
                  </h3>
                  <p className="text-gray-400">
                    +92 300 1234567
                    <br />
                    +92 21 12345678
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-r from-[#2A75BB] to-[#3498db] flex items-center justify-center">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Email Address
                  </h3>
                  <p className="text-gray-400">
                    info@techsoft.com
                    <br />
                    support@techsoft.com
                  </p>
                </div>
              </div>

              <div className="pt-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Business Hours
                </h3>
                <div className="space-y-2 text-gray-400">
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

            <div className="bg-gradient-to-br from-[#0d1b36] to-[#0a192f] p-8 rounded-2xl border border-[#2A75BB]/20 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-8">
                Send us a message
              </h3>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-[#0d1b36] border border-[#2A75BB]/30 rounded-lg focus:ring-2 focus:ring-[#2A75BB] focus:border-[#2A75BB] outline-none transition-colors placeholder:text-gray-600"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-[#0d1b36] border border-[#2A75BB]/30 rounded-lg focus:ring-2 focus:ring-[#2A75BB] focus:border-[#2A75BB] outline-none transition-colors placeholder:text-gray-600"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#0d1b36] border border-[#2A75BB]/30 rounded-lg focus:ring-2 focus:ring-[#2A75BB] focus:border-[#2A75BB] outline-none transition-colors placeholder:text-gray-600"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#0d1b36] border border-[#2A75BB]/30 rounded-lg focus:ring-2 focus:ring-[#2A75BB] focus:border-[#2A75BB] outline-none transition-colors placeholder:text-gray-600"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#0d1b36] border border-[#2A75BB]/30 rounded-lg focus:ring-2 focus:ring-[#2A75BB] focus:border-[#2A75BB] outline-none transition-colors resize-none placeholder:text-gray-600"
                    placeholder="Tell us about your project or inquiry..."
                  ></textarea>
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-[#2A75BB] to-[#3498db] text-white py-4 px-6 rounded-lg font-semibold hover:from-[#2A75BB]/90 hover:to-[#3498db]/90 transition-all duration-300 shadow-lg shadow-[#2A75BB]/30"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a192f] border-t border-[#2A75BB]/20 pt-16 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-[#2A75BB] to-[#3498db] p-2 rounded-lg">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-[#2A75BB] to-[#3498db] bg-clip-text text-transparent">
                  TechSoft
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Building digital excellence through innovative software
                solutions and comprehensive training programs.
              </p>
              <div className="flex space-x-4">
                {["twitter", "linkedin", "github", "dribbble"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 rounded-full bg-[#0d1b36] flex items-center justify-center hover:bg-gradient-to-r from-[#2A75BB] to-[#3498db] transition-colors"
                  >
                    <div className="bg-gray-400 border-2 border-dashed rounded-xl w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-6">
                Services
              </h3>
              <ul className="space-y-3 text-gray-400">
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
                      className="hover:text-[#2A75BB] transition-colors"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Courses</h3>
              <ul className="space-y-3 text-gray-400">
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
                      className="hover:text-[#2A75BB] transition-colors"
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
              <p className="text-gray-400 mb-4">
                Subscribe to our newsletter for the latest updates and offers.
              </p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-3 bg-[#0d1b36] rounded-l-lg focus:outline-none focus:ring-1 focus:ring-[#2A75BB] w-full placeholder:text-gray-600"
                />
                <button className="bg-gradient-to-r from-[#2A75BB] to-[#3498db] px-4 rounded-r-lg font-medium hover:opacity-90 transition-opacity">
                  Join
                </button>
              </form>
            </div>
          </div>

          <div className="border-t border-[#2A75BB]/20 mt-12 pt-8 text-center text-gray-500">
            <p>
              &copy; {new Date().getFullYear()} TechSoft. All rights reserved.
              Crafted with passion for technology.
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
