import { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import { useZodForm, SubmitHandler } from '@/hooks/useZodForm';
import { resetPasswordSchema, ResetPasswordFormValues } from '@/lib/validations/auth';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { FormError } from '@/components/ui/FormError';

/**
 * ResetPasswordForm component for password recovery
 */
export function ResetPasswordForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { resetPassword } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useZodForm(resetPasswordSchema);

  const onSubmit: SubmitHandler<ResetPasswordFormValues> = async (data) => {
    try {
      setIsLoading(true);
      setError(null);
      
      await resetPassword(data.email);
      setIsSuccess(true);
    } catch (error: any) {
      console.error('Password reset error:', error);
      
      // Handle specific Firebase auth errors
      if (error.code === 'auth/user-not-found') {
        setError('No account found with this email address.');
      } else {
        setError('Failed to send password reset email. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-light tracking-tight">Reset Password</h2>
        <p className="mt-2 text-muted-foreground">
          Enter your email address and we'll send you a link to reset your password
        </p>
      </div>

      {error && (
        <div className="p-3 rounded-md bg-destructive/10 text-destructive text-center">
          {error}
        </div>
      )}

      {isSuccess ? (
        <div className="space-y-6">
          <div className="p-4 rounded-md bg-primary/10 text-primary text-center">
            <p>Password reset link sent! Check your email for instructions.</p>
          </div>
          <Button
            variant="minimal"
            className="w-full"
            asChild
          >
            <Link href="/sign-in">Return to sign in</Link>
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="name@example.com"
              autoComplete="email"
              disabled={isLoading}
              {...register('email')}
            />
            <FormError message={errors.email?.message} />
          </div>

          <Button
            type="submit"
            className="w-full"
            variant="minimal"
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Send reset link'}
          </Button>

          <p className="text-center text-sm text-muted-foreground">
            Remember your password?{' '}
            <Link href="/sign-in" className="text-primary hover:underline">
              Sign in
            </Link>
          </p>
        </form>
      )}
    </div>
  );
}
