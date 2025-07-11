import React from 'react';
import { UITexts } from '../types.ts';

const ToolsSection: React.FC<{ uiTexts: UITexts }> = ({ uiTexts }) => {
  return (
    <section id="tools" className="py-20 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800">{uiTexts.toolsTitle}</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">{uiTexts.toolsDescription}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Tool 1: Quiz */}
          <div className="relative p-8 bg-purple-50 rounded-2xl shadow-sm border-t-4 border-purple-300 text-center flex flex-col items-center justify-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
             <div className="absolute top-4 right-4 bg-purple-400 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Coming Soon</div>
             <div className="text-5xl mb-4">🔮</div>
             <h3 className="text-2xl font-bold text-purple-800 mb-2">{uiTexts.toolsQuizTitle}</h3>
             <p className="text-purple-600">{uiTexts.toolsQuizDescription}</p>
          </div>

          {/* Tool 2: Fridge */}
           <div className="relative p-8 bg-teal-50 rounded-2xl shadow-sm border-t-4 border-teal-300 text-center flex flex-col items-center justify-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
             <div className="absolute top-4 right-4 bg-teal-400 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Coming Soon</div>
             <div className="text-5xl mb-4">🧊</div>
             <h3 className="text-2xl font-bold text-teal-800 mb-2">{uiTexts.toolsFridgeTitle}</h3>
             <p className="text-teal-600">{uiTexts.toolsFridgeDescription}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;