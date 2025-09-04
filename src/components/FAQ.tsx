import React, { useState, useRef } from 'react';
import { ChevronDown, ChevronUp, Play, MessageCircle, Calendar } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  videoSrc: string;
}

const FAQ = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState<Record<string, boolean>>({});
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});

  const faqItems: FAQItem[] = [
    {
      id: 'trading-experience',
      question: 'Do I need trading experience to use KinnoBot?',
      videoSrc: '/videos/faqA1.mp4'
    },
    {
      id: 'brokers',
      question: 'Does the KinnoBot work on any brokers?',
      videoSrc: '/videos/faqA1.mp4'
    },
    {
      id: 'setup',
      question: 'How hard is it to set up?',
      videoSrc: '/videos/faqA1.mp4'
    }
  ];

  const toggleItem = (id: string) => {
    setActiveItem(prevId => prevId === id ? null : id);
    
    // Pause all videos when toggling items
    Object.keys(isPlaying).forEach(videoId => {
      if (isPlaying[videoId] && videoRefs.current[videoId]) {
        videoRefs.current[videoId]?.pause();
        setIsPlaying(prev => ({ ...prev, [videoId]: false }));
      }
    });
  };

  const togglePlayPause = (id: string, event: React.MouseEvent) => {
    event.stopPropagation();
    
    const video = videoRefs.current[id];
    if (!video) return;
    
    if (isPlaying[id]) {
      video.pause();
      setIsPlaying(prev => ({ ...prev, [id]: false }));
    } else {
      // Pause all other videos first
      Object.keys(isPlaying).forEach(videoId => {
        if (videoId !== id && isPlaying[videoId] && videoRefs.current[videoId]) {
          videoRefs.current[videoId]?.pause();
          setIsPlaying(prev => ({ ...prev, [videoId]: false }));
        }
      });
      
      // Play the selected video
      video.play().catch(error => {
        console.error("Error playing video:", error);
      });
      setIsPlaying(prev => ({ ...prev, [id]: true }));
    }
  };

  const handleVideoClick = (id: string, event: React.MouseEvent) => {
    event.stopPropagation();
    togglePlayPause(id, event);
  };

  const handleVideoEnded = (id: string) => {
    setIsPlaying(prev => ({ ...prev, [id]: false }));
  };

  return (
    <section className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-blue-950/20"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-40 right-20 w-72 h-72 bg-blue-500/5 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
      <div className="absolute bottom-40 left-20 w-64 h-64 bg-cyan-500/5 rounded-full filter blur-3xl animate-blob"></div>
      
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Frequently Asked</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get answers to the most common questions about KinnoBot
          </p>
        </div>
        
        <div className="space-y-6">
          {faqItems.map((item) => (
            <div 
              key={item.id}
              className={`rounded-2xl transition-all duration-500 overflow-hidden ${
                activeItem === item.id 
                  ? 'bg-gradient-to-br from-blue-900/50 to-cyan-900/30 border border-blue-500/50 shadow-lg shadow-blue-500/10' 
                  : 'bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 hover:border-blue-500/30'
              }`}
            >
              <div 
                className="flex justify-between items-center p-6 cursor-pointer"
                onClick={() => toggleItem(item.id)}
              >
                <h3 className="text-xl font-semibold text-white">{item.question}</h3>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                  activeItem === item.id ? 'bg-blue-500' : 'bg-gray-700'
                }`}>
                  {activeItem === item.id ? (
                    <ChevronUp className="w-5 h-5 text-white" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-white" />
                  )}
                </div>
              </div>
              
              {activeItem === item.id && (
                <div className="px-6 pb-6 animate-fade-in-up">
                  <div className="relative aspect-w-16 aspect-h-9 rounded-xl overflow-hidden bg-gray-900 group">
                    <video
                      ref={el => videoRefs.current[item.id] = el}
                      src={item.videoSrc}
                      className="w-full h-full object-cover"
                      onClick={(e) => handleVideoClick(item.id, e)}
                      onEnded={() => handleVideoEnded(item.id)}
                    />
                    
                    {!isPlaying[item.id] && (
                      <div 
                        className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/50 transition-all duration-300"
                        onClick={(e) => togglePlayPause(item.id, e)}
                      >
                        <div className="w-16 h-16 rounded-full bg-blue-500/80 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Play className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="mt-20 mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Have More Questions?
            </span>
          </h2>
          
          <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden border border-blue-500/30 bg-gradient-to-br from-gray-900/80 to-blue-950/50 backdrop-blur-sm shadow-2xl shadow-blue-500/10">
            <div className="p-10 md:p-12">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center mb-6">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
                
                <p className="text-gray-300 mb-8 max-w-lg">
                  Apply for a 30-Minute Call with Our Team to Learn More About KinnoBot
                </p>
                
                <button className="flex items-center justify-center space-x-2 py-4 px-8 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 group">
                  <Calendar className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                  <span>Schedule Your Call</span>
                </button>
                
                <p className="text-gray-500 text-sm mt-6">
                  30-minute consultation • No obligations • Expert guidance
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
