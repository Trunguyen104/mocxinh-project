"use client";

import { PRODUCTS } from "@/lib/constants";

type Product = (typeof PRODUCTS)[number];

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-2xl bg-beige/80 p-6 transition-all duration-700 hover:-translate-y-1 hover:shadow-paper">
      <div
        className="mb-6 flex aspect-[4/5] items-center justify-center rounded-xl bg-ivory paper-texture transition-transform duration-700 group-hover:scale-[1.02]"
        aria-hidden
      >
        <div className="h-3/4 w-3/4 rounded-sm bg-gradient-to-br from-[#e8dcc8] via-[#d4c4a8] to-[#c4b896] shadow-inner opacity-90 transition-all duration-700 group-hover:opacity-100 group-hover:contrast-[1.08]" />
      </div>
      <h3 className="font-display text-xl text-kraft-dark">{product.name}</h3>
      <p className="mt-2 text-sm text-olive/80">{product.texture}</p>
      <p className="mt-4 font-medium text-kraft">{product.price}</p>
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-olive/0 transition-all duration-700 group-hover:ring-olive/20" />
    </article>
  );
}
