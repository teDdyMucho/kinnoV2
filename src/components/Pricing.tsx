import { useState, useEffect } from 'react';
import { Check, Star, Crown, Rocket, Clock, AlertCircle, X, ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';

const Pricing = () => {
  // State for countdown timer
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 12,
    minutes: 45,
    seconds: 0
  });

  // State for feature comparison toggle
  const [showComparison, setShowComparison] = useState(true);

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime.seconds > 0) {
          return { ...prevTime, seconds: prevTime.seconds - 1 };
        } else if (prevTime.minutes > 0) {
          return { ...prevTime, minutes: prevTime.minutes - 1, seconds: 59 };
        } else if (prevTime.hours > 0) {
          return { ...prevTime, hours: prevTime.hours - 1, minutes: 59, seconds: 59 };
        } else if (prevTime.days > 0) {
          return { ...prevTime, days: prevTime.days - 1, hours: 23, minutes: 59, seconds: 59 };
        } else {
          return prevTime; // Timer expired
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const plans = [
    {
      name: "Basic",
      icon: Star,
      price: "$287",
      period: "/month",
      description: "Perfect for beginners starting with AI trading",
      features: [
        "KinnoBot Trading AI",
        "Install Guide (docs + videos)",
        "Default Settings"
      ],
      popular: false,
      gradient: "from-gray-600 to-gray-700",
      hoverGradient: "hover:from-gray-500 hover:to-gray-600",
      cta: "Get Started"
    },
    {
      name: "Pro",
      icon: Crown,
      price: "$897",
      period: "/year",
      description: "Best value for serious traders",
      features: [
        "KinnoBot Trading AI",
        "Install Guide (docs + videos)",
        "Default Settings",
        "1-on-1 Set Up Call",
        "Kinno's Setting Updates",
        "Future Bot Upgrades",
        "Priority Support"
      ],
      popular: true,
      gradient: "from-blue-600 to-cyan-500",
      hoverGradient: "hover:from-blue-500 hover:to-cyan-400",
      bonus: "Limited Time: Free Strategy Guide ($197 value)",
      savings: "Save 74% vs monthly",
      cta: "Upgrade Now"
    },
    {
      name: "Elite",
      icon: Rocket,
      price: "Talk ",
      period: "With Us!",
      description: "Maximum performance for institutional traders",
      features: [
        "KinnoBot Trading AI",
        "Install Guide (docs + videos)",
        "Default Settings",
        "1-on-1 Set Up Call",
        "Kinno's Setting Updates",
        "Future Bot Upgrades",
        "Priority Support",
        "Private Discord Access",
        "Weekly Coaching Calls",
        "Private Investor Network"
      ],
      popular: false,
      gradient: "from-purple-600 to-pink-500",
      hoverGradient: "hover:from-purple-500 hover:to-pink-400",
      cta: "Contact Us"
    }
  ];
  
  // Feature comparison data
  const comparisonFeatures = [
    { name: "KinnoBot Trading AI", basic: true, pro: true, elite: true },
    { name: "Install Guide (docs + videos)", basic: true, pro: true, elite: true },
    { name: "Default Settings", basic: true, pro: true, elite: true },
    { name: "1-on-1 Set Up Call", basic: false, pro: true, elite: true },
    { name: "Kinno's Setting Updates", basic: false, pro: true, elite: true },
    { name: "Future Bot Upgrades", basic: false, pro: true, elite: true },
    { name: "Priority Support", basic: false, pro: true, elite: true },
    { name: "Private Discord Access", basic: false, pro: false, elite: true },
    { name: "Weekly Coaching Calls", basic: false, pro: false, elite: true },
    { name: "Private Investor Network", basic: false, pro: false, elite: true }
  ];

  return (
    <section className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 to-black"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/5 rounded-full filter blur-3xl animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-500/5 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-purple-500/5 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Choose Your</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Trading Power
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
            Select the perfect plan to unleash the full potential of AI-driven crypto trading.
          </p>
          
          {/* Urgency Banner */}
          <div className="bg-gradient-to-r from-amber-600/80 to-red-600/80 p-4 rounded-xl max-w-3xl mx-auto mb-8 shadow-lg shadow-amber-500/20 animate-pulse">
            <div className="flex items-center justify-center space-x-3">
              <Clock className="w-6 h-6 text-white" />
              <p className="text-white font-bold">
                Special Launch Pricing Ends In: {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
              </p>
            </div>
          </div>
          
          {/* Bonus Alert */}
          <div className="bg-gradient-to-r from-green-600/30 to-emerald-600/30 p-4 rounded-xl max-w-3xl mx-auto border border-green-500/30">
            <div className="flex items-center justify-center space-x-3">
              <AlertCircle className="w-6 h-6 text-green-400" />
              <p className="text-green-400 font-medium">
                Limited Time: Sign up today and receive our AI Trading Strategy Guide ($197 value) FREE!
              </p>
            </div>
          </div>
        </div>

        <div id="plans" className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
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
                
                <div className="mb-4">
                  <span className="text-5xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400 text-lg">{plan.period}</span>
                </div>
                
                {plan.savings && (
                  <div className="mb-6 py-2 px-4 bg-green-500/20 rounded-lg border border-green-500/30">
                    <p className="text-green-400 font-medium text-center">{plan.savings}</p>
                  </div>
                )}
                
                {plan.bonus && (
                  <div className="mb-6 py-2 px-4 bg-amber-500/20 rounded-lg border border-amber-500/30">
                    <p className="text-amber-400 font-medium text-center text-sm">{plan.bonus}</p>
                  </div>
                )}
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:shadow-2xl hover:shadow-blue-500/25 animate-pulse-slow'
                    : plan.name === "Elite" 
                      ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white hover:shadow-2xl hover:shadow-purple-500/25'
                      : 'bg-gray-800 text-white hover:bg-gray-700 border border-gray-600 hover:border-blue-500'
                }`}>
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Comparison Toggle Button */}
        <div className="text-center mb-8">
          <button 
            onClick={() => setShowComparison(!showComparison)}
            className="flex items-center justify-center space-x-2 mx-auto py-3 px-6 bg-gray-800/80 hover:bg-gray-700/80 rounded-xl border border-gray-700/50 transition-all duration-300"
          >
            <span className="text-white font-medium">Feature Comparison</span>
            {showComparison ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
          </button>
        </div>
        
        {/* Feature Comparison Chart */}
        {showComparison && (
          <div className="mb-16 overflow-x-auto">
            <div className="min-w-[768px]">
              <div className="grid grid-cols-4 gap-4 p-4 rounded-t-xl bg-gray-900/50 border-b border-gray-700/50">
                <div className="text-gray-300 font-medium">Feature</div>
                <div className="text-center text-gray-300 font-medium">Basic</div>
                <div className="text-center text-cyan-400 font-medium">Pro</div>
                <div className="text-center text-purple-400 font-medium">Elite</div>
              </div>
              
              {comparisonFeatures.map((feature, index) => (
                <div 
                  key={index} 
                  className={`grid grid-cols-4 gap-4 p-4 ${index % 2 === 0 ? 'bg-gray-800/30' : 'bg-gray-900/30'}`}
                >
                  <div className="text-gray-300">{feature.name}</div>
                  <div className="flex justify-center">
                    {feature.basic ? 
                      <Check className="w-5 h-5 text-green-400" /> : 
                      <X className="w-5 h-5 text-gray-600" />}
                  </div>
                  <div className="flex justify-center">
                    {feature.pro ? 
                      <Check className="w-5 h-5 text-green-400" /> : 
                      <X className="w-5 h-5 text-gray-600" />}
                  </div>
                  <div className="flex justify-center">
                    {feature.elite ? 
                      <Check className="w-5 h-5 text-green-400" /> : 
                      <X className="w-5 h-5 text-gray-600" />}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Final CTA Section */}
        <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/10 rounded-2xl p-8 border border-blue-500/20 shadow-lg shadow-blue-500/5 mb-12">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">Ready to Transform Your Trading?</h3>
            <p className="text-gray-300">Join thousands of traders already using KinnoBot to maximize their returns</p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
            <button className="py-4 px-8 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 animate-pulse-slow">
              Upgrade to Pro Now
            </button>
            
            <button className="flex items-center justify-center space-x-2 py-4 px-8 bg-gray-800 rounded-xl text-white font-semibold border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
              <MessageCircle className="w-5 h-5" />
              <span>Schedule a Demo</span>
            </button>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-gray-400 mb-4">All plans include 30-day money-back guarantee</p>
          <p className="text-sm text-gray-500">No setup fees • Cancel anytime • Secure payments • 24/7 support</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;