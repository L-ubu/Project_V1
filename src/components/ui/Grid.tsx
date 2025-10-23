import { ReactNode } from 'react';

interface GridProps {
  children: ReactNode;
  columns?: number | { xs?: number; sm?: number; md?: number; lg?: number; xl?: number };
  gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export function Grid({
  children,
  columns = 1,
  gap = 'md',
  className = '',
}: GridProps) {
  const gapClasses = {
    xs: 'gap-1',
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-6',
    xl: 'gap-8',
  };

  const getGridClasses = () => {
    if (typeof columns === 'number') {
      const colsMap: Record<number, string> = {
        1: 'grid-cols-1',
        2: 'grid-cols-2',
        3: 'grid-cols-3',
        4: 'grid-cols-4',
        6: 'grid-cols-6',
        12: 'grid-cols-12',
      };
      return `grid ${colsMap[columns] || 'grid-cols-1'}`;
    }

    if (typeof columns === 'object') {
      const classes = ['grid', 'grid-cols-1'];
      
      if (columns.xs === 1) classes.push('grid-cols-1');
      if (columns.sm === 2) classes.push('sm:grid-cols-2');
      if (columns.sm === 3) classes.push('sm:grid-cols-3');
      if (columns.md === 2) classes.push('md:grid-cols-2');
      if (columns.md === 3) classes.push('md:grid-cols-3');
      if (columns.lg === 2) classes.push('lg:grid-cols-2');
      if (columns.lg === 3) classes.push('lg:grid-cols-3');
      if (columns.lg === 4) classes.push('lg:grid-cols-4');
      if (columns.xl === 3) classes.push('xl:grid-cols-3');
      if (columns.xl === 4) classes.push('xl:grid-cols-4');
      
      return classes.join(' ');
    }

    return 'grid grid-cols-1';
  };

  return (
    <div className={`${getGridClasses()} ${gapClasses[gap]} ${className}`}>
      {children}
    </div>
  );
}