import { ChevronRight, Bot, TrendingUp, Zap } from 'lucide-react';

const Hero = () => {
  const scrollPlans = () => {
    const plansSection = document.getElementById('plans');
    
    if (plansSection) {
      plansSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToDemo = () => {
    // Find the video demo by ID
    const demoVideo = document.getElementById('demo-video');
    
    if (demoVideo) {
      // Scroll to the demo video with smooth behavior
      demoVideo.scrollIntoView({ behavior: 'smooth', block: 'center' });
      
      // Add a highlight effect to make it obvious where we scrolled to
      const parentContainer = demoVideo.closest('.relative.aspect-video');
      if (parentContainer) {
        parentContainer.classList.add('ring-4', 'ring-cyan-400', 'ring-opacity-70');
        setTimeout(() => {
          parentContainer.classList.remove('ring-4', 'ring-cyan-400', 'ring-opacity-70');
        }, 2000);
      }
      
      // Auto-play the video after scrolling
      setTimeout(() => {
        if (demoVideo instanceof HTMLVideoElement) {
          demoVideo.play()
            .catch(err => console.log('Auto-play prevented:', err));
        }
      }, 800);
    } else {
      // Fallback: If we can't find the video by ID, try to find the Live Trading Demo section
      const demoSection = document.querySelector('.text-xl.font-bold.text-cyan-400');
      if (demoSection && demoSection.textContent?.includes('Live Trading Demo')) {
        demoSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        // Last resort: try to find the Stats section
        const statsSection = document.querySelector('section:nth-of-type(3)');
        if (statsSection) {
          statsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }
  };
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-950 to-black">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%230066FF%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%227%22 cy=%227%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
        
        {/* Floating Particles */}
        <div className="particles">
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
          <div className="particle particle-4"></div>
          <div className="particle particle-5"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className="mb-8 hero-boot">
            <img 
              src="/images/kinnobotlogo.png" 
              alt="KinnoBot Logo" 
              className="w-20 h-20 md:w-24 md:h-24 mx-auto hero-logo" 
            />
          </div>

        <div className="mb-8 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-300 text-sm font-medium backdrop-blur-sm mb-6">
            <Bot className="w-4 h-4 mr-2 animate-pulse" />
            AI-Powered Crypto Trading
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up animation-delay-200">
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Trade Like A PRO
          </span>
          <br />
          <span className="text-white">With Zero Effort!</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
          Start trading with AI in 5 minutes. Plug-and-play on MT5. No experience required.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up animation-delay-600">
          <button 
          onClick={scrollPlans}
          className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 glow-button">
            <span className="flex items-center">
              Start Trading with KinnoBot
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          
          <button 
            onClick={scrollToDemo}
            className="px-8 py-4 border-2 border-blue-400/50 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-blue-500/10 hover:border-blue-400"
          >
            Watch How It Works
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in-up animation-delay-800">
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <TrendingUp className="w-6 h-6 text-green-400 mr-2" />
              <span className="text-3xl font-bold text-green-400">+347%</span>
            </div>
            <p className="text-gray-400">Average Annual Returns</p>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Zap className="w-6 h-6 text-blue-400 mr-2" />
              <span className="text-3xl font-bold text-blue-400">24/7</span>
            </div>
            <p className="text-gray-400">Support</p>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Bot className="w-6 h-6 text-purple-400 mr-2" />
              <span className="text-3xl font-bold text-purple-400">15K+</span>
            </div>
            <p className="text-gray-400">Active Users</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-blue-400/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;