/* eslint-disable prettier/prettier */
import React from 'react';

const ContactForm = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    
  };

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div
      id="contact"
      className="mx-auto container xl:px-20 lg:px-12 sm:px-6 px-4 py-12"
    >
      <div className="flex flex-col md:flex-row gap-8">
       {/* Map Section */}
<div className="w-full md:w-1/2 flex flex-col items-center justify-center bg-gray-100 rounded-lg p-6 min-h-[400px]">
  <div className="w-full h-full rounded-lg overflow-hidden"> {/* Added overflow-hidden */}
    <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29451.529384433667!2d88.2698051258432!3d22.674615032799043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8830efd94c899%3A0x4304d214888b1699!2sDankuni%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1737339127809!5m2!1sen!2sin"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      loading="lazy"  
      title="Business Location" 
    ></iframe>
  </div>
</div>

        {/* Contact Form Section */}
        <div className="w-full md:w-1/2">
          <div className="flex flex-col items-start">
            <h2 className="text-3xl leading-normal text-gray-800 dark:text-white">
              Contact Us
            </h2>
            <p className="mt-2 text-base leading-none text-gray-800 dark:text-gray-400">
              Fill out the form below and we&apos;ll get back to you soon.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div>
              <label
                htmlFor="name"
                className="text-base leading-none text-gray-800 dark:text-gray-400"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="w-full p-4 mt-2 border border-gray-300 rounded focus:outline-none focus:border-primary text-base text-gray-800 dark:text-gray-400"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="text-base leading-none text-gray-800 dark:text-gray-400"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
                className="w-full p-4 mt-2 border border-gray-300 rounded focus:outline-none focus:border-primary text-base text-gray-800 dark:text-gray-400"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="text-base leading-none text-gray-800 dark:text-gray-400"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                required
                rows={6}
                className="w-full p-4 mt-2 border border-gray-300 rounded focus:outline-none focus:border-primary text-base text-gray-800 dark:text-gray-400"
              />
            </div>

            <button
              type="submit"
              className="w-full p-4 text-base font-medium leading-none text-white bg-primary rounded hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
