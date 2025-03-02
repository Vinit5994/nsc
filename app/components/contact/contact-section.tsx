'use client'

import { useState } from 'react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    requirement: ''
  })

// Handle form submission to WhatsApp
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
    <div className="bg-white"   id="contact-section">
    <section className="max-w-7xl mx-auto px-4 py-20">
      {/* Quote Section */}
      <div className="text-center mb-20 max-w-3xl mx-auto">
        <div className="text-orange-500 text-6xl mb-6"> &quot; </div>
        <p className="text-3xl font-medium mb-4 leading-snug">
          Your success is our success, and we take pride in being a trusted ally in your industry.
        </p>
        <p className="text-orange-500 text-lg">John Stark, CEO, Founder</p>
      </div>

      {/* Two Column Layout */}
      <div className="grid md:grid-cols-2 gap-16">
        {/* Get Quote Form */}
        <div>
          <h2 className="text-2xl font-bold mb-6">
            Get Quote Now
            <div className="h-1 w-24 bg-orange-500 mt-2"></div>
          </h2>
          <p className="text-gray-600 mb-8">
            Let our experienced team assist you in finding the perfect alloy steel.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-orange-500"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-orange-500"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
            <textarea
              placeholder="Steel Requirement"
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-orange-500"
              value={formData.requirement}
              onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
            />
            <button
              type="submit"
              className="px-8 py-3 bg-white text-orange-500 rounded border-2 border-orange-500 hover:bg-orange-50 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div>
          <h2 className="text-2xl font-bold mb-6">
            Contact
            <div className="h-1 w-16 bg-orange-500 mt-2"></div>
          </h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-orange-500 font-medium mb-2">Shop Address</h3>
              <p className="text-gray-600 leading-relaxed">
                No. 58, Udyog Nagar Road, Digvijay Plot,<br />
                Jamnagar, Gujarat, India - 360005
              </p>
            </div>

            <div>
              <h3 className="text-orange-500 font-medium mb-2">Warehouse Address</h3>
              <p className="text-gray-600 leading-relaxed">
                425, G.I.D.C. Phase 2, GIDC Phase-2,<br />
                Dared, Jamnagar, Gujarat 361006, India
              </p>
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
    </section>
    </div>
  )
}

