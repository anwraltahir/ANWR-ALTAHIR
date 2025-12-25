import React from 'react';
import { Phone, Mail, Send } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-slate-50 relative border-t border-slate-200">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-blue-600 font-bold text-sm tracking-wider mb-2 block">تواصل معنا</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            نحن هنا لمساعدتك
          </h2>
          <p className="text-slate-500">
            لديك استفسار حول أمنك الرقمي؟ أو ترغب في الإبلاغ عن محاولة احتيال؟ لا تتردد في التواصل معنا.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 lg:col-span-1">
            <h3 className="text-xl font-bold text-slate-900 mb-6">معلومات الاتصال</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">الجرائم الإلكترونية</h4>
                  <p className="text-qatar-maroon font-bold text-lg ltr">66825757</p>
                  <p className="text-xs text-slate-400">متاح 24/7 للطوارئ</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">البريد الإلكتروني</h4>
                  <p className="text-slate-600 ltr">info@beaware.qa</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 lg:col-span-2">
            <h3 className="text-xl font-bold text-slate-900 mb-6">نموذج التواصل</h3>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">الاسم الكامل</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" placeholder="محمد أحمد" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">البريد الإلكتروني</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" placeholder="example@email.com" />
              </div>

              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-medium text-slate-700">نوع الاستفسار</label>
                <select className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all">
                  <option>بلاغ عن احتيال</option>
                  <option>استشارة للشركات</option>
                  <option>طلب ورشة توعوية</option>
                  <option>استفسار عام</option>
                </select>
              </div>

              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-medium text-slate-700">الرسالة</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" placeholder="اكتب تفاصيل استفسارك هنا..."></textarea>
              </div>

              <div className="md:col-span-2">
                <button type="button" className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" />
                  إرسال الرسالة
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;