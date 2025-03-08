import { useForm, UseFormProps, SubmitHandler, UseFormReturn } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

/**
 * Custom hook for creating forms with Zod validation
 * @param schema - Zod schema for form validation
 * @param options - Additional options for useForm
 * @returns Form methods from react-hook-form with Zod validation
 */
export function useZodForm<TSchema extends z.ZodType>(
  schema: TSchema,
  options: Omit<UseFormProps<z.infer<TSchema>>, 'resolver'> = {}
): UseFormReturn<z.infer<TSchema>> {
  return useForm<z.infer<TSchema>>({
    ...options,
    resolver: zodResolver(schema),
  });
}

export type { SubmitHandler };
