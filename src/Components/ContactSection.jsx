import React, { useState, useEffect } from "react";
import { Mail, Phone, Linkedin, MapPin } from "lucide-react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [userIp, setUserIp] = useState("");
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Check if user has exceeded messaging limit (2 messages per 24 hours per IP/device)
  const checkLimit = (ip) => {
    try {
      const history = JSON.parse(localStorage.getItem("portfolio_message_history") || "[]");
      const now = Date.now();
      const oneDayAgo = now - 24 * 60 * 60 * 1000;

      // Filter message history to only active entries within the last 24h
      const recentHistory = history.filter(item => item.timestamp > oneDayAgo);

      // Device level limit: total sent from this browser in past 24h
      if (recentHistory.length >= 2) {
        setIsRateLimited(true);
        return true;
      }

      // IP level limit: total sent from this IP in past 24h
      if (ip) {
        const ipMessages = recentHistory.filter(item => item.ip === ip);
        if (ipMessages.length >= 2) {
          setIsRateLimited(true);
          return true;
        }
      }

      setIsRateLimited(false);
      return false;
    } catch (e) {
      console.error("Error checking rate limit:", e);
      return false;
    }
  };

  useEffect(() => {
    // Fetch IP address on mount to run IP rate-limit check
    fetch("https://api.ipify.org?format=json")
      .then((res) => res.json())
      .then((data) => {
        if (data.ip) {
          setUserIp(data.ip);
          checkLimit(data.ip);
        } else {
          checkLimit("");
        }
      })
      .catch((err) => {
        console.error("Failed to fetch IP address, falling back to device-only check:", err);
        checkLimit("");
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Double check limit immediately before sending
    if (checkLimit(userIp)) {
      setStatus("rate-limited");
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_1u70vo3";
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_i59kaof";
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "e-y8y8_XeFkgsolYR";

    emailjs
      .send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: "prabeshbhandary9@gmail.com",
        },
        {
          publicKey: publicKey,
        }
      )
      .then(() => {
        setStatus("sent");
        setFormData({ name: "", email: "", message: "" });

        // Add current message to rate limit history
        try {
          const history = JSON.parse(localStorage.getItem("portfolio_message_history") || "[]");
          const now = Date.now();
          const oneDayAgo = now - 24 * 60 * 60 * 1000;

          const recentHistory = history.filter(item => item.timestamp > oneDayAgo);
          recentHistory.push({ timestamp: now, ip: userIp });

          localStorage.setItem("portfolio_message_history", JSON.stringify(recentHistory));
          setIsRateLimited(recentHistory.length >= 2 || (userIp && recentHistory.filter(item => item.ip === userIp).length >= 2));
        } catch (e) {
          console.error("Error storing message history:", e);
        }
      })
      .catch((error) => {
        console.error("EmailJS sending failed:", error);
        const msg = error?.text || error?.message || (typeof error === "string" ? error : "");
        setErrorMessage(msg || "Something went wrong. Please check your credentials.");
        setStatus("error");
      });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const formVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut", delay: 0.4 } }
  };

  return (
    <section id="contact" className="py-24 px-4 text-white">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Let's <span className="text-primary">Connect.</span>
          </h2>
          <div className="w-28 h-1 bg-primary mx-auto mt-4 rounded-2xl"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Info side */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8 pr-0 lg:pr-8"
          >
            <motion.p variants={itemVariants} className="text-gray-400 text-lg leading-relaxed">
              Have any Project or you need help with development, feel free to contact me.😊
            </motion.p>

            <div className="space-y-6">
              {/* Email */}
              <motion.div variants={itemVariants} className="flex items-center gap-4 group cursor-pointer">
                <div className="p-4 rounded-full bg-[#1b223c] group-hover:bg-primary/20 transition-colors duration-300">
                    <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-base">Email</h4>
                  <a href="mailto:prabeshb635@gmail.com" className="text-gray-400 group-hover:text-primary transition-colors text-sm">
                    prabeshb635@gmail.com
                  </a>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div variants={itemVariants} className="flex items-center gap-4 group cursor-pointer">
                <div className="p-4 rounded-full bg-[#1b223c] group-hover:bg-primary/20 transition-colors duration-300">
                    <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-base">Phone</h4>
                  <a href="tel:+9779763721815" className="text-gray-400 group-hover:text-primary transition-colors text-sm">
                    +977-9763721815
                  </a>
                </div>
              </motion.div>

              {/* LinkedIn */}
              <motion.div variants={itemVariants} className="flex items-center gap-4 group cursor-pointer">
                <div className="p-4 rounded-full bg-[#1b223c] group-hover:bg-primary/20 transition-colors duration-300">
                    <Linkedin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-base">LinkedIn</h4>
                  <a href="https://www.linkedin.com/in/prabesh-bhandari-766a10361" target="_blank" rel="noopener noreferrer" className="text-gray-400 group-hover:text-primary transition-colors text-sm">
                    linkedin.com
                  </a>
                </div>
              </motion.div>

              {/* Location */}
              <motion.div variants={itemVariants} className="flex items-center gap-4 group cursor-pointer">
                <div className="p-4 rounded-full bg-[#1b223c] group-hover:bg-primary/20 transition-colors duration-300">
                    <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-base">Location</h4>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Kerabari-8+Morang,+Nepal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 group-hover:text-primary transition-colors text-sm"
                  >
                    Kerabari-8 Morang, Nepal
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Form side */}
          <motion.div 
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="bg-[#1b223c] rounded-2xl p-8 border border-gray-800 shadow-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2 text-white">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-[#252c48] text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder-gray-500"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2 text-white">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-[#252c48] text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder-gray-500"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2 text-white">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-[#252c48] text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder-gray-500 resize-none"
                  placeholder="Your Message ...."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02, boxShadow: "0px 10px 20px rgba(6, 162, 194, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={status === "sending" || isRateLimited}
                className="w-full bg-primary hover:bg-cyan-500 text-white font-bold py-3.5 px-6 rounded-lg transition-colors text-base disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </motion.button>

              {/* Success / Error / Rate-limit Messages */}
              {isRateLimited && (
                <p className="text-amber-400 text-sm text-center font-medium mt-2">
                  ⚠️ Limit reached: You can send at most 2 messages per day.
                </p>
              )}
              {status === "sent" && (
                <p className="text-green-400 text-sm text-center font-medium mt-2">
                  ✅ Message sent successfully!
                </p>
              )}
              {status === "error" && (
                <p className="text-red-400 text-sm text-center font-medium mt-2">
                  ❌ {errorMessage || "Something went wrong. Please try again."}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
