import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Alex Rodriguez",
      role: "Day Trader",
      image: "https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      content: "This AI bot has completely transformed my trading. I've seen a 340% increase in profits since I started using it 6 months ago.",
      rating: 5,
      profit: "+$85,000"
    },
    {
      name: "Sarah Chen",
      role: "Crypto Investor",
      image: "https://images.pexels.com/photos/3778564/pexels-photo-3778564.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      content: "The risk management features are incredible. I sleep better knowing my investments are protected by advanced AI algorithms.",
      rating: 5,
      profit: "+$127,000"
    },
    {
      name: "Marcus Johnson",
      role: "Portfolio Manager",
      image: "https://images.pexels.com/photos/3777946/pexels-photo-3777946.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      content: "As a portfolio manager, I need reliable tools. This AI trading bot consistently outperforms manual trading strategies.",
      rating: 5,
      profit: "+$234,000"
    }
  ];

  return (
    <section className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Trusted by
            </span>
            <br />
            <span className="text-white">Successful Traders</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join thousands of traders who have revolutionized their crypto trading with our AI technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-3xl bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full border-2 border-blue-500/50 mr-4"
                  />
                  <div>
                    <h4 className="text-xl font-bold text-white">{testimonial.name}</h4>
                    <p className="text-blue-400">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <Quote className="w-8 h-8 text-blue-400/50 mb-4" />
                
                <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
                  "{testimonial.content}"
                </p>
                
                <div className="pt-4 border-t border-gray-700/50">
                  <div className="text-center">
                    <span className="text-2xl font-bold text-green-400">{testimonial.profit}</span>
                    <p className="text-gray-400 text-sm">Profit in 6 months</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;