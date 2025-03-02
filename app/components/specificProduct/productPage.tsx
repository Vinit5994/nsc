"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import {  useParams } from "next/navigation";
import productData from "../../productContent.json";

export default function ProductPage() {
  // Get product name from URL path parameter
  const params = useParams();
  const urlName = params.product || ""; // Default to en1a if no URL name is provided
  console.log(urlName);
  // Find the product from catalog based on URL parameter
  const product = productData.materials.find(p => p.urlName === urlName) || productData.materials[0];
  
  // Define possible product types and shapes based on the product
  const productTypes = {
    "en1a": ["Leaded", "Non-Leaded"],
    "stainless-steel": ["303","304", "316", "410", "416","430F"],
    "hot-die": ["H13"],
    "wps": ["D2", "D3"],
    "en-series": ["EN8", "EN19", "EN31", "EN36"],
    "ms-bright": ["1018", "1020","1010"]
  };
  
  const productShapes = { 
    "en1a": ["Round", "Square", "Flat", "Hex"],
    "stainless-steel": ["Round", "Square", "Hex"],
    "hot-die": ["Round", "Square"],
    "wps": ["Round", "Square", "Flat"],
    "en-series": ["Round", "Square", "Flat", "Hex"],
    "ms-bright": ["Round", "Square", "Flat"]
  };
  
  // Get the appropriate types and shapes for this product
  const types = productTypes[urlName as keyof typeof productTypes] || ["Standard"];
  const shapes = productShapes[urlName as keyof typeof productShapes] || ["Round"];
  
  // Initialize state with the first options
  const [selectedType, setSelectedType] = useState(types[0]);
  const [selectedShape, setSelectedShape] = useState(shapes[0]);
  
  // Update selected options when product changes
  useEffect(() => {
    setSelectedType(types[0]);
    setSelectedShape(shapes[0]);
  }, [urlName]);

 // Get the appropriate image based on selected shape
 const getShapeImage = () => {
  if (selectedShape === "Round") {
    return product.image ;
  } else if (selectedShape === "Square") {
    return "/assets/images/square.png";
  } else if (selectedShape === "Flat") {
    return "/assets/images/flat.png";
  } else if (selectedShape === "Hex") {
    return "/assets/images/hex.png";
  }
  // Default fallback
  return product.image || "/assets/images/product.svg";
};

  const handleGetRates = () => {
    const message = `Hello, I am interested in getting rates for ${product.title} with the following details:
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
          src={product.image}
          alt={`${product.title} background`}
          fill
          className="object-cover opacity-25"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-8xl font-bold text-orange-500">{product.title}</h1>
        </div>
      </section>

      {/* Product Details Section */}
      <section className="bg-white px-4 py-20">
        <div className="container mx-auto">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Product Image */}
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src={getShapeImage()}
                alt={`${product.title} close up`}
                width={610}
                height={610}
                className="object-cover"
              />
            </div>

            {/* Product Details */}
            <div className="space-y-6 text-black w-[80%]">
              <h2 className="text-5xl top-5 font-bold">
                {selectedType}
                <div className="mt-2 h-1 w-16 bg-orange-500" />
              </h2>

              <p className="text-xl">
                {product.description}
              </p>

              {/* Type Selection */}
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Type</h3>
                <div className="flex flex-wrap gap-4">
                  {types.map((type) => (
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
                <div className="flex flex-wrap gap-4">
                  {shapes.map((shape) => (
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

              {/* Who can use it section */}
              {product.subTitle && (
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">{product.subTitle}</h3>
                  <ul className="list-disc pl-5">
                    {product.subDescription.map((item, index) => (
                      <li key={index} className="text-gray-700">{item}</li>
                    ))}
                  </ul>
                </div>
              )}

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