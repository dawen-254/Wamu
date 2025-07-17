import { useState, useRef } from 'react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [activeTab, setActiveTab] = useState('home');
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const pricingRef = useRef(null);
  const bookingRef = useRef(null);
  const contactRef = useRef(null);
  const galleryRef = useRef(null);
  
  const scrollToSection = (ref, tab) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
    setActiveTab(tab);
    setIsMenuOpen(false);
  };

  const services = [
    { 
      name: "Graphic and Web Design", 
      description: "Custom logos, websites, and digital branding solutions tailored to your business needs.", 
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5ZM12 19.5C9.5 19.5 7.43 17.93 6.5 15.5H17.5C16.57 17.93 14.5 19.5 12 19.5ZM12 13.5C14.5 13.5 16.57 15.07 17.5 17.5H6.5C7.43 15.07 9.5 13.5 12 13.5Z" fill="currentColor" />
        </svg>
      )
    },
    { 
      name: "Branding Services", 
      description: "Professional logo design, business cards, and brand identity packages.", 
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 18C9.79 18 8 16.21 8 14C8 11.8 9.79 10 12 10C14.21 10 16 11.8 16 14C16 16.21 14.21 18 12 18ZM12 8C10.9 8 10 8.9 10 10C10 11.1 10.9 12 12 12C13.1 12 14 11.1 14 10C14 8.9 13.1 8 12 8Z" fill="currentColor" />
        </svg>
      )
    },
    { 
      name: "Printing Services", 
      description: "Professional printing, scanning, and copying at affordable rates.", 
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 8H5V19H19V8ZM17 17H7V10H17V17ZM19 4H5C3.9 4 3 4.9 3 6V20C3 21.1 3.9 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM17 15H7V13H17V15Z" fill="currentColor" />
        </svg>
      )
    },
    { 
      name: "Work & Study Zones", 
      description: "Quiet and comfortable spaces designed for remote work and study.", 
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 6H12L10 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V8C22 6.9 21.1 6 20 6ZM14 17H6V15H14V17ZM20 13H6V11H20V13ZM20 9H6V7H20V9Z" fill="currentColor" />
        </svg>
      )
    },
  ];

  const plans = [
    { 
      name: "Hourly Pass", 
      price: "Ksh 60/hour", 
      features: ["1-hour access", "Free WiFi", "Basic PC use"] 
    },
    { 
      name: "Daily Pass", 
      price: "Ksh 300/day", 
      features: ["Unlimited daily use", "Premium work stations", "Printing credit included"] 
    },
    { 
      name: "Monthly Membership", 
      price: "Ksh 1500/month", 
      features: ["24/7 access", "Exclusive discounts", "VIP lounge area"] 
    },
  ];

  const testimonials = [
    {
      name: "Alex M.",
      role: "Student",
      content: "WAMU BRANDS has become my second home. The environment is super chill and the internet speed is unmatched!",
      avatar: "https://placehold.co/100x100 "
    },
    {
      name: "Jamie W.",
      role: "Remote Developer",
      content: "I come here to focus on work. The setup is clean, ergonomic, and perfect for long hours.",
      avatar: "https://placehold.co/100x100 "
    },
    {
      name: "Morgan K.",
      role: "Small Business Owner",
      content: "Their branding services helped me establish my business identity. Professional and affordable!",
      avatar: "https://placehold.co/100x100 "
    }
  ];

  const galleryImages = [
    { id: 1, src: "/gal1.jpg", alt: "Graphic Design" },
    { id: 2, src: "/gal2.jpg", alt: "Happy Customer" },
    { id: 3, src: "/gal3.jpg", alt: "Branding samples" },
    { id: 4, src: "/gal4.jpg", alt: "Printing services" },
    { id: 5, src: "/gal5.jpg", alt: "T-shirt Branding" },
    { id: 6, src: "/gal6.jpg", alt: "T-shirt Branding" },
  ];

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleFileSubmit = (e) => {
    e.preventDefault();
    if (!selectedFile) return;
    const whatsappNumber = "254797537766";
    const message = "I'd like to submit this file for printing/branding services";
    const encodedMessage = encodeURIComponent(message);
    alert(`File "${selectedFile.name}" would be sent to WhatsApp number ${whatsappNumber} with message: ${message}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900 text-white font-sans">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-900 to-purple-800 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src="/logo.jpg" 
              alt="WAMU BRANDS Logo" 
              className="h-12 w-12 mr-3 rounded-full border-2 border-white"
            />
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-white">
              WAMU BRANDS
            </h2>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6">
            <button 
              onClick={() => scrollToSection(homeRef, 'home')} 
              className={`capitalize hover:text-yellow-300 transition duration-300 font-medium ${activeTab === 'home' ? 'text-yellow-300' : ''}`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection(aboutRef, 'about')} 
              className={`capitalize hover:text-yellow-300 transition duration-300 font-medium ${activeTab === 'about' ? 'text-yellow-300' : ''}`}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection(servicesRef, 'services')} 
              className={`capitalize hover:text-yellow-300 transition duration-300 font-medium ${activeTab === 'services' ? 'text-yellow-300' : ''}`}
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection(galleryRef, 'gallery')} 
              className={`capitalize hover:text-yellow-300 transition duration-300 font-medium ${activeTab === 'gallery' ? 'text-yellow-300' : ''}`}
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection(pricingRef, 'pricing')} 
              className={`capitalize hover:text-yellow-300 transition duration-300 font-medium ${activeTab === 'pricing' ? 'text-yellow-300' : ''}`}
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection(contactRef, 'contact')} 
              className={`capitalize hover:text-yellow-300 transition duration-300 font-medium ${activeTab === 'contact' ? 'text-yellow-300' : ''}`}
            >
              Contact
            </button>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="lg:hidden text-white focus:outline-none p-2 rounded-md hover:bg-blue-800 transition"
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-blue-900 p-4 animate-fadeIn">
            <div className="grid grid-cols-2 gap-2">
              <button 
                onClick={() => scrollToSection(homeRef, 'home')} 
                className="bg-blue-800 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection(aboutRef, 'about')} 
                className="bg-blue-800 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection(servicesRef, 'services')} 
                className="bg-blue-800 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection(galleryRef, 'gallery')} 
                className="bg-blue-800 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition"
              >
                Gallery
              </button>
              <button 
                onClick={() => scrollToSection(pricingRef, 'pricing')} 
                className="bg-blue-800 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition"
              >
                Pricing
              </button>
              <button 
                onClick={() => scrollToSection(contactRef, 'contact')} 
                className="bg-blue-800 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </header>
      
      {/* Hero Section */}
      <section ref={homeRef} id="home" className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900 min-h-screen flex items-center">
        <div className="absolute inset-0 bg-[url('/home.jpg')] opacity-5 bg-cover bg-center"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-yellow-300">
              Your Creative Hub for Branding & Technology
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8">
              WAMU BRANDS offers premium branding services, high-speed internet, and professional work spaces in a vibrant, creative environment.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => scrollToSection(bookingRef, 'booking')} 
                className="px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-white-900 rounded-xl font-bold transition transform hover:scale-105 shadow-lg"
              >
                Book Now
              </button>
              <button 
                onClick={() => scrollToSection(servicesRef, 'services')} 
                className="px-8 py-4 border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-white-900 rounded-xl font-bold transition transform hover:scale-105"
              >
                Our Services
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section ref={aboutRef} id="about" className="py-20 bg-gradient-to-b from-blue-900 to-purple-900">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500"></div>
                <img 
                  src="/about.jpg " 
                  alt="WAMU BRANDS Interior" 
                  className="rounded-2xl shadow-2xl border-4 border-yellow-400 transform group-hover:scale-105 transition duration-500"
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-yellow-300">
                About WAMU BRANDS
              </h2>
              <p className="text-gray-200 mb-4 text-lg">
                WAMU BRANDS is a creative hub that combines technology services with professional branding solutions. 
                We're dedicated to helping businesses establish their identity while providing top-notch tech services.
              </p>
              <p className="text-gray-200 mb-6 text-lg">
                Our space is designed to inspire creativity, whether you're working on your brand, studying, or just need 
                reliable internet and printing services.
              </p>
              <div className="flex gap-4">
                <button 
                  onClick={() => scrollToSection(servicesRef, 'services')} 
                  className="px-6 py-3 bg-yellow-500 hover:bg-yellow-400 text-white-900 rounded-lg font-semibold transition"
                >
                  Our Services
                </button>
                <button 
                  onClick={() => scrollToSection(galleryRef, 'gallery')} 
                  className="px-6 py-3 border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-white-900 rounded-lg font-semibold transition"
                >
                  View Gallery
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section ref={servicesRef} id="services" className="py-20 bg-gradient-to-b from-purple-900 to-blue-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-yellow-300">
            Our Services
          </h2>
          <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto text-lg">
            We offer a comprehensive range of services to meet all your branding and technology needs
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-gray-800 bg-opacity-60 p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 backdrop-blur-sm border border-gray-700 group"
              >
                <div className="text-yellow-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.name}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Gallery Section */}
      <section ref={galleryRef} id="gallery" className="py-20 bg-gradient-to-b from-blue-900 to-purple-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-yellow-300">
            Our Gallery
          </h2>
          <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto text-lg">
            Take a look at our vibrant space and the work we've done for our clients
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image) => (
              <div 
                key={image.id} 
                className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 group"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white p-4 text-lg font-medium">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* File Upload Section */}
      <section className="py-20 bg-gradient-to-b from-purple-900 to-blue-900">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto bg-gray-800 bg-opacity-60 p-8 rounded-xl shadow-xl backdrop-blur-sm border border-gray-700">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-yellow-300">
              Upload Your Files
            </h2>
            <p className="text-gray-300 mb-6">
              Need something printed or designed? Upload your file and we'll get started right away!
            </p>
            <form onSubmit={handleFileSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Select File</label>
                <div className="flex items-center justify-center w-full">
                  <label className="flex flex-col w-full h-32 border-2 border-dashed border-yellow-400 hover:bg-gray-700 hover:border-solid rounded-lg cursor-pointer transition">
                    <div className="flex flex-col items-center justify-center pt-7">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                      <p className="pt-1 text-sm tracking-wider text-gray-300">
                        {selectedFile ? selectedFile.name : 'Drag & drop your file here or click to browse'}
                      </p>
                    </div>
                    <input 
                      type="file" 
                      onChange={handleFileChange} 
                      className="opacity-0" 
                      required
                    />
                  </label>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Your Contact Number</label>
                <input
                  type="tel"
                  placeholder="+254 XXX XXX XXX"
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Special Instructions</label>
                <textarea
                  rows="3"
                  placeholder="Any specific requirements?"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-yellow-500 hover:bg-yellow-400 text-white-900 rounded-lg font-bold transition transform hover:scale-105"
              >
                Send via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section ref={pricingRef} id="pricing" className="py-20 bg-gradient-to-b from-blue-900 to-purple-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-yellow-300">
            Flexible Plans for Every Need
          </h2>
          <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto text-lg">
            Choose the plan that works best for you and enjoy our premium services
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className={`bg-gray-800 bg-opacity-60 p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 backdrop-blur-sm border ${index === 1 ? 'border-yellow-400 scale-105' : 'border-gray-700'} group`}
              >
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <p className="text-2xl font-bold mb-6 text-yellow-400">{plan.price}</p>
                <ul className="mb-8 space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-gray-300 group-hover:translate-x-2 transition-transform duration-300">
                      <svg className="h-5 w-5 text-yellow-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => scrollToSection(bookingRef, 'booking')} 
                  className={`w-full py-3 rounded-lg font-semibold transition ${index === 1 ? 'bg-yellow-500 hover:bg-yellow-400 text-white-900' : 'bg-white-700 hover:bg-gray-600 text-white'}`}
                >
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Booking Section */}
      <section ref={bookingRef} id="booking" className="py-20 bg-gradient-to-b from-purple-900 to-blue-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-yellow-300">
            Book Your Session
          </h2>
          <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto text-lg">
            Reserve your spot at WAMU BRANDS and enjoy our premium services
          </p>
          <div className="max-w-3xl mx-auto bg-gray-800 bg-opacity-60 p-8 rounded-xl shadow-xl backdrop-blur-sm border border-gray-700">
            <form
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                const name = e.target.fullname.value;
                const email = e.target.email.value;
                const phone = e.target.phone.value;
                const session = e.target.session.value;
                const datetime = e.target.datetime.value;
                const whatsappNumber = "254706865824";
                const message = `Hello, I'd like to make a booking.
Full Name: ${name}
Email: ${email}
Phone: ${phone}
Session Type: ${session}
Preferred Date & Time: ${datetime}`;
                const encodedMessage = encodeURIComponent(message);
                const whatsappURL = `https://wa.me/ ${whatsappNumber}?text=${encodedMessage}`;
                window.open(whatsappURL, "_blank");
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="fullname"
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Session Type</label>
                  <select
                    name="session"
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  >
                    <option>Hourly Pass</option>
                    <option>Daily Pass</option>
                    <option>Monthly Membership</option>
                    <option>Branding Consultation</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Preferred Date & Time</label>
                <input
                  type="datetime-local"
                  name="datetime"
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Special Requests</label>
                <textarea
                  name="requests"
                  rows="3"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Any specific requirements or equipment needed?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-yellow-500 hover:bg-yellow-400 text-white-900 rounded-lg font-bold transition transform hover:scale-105"
              >
                Confirm Booking via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-b from-blue-900 to-purple-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-yellow-300">
            What Our Customers Say
          </h2>
          <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto text-lg">
            Don't just take our word for it - hear from our satisfied customers
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-gray-800 bg-opacity-60 p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 backdrop-blur-sm border border-gray-700 group"
              >
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full mr-4 border-2 border-yellow-400 group-hover:scale-110 transition-transform duration-300"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-yellow-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 italic group-hover:text-gray-200 transition-colors duration-300">"{testimonial.content}"</p>
                <div className="mt-4 flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section ref={contactRef} id="contact" className="py-20 bg-gradient-to-b from-purple-900 to-blue-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-yellow-300">
            Get in Touch
          </h2>
          <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto text-lg">
            Have questions or want to discuss your project? Reach out to us!
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gray-800 bg-opacity-60 p-8 rounded-xl shadow-lg backdrop-blur-sm border border-gray-700">
              <h3 className="text-xl font-semibold mb-6 text-yellow-300">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-yellow-400 mr-4 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <h4 className="font-medium">Address</h4>
                    <p className="text-gray-300">Mlolongo, Behind Co-operative Bank</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-yellow-400 mr-4 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-gray-300">wamubrands2@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-yellow-400 mr-4 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-gray-300">+254 706 865824</p>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold mt-8 mb-4 text-yellow-300">Opening Hours</h3>
              <div className="flex justify-between max-w-xs">
                <div>
                  <p className="font-medium">Mon - Sat</p>
                  <p className="text-gray-300">8am - 10pm</p>
                </div>
                <div>
                  <p className="font-medium">Sunday</p>
                  <p className="text-gray-300">10am - 11pm</p>
                </div>
              </div>
              <h3 className="text-xl font-semibold mt-8 mb-4 text-yellow-300">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center hover:bg-blue-600 transition transform hover:scale-110">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-pink-600 flex items-center justify-center hover:bg-pink-500 transition transform hover:scale-110">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.067-.06-1.407-.06-4.123v-.08c0-2.643.012-2.987.06-4.043.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465 1.067-.048 1.407-.06 4.123-.06h.08zM15 12a3 3 0 11-6 0 3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center hover:bg-blue-400 transition transform hover:scale-110">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="bg-gray-800 bg-opacity-60 p-8 rounded-xl shadow-lg backdrop-blur-sm border border-gray-700">
              <h3 className="text-xl font-semibold mb-6 text-yellow-300">Send Us a Message</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea
                    rows="5"
                    required
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-yellow-500 hover:bg-yellow-400 text-gray-900 rounded-lg font-bold transition transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-900 to-purple-800 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img 
                  src="/logo.jpg" 
                  alt="WAMU BRANDS Logo" 
                  className="h-8 w-8 mr-2 rounded-full border-2 border-white"
                />
                <h3 className="text-xl font-bold text-yellow-300">WAMU BRANDS</h3>
              </div>
              <p className="text-gray-300 mb-4">
                A creative hub combining technology services with professional branding solutions.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-8 h-8 rounded-full bg-blue-700 flex items-center justify-center hover:bg-blue-600 transition">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-pink-600 flex items-center justify-center hover:bg-pink-500 transition">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.067-.06-1.407-.06-4.123v-.08c0-2.643.012-2.987.06-4.043.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465 1.067-.048 1.407-.06 4.123-.06h.08zM15 12a3 3 0 11-6 0 3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center hover:bg-blue-400 transition">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-yellow-300">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => scrollToSection(document.getElementById('home'), 'home')} 
                    className="text-gray-300 hover:text-yellow-300 transition"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection(aboutRef, 'about')} 
                    className="text-gray-300 hover:text-yellow-300 transition"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection(servicesRef, 'services')} 
                    className="text-gray-300 hover:text-yellow-300 transition"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection(galleryRef, 'gallery')} 
                    className="text-gray-300 hover:text-yellow-300 transition"
                  >
                    Gallery
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection(pricingRef, 'pricing')} 
                    className="text-gray-300 hover:text-yellow-300 transition"
                  >
                    Pricing
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection(contactRef, 'contact')} 
                    className="text-gray-300 hover:text-yellow-300 transition"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-yellow-300">Services</h3>
              <ul className="space-y-2">
                <li className="text-gray-300">Branding Services</li>
                <li className="text-gray-300">Graphic and Web Design</li>
                <li className="text-gray-300">Printing Services</li>
                <li className="text-gray-300">Work & Study Zones</li>
                <li className="text-gray-300">High Speed Internet</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-yellow-300">Contact Info</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-yellow-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-300">Mlolongo, Behind Co-operative Bank</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-yellow-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-300">wamubrands2@gmail.com</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-yellow-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-gray-300">+254 706 865824</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-6 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} WAMU BRANDS. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}