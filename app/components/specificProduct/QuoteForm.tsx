'use client'

import { useState, FormEvent } from 'react'

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectBrief: ''
  })

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Form submitted:', formData)
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="border border-blue-200 rounded-lg p-8 grid lg:grid-cols-2 gap-8">
        {/* Left Column - Form */}
        <div className="space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-black	">
              Get Quote Now
              <div className="h-1 w-48 bg-orange-500 mt-2"></div>
            </h1>
            <p className="text-gray-700 text-lg">
              Let our experienced team assist you in finding the perfect alloy steel near you, for your project. Get a free quote today!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-3 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
            
            <input
              type="email"
              placeholder="Email I'd"
              className="w-full p-3 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            
            <textarea
              placeholder="Project Brief..."
              rows={6}
              className="w-full p-3 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
              value={formData.projectBrief}
              onChange={(e) => setFormData({ ...formData, projectBrief: e.target.value })}
            />
            
            <button
              type="submit"
              className="px-8 py-3 bg-white text-orange-500 border-2 border-orange-500 rounded-md hover:bg-orange-500 hover:text-white transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right Column - Map */}
        <div className="relative min-h-[400px] lg:min-h-full rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3688.394947063103!2d70.05517671095078!3d22.414155979519897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39576bd4a1795357%3A0xabb9398b9c158182!2sNaresh%20steel!5e0!3m2!1sen!2sin!4v1734550913842!5m2!1sen!2sin"
            className="absolute inset-0 w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Contact Information */}
        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
          <div>
            <h3 className="text-orange-500 font-medium mb-2">Email Address</h3>
            <p className="text-gray-700">abc234@gmail.com</p>
          </div>
          <div>
            <h3 className="text-orange-500 font-medium mb-2">Phone Number</h3>
            <p className="text-gray-700">123 456 789</p>
          </div>
        </div>
      </div>
    </div>
  )
}

