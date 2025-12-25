import React from 'react';
import { InfoCardData, UserType } from '../types';
import { ArrowLeft } from 'lucide-react';

interface InfoGridProps {
  cards: InfoCardData[];
  type: UserType;
}

const InfoGrid: React.FC<InfoGridProps> = ({ cards, type }) => {
  const isIndividual = type === 'individual';
  const themeColor = isIndividual ? 'text-qatar-maroon' : 'text-blue-600';
  const bgHover = isIndividual ? 'hover:border-qatar-maroon/30' : 'hover:border-blue-500/30';
  const iconBg = isIndividual ? 'bg-qatar-maroon/10 text-qatar-maroon' : 'bg-blue-500/10 text-blue-600';

  return (
    <div className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12 text-center">
          <h3 className={`text-3xl font-bold mb-4 text-slate-900`}>
            {isIndividual ? 'دليل الحماية الشخصية' : 'دليل أمن المؤسسات'}
          </h3>
          <p className="text-slate-600 max-w-2xl">
            {isIndividual 
              ? 'تعرف على أحدث أساليب الاحتيال وكيفية حماية بياناتك الشخصية والمالية.' 
              : 'أفضل الممارسات والمعايير لحماية البنية التحتية الرقمية لشركتك.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div 
                key={card.id} 
                className={`group bg-white p-8 rounded-2xl shadow-sm border border-slate-100 transition-all duration-300 ${bgHover} hover:shadow-lg hover:-translate-y-1`}
              >
                <div className={`w-14 h-14 rounded-xl ${iconBg} flex items-center justify-center mb-6`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-slate-900">
                  {card.title}
                </h4>
                <p className="text-slate-500 leading-relaxed mb-6">
                  {card.description}
                </p>
                <a href="#" className={`inline-flex items-center text-sm font-semibold ${themeColor} hover:opacity-80`}>
                  اقرأ المزيد <ArrowLeft className="w-4 h-4 mr-2" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default InfoGrid;