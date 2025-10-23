import { ReactNode } from 'react';

interface TypographyProps {
  children: ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2' | 'caption' | 'overline';
  color?: 'primary' | 'secondary' | 'tertiary' | 'inherit';
  align?: 'left' | 'center' | 'right' | 'justify';
  gutterBottom?: boolean;
  noWrap?: boolean;
  maxWidth?: string;
  mx?: string;
  opacity?: number;
  className?: string;
}

export function Typography({
  children,
  variant = 'body1',
  color = 'primary',
  align,
  gutterBottom = false,
  noWrap = false,
  maxWidth,
  mx,
  opacity,
  className = '',
}: TypographyProps) {
  const variantClasses = {
    h1: 'text-5xl font-bold leading-tight',
    h2: 'text-4xl font-bold leading-tight',
    h3: 'text-3xl font-semibold leading-tight',
    h4: 'text-2xl font-semibold leading-normal',
    h5: 'text-xl font-medium leading-normal',
    h6: 'text-lg font-medium leading-normal',
    body1: 'text-base font-normal leading-relaxed',
    body2: 'text-sm font-normal leading-normal',
    caption: 'text-xs font-normal leading-normal',
    overline: 'text-xs font-medium leading-normal uppercase tracking-wider',
  };

  const colorClasses = {
    primary: 'text-white',
    secondary: 'text-gray-400',
    tertiary: 'text-gray-500',
    inherit: 'text-inherit',
  };

  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
    justify: 'text-justify',
  };

  const gutterBottomClass = gutterBottom ? 'mb-4' : '';
  const noWrapClass = noWrap ? 'whitespace-nowrap overflow-hidden text-ellipsis' : '';

  const style = {
    ...(maxWidth && { maxWidth }),
    ...(mx && { marginLeft: mx, marginRight: mx }),
    ...(opacity !== undefined && { opacity }),
  };

  const Component = variant.startsWith('h') ? variant : 'div';

  return (
    <Component
      className={`${variantClasses[variant]} ${colorClasses[color]} ${align ? alignClasses[align] : ''} ${gutterBottomClass} ${noWrapClass} ${className}`}
      style={style}
    >
      {children}
    </Component>
  );
}