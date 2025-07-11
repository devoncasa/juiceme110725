import React from 'react';
import { Ingredient, Language } from '../types.ts';
import { playCuteClickSound } from '../utils/audio.ts';

interface IngredientButtonProps {
  ingredient: Ingredient;
  count: number;
  onClick: () => void;
  language: Language;
}

const IngredientButton: React.FC<IngredientButtonProps> = ({ ingredient, count, onClick, language }) => {
  const isSelected = count > 0;
  
  const baseStyle = "px-5 py-3 border rounded-full cursor-pointer text-sm font-medium transition-all duration-300 ease-in-out flex items-center justify-center space-x-2 min-w-[150px] relative shadow-sm hover:shadow-md";
  const selectedStyle = "bg-emerald-200 text-emerald-800 border-emerald-300 font-semibold shadow-lg transform scale-105 ring-2 ring-white/50";
  const unselectedStyle = "bg-white text-slate-700 border-rose-200 hover:border-rose-300 hover:-translate-y-0.5";

  const handleClick = () => {
    playCuteClickSound();
    onClick();
  };

  const badgeBgColor = count > 1 ? 'bg-red-400' : 'bg-pink-400';

  return (
    <button
      onClick={handleClick}
      className={`${baseStyle} ${isSelected ? selectedStyle : unselectedStyle}`}
      aria-pressed={isSelected}
      aria-label={`${ingredient.names[language]}${isSelected ? `, quantity ${count}` : ''}`}
    >
      {isSelected && (
        <span className={`absolute -top-2.5 -right-2.5 ${badgeBgColor} text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center shadow-md border-2 border-white`}>
          {count}
        </span>
      )}
      <span className="text-lg">{ingredient.emoji}</span>
      <span>{ingredient.names[language]}</span>
    </button>
  );
};

export default IngredientButton;