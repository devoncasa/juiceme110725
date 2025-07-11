import React, { useState, useCallback, useRef, useEffect } from 'react';
import html2canvas from 'html2canvas';
import { Language, Ingredient, RecipeDetails, UITexts } from '../types.ts';
import { translations } from '../data/translations.ts';
import { fruitList, specialAddOns } from '../data/ingredients.ts';
import { MAX_FRUITS_SELECTION, MAX_ADDON_INSTANCES_PER_TYPE, SWEETNESS_LEVELS, DEFAULT_SWEETNESS_LEVEL } from '../constants.ts';
import IngredientButton from './IngredientButton.tsx';
import RecipeCard from './RecipeCard.tsx';
import ShareableRecipe from './ShareableRecipe.tsx';
import SweetnessSelector from './SweetnessSelector.tsx';
import PasswordModal from './PasswordModal.tsx';
import AdminHub from './AdminHub.tsx';
import { playCuteClickSound } from '../utils/audio.ts';

const ADMIN_PASSWORD = "0007";

const getOrderSequenceNumber = (): string => {
  const globalStorageKey = 'juiceMeGlobalOrderCounter';
  let currentCounter = 1688; 

  try {
    const storedData = localStorage.getItem(globalStorageKey);
    if (storedData) {
      const parsedCounter = parseInt(storedData, 10);
      if (!isNaN(parsedCounter)) {
        currentCounter = parsedCounter + 1;
      } else {
        console.warn(`Invalid counter value ('${storedData}') in localStorage. Resetting sequence.`);
      }
    }
    localStorage.setItem(globalStorageKey, String(currentCounter));
  } catch (e) {
    console.warn("Could not access localStorage for order sequence:", e);
  }
  
  return String(currentCounter).padStart(5, '0');
};

const generateOfflineCaption = (
  fruits: Ingredient[],
  addOns: Ingredient[],
  lang: Language,
  uiTexts: UITexts
): string => {
  const selectedIngredients = [...fruits, ...addOns];
  if (selectedIngredients.length === 0) return "";

  let storyParts: string[] = [];
  
  const narrativeStyles = {
    [Language.EN]: {
      intro: "Let's dive into the story of your amazing smoothie! 🌟 ",
      connectors: [
        "First up, ", "Then, dancing in comes ", "Adding to the magic is ", 
        "And let's not forget the wonderful ", "Making a grand entrance is ", "Joining the party is "
      ],
      outro: " What a fantastic blend of goodness! Each sip is a journey of flavor and vitality. Enjoy your creation! 🥳"
    },
    [Language.TH]: {
      intro: "มาฟังเรื่องราวสุดพิเศษของสมูทตี้แก้วนี้กัน! 🌟 ",
      connectors: [
        "เริ่มต้นด้วย ", "ตามมาติดๆ กับ ", "เพิ่มความมหัศจรรย์ด้วย ", 
        "และขาดไม่ได้เลยกับ ", "เปิดตัวอย่างยิ่งใหญ่โดย ", "เข้าร่วมวงความอร่อยด้วย "
      ],
      outro: " เป็นการผสมผสานคุณประโยชน์ที่ยอดเยี่ยมจริงๆ! ทุกคำคือการเดินทางของรสชาติและพลังชีวิต ขอให้มีความสุขกับสูตรของคุณนะคะ! 🥳"
    },
    [Language.ZH]: {
      intro: "让我们深入了解您这杯神奇果昔的故事吧！🌟 ",
      connectors: [
        "首先是 ", "紧随其后的是 ", "增添魔力的是 ", 
        "当然不能忘了还有 ", "隆重登场的是 ", "加入这场盛宴的是 "
      ],
      outro: " 多么奇妙的美味组合！每一口都是风味与活力的旅程。尽情享用您的创作吧！🥳"
    }
  };

  const currentStyle = narrativeStyles[lang];
  storyParts.push(currentStyle.intro);

  const usedBenefits: Set<string> = new Set(); 

  selectedIngredients.forEach((ing, index) => {
    const name = ing.names[lang];
    const emoji = ing.emoji;
    
    let pickedBenefits: string[] = [];
    const availableBenefitsForLang = ing.benefits && ing.benefits[lang] ? ing.benefits[lang] : [];
    const availableBenefits = availableBenefitsForLang.filter(b => !usedBenefits.has(b));
    
    if (availableBenefits.length > 0) {
      const firstBenefit = availableBenefits[Math.floor(Math.random() * availableBenefits.length)];
      pickedBenefits.push(firstBenefit);
      usedBenefits.add(firstBenefit);
    }
    if (availableBenefits.length > 1 && pickedBenefits.length < 2 && availableBenefitsForLang.length > 0) { 
        const secondBenefitCandidates = availableBenefitsForLang.filter(b => !usedBenefits.has(b) && !pickedBenefits.includes(b));
        if (secondBenefitCandidates.length > 0) {
            const secondBenefit = secondBenefitCandidates[Math.floor(Math.random() * secondBenefitCandidates.length)];
            pickedBenefits.push(secondBenefit);
            usedBenefits.add(secondBenefit);
        }
    }
    
    const benefitsString = pickedBenefits.join(uiTexts.benefitSeparator) || 
                           (lang === Language.TH ? "คุณประโยชน์มากมาย" : 
                           lang === Language.EN ? "many great benefits" : "众多益处");

    const connector = currentStyle.connectors[index % currentStyle.connectors.length];
    const commonPart = `${index === 0 ? '' : connector}${name} ${emoji}`;
    let statement;

    if (lang === Language.TH) {
        statement = `${commonPart} มี ${benefitsString}. `;
    } else if (lang === Language.ZH) {
        statement = `${commonPart}，${benefitsString}。`;
    } else { // Default to English style
        statement = `${commonPart}, offering its ${benefitsString}. `;
    }
    storyParts.push(statement);
  });

  storyParts.push(currentStyle.outro);
  return storyParts.join("");
};

