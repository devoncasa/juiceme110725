import React from 'react';
import { UITexts } from '../types.ts';

interface PasswordModalProps {
  uiTexts: UITexts;
  password: string;
  passwordError: string | null;
  onPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onClose: () => void;
}

const PasswordModal: React.FC<PasswordModalProps> = ({ 
  uiTexts, 
  password, 
  passwordError, 
  onPasswordChange, 
  onSubmit, 
  onClose 
}) => {
  return (
    <div className="fixed inset-0 bg-slate-800 bg-opacity-80 backdrop-blur-sm flex items-center justify-center p-4 z-[60] transition-opacity duration-300 ease-in-out animate-fadeInModal">
      <div className="bg-gradient-to-br from-rose-50 to-purple-50 p-6 sm:p-8 rounded-xl shadow-2xl w-full max-w-sm relative border border-rose-200">
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 text-slate-500 hover:text-rose-500 p-1 rounded-full hover:bg-rose-100 transition-colors text-2xl z-10"
          aria-label={uiTexts.passwordModalCloseLabel}
        >
          &times;
        </button>
        <h2 className="text-xl sm:text-2xl font-semibold text-rose-500 text-center mb-6">{uiTexts.passwordModalTitle}</h2>
        
        <form onSubmit={onSubmit} className="space-y-5">
          <div>
            <label htmlFor="adminPassword" className="block text-sm font-medium text-slate-700 mb-1.5">
              {uiTexts.passwordLabel}
            </label>
            <input
              type="password"
              id="adminPassword"
              name="adminPassword"
              value={password}
              onChange={onPasswordChange}
              className={`w-full px-4 py-2.5 border rounded-lg shadow-sm focus:outline-none focus:ring-2 transition-colors
                ${passwordError 
                  ? 'border-red-400 focus:ring-red-400 bg-red-50' 
                  : 'border-rose-300 focus:ring-rose-300 focus:border-rose-400 bg-white'
                }
              `}
              required
              autoFocus
            />
          </div>

          {passwordError && (
            <p className="text-sm text-red-600 text-center -mt-2">{passwordError}</p>
          )}

          <button
            type="submit"
            className="w-full px-6 py-3 bg-rose-400 text-white font-semibold text-md rounded-lg shadow-md hover:shadow-lg hover:bg-rose-500 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-rose-300 focus:ring-opacity-50"
          >
            {uiTexts.submitPasswordButton}
          </button>
        </form>
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

export default PasswordModal;