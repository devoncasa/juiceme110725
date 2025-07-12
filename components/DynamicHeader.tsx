import React, { useState, useEffect } from 'react';
import { Language, UITexts, Page } from '../types.ts';
import LanguageSwitcher from './LanguageSwitcher.tsx';

interface DynamicHeaderProps {
    uiTexts: UITexts;
    currentLanguage: Language;
    onLanguageChange: (lang: Language) => void;
    navigateTo: (page: Page, anchor?: string) => void;
    currentPage: Page;
}

const DynamicHeader: React.FC<DynamicHeaderProps> = ({ uiTexts, currentLanguage, onLanguageChange, navigateTo, currentPage }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [openMenu, setOpenMenu] = useState<string | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    // Close mobile menu if window is resized to desktop view
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMobileMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleNavClick = (page: Page, anchor?: string) => {
        navigateTo(page, anchor);
        setOpenMenu(null); // Close desktop dropdown
        setIsMobileMenuOpen(false); // Close mobile menu
    }

    const navLinkClasses = "text-slate-700 hover:text-rose-500 transition-colors font-medium cursor-pointer px-3 py-2 rounded-md";
    const dropdownItemClasses = "block w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-rose-100 hover:text-rose-500 cursor-pointer";

    const renderDesktopNav = () => (
        <div className="hidden md:flex items-center space-x-1">
            {/* Shop Dropdown */}
            <div className="relative" onMouseEnter={() => setOpenMenu('shop')} onMouseLeave={() => setOpenMenu(null)}>
                <button onClick={() => handleNavClick('menu')} className={`${navLinkClasses} flex items-center`}>
                    {uiTexts.navShop}
                    <svg className={`w-4 h-4 ml-1 transition-transform ${openMenu === 'shop' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>
                {openMenu === 'shop' && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-10 border border-slate-100">
                        <a onClick={() => handleNavClick('menu')} className={dropdownItemClasses}>{uiTexts.navShopAll}</a>
                        <a onClick={() => handleNavClick('menu', '#cold-pressed')} className={dropdownItemClasses}>{uiTexts.navShopCleanses}</a>
                        <a onClick={() => handleNavClick('builder')} className={dropdownItemClasses}>{uiTexts.navShopBuild}</a>
                        <a className={`${dropdownItemClasses} opacity-50 cursor-not-allowed`}>{uiTexts.navShopSubscribe}</a>
                    </div>
                )}
            </div>

            <a onClick={() => handleNavClick('menu')} className={navLinkClasses}>{uiTexts.navMenu}</a>

            {/* Why Us Dropdown */}
            <div className="relative" onMouseEnter={() => setOpenMenu('whyus')} onMouseLeave={() => setOpenMenu(null)}>
                 <button onClick={() => handleNavClick('landing', '#why-us')} className={`${navLinkClasses} flex items-center`}>
                    {uiTexts.navWhyUs}
                    <svg className={`w-4 h-4 ml-1 transition-transform ${openMenu === 'whyus' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>
                {openMenu === 'whyus' && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-10 border border-slate-100">
                        <a onClick={() => handleNavClick('landing', '#our-story')} className={dropdownItemClasses}>{uiTexts.navOurStory}</a>
                        <a onClick={() => handleNavClick('cold-pressed-info')} className={dropdownItemClasses}>{uiTexts.navWhyColdPressed}</a>
                        <a onClick={() => handleNavClick('landing', '#why-us')} className={dropdownItemClasses}>{uiTexts.navOurIngredients}</a>
                        <a onClick={() => handleNavClick('landing', '#reviews')} className={dropdownItemClasses}>{uiTexts.navReviews}</a>
                    </div>
                )}
            </div>
            {/* Learn Dropdown */}
            <div className="relative" onMouseEnter={() => setOpenMenu('learn')} onMouseLeave={() => setOpenMenu(null)}>
                <button onClick={() => handleNavClick('landing', '#bible')} className={`${navLinkClasses} flex items-center`}>
                    {uiTexts.navLearn}
                    <svg className={`w-4 h-4 ml-1 transition-transform ${openMenu === 'learn' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>
                {openMenu === 'learn' && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-10 border border-slate-100">
                        <a onClick={() => handleNavClick('landing', '#bible')} className={dropdownItemClasses}>{uiTexts.navBible}</a>
                        <a onClick={() => handleNavClick('landing', '#faq')} className={dropdownItemClasses}>{uiTexts.navFAQ}</a>
                        <a className={`${dropdownItemClasses} opacity-50 cursor-not-allowed`}>{uiTexts.navBlog}</a>
                    </div>
                )}
            </div>
            <a onClick={() => handleNavClick('landing', '#contact')} className={navLinkClasses}>{uiTexts.navContact}</a>
        </div>
    );
    
    const renderMobileMenu = () => (
        isMobileMenuOpen && (
            <div className="md:hidden bg-white/95 backdrop-blur-md absolute top-full left-0 w-full shadow-md">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <a onClick={() => handleNavClick('menu')} className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-rose-500 hover:bg-rose-50">{uiTexts.navShop}</a>
                    <a onClick={() => handleNavClick('landing', '#why-us')} className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-rose-500 hover:bg-rose-50">{uiTexts.navWhyUs}</a>
                    <a onClick={() => handleNavClick('landing', '#bible')} className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-rose-500 hover:bg-rose-50">{uiTexts.navLearn}</a>
                    <a onClick={() => handleNavClick('landing', '#faq')} className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-rose-500 hover:bg-rose-50">{uiTexts.navFAQ}</a>
                    <a onClick={() => handleNavClick('landing', '#contact')} className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-rose-500 hover:bg-rose-50">{uiTexts.navContact}</a>
                    <div className="border-t border-slate-200 my-2"></div>
                    <a onClick={() => handleNavClick('builder')} className="block px-3 py-2 rounded-md text-base font-medium text-white bg-rose-400 hover:bg-rose-500">{uiTexts.navShopNowCTA}</a>
                </div>
            </div>
        )
    );

    return (
        <>
            <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
                <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-3">
                        <div 
                            className="flex items-center cursor-pointer" 
                            onClick={() => handleNavClick('landing')}
                            aria-label="Go to homepage"
                        >
                            <img src="https://i.postimg.cc/xCK6YWWc/juice-me-logo-color.png" alt="Juice Me Logo" className="h-12 w-12" />
                            <span className={`ml-2 text-2xl font-bold transition-colors duration-300 ${isScrolled || isMobileMenuOpen ? 'text-rose-500' : 'text-rose-600'}`}>Juice Me</span>
                        </div>
                        
                        {renderDesktopNav()}

                        <div className="flex items-center">
                            <LanguageSwitcher currentLanguage={currentLanguage} onLanguageChange={onLanguageChange} />

                            <a href="#" className="hidden md:block ml-4 text-slate-600 hover:text-rose-500" aria-label={uiTexts.navAccount}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </a>
                            <button onClick={() => handleNavClick('builder')} className="hidden md:block ml-4 bg-rose-400 text-white font-semibold px-5 py-2 rounded-full hover:bg-rose-500 transition-all shadow-sm hover:shadow-md">
                                {uiTexts.navShopNowCTA}
                            </button>
                            
                            <div className="md:hidden ml-2">
                                <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 rounded-md text-slate-600 hover:text-rose-500 hover:bg-rose-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-500" aria-expanded={isMobileMenuOpen}>
                                    <span className="sr-only">Open main menu</span>
                                    {isMobileMenuOpen ? (
                                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    ) : (
                                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>
                {renderMobileMenu()}
            </header>
        </>
    );
};

export default DynamicHeader;
