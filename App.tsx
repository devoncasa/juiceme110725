import React, { useState } from 'react';
import { Language, UITexts, Page } from './types.ts';
import { translations } from './data/translations.ts';
import { playCuteClickSound } from './utils/audio.ts';
import DynamicHeader from './components/DynamicHeader.tsx';
import { LandingPage } from './pages/LandingPage.tsx';
import BuilderPage from './pages/BuilderPage.tsx';
import { ColdPressedInfoPage } from './pages/ColdPressedInfoPage.tsx';
import MenuPage from './pages/MenuPage.tsx';
import SeoManager from './components/SeoManager.tsx';

const App: React.FC = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(Language.TH);
  const [currentPage, setCurrentPage] = useState<Page>('landing');
  const uiTexts: UITexts = translations[currentLanguage];
  
  const handleLanguageChange = (lang: Language) => {
    playCuteClickSound();
    setCurrentLanguage(lang);
  };

  const navigateTo = (page: Page) => {
    playCuteClickSound();
    setCurrentPage(page);
    window.scrollTo(0, 0); // Scroll to top on page change
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'builder':
        return <BuilderPage uiTexts={uiTexts} currentLanguage={currentLanguage} navigateTo={navigateTo} />;
      case 'cold-pressed-info':
        return <ColdPressedInfoPage uiTexts={uiTexts} navigateTo={navigateTo} />;
      case 'menu':
        return <MenuPage uiTexts={uiTexts} currentLanguage={currentLanguage} navigateTo={navigateTo} />;
      case 'landing':
      default:
        return <LandingPage uiTexts={uiTexts} navigateTo={navigateTo} currentLanguage={currentLanguage} />;
    }
  };

  return (
    <div className="bg-fdf8f6">
      <SeoManager 
        page={currentPage} 
        language={currentLanguage} 
        uiTexts={uiTexts} 
      />
      <DynamicHeader
        uiTexts={uiTexts}
        currentLanguage={currentLanguage}
        onLanguageChange={handleLanguageChange}
        navigateTo={navigateTo}
        currentPage={currentPage}
      />
      <main>
        {renderPage()}
      </main>
    </div>
  );
};

export default App;