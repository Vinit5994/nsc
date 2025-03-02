"use client";

import { useState } from "react";
import { useParams } from "next/navigation"; // Import useParams to get the dynamic route parameter
import Image from "next/image";
import QuoteForm from "@/app/components/specificProduct/QuoteForm";
import productContent from "@/app/productContent.json";
import Link from "next/link";

export default function ProductDetails() {
  const [activeTab, setActiveTab] = useState("Description");
  const [activeSlide, setActiveSlide] = useState(0);
  const tabs = ["Description", "Uses"];

  const params = useParams();
  const productSlug = params?.product; // Get 'stainless-steel' from URL

  // Find matching product based on urlName
  const material = productContent.materials.find(
    (material) => material.urlName.toLowerCase() === productSlug
  );

  const otherRanges = productContent.materials
    .filter((material) => material.urlName.toLowerCase() !== productSlug)
    .slice(0, 2);
  console.log(otherRanges, "otherRanges");

  return (
    <div className="bg-white">
      {/* Tabs Section */}
      <div className="border-b">
        <div className="container mx-auto">
          <div className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-4 py-4 text-lg font-medium transition-colors ${
                  activeTab === tab
                    ? "text-orange-500"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <div className="absolute bottom-0 left-0 h-0.5 w-full bg-orange-500" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-6 text-gray-800">
          {activeTab === "Description" && (
            <p className="text-lg leading-relaxed">
              {material?.description2 || "No description available"}
            </p>
          )}

          {activeTab === "Uses" && (
            <div>
              {/* <h2 className="text-2xl font-semibold">Uses</h2> */}
              <ul className="list-disc pl-6 text-lg text-gray-700">
                {material?.useCase?.length > 0 ? (
                  material.useCase.map((use, index) => (
                    <li key={index}>{use}</li>
                  ))
                ) : (
                  <li>No use cases available</li>
                )}
              </ul>
            </div>
          )}

          {/* {activeTab === "Certifications" && (
            <p className="text-lg leading-relaxed">
              {material?.certifications || "No certifications available"}
            </p>
          )} */}
        </div>

        {/* Other Ranges Section */}
        <div className="mt-16 py-8  max-sm:p-[16px]">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-4xl font-bold text-black">
                VIEW OUR
                <br />
                OTHER RANGES
                <div className="mt-2 h-1 w-16 bg-orange-500" />
              </h2>
              <p className="text-xl text-gray-800 text-start w-[280px]">
                Innovative Steel Solutions
                <br />
                for Every Industry
              </p>
            </div>

            <div className="relative">
              <div className="flex gap-4 overflow-hidden max-sm:flex-col">
                {otherRanges.map((slide, index) => (
                  <Link
                    key={index}
                    href={`/products/${slide.urlName}`}
                    className="w-[392px] h-[392px] flex gap-8 relative group overflow-hidden cursor-pointer"
                  >
                    <Image
                      src={slide.image}
                      alt="Steel hex bars"
                      height={392}
                      width={392}
                      className="object-contain h-[392px] w-[392px]"
                    />

                    {/* Overlay (Hidden by default, appears on hover) */}
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-white bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                      <div className="flex flex-col items-center">
                        <h2 className="text-3xl leading-[39px] font-bold text-black">
                          {slide.title}
                        </h2>
                        <div className="mt-2 h-1 w-[185px] bg-orange-500" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Dots Navigation */}
              {/* <div className="absolute -bottom-8 left-1/2 flex -translate-x-1/2 space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveSlide(index)}
                    className={`h-2 w-2 rounded-full transition-colors ${
                      index === activeSlide ? "bg-orange-500" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <QuoteForm />
    </div>
  );
}
