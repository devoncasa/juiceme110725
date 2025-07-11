import React, { useState } from 'react';
import { UITexts } from '../types.ts';

interface BlenderBibleSectionProps {
  uiTexts: UITexts;
}

const TabButton: React.FC<{ active: boolean; onClick: () => void; children: React.ReactNode }> = ({ active, onClick, children }) => {
  return (
    <button
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={`px-4 py-2.5 text-sm sm:text-base font-semibold rounded-t-lg border-b-4 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-300
        ${active 
          ? 'border-rose-400 text-rose-500 bg-white' 
          : 'border-transparent text-slate-500 hover:text-rose-500 hover:bg-rose-50/50'
        }`}
    >
      {children}
    </button>
  );
};

export const BlenderBibleSection: React.FC<BlenderBibleSectionProps> = ({ uiTexts }) => {
  const [activeTab, setActiveTab] = useState('masterclass');

  const renderContent = () => {
    switch (activeTab) {
      case 'masterclass':
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-slate-700">{uiTexts.bibleTab2Heading}</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                <h4 className="font-bold text-lg text-amber-500 mb-3">{uiTexts.bibleTab2LayeringTitle}</h4>
                <ul className="space-y-2 text-slate-600 text-sm list-decimal list-inside">
                  <li>{uiTexts.bibleTab2LayeringStep1}</li>
                  <li>{uiTexts.bibleTab2LayeringStep2}</li>
                  <li>{uiTexts.bibleTab2LayeringStep3}</li>
                  <li>{uiTexts.bibleTab2LayeringStep4}</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                <h4 className="font-bold text-lg text-rose-500 mb-3">{uiTexts.bibleTab2FlavorTitle}</h4>
                 <ul className="space-y-2 text-slate-600 text-sm list-disc list-inside">
                  <li>{uiTexts.bibleTab2FlavorBland}</li>
                  <li>{uiTexts.bibleTab2FlavorSweet}</li>
                  <li>{uiTexts.bibleTab2FlavorBitter}</li>
                  <li>{uiTexts.bibleTab2FlavorSour}</li>
                </ul>
              </div>
            </div>
          </div>
        );
      case 'prep':
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-slate-700">{uiTexts.bibleTab3Heading}</h3>
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-teal-300">
              <h4 className="font-bold text-lg text-teal-700 mb-2">🧊 {uiTexts.bibleTab3FreezerTip.split(':')[0]}</h4>
              <p className="text-slate-600 text-sm">{uiTexts.bibleTab3FreezerTip.split(': ')[1]}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-indigo-300">
              <h4 className="font-bold text-lg text-indigo-600 mb-2">🛍️ {uiTexts.bibleTab3PacksTip.split(':')[0]}</h4>
              <p className="text-slate-600 text-sm">{uiTexts.bibleTab3PacksTip.split(': ')[1]}</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="bible" className="py-20 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800">{uiTexts.bibleTitle}</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">{uiTexts.bibleDescription}</p>
        </div>
        
        <div role="tablist" className="flex justify-center border-b border-slate-200 mb-8 flex-wrap">
          <TabButton active={activeTab === 'masterclass'} onClick={() => setActiveTab('masterclass')}>{uiTexts.bibleTab2Title}</TabButton>
          <TabButton active={activeTab === 'prep'} onClick={() => setActiveTab('prep')}>{uiTexts.bibleTab3Title}</TabButton>
        </div>

        <div role="tabpanel" className="p-4 sm:p-8 bg-slate-50/70 rounded-xl border border-slate-200/80 min-h-[300px]">
          {renderContent()}
        </div>
      </div>
    </section>
  );
};