// A map of color/fruit keywords to a list of appropriate image URLs
const smoothieImageLibrary = {
  red: [
    'https://i.postimg.cc/sftfKJG6/juice-me-image-place-holder-and-background-decorative-0014.jpg', // Category B
    'https://i.postimg.cc/W1SvRmtP/juice-me-image-place-holder-and-background-decorative-003.jpg',  // Category B
    'https://i.postimg.cc/gkVpsbWj/juice-me-image-place-holder-and-background-decorative-005.jpg',  // Category B
    'https://i.postimg.cc/TwwBvBFV/juice-me-image-place-holder-and-background-decorative-0018.jpg', // Category C (pouring red)
  ],
  yellow: [
    'https://i.postimg.cc/g0TbjYvS/juice-me-image-place-holder-and-background-decorative-001.jpg', // Category B
    'https://i.postimg.cc/5jcrvy0g/juice-me-image-place-holder-and-background-decorative-0016.jpg',// Category B
    'https://i.postimg.cc/DZSFPWv3/juice-me-image-place-holder-and-background-decorative-009.jpg', // Category C
  ],
  green: [
    'https://i.postimg.cc/25crWdfx/juice-me-image-place-holder-and-background-decorative-0010.jpg', // Category B
    'https://i.postimg.cc/gk8z76vY/juice-me-image-place-holder-and-background-decorative-0015.jpg', // Category B
    'https://i.postimg.cc/WpDbMyzq/juice-me-image-place-holder-and-background-decorative-0019.jpg', // Category C (apples)
  ],
  purple: [
    'https://i.postimg.cc/gkVpsbWj/juice-me-image-place-holder-and-background-decorative-005.jpg', // Category B (purple/red)
    'https://i.postimg.cc/8krNFrXh/juice-me-image-place-holder-and-background-decorative-007.jpg', // Category C
  ],
  white: [
     'https://i.postimg.cc/X7S397tt/juice-me-image-place-holder-and-background-decorative-006.jpg', // Category B
     'https://i.postimg.cc/Zn3SX1vf/juice-me-image-place-holder-and-background-decorative-008.jpg', // Category C
  ],
  generic: [
    'https://i.postimg.cc/Zn3SX1vf/juice-me-image-place-holder-and-background-decorative-008.jpg', // Category C (various)
    'https://i.postimg.cc/TwwBvBFV/juice-me-image-place-holder-and-background-decorative-0018.jpg', // Category C (pouring)
    'https://i.postimg.cc/DZSFPWv3/juice-me-image-place-holder-and-background-decorative-009.jpg', // Category C
  ]
};

