import React from 'react';
import { Page, Language, UITexts } from '../types.ts';
import SmoothieBuilder from '../components/SmoothieBuilder.tsx';

interface BuilderPageProps {
    uiTexts: UITexts;
    currentLanguage: Language;
    navigateTo: (page: Page, anchor?: string) => void;
}

const BuilderPage: React.FC<BuilderPageProps> = ({ uiTexts, currentLanguage, navigateTo }) => {
    return (
        <div 
            className="py-8 decorative-background-fade" 
            style={{backgroundImage: 'url(https://i.postimg.cc/4yHMmVJn/juice-me-image-place-holder-and-background-decorative-0020.jpg)'}}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
                 <button 
                    onClick={() => navigateTo('landing')}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-rose-400 hover:bg-rose-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-400 transition-colors"
                >
                    &larr; {uiTexts.backToHome}
                </button>
            </div>
            <SmoothieBuilder currentLanguage={currentLanguage} />
        </div>
    );
};

export default BuilderPage;
