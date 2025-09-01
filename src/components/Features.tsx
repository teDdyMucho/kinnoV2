import React from 'react';
import { Brain, Shield, BarChart3, Zap, Target, Clock } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "Advanced AI Algorithm",
      description: "Machine learning models trained on years of market data to identify optimal trading opportunities.",
      color: "from-blue-500 to-cyan-400"
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Sophisticated risk control systems that protect your capital with stop-losses and position sizing.",
      color: "from-purple-500 to-pink-400"
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description: "Advanced charting and analytics tools that provide deep insights into market movements.",
      color: "from-green-500 to-emerald-400"
    },
    {
      icon: Zap,
      title: "Lightning Fast Execution",
      description: "Ultra-low latency trading execution that captures opportunities in milliseconds.",
      color: "from-yellow-500 to-orange-400"
    },
    {
      icon: Target,
      title: "Precision Trading",
      description: "Highly accurate entry and exit points based on technical analysis and market sentiment.",
      color: "from-red-500 to-rose-400"
    },
    {
      icon: Clock,
      title: "24/7 Operation",
      description: "Never miss a trading opportunity with round-the-clock automated monitoring and execution.",
      color: "from-indigo-500 to-blue-400"
    }
  ];

  return (
    <section className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Cutting-Edge
            </span>
            <br />
            <span className="text-white">AI Technology</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our AI trading bot leverages advanced machine learning algorithms to analyze market patterns 
            and execute profitable trades with unprecedented accuracy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className={`relative z-10 w-14 h-14 rounded-xl bg-gradient-to-r ${feature.color} p-3 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                {feature.description}
              </p>
              
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;