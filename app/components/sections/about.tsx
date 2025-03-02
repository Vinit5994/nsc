'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import aboutImage from '../../../public/assets/images/aboutNsc.png'

export default function About() {
  return (
    <section className="py-40 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center mb-16">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden"
          >
            <Image
              src={aboutImage}
              alt="Steel worker operating machinery"
              width={800}
              height={600}
              className="w-full h-auto object-cover"
            />
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-orange-500">Naresh Steel</h2>
            <h3 className="text-2xl font-semibold text-gray-900">
              Generations of experience in supplying top-grade steel
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Established in 1968, Naresh Steel is a prominent name in Jamnagar&apos;s steel industry. 
              Renowned for our high-quality steel products, we serve as both a retailer and wholesaler. 
              Understanding the pivotal role materials play in projects, we are committed to providing 
              consistent quality and exceptional customer service.
            </p>
          </motion.div>
        </div>
{/* 
        Machine Image
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Image
            src="/placeholder.svg?height=400&width=1200"
            alt="Industrial machinery in operation"
            width={1200}
            height={400}
            className="w-full h-[400px] object-cover rounded-3xl"
          />
        </motion.div> */}

        {/* Stats Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-xl text-gray-900 md:w-1/3"
          >
            Serving as a trusted partner in providing high-quality steel that meets customer needs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-orange-500 rounded-3xl p-8 md:p-12 grid grid-cols-3 gap-8 w-full md:w-2/3"
          >
            <div className="text-center text-white">
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-sm font-medium">Years of Experience</div>
            </div>
            <div className="text-center text-white">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-sm font-medium">Number of Clients</div>
            </div>
            <div className="text-center text-white">
              <div className="text-4xl font-bold mb-2">3</div>
              <div className="text-sm font-medium">City Presence</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}