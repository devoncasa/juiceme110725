import React from 'react';
import { Page, UITexts } from '../types.ts';

interface ColdPressedInfoPageProps {
    uiTexts: UITexts;
    navigateTo: (page: Page, anchor?: string) => void;
}

export const ColdPressedInfoPage: React.FC<ColdPressedInfoPageProps> = ({ uiTexts, navigateTo }) => {
    // Split the content by newlines to render as separate paragraphs and preserve formatting
    const contentParts = uiTexts.coldPressedFullContent.split('\n').filter(part => part.trim() !== '');

    return (
        <div className="bg-emerald-50 min-h-screen">
            <header 
                className="relative h-64 sm:h-80 bg-cover bg-center"
                style={{ backgroundImage: 'url(https://i.postimg.cc/SN4wrD7G/cold-press-cover-header.jpg)' }}
            >
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center">
                     <button 
                        onClick={() => navigateTo('landing')}
                        className="absolute top-8 left-4 sm:left-6 lg:left-8 z-10 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-slate-700 bg-white/80 hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-emerald-100 focus:ring-emerald-400 transition-colors"
                    >
                        &larr; {uiTexts.backToHome}
                    </button>
                    
                    <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight text-center" style={{ textShadow: '2px 3px 6px rgba(0,0,0,0.5)' }}>
                        {uiTexts.coldPressedTitle}
                    </h1>
                </div>
            </header>

            <main className="py-12 sm:py-16 -mt-20">
                 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                     <div className="bg-white/95 backdrop-blur-sm border border-white/30 p-8 sm:p-12 rounded-2xl shadow-xl">
                        <article className="prose prose-lg lg:prose-xl max-w-none prose-headings:text-gray-900 prose-p:text-gray-900 prose-strong:text-gray-900 prose-strong:font-bold">
                            {contentParts.map((part, index) => {
                                // Numbered heading: **1. Title**
                                const numberedMatch = part.match(/^\*\*((\d+)\.\s.*)\*\*$/);
                                if (numberedMatch) {
                                    const number = numberedMatch[2];
                                    const title = numberedMatch[1].replace(`${number}. `, '');
                                    return (
                                        <div key={index} className="mt-12 mb-4 not-prose">
                                            <div className="flex items-center">
                                                <span className="flex items-center justify-center h-12 w-12 rounded-full bg-emerald-500 text-white font-bold text-2xl flex-shrink-0 shadow-md">{number}</span>
                                                <h3 className="ml-4 text-2xl lg:text-3xl font-bold text-gray-900">{title}</h3>
                                            </div>
                                        </div>
                                    );
                                }
    
                                // Regular heading: **Title**
                                if (part.startsWith('**') && part.endsWith('**')) {
                                    return <h2 key={index} className="border-t-2 border-emerald-200 pt-8 mt-12 text-center text-gray-900 font-bold">{part.replace(/\*\*/g, '')}</h2>;
                                }
    
                                // Paragraph
                                return <p key={index}>{part}</p>;
                            })}
                        </article>
                     </div>
                 </div>
            </main>
        </div>
    );
};
