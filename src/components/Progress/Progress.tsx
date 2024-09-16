import React from 'react';

export interface ProgressProps {
  percents: number;
  size?: 'small' | 'default';
}

export const Progress: React.FC<ProgressProps> = ({ percents, size = 'default' }) => {
  const clampedPercents = Math.max(0, Math.min(percents, 100));
  const heightClass = size === 'small' ? 'h-2' : 'h-3';

  return (
    <div className={`w-full bg-shade-2 rounded-full ${heightClass}`}>
      <div
        className={`bg-gradient-2 rounded-full ${heightClass}`}
        style={{ width: `${clampedPercents}%` }}
      />
    </div>
  );
};
