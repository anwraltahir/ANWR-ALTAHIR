import React from 'react';
import { Target, Shield, Lightbulb } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          <div className="md:w-1/2">
            <span className="text-qatar-maroon font-bold text-sm tracking-wider mb-2 block">عن المنصة</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              نرسخ الوعي الأمني <br/> لمستقبل رقمي آمن
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              تأسست منصة <span className="font-bold text-slate-800">BeAware.qa</span> استجابة للتطور الرقمي المتسارع الذي تشهده دولة قطر، وما يرافقه من تحديات سيبرانية. نحن نؤمن بأن الإنسان هو خط الدفاع الأول، ولذلك نكرس جهودنا لرفع مستوى الوعي لدى كافة شرائح المجتمع.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              سواء كنت فرداً يستخدم التكنولوجيا في حياته اليومية، أو صاحب شركة يسعى لحماية بيانات عملائه، فإننا نوفر لك المعلومة الموثوقة والأداة الفعالة للتصدي للمخاطر الرقمية.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-qatar-maroon/10 p-2 rounded-lg text-qatar-maroon mt-1">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">رؤيتنا</h4>
                  <p className="text-sm text-slate-500">مجتمع قطري واعٍ رقمياً ومحصن ضد الجرائم الإلكترونية.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-qatar-maroon/10 p-2 rounded-lg text-qatar-maroon mt-1">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">رسالتنا</h4>
                  <p className="text-sm text-slate-500">تبسيط مفاهيم الأمن السيبراني وجعلها في متناول الجميع.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 relative">
            <div className="bg-gradient-to-br from-qatar-maroon to-slate-900 rounded-2xl p-1 shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-500">
              <div className="bg-slate-100 rounded-xl p-8 h-80 flex items-center justify-center flex-col text-center">
                <Shield className="w-20 h-20 text-qatar-maroon mb-4" />
                <h3 className="text-2xl font-bold text-slate-900 mb-2">شريكك في الأمان</h3>
                <p className="text-slate-500">نعمل بالتوافق مع المعايير الوطنية للأمن السيبراني لضمان تقديم محتوى دقيق وموثوق.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;