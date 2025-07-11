import React, { useState } from 'react';
import { UITexts, Language } from '../types.ts';
import { faqsData } from '../data/faqs.ts';
import { playCuteClickSound } from '../utils/audio.ts';

const AccordionItem: React.FC<{
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}> = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="border-b border-rose-200/50 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center text-left py-5 px-6 hover:bg-rose-100/30 transition-colors duration-200"
        aria-expanded={isOpen}
      >
        <span className="text-md font-semibold text-slate-800">{question}</span>
        <svg
          className={`w-6 h-6 text-rose-400 transform transition-transform duration-300 flex-shrink-0 ml-4 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={`grid overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
            <div className="pb-5 px-6 text-slate-600 leading-relaxed whitespace-pre-line">
                {answer}
            </div>
        </div>
      </div>
    </div>
  );
};

export const FaqSection: React.FC<{ uiTexts: UITexts; currentLanguage: Language }> = ({ uiTexts, currentLanguage }) => {
  const [openId, setOpenId] = useState<number | null>(0); // Open the first FAQ by default
  const [showAll, setShowAll] = useState<boolean>(false);

  const handleToggle = (id: number) => {
    playCuteClickSound();
    setOpenId(openId === id ? null : id);
  };

  const handleReadMore = () => {
    playCuteClickSound();
    setShowAll(true);
  };

  const displayedFaqs = showAll ? faqsData : faqsData.slice(0, 3);

  return (
    <section 
        id="faq" 
        className="py-20 sm:py-24 bg-rose-50/30 relative overflow-hidden"
    >
        <div className="absolute inset-0 z-0 opacity-20" style={{
            backgroundImage: `radial-gradient(circle at top left, #fecdd3, transparent 40%),
                              radial-gradient(circle at bottom right, #a5b4fc, transparent 40%)`,
            animation: 'breathe 12s ease-in-out infinite'
        }}></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800">{uiTexts.faqTitle}</h2>
            <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">{uiTexts.faqDescription}</p>
            </div>

            <div className="bg-white/60 backdrop-blur-md rounded-2xl shadow-lg border border-white/50">
            {displayedFaqs.map((faq, index) => (
                <AccordionItem
                key={index}
                question={faq.question[currentLanguage]}
                answer={faq.answer[currentLanguage]}
                isOpen={openId === index}
                onToggle={() => handleToggle(index)}
                />
            ))}
            </div>

            {!showAll && (
              <div className="text-center mt-8">
                <button
                  onClick={handleReadMore}
                  className="font-semibold text-rose-600 hover:text-rose-800 transition-colors duration-300 group"
                >
                  {uiTexts.faqReadMore}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    &nbsp;→
                  </span>
                </button>
              </div>
            )}
        </div>
        <style>{`
            @keyframes breathe {
                0%, 100% { transform: scale(1); opacity: 0.2; }
                50% { transform: scale(1.1); opacity: 0.3; }
            }
        `}</style>
    </section>
  );
};

export default FaqSection;