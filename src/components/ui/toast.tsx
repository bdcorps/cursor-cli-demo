'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';
import clsx from 'clsx';

interface Toast {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
}

interface ToastContextType {
  toasts: Toast[];
  showToast: (message: string, type?: Toast['type']) => void;
  removeToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = useCallback((message: string, type: Toast['type'] = 'info') => {
    const id = Math.random().toString(36).substr(2, 9);
    const newToast: Toast = { id, message, type };
    
    setToasts(prev => [...prev, newToast]);
    
    // Auto-remove toast after 3 seconds
    setTimeout(() => {
      setToasts(prev => prev.filter(toast => toast.id !== id));
    }, 3000);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ toasts, showToast, removeToast }}>
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}

function ToastContainer() {
  const { toasts, removeToast } = useToast();

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={clsx(
            'px-4 py-3 rounded-lg shadow-lg max-w-sm transition-all duration-300 transform',
            'animate-in slide-in-from-right-full',
            {
              'bg-blue-500 text-white': toast.type === 'info',
              'bg-green-500 text-white': toast.type === 'success',
              'bg-red-500 text-white': toast.type === 'error',
              'bg-yellow-500 text-black': toast.type === 'warning',
            }
          )}
          onClick={() => removeToast(toast.id)}
          role="alert"
          aria-live="polite"
        >
          <div className="flex items-center justify-between">
            <span className="font-medium">{toast.message}</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                removeToast(toast.id);
              }}
              className="ml-2 text-current opacity-70 hover:opacity-100"
              aria-label="Close notification"
            >
              ×
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}