import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import { useZodForm, SubmitHandler } from '@/hooks/useZodForm';
import { signUpSchema, SignUpFormValues } from '@/lib/validations/auth';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { FormError } from '@/components/ui/FormError';

/**
 * SignUpForm component for new user registration
 */
export function SignUpForm() {
  const [authError, setAuthError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { signUp, updateUserProfile } = useAuth();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useZodForm(signUpSchema);

  const onSubmit: SubmitHandler<SignUpFormValues> = async (data) => {
    try {
      setIsLoading(true);
      setAuthError(null);
      
      // Create the user account
      await signUp(data.email, data.password);
      
      // Update the user profile with the display name
      await updateUserProfile(data.name);
      
      // Redirect to dashboard after successful registration
      router.push('/dashboard');
    } catch (error: any) {
      console.error('Sign up error:', error);
      
      // Handle specific Firebase auth errors
      if (error.code === 'auth/email-already-in-use') {
        setAuthError('This email is already in use. Please try another email or sign in.');
      } else {
        setAuthError('Failed to create account. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-light tracking-tight">Create an Account</h2>
        <p className="mt-2 text-muted-foreground">
          Register to access exclusive features and content
        </p>
      </div>

      {authError && (
        <div className="p-3 rounded-md bg-destructive/10 text-destructive text-center">
          {authError}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            Full Name
          </label>
          <Input
            id="name"
            type="text"
            placeholder="John Doe"
            autoComplete="name"
            disabled={isLoading}
            {...register('name')}
          />
          <FormError message={errors.name?.message} />
        </div>

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

        <div className="space-y-2">
          <label htmlFor="password" className="text-sm font-medium">
            Password
          </label>
          <Input
            id="password"
            type="password"
            placeholder="u2022u2022u2022u2022u2022u2022u2022u2022"
            autoComplete="new-password"
            disabled={isLoading}
            {...register('password')}
          />
          <FormError message={errors.password?.message} />
        </div>

        <div className="space-y-2">
          <label htmlFor="confirmPassword" className="text-sm font-medium">
            Confirm Password
          </label>
          <Input
            id="confirmPassword"
            type="password"
            placeholder="u2022u2022u2022u2022u2022u2022u2022u2022"
            autoComplete="new-password"
            disabled={isLoading}
            {...register('confirmPassword')}
          />
          <FormError message={errors.confirmPassword?.message} />
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="terms"
            className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
            disabled={isLoading}
            {...register('terms')}
          />
          <label htmlFor="terms" className="text-sm text-muted-foreground">
            I agree to the{' '}
            <Link href="/terms" className="text-primary hover:underline">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link href="/privacy" className="text-primary hover:underline">
              Privacy Policy
            </Link>
          </label>
        </div>
        <FormError message={errors.terms?.message} />

        <Button
          type="submit"
          className="w-full"
          variant="minimal"
          disabled={isLoading}
        >
          {isLoading ? 'Creating account...' : 'Create account'}
        </Button>
      </form>

      <p className="text-center text-sm text-muted-foreground">
        Already have an account?{' '}
        <Link href="/sign-in" className="text-primary hover:underline">
          Sign in
        </Link>
      </p>
    </div>
  );
}
