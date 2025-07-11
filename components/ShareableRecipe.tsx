import React, { useState, useEffect } from 'react';
import { RecipeDetails, Language, Ingredient } from '../types.ts';
import { translations } from '../data/translations.ts';

interface ShareableRecipeProps {
  recipe: RecipeDetails;
  language: Language;
}

const groupIngredientsAndGetCounts = (list: Ingredient[]): Map<Ingredient, number> => {
    const ingredientMap = new Map<string, { ingredient: Ingredient, count: number }>();
    list.forEach(item => {
      if (ingredientMap.has(item.id)) {
        ingredientMap.get(item.id)!.count++;
      } else {
        ingredientMap.set(item.id, { ingredient: item, count: 1 });
      }
    });
    const result = new Map<Ingredient, number>();
    ingredientMap.forEach(value => result.set(value.ingredient, value.count));
    return result;
};


const ShareableRecipe: React.FC<ShareableRecipeProps> = ({ recipe, language }) => {
  const uiTexts = translations[language];
  const [imageLoadFailed, setImageLoadFailed] = useState(false);

  useEffect(() => {
    setImageLoadFailed(false); // Reset error state when image URL changes
  }, [recipe.imageUrl]);

  const handleImageError = () => {
    console.error(`Error loading image in ShareableRecipe: ${recipe.imageUrl}`);
    setImageLoadFailed(true);
  };

  const groupedSelectedFruits = groupIngredientsAndGetCounts(recipe.selectedFruits);
  const groupedSelectedAddOns = groupIngredientsAndGetCounts(recipe.selectedAddOns);

  const thaiIngredientsElements: React.ReactNode[] = [];
  const allGroupedIngredients = new Map([...groupedSelectedFruits, ...groupedSelectedAddOns]);
  
  let itemIndex = 0;
  allGroupedIngredients.forEach((count, ingredient) => {
    thaiIngredientsElements.push(
      <React.Fragment key={`${ingredient.id}-text`}>
        {ingredient.emoji} {ingredient.names[Language.TH]}
        {count > 1 && (
          <span className="text-red-500 font-semibold">{` (x${count})`}</span>
        )}
      </React.Fragment>
    );
    if (itemIndex < allGroupedIngredients.size - 1) {
      thaiIngredientsElements.push(<span key={`${ingredient.id}-comma`}>, </span>);
    }
    itemIndex++;
  });


  const watermarks = Array.from({ length: 6 }).map((_, index) => ({
    id: `wm-${index}`,
    text: "JUICE ME !",
    style: {
      position: 'absolute' as 'absolute',
      top: `${Math.random() * 85 + 7.5}%`, 
      left: `${Math.random() * 80 + 10}%`, 
      transform: `rotate(${Math.random() * 70 - 35}deg)`,
      color: 'rgba(255, 255, 255, 0.35)', 
      fontSize: `${Math.random() * 0.7 + 0.6}rem`,
      fontWeight: 'bold' as 'bold',
      pointerEvents: 'none' as 'none',
      zIndex: 1,
      fontFamily: "'Kanit', sans-serif",
      textShadow: '1px 1px 2px rgba(0,0,0,0.15)',
    }
  }));

  let formattedPurchaseTime: string | null = null;
  if (recipe.purchaseTimestamp) {
    try {
      const date = new Date(recipe.purchaseTimestamp);
      formattedPurchaseTime = date.toLocaleString(language === Language.TH ? 'th-TH' : language === Language.ZH ? 'zh-CN' : 'en-US', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit' 
      });
    } catch (e) {
      console.error("Error formatting purchase timestamp:", e);
    }
  }

  const orderDate = recipe.purchaseTimestamp ? new Date(recipe.purchaseTimestamp) : new Date();
  const day = String(orderDate.getDate()).padStart(2, '0');
  const month = String(orderDate.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed
  const year = String(orderDate.getFullYear()).slice(-2);
  const displayOrderNumber = `${day}${month}${year}-${recipe.orderSequenceNumber}`;

  return (
    <div 
      id="shareableRecipeContent" 
      className="p-6 bg-gradient-to-br from-rose-300 via-purple-300 to-amber-300 rounded-xl shadow-xl border-2 border-white/50 max-w-md mx-auto relative overflow-hidden"
    >
      
      {recipe.imageUrl && (
        <div className="relative w-full mb-5 shadow-lg rounded-lg overflow-hidden pt-[60%] bg-slate-200 border-4 border-white"> {/* 5:3 Aspect Ratio Container with fallback bg */}
          {!imageLoadFailed ? (
            <img 
              src={recipe.imageUrl} 
              alt={recipe.name} 
              className="absolute top-0 left-0 w-full h-full object-cover"
              onError={handleImageError}
            />
          ) : (
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center p-4">
              <p className="text-slate-600 text-center text-sm">
                🖼️ <br />
                {language === Language.TH ? "รูปภาพไม่พบ" : 
                 language === Language.ZH ? "图片未找到" : 
                 "Image not found."}
              </p>
            </div>
          )}

          {!imageLoadFailed && watermarks.map(wm => (
            <span key={wm.id} style={wm.style}>
              {wm.text}
            </span>
          ))}
          
          <div 
            className="absolute top-2 right-2 bg-black/60 text-white text-[10px] px-1.5 py-0.5 rounded-sm z-[2] font-mono shadow-sm"
            aria-label="Order Number"
          >
            {displayOrderNumber}
          </div>
        </div>
      )}
      
      {recipe.offlineCaption && (
        <div className="mb-4 p-3 bg-white/80 rounded-lg shadow-sm backdrop-blur-sm">
          <p className="text-sm font-semibold text-purple-600 text-center mb-0.5">{uiTexts.shareableOfflineStoryTitle || uiTexts.offlineRecipeStoryTitle}</p>
          <p 
            className="text-xs italic text-purple-700 text-center leading-normal whitespace-pre-line"
            style={{ fontFamily: "'Kanit', sans-serif"}}
          >
            {recipe.offlineCaption}
          </p>
        </div>
      )}

      <div className="p-3 bg-white/80 rounded-lg shadow-sm backdrop-blur-sm mb-3">
        <p className="text-sm font-semibold text-rose-600 mb-1">{uiTexts.shareableIngredientsLabel}</p>
        <p className="text-slate-800 text-xs leading-relaxed" style={{ fontFamily: "'Kanit', sans-serif"}}>
          {thaiIngredientsElements.map((el, idx) => <React.Fragment key={idx}>{el}</React.Fragment>)}
        </p>
      </div>

      {recipe.benefitsText && (
        <div className="p-3 bg-white/80 rounded-lg shadow-sm backdrop-blur-sm mb-3">
          <p className="text-sm font-semibold text-teal-600 mb-1">{uiTexts.shareableBenefitsLabel}</p>
          <p className="text-slate-800 text-xs leading-relaxed" style={{ fontFamily: "'Kanit', sans-serif"}}>
            {recipe.benefitsText}
          </p>
        </div>
      )}

      <div className="grid grid-cols-2 gap-3">
        {recipe.sweetness !== undefined && (
           <div className="p-3 bg-white/80 rounded-lg shadow-sm backdrop-blur-sm">
              <p className="text-xs font-semibold text-purple-600 mb-0.5 text-center">{uiTexts.sweetnessLabel}</p>
              <p className="text-slate-800 text-md font-bold text-center" style={{ fontFamily: "'Kanit', sans-serif"}}>
                  {recipe.sweetness}%
              </p>
          </div>
        )}

        {recipe.price !== undefined && (
          <div className="p-3 bg-white/80 rounded-lg shadow-sm backdrop-blur-sm">
            <p className="text-xs font-semibold text-green-600 mb-0.5 text-center">{uiTexts.priceLabel}</p>
            <p className="text-slate-800 text-md font-bold text-center" style={{ fontFamily: "'Kanit', sans-serif"}}>
              {recipe.price} {uiTexts.currency}
            </p>
          </div>
        )}
      </div>

      {formattedPurchaseTime && (
         <div className="p-2 bg-white/80 rounded-lg shadow-sm backdrop-blur-sm mt-3">
            <p className="text-[10px] font-semibold text-gray-600 mb-0 text-center">{uiTexts.purchaseTimeLabel}</p>
            <p className="text-gray-700 text-[11px] font-medium text-center" style={{ fontFamily: "'Kanit', sans-serif"}}>
                {formattedPurchaseTime}
            </p>
        </div>
      )}

    </div>
  );
};

export default ShareableRecipe;