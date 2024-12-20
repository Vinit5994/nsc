import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <Link href="/" className="block w-[180px]">
            <Image
              src="/placeholder.svg?height=60&width=180"
              alt="NSC Logo"
              width={180}
              height={60}
              className="w-auto h-auto"
            />
          </Link>
        </div>

        <div className="space-y-4">
          <h2 className="text-orange-500 text-lg font-medium">PRODUCTS</h2>
          <ul className="space-y-2">
            {[
              'Alloy Steel',
              'Stainless Steel',
              'Hot Die Steel',
              'EN Series',
              'EN1A',
              'ENAL'
            ].map((item) => (
              <li key={item}>
                <Link href={`/products/${item.toLowerCase().replace(' ', '-')}`} className="hover:text-orange-500 transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-orange-500 text-lg font-medium">ABOUT</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="hover:text-orange-500 transition-colors">
                About Us
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-orange-500 text-lg font-medium">CONTACT US</h2>
          <address className="not-italic space-y-4">
            <p>
              No. 58, Udyog Nagar Road,<br />
              Digvijay Plot, Jamnagar,<br />
              Gujarat, India - 360005
            </p>
            <p>
              <Link href="tel:+919426208737" className="hover:text-orange-500 transition-colors">
                +91 94262 08737
              </Link>
            </p>
          </address>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-12">
        <div className="border-t border-orange-500" />
      </div>
    </footer>
  )
}