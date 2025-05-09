import React, { useState } from "react";
import axios from "axios";
import { FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (field) => (e) => {
    setData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/mail/send`,
        data
      );
      console.log(response.data);
      setSuccess(true);
      setData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send email. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 px-4 md:px-12 bg-gradient-to-br from-[#1a1a1a] to-black text-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">Get in touch</h2>
        <p className="text-center text-gray-400 mb-10 leading-relaxed">
          Got an idea, question, or collaboration in mind? Drop me a message — I’ll respond as soon as possible!
        </p>

        {loading ? (
          <div className="text-center">
            <p className="text-lg font-semibold text-gray-300">Sending mail...</p>
            <div className="animate-spin mt-4 mx-auto w-10 h-10 border-4 border-teal-500 border-t-transparent rounded-full"></div>
          </div>
        ) : success ? (
          <div className="bg-green-600 text-white p-6 rounded-xl text-center shadow-md animate-pulse">
            <h4 className="text-2xl font-bold mb-2">Success!</h4>
            <p>Your message has been sent. I’ll get back to you shortly 😊</p>
          </div>
        ) : (
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <InputField
                label="First Name*"
                value={data.firstName}
                onChange={handleChange("firstName")}
                required
              />
              <InputField
                label="Last Name (optional)"
                value={data.lastName}
                onChange={handleChange("lastName")}
              />
            </div>

            <InputField
              label="Email Address*"
              type="email"
              value={data.email}
              onChange={handleChange("email")}
              required
            />

            <InputField
              label="Subject*"
              value={data.subject}
              onChange={handleChange("subject")}
              required
            />

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-300">Message*</label>
              <textarea
                rows="5"
                className="w-full bg-transparent border-b border-gray-600 focus:outline-none focus:border-teal-500 py-2 resize-none"
                value={data.message}
                onChange={handleChange("message")}
                required
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white py-2 px-6 rounded-xl shadow-md transition duration-300 cursor-pointer"
              >
                <FaPaperPlane />
                {loading ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

// Reusable input field component
const InputField = ({ label, value, onChange, type = "text", required = false }) => (
  <div>
    <label className="block mb-1 text-sm font-medium text-gray-300">{label}</label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full bg-transparent border-b border-gray-600 focus:outline-none focus:border-teal-500 py-2"
    />
  </div>
);

export default Contact;
