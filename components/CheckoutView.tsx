import React, { useState, useRef, useEffect } from 'react';
import html2canvas from 'html2canvas';
import { CartItem, CustomerDetails, UITexts, Language } from '../types.ts';
import ShareableOrderSummary from './ShareableOrderSummary.tsx';
import { generateOrderNumber } from '../utils/order.ts';


interface CheckoutViewProps {
    cart: CartItem[];
    uiTexts: UITexts;
    language: Language;
    onConfirmOrder: (details: CustomerDetails, orderNumber: string) => void;
    onBack: () => void;
}

const CheckoutView: React.FC<CheckoutViewProps> = ({ cart, uiTexts, language, onConfirmOrder, onBack }) => {
    const [details, setDetails] = useState<CustomerDetails>({ name: '', phone: '', address: '' });
    const [capturedSummaryImage, setCapturedSummaryImage] = useState<string | null>(null);
    const [isCapturing, setIsCapturing] = useState(false);
    const [orderNumber, setOrderNumber] = useState('');
    const summaryRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setOrderNumber(generateOrderNumber());
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setDetails(prev => ({ ...prev, [name]: value }));
    };

    const handleCaptureSummary = async () => {
        if (!summaryRef.current || isCapturing) return;
        setIsCapturing(true);
        try {
            const canvas = await html2canvas(summaryRef.current, { useCORS: true, scale: 2.5, backgroundColor: '#ffffff' });
            const imageUrl = canvas.toDataURL('image/png', 1.0);
            setCapturedSummaryImage(imageUrl);
        } catch (error) {
            console.error("Error capturing summary:", error);
            alert("Could not capture summary image. Please try again.");
        } finally {
            setIsCapturing(false);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onConfirmOrder(details, orderNumber);
    };
    
    const totalPrice = cart.reduce((sum, item) => sum + (item.itemPrice * item.quantity), 0);
    const isFormValid = details.name.trim() !== '' && details.phone.trim() !== '' && details.address.trim() !== '';

    return (
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl animate-fadeIn">
            <header className="flex items-center justify-center mb-6 border-b pb-4 relative">
                 <button onClick={onBack} className="absolute left-0 p-2 text-slate-500 hover:text-rose-500 transition-colors" aria-label={uiTexts.continueShopping}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                 <h1 className="text-2xl sm:text-3xl font-bold text-slate-800">{uiTexts.checkoutTitle}</h1>
            </header>

            {/* This hidden div is the source for the screenshot */}
            <div style={{ position: 'absolute', left: '-9999px', top: 'auto', width: '380px' }}>
                <div ref={summaryRef}>
                    <ShareableOrderSummary cart={cart} customerDetails={details} uiTexts={uiTexts} language={language} totalPrice={totalPrice} orderNumber={orderNumber} />
                </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
                {/* Customer Info */}
                <section>
                    <h2 className="text-xl font-semibold text-slate-700 mb-4">ขั้นตอนที่ 1: {uiTexts.customerInfo}</h2>
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-slate-600 mb-1">{uiTexts.fullNameLabel}</label>
                            <input type="text" id="name" name="name" value={details.name} onChange={handleInputChange} className="w-full p-2 border border-slate-300 rounded-md shadow-sm focus:ring-rose-400 focus:border-rose-400" required />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-slate-600 mb-1">{uiTexts.phoneLabel}</label>
                            <input type="tel" id="phone" name="phone" value={details.phone} onChange={handleInputChange} className="w-full p-2 border border-slate-300 rounded-md shadow-sm focus:ring-rose-400 focus:border-rose-400" required />
                        </div>
                        <div>
                            <label htmlFor="address" className="block text-sm font-medium text-slate-600 mb-1">{uiTexts.addressLabel}</label>
                            <textarea id="address" name="address" value={details.address} onChange={handleInputChange} rows={3} className="w-full p-2 border border-slate-300 rounded-md shadow-sm focus:ring-rose-400 focus:border-rose-400" required></textarea>
                        </div>
                    </div>
                </section>
                
                {/* Order Summary */}
                <section>
                    <h2 className="text-xl font-semibold text-slate-700 mb-4">{uiTexts.orderSummary}</h2>
                    <div className="space-y-3 bg-slate-50 p-4 rounded-lg border">
                        {cart.map(item => (
                            <div key={item.id} className="text-sm pb-2 border-b border-slate-200/60 last:border-b-0 last:pb-0">
                                <div className="flex justify-between">
                                    <span className="text-slate-700 font-semibold">{item.menuItem.name[language]} x{item.quantity}</span>
                                    <span className="font-semibold text-slate-800">{(item.itemPrice * item.quantity)}{uiTexts.currency}</span>
                                </div>
                                 {item.selectedAddOns.length > 0 && (
                                    <div className="pl-4 mt-1 text-xs text-sky-700">
                                        + {item.selectedAddOns.map(addon => addon.name[language]).join(', ')}
                                    </div>
                                )}
                            </div>
                        ))}
                        <div className="flex justify-between font-bold text-lg pt-3 border-t-2 border-slate-300">
                             <span>{uiTexts.total}</span>
                             <span>{totalPrice}{uiTexts.currency}</span>
                        </div>
                    </div>
                </section>
                
                {/* Capture Summary Section */}
                <section>
                    <h2 className="text-xl font-semibold text-slate-700 mb-2">{uiTexts.captureSummaryTitle}</h2>
                    <div className="bg-slate-50 p-4 rounded-lg border text-center">
                        <p className="text-sm text-slate-600 mb-4">{uiTexts.captureSummaryInstruction}</p>
                        <button type="button" onClick={handleCaptureSummary} disabled={!isFormValid || isCapturing} className="w-full px-4 py-2 bg-rose-500 text-white font-semibold rounded-lg shadow-md hover:bg-rose-600 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                            {isCapturing ? 'กำลังบันทึก...' : uiTexts.captureSummaryButton}
                        </button>

                        {capturedSummaryImage && (
                            <div className="mt-4">
                                <h3 className="text-sm font-semibold text-slate-600 mb-2">{uiTexts.captureSummaryPreview}</h3>
                                <img src={capturedSummaryImage} alt="Order Summary Preview" className="max-w-xs mx-auto rounded-md shadow-lg border-2 border-white"/>
                                <a href={capturedSummaryImage} download={`order-${orderNumber}.png`} className="inline-block mt-3 text-sm text-teal-600 hover:text-teal-800 font-semibold">
                                    {uiTexts.downloadCapturedImage}
                                </a>
                            </div>
                        )}
                    </div>
                </section>

                {/* Payment */}
                <section>
                    <h2 className="text-xl font-semibold text-slate-700 mb-4">ขั้นตอนที่ 3: {uiTexts.paymentInfo}</h2>
                    <div className="text-center bg-slate-50 p-6 rounded-lg border space-y-4">
                        <p className="text-sm text-slate-600">{uiTexts.paymentInstructions}</p>
                        <img src="https://i.postimg.cc/ZqkPJfQ0/juice-me-mobile-banking-qr-code.jpg" alt="Payment QR Code" className="mx-auto w-48 h-48 rounded-md shadow-md object-contain" />
                    </div>
                </section>

                <div className="pt-4 border-t">
                    <button type="submit" disabled={!isFormValid || !capturedSummaryImage} className="w-full px-6 py-4 bg-emerald-500 text-white font-bold text-lg rounded-lg shadow-lg hover:shadow-xl hover:bg-emerald-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed">
                        {uiTexts.confirmOrder}
                    </button>
                </div>
            </form>
            <style>{`.animate-fadeIn { animation: fadeIn 0.5s ease-out forwards; } @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }`}</style>
        </div>
    );
};

export default CheckoutView;