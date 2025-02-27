import Image from 'next/image';
import whySteel from './why-steel.png';
import ContactSection from '../contact/contact-section';
import justdial from '../../../public/assets/images/justdial.png';
export default function WhySteelSection() {
    return (
        <>
            <div className="relative bg-slate-800">
                <section className="px-8 pt-16 pb-32"> {/* Increased bottom padding */}
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div className="space-y-8">
                            <h2 className="text-white text-5xl font-bold">
                                Why Naresh Steel
                                <div className="h-1 w-48 bg-orange-500 mt-2"></div>
                            </h2>

                            <p className="text-gray-300 text-lg leading-relaxed">
                                We are highly appreciated by clients for offering excellent quality products. With our
                                team&apos;s support, we have been able to cater varied needs of patrons in an efficient
                                manner. Following features have enabled us to attain zenith of success in this industry:
                            </p>

                            <ul className="space-y-4">
                                {[
                                    "Reasonable pricing",
                                    "Qualitative product range",
                                    "Customer-centric approach",
                                    "Large distribution network",
                                    "Experienced professionals",
                                    "Easy payment modes",
                                    "On-time delivery"
                                ].map((feature) => (
                                    <li key={feature} className="flex items-center gap-3 text-gray-300">
                                        <span className="h-3 w-3 rounded-full bg-orange-500 flex-shrink-0"></span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div >
                            {/* <div className="relative h-80 overflow-hidden rounded-lg">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Steel manufacturing"
                  className="object-cover w-full h-full"
                />
              </div> */}
                            <div className="relative overflow-hidden rounded-lg">
                                <Image
                                    src={whySteel}
                                    alt="Steel worker"
                                //   className="object-cover w-full h-full"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Rating section with half white background */}
                <div className="absolute bottom-0 left-0 w-full">
                    <div className="h-1/2 bg-white absolute bottom-0 left-0 w-full"></div>
                    <div className="max-w-7xl mx-auto relative justify-center flex top-[30px]">
                        <div className="flex flex-wrap gap-8 justify-start">
                            <div className="bg-white rounded-lg p-6 shadow-lg flex items-center gap-4">
                                <div className="bg-[#4285f4] text-white text-5xl font-bold p-6 rounded">
                                    5.0
                                </div>
                                <div className="space-y-1">
                                    <div className="text-gray-500 text-lg">Google</div>
                                    <div className="text-gray-600">average rating</div>
                                    <div className="flex gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <svg
                                                key={i}
                                                className="w-6 h-6 text-yellow-400"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-lg p-6 shadow-lg flex items-center gap-6 border-2 border-orange-500">
                                <Image
                                    src={justdial}
                                    alt="Justdial"
                                    className=""
                                />
                                <div>
                                    <div className="font-bold text-2xl">Rated 5.0/5.0</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <ContactSection />
        </>
    )
}

