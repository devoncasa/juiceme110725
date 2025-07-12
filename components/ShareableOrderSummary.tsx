import React from 'react';
import { CartItem, CustomerDetails, Language, UITexts } from '../types.ts';

interface ShareableOrderSummaryProps {
  cart: CartItem[];
  customerDetails: CustomerDetails;
  uiTexts: UITexts;
  language: Language;
  totalPrice: number;
  orderNumber: string;
}

const ShareableOrderSummary: React.FC<ShareableOrderSummaryProps> = ({ cart, customerDetails, uiTexts, language, totalPrice, orderNumber }) => {
  return (
    <div 
      id="shareableOrderSummary" 
      className="p-5 bg-white rounded-lg shadow-inner border border-slate-200 relative"
    >
      <div 
        className="absolute top-2 right-2 bg-black/60 text-white text-[10px] px-1.5 py-0.5 rounded-sm z-10 font-mono shadow-sm"
        aria-label="Order Number"
      >
        {orderNumber}
      </div>
      
      <header className="text-center mb-4 pb-3 border-b-2 border-dashed border-slate-300">
        <img 
          src="https://i.postimg.cc/xCK6YWWc/juice-me-logo-color.png" 
          alt="Juice Me Logo" 
          className="h-14 w-14 mx-auto mb-2" 
        />
        <h3 className="font-bold text-lg text-slate-800">Juice Me - Order Summary</h3>
        <p className="text-xs text-slate-500">{new Date().toLocaleString(language, { dateStyle: 'medium', timeStyle: 'short' })}</p>
      </header>

      <section className="mb-4">
        <h4 className="font-semibold text-sm text-slate-600 mb-1">Customer:</h4>
        <p className="text-sm text-slate-800 font-medium">{customerDetails.name}</p>
        <p className="text-xs text-slate-600">{customerDetails.phone}</p>
        <p className="text-xs text-slate-600">{customerDetails.address}</p>
      </section>

      <section>
        <h4 className="font-semibold text-sm text-slate-600 mb-2 pt-3 border-t-2 border-dashed border-slate-300">Items:</h4>
        <div className="space-y-2 text-xs">
          {cart.map(item => (
            <div key={item.id} className="grid grid-cols-4 gap-2 items-start">
              <div className="col-span-2">
                <p className="font-medium text-slate-800">{item.menuItem.name[language]}</p>
                {/* List each add-on on a new line for clarity */}
                {item.selectedAddOns.length > 0 && (
                  <div className="pl-2 mt-0.5">
                      {item.selectedAddOns.map(addon => (
                        <p key={addon.name.en} className="text-sky-600 text-[11px]">
                          + {addon.name[language]}
                        </p>
                      ))}
                  </div>
                )}
              </div>
              <p className="text-slate-600 text-center font-mono">x{item.quantity}</p>
              <p className="font-medium text-slate-700 text-right font-mono">{(item.itemPrice * item.quantity)}{uiTexts.currency}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="mt-4 pt-3 border-t-2 border-dashed border-slate-300">
        <div className="flex justify-between items-center">
          <p className="font-bold text-md text-slate-800">{uiTexts.total}</p>
          <p className="font-bold text-xl text-rose-500">{totalPrice}{uiTexts.currency}</p>
        </div>
      </footer>
    </div>
  );
};

export default ShareableOrderSummary;