import React from 'react';
import { UITexts } from '../types.ts';

interface ConfirmationViewProps {
    uiTexts: UITexts;
    onBackToMenu: () => void;
}

const ConfirmationView: React.FC<ConfirmationViewProps> = ({ uiTexts, onBackToMenu }) => {
    return (
        <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-xl animate-fadeIn text-center flex flex-col items-center">
            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                 <svg className="w-12 h-12 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-6">{uiTexts.orderConfirmedTitle}</h1>
            
            <div className="w-full max-w-lg text-left bg-slate-50/70 p-6 rounded-xl border border-slate-200 divide-y-2 divide-dashed divide-slate-300">
                {/* Step 1 */}
                <div className="py-6 first:pt-0 last:pb-0">
                    <h2 className="font-bold text-lg text-slate-800 mb-2">{uiTexts.confirmationStep1Title}</h2>
                    <div className="flex flex-col sm:flex-row gap-4 items-start">
                        <p className="text-sm text-slate-600 mt-1 whitespace-pre-line flex-1">{uiTexts.confirmationStep1Instruction}</p>
                        <img src="https://i.postimg.cc/ZqkPJfQ0/juice-me-mobile-banking-qr-code.jpg" alt="Payment QR Code" className="w-36 h-36 rounded-md shadow-md object-contain border-2 border-white" />
                    </div>
                </div>

                {/* Step 2 */}
                <div className="py-6 first:pt-0 last:pb-0">
                    <h2 className="font-bold text-lg text-slate-800 mb-2">{uiTexts.confirmationStep2Title}</h2>
                    <p className="text-sm text-slate-600 mt-1">{uiTexts.confirmationStep2Instruction}</p>
                    <a href={uiTexts.socialLinks.facebook.replace('www.facebook.com', 'm.me')} target="_blank" rel="noopener noreferrer" className="inline-block mt-3 px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-blue-600 transition flex items-center gap-2 max-w-max">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" /><path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h1a2 2 0 002-2V9a2 2 0 00-2-2h-1z" /></svg>
                        {uiTexts.confirmationStep2InboxLink}
                    </a>
                    <p className="text-sm text-slate-700 font-medium mt-4">{uiTexts.confirmationStep2Includes}</p>
                    <ul className="text-sm text-slate-600 list-none space-y-1 mt-1">
                        <li>{uiTexts.confirmationStep2IncludeSlip}</li>
                        <li>{uiTexts.confirmationStep2IncludeSummaryImage}</li>
                        <li>{uiTexts.confirmationStep2IncludeDetails}</li>
                    </ul>
                </div>

                {/* Step 3 */}
                <div className="py-6 first:pt-0 last:pb-0">
                    <h2 className="font-bold text-lg text-slate-800 mb-2">{uiTexts.confirmationStep3Title}</h2>
                    <p className="text-sm text-slate-600 mt-1">{uiTexts.confirmationStep3Instruction}</p>
                    <a href={`tel:${uiTexts.contactPhone.replace(/-/g, '')}`} className="inline-block mt-3 px-4 py-2 bg-green-500 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-green-600 transition flex items-center gap-2 max-w-max">
                        {uiTexts.confirmationCallToAction}
                    </a>
                </div>
            </div>
            
            <p className="mt-8 text-slate-700 font-medium">{uiTexts.confirmationThankYou}</p>

            <button
                onClick={onBackToMenu}
                className="mt-8 text-rose-500 hover:text-rose-700 font-semibold"
            >
                &larr; {uiTexts.backToMenu}
            </button>

             <style>{`.animate-fadeIn { animation: fadeIn 0.5s ease-out forwards; } @keyframes fadeIn { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }`}</style>
        </div>
    );
};

export default ConfirmationView;