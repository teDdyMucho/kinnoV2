import React from 'react';
import { Check, Star, Crown, Rocket } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      icon: Star,
      price: "$99",
      period: "/month",
      description: "Perfect for beginners entering crypto trading",
      features: [
        "Basic AI Trading Bot",
        "5 Cryptocurrency Pairs",
        "24/7 Trading",
        "Email Support",
        "Basic Analytics Dashboard",
        "Mobile App Access"
      ],
      popular: false,
      gradient: "from-gray-600 to-gray-700",
      hoverGradient: "hover:from-gray-500 hover:to-gray-600"
    },
    {
      name: "Professional",
      icon: Crown,
      price: "$249",
      period: "/month",
      description: "Advanced features for serious traders",
      features: [
        "Advanced AI Trading Bot",
        "50+ Cryptocurrency Pairs",
        "Custom Trading Strategies",
        "Priority Support",
        "Advanced Analytics & Reports",
        "API Access",
        "Portfolio Optimization",
        "Risk Management Tools"
      ],
      popular: true,
      gradient: "from-blue-600 to-cyan-500",
      hoverGradient: "hover:from-blue-500 hover:to-cyan-400"
    },
    {
      name: "Enterprise",
      icon: Rocket,
      price: "$599",
      period: "/month",
      description: "Maximum performance for institutional traders",
      features: [
        "Premium AI Trading Bot",
        "Unlimited Cryptocurrency Pairs",
        "Custom Algorithm Development",
        "Dedicated Account Manager",
        "Real-time Data Feeds",
        "White-label Solutions",
        "Advanced Risk Controls",
        "Institutional Grade Security",
        "Custom Integrations"
      ],
      popular: false,
      gradient: "from-purple-600 to-pink-500",
      hoverGradient: "hover:from-purple-500 hover:to-pink-400"
    }
  ];

  return (
    <section className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 to-black"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Choose Your</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Trading Power
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Select the perfect plan to unleash the full potential of AI-driven crypto trading.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-3xl backdrop-blur-sm border transition-all duration-500 hover:scale-105 ${
                plan.popular 
                  ? 'bg-gradient-to-br from-blue-900/50 to-cyan-900/30 border-blue-500/50 shadow-2xl shadow-blue-500/20' 
                  : 'bg-gradient-to-br from-gray-900/50 to-gray-800/30 border-gray-700/50 hover:border-blue-500/30'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full text-white font-semibold text-sm shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${plan.gradient} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <plan.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                
                <div className="mb-8">
                  <span className="text-5xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400 text-lg">{plan.period}</span>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:shadow-2xl hover:shadow-blue-500/25 glow-button'
                    : 'bg-gray-800 text-white hover:bg-gray-700 border border-gray-600 hover:border-blue-500'
                }`}>
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-400 mb-4">All plans include 14-day money-back guarantee</p>
          <p className="text-sm text-gray-500">No setup fees • Cancel anytime • Secure payments</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;