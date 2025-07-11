import React, { useState, useRef, useEffect } from 'react';
import { Language } from '../types.ts';
import { playCuteClickSound } from '../utils/audio.ts';

interface LanguageSwitcherProps {
  currentLanguage: Language;
  onLanguageChange: (language: Language) => void;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ currentLanguage, onLanguageChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    playCuteClickSound();
    setIsOpen(!isOpen);
  };
  
  const handleLangButtonClick = (langValue: Language) => {
    if (currentLanguage !== langValue) {
        playCuteClickSound();
        onLanguageChange(langValue);
    }
    setIsOpen(false);
  };
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  const languageNames: { [key in Language]: string } = {
      [Language.EN]: 'English',
      [Language.TH]: 'ภาษาไทย',
      [Language.ZH]: '中文'
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={toggleDropdown}
        className="inline-flex items-center justify-center rounded-full border border-rose-200/80 shadow-sm px-3 py-1.5 bg-white/70 text-sm font-medium text-slate-700 hover:bg-rose-50 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-rose-300 transition-all"
        id="language-menu-button"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-rose-500" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v1.5a1.5 1.5 0 01-1.5 1.5h-5A1.5 1.5 0 015 14.5v-2.019a6.036 6.036 0 01-1.102-4.454c.167-.387.382-.75.634-1.098z" clipRule="evenodd" />
        </svg>
        <span className="ml-2 hidden sm:block">{languageNames[currentLanguage]}</span>
        <span className="ml-1.5 sm:hidden">{currentLanguage.toUpperCase()}</span>
        <svg
          className="-mr-1 ml-1.5 h-5 w-5 text-slate-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="language-menu-button"
        >
          <div className="py-1" role="none">
            {(Object.keys(Language) as Array<keyof typeof Language>).map((langKey) => {
              const langValue = Language[langKey];
              return (
                <button
                  key={langValue}
                  onClick={() => handleLangButtonClick(langValue)}
                  className={`${
                    currentLanguage === langValue
                      ? 'bg-rose-100 text-rose-700 font-semibold'
                      : 'text-slate-700 hover:bg-slate-50'
                  } block w-full text-left px-4 py-2 text-sm`}
                  role="menuitem"
                >
                  {languageNames[langValue]}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;