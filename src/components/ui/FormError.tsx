import { cn } from '@/lib/utils';

interface FormErrorProps {
  message?: string;
  className?: string;
}

/**
 * FormError component for displaying form validation errors
 */
export function FormError({ message, className }: FormErrorProps) {
  if (!message) return null;

  return (
    <p className={cn('text-sm font-medium text-destructive mt-1', className)}>
      {message}
    </p>
  );
}
