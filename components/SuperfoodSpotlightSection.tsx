import React, { useState, useEffect } from 'react';
import { UITexts, Language, SuperfoodSpotlight } from '../types.ts';
import { spotlightsData } from '../data/spotlights.ts';

interface SuperfoodSpotlightSectionProps {
  uiTexts: UITexts;
  currentLanguage: Language;
}

const SuperfoodSpotlightSection: React.FC<SuperfoodSpotlightSectionProps> = ({ uiTexts, currentLanguage }) => {
  const [spotlight, setSpotlight] = useState<SuperfoodSpotlight | null>(null);

  useEffect(() => {
    // Select a random spotlight when the component mounts
    const randomIndex = Math.floor(Math.random() * spotlightsData.length);
    setSpotlight(spotlightsData[randomIndex]);
  }, []); // Empty dependency array ensures this runs only once

  const renderSpotlightContent = () => {
    if (!spotlight) {
      // Render a loading state or return null
      return <div className="min-h-[400px]"></div>;
    }

    const { image, title, description, fact, why, tip } = spotlight;

    return (
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden grid md:grid-cols-2 items-center border border-slate-200/50">
        <div className="p-8 sm:p-12 order-2 md:order-1">
          <h3 className="text-3xl font-bold text-emerald-600 mb-3">{title[currentLanguage]}</h3>
          <p className="text-slate-600 mb-6 leading-relaxed">{description[currentLanguage]}</p>
          
          <div className="space-y-5">
             <div className="bg-amber-50 border-l-4 border-amber-300 p-4 rounded-r-lg">
                <p className="font-semibold text-amber-700"><span className="font-sans mr-2">💡</span>{fact[currentLanguage]}</p>
             </div>
             <div className="bg-sky-50 border-l-4 border-sky-300 p-4 rounded-r-lg">
                <p className="font-semibold text-sky-700 mb-1">⭐ {currentLanguage === Language.TH ? 'ทำไมถึงเป็น Superfood?:' : currentLanguage === Language.ZH ? '为何是超级食物？:' : 'Why a Superfood?:'}</p>
                <p className="text-sm text-sky-700">{why[currentLanguage]}</p>
             </div>
             <div className="bg-rose-50 border-l-4 border-rose-300 p-4 rounded-r-lg">
                <p className="font-semibold text-rose-700 mb-1">🥑 {currentLanguage === Language.TH ? 'เคล็ดลับจาก Juice Me:' : currentLanguage === Language.ZH ? 'Juice Me 提示:' : 'Juice Me Tip:'}</p>
                <p className="text-sm text-rose-700">{tip[currentLanguage]}</p>
             </div>
          </div>
        </div>
        <div className="order-1 md:order-2 h-64 md:h-full">
          <img 
            src={image} 
            alt={title[currentLanguage]}
            className="w-full h-full object-cover content-image"
          />
        </div>
      </div>
    );
  }

  return (
    <section id="spotlight" className="py-20 sm:py-24 bg-emerald-50/50 subtle-fruit-pattern-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800">{uiTexts.spotlightTitle}</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">{uiTexts.spotlightDescription}</p>
        </div>
        {renderSpotlightContent()}
      </div>
    </section>
  );
};

export default SuperfoodSpotlightSection;