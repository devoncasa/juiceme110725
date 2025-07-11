import React from 'react';
import { Ingredient, Language } from '../types.ts';
import { translations } from '../data/translations.ts'; // Import translations directly

interface AdminHubProps {
  onClose: () => void;
  fruitList: Ingredient[];
  fruitAvailability: Record<string, boolean>;
  onToggleFruitAvailability: (fruitId: string) => void;
  // language prop removed as it's no longer used for display
  // uiTexts prop removed as we use translations[Language.TH] directly
}

const AdminHub: React.FC<AdminHubProps> = ({ 
  onClose,
  fruitList,
  fruitAvailability,
  onToggleFruitAvailability,
}) => {
  const adminHubThaiTexts = translations[Language.TH]; // Use Thai texts directly

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 font-['Kanit',_sans-serif] text-slate-700 bg-slate-100">
      <div className="bg-white/90 backdrop-blur-sm w-full max-w-2xl p-6 sm:p-10 rounded-xl shadow-xl border border-slate-200">
        <header className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-700 tracking-tight">
            {adminHubThaiTexts.adminHubTitle} {/* Directly use Thai text */}
          </h1>
        </header>
        
        <main>
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-slate-700 mb-4 text-center">
              {adminHubThaiTexts.adminManageFruitsTitle} {/* Directly use Thai text */}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {fruitList.map((fruit) => {
                const isAvailable = fruitAvailability[fruit.id];
                return (
                  <button
                    key={fruit.id}
                    onClick={() => onToggleFruitAvailability(fruit.id)}
                    className={`p-3 border rounded-lg cursor-pointer text-sm font-medium transition-all duration-200 ease-in-out flex flex-col items-center justify-center space-y-1 shadow-sm hover:shadow-md ${isAvailable ? 'bg-green-50 hover:bg-green-100 border-green-300 text-green-800' : 'bg-red-50 hover:bg-red-100 border-red-300 text-red-700 opacity-70'}`}
                    aria-pressed={!isAvailable} 
                    aria-label={`Toggle availability for ${fruit.names[Language.TH]}`}
                  >
                    <span className="text-2xl">{fruit.emoji}</span>
                    <span className={`text-center ${!isAvailable ? 'line-through' : ''}`}>
                      {fruit.names[Language.TH]} {/* Always use Thai fruit name */}
                    </span>
                    <span className={`text-xs font-semibold uppercase mt-1 px-2 py-0.5 rounded-full ${isAvailable ? 'bg-green-200 text-green-700' : 'bg-red-200 text-red-700'}`}>
                      {isAvailable ? 'พร้อมขาย' : 'หมด'} {/* Hardcoded Thai status */}
                    </span>
                  </button>
                );
              })}
              {fruitList.length === 0 &&
                <p className="text-slate-500 text-center w-full col-span-full">ไม่มีผลไม้ในระบบ</p>
              }
            </div>
          </section>
          
          <div className="text-center mt-10">
            <button
              onClick={onClose}
              className="px-8 py-3 bg-rose-400 hover:bg-rose-500 text-white font-semibold text-md rounded-lg shadow-md hover:shadow-lg transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-rose-300 focus:ring-opacity-50"
            >
              {adminHubThaiTexts.adminHubCloseButton} {/* Directly use Thai text */}
            </button>
          </div>
        </main>
      </div>
      <footer className="text-center mt-12 mb-6 text-sm text-slate-600">
        <p>&copy; {new Date().getFullYear()} Juice Me App - ศูนย์จัดการผู้ดูแล.</p>
      </footer>
    </div>
  );
};

export default AdminHub;
