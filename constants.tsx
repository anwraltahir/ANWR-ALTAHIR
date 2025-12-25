import { Shield, Lock, Smartphone, Globe, CreditCard, Users, Server, Eye, AlertTriangle } from 'lucide-react';
import { InfoCardData } from './types';

export const INDIVIDUAL_CARDS: InfoCardData[] = [
  {
    id: 'i1',
    title: 'الاحتيال المالي (Phishing)',
    description: 'تعرف على رسائل البريد الإلكتروني والرسائل النصية المزيفة التي تدعي أنها من بنوك أو جهات حكومية لسرقة بياناتك.',
    icon: AlertTriangle,
    category: 'fraud'
  },
  {
    id: 'i2',
    title: 'حماية الخصوصية',
    description: 'كيفية ضبط إعدادات الخصوصية في منصات التواصل الاجتماعي لمنع المتطفلين من الوصول لمعلوماتك الشخصية.',
    icon: Eye,
    category: 'privacy'
  },
  {
    id: 'i3',
    title: 'الابتزاز الرقمي',
    description: 'خطوات التصرف الصحيحة في حال تعرضك للتهديد بنشر صور أو معلومات خاصة، وكيفية التواصل مع الجرائم الإلكترونية.',
    icon: Lock,
    category: 'fraud'
  },
  {
    id: 'i4',
    title: 'أمان البطاقات البنكية',
    description: 'لا تشارك رمز OTP مع أي شخص. نصائح لتأمين معاملاتك المالية عبر الإنترنت.',
    icon: CreditCard,
    category: 'fraud'
  }
];

export const COMPANY_CARDS: InfoCardData[] = [
  {
    id: 'c1',
    title: 'حماية الشبكات',
    description: 'تأمين البنية التحتية للشبكة واستخدام جدران الحماية (Firewalls) لمنع الاختراقات الخارجية.',
    icon: Server,
    category: 'network'
  },
  {
    id: 'c2',
    title: 'تدريب الموظفين',
    description: 'أهمية نشر الوعي الأمني بين الموظفين، حيث يعتبر العنصر البشري الحلقة الأضعف في الأمن السيبراني.',
    icon: Users,
    category: 'general'
  },
  {
    id: 'c3',
    title: 'النسخ الاحتياطي',
    description: 'استراتيجيات النسخ الاحتياطي للبيانات الحساسة لضمان استمرارية الأعمال في حال تعرض الأنظمة لهجمات الفدية.',
    icon: Globe,
    category: 'network'
  },
  {
    id: 'c4',
    title: 'تحديث الأنظمة',
    description: 'أهمية التحديث الدوري للبرمجيات وأنظمة التشغيل لسد الثغرات الأمنية المعروفة.',
    icon: Shield,
    category: 'general'
  }
];