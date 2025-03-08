import { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { usePayment } from '@/contexts/PaymentContext';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

interface PaymentFormProps {
  amount: number;
  onSuccess?: () => void;
  onError?: (error: string) => void;
  className?: string;
}

/**
 * PaymentForm component for processing payments with Stripe
 */
export function PaymentForm({ amount, onSuccess, onError, className }: PaymentFormProps) {
  const stripe = useStripe();
  const elements = useElements();
  const { createPaymentIntent, setIsProcessing, setPaymentError, setPaymentSuccess } = usePayment();
  
  const [isLoading, setIsLoading] = useState(false);
  const [cardError, setCardError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet
      return;
    }

    try {
      setIsLoading(true);
      setCardError(null);
      setIsProcessing(true);
      setPaymentError(null);

      // Create a payment intent on the server
      const paymentIntentResult = await createPaymentIntent(amount);

      if (!paymentIntentResult?.clientSecret) {
        throw new Error('Failed to create payment intent');
      }

      // Confirm the payment with the card element
      const cardElement = elements.getElement(CardElement);
      
      if (!cardElement) {
        throw new Error('Card element not found');
      }

      const { error, paymentIntent } = await stripe.confirmCardPayment(
        paymentIntentResult.clientSecret,
        {
          payment_method: {
            card: cardElement,
          },
        }
      );

      if (error) {
        throw new Error(error.message || 'Payment failed');
      }

      if (paymentIntent.status === 'succeeded') {
        setPaymentSuccess(true);
        onSuccess?.();
      } else {
        throw new Error(`Payment status: ${paymentIntent.status}`);
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
      setCardError(errorMessage);
      setPaymentError(errorMessage);
      onError?.(errorMessage);
    } finally {
      setIsLoading(false);
      setIsProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={cn('space-y-6', className)}>
      <div className="space-y-4">
        <label htmlFor="card-element" className="text-sm font-medium">
          Card Details
        </label>
        <div className="p-3 border rounded-md bg-background">
          <CardElement
            id="card-element"
            options={{
              style: {
                base: {
                  fontSize: '16px',
                  color: '#32325d',
                  fontFamily: '"Inter", sans-serif',
                  '::placeholder': {
                    color: '#aab7c4',
                  },
                },
                invalid: {
                  color: '#ef4444',
                  iconColor: '#ef4444',
                },
              },
            }}
          />
        </div>
        {cardError && (
          <div className="text-sm font-medium text-destructive">{cardError}</div>
        )}
      </div>

      <div className="pt-2">
        <Button
          type="submit"
          className="w-full"
          variant="minimal"
          disabled={!stripe || isLoading}
        >
          {isLoading ? 'Processing...' : `Pay ${new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD' }).format(amount)}`}
        </Button>
      </div>
    </form>
  );
}
