import React from 'react';
import { Language } from '../types.ts';
import { SWEETNESS_LEVELS } from '../constants.ts';
import { playCuteClickSound } from '../utils/audio.ts';

interface SweetnessSelectorProps {
  currentSweetness: number;
  onSweetnessChange: (sweetness: number) => void;
  language: Language;
}

const SweetnessSelector: React.FC<SweetnessSelectorProps> = ({ currentSweetness, onSweetnessChange }) => {
  
  const handleSweetnessClick = (level: number) => {
    playCuteClickSound();
    onSweetnessChange(level);
  };

  return (
    <div className="flex flex-wrap gap-4 justify-center"> {/* Increased gap */}
      {SWEETNESS_LEVELS.map((level) => (
        <button
          key={level}
          onClick={() => handleSweetnessClick(level)}
          className={`px-6 py-2.5 border rounded-full cursor-pointer text-sm font-medium transition-all duration-300 ease-in-out min-w-[90px] shadow-sm hover:shadow-md
            ${currentSweetness === level
              ? 'bg-purple-300 text-purple-800 border-purple-400 font-semibold shadow-lg transform scale-105 ring-2 ring-white/50'
              : 'bg-white text-slate-700 border-purple-200 hover:border-purple-300 hover:-translate-y-0.5'
            }`}
          aria-pressed={currentSweetness === level}
          aria-label={`Set sweetness to ${level}%`}
        >
          {level}%
        </button>
      ))}
    </div>
  );
};

export default SweetnessSelector;