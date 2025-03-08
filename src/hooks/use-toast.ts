import { useContext } from 'react';
import { ToastContext, ToastContextValue } from '@/components/ui/toast';

/**
 * Custom hook for accessing the toast context
 * Provides methods to add, remove, and manage toast notifications
 * 
 * @returns {ToastContextValue} Toast context value with methods to manage toasts
 * @throws {Error} If used outside of a ToastProvider
 */
export function useToast(): ToastContextValue {
  const context = useContext(ToastContext);
  
  if (context === undefined) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  
  return context;
}
