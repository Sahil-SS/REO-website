"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "@/lib/supabaseClient";
import Image from "next/image";

export default function PaymentForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    amount: "",
    gpayName: "",
    utr: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Submitting...");

    const { error } = await supabase.from("payments").insert([
      {
        name: form.name,
        email: form.email,
        phone: form.phone,
        amount: form.amount,
        gpay_name: form.gpayName,
        utr: form.utr,
      },
    ]);

    if (error) {
      console.error(error);
      setStatus("❌ Error submitting form");
    } else {
      setStatus("✅ Payment submitted successfully!");
      setForm({
        name: "",
        email: "",
        phone: "",
        amount: "",
        gpayName: "",
        utr: "",
      });

      setTimeout(() => {
        window.location.reload();
      }, 1500);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/mumbai.jpg"
          alt="Luxury Property"
          fill
          className="object-cover brightness-[0.35]"
          priority
        />
      </div>

      {/* Main Card */}
      <motion.div
        className="relative z-10 flex flex-col md:flex-row w-full max-w-4xl rounded-2xl shadow-[0_0_50px_-10px_rgba(219,7,29,0.8)] overflow-hidden bg-white/10 backdrop-blur-xl border border-[#db071d]/60"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Left Side: QR Section */}
        <div className="md:w-1/2 flex flex-col items-center justify-center bg-gradient-to-b from-[#db071d] to-[#7a0010] p-8 text-white">
          <h2 className="text-2xl font-bold mb-3 text-yellow-300">
            Scan to Pay
          </h2>
          <div className="bg-white p-3 rounded-xl shadow-md">
            <Image
              src="/images/qr.jpg"
              alt="GPay QR"
              width={180}
              height={180}
              className="rounded-md"
            />
          </div>

          {/* Payment App Logos */}
          {/* <div className="flex items-center justify-center gap-5 mt-5 bg-white">
            {[
              { src: "/images/gpay.png", alt: "Google Pay" },
              { src: "/images/phonepay.png", alt: "PhonePe" },
              { src: "/images/paytm.png", alt: "Paytm" },
            ].map((app) => (
              <motion.div
                key={app.alt}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 bg-white/10 rounded-xl hover:bg-white/20 transition"
              >
                <Image
                  src={app.src}
                  alt={app.alt}
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </motion.div>
            ))}
          </div> */}

          <p className="text-sm text-white/80 mt-3 text-center">
            Scan and pay securely using your preferred app.
          </p>
          <p className="mt-2 text-sm font-semibold text-yellow-300">
            UPI ID: <span className="text-white">msthearchitizer.eazypay1@icici</span>
          </p>
          <p className="text-sm text-white mt-3 text-center">
            Once your Payment will be verified by our team, you will receive a confirmation email.
          </p>
        </div>

        {/* Right Side: Payment Form */}
        <div className="md:w-1/2 bg-white p-8 text-gray-800 flex flex-col justify-center">
          <h1 className="text-2xl font-bold text-center text-[#db071d] mb-6">
            Payment Details
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            {[
              { name: "name", placeholder: "Full Name", type: "text" },
              { name: "email", placeholder: "Email", type: "email" },
              { name: "phone", placeholder: "Phone Number", type: "tel" },
              {
                name: "amount",
                placeholder: "Payment Amount (₹)",
                type: "number",
              },
              {
                name: "gpayName",
                placeholder: "Google Pay Name",
                type: "text",
              },
              {
                name: "utr",
                placeholder: "Transaction ID / UTR Number",
                type: "text",
              },
            ].map((field) => (
              <input
                key={field.name}
                {...field}
                value={(form as any)[field.name]}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#db071d]/80 transition-all duration-300"
                required
              />
            ))}

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 bg-gradient-to-r from-[#db071d] to-[#a80a1a] text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:from-[#b10018] hover:to-[#db071d] transition"
            >
              Submit Payment
            </motion.button>

            {status && (
              <p
                className={`text-center text-sm mt-2 ${
                  status.includes("✅") ? "text-green-600" : "text-red-600"
                }`}
              >
                {status}
              </p>
            )}
          </form>
        </div>
      </motion.div>
    </div>
  );
}
