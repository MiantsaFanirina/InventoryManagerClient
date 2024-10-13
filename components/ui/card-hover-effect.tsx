"use client"
import { cn } from "@/lib/utils";
import { ProductType } from "@/types";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: ProductType[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const formatPrice = (price: number) =>
    new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'MGA', minimumFractionDigits: 0 }).format(price);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 ",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.img}
          key={item?.img}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card className="h-full">
            <div className="flex flex-col h-full">
              <div className="w-full h-2/3 rounded-md overflow-hidden">
                <img
                  src={item?.img}
                  alt={item?.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="h-1/3 py-6 flex flex-col justify-between">
                <h1 className="font-semibold text-sm flex flex-col">
                  <span className="uppercase">{item?.title}</span>
                  <span className="text-zinc-400"> ({item?.manufacturer})</span>
                </h1>
                <div className="flex w-full justify-between mt-3">
                  <div className="text-sm">
                    <h3 className="text-zinc-400">Prix d'achat</h3>
                    <span>{formatPrice(item?.purchasePrice)}</span>
                  </div>
                  <div className="text-sm">
                    <h3 className="text-zinc-400">Prix de vente</h3>
                    <span>{formatPrice(item?.sellingPrice)}</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-slate-50 shadow-sm dark:shadow-none dark:bg-slate-900 border border-transparent light:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative h-full z-50">
        <div className="p-4 h-full">{children}</div>
      </div>
    </div>
  );
};