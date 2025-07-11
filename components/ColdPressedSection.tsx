import React from 'react';
import { UITexts, Page } from '../types.ts';

interface ColdPressedSectionProps {
  uiTexts: UITexts;
  navigateTo: (page: Page) => void;
}

const ColdPressedSection: React.FC<ColdPressedSectionProps> = ({ uiTexts, navigateTo }) => {
  return (
    <section id="cold-pressed" className="py-20 sm:py-24 bg-teal-50/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl font-bold text-teal-800 mb-4">{uiTexts.coldPressedTitle}</h2>
          <p className="text-lg text-slate-600 mb-6 leading-relaxed">
            {uiTexts.coldPressedSummary}
          </p>
          <button
            onClick={() => navigateTo('cold-pressed-info')}
            className="font-semibold text-teal-600 hover:text-teal-800 transition-colors duration-300 group"
          >
            {uiTexts.coldPressedCTA}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              &nbsp;→
            </span>
          </button>
        </div>
        <div className="order-1 md:order-2">
            <img 
                src="https://images.unsplash.com/photo-1600271886742-f049cd451bba?q=80&w=1200&auto=format&fit=crop" 
                alt="Colorful cold-pressed juices in bottles" 
                className="rounded-2xl shadow-xl w-full h-auto object-cover aspect-square"
            />
        </div>
      </div>
    </section>
  );
};

export default ColdPressedSection;