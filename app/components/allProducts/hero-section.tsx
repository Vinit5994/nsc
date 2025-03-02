"use client"
// import { useState } from "react";
import Image from "next/image";
import {materials} from '../../productContent.json'
import product from "../../../public/assets/images/product.svg";
import AlternatingProducts from '../sections/AlternatingProducts'

export default function ProductPage() {
  const oddProducts = materials.filter((_, index) => index % 2 === 0);
  const evenProducts = materials.filter((_, index) => index % 2 === 1);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] xl:h-[80vh] w-full overflow-hidden">
  <Image
    src={product}
    alt="Steel bars background"
    fill
    className="object-cover opacity-25"
    priority
  />


        <div className="absolute inset-0 flex items-center justify-center">
  <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-orange-500">
    Catalogue
  </h1>
</div>

      </section>
      <AlternatingProducts oddProducts={oddProducts} evenProducts={evenProducts}/>

    </div>
  );
}
