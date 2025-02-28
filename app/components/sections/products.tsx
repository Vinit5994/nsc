'use client';

import Image from 'next/image';
import Link from 'next/link';


export default function ProductCatalog({products}) {
  console.log(products);
  return (
    <section className="py-24 px-4 bg-white">

      <div className="max-w-7xl mx-auto">
        {products.map((product, index) => (
          <div key={product.id || index} className="grid md:grid-cols-2 gap-8 items-start">
            <div className="relative group">
              <Image
                src={product.image}
                alt="EN1A Steel bars"
                width={510}
                height={510}
                className="rounded-2xl"
              />
              <Link 
                href={`/products/${product.urlName}`}
                className="absolute bottom-4 right-32 bg-white text-gray-900 px-4 py-2 rounded-full font-medium hover:bg-orange-500 hover:text-white transition-colors"
              >
                View Product
              </Link>
              <Link
                href="https://wa.me/+917567170037"
                className="absolute bottom-4 left-4 bg-[#25D366] text-white p-3 rounded-full hover:bg-[#128C7E] transition-colors"
              >
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg> */}
              </Link>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  {product.title} 
                </h3>
                <div className="w-20 h-0.5 bg-orange-500" />
                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Who can use it</h4>
                <ul className="space-y-3">
                  {[
                    'Industrial manufacturers',
                    'Equipment designers',
                    'Defense contractors',
                    'Automotive technicians'
                  ].map((user, userIndex) => (
                    <li key={userIndex} className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-orange-500" />
                      <span className="text-gray-600">{user}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
