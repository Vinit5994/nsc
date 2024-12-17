'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import background from './placeholder.svg'

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full">
      <div className="absolute inset-0 bg-black/60" />
      
      <Image
        // src="/placeholder.svg?height=1080&width=1920"
        src={background}
        alt="Industrial machinery background"
        fill
        priority
        className="object-cover"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 flex items-center min-h-screen">
        <div className="max-w-3xl space-y-6">
          <motion.h1 
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span>Jamnagar&apos;s </span>
            <span className="text-orange-500">Leading Alloy Steel Stokist</span>
            <span className="block mt-2">Since 1968</span>
          </motion.h1>
          
          <motion.h2 
            className="text-2xl font-semibold text-white sm:text-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Trusted Retailer & Wholesaler
          </motion.h2>
          
          <motion.p 
            className="mt-6 max-w-xl text-xl text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Your go-to source for alloy steel products in Jamnagar. Committed to delivering top-notch quality and exceptional service.
          </motion.p>
          
          <motion.div 
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link href="/products" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded text-lg font-semibold transition-colors">
              View Products
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}