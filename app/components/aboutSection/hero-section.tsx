"use client"
// import { useState } from "react";
import Image from "next/image";

import product from "../../../public/assets/images/product.svg";

export default function HeroSection() {
  return (
    <div className=" bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <Image
          src={product}
          alt="Steel bars background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-9xl font-bold text-orange-500">About us</h1>
        </div>
      </section>

    </div>
  );
}
