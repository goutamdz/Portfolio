import React from "react";

const Contact = () => {
  return (
    <section className="py-20 px-4 md:px-12 bg-[#0d0d0d] text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">Get in touch</h2>
        <p className="text-center text-gray-300 mb-10">
          Is there something on your mind you'd like to talk about? Whether it's related to work or just a casual conversation, I am here and ready to listen. Please don't hesitate to reach out to me at any time. 📞
        </p>

        <h3 className="text-2xl font-semibold text-center mb-6">Connect with me</h3>

        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-300">First name</label>
              <input
                type="text"
                className="w-full bg-transparent border-b border-gray-500 focus:outline-none focus:border-teal-500 py-2"
                required
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-300">Last name</label>
              <input
                type="text"
                className="w-full bg-transparent border-b border-gray-500 focus:outline-none focus:border-teal-500 py-2"
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-300">Email address</label>
            <input
              type="email"
              className="w-full bg-transparent border-b border-gray-500 focus:outline-none focus:border-teal-500 py-2"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-300">Subject</label>
            <input
              type="text"
              className="w-full bg-transparent border-b border-gray-500 focus:outline-none focus:border-teal-500 py-2"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-300">Message</label>
            <textarea
              rows="4"
              className="w-full bg-transparent border-b border-gray-500 focus:outline-none focus:border-teal-500 py-2 resize-none"
              required
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-gray-800 hover:bg-teal-600 text-white py-2 px-6 rounded-xl shadow-md transition duration-300"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
