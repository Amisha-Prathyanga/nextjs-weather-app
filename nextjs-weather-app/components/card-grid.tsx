import { FC, ReactNode } from "react";

interface CardGridProps<T> {
  items: T[];
  render: (item: T, index: number) => ReactNode;
  className?: string;
}

export const CardGrid = <T,>({
  items,
  render,
  className,
}: CardGridProps<T>): JSX.Element => {
  return (
    <div
      className={`mb-10 mt-6 grid grid-flow-row gap-x-6 gap-y-7 sm:grid-cols-1 md:grid-cols-2 lg:grid-col-2 ${className}`}
    >
      {items.map((item: T, index: number) => render(item, index))}
    </div>
  );
};
