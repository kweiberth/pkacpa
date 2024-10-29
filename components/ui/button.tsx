import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-md font-medium ring-offset-white transition-colors transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300',
  {
    variants: {
      variant: {
        default:
          'bg-neutral-900 text-neutral-50 dark:bg-neutral-50 dark:text-neutral-900 [@media(hover:hover)]:hover:text-pka-gold dark:[@media(hover:hover)]:hover:bg-neutral-50/90',
        destructive:
          'bg-red-500 text-neutral-50 dark:bg-red-900 dark:text-neutral-50 [@media(hover:hover)]:hover:bg-red-500/90 dark:[@media(hover:hover)]:hover:bg-red-900/90',
        outline:
          'border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950 [@media(hover:hover)]:hover:bg-neutral-100 [@media(hover:hover)]:hover:text-neutral-900 dark:[@media(hover:hover)]:hover:bg-neutral-800 dark:[@media(hover:hover)]:hover:text-neutral-50',
        secondary:
          'bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-50 [@media(hover:hover)]:hover:bg-neutral-100/80 dark:[@media(hover:hover)]:hover:bg-neutral-800/80',
        ghost:
          'dark:text-neutral-50 [@media(hover:hover)]:hover:bg-neutral-100 [@media(hover:hover)]:hover:text-neutral-900 dark:[@media(hover:hover)]:hover:bg-neutral-800 dark:[@media(hover:hover)]:hover:text-neutral-50',
        link: 'text-neutral-900 underline-offset-4 dark:text-neutral-50 [@media(hover:hover)]:hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-lg px-3',
        lg: 'h-11 rounded-lg px-8',
        xl: 'h-12 rounded-lg px-10',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
