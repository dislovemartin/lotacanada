import { createContext, useContext, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

// Initialize Stripe with publishable key
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);

type PaymentContextType = {
  isProcessing: boolean;
  paymentError: string | null;
  paymentSuccess: boolean;
  setIsProcessing: (isProcessing: boolean) => void;
  setPaymentError: (error: string | null) => void;
  setPaymentSuccess: (success: boolean) => void;
  createPaymentIntent: (amount: number, currency: string) => Promise<{ clientSecret: string } | null>;
};

const PaymentContext = createContext<PaymentContextType | undefined>(undefined);

export function PaymentProvider({ children }: { children: React.ReactNode }) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentError, setPaymentError] = useState<string | null>(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const createPaymentIntent = async (amount: number, currency: string = 'cad') => {
    try {
      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount, currency }),
      });

      if (!response.ok) {
        throw new Error('Failed to create payment intent');
      }

      return await response.json();
    } catch (error) {
      setPaymentError(error instanceof Error ? error.message : 'An unknown error occurred');
      return null;
    }
  };

  const value = {
    isProcessing,
    paymentError,
    paymentSuccess,
    setIsProcessing,
    setPaymentError,
    setPaymentSuccess,
    createPaymentIntent,
  };

  return (
    <PaymentContext.Provider value={value}>
      <Elements stripe={stripePromise}>{children}</Elements>
    </PaymentContext.Provider>
  );
}

export function usePayment() {
  const context = useContext(PaymentContext);
  if (context === undefined) {
    throw new Error('usePayment must be used within a PaymentProvider');
  }
  return context;
}
