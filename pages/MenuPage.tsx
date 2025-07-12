import React, { useState, useMemo, useEffect } from 'react';
import { Page, UITexts, Language, MenuCategory, MenuItem, CartItem, CustomerDetails, AddOnItem } from '../types.ts';
import { menuData } from '../data/menu.ts';
import { playCuteClickSound } from '../utils/audio.ts';
import ProductModal from '../components/ProductModal.tsx';
import ShoppingCart from '../components/ShoppingCart.tsx';
import CheckoutView from '../components/CheckoutView.tsx';
import ConfirmationView from '../components/ConfirmationView.tsx';

interface MenuPageProps {
  uiTexts: UITexts;
  currentLanguage: Language;
  navigateTo: (page: Page, anchor?: string) => void;
}

const MenuHero: React.FC<{ uiTexts: UITexts }> = ({ uiTexts }) => (
  <section
    className="relative text-white py-20 sm:py-28 px-4 flex items-center justify-center text-center bg-cover bg-center"
    style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://i.postimg.cc/qR5SJjH9/juice-me-image-place-holder-and-background-decorative-0017.jpg')` }}
  >
    <div className="relative z-10 max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4" style={{ textShadow: '2px 3px 6px rgba(0,0,0,0.5)' }}>
        {uiTexts.menuHeroTitle}
      </h1>
      <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.6)' }}>
        {uiTexts.menuHeroSubtitle}
      </p>
    </div>
  </section>
);

