import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

const SYSTEM_INSTRUCTION = `
أنت مساعد ذكي للأمن السيبراني في منصة BeAware.qa القطرية.
مهمتك هي تقديم نصائح أمنية، وشرح أنواع الاحتيال، ومساعدة المستخدمين (أفراد وشركات) على حماية أنفسهم.
تحدث باللغة العربية بأسلوب مهني ومطمئن.
إذا سألك المستخدم عن كيفية الإبلاغ عن جريمة، وجهه للاتصال بإدارة مكافحة الجرائم الإلكترونية على الرقم 66825757.
ركز على التوعية والوقاية.
`;

export const getSecurityAdvice = async (userQuery: string): Promise<string> => {
  if (!apiKey) {
    return "عذراً، خدمة المساعد الذكي غير متوفرة حالياً لعدم وجود مفتاح API.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userQuery,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    
    return response.text || "عذراً، لم أتمكن من معالجة طلبك حالياً.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "حدث خطأ أثناء الاتصال بالمساعد الذكي. يرجى المحاولة لاحقاً.";
  }
};