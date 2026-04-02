import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "service_tvblrkb",
        "template_3wemtla",
        {
          from_name: form.name,
          to_name: "Krishna",
          from_email: form.email,
          message: form.message,
        },
        "qDbWbFNT5t1wA0su8"
      );
      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      alert("Oops! Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-12 bg-black/90 text-white">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent"
      >
        Contact Me
      </motion.h2>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left Side: Text + Social Links */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <p className="text-gray-300 text-lg">
            Have a project in mind or just want to say hi? Fill the form and I will get back to you!
          </p>
          <div className="flex flex-col space-y-4 text-gray-300">
            <a href="mailto:kumarkrishna4867@gmail.com" className="flex items-center gap-3 hover:text-white transition">
              <FaEnvelope /> kumarkrishna4867@gmail.com
            </a>
            <a href="https://github.com/KrIsH9693" target="_blank" className="flex items-center gap-3 hover:text-white transition">
              <FaGithub /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/krishna-kumar-07015a24a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="flex items-center gap-3 hover:text-white transition">
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        </motion.div>

        {/* Right Side: Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="bg-white/5 p-8 rounded-xl border border-white/20 flex flex-col gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="bg-white/10 border border-white/20 rounded-md p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="bg-white/10 border border-white/20 rounded-md p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            className="bg-white/10 border border-white/20 rounded-md p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition h-32 resize-none"
          />
          <button
            type="submit"
            className="mt-2 bg-gradient-to-r from-indigo-500 to-cyan-400 text-black font-semibold py-3 rounded-md hover:scale-105 transition-transform"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
          {success && <p className="text-green-400 mt-2">Message Sent Successfully!</p>}
        </motion.form>
      </div>
    </section>
  );
}