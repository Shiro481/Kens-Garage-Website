import React, { useState } from 'react';
import { CheckCircle, Clock, Shield, DollarSign, Headphones } from 'lucide-react';
import { toast } from 'sonner';

const trustCues = [
  { icon: CheckCircle, text: 'Free consultation & quote' },
  { icon: Clock, text: 'Response within 24 hours' },
  { icon: Shield, text: 'All work guaranteed' },
  { icon: DollarSign, text: 'Transparent pricing' },
  { icon: Headphones, text: 'Expert advice included' }
];

const services = [
  'Lift Kit Installation',
  'Wheels & Tires Package',
  'Engine Upgrade & Tuning',
  'Multiple Services',
  'Custom Build Consultation'
];

export default function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    make: '',
    model: '',
    year: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    toast.success('Quote request submitted! We\'ll contact you within 24 hours.');
    setFormData({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      make: '',
      model: '',
      year: '',
      service: '',
      message: ''
    });
  };

  return (
    <div id="quote" className="bg-black py-16 lg:py-24 border-t border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left side - Info */}
          <div className="lg:col-span-2">
            <h2 className="text-5xl lg:text-6xl font-['Bebas_Neue'] text-white uppercase tracking-widest mb-6">
              Get a Free<br />Quote
            </h2>
            <p className="text-gray-400 mb-10 text-lg">
              Tell us about your vehicle and customization goals. Our team will get back to you with a detailed quote and recommendations.
            </p>

            <div className="space-y-4">
              {trustCues.map((cue, index) => (
                <div key={index} className="flex items-center gap-3">
                  <cue.icon className="w-5 h-5 text-white flex-shrink-0" />
                  <span className="text-gray-300">{cue.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Form */}
          <div className="lg:col-span-3">
            <div className="bg-neutral-900 border border-white/20 overflow-hidden">
              {/* White accent bar */}
              <div className="h-2 bg-white" />
              
              <form onSubmit={handleSubmit} className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-['Bebas_Neue'] tracking-[0.05em] text-white mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full bg-black border border-white/20 text-white px-4 py-3 focus:border-white focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-['Bebas_Neue'] tracking-[0.05em] text-white mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full bg-black border border-white/20 text-white px-4 py-3 focus:border-white focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-['Bebas_Neue'] tracking-[0.05em] text-white mb-2">
                      Phone (PH) *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+63 XXX XXX XXXX"
                      required
                      className="w-full bg-black border border-white/20 text-white px-4 py-3 focus:border-white focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-['Bebas_Neue'] tracking-[0.05em] text-white mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-black border border-white/20 text-white px-4 py-3 focus:border-white focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-['Bebas_Neue'] tracking-[0.05em] text-white mb-2">
                      Vehicle Make *
                    </label>
                    <input
                      type="text"
                      name="make"
                      value={formData.make}
                      onChange={handleChange}
                      placeholder="e.g., Toyota"
                      required
                      className="w-full bg-black border border-white/20 text-white px-4 py-3 focus:border-white focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-['Bebas_Neue'] tracking-[0.05em] text-white mb-2">
                      Model *
                    </label>
                    <input
                      type="text"
                      name="model"
                      value={formData.model}
                      onChange={handleChange}
                      placeholder="e.g., Hilux"
                      required
                      className="w-full bg-black border border-white/20 text-white px-4 py-3 focus:border-white focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-['Bebas_Neue'] tracking-[0.05em] text-white mb-2">
                      Year *
                    </label>
                    <input
                      type="text"
                      name="year"
                      value={formData.year}
                      onChange={handleChange}
                      placeholder="e.g., 2022"
                      required
                      className="w-full bg-black border border-white/20 text-white px-4 py-3 focus:border-white focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-['Bebas_Neue'] tracking-[0.05em] text-white mb-2">
                    Service Interested In *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full bg-black border border-white/20 text-white px-4 py-3 focus:border-white focus:outline-none transition-colors"
                  >
                    <option value="">Select a service...</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-['Bebas_Neue'] tracking-[0.05em] text-white mb-2">
                    Additional Details
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell us more about your project..."
                    className="w-full bg-black border border-white/20 text-white px-4 py-3 focus:border-white focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full btn-angular bg-white text-black py-4 font-['Bebas_Neue'] tracking-widest transition-colors ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-neutral-200'
                  }`}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}