const MenuPage: React.FC<MenuPageProps> = ({ uiTexts, currentLanguage, navigateTo }) => {
  const [pageState, setPageState] = useState<'menu' | 'checkout' | 'confirmation'>('menu');
  
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeModalItem, setActiveModalItem] = useState<{ item: MenuItem, category: MenuCategory } | null>(null);

  const [customerDetails, setCustomerDetails] = useState<CustomerDetails>({ name: '', phone: '', address: '' });

  useEffect(() => {
    // Reset state if language changes
    setCart([]);
    setIsCartOpen(false);
    setActiveModalItem(null);
    setPageState('menu');
  }, [currentLanguage]);

  const handleAddToCart = (item: MenuItem, quantity: number, selectedAddOns: AddOnItem[], basePrice: number) => {
    playCuteClickSound();
    const addOnsPrice = selectedAddOns.reduce((sum, addon) => sum + addon.price, 0);
    const itemPrice = basePrice + addOnsPrice;

    const cartId = `${item.name.en}-${selectedAddOns.map(a => a.name.en).sort().join('-')}`;

    setCart(prevCart => {
      const existingItemIndex = prevCart.findIndex(cartItem => cartItem.id === cartId);
      if (existingItemIndex > -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += quantity;
        return updatedCart;
      } else {
        return [...prevCart, { id: cartId, menuItem: item, quantity, selectedAddOns, itemPrice }];
      }
    });
    setActiveModalItem(null);
    setIsCartOpen(true);
  };
  
  const handleUpdateCartQuantity = (cartItemId: string, newQuantity: number) => {
     playCuteClickSound();
     setCart(prevCart => {
        if (newQuantity <= 0) {
            return prevCart.filter(item => item.id !== cartItemId);
        }
        return prevCart.map(item => item.id === cartItemId ? { ...item, quantity: newQuantity } : item);
     });
  };

  const handleCheckout = () => {
    playCuteClickSound();
    setIsCartOpen(false);
    setPageState('checkout');
  };

  const handleConfirmOrder = (details: CustomerDetails, orderNumber: string) => {
    playCuteClickSound();
    setCustomerDetails(details);
    // Here you would typically send the order to a backend
    console.log("Order Confirmed:", { cart, customerDetails: details, orderNumber });
    setPageState('confirmation');
    setCart([]); // Clear cart after order
  };

  const handleBackToMenu = () => {
    playCuteClickSound();
    setPageState('menu');
  }

  const renderMenu = () => (
    <>
      <div className="space-y-4">
        {menuData.map(category => (
          <div key={category.id} id={category.id} className="border border-slate-200 rounded-2xl overflow-hidden shadow-sm bg-white scroll-mt-24">
             <div className="flex items-center text-left p-4 sm:p-6">
                <img src={category.image} alt={category.title[currentLanguage]} className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg object-cover mr-4 shadow-md" />
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-800">{category.title[currentLanguage]}</h3>
                  <p className="text-sm text-slate-600 mt-1">{category.description[currentLanguage]}</p>
                  {category.priceNote && <p className="text-sm font-semibold text-rose-500 mt-1">{category.priceNote[currentLanguage]}</p>}
                </div>
              </div>
              <div className="p-4 sm:p-6 bg-slate-50/70 border-t border-slate-200">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {category.items.map(item => (
                        <button key={item.name.en} onClick={() => { playCuteClickSound(); setActiveModalItem({item, category})}} className="bg-white p-3 rounded-lg border border-slate-200 text-center shadow-sm hover:border-rose-300 hover:shadow-md transition-all duration-200">
                            <p className="font-semibold text-slate-800">{item.name[currentLanguage]}</p>
                            {item.price && <p className="text-sm text-rose-500 font-bold">{item.price}{uiTexts.currency}</p>}
                        </button>
                    ))}
                </div>
                 {category.addOns && (
                    <div className="mt-4 pt-4 border-t border-dashed border-slate-300">
                        <h4 className="font-semibold text-slate-700 mb-2">{category.addOns.title[currentLanguage]}</h4>
                        <div className="flex flex-wrap gap-2 text-sm">
                            {category.addOns.items.map(addon => (
                                <span key={addon.name[currentLanguage]} className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full">
                                    {addon.name[currentLanguage]} {addon.price ? ` (+${addon.price}${uiTexts.currency})` : ''}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
              </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center text-slate-600 font-semibold bg-amber-100 p-3 rounded-lg border border-amber-200">
          <p>✨ {uiTexts.menuExtraIceBlending} +10{uiTexts.currency} ✨</p>
      </div>
    </>
  );

  return (
    <div className="bg-fdf8f6 min-h-screen">
      <MenuHero uiTexts={uiTexts} />
      <main className="py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            {pageState === 'menu' && (
                <div className="text-center mb-10">
                    <button 
                        onClick={() => navigateTo('landing')}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-rose-400 hover:bg-rose-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-400 transition-colors"
                    >
                        &larr; {uiTexts.backToHome}
                    </button>
                </div>
            )}
            
            {pageState === 'menu' && (
              <>
                <div className="bg-sky-100/60 border-l-4 border-sky-400 text-sky-800 p-4 rounded-r-lg mb-10 shadow-sm flex items-start gap-3">
                    <div className="py-1 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div>
                        <p className="text-sm leading-relaxed">{uiTexts.menuIntroMessage}</p>
                    </div>
                </div>
                {renderMenu()}
              </>
            )}

            {pageState === 'checkout' && <CheckoutView cart={cart} uiTexts={uiTexts} language={currentLanguage} onConfirmOrder={handleConfirmOrder} onBack={() => setPageState('menu')} />}
            {pageState === 'confirmation' && <ConfirmationView uiTexts={uiTexts} onBackToMenu={handleBackToMenu}/>}

        </div>
      </main>

      {pageState === 'menu' && <ShoppingCart cart={cart} isOpen={isCartOpen} onToggle={setIsCartOpen} onUpdateQuantity={handleUpdateCartQuantity} onCheckout={handleCheckout} uiTexts={uiTexts} language={currentLanguage} /> }
      
      {activeModalItem && (
        <ProductModal 
          item={activeModalItem.item} 
          category={activeModalItem.category} 
          onAddToCart={handleAddToCart}
          onClose={() => setActiveModalItem(null)} 
          uiTexts={uiTexts}
          language={currentLanguage}
        />
      )}
    </div>
  );
};

export default MenuPage;