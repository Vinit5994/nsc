"use client"
import { useState } from "react";
import Image from "next/image";
import product from "../../../public/assets/images/product.svg";
import ProductCatalog from "../../productContent.json";
export default function ProductPage(props: any) {
  const [selectedType, setSelectedType] = useState("Leaded");
  const [selectedShape, setSelectedShape] = useState("Round");
console.log(ProductCatalog,props)
  const handleGetRates = () => {
    const message = `Hello, I am interested in getting rates for EN1A steel with the following details:
    - Type: ${selectedType}
    - Shape: ${selectedShape}`;
    const whatsappUrl = `https://wa.me/+917567170037?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-black text-white">
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
          <h1 className="text-9xl font-bold text-orange-500">EN1A</h1>
        </div>
      </section>

      {/* Product Details Section */}
      <section className="bg-white px-4 py-20">
        <div className="container mx-auto">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Product Image */}
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src={product}
                alt="EN1A Steel bars close up"
                width={610}
                height={610}
                className="object-cover"
              />
            </div>

            {/* Product Details */}
            <div className="space-y-6 text-black w-[80%]">
              <h2 className="text-5xl top-5 font-bold">
                Leaded
                <div className="mt-2 h-1 w-16 bg-orange-500" />
              </h2>

              <p className="text-xl">
                EN1A leaded steel is a low-carbon steel alloy with improved machinability due to
                added lead. It offers smoother finishes, longer tool life, and faster production.
                Ideal for high-volume machining of complex parts.
              </p>

              {/* Type Selection */}
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Type</h3>
                <div className="flex gap-4">
                  {["Leaded", "Non-Leaded"].map((type) => (
                    <span
                      key={type}
                      className={`cursor-pointer border-b-2 pb-1 font-medium ${
                        selectedType === type
                          ? "text-orange-500 border-orange-500"
                          : "text-gray-500 border-transparent"
                      }`}
                      onClick={() => setSelectedType(type)}
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </div>

              {/* Shape Selection */}
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Shape</h3>
                <div className="flex gap-4">
                  {["Round", "Square", "Flat", "Hex"].map((shape) => (
                    <span
                      key={shape}
                      className={`cursor-pointer border-b-2 pb-1 font-medium ${
                        selectedShape === shape
                          ? "text-orange-500 border-orange-500"
                          : "text-gray-500 border-transparent"
                      }`}
                      onClick={() => setSelectedShape(shape)}
                    >
                      {shape}
                    </span>
                  ))}
                </div>
              </div>

              {/* Get Rates Button */}
              <button
                onClick={handleGetRates}
                className="flex items-center gap-2 rounded-md bg-green-600 px-4 py-2 text-white hover:bg-green-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
                Get Rates
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
