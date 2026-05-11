import React, { useState } from "react";
import axios from "axios";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";

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
      setTimeout(() => setSuccess(false), 5000);
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send email. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen bg-[#05060f] text-white py-20 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(108,99,255,0.2),_transparent_40%),radial-gradient(circle_at_top_left,_rgba(14,203,129,0.12),_transparent_40%)] pointer-events-none" />
      
      <div className="relative z-10 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">Let's Connect</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss backend architecture and system design? I'd love to hear from you.
          </p>
        </motion.div>

        {loading ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="inline-block">
              <div className="animate-spin w-12 h-12 border-4 border-cyan-500/30 border-t-cyan-400 rounded-full mb-4"></div>
              <p className="text-lg font-semibold text-slate-300">Sending your message...</p>
            </div>
          </motion.div>
        ) : success ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="rounded-3xl border border-emerald-400/30 bg-gradient-to-r from-emerald-500/10 to-green-600/10 p-8 shadow-xl shadow-emerald-500/10 backdrop-blur-xl text-center"
          >
            <h4 className="text-3xl font-bold mb-3 text-emerald-300">✓ Message Sent!</h4>
            <p className="text-slate-300 text-lg">Thanks for reaching out. I'll get back to you as soon as possible.</p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/60 to-slate-950/60 p-8 shadow-xl shadow-slate-950/40 backdrop-blur-xl space-y-6"
            onSubmit={handleSubmit}
          >
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
              <label className="block mb-2 text-sm font-semibold text-slate-300">Message*</label>
              <textarea
                rows="5"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/50 focus:bg-white/8 transition duration-300 resize-none"
                placeholder="Tell me about your project or idea..."
                value={data.message}
                onChange={handleChange("message")}
                required
              ></textarea>
            </div>

            <div className="text-center pt-4">
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-600 hover:to-violet-600 text-white font-semibold shadow-lg shadow-cyan-500/20 transition duration-300"
              >
                <FaPaperPlane size={16} />
                Send Message
              </button>
            </div>
          </motion.form>
        )}
      </div>
    </section>
  );
};

// Reusable input field component
const InputField = ({ label, value, onChange, type = "text", required = false }) => (
  <div>
    <label className="block mb-2 text-sm font-semibold text-slate-300">{label}</label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/50 focus:bg-white/8 transition duration-300"
      placeholder={label}
    />
  </div>
);

export default Contact;
