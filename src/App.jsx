import { useState, useRef } from 'react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const pricingRef = useRef(null);
  const bookingRef = useRef(null);
  const contactRef = useRef(null);
  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const services = [
    { name: "High-Speed Internet", description: "Fast and stable internet connection for browsing, streaming, or working.", icon: "🌐" },
    { name: "Gaming Stations", description: "Top-tier gaming PCs with the latest titles and peripherals.", icon: "🎮" },
    { name: "Printing Services", description: "Professional printing, scanning, and copying at affordable rates.", icon: "🖨️" },
    { name: "Work & Study Zones", description: "Quiet and comfortable spaces designed for remote work and study.", icon: "💼" },
  ];

  const plans = [
    { name: "Hourly Pass", price: "$3/hour", features: ["1-hour access", "Free WiFi", "Basic PC use"] },
    { name: "Daily Pass", price: "$15/day", features: ["Unlimited daily use", "Premium gaming stations", "Printing credit included"] },
    { name: "Monthly Membership", price: "$80/month", features: ["24/7 access", "Exclusive discounts", "VIP lounge area"] },
  ];

  const testimonials = [
    {
      name: "Alex R.",
      role: "Student",
      content: "WAMU has become my second home. The environment is super chill and the internet speed is unmatched!",
      avatar: "https://placehold.co/100x100" 
    },
    {
      name: "Jamie T.",
      role: "Remote Developer",
      content: "I come here to focus on work. The setup is clean, ergonomic, and perfect for long hours.",
      avatar: "https://placehold.co/100x100" 
    },
    {
      name: "Morgan L.",
      role: "Casual Gamer",
      content: "Loved the gaming zone! Great hardware and a fun crowd. Highly recommend booking a session.",
      avatar: "https://placehold.co/100x100" 
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* Header */}
      <header className="bg-gray-800 shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">WAMU</h1>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="capitalize hover:text-blue-400 transition duration-300">Home</button>
            <button onClick={() => scrollToSection(aboutRef)} className="capitalize hover:text-blue-400 transition duration-300">About</button>
            <button onClick={() => scrollToSection(servicesRef)} className="capitalize hover:text-blue-400 transition duration-300">Services</button>
            <button onClick={() => scrollToSection(pricingRef)} className="capitalize hover:text-blue-400 transition duration-300">Pricing</button>
            <button onClick={() => scrollToSection(bookingRef)} className="capitalize hover:text-blue-400 transition duration-300">Booking</button>
            <button onClick={() => scrollToSection(contactRef)} className="capitalize hover:text-blue-400 transition duration-300">Contact</button>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden text-white focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 p-4 animate-fadeIn">
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="block w-full text-left py-2 capitalize hover:text-blue-400 transition duration-300">Home</button>
            <button onClick={() => scrollToSection(aboutRef)} className="block w-full text-left py-2 capitalize hover:text-blue-400 transition duration-300">About</button>
            <button onClick={() => scrollToSection(servicesRef)} className="block w-full text-left py-2 capitalize hover:text-blue-400 transition duration-300">Services</button>
            <button onClick={() => scrollToSection(pricingRef)} className="block w-full text-left py-2 capitalize hover:text-blue-400 transition duration-300">Pricing</button>
            <button onClick={() => scrollToSection(bookingRef)} className="block w-full text-left py-2 capitalize hover:text-blue-400 transition duration-300">Booking</button>
            <button onClick={() => scrollToSection(contactRef)} className="block w-full text-left py-2 capitalize hover:text-blue-400 transition duration-300">Contact</button>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 min-h-screen flex items-center">
        <div className="absolute inset-0 bg-[url('https://placehold.co/1600x900')]  opacity-10 bg-cover bg-center"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">Experience the Future of Gaming & Work</h2>
            <p className="text-lg md:text-xl text-gray-300 mb-6">Join WAMU today and enjoy high-speed internet, premium gaming setups, and a modern co-working space.</p>
            <div className="flex gap-4">
              <button onClick={() => scrollToSection(bookingRef)} className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold transition transform hover:scale-105 shadow-lg">
                Book Now
              </button>
              <button onClick={() => scrollToSection(servicesRef)} className="px-6 py-3 border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900 rounded-lg font-semibold transition transform hover:scale-105">
                Explore Services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} id="about" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img src="https://placehold.co/600x400"  alt="WAMU Cafe Interior" className="rounded-lg shadow-xl" />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">About WAMU</h2>
              <p className="text-gray-300 mb-4">WAMU is more than just a cyber cafe — it's your hub for productivity, entertainment, and community. Whether you're a student needing a quiet place to study, a gamer looking for the latest rigs, or a professional needing a reliable workspace, we've got you covered.</p>
              <p className="text-gray-300">Our mission is to provide an inclusive, modern, and tech-forward environment where people can connect, create, and compete in comfort.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} id="services" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section ref={pricingRef} id="pricing" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Flexible Plans for Every Need</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className="bg-gray-900 p-8 rounded-lg shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 border border-gray-700">
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <p className="text-2xl font-bold mb-4">{plan.price}</p>
                <ul className="mb-6 space-y-2">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-300">&#x2022; {feature}</li>
                  ))}
                </ul>
                <button onClick={() => scrollToSection(bookingRef)} className="w-full py-2 bg-blue-600 hover:bg-blue-500 rounded-lg font-semibold transition">
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section ref={bookingRef} id="booking" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Book Your Session</h2>
          <div className="max-w-3xl mx-auto bg-gray-800 p-8 rounded-lg shadow-xl">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
                <input type="text" required className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
                <input type="email" required className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Phone Number</label>
                <input type="tel" required className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Session Type</label>
                <select className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Hourly Pass</option>
                  <option>Daily Pass</option>
                  <option>Monthly Membership</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Preferred Date & Time</label>
                <input type="datetime-local" required className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <button type="submit" className="w-full py-3 bg-blue-600 hover:bg-blue-500 rounded-lg font-semibold transition transform hover:scale-105">
                Confirm Booking
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} id="contact" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <p className="text-gray-300 mb-2"><strong>Address:</strong> 123 Cyber Lane, Tech City</p>
              <p className="text-gray-300 mb-2"><strong>Email:</strong> info@wamu.cafe</p>
              <p className="text-gray-300 mb-2"><strong>Phone:</strong> +1 (555) 123-4567</p>
              <div className="mt-6 flex space-x-4">
                <a href="#" className="text-blue-400 hover:text-blue-300 transition">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-blue-400 hover:text-blue-300 transition">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-blue-400 hover:text-blue-300 transition">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Send Us a Message</h3>
              <form className="space-y-4">
                <input type="text" placeholder="Your Name" className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none" />
                <input type="email" placeholder="Your Email" className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none" />
                <textarea rows="5" placeholder="Your Message" className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none"></textarea>
                <button type="submit" className="w-full py-2 bg-blue-600 hover:bg-blue-500 rounded-lg font-semibold transition">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 py-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-white font-semibold mb-4">WAMU</h4>
              <p className="text-sm">Modern cyber cafe for gamers, workers, and students. Experience the future today.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-white">Home</button></li>
                <li><button onClick={() => scrollToSection(aboutRef)} className="hover:text-white">About</button></li>
                <li><button onClick={() => scrollToSection(servicesRef)} className="hover:text-white">Services</button></li>
                <li><button onClick={() => scrollToSection(pricingRef)} className="hover:text-white">Pricing</button></li>
                <li><button onClick={() => scrollToSection(bookingRef)} className="hover:text-white">Booking</button></li>
                <li><button onClick={() => scrollToSection(contactRef)} className="hover:text-white">Contact</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Opening Hours</h4>
              <ul className="space-y-2 text-sm">
                <li>Mon - Fri: 8am - 10pm</li>
                <li>Sat - Sun: 10am - 11pm</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-white transition">Facebook</a>
                <a href="#" className="hover:text-white transition">Instagram</a>
                <a href="#" className="hover:text-white transition">Twitter</a>
              </div>
            </div>
          </div>
          <hr className="my-8 border-gray-700" />
          <div className="text-center text-sm">
            &copy; {new Date().getFullYear()} WAMU Cyber Cafe. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}