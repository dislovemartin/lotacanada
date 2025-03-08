import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";

export interface ToastProps {
  id: string;
  title?: string;
  description?: string;
  action?: React.ReactNode;
  variant?: "default" | "success" | "error" | "warning" | "info";
  duration?: number;
  onClose: (id: string) => void;
}

const variantStyles = {
  default: "bg-background border border-border",
  success: "bg-green-50 border border-green-200 dark:bg-green-950 dark:border-green-800",
  error: "bg-red-50 border border-red-200 dark:bg-red-950 dark:border-red-800",
  warning: "bg-yellow-50 border border-yellow-200 dark:bg-yellow-950 dark:border-yellow-800",
  info: "bg-blue-50 border border-blue-200 dark:bg-blue-950 dark:border-blue-800",
};

const variantIconStyles = {
  default: "text-foreground",
  success: "text-green-500 dark:text-green-400",
  error: "text-red-500 dark:text-red-400",
  warning: "text-yellow-500 dark:text-yellow-400",
  info: "text-blue-500 dark:text-blue-400",
};

export const Toast = React.forwardRef<HTMLDivElement, ToastProps>(
  ({ id, title, description, action, variant = "default", duration = 5000, onClose }, ref) => {
    useEffect(() => {
      const timer = setTimeout(() => {
        onClose(id);
      }, duration);

      return () => clearTimeout(timer);
    }, [id, duration, onClose]);

    return (
      <div
        ref={ref}
        className={cn(
          "pointer-events-auto flex w-full max-w-sm items-start gap-3 rounded-md p-4 shadow-lg",
          "animate-in slide-in-from-top-full fade-in duration-300",
          variantStyles[variant]
        )}
        role="alert"
        aria-live="assertive"
      >
        {variant !== "default" && (
          <div className={cn("flex-shrink-0", variantIconStyles[variant])}>
            {variant === "success" && (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            )}
            {variant === "error" && (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
            )}
            {variant === "warning" && (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                <line x1="12" y1="9" x2="12" y2="13" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
            )}
            {variant === "info" && (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="16" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12.01" y2="8" />
              </svg>
            )}
          </div>
        )}
        <div className="flex-1 space-y-1">
          {title && <h3 className="font-medium">{title}</h3>}
          {description && <p className="text-sm text-muted-foreground">{description}</p>}
          {action && <div className="mt-2">{action}</div>}
        </div>
        <button
          onClick={() => onClose(id)}
          className="flex-shrink-0 rounded-md p-1 text-foreground/50 hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
          <span className="sr-only">Close</span>
        </button>
      </div>
    );
  }
);

Toast.displayName = "Toast";

export interface ToastProviderProps {
  children: React.ReactNode;
}

export interface ToastContextValue {
  toasts: ToastProps[];
  addToast: (toast: Omit<ToastProps, "id" | "onClose">) => void;
  removeToast: (id: string) => void;
  removeAllToasts: () => void;
}

export const ToastContext = React.createContext<ToastContextValue | undefined>(undefined);

export function ToastProvider({ children }: ToastProviderProps) {
  const [toasts, setToasts] = useState<ToastProps[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  const addToast = (toast: Omit<ToastProps, "id" | "onClose">) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { ...toast, id, onClose: removeToast }]);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  const removeAllToasts = () => {
    setToasts([]);
  };

  const contextValue: ToastContextValue = {
    toasts,
    addToast,
    removeToast,
    removeAllToasts,
  };

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
      {isMounted && typeof document !== 'undefined' &&
        createPortal(
          <div className="fixed top-0 right-0 z-50 flex max-h-screen w-full flex-col-reverse gap-2 p-4 sm:max-w-sm">
            {toasts.map((toast) => (
              <Toast key={toast.id} {...toast} />
            ))}
          </div>,
          document.body
        )}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = React.useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}
