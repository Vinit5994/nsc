import Image from 'next/image'
import Link from 'next/link'

export default function ProductTwo({ products }) {
  const users = [
    'Automotive industry',
    'Food and beverage industry',
    'Medical and surgical equipment',
    'Chemical and petrochemical industry',
    'Consumer goods manufacturers'
  ]

  return (
    <div className="bg-white overflow-hidden">
      {products.map((product,index) => (
        <div  key={product.id || index} className="grid md:grid-cols-2 items-stretch">
          <div className="p-24 bg-[#FDF6F4] rounded-r-3xl space-y-8 w-[140%]">
            <div className="space-y-2">
              <h2 className="text-[32px] leading-tight font-bold text-gray-900">
                {product.title}
              </h2>
              <div className="w-20 h-0.5 bg-orange-500" />
            </div>

            <p className="text-gray-600 leading-relaxed w-[50%]">
              {product.description}
            </p>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900">Who can use it</h3>
              <ul className="space-y-3">
                {users.map((user, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-orange-500" />
                    <span className="text-gray-600">{user}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative flex justify-center items-center ">
            <Image
              src={product.image}
              alt="Stainless Steel Brightbar"
              width={510}
              height={510}
              className="object-cover rounded-2xl"
            />
            <Link
              href={`/products/${product.urlName}`}
              className="absolute bottom-24 right-44 bg-white text-gray-900 px-6 py-2 rounded-full font-medium hover:bg-orange-500 hover:text-white transition-colors"
            >
              View Product
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}
