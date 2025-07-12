import React, { useState } from 'react';
import { MenuItem, MenuCategory, UITexts, Language, AddOnItem } from '../types.ts';
import { playCuteClickSound } from '../utils/audio.ts';

interface ProductModalProps {
  item: MenuItem;
  category: MenuCategory;
  onAddToCart: (item: MenuItem, quantity: number, selectedAddOns: AddOnItem[], basePrice: number) => void;
  onClose: () => void;
  uiTexts: UITexts;
  language: Language;
}

const ProductModal: React.FC<ProductModalProps> = ({ item, category, onAddToCart, onClose, uiTexts, language }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedAddOns, setSelectedAddOns] = useState<AddOnItem[]>([]);

  const basePrice = item.price ?? parseInt(category.priceNote?.[language].match(/\d+/)?.[0] || '0', 10);
  
  const handleQuantityChange = (amount: number) => {
    playCuteClickSound();
    setQuantity(prev => Math.max(1, prev + amount));
  };

  const handleAddOnToggle = (addOn: AddOnItem) => {
    playCuteClickSound();
    setSelectedAddOns(prev =>
      prev.some(a => a.name.en === addOn.name.en)
        ? prev.filter(a => a.name.en !== addOn.name.en)
        : [...prev, addOn]
    );
  };
  
  const totalAddOnsPrice = selectedAddOns.reduce((sum, addon) => sum + addon.price, 0);
  const totalPrice = (basePrice + totalAddOnsPrice) * quantity;

  const handleAddToCartClick = () => {
    onAddToCart(item, quantity, selectedAddOns, basePrice);
  };

  return (
    <div className="fixed inset-0 bg-slate-800 bg-opacity-75 backdrop-blur-sm flex items-center justify-center p-4 z-[100] transition-opacity duration-300 ease-in-out animate-fadeInModal">
      <div className="bg-white p-6 rounded-2xl shadow-2xl w-full max-w-md relative border border-rose-200 flex flex-col max-h-[90vh]">
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 text-slate-500 hover:text-rose-600 p-1 rounded-full hover:bg-rose-100 transition-colors text-2xl z-10"
          aria-label="Close modal"
        >
          &times;
        </button>
        
        <header className="text-center mb-4">
            <h2 className="text-2xl font-bold text-slate-800">{item.name[language]}</h2>
            <p className="text-sm text-slate-500">{item.ingredients?.[language]}</p>
        </header>

        <div className="overflow-y-auto pr-2 -mr-2">
            {item.description?.[language] && <p className="text-slate-600 mb-4">{item.description[language]}</p>}

            {category.addOns && category.addOns.items.length > 0 && (
            <div className="mb-4">
                <h3 className="font-semibold text-slate-700 mb-2">{category.addOns.title[language]}</h3>
                <div className="space-y-2">
                {category.addOns.items.map(addOn => (
                    <label key={addOn.name.en} className="flex items-center p-3 bg-slate-50 rounded-lg cursor-pointer hover:bg-slate-100 transition-colors">
                    <input
                        type="checkbox"
                        className="h-5 w-5 rounded border-gray-300 text-rose-500 focus:ring-rose-400"
                        checked={selectedAddOns.some(a => a.name.en === addOn.name.en)}
                        onChange={() => handleAddOnToggle(addOn)}
                    />
                    <span className="ml-3 text-slate-700">{addOn.name[language]}</span>
                    <span className="ml-auto font-medium text-slate-600">+{addOn.price}{uiTexts.currency}</span>
                    </label>
                ))}
                </div>
            </div>
            )}
        </div>

        <footer className="mt-auto pt-6 border-t border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <label className="font-semibold text-slate-700">{uiTexts.quantity}:</label>
            <div className="flex items-center gap-2">
              <button onClick={() => handleQuantityChange(-1)} className="w-8 h-8 rounded-full bg-rose-100 text-rose-600 hover:bg-rose-200 transition">-</button>
              <span className="w-10 text-center font-bold text-lg text-black">{quantity}</span>
              <button onClick={() => handleQuantityChange(1)} className="w-8 h-8 rounded-full bg-rose-100 text-rose-600 hover:bg-rose-200 transition">+</button>
            </div>
          </div>
          <button
            onClick={handleAddToCartClick}
            className="w-full px-6 py-3.5 bg-rose-400 text-white font-semibold text-md rounded-lg shadow-md hover:shadow-lg hover:bg-rose-500 transition-all duration-300 ease-in-out"
          >
            {uiTexts.addToCart} - {totalPrice}{uiTexts.currency}
          </button>
        </footer>
      </div>
       <style>{`
        @keyframes fadeInModal {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeInModal { animation: fadeInModal 0.3s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default ProductModal;