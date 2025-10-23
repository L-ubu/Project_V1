import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  variant?: 'elevated' | 'outlined' | 'filled';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  className?: string;
}

export function Card({
  children,
  variant = 'elevated',
  padding = 'md',
  className = '',
}: CardProps) {
  const variantClasses = {
    elevated: 'bg-gray-900 shadow-md border-0',
    outlined: 'bg-gray-900 border border-gray-800 shadow-none',
    filled: 'bg-gray-800 border-0 shadow-none',
  };

  const paddingClasses = {
    none: 'p-0',
    sm: 'p-2',
    md: 'p-6',
    lg: 'p-8',
  };

  return (
    <div className={`rounded-lg overflow-hidden transition-all duration-300 ${variantClasses[variant]} ${paddingClasses[padding]} ${className}`}>
      {children}
    </div>
  );
}