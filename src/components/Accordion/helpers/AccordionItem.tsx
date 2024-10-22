import React, { useState, useRef, useEffect, ReactNode } from 'react';
import { ArrowDown2 } from 'iconsax-react';

export interface AccordionItemProps {
  title: string;
  content: ReactNode;
}

export const AccordionItem: React.FC<{
  title: string;
  content: ReactNode;
  isOpen: boolean;
  toggleOpen: () => void;
}> = ({ title, content, isOpen, toggleOpen }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState<number | null>(null);

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight); // Get the actual height of the content
    } else {
      setContentHeight(0);
    }
  }, [isOpen]);

  return (
    <div className="border-b border-light min-w-4">
      <button
        className="flex text-2xl items-center justify-between w-full py-4 text-left font-medium           
            hover:underline transition-all duration-700"
        onClick={toggleOpen}
      >
        <span>{title}</span>
        <ArrowDown2
          size="20"
          className={`transition-transform duration-500 ease-out ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-out ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          maxHeight: isOpen ? `${contentHeight}px` : '0px',
          transitionProperty: 'max-height, opacity',
          transitionDuration: '500ms',
        }}
      >
        <div
          ref={contentRef}
          className="pb-4 text-base break-words whitespace-normal max-w-7xl text-neutral-7 font-regular"
        >
          {content}
        </div>
      </div>
    </div>
  );
};
