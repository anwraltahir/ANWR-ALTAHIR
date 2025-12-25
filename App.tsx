import React, { useState } from 'react';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import InfoGrid from './components/InfoGrid';
import ChatAssistant from './components/ChatAssistant';
import Footer from './components/Footer';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import { UserType } from './types';
import { COMPANY_CARDS, INDIVIDUAL_CARDS } from './constants';
import { ShieldAlert, CheckCircle2 } from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<UserType>('individual');

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 flex flex-col">
      <NavBar />
      
      <main className="flex-grow">
        <HeroSection activeTab={activeTab} setActiveTab={setActiveTab} />
        
        {/* Quick Stats/Alert Banner */}
        <div className="bg-qatar-maroon text-white py-3 overflow-hidden relative">
          <div className="container mx-auto px-4 flex items-center justify-center gap-2 animate-pulse">
            <ShieldAlert className="w-5 h-5" />
            <span className="font-bold text-sm md:text-base">
              تنبيه: لاحظنا ازدياد حملات التصيد عبر الواتساب. لا تشارك رمز التحقق مع أحد!
            </span>
          </div>
        </div>
        
        <AboutSection />

        <div id={activeTab === 'individual' ? 'individuals' : 'companies'}>
          <InfoGrid 
            type={activeTab} 
            cards={activeTab === 'individual' ? INDIVIDUAL_CARDS : COMPANY_CARDS} 
          />
        </div>

        {/* Call to Action Section */}
        <div className="bg-slate-900 py-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-qatar-maroon/10 rounded-full blur-3xl -ml-32 -mb-32 pointer-events-none"></div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              هل أنت مستعد لتأمين {activeTab === 'individual' ? 'حساباتك' : 'شركتك'}؟
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto mb-10 text-lg">
              {activeTab === 'individual' 
                ? 'ابدأ الآن بتفعيل التحقق بخطوتين وتحديث كلمات المرور الخاصة بك. الوقاية خير من العلاج.'
                : 'احجز استشارة مجانية لتقييم المخاطر الأمنية في مؤسستك وتعرف على أحدث حلول الحماية.'}
            </p>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 px-10 rounded-full shadow-lg shadow-cyan-500/20 transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 mx-auto">
              <CheckCircle2 className="w-5 h-5" />
              {activeTab === 'individual' ? 'تحميل دليل الحماية' : 'طلب تقييم أمني'}
            </button>
          </div>
        </div>

        <ContactSection />
      </main>

      <ChatAssistant />
      <Footer />
    </div>
  );
};

export default App;