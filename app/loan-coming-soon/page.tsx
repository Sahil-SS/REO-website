"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const LoanComingSoon = () => {
  const [timer, setTimer] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "success" | "error" | "loading"
  >("idle");

  // Countdown timer
  useEffect(() => {
    const launchDate = new Date("2026-01-15T10:00:00").getTime();
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
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Email form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("access_key", "2756ba83-599a-443a-b5a1-1871d615f0db");
      formData.append("subject", "New Subscriber - Loan Project");
      formData.append("from_name", "Loan Project");

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await res.json();

      if (result.success) {
        setStatus("success");
        setEmail("");
      } else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden text-white">
      {/* Rotating background lines */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 180, ease: "linear" }}
      >
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="absolute w-[2px] h-[150vh] bg-gradient-to-b from-white/10 to-transparent"
            style={{ left: `${i * 20}%` }}
          />
        ))}
      </motion.div>

      {/* COMING SOON badge with animated radial glow behind it */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
        {/* glow element behind the badge */}
        <motion.div
          aria-hidden
          initial={{ scale: 0.95, opacity: 0.35 }}
          animate={{ scale: [0.95, 1.06, 0.98], opacity: [0.35, 0.85, 0.35] }}
          transition={{ repeat: Infinity, duration: 2.6, ease: "easeInOut" }}
          className="absolute -z-10 rounded-full"
          style={{
            width: 240,
            height: 88,
            background:
              "radial-gradient(closest-side, rgba(219,7,29,0.26), rgba(244,163,11,0.12) 40%, rgba(0,0,0,0) 70%)",
            filter: "blur(18px)",
          }}
        />
        <div className="relative flex items-center justify-center">
          {/* Animated glow behind the badge */}
          <motion.div
            aria-hidden
            initial={{ opacity: 0.4, scale: 1 }}
            animate={{ opacity: [0.4, 0.9, 0.4], scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
            className="absolute inset-0 rounded-lg blur-xl"
            style={{
              background:
                "radial-gradient(circle at center, rgba(219,7,29,0.55) 0%, rgba(219,7,29,0.25) 40%, transparent 70%)",
            }}
          />

          {/* Actual badge */}
          <div className="relative bg-[#db071d] px-6 py-3 rounded-lg shadow-lg text-lg font-semibold uppercase tracking-wide text-white">
            Coming Soon
          </div>
        </div>
      </div>

      {/* Split layout */}
      <div className="flex flex-col md:flex-row flex-1 z-10">
        {/* Left side */}
        <div className="flex-1 bg-[#f4a30b] flex flex-col justify-center items-center px-6 py-10 text-center relative">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-semibold mb-6 text-black"
          >
            Waiting in line for hours
          </motion.h1>

          {/* gentle bobbing/sway for people */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="w-full flex justify-center"
          >
            <Image
              src="/people-placeholder.png"
              alt="People waiting"
              width={400}
              height={300}
              className="object-contain w-3/4 max-w-[380px]"
            />
          </motion.div>
        </div>

        {/* Right side */}
        <div className="flex-1 bg-[#0c3b7a] flex flex-col justify-center items-center px-6 py-10 text-center relative">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-4xl font-semibold mb-6"
          >
            Loan approval in minutes
          </motion.h1>

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          >
            <Image
              src="/phone.png"
              alt="Phone mockup"
              width={250}
              height={400}
              className="object-contain w-2/3 max-w-[260px]"
            />
          </motion.div>

          {/* bouncing arrow under phone */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1.4,
              ease: "easeInOut",
              delay: 0.15,
            }}
            className="mt-4"
          >
            <Image
              src="/up-arrow.gif"
              alt="Arrow Down"
              width={100}
              height={100}
              className="opacity-100"
            />
          </motion.div>
        </div>
      </div>

      {/* Bottom overlay */}
      <div className="relative bg-[#0b0b0b]/90 backdrop-blur-sm py-12 px-6 flex flex-col items-center text-center z-20">
        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
        >
          {["days", "hours", "minutes", "seconds"].map((unit) => (
            <div
              key={unit}
              className="bg-white/10 px-6 py-4 rounded-xl min-w-[80px] hover:bg-white/20 transition"
            >
              <p className="text-2xl font-semibold">
                {timer[unit as keyof typeof timer]}
              </p>
              <p className="text-sm text-white/70 capitalize">{unit}</p>
            </div>
          ))}
        </motion.div>

        {/* Email form */}
        <motion.form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row items-center gap-4 w-full max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#db071d] transition"
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="bg-[#db071d] px-6 py-3 rounded-xl font-medium text-white shadow-lg w-full md:w-auto"
          >
            {status === "loading" ? "Sending..." : "Notify Me"}
          </motion.button>
        </motion.form>

        {status === "success" && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-green-400 mt-4 text-sm"
          >
            Success! You are subscribed.
          </motion.p>
        )}
        {status === "error" && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-red-400 mt-4 text-sm"
          >
            Oops! Something went wrong.
          </motion.p>
        )}

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-white/50 text-sm mt-10"
        >
          © 2026 Loan Project. All rights reserved.
        </motion.p>
      </div>
    </div>
  );
};

export default LoanComingSoon;
