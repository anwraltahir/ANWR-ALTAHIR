import React from 'react';
import { ShieldCheck, Menu } from 'lucide-react';

const NavBar: React.FC = () => {
  return (
    <nav className="bg-slate-900 text-white shadow-lg sticky top-0 z-50 backdrop-blur-md bg-opacity-90 border-b border-slate-700">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-reverse space-x-3">
          <ShieldCheck className="w-8 h-8 text-cyan-400" />
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-white">
              BeAware
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">.qa</span>
            </h1>
            <p className="text-xs text-slate-400">منصة التوعية الرقمية القطرية</p>
          </div>
        </div>
        
        <div className="hidden md:flex items-center space-x-reverse space-x-6">
          <a href="#" className="hover:text-cyan-400 transition-colors">الرئيسية</a>
          <a href="#about" className="hover:text-cyan-400 transition-colors">عن المنصة</a>
          <a href="#individuals" className="hover:text-cyan-400 transition-colors">الأفراد</a>
          <a href="#companies" className="hover:text-cyan-400 transition-colors">الشركات</a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors">اتصل بنا</a>
        </div>

        <button className="md:hidden p-2">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;