import React from 'react';

export interface CalloutsProps {
  title: string;
  iconRight?: React.ReactNode;
  actionStatus: string;
  codeLabel?: string;
  codeValue?: string;
  description?: React.ReactNode;
  thumbnail?: React.ReactNode;
  descName?: string;
  className?: string;
  variant?: 'cancelation' | 'highlight';
}

/**
 * A custom Callouts component.
 */
export const Callouts = ({
  title,
  iconRight,
  codeLabel,
  codeValue,
  description,
  actionStatus,
  thumbnail,
  descName,
  variant = 'cancelation',
  className = '',
}: CalloutsProps) => {
  if (variant === 'highlight') {
    return (
      <div
        className={`flex gap-2 p-4 border rounded-xl bg-shade-1 border-neutral-3 w-[349px] ${className}`}
      >
        <div className="text-sm font-regular text-shade-4">{description}</div>
        <div>{iconRight}</div>
      </div>
    );
  }

  return (
    <div
      className={`flex gap-2 p-2.5 border rounded-xl bg-shade-1 border-neutral-3 w-[361px] ${className}`}
    >
      <div className="flex flex-col gap-3">
        <div className="text-xl font-semibold text-shade-4">{title}</div>
        <div className="flex gap-3">
          <div className="rounded-xl bg-neutral-3 w-[108px] h-7">
            {thumbnail}
          </div>
          <div className="flex flex-col gap-1">
            <div className="text-xs font-semibold uppercase text-support-error-1">
              {actionStatus}
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-base font-semibold text-shade-4">
                {descName}
              </div>
              <div className="text-xs">
                <span className="text-neutral-7">{codeLabel} </span>
                <span className=" text-shade-4">{codeValue}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
