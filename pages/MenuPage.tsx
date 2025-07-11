import React, { useState } from 'react';
import { Page, UITexts, Language } from '../types.ts';
import { MenuCategory, MenuItem } from '../types.ts';
import { menuData } from '../data/menu.ts';
import { playCuteClickSound } from '../utils/audio.ts';

interface MenuPageProps {
  uiTexts: UITexts;
  currentLanguage: Language;
  navigateTo: (page: Page) => void;
}

const MenuHero: React.FC<{ uiTexts: UITexts }> = ({ uiTexts }) => (
  <section
    className="relative text-white py-20 sm:py-28 px-4 flex items-center justify-center text-center bg-cover bg-center"
    style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://i.postimg.cc/qR5SJjH9/juice-me-image-place-holder-and-background-decorative-0017.jpg')` }}
  >
    <div className="relative z-10 max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4" style={{ textShadow: '2px 3px 6px rgba(0,0,0,0.5)' }}>
        {uiTexts.menuHeroTitle}
      </h1>
      <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.6)' }}>
        {uiTexts.menuHeroSubtitle}
      </p>
    </div>
  </section>
);

const AccordionItem: React.FC<{
  category: MenuCategory;
  isOpen: boolean;
  onToggle: () => void;
  language: Language;
  uiTexts: UITexts;
}> = ({ category, isOpen, onToggle, language, uiTexts }) => {
  const renderColdPressedItems = (items: MenuItem[]) => (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left text-slate-600">
        <thead className="text-xs text-slate-700 uppercase bg-slate-100">
          <tr>
            <th scope="col" className="px-4 py-3">Name</th>
            <th scope="col" className="px-4 py-3">Ingredients</th>
            <th scope="col" className="px-4 py-3">Description</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.name[language]} className="bg-white border-b hover:bg-slate-50">
              <td className="px-4 py-3 font-semibold text-slate-800">{item.name[language]}</td>
              <td className="px-4 py-3">{item.ingredients?.[language]}</td>
              <td className="px-4 py-3">{item.description?.[language]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  
  const renderSimpleItems = (items: MenuItem[]) => (
     <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {items.map(item => (
        <div key={item.name[language]} className="bg-white p-3 rounded-lg border border-slate-200 text-center shadow-sm">
          <p className="font-semibold text-slate-800">{item.name[language]}</p>
          {item.price && <p className="text-sm text-rose-500 font-bold">{item.price}฿</p>}
        </div>
      ))}
    </div>
  );

  return (
    <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-4 sm:p-6 bg-white hover:bg-rose-50/50 transition duration-300"
        aria-expanded={isOpen}
        aria-controls={`content-${category.id}`}
      >
        <div className="flex items-center text-left">
          <img src={category.image} alt={category.title[language]} className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg object-cover mr-4 shadow-md" />
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-800">{category.title[language]}</h3>
            <p className="text-sm text-slate-600 mt-1">{category.description[language]}</p>
            {category.priceNote && <p className="text-sm font-semibold text-rose-500 mt-1">{category.priceNote[language]}</p>}
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 text-rose-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        id={`content-${category.id}`}
        className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
            <div className="p-4 sm:p-6 bg-slate-50/70 border-t border-slate-200">
            {category.id === 'cold-pressed' ? renderColdPressedItems(category.items) : renderSimpleItems(category.items)}

            {category.addOns && (
                <div className="mt-4 pt-4 border-t border-dashed border-slate-300">
                    <h4 className="font-semibold text-slate-700 mb-2">{category.addOns.title[language]}</h4>
                    <div className="flex flex-wrap gap-2 text-sm">
                        {category.addOns.items.map(addon => (
                            <span key={addon.name[language]} className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full">
                                {addon.name[language]} {addon.price ? ` (+${addon.price}฿)` : ''}
                            </span>
                        ))}
                    </div>
                </div>
            )}
            </div>
        </div>
      </div>
    </div>
  );
};


const MenuPage: React.FC<MenuPageProps> = ({ uiTexts, currentLanguage, navigateTo }) => {
  const [openAccordionId, setOpenAccordionId] = useState<string | null>(menuData[0]?.id || null);

  const handleToggle = (id: string) => {
    playCuteClickSound();
    setOpenAccordionId(openAccordionId === id ? null : id);
  };
  
  return (
    <div className="bg-fdf8f6">
      <MenuHero uiTexts={uiTexts} />
      <main className="py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
                <button 
                    onClick={() => navigateTo('landing')}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-rose-400 hover:bg-rose-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-400 transition-colors"
                >
                    &larr; {uiTexts.backToHome}
                </button>
            </div>

            <div className="space-y-4">
                {menuData.map(category => (
                    <AccordionItem
                        key={category.id}
                        category={category}
                        isOpen={openAccordionId === category.id}
                        onToggle={() => handleToggle(category.id)}
                        language={currentLanguage}
                        uiTexts={uiTexts}
                    />
                ))}
            </div>
            
            <div className="mt-8 text-center text-slate-600 font-semibold bg-amber-100 p-3 rounded-lg border border-amber-200">
                <p>✨ {uiTexts.menuExtraIceBlending} +10฿ ✨</p>
            </div>
        </div>
      </main>
    </div>
  );
};

export default MenuPage;
