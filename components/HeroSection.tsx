import React from 'react';
import { UserType } from '../types';

interface HeroSectionProps {
  activeTab: UserType;
  setActiveTab: (tab: UserType) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop")', // Global Network/Tech Image - Earth from space
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      {/* Overlay Layer for Readability - Reduced opacity to show image */}
      <div className="absolute inset-0 bg-slate-900/60 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent z-0"></div>

      {/* Decorative Network Grid Pattern on top of image */}
      <div className="absolute inset-0 z-0 opacity-10" style={{ 
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
          backgroundSize: '50px 50px' 
      }}></div>

      <div className="container mx-auto px-4 py-20 relative z-10 flex flex-col items-center text-center">
        <span className="inline-block py-1 px-3 rounded-full bg-slate-800/80 border border-slate-600 text-cyan-400 text-sm font-medium mb-6 backdrop-blur-md">
          الأمن السيبراني مسؤولية الجميع
        </span>
        
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
          نحو مجتمع رقمي <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">آمن وواعي</span>
        </h2>
        
        <p className="text-lg md:text-xl text-slate-100 max-w-2xl mb-10 leading-relaxed drop-shadow-md font-medium">
          منصة BeAware.qa تقدم لك الأدوات والمعرفة اللازمة لحماية نفسك ومؤسستك من الجرائم الإلكترونية والاحتيال المالي في قطر.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-lg mx-auto p-2 bg-slate-800/60 rounded-2xl backdrop-blur-md border border-slate-600/50 shadow-2xl">
          <button 
            onClick={() => setActiveTab('individual')}
            className={`flex-1 py-3 px-6 rounded-xl font-bold transition-all duration-300 ${
              activeTab === 'individual' 
                ? 'bg-qatar-maroon text-white shadow-lg scale-105 ring-2 ring-qatar-light/50' 
                : 'text-slate-300 hover:text-white hover:bg-white/10'
            }`}
          >
            بوابة الأفراد
          </button>
          <button 
            onClick={() => setActiveTab('company')}
            className={`flex-1 py-3 px-6 rounded-xl font-bold transition-all duration-300 ${
              activeTab === 'company' 
                ? 'bg-blue-600 text-white shadow-lg scale-105 ring-2 ring-blue-400/50' 
                : 'text-slate-300 hover:text-white hover:bg-white/10'
            }`}
          >
            بوابة الشركات
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;