// Map fruit IDs to color categories
const fruitToColorMap: { [key: string]: keyof typeof smoothieImageLibrary } = {
  strawberry: 'red', raspberry: 'red', pomegranate: 'red', watermelon: 'red',
  mango: 'yellow', orange: 'yellow', pineapple: 'yellow', peach: 'yellow', lemon: 'yellow', papaya: 'yellow', carrot: 'yellow', passion_fruit: 'yellow',
  kiwi: 'green', avocado: 'green', pear: 'green', apple: 'green', guava: 'green',
  blueberry: 'purple', grapes: 'purple', dragon_fruit: 'purple',
  banana: 'white', coconut: 'white', yogurt: 'white', lychee: 'white',
};

const selectOfflineSmoothieImage = (selectedFruits: Ingredient[]): string => {
  if (selectedFruits.length === 0) {
    const generics = smoothieImageLibrary.generic;
    return generics[Math.floor(Math.random() * generics.length)];
  }

  // Count colors from selected fruits
  const colorCounts: { [color: string]: number } = {};
  selectedFruits.forEach(fruit => {
    const color = fruitToColorMap[fruit.id];
    if (color) {
      colorCounts[color] = (colorCounts[color] || 0) + 1;
    }
  });

  // Find the dominant color
  let dominantColor: keyof typeof smoothieImageLibrary = 'generic';
  let maxCount = 0;
  for (const color in colorCounts) {
    if (colorCounts[color] > maxCount) {
      maxCount = colorCounts[color];
      dominantColor = color as keyof typeof smoothieImageLibrary;
    }
  }
  
  // Get a random image from the dominant color category
  const imagePool = smoothieImageLibrary[dominantColor] || smoothieImageLibrary.generic;
  return imagePool[Math.floor(Math.random() * imagePool.length)];
};


interface SmoothieBuilderProps {
  currentLanguage: Language;
}

