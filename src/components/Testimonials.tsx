import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  // Testimonial screenshots from the public directory
  const allTestimonialScreenshots = [
    { id: 1, src: '/images/Testimonials/proof1.jpeg', alt: 'Trading success screenshot 1' },
    { id: 2, src: '/images/Testimonials/proof2.jpeg', alt: 'Trading success screenshot 2' },
    { id: 3, src: '/images/Testimonials/proof3.jpeg', alt: 'Trading success screenshot 3' },
    { id: 4, src: '/images/Testimonials/proof4.jpeg', alt: 'Trading success screenshot 4' },
    { id: 5, src: '/images/Testimonials/proof5.jpeg', alt: 'Trading success screenshot 5' },
    { id: 6, src: '/images/Testimonials/proof6.jpeg', alt: 'Trading success screenshot 6' }
  ];
  
  // Limit to only 4 testimonials for display
  const testimonialScreenshots = allTestimonialScreenshots.slice(0, 4);
  
  // State for the carousel
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentIndex]);
  
  // No need for getVisibleItems function as we're showing one item at a time
  
  // Navigation functions
  const nextSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => {
      // Only move within the 4 visible testimonials
      return (prevIndex + 1) % testimonialScreenshots.length;
    });
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };
  
  const prevSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => {
      // Only move within the 4 visible testimonials
      return prevIndex === 0 ? testimonialScreenshots.length - 1 : prevIndex - 1;
    });
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background gradients and effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0d1324]/10 to-black"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-40 right-20 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
      <div className="absolute bottom-40 left-20 w-80 h-80 bg-cyan-500/5 rounded-full filter blur-3xl animate-blob"></div>
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-purple-500/5 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
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
        
        {/* Testimonial Screenshots Carousel */}
        <div className="relative mb-16 max-w-4xl mx-auto">
          {/* Navigation buttons */}
          <button 
            onClick={prevSlide} 
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-blue-500/80 hover:bg-blue-500 text-white rounded-full p-1.5 -ml-3 shadow-lg shadow-blue-500/20 transition-all duration-300 hover:scale-110"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button 
            onClick={nextSlide} 
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-blue-500/80 hover:bg-blue-500 text-white rounded-full p-1.5 -mr-3 shadow-lg shadow-blue-500/20 transition-all duration-300 hover:scale-110"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          
          {/* Carousel container */}
          <div className="relative overflow-hidden rounded-xl bg-[#1A1A1A] border border-gray-700/50 p-3">
            <div 
              className={`flex transition-transform duration-500 ease-in-out ${isAnimating ? 'opacity-80' : 'opacity-100'}`}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonialScreenshots.map((item) => (
                <div 
                  key={item.id} 
                  className="w-full flex-shrink-0 p-2 transform transition-all duration-500 hover:scale-[1.02]"
                >
                  <div className="h-full rounded-lg overflow-hidden border border-gray-700/50 bg-[#1A1A1A]">
                    <div className="relative">
                      <img 
                        src={item.src} 
                        alt={item.alt} 
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Pagination dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonialScreenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAnimating(true);
                  setCurrentIndex(index);
                  setTimeout(() => setIsAnimating(false), 500);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-blue-500 w-6' : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;