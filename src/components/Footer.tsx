import { Twitter, Linkedin, Github, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative py-24 px-6">
      <div className="absolute inset-0 bg-gradient-to-t from-black to-gray-900"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* CTA Section */}
        <div className="text-center mb-20">
          <div className="relative p-12 rounded-3xl bg-gradient-to-br from-blue-900/50 to-cyan-900/30 backdrop-blur-sm border border-blue-500/30 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 animate-pulse"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Start Trading Smarter</span>
                <br />
                <span className="text-blue-500">
                  Today
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join over 500 traders who have already transformed their trading with KinnoBot's AI-powered automation
              </p>
              
              <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <div className="bg-gray-900 rounded-full p-2">
                    <svg className="w-5 h-5 text-cyan-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 12L5 9M5 9L8 12M5 9V15M22 12L19 15M19 15L16 12M19 15V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-white font-medium">8.2% Avg. Monthly Return</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="bg-gray-900 rounded-full p-2">
                    <svg className="w-5 h-5 text-cyan-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-white font-medium">30-Day Money-Back Guarantee</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="bg-gray-900 rounded-full p-2">
                    <svg className="w-5 h-5 text-cyan-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 7V3M16 7V3M7 11H17M5 21H19C20.1046 21 21 20.1046 21 19V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V19C3 20.1046 3.89543 21 5 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-white font-medium">Setup in Under 10 Minutes</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
                  Get KinnoBot Now
                </button>
                <button className="px-8 py-4 border border-cyan-500/50 text-cyan-400 rounded-md font-semibold text-lg transition-all duration-300 hover:bg-cyan-500/10">
                  See Performance Data
                </button>
              </div>
              
              <p className="text-gray-400 text-sm mt-6">
                Secure checkout via credit card, PayPal, or crypto • Instant delivery • 24/7 support
              </p>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-6">
              <div className="mr-3">
                <img 
                src="/images/kinnobotlogo.png" 
                alt="KinnoBot Logo" 
                className="w-10 h-10 object-contain" 
                />
              </div>
              <span className="text-2xl font-bold text-white">KinnoBot</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              The future of cryptocurrency trading powered by artificial intelligence. 
              Trade smarter, not harder.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-colors duration-300">
                <Twitter className="w-5 h-5 text-gray-400 hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-colors duration-300">
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-colors duration-300">
                <Github className="w-5 h-5 text-gray-400 hover:text-white" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Product</h3>
            <ul className="space-y-3">
              {['Features', 'Pricing', 'API Documentation', 'Trading Strategies', 'Security'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Company</h3>
            <ul className="space-y-3">
              {['About Us', 'Blog', 'Careers', 'Press Kit', 'Partners'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center text-gray-400">
                <Mail className="w-5 h-5 mr-3 text-blue-400" />
                <span>support@cryptoai.com</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone className="w-5 h-5 mr-3 text-blue-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin className="w-5 h-5 mr-3 text-blue-400" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2025 KinnoBot. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;