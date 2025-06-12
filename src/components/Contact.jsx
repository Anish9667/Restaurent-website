import React from "react";
import contactInfo from "../data/contactInfo";

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-6 bg-gray-100">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-rose-600">Contact Us</h2>
          <p className="text-gray-700 text-lg">
            We'd love to hear from you! Whether it's feedback, reservations, or anything else.
          </p>
          <ul className="text-gray-800 space-y-3">
            <li><strong>Address:</strong> {contactInfo.address}</li>
            <li><strong>Phone:</strong> {contactInfo.phone}</li>
            <li><strong>Email:</strong> {contactInfo.email}</li>
            <li><strong>Hours:</strong> {contactInfo.hours}</li>
          </ul>
         
        </div>

        <form className="bg-white p-8 rounded-2xl shadow-md space-y-6">
          <div>
            <label className="block font-semibold mb-1">Full Name</label>
            <input type="text" placeholder="Enter your name" className="w-full border p-2 rounded-md" required />
          </div>
          <div>
            <label className="block font-semibold mb-1">Email Address</label>
            <input type="email" placeholder="Enter your email" className="w-full border p-2 rounded-md" required />
          </div>
          <div>
            <label className="block font-semibold mb-1">Message</label>
            <textarea placeholder="Your message" className="w-full border p-2 rounded-md h-32" required />
          </div>
          <button
            type="submit"
            className="bg-rose-600 text-white px-6 py-2 rounded-md hover:bg-rose-700 transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
