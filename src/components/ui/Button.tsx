import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'contained' | 'outlined' | 'text';
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary' | 'inherit';
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export function Button({
  children,
  variant = 'contained',
  size = 'medium',
  color = 'primary',
  disabled = false,
  loading = false,
  fullWidth = false,
  onClick,
  type = 'button',
  className = '',
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center gap-2 border-2 border-transparent font-medium text-decoration-none cursor-pointer transition-all duration-200 relative overflow-hidden';
  
  const sizeClasses = {
    small: 'px-3 py-1.5 text-sm min-h-8',
    medium: 'px-4 py-2 text-base min-h-10',
    large: 'px-6 py-3 text-lg min-h-12',
  };

  const variantClasses = {
    contained: color === 'inherit' 
      ? 'bg-white bg-opacity-20 text-white border-white border-opacity-30 hover:bg-opacity-30 hover:-translate-y-0.5 hover:shadow-lg'
      : 'bg-blue-600 text-white border-blue-600 hover:bg-blue-700 hover:-translate-y-0.5 hover:shadow-lg',
    outlined: color === 'inherit'
      ? 'bg-transparent text-white border-white border-opacity-50 hover:bg-white hover:bg-opacity-10 hover:-translate-y-0.5'
      : 'bg-transparent text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white hover:-translate-y-0.5',
    text: color === 'inherit'
      ? 'bg-transparent text-white border-transparent hover:bg-white hover:bg-opacity-10'
      : 'bg-transparent text-blue-600 border-transparent hover:bg-blue-100',
  };

  const disabledClasses = disabled || loading ? 'opacity-60 cursor-not-allowed pointer-events-none' : '';
  const fullWidthClasses = fullWidth ? 'w-full' : '';

  return (
    <motion.button
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${disabledClasses} ${fullWidthClasses} ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled || loading}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      {loading && (
        <div className="w-4 h-4 border-2 border-transparent border-t-current rounded-full animate-spin" />
      )}
      {children}
    </motion.button>
  );
}