'use client';

import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState<any>({
    fullName: '',
    email: '',
    timeline: '',
    budget: '',
    services: [],
    moreInfo: '',
  });

  const servicesList = [
    'Brand Strategy',
    'Web Design',
    'Content Creation',
    'Digital Marketing',
    'Other',
  ];

  const handleChange = (field:any, value:any) => {
    setFormData((prev:any) => ({
      ...prev,
      [field]: value,
    }));
  };

  const toggleService = (service:any) => {
    setFormData((prev:any) => {
      const isSelected = prev.services.includes(service);
      const newServices = isSelected
        ? prev.services.filter((s:any) => s !== service)
        : [...prev.services, service];
      return { ...prev, services: newServices };
    });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log(formData);
    alert('Form submitted!');
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* LEFT COLUMN */}
      <div className="md:w-1/3 bg-gray-100 p-10 flex flex-col justify-center">
        <h2 className="text-3xl font-bold mb-4">Find us</h2>
        <p className="text-lg mb-6">Civil Lines, Ludhiana, Punjab, India</p>

        <h2 className="text-3xl font-bold mb-4">Inquiry</h2>
        <p className="text-lg">sakshambhown1920@gmail.com</p>
        <p className="text-lg font-medium">+91 62847 22026</p>
      </div>

      {/* RIGHT COLUMN - Full Form */}
      <div className="md:w-2/3 bg-white p-6 sm:p-10 flex items-center justify-center">
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
          <div>
            <label className="block mb-2 font-semibold">Full Name</label>
            <input
              type="text"
              value={formData.fullName}
              onChange={(e) => handleChange('fullName', e.target.value)}
              placeholder="Name Surname"
              className="w-full p-3 border rounded"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">Email Address</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              placeholder="mail@company.com"
              className="w-full p-3 border rounded"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">Timeline</label>
            <input
              type="text"
              value={formData.timeline}
              onChange={(e) => handleChange('timeline', e.target.value)}
              placeholder="e.g. 2 weeks"
              className="w-full p-3 border rounded"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">Budget</label>
            <input
              type="text"
              value={formData.budget}
              onChange={(e) => handleChange('budget', e.target.value)}
              placeholder="$500, $2000"
              className="w-full p-3 border rounded"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">Select Services</label>
            <div className="space-y-2">
  {servicesList.map((service:any) => (
    <label key={service} className="flex items-center space-x-2">
      <input
        type="checkbox"
        checked={formData.services.includes(service)}
        onChange={() => toggleService(service)}
        className="accent-black"
      />
      <span>{service}</span>
    </label>
  ))}
</div>
          </div>

          <div>
            <label className="block mb-2 font-semibold">More Information</label>
            <textarea
              value={formData.moreInfo}
              onChange={(e) => handleChange('moreInfo', e.target.value)}
              placeholder="Describe your project..."
              className="w-full p-3 border rounded"
              rows={4}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded font-semibold"
          >
            SUBMIT PROJECT
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
