import React, { useMemo } from 'react';
import { CartItem, UITexts, Language } from '../types.ts';
import { playCuteClickSound } from '../utils/audio.ts';

interface ShoppingCartProps {
    cart: CartItem[];
    isOpen: boolean;
    onToggle: (isOpen: boolean) => void;
    onUpdateQuantity: (cartItemId: string, newQuantity: number) => void;
    onCheckout: () => void;
    uiTexts: UITexts;
    language: Language;
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({ cart, isOpen, onToggle, onUpdateQuantity, onCheckout, uiTexts, language }) => {
    const totalItems = useMemo(() => cart.reduce((sum, item) => sum + item.quantity, 0), [cart]);
    const totalPrice = useMemo(() => cart.reduce((sum, item) => sum + (item.itemPrice * item.quantity), 0), [cart]);

    const handleToggle = () => {
        playCuteClickSound();
        onToggle(!isOpen);
    }
    
    return (
        <>
            {/* Floating Action Button */}
            <button
                onClick={handleToggle}
                className="fixed bottom-6 right-6 bg-pink-500 text-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center text-2xl z-[101] hover:bg-pink-600 transition-transform hover:scale-110"
                aria-label={uiTexts.cartTitle}
            >
                🛒
                {totalItems > 0 && (
                    <span className="absolute -top-1 -right-1 bg-white text-pink-500 text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-pink-200">
                        {totalItems}
                    </span>
                )}
            </button>
            
            {/* Cart Sidebar/Modal */}
            <div 
                className={`fixed inset-0 z-[102] transition-all duration-300 ${isOpen ? 'visible' : 'invisible'}`}
                onClick={handleToggle}
            >
                 <div className={`absolute inset-0 bg-black/50 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0'}`}></div>
                 <div 
                    className={`absolute top-0 right-0 h-full w-full max-w-sm bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <header className="flex items-center justify-between p-4 border-b">
                        <h2 className="text-xl font-bold text-slate-800">{uiTexts.cartTitle}</h2>
                        <button onClick={handleToggle} className="p-2 text-slate-500 hover:text-slate-800">&times;</button>
                    </header>
                    
                    <div className="flex-grow overflow-y-auto p-4">
                        {cart.length === 0 ? (
                            <p className="text-slate-500 text-center py-10">{uiTexts.emptyCart}</p>
                        ) : (
                            <ul className="space-y-4">
                                {cart.map(item => (
                                    <li key={item.id} className="flex gap-4 items-center">
                                        <div className="flex-grow">
                                            <p className="font-semibold text-slate-700">{item.menuItem.name[language]}</p>
                                            {item.selectedAddOns.length > 0 && (
                                                <p className="text-xs text-slate-500">
                                                   + {item.selectedAddOns.map(a => a.name[language]).join(', ')} 
                                                </p>
                                            )}
                                            <p className="text-sm text-rose-500 font-medium">{item.itemPrice}{uiTexts.currency}</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)} className="w-7 h-7 rounded-full bg-rose-100 text-rose-600 text-sm hover:bg-rose-200 transition">-</button>
                                            <span className="w-8 text-center font-bold text-black">{item.quantity}</span>
                                            <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)} className="w-7 h-7 rounded-full bg-rose-100 text-rose-600 text-sm hover:bg-rose-200 transition">+</button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    
                    {cart.length > 0 && (
                        <footer className="p-4 border-t bg-slate-50">
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-lg font-semibold">{uiTexts.total}</span>
                                <span className="text-xl font-bold text-rose-500">{totalPrice}{uiTexts.currency}</span>
                            </div>
                            <div className="space-y-3">
                                <button
                                    onClick={handleToggle}
                                    className="w-full px-6 py-2.5 bg-transparent border-2 border-rose-400 text-rose-500 font-semibold rounded-lg hover:bg-rose-50 transition-all"
                                >
                                    {uiTexts.continueShopping}
                                </button>
                                <button
                                    onClick={onCheckout}
                                    className="w-full px-6 py-3 bg-rose-400 text-white font-semibold text-md rounded-lg shadow-md hover:shadow-lg hover:bg-rose-500 transition-all"
                                >
                                    {uiTexts.checkout}
                                </button>
                            </div>
                        </footer>
                    )}
                </div>
            </div>
        </>
    );
};

export default ShoppingCart;