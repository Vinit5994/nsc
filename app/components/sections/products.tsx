'use client';

import Image from 'next/image';
import Link from 'next/link';


export default function ProductCatalog({products}) {
  console.log(products);
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {products.map((product, index) => (
          <div
            key={product.id || index}
            className="grid md:grid-cols-2 gap-8 items-start"
          >
            <div className="relative group w-[510px] max-sm:w-auto">
              <Image
                src={product.image}
                alt="EN1A Steel bars"
                width={510}
                height={510}
                className="rounded-2xl" 
              />
              <Link
                href={`/products/${product.urlName}`}
                className="absolute bottom-4 right-4 flex justify-center items-center bg-white text-gray-900 px-4 py-2 rounded-[8px] font-bold hover:bg-orange-500 hover:text-white transition-colors max-sm:left-1/2 max-sm:-translate-x-1/2 w-[200px] h-[40px] max-sm:text-center "
              >
                View Product
              </Link>
              <Link
                href="https://wa.me/+917567170037"
                className="absolute flex justify-center items-center h-[44px] w-[44px] -bottom-3 -left-4  rounded-full  transition-colors max-sm:-top-6 max-sm:left-1/2  max-sm:-translate-x-1/2 "
              >
                <svg
                  width="44"
                  height="44"
                  viewBox="0 0 52 52"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xlink="http://www.w3.org/1999/xlink"
                >
                  <g filter="url(#filter0_d_330_2282)">
                    <circle cx="26" cy="22" r="22" fill="white" />
                  </g>
                  <rect
                    x="9.71484"
                    y="4.57129"
                    width="34.2857"
                    height="34.2857"
                    fill="url(#pattern0_330_2282)"
                  />
                  <defs>
                    <filter
                      id="filter0_d_330_2282"
                      x="0"
                      y="0"
                      width="52"
                      height="52"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_330_2282"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_330_2282"
                        result="shape"
                      />
                    </filter>
                    <pattern
                      id="pattern0_330_2282"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use href="#image0_330_2282" transform="scale(0.01)" />
                    </pattern>
                    <image
                      id="image0_330_2282"
                      width="100"
                      height="100"
                      preserveAspectRatio="none"
                      href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAPJklEQVR4nO1daZAbxRVWqKSSULlTOX4klaRSOapSSeWqJOSoiGCguBKMwRw2MYe5DJjDJAYMxsTgYIe7Yu7idMAYAg4Oh8NhwManNKPd1apb6h5pV7urve9D1+526pvVaOX1ziWNNFqjr6qrtuzdme5+0/1ev/e91x5PDTXUUEMNNdRQQw011FBDDbqoi0S+5qf8GIkql0mU3ywRdodE+cMSZZtkyp7N/bxBJmyNRCPLpJByrExi3xRCHKH/1BoswedrO3JqQtnfZcr3SJQPy5SLYppEeEqm7IBE+F0BEjlFjsU+VxODBQSDwU9JIb5EJuxNifL0zIkNhBURijaLaGu7iHd0ibauHtHe0ye6+vrV1tHTp/5bS0eX+jskGlf/5hAhETYuEbbTT/ilwWD8CzXhzIBM+W8kwp+RKB8pnLhGpUk0t3eK3sEhkUpnxOTkpLAL/EU6kxF9g8OqECHQg1YPBE/4VqzGD71g1C2J8ncLJ4hEm9UvPZXJiHIhk82qK4rGWmasHnYgEOKnfeh0jj/EjpII31u4FcXbu8RoMiUqjWQ6LVo7u0VdJFqwpfFGKazM8xzuqK9v/rxM2X0SYRMYOCYBk4Ev1m1kx8dFe3evaGCxgu2MbfM3Rr/hORwhEeUcmfIebbBYEZiEasP4xIRo7ezJGwPQazCzPYcLdsRin8Cq0ARBY3ExMpYU1Y5UOiN4vK3AdGYvYYV75jJ8NPZ9ibIGVU9QrpqoxVhKQGoiLeoGGsUr7dvFxujj4vrG28RlgZXiAulqcfaBS8VZBy4R5/mXi0vlv6j/d7/ymHg58ZqQ+utFcrz4D6Crb2B6tRCu1IXYTz1zEYFw+Jcy4d0YCPbloZFR25MRH2sVT8e3iKvrbxbHfbBQeHfOL6rN23W6uLzuBvFo0yahjDTZ7geMDc1cntrC+AmeuYRASDlZpmwUA4g0t9rSFcnxpNiaeF0sC6wsWgBmDatqc+tWMZIdtaVblJaEtoVlZKIs8swh5Z1Fx3FanrC4RQ1nR9TV8Ke9S8omiJntxN2LxCOxZ0Rfpt9SH7HdNic6NZ0yKYfYFZ5qhhxWTtKEgY5b0RcTYlJdEafsObdigpjZTth9tniu5WWRnbS2kuGeyQuF8PM81aozNNdHU6LT0sAiw1FVCbslCO+MtsR/pagfDNkSCravqtMpgZDyXYmyXm2bsrIytnfuEMd/cKbrQvDOaH/YtUA80bxZXblmwIeXU/TDfsJ/5qmacwZhAU2Bm+kMKO3VZIPrE+81adc13KrqNSPgw9MUPUxin6J81m15eCTKHlJNWx4TmazxHjyUHVbNT7cn22t5C1suulI9ptZXo5L3IL/gqjBkyhZqJ9nh0THDjmNg2KPdnmSvzYYDZ8tYwvScoh0eEWNxRRhwI0iEdaITcMoZYTA7pH5tbk+ut8h2xv6lojPVbfzB9fXn9QlCzRUXiEzYA2r8IhY3VOKpiZS4Yg5tU16dBrcMtlwjQIfm9MnzFRUGLAqEQa1sVWvIna5PptdBRW9kfSVT6fzWFSDs+IoJRCb8Pe3wZwQc+NyeRK/DbVPLi4ZjRnwnt3UFKxJ5rAsrv1ODS2HFMLAEJ54dh+Axu04XF8vXqZ7aFQ23qD+7Pfl6/QwOEkOrq57loo9hPr/sApEo346XtXToKzks68sD11seJE7r7clDVxvcGW4LYLYGA8XIzZLo7tXYLfvLKgw/4T/XYuDpjP7q2Nb+P8uDWypdq+t1nZicqFrr7PnW/+iOH97tukguhlLO2LxE+CNmumNsPGnZYwunXmsyMSf10Im7zxH9mQFzXUL4y2VzkUiE9auW1Zi+ZWVnm8FKMsPo+Jg6eLcFMFtDwMuIzaLxvvaFQl90XCABys7UyGt6SE9kxIJ9F1oazKIDy9QtyQru4Q9X6SpZZOjvAn8gRyu62HGBSJS/YnYqf63jbcuDeSq+RVhF02hcHL3zNNcFYFeXdPZOnd5xTHBUGD6f72Ma2RmHHz1cVX+T5YEEh6iwg+X1q1yf/NnahdI1un2G4aNxiR31BAeo8luNrKCHjlSXra8Yyt8O3une5frk67XoaLNuv/Nc4rBykmMCkShfjYfG2jp0XwzSgNUB4MBoF9nJrDht3/muT/5s7fGmZ3X7DUJgjgW5wTGByIS9hYf29A/qvnhlcK3lAcDcLQYbIhtdn/zZ2pV1N+r2Gax7xw+JMmXteKgeGXp8cty2aQrim10sr1I9Mm/XGbpkPLD4cwIZc8S3hWwjLQg1MTG7mUqHue1BRIYVW8LY1ye5PvFGTRpomLXf8A1rHuAGxr7uDAORchHk+ueP7Z3v2h7Ai23bLAujM9VdtfpDa/Ao6AE5L2o0kfJjShaIn7Jz8TAQj/XwWNO/bA8A248VjI6PivP9V7k+4WYNfGM9gInjWHhXpvzqKa6VvoV1axFBKJjIZn4sYC292/XJttJuaLxd6AE5jzk3yuqSBYL04yl3e5fuC69rWFPUIOASMcMVcyT8i3CDKdPRCdNXImw9HoaH6qFYYjSsEzDcjRAcolXrNils2Fb1gDSMXA7jg46RGfBQPZSyx2N1meF+5THXJ9ysnbn/YguMFLbJMSKckUBKDSK9273bUCDJ8aRY7Fvm+qSb8bdMBUL4M6WvkFw6GsKSerhIXlHSYMB8704bc7vgL8IJ3+2JN8o5Md2yCN9Y+goh7A48DBEwPSDDqdQBYeuaNCE4v9+zVyVDuz35szUYHxbSF9Y7IZAVZmavU6bpltZXhBXWfDUq+Rsb15k6GGXCVjmVESWYwcHw4djTjgxqngnFRsMbne+odBy7z8eWh62lHAJ9IPqEbn+V1oRzkUONhwWGt9FX69TATt93oak+AeSBBjF/7/m2wq2x0bj6t4lkh7ibPSSOLSGRdGb7b/ub5jERwrylr5BI5EtmzkVkQjn5tS2VrrUUwAKj3gr/Cyvi/Z49h/x9T7pPPBh90hESRYPOygbvWXMu7gvGvupxAlp6s5Pud7O2MrjWUs4fiBIvJV4VJ+9ZrPush2JPGz4DJOonmzeLP+75c1F9RcANBA8j9olM+KAjwsgJ5HU8tLtfn4f01+DfHBWId+d8cXPoDsuJmMik3Rh94hDTGMrWSnoagFWJyKfdTGBQX/XQOzCkWVi7HA/hGllacKc7LRCvKpT1loWife1PNT+vVnfAR2I3dq+5++0YDUYE7Ok8RLbWMYFAGZnFRKCIy2WOrmi4xTTfz2nYSdNuGdO3QDFnjsVCCmlA2AON9AiwvK58IdbFvmWmjkinAEKF1RWCnEk9TOsPltwdj3/S4yQkyv5tRpR7s+u9sgnEu3O+urfv6fWJcoOPxCz3aVv7dlOXiUT5Gx6n4Q/zs8zOI5mJTEVCrWvIP0zTy0qBVX7yqXvPU1P29DBd3zGyuFz56ANmZGs7/KxS2sL9F4mdPXsdFwbMaOQTWunDsy0v6T4HNcG06kGotuopZzpCkwFhDq7yBfsuqIhQvLk9HIwUM8ekVcAFYnX7BDNfD6immgtKPekpF+qI8kMrCTuv2yBdO9WW+Jerq9Ms0V8P4ImtC99r+X2vdui7SjA3+bz1EDvKU05IhL1t5o7HQayc9a68Bg2mN0jfqDyH/Hgr2N8nq05Hy6sycL3hYRPpfrnD4NtlFYYqkFDk91ZWSTHkOa/DDTF7xCngr0IsBRUZetK9ojfdrxL1XmjbZptEATeJUVU6lBdBQmzO3D267AIpXCXw8+vB31/nukC8ZWhYeUYoKHDmnKvEVCCUPW7GRHEqRuKtooZAnBHylhVhE75Q5FeVEwjhcbx4yKCKw0Xyta5PoNfBhgqoRtVN4WbPp7A5QfexCrmR/WCqKrWiWxurPzNYlWFWbwkWnNlBdDo3nXdV9MYFmUauUbm+LQnXXCjeCjYcEs0imCiBm68bT9nCigmjMDYCrpEe1oXvc30ivQ5tUwMZ/SQlIJsdF0GeqxdP2AMVFUYkEvm4Vo9XL/kTJ+ZKntS9ZWq3h+81TSpCSDvclC/JJMO9VFGBwKdvFheBje72ZHpLaDhnWMldKay3iEsGpEb+HU+loRGv4acp1bmIUCvi5tVU9Wd53ao8M8UM+fMG5SMVNXEPFgiX0QkkMuoBRb70Ts0YMMgEqI2rhWXhgoBfCPQfr0uCAJ0IVCYrDkqsjDzxzc2avfX1ylfUSs6U69Zyx56r1ciC2YuzCNwW8Maa3VCAuMLm1q2WS3M40fARwH1iFNOYqTMK679LIX62xy2g+Dw6QptadDvMRqLiLvag2NH9gal1YhQ+favrfZUtglXltBDwoVzTsFplPyKgZhUo1hZuaqmeGxJkwp8yY8E7jaHssMoIhK45tYQi/WAtQsBYDWbVRWftx+hY3rRFBW+JsF+7KgwhxEdkyhJWil6WEx2pLvFe9261LNL6yD9V3haY96g3gqQhuPzBULmN3qNWV8BKg1fXatWh2fRFQY13NJ8vEvm2x234qfKjKXdJtOgbcuYahkfH1IspNWHgWlecwzzVAC0lAQrNKSCWUg23s83WL9R0KXCFJCpSzLKYwpe4j6lYwDLrH8rdtpmrlY4gF6Jr1SCYVCajmrP5q1rVusTsvqoosF8IELxQp0N1l6StWyUwEQdHRtUr6Kbd0gffR6v9jEnAVzniwu1tUNigyBbemasG4MLhH3uqEXIocpxZaT8AugUTCiIdSm7PvBR46jYaVicRfjfuqCKEfBrWikzZi4XCaVSaVUuunLd+jiVTItHVk6d5FvTv1bKTEkqFTPmdeuHasVRKLWMH3XLQ1aXT12YrMuGPgmQX4PzLeu8IUPotibB7NLqq1nAFBr5evGNoZKyoiyhR2BjCBXM/1tZ+0E2eOTO2DwGlQCTyE89cgES4hI5j/8dli6iZhe1l5sByX1mnTNhzEmVLMcnFbI8B3PBG+KMSZR2HbHM5xybS6yAoMF9gluIyY9A28TN0FHhj+J28W3xmPykfwkWRfqIsqBrLySpkypn6tc4mAAyMsm2ohwLTGOcVp94rhDgC24dM+E0y5VskysLaHbpFtDYYJlKI3QBH4I4dOz7qmauQCb9E82FJhKdw3Tbqn2D/r/TAfL62I+Ww8oucGwdFcdbJlN2LMwIKHKgp3IStkgi/CsmqqMS9NxL5jOdwQx2Jfg/Jn5gQt/tSQw011FBDDTXUUEMNNXjmOv4PndSM2OC9o6UAAAAASUVORK5CYII="
                    />
                  </defs>
                </svg>
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
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  Who can use it
                </h4>
                <ul className="space-y-3">
                  {[
                    "Industrial manufacturers",
                    "Equipment designers",
                    "Defense contractors",
                    "Automotive technicians",
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
