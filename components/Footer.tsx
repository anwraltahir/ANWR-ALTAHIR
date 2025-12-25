import React from 'react';
import { ShieldCheck, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-reverse space-x-2 mb-4">
              <ShieldCheck className="w-8 h-8 text-qatar-maroon" />
              <span className="text-2xl font-bold text-white">BeAware.qa</span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              المنصة الوطنية الأولى للتوعية بالأمن السيبراني في قطر. نعمل معاً لبناء فضاء رقمي آمن للجميع.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">روابط سريعة</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-qatar-maroon transition-colors">عن المبادرة</a></li>
              <li><a href="#individuals" className="hover:text-qatar-maroon transition-colors">دليل الأفراد</a></li>
              <li><a href="#companies" className="hover:text-qatar-maroon transition-colors">حلول الشركات</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">أرقام هامة</h4>
            <ul className="space-y-2 text-sm">
              <li>الجرائم الإلكترونية: 66825757</li>
              <li>الطوارئ: 999</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">تواصل معنا</h4>
            <div className="flex space-x-reverse space-x-4 mb-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-qatar-maroon hover:text-white transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-qatar-maroon hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-qatar-maroon hover:text-white transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <a href="mailto:info@beaware.qa" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4" /> info@beaware.qa
            </a>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© 2024 BeAware.qa. جميع الحقوق محفوظة.</p>
          <div className="flex space-x-reverse space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">سياسة الخصوصية</a>
            <a href="#" className="hover:text-white">الشروط والأحكام</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;