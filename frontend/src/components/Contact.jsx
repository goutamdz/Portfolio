import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false); // State for loading
  const [success, setSuccess] = useState(false); // State for success message

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    setSuccess(false); // Reset success state
    try {
      const response = await axios({
        method: "post",
        url: `${import.meta.env.VITE_BACKEND_URL}/mail/send`,
        data: {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          subject: data.subject,
          message: data.message,
        },
      });
      console.log(response.data);
      setSuccess(true); // Show success card
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send email. Please try again later.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <section className="py-20 px-4 md:px-12 bg-gradient-to-r from-[#1a1a1a] to-[#000000] text-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">Get in touch</h2>
        <p className="text-center text-gray-300 mb-10">
          Is there something on your mind you'd like to talk about? Whether it's related to work or just a casual conversation, I am here and ready to listen. Please don't hesitate to reach out to me at any time. 📞
        </p>

        <h3 className="text-2xl font-semibold text-center mb-6">Connect with me</h3>

        {loading ? (
          <div className="text-center">
            <p className="text-lg font-semibold text-gray-300">Sending mail...</p>
            <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full border-teal-500 border-t-transparent mt-4"></div>
          </div>
        ) : success ? (
          <div className="bg-green-500 text-white p-4 rounded-lg shadow-md text-center">
            <h4 className="text-xl font-bold">Email Sent Successfully!</h4>
            <p>Thank you for reaching out. I will get back to you soon.</p>
          </div>
        ) : (
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-300">First name</label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-gray-500 focus:outline-none focus:border-teal-500 py-2"
                  value={data.firstName}
                  onChange={(e) => setData({ ...data, firstName: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-300">Last name</label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-gray-500 focus:outline-none focus:border-teal-500 py-2"
                  value={data.lastName}
                  onChange={(e) => setData({ ...data, lastName: e.target.value })}
                />
              </div>
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-300">Email address</label>
              <input
                type="email"
                className="w-full bg-transparent border-b border-gray-500 focus:outline-none focus:border-teal-500 py-2"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
                required
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-300">Subject</label>
              <input
                type="text"
                className="w-full bg-transparent border-b border-gray-500 focus:outline-none focus:border-teal-500 py-2"
                value={data.subject}
                onChange={(e) => setData({ ...data, subject: e.target.value })}
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-300">Message</label>
              <textarea
                rows="4"
                className="w-full bg-transparent border-b border-gray-500 focus:outline-none focus:border-teal-500 py-2 resize-none"
                value={data.message}
                onChange={(e) => setData({ ...data, message: e.target.value })}
                required
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-gray-800 hover:bg-teal-600 text-white py-2 px-6 rounded-xl shadow-md transition duration-300 cursor-pointer"
                disabled={loading} // Disable button while loading
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;