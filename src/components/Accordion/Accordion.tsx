import React, { useState } from 'react';
import { AccordionItemProps, AccordionItem } from './helpers';

export interface AccordionProps {
  items: AccordionItemProps[];
  multiple?: boolean;
  className?: string;
}

const Accordion: React.FC<AccordionProps> = ({
  items,
  multiple = false,
  className,
}) => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    if (multiple) {
      setOpenItems((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index],
      );
    } else {
      setOpenItems((prev) => (prev.includes(index) ? [] : [index]));
    }
  };

  return (
    <div className={className}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openItems.includes(index)}
          toggleOpen={() => toggleItem(index)}
        />
      ))}
    </div>
  );
};

export { Accordion };