const SmoothieBuilder: React.FC<SmoothieBuilderProps> = ({ currentLanguage }) => {
  const [selectedFruits, setSelectedFruits] = useState<Ingredient[]>([]);
  const [selectedAddOns, setSelectedAddOns] = useState<Ingredient[]>([]);
  const [selectedSweetness, setSelectedSweetness] = useState<number>(DEFAULT_SWEETNESS_LEVEL);
  const [generatedRecipe, setGeneratedRecipe] = useState<RecipeDetails | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showShareModal, setShowShareModal] = useState<boolean>(false);

  const [showPasswordModal, setShowPasswordModal] = useState<boolean>(false);
  const [passwordInput, setPasswordInput] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [showAdminHub, setShowAdminHub] = useState<boolean>(false);

  const [fruitAvailability, setFruitAvailability] = useState<Record<string, boolean>>(() => {
    const initialAvailability: Record<string, boolean> = {};
    fruitList.forEach(fruit => initialAvailability[fruit.id] = true);
    return initialAvailability;
  });

  const uiTexts: UITexts = translations[currentLanguage];
  const outputAreaRef = useRef<HTMLDivElement>(null);

  // Effect to reset state when language changes
  useEffect(() => {
    setSelectedFruits([]);
    setSelectedAddOns([]);
    setSelectedSweetness(DEFAULT_SWEETNESS_LEVEL);
    setGeneratedRecipe(null);
    setError(null);
    setShowShareModal(false);
    setShowPasswordModal(false);
    setShowAdminHub(false);
    setPasswordInput("");
    setPasswordError(null);
  }, [currentLanguage]);
  
  const handleAddIngredientInstance = useCallback((ingredient: Ingredient, type: 'fruit' | 'addon') => {
    setGeneratedRecipe(null);
    setError(null);
    setShowShareModal(false);

    if (type === 'fruit') {
      if (!fruitAvailability[ingredient.id]) {
        alert(currentLanguage === Language.TH ? "ผลไม้นี้หมดชั่วคราวค่ะ" : "This fruit is currently unavailable.");
        return;
      }
      if (selectedFruits.length >= MAX_FRUITS_SELECTION) {
        alert(uiTexts.alertMaxFruitItems);
        return;
      }
      setSelectedFruits(prev => [...prev, ingredient]);
    } else {
      const currentAddOnCount = selectedAddOns.filter(item => item.id === ingredient.id).length;
      if (currentAddOnCount >= MAX_ADDON_INSTANCES_PER_TYPE) {
        alert(translations[currentLanguage].alertMaxAddOnItemsPerType || `You can only add "${ingredient.names[currentLanguage]}" up to ${MAX_ADDON_INSTANCES_PER_TYPE} times.`);
        return;
      }
      setSelectedAddOns(prev => [...prev, ingredient]);
    }
  }, [selectedFruits.length, selectedAddOns, uiTexts.alertMaxFruitItems, currentLanguage, translations, fruitAvailability]);

  const handleSweetnessChange = (sweetness: number) => {
    setSelectedSweetness(sweetness);
    setGeneratedRecipe(null);
    setError(null);
    setShowShareModal(false);
  };

  const getIngredientCounts = (list: Ingredient[]): Record<string, number> => {
    return list.reduce((acc, item) => {
      acc[item.id] = (acc[item.id] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
  };

  const fruitCounts = getIngredientCounts(selectedFruits);
  const addOnCounts = getIngredientCounts(selectedAddOns);

  const groupIngredientsAndGetCountsForDisplay = (
    list: Ingredient[]
  ): Map<Ingredient, number> => {
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

  const generateCreativeName = useCallback(() => {
    const { adjectives, nouns, creativeNameRecipePrefix } = uiTexts;
    if (selectedFruits.length === 0 && selectedAddOns.length === 0) return `${creativeNameRecipePrefix} ${currentLanguage === Language.TH ? "พิเศษ" : "Special"}`;
    
    const firstSelectedIngredient = selectedFruits[0] || selectedAddOns[0];
    if (!firstSelectedIngredient) return `${creativeNameRecipePrefix} ${currentLanguage === Language.TH ? "สูตรของคุณ" : "Your Recipe"}`;

    const mainIngredientName = firstSelectedIngredient.names[currentLanguage];
    const randomAdj = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    return `${creativeNameRecipePrefix} "${mainIngredientName} ${randomAdj} ${randomNoun}"`;
  }, [selectedFruits, selectedAddOns, uiTexts, currentLanguage]);

  const handleGenerateRecipe = useCallback(async () => { 
    playCuteClickSound();
    if (selectedFruits.length === 0) {
      alert(uiTexts.alertMinOneFruit);
      return;
    }

    setError(null);
    setShowShareModal(false);

    const recipeName = generateCreativeName();
    const purchaseTimestamp = Date.now(); 
    const orderSequence = getOrderSequenceNumber();

    const groupedSelectedFruitsTh = groupIngredientsAndGetCountsForDisplay(selectedFruits);
    const groupedSelectedAddOnsTh = groupIngredientsAndGetCountsForDisplay(selectedAddOns);
    const ingredientsTextPartsTh: string[] = [];
    groupedSelectedFruitsTh.forEach((count, ingredient) => {
      ingredientsTextPartsTh.push(`${ingredient.emoji} ${ingredient.names[Language.TH]}${count > 1 ? ` (x${count})` : ''}`);
    });
    groupedSelectedAddOnsTh.forEach((count, ingredient) => {
      ingredientsTextPartsTh.push(`${ingredient.emoji} ${ingredient.names[Language.TH]}${count > 1 ? ` (x${count})` : ''}`);
    });
    const ingredientsTextForRecipe = ingredientsTextPartsTh.join(", "); 
    
    const uniqueIngredientTypes = new Map<string, Ingredient>();
    [...selectedFruits, ...selectedAddOns].forEach(item => {
        if (!uniqueIngredientTypes.has(item.id)) {
            uniqueIngredientTypes.set(item.id, item);
        }
    });
    const allBenefitsNested = Array.from(uniqueIngredientTypes.values()).flatMap(item => 
        item.benefits && item.benefits[currentLanguage] ? item.benefits[currentLanguage].slice(0, 2) : []
    ); 
    const uniqueBenefits = [...new Set(allBenefitsNested)];
    const benefitsText = uniqueBenefits.join(uiTexts.benefitSeparator);

    let calculatedPrice = 0;
    if (selectedFruits.length > 0) calculatedPrice += 80;
    calculatedPrice += selectedAddOns.length * 12;

    const offlineStoryCaption = generateOfflineCaption(selectedFruits, selectedAddOns, currentLanguage, uiTexts);
    const imageUrl = selectOfflineSmoothieImage(selectedFruits);

    const finalRecipe: RecipeDetails = {
      name: recipeName,
      ingredientsText: ingredientsTextForRecipe,
      benefitsText,
      offlineCaption: offlineStoryCaption,
      imageUrl,
      price: calculatedPrice,
      selectedFruits: [...selectedFruits],
      selectedAddOns: [...selectedAddOns],
      sweetness: selectedSweetness,
      purchaseTimestamp,
      orderSequenceNumber: orderSequence,
    };
    setGeneratedRecipe(finalRecipe);

  }, [selectedFruits, selectedAddOns, selectedSweetness, generateCreativeName, currentLanguage, uiTexts]);


  useEffect(() => {
    if (generatedRecipe && !showShareModal && !showAdminHub && outputAreaRef.current) {
        const shouldScroll = generatedRecipe.offlineCaption || generatedRecipe.imageUrl;
        if (shouldScroll) {
            outputAreaRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
  }, [generatedRecipe, showShareModal, showAdminHub]);


  const handleClearAll = useCallback(() => {
    playCuteClickSound();
    setSelectedFruits([]);
    setSelectedAddOns([]);
    setSelectedSweetness(DEFAULT_SWEETNESS_LEVEL);
    setGeneratedRecipe(null);
    setError(null);
    setShowShareModal(false);
  }, []);

  const handlePrepareShare = () => {
    setShowShareModal(true);
  };

  const handleDownloadImage = async () => {
    playCuteClickSound();
    const element = document.getElementById('shareableRecipeContent');
    if (element && generatedRecipe) {
      try {
        const canvas = await html2canvas(element, { 
          useCORS: true, 
          scale: 2.5, 
          backgroundColor: null, 
         });
        const image = canvas.toDataURL('image/png', 1.0);
        const link = document.createElement('a');
        link.href = image;
        
        let filename = "smoothie_recipe";
        if (generatedRecipe.offlineCaption) {
            filename = generatedRecipe.offlineCaption
                .substring(0, 50) 
                .toLowerCase()
                .replace(/\s+/g, '_') 
                .replace(/[^\wㄱ-ㅎㅏ-ㅣ가-힣一-龠ぁ-ゔァ-ヶー]+/g, '');
        } else if (generatedRecipe.name) { 
             filename = generatedRecipe.name
                .toLowerCase()
                .replace(/\s+/g, '_') 
                .replace(/[^\wㄱ-ㅎㅏ-ㅣ가-힣一-龠ぁ-ゔァ-ヶー]+/g, '') 
                .substring(0, 50); 
        }
        if (!filename || filename.length < 3) filename = "juice_me_smoothie";

        link.download = `${filename}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setShowShareModal(false);
        handleClearAll(); 
      } catch (err) {
        console.error('Error generating image for download:', err);
        setError(currentLanguage === Language.TH ? 'ไม่สามารถสร้างรูปภาพสำหรับดาวน์โหลดได้ โปรดลองจับภาพหน้าจอแทน' : 'Could not generate image for download. Please try screenshotting instead.');
      }
    } else {
      setShowShareModal(false);
    }
  };
  
  const handleCloseShareModal = () => {
    playCuteClickSound();
    setShowShareModal(false);
  };

  const handleLogoClick = () => {
    playCuteClickSound();
    setShowPasswordModal(true);
    setPasswordInput("");
    setPasswordError(null);
  };

  const handleClosePasswordModal = () => {
    playCuteClickSound();
    setShowPasswordModal(false);
    setPasswordInput("");
    setPasswordError(null);
  };

  const handlePasswordInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordInput(e.target.value);
    if (passwordError) setPasswordError(null);
  };

  const handlePasswordSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    playCuteClickSound();
    if (passwordInput === ADMIN_PASSWORD) {
      setShowAdminHub(true);
      setShowPasswordModal(false);
      setPasswordInput("");
      setPasswordError(null);
    } else {
      setPasswordError(uiTexts.incorrectPasswordMessage);
      setPasswordInput("");
    }
  };

  const handleCloseAdminHub = () => {
    playCuteClickSound();
    setShowAdminHub(false);
  };

  const handleToggleFruitAvailability = (fruitId: string) => {
    playCuteClickSound();
    setFruitAvailability(prev => ({
      ...prev,
      [fruitId]: !prev[fruitId]
    }));
    if (fruitAvailability[fruitId]) { 
      setSelectedFruits(prevSelected => prevSelected.filter(f => f.id !== fruitId));
    }
  };

  const logoUrl = "https://i.postimg.cc/xCK6YWWc/juice-me-logo-color.png";

  if (showAdminHub) {
    return (
      <AdminHub 
        onClose={handleCloseAdminHub} 
        fruitList={fruitList}
        fruitAvailability={fruitAvailability}
        onToggleFruitAvailability={handleToggleFruitAvailability}
      />
    );
  }

  const availableFruitsForSelection = fruitList.filter(fruit => fruitAvailability[fruit.id]);

  return (
    <div className="relative flex flex-col items-center p-4 sm:p-6 font-['Kanit',_sans-serif] text-slate-700 py-20 sm:py-24 bg-white">
      <div 
        className="absolute top-0 left-0 w-full h-full z-[-1] bg-gradient-to-br from-rose-200/20 via-purple-100/20 to-amber-100/20"
      ></div>

      <div className="relative z-[1] w-full max-w-4xl mx-auto">
        <header className="text-center mb-4 pb-4 border-b-2 border-dashed border-rose-300/70"> 
          <button 
            onClick={handleLogoClick}
            className="mx-auto block cursor-pointer p-0 border-none bg-transparent hover:opacity-90 transition-opacity"
            aria-label="Access Admin Hub"
          >
            <img 
              src={logoUrl} 
              alt="Juice Me Logo - Click to access Admin Hub" 
              className="h-24 w-24 rounded-full object-cover shadow-lg border-4 border-white"
            />
          </button>
          <h1 className="text-4xl sm:text-5xl font-bold text-rose-500 tracking-tight">{uiTexts.appTitle}</h1>
          <p className="text-lg text-slate-600 mt-1">{uiTexts.appSubtitle}</p>
        </header>
      </div>

      <div className="relative z-[1] bg-white/90 backdrop-blur-sm w-full max-w-4xl p-6 sm:p-10 rounded-xl shadow-xl mt-4 subtle-fruit-pattern-bg">
        <main>
          <section className="mb-10"> 
            <h2 className="text-2xl font-semibold text-rose-600 mb-5 text-center">{uiTexts.selectFruitsTitle}</h2>
            <div className="flex flex-wrap gap-4 justify-center">
              {availableFruitsForSelection.map(fruit => (
                <IngredientButton
                  key={fruit.id}
                  ingredient={fruit}
                  count={fruitCounts[fruit.id] || 0}
                  onClick={() => handleAddIngredientInstance(fruit, 'fruit')}
                  language={currentLanguage}
                />
              ))}
              {availableFruitsForSelection.length === 0 && (
                <p className="text-slate-500 text-center w-full">{currentLanguage === Language.TH ? "ไม่มีผลไม้ให้บริการในขณะนี้" : "No fruits currently available."}</p>
              )}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-rose-600 mb-5 text-center">{uiTexts.selectAddOnsTitle}</h2>
            <div className="flex flex-wrap gap-4 justify-center">
              {specialAddOns.map(addon => (
                <IngredientButton
                  key={addon.id}
                  ingredient={addon}
                  count={addOnCounts[addon.id] || 0}
                  onClick={() => handleAddIngredientInstance(addon, 'addon')}
                  language={currentLanguage}
                />
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-purple-600 mb-5 text-center">{uiTexts.selectSweetnessTitle}</h2>
            <SweetnessSelector
              currentSweetness={selectedSweetness}
              onSweetnessChange={handleSweetnessChange}
              language={currentLanguage}
            />
          </section>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 my-10">
            <button
              id="generateBtn"
              onClick={handleGenerateRecipe}
              disabled={selectedFruits.length === 0}
              className="px-10 py-4 bg-rose-400 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl hover:bg-rose-500 hover:scale-105 transform transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-rose-300 focus:ring-opacity-75 w-full sm:w-auto disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center group"
            >
                <>
                <span className="group-hover:animate-pulse">✨</span>
                <span className="mx-2">{uiTexts.generateButton}</span>
                <span className="group-hover:animate-pulse">🍹</span>
                </>
            </button>
            <button
              id="clearBtn"
              onClick={handleClearAll}
              className="px-8 py-3 bg-transparent text-rose-500 font-semibold rounded-full border-2 border-rose-300 hover:bg-rose-100 hover:border-rose-400 hover:text-rose-600 transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-rose-300 w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {uiTexts.clearButton}
            </button>
          </div>
          
          {error && (
            <div className="my-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded-md shadow-md text-sm">
              <strong className="font-semibold">Oops! </strong>{error}
            </div>
          )}

          <div ref={outputAreaRef}>
            {generatedRecipe && (
              <RecipeCard 
                recipe={generatedRecipe} 
                language={currentLanguage}
                onPrepareShare={handlePrepareShare} 
              />
            )}
          </div>
        </main>
      </div>

      {showShareModal && generatedRecipe && (
        <div className="fixed inset-0 bg-slate-800 bg-opacity-80 backdrop-blur-sm flex items-center justify-center p-4 z-50 transition-opacity duration-300 ease-in-out animate-fadeInModal">
          <div className="bg-gradient-to-br from-rose-50 to-purple-50 p-6 rounded-xl shadow-2xl max-w-lg w-full relative overflow-y-auto max-h-[90vh] border border-rose-200">
            <button 
              onClick={handleCloseShareModal}
              className="absolute top-3 right-3 text-slate-500 hover:text-rose-600 p-1 rounded-full hover:bg-rose-100 transition-colors text-2xl z-10"
              aria-label="Close modal"
            >
              &times;
            </button>
            <h2 className="text-2xl font-semibold text-rose-500 text-center mb-5">{uiTexts.shareModalTitle}</h2>
            
            <ShareableRecipe recipe={generatedRecipe} language={currentLanguage} />
            
            <button
              onClick={handleDownloadImage}
              className="mt-6 w-full px-6 py-3 bg-emerald-400 hover:bg-emerald-500 text-white font-semibold text-md rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-opacity-50 flex items-center justify-center disabled:opacity-70"
            >
               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              {uiTexts.downloadImageButton}
            </button>
          </div>
          <style>{`
            @keyframes fadeInModal {
              from { opacity: 0; transform: scale(0.95); }
              to { opacity: 1; transform: scale(1); }
            }
            .animate-fadeInModal { animation: fadeInModal 0.3s ease-out forwards; }
          `}</style>
        </div>
      )}

      {showPasswordModal && (
        <PasswordModal 
          uiTexts={uiTexts}
          password={passwordInput}
          passwordError={passwordError}
          onPasswordChange={handlePasswordInputChange}
          onSubmit={handlePasswordSubmit}
          onClose={handleClosePasswordModal}
        />
      )}
    </div>
  );
};

export default SmoothieBuilder;