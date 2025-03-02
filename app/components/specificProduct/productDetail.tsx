"use client";

import { useState } from "react";
import { useParams } from "next/navigation"; // Import useParams to get the dynamic route parameter
import Image from "next/image";
import QuoteForm from "@/app/components/specificProduct/QuoteForm";
import productContent from "@/app/productContent.json";

export default function ProductDetails() {
  const [activeTab, setActiveTab] = useState("Description");
  const [activeSlide, setActiveSlide] = useState(0);
  const tabs = ["Description", "Uses"];
  const slides = [
    { id: 1, image: "/hex-bars-1.jpg" },
    { id: 2, image: "/hex-bars-2.jpg" },
  ];

  const params = useParams();
  const productSlug = params?.product; // Get 'stainless-steel' from URL

  // Find matching product based on urlName
  const material = productContent.materials.find(
    (material) => material.urlName.toLowerCase() === productSlug
  );

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
        <div className="mt-16 py-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-black">
                VIEW OUR
                <br />
                OTHER RANGES
                <div className="mt-2 h-1 w-16 bg-orange-500" />
              </h2>
              <p className="text-xl text-gray-800">
                Innovative Steel Solutions
                <br />
                for Every Industry
              </p>
            </div>

            <div className="relative">
              <div className="flex gap-4 overflow-hidden">
                {slides.map((slide, index) => (
                  <div
                    key={slide.id}
                    className={`relative aspect-square w-full shrink-0 rounded-lg bg-[#B2E4ED] transition-transform duration-300 ease-in-out ${
                      index === activeSlide ? "translate-x-0" : "translate-x-full"
                    }`}
                  >
                    <Image
                      src={slide.image}
                      alt="Steel hex bars"
                      fill
                      className="object-contain p-8"
                    />
                  </div>
                ))}
              </div>

              {/* Dots Navigation */}
              <div className="absolute -bottom-8 left-1/2 flex -translate-x-1/2 space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveSlide(index)}
                    className={`h-2 w-2 rounded-full transition-colors ${
                      index === activeSlide ? "bg-orange-500" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <QuoteForm />
    </div>
  );
}
