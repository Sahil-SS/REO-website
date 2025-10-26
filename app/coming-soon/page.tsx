"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ComingSoonPage = () => {
  const [timer, setTimer] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error" | "loading">("idle");

  useEffect(() => {
    const launchDate = new Date("2025-12-31T00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimer({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimer({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("access_key", "335dfb36-4a68-4db8-b011-61a5058477a3");
      formData.append("subject", "New Subscriber - REO Developments");
      formData.append("from_name", "REO Developments");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
      console.error(err);
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Elegant Background Lines */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 180, ease: "linear" }}
      >
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="absolute w-[2px] h-[150vh] bg-gradient-to-b from-white/10 to-white/0"
            style={{ left: `${i * 20}%` }}
          />
        ))}
      </motion.div>

      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-normal text-white text-center mb-4 leading-snug z-10"
      >
        REO Developments is <br /> Launching Soon
      </motion.h1>

      {/* Subheading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-white/80 text-base md:text-lg text-center mb-12 max-w-2xl mx-auto font-light leading-relaxed z-10"
      >
        Experience the future of real estate investments. Stay ahead and get notified for our prelaunch.
      </motion.h2>

      {/* Countdown */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="grid grid-cols-4 gap-4 text-white font-mono text-lg md:text-xl mb-12 text-center z-10"
      >
        {["days", "hours", "minutes", "seconds"].map((unit) => (
          <div
            key={unit}
            className="flex flex-col items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl min-w-[60px] hover:bg-white/20 transition"
          >
            <span className="font-medium">{timer[unit as keyof typeof timer]}</span>
            <span className="text-sm text-white/70 mt-1">{unit.charAt(0).toUpperCase() + unit.slice(1)}</span>
          </div>
        ))}
      </motion.div>

      {/* Email Signup */}
      <motion.form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row items-center gap-4 w-full max-w-md mx-auto z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full px-4 py-4 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#7A1C1C] transition font-light"
        />
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255,28,28,0.7)" }}
          whileTap={{ scale: 0.97, boxShadow: "0 0 40px rgba(255,28,28,0.9)" }}
          className="bg-[#7A1C1C] text-white px-6 py-4 rounded-xl font-medium w-full md:min-w-[220px] text-center whitespace-normal transition shadow-lg"
        >
          {status === "loading" ? "Sending..." : "Notify Me"}
        </motion.button>
      </motion.form>

      {status === "success" && (
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-400 mt-4 text-sm font-light z-10">
          Success! You are subscribed.
        </motion.p>
      )}
      {status === "error" && (
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-400 mt-4 text-sm font-light z-10">
          Oops! Something went wrong.
        </motion.p>
      )}

      {/* Footer */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="text-white/50 text-sm mt-8 max-w-xs mx-auto text-center font-light z-10"
      >
        © 2025 REO Developments. All rights reserved.
      </motion.p>
    </div>
  );
};

export default ComingSoonPage;
