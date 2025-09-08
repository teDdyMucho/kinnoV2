import { useState, useRef } from 'react';
import { CreditCard, Settings, BarChart, LineChart, BarChart2, Activity, Play } from 'lucide-react';

const Stats = () => {
  // Video player state
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Video player controls
  const handlePlayVideo = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play()
          .then(() => setIsPlaying(true))
          .catch(error => console.error("Error playing video:", error));
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const handleVideoStateChange = () => {
    if (videoRef.current) {
      setIsPlaying(!videoRef.current.paused);
    }
  };

  const steps = [
    {
      icon: CreditCard,
      title: "1. Download & Install",
      description: "Download KinnoBot and install it on your MT5 platform in just a few clicks",
      features: ["Compatible with all MT5 versions", "Simple drag & drop installation", "Works on Windows & Mac"]
    },
    {
      icon: Settings,
      title: "2. Configure Bot",
      description: "Set your risk parameters and trading preferences with our intuitive interface",
      features: ["Customize risk per trade", "Choose trading pairs", "Set trading hours"]
    },
    {
      icon: BarChart,
      title: "3. Activate Trading",
      description: "Turn on KinnoBot and let AI-powered algorithms start trading for you",
      features: ["One-click activation", "24/5 automated trading", "Smart risk management"]
    },
    {
      icon: LineChart,
      title: "4. Monitor Results",
      description: "Track your performance and watch your account grow with real-time analytics",
      features: ["Real-time trade tracking", "Performance analytics", "Exportable reports"]
    }
  ];

  return (
    <section className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0d1324]/10 to-black"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">How </span>
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              KinnoBot
            </span>
            <span className="text-white"> Works</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get started in minutes with our simple setup process and let AI handle your trades
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-xl bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative z-10">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 mb-4">
                  <step.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">
                  {step.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4">
                  {step.description}
                </p>
                
                <ul className="space-y-2">
                  {step.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="mr-2 mt-1">
                        <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Live Trading Chart Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Performance Metrics */}
          <div className="relative p-6 rounded-xl bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-sm border border-gray-700/50">
            <div className="flex items-center mb-4">
              <BarChart2 className="w-5 h-5 text-cyan-400 mr-2" />
              <h3 className="text-xl font-bold text-cyan-400">Performance Metrics</h3>
            </div>
            
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-300">Monthly Returns</span>
                <span className="text-green-400 font-bold">+8.2% Avg</span>
              </div>
              
              {/* Chart placeholder */}
              <div className="h-32 bg-gray-800/50 rounded-lg mb-4 relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-full h-full flex items-end">
                  <div className="w-1/12 h-10% bg-cyan-500/50 mx-px"></div>
                  <div className="w-1/12 h-20% bg-cyan-500/50 mx-px"></div>
                  <div className="w-1/12 h-15% bg-cyan-500/50 mx-px"></div>
                  <div className="w-1/12 h-25% bg-cyan-500/50 mx-px"></div>
                  <div className="w-1/12 h-18% bg-cyan-500/50 mx-px"></div>
                  <div className="w-1/12 h-30% bg-cyan-500/50 mx-px"></div>
                  <div className="w-1/12 h-22% bg-cyan-500/50 mx-px"></div>
                  <div className="w-1/12 h-28% bg-cyan-500/50 mx-px"></div>
                  <div className="w-1/12 h-15% bg-cyan-500/50 mx-px"></div>
                  <div className="w-1/12 h-20% bg-cyan-500/50 mx-px"></div>
                  <div className="w-1/12 h-35% bg-cyan-500/50 mx-px"></div>
                  <div className="w-1/12 h-25% bg-cyan-500/50 mx-px"></div>
                </div>
                <div className="absolute bottom-0 left-0 w-full flex justify-between text-xs text-gray-500 px-1">
                  <span>Jan</span>
                  <span>Feb</span>
                  <span>Mar</span>
                  <span>Apr</span>
                  <span>May</span>
                  <span>Jun</span>
                  <span>Jul</span>
                  <span>Aug</span>
                  <span>Sep</span>
                  <span>Oct</span>
                  <span>Nov</span>
                  <span>Dec</span>
                </div>
                <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500 py-1">
                  <span>10%</span>
                  <span>7.5%</span>
                  <span>5%</span>
                  <span>2.5%</span>
                  <span>0%</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-gray-800/50 p-3 rounded-lg">
                <div className="text-gray-400 text-sm mb-1">Win Rate</div>
                <div className="text-cyan-400 text-2xl font-bold">78.4%</div>
              </div>
              <div className="bg-gray-800/50 p-3 rounded-lg">
                <div className="text-gray-400 text-sm mb-1">Profit Factor</div>
                <div className="text-cyan-400 text-2xl font-bold">2.7</div>
              </div>
              <div className="bg-gray-800/50 p-3 rounded-lg">
                <div className="text-gray-400 text-sm mb-1">Max Drawdown</div>
                <div className="text-green-400 text-2xl font-bold">3.2%</div>
              </div>
              <div className="bg-gray-800/50 p-3 rounded-lg">
                <div className="text-gray-400 text-sm mb-1">Avg Trade Time</div>
                <div className="text-cyan-400 text-2xl font-bold">4.2 hrs</div>
              </div>
            </div>
            
            <div className="text-xs text-gray-500 italic">
              *Performance data based on live trading from Jan-Dec 2024. Past performance does not guarantee future results.
            </div>
          </div>
          
          {/* Live Trading Demo */}
          <div className="relative p-6 rounded-xl bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-sm border border-gray-700/50">
            <div className="flex items-center mb-4">
              <Activity className="w-5 h-5 text-cyan-400 mr-2" />
              <h3 className="text-xl font-bold text-cyan-400">Live Trading Demo</h3>
            </div>
            
            <div className="relative aspect-video mb-6 bg-black rounded-lg overflow-hidden border border-gray-700/50">
              {/* Video Player */}
              <div className="relative w-full h-full">
                <video
                  id="demo-video"
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  poster="/images/thumbnail.png"
                  onPlay={handleVideoStateChange}
                  onPause={handleVideoStateChange}
                  onEnded={() => setIsPlaying(false)}
                  onClick={handlePlayVideo}
                >
                  <source src="/videos/DemoKinno.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* KinnoBot Logo Overlay - Only shown when video is not playing */}
                {!isPlaying && (
                  <img 
                    src="/images/kinnobotlogo.png" 
                    alt="KinnoBot Logo" 
                    className="absolute top-2 right-2 w-24 h-auto z-10"
                  />
                )}
                
                {/* Play Button Overlay */}
                {!isPlaying && (
                  <div 
                    className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer z-20"
                    onClick={handlePlayVideo}
                  >
                    <div className="w-16 h-16 rounded-full bg-cyan-500/80 flex items-center justify-center">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <div className="mr-2 mt-1">
                  <div className="w-3 h-3 rounded-full bg-cyan-400"></div>
                </div>
                <span className="text-gray-300 text-sm">See how KinnoBot analyzes market conditions in real-time</span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1">
                  <div className="w-3 h-3 rounded-full bg-cyan-400"></div>
                </div>
                <span className="text-gray-300 text-sm">Watch automated trade entries and exits with precision timing</span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1">
                  <div className="w-3 h-3 rounded-full bg-cyan-400"></div>
                </div>
                <span className="text-gray-300 text-sm">Discover how the AI adapts to changing market conditions</span>
              </li>
            </ul>
            
            <button className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium transition-all duration-300 transform hover:scale-105">
              Watch Full Demo
            </button>
          </div>
        </div>
        
        <div className="text-center mb-12">
          <p className="text-xl text-gray-300 mb-6">Ready to experience these results yourself? Get KinnoBot today.</p>
          <button className="py-3 px-8 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium transition-all duration-300 transform hover:scale-105">
            Get KinnoBot Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Stats;