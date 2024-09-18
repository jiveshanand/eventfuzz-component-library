import React from 'react';

export interface TileProps {
  icon?: JSX.Element;
  children?: React.ReactNode | 'string';
  isSelected?: boolean;
}

export const Tile: React.FC<TileProps> = ({
  icon,
  children,
  isSelected = false,
}) => {
  return (
    <div
      className={`flex gap-5 flex-col
    p-3 min-w-9.5 min-h-8 border rounded-xl ${isSelected ? 'border-shade-4 bg-neutral-1' : 'border-neutral-3 hover:border-neutral-6 active:border-shade-4 focus:outline-none focus:ring-1 focus:ring-shade-4'}`}
    >
      {icon}
      <p className="text-xl font-semibold">{children}</p>
    </div>
  );
};
