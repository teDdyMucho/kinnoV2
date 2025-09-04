import { useState, useRef } from 'react';
import { Brain, Shield, Zap } from 'lucide-react';

const Features = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const handlePlayVideo = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  const handleVideoStateChange = () => {
    if (videoRef.current) {
      setIsPlaying(!videoRef.current.paused);
    }
  };
  
  const features = [
    {
      icon: Brain,
      title: "Advanced Trading Algorithms",
      description: "AI-powered strategies analyze thousands of data points per second, adapting instantly to market changes.",
      color: "from-blue-500 to-cyan-400"
    },
    {
      icon: Zap,
      title: "Automated Execution",
      description: "Effortless trading with lightning-fast order execution, removing human error and delivering consistent performance.",
      color: "from-yellow-500 to-orange-400"
    },
    {
      icon: Shield,
      title: "Risk Management Features",
      description: "Implements dynamic stop-loss, take-profit, and drawdown control to protect capital and optimize returns.",
      color: "from-purple-500 to-pink-400"
    }
  ];

  return (
    <section className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Maximize Your Daily
            </span>
            <br />
            <span className="text-white">Returns With AI</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            AI isn't a trend. Institutions are using AI to gain a measurable edge. KinnoBot applies
            the same intelligence to the markets.
          </p>
          
          {/* Video Container */}
          <div className="max-w-4xl mx-auto mb-8 relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/20">
            <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-gray-900 to-blue-900/50">
              <video 
                ref={videoRef}
                className="w-full h-full object-cover" 
                controls 
                poster="/images/thumbnail.png"
                onPlay={handleVideoStateChange}
                onPause={handleVideoStateChange}
                onEnded={() => setIsPlaying(false)}
              >
                <source src="/videos/KinoStory.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            {!isPlaying && (
              <div 
                className="absolute inset-0 flex items-center justify-center cursor-pointer"
                onClick={handlePlayVideo}
              >
                <div className="w-20 h-20 rounded-full bg-blue-500/80 flex items-center justify-center backdrop-blur-sm transition-transform duration-300 transform hover:scale-110">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            )}
          </div>
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

        <div className="flex justify-center mt-12">
        <button className="px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
          Trade Smarter, Not Harder with KinnoBot
        </button>
      </div>
      </div>
      
      
    </section>
  );
};

export default Features;