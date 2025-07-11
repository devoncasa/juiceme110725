import React, { useState, useEffect } from 'react';
import { RecipeDetails, Language } from '../types.ts';
import { translations } from '../data/translations.ts';
import { playCuteClickSound } from '../utils/audio.ts';

interface RecipeCardProps {
  recipe: RecipeDetails;
  language: Language;
  onPrepareShare: () => void;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, language, onPrepareShare }) => {
  const uiTexts = translations[language];
  const [imageLoadFailed, setImageLoadFailed] = useState(false);

  useEffect(() => {
    setImageLoadFailed(false); // Reset error state when image URL changes
  }, [recipe.imageUrl]);

  const handlePrepareShareClick = () => {
    playCuteClickSound();
    onPrepareShare();
  };

  const handleImageError = () => {
    console.error(`Error loading image in RecipeCard: ${recipe.imageUrl}`);
    setImageLoadFailed(true);
  };

  return (
    <div className="mt-8 p-6 bg-white/80 backdrop-blur-sm border border-rose-200/80 rounded-xl shadow-lg animate-fadeIn">
      <h2 className="text-3xl font-semibold text-rose-400 text-center mb-3">{uiTexts.outputTitle}</h2>
      <h3 className="text-2xl font-medium text-orange-500 text-center mb-6">{recipe.name}</h3>
      
      {recipe.imageUrl && (
        <div className="my-6 flex flex-col items-center">
          {!imageLoadFailed ? (
            <img 
              src={recipe.imageUrl} 
              alt={recipe.name} 
              className="rounded-lg shadow-xl max-w-xs sm:max-w-md mx-auto border-4 border-white"
              onError={handleImageError}
            />
          ) : (
            <div className="rounded-lg shadow-xl max-w-xs sm:max-w-md mx-auto border-4 border-white bg-slate-100 flex items-center justify-center aspect-[3/4] p-4">
              <p className="text-slate-500 text-center">
                🖼️ <br /> 
                {language === Language.TH ? "รูปภาพไม่พร้อมใช้งาน" : 
                 language === Language.ZH ? "图片无法加载" : 
                 "Image not available."}
              </p>
            </div>
          )}
        </div>
      )}

      {recipe.offlineCaption && (
        <div className="my-6 p-4 bg-purple-50 border border-purple-200 rounded-lg shadow-sm">
          <h4 className="text-lg font-semibold text-purple-600 mb-2 text-center">{uiTexts.offlineRecipeStoryTitle}</h4>
          <p 
            className="text-md text-slate-700 leading-relaxed text-center whitespace-pre-line"
            style={{ fontFamily: "'Kanit', sans-serif"}}
          >
            {recipe.offlineCaption}
          </p>
        </div>
      )}

      <div className="space-y-3 mt-6">
        <p className="text-slate-700 text-md">
          <strong className="font-semibold text-slate-800">{uiTexts.ingredientsLabel}</strong><br/> {recipe.ingredientsText}
        </p>
        <p className="text-slate-700 text-md">
          <strong className="font-semibold text-slate-800">{uiTexts.benefitsLabel}</strong><br/> {recipe.benefitsText}
        </p>
      </div>
      
      {recipe.price !== undefined && (
        <p className="text-slate-800 font-bold mt-6 text-2xl text-center bg-amber-100 p-4 rounded-lg border border-amber-300 shadow-sm">
          {uiTexts.priceLabel} {recipe.price} {uiTexts.currency}
        </p>
      )}

      <button
        onClick={handlePrepareShareClick}
        className="mt-8 w-full px-6 py-3.5 bg-gradient-to-r from-teal-300 to-cyan-400 hover:from-teal-400 hover:to-cyan-500 text-white font-semibold text-lg rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-teal-300 focus:ring-opacity-50 flex items-center justify-center group"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2.5 transform group-hover:rotate-12 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
          <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
        </svg>
        {uiTexts.prepareShareButton}
      </button>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.6s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default RecipeCard;