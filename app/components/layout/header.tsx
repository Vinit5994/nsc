'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-sm' : 'bg-transparent'}`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="NSC Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link href="/" className="text-white hover:text-orange-500 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-white hover:text-orange-500 transition-colors">
              About Us
            </Link>
            <Link href="/products" className="text-white hover:text-orange-500 transition-colors">
              Products
            </Link>
            <Link href="/contact" className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}