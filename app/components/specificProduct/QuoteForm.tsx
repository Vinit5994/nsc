'use client'

import { useState, FormEvent } from 'react'

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    requirement: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.phone || !formData.requirement) {
      alert('Please fill in all fields');
      return;
    }
    
    // Format message for WhatsApp
    const message = `
  *New Steel Quote Request*
  -------------------
  *Name:* ${formData.name}
  *Phone:* ${formData.phone}
  *Requirement:* ${formData.requirement}
  -------------------
  `;
    
    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // You can replace this with your business phone number
    const phoneNumber = '+917567170037'; // Add your WhatsApp business number here
    
    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappURL, '_blank');
    
    // Optional: Reset form after submission
    setFormData({
      name: '',
      phone: '',
      requirement: ''
    });
  };

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
            
            {/* <input
              type="email"
              placeholder="Email I'd"
              className="w-full p-3 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            /> */}
            
            <textarea
              placeholder="Steel Requirement"
              rows={6}
              className="w-full p-3 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
              value={formData.requirement}
              onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
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
            {/* <h3 className="text-orange-500 font-medium mb-2">Email Address</h3>
            <p className="text-gray-700">abc234@gmail.com</p> */}
          </div>
          <div>
            <h3 className="text-orange-500 font-medium mb-2">Phone Number</h3>
            <div className="grid grid-cols-2 gap-2 text-gray-600">
                <a href="tel:+919426208737" className="hover:text-orange-500">+91 94262 08737</a>
                <a href="tel:+917567170037" className="hover:text-orange-500">+91 75671 70037</a>
                <a href="tel:+917600618737" className="hover:text-orange-500">+91 76006 18737</a>
                <a href="tel:+918141005409" className="hover:text-orange-500">+91 81410 05409</a>
              </div>         
             </div>
        </div>
      </div>
    </div>
  )
}

