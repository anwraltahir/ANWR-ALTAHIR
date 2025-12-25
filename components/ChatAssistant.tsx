import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Bot, Loader2, Minimize2 } from 'lucide-react';
import { ChatMessage } from '../types';
import { getSecurityAdvice } from '../services/geminiService';

const ChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 'welcome', role: 'model', text: 'مرحباً بك في BeAware.qa. أنا مساعدك الأمني الذكي. كيف يمكنني مساعدتك اليوم بخصوص أمنك الرقمي؟' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { id: Date.now().toString(), role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await getSecurityAdvice(input);
      const botMsg: ChatMessage = { 
        id: (Date.now() + 1).toString(), 
        role: 'model', 
        text: responseText 
      };
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      const errorMsg: ChatMessage = { 
        id: (Date.now() + 1).toString(), 
        role: 'model', 
        text: 'عذراً، حدث خطأ غير متوقع.',
        isError: true 
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 left-6 bg-qatar-maroon hover:bg-qatar-light text-white p-4 rounded-full shadow-2xl transition-all duration-300 z-40 hover:scale-110 flex items-center gap-2"
        >
          <Bot className="w-6 h-6" />
          <span className="font-bold hidden md:inline">المساعد الذكي</span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 left-6 w-[90vw] md:w-[400px] h-[500px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden border border-slate-200 animate-in fade-in slide-in-from-bottom-10 duration-300">
          
          {/* Header */}
          <div className="bg-qatar-maroon p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-lg">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-sm">مستشارك الأمني</h3>
                <p className="text-xs text-white/70">مدعوم بالذكاء الاصطناعي</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded transition-colors">
              <Minimize2 className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 bg-slate-50 space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === 'user' ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-qatar-maroon text-white rounded-br-none'
                      : 'bg-white text-slate-800 border border-slate-200 shadow-sm rounded-bl-none'
                  } ${msg.isError ? 'bg-red-50 text-red-600 border-red-200' : ''}`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-end">
                <div className="bg-white p-3 rounded-2xl rounded-bl-none shadow-sm border border-slate-200">
                  <Loader2 className="w-5 h-5 text-slate-400 animate-spin" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-slate-100">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="اكتب سؤالك هنا..."
                className="flex-1 bg-slate-100 border-0 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-qatar-maroon focus:bg-white transition-all outline-none"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="bg-qatar-maroon hover:bg-qatar-light disabled:opacity-50 disabled:cursor-not-allowed text-white p-3 rounded-xl transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            <p className="text-[10px] text-center text-slate-400 mt-2">
              المساعد الذكي قد يخطئ. يرجى التحقق من المعلومات الحساسة.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatAssistant;