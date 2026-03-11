import React from "react";
import Header from "../Components/Header";
import Accordion from "../Components/Accordion";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Send,
} from "lucide-react";

const Contact = () => {
  return (
    <div className="bg-black">
      <Header />

      <div className="relative overflow-hidden bg-gradient-to-b from-[#0B0F19] to-[#000000] pt-[7rem] pb-[5rem]">
        {/* 🔹 Dotted Background */}
        <div
          className="absolute inset-0 opacity-20 bg-[radial-gradient(#FF7A00_1px,transparent_1px)] 
                [background-size:30px_30px]"
        ></div>

        {/* 🔹 Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#00C853] rounded-full opacity-30 animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${5 + Math.random() * 10}s`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            ></div>
          ))}
        </div>

        {/* 🔹 Contact Us Text */}
        <div className="relative flex justify-center items-center text-center">
          <h1 className="text-white text-[72px] leading-[86px] mx:text-[32px] mx:leading-9 font-bold drop-shadow-[0_0_20px_rgba(0,0,0,0.8)]">
            Connect{" "}
            <span className="bg-gradient-to-r from-[#FF7A00] to-[#00C853] bg-clip-text text-transparent">
              Us
            </span>
          </h1>
        </div>
      </div>
      <div className="relative py-20 bg-black text-white overflow-hidden">
        {/* Gradient Glow Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF7A00]/10 via-transparent to-[#00C853]/10"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-20 relative z-10">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#e4e4e7] text-center mx:text-center 
  mx:text-[40px] mx:leading-[49px] unv text-[55px] 
  font-semibold leading-[61.5px]"
          >
            Get In <span className="text-[#FF7A00]">Touch</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-[#A1A1AA] text-center max-w-2xl mx-auto text-base leading-relaxed mt-4"
          >
            Have questions, feedback, or business inquiries? Our team at{" "}
            <span className="font-semibold text-white">
              NEXTTRADE TECHNOLOGIES PVT LTD  </span>
             is here to assist you. Reach out anytime and we’ll be glad to help
            you.
          </motion.p>
          <div className="flex flex-col lg:flex-row justify-between gap-10 mt-12">
            {/* Left: Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative flex flex-col gap-6 p-8 rounded-2xl
  bg-white/5 backdrop-blur-xl border border-white/10
  shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_0_40px_rgba(255,122,0,0.4)]
  transition-all duration-500 flex-1"
            >
              {/* Full Name Input */}
              <div className="relative">
                <input
                  type="text"
                  id="fullName"
                  placeholder=" "
                  className="peer w-full px-4 pt-5 pb-2 rounded-lg 
      bg-white/10 text-white placeholder-transparent
      focus:outline-none border border-white/20 
      focus:border-[#FF7A00] transition-all"
                />
                <label
                  htmlFor="fullName"
                  className="absolute left-4 top-2.5 text-gray-400 text-sm 
      transition-all peer-placeholder-shown:top-5 
      peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500
      peer-focus:top-2.5 peer-focus:text-sm peer-focus:text-[#FF7A00]"
                >
                  Full Name
                </label>
              </div>

              {/* Contact Number Input */}
              <div className="relative">
                <input
                  type="tel"
                  id="contactNo"
                  placeholder=" "
                  className="peer w-full px-4 pt-5 pb-2 rounded-lg 
      bg-white/10 text-white placeholder-transparent
      focus:outline-none border border-white/20 
      focus:border-[#00C853] transition-all"
                />
                <label
                  htmlFor="contactNo"
                  className="absolute left-4 top-2.5 text-gray-400 text-sm 
      transition-all peer-placeholder-shown:top-5 
      peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500
      peer-focus:top-2.5 peer-focus:text-sm peer-focus:text-[#00C853]"
                >
                  Contact No
                </label>
              </div>

              {/* Email Input */}
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  placeholder=" "
                  className="peer w-full px-4 pt-5 pb-2 rounded-lg 
      bg-white/10 text-white placeholder-transparent
      focus:outline-none border border-white/20 
      focus:border-[#FF7A00] transition-all"
                />
                <label
                  htmlFor="email"
                  className="absolute left-4 top-2.5 text-gray-400 text-sm 
      transition-all peer-placeholder-shown:top-5 
      peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500
      peer-focus:top-2.5 peer-focus:text-sm peer-focus:text-[#FF7A00]"
                >
                  Email ID
                </label>
              </div>

              {/* City Input */}
              <div className="relative">
                <input
                  type="text"
                  id="city"
                  placeholder=" "
                  className="peer w-full px-4 pt-5 pb-2 rounded-lg 
      bg-white/10 text-white placeholder-transparent
      focus:outline-none border border-white/20 
      focus:border-[#00C853] transition-all"
                />
                <label
                  htmlFor="city"
                  className="absolute left-4 top-2.5 text-gray-400 text-sm 
      transition-all peer-placeholder-shown:top-5 
      peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500
      peer-focus:top-2.5 peer-focus:text-sm peer-focus:text-[#00C853]"
                >
                  City
                </label>
              </div>

              {/* Package Select */}
              <div className="relative">
                <select
                  id="packageInterested"
                  defaultValue=""
                  className="w-full appearance-none px-4 pr-12 pt-8 pb-3 rounded-lg bg-white/10 text-white focus:outline-none border border-white/20 focus:border-[#FF7A00] transition-all"
                >
                  <option value="" disabled className="bg-[#101214] text-gray-400">
                    Select Package
                  </option>
                  <option value="Starter" className="bg-[#101214] text-white">
                    Starter
                  </option>
                  <option value="Advanced" className="bg-[#101214] text-white">
                    Advanced
                  </option>
                  <option
                    value="Professional"
                    className="bg-[#101214] text-white"
                  >
                    Professional
                  </option>
                </select>
                <label
                  htmlFor="packageInterested"
                  className="absolute left-4 top-2 text-[11px] uppercase tracking-[0.18em] text-gray-400"
                >
                  Package Interested
                </label>
                <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/80">
                  ▾
                </span>
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative flex items-center gap-2 justify-center 
    bg-gradient-to-r from-[#FF7A00] to-[#00C853] 
    text-white font-semibold py-3 px-6 rounded-lg 
    shadow-lg overflow-hidden group transition-all"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Submit <Send className="w-5 h-5" />
                </span>
                {/* Glow effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-[#FF7A00] to-[#00C853] opacity-0 group-hover:opacity-100 blur-lg transition duration-500"></span>
              </motion.button>
            </motion.div>

            {/* Right: Info */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-6 justify-center flex-1"
            >
              <h3
                className="text-2xl font-semibold 
  bg-gradient-to-r from-[#FF7A00] to-[#00C853] bg-clip-text text-transparent 
  drop-shadow-[0_0_10px_rgba(255,122,0,0.3)]"
              >
                Want to reach out directly?
              </h3>

             <p className="text-[#A1A1AA] max-w-md">
  You can contact{" "}
  <span className="font-semibold text-white">NEXTTRADE TECHNOLOGIES PVT LTD </span> 
  directly via email or phone. We are committed to providing timely support 
  and answering all your trading and platform-related queries.
</p>

              <div
                className="flex items-center gap-4 bg-[#101214] p-4 rounded-xl 
        border border-[#ffffff1a] hover:shadow-[0_0_20px_rgba(0,200,83,0.4)] transition"
              >
                <Mail className="text-[#FF7A00] w-6 h-6" />
                <div>
                  <p className="text-gray-400 text-sm">Email:</p>
                  <p className="text-white font-semibold">
                    support@nexttrade.co.in
                  </p>
                </div>
              </div>

              <div
                className="flex items-center gap-4 bg-[#101214] p-4 rounded-xl 
        border border-[#ffffff1a] hover:shadow-[0_0_20px_rgba(0,200,83,0.4)] transition"
              >
                <Phone className="text-[#00C853] w-6 h-6" />
                <div>
                  <p className="text-gray-400 text-sm">Phone:</p>
                  <p className="text-white font-semibold">+91 9076355531</p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-white mt-4">
                Follow Us:
              </h3>
              <div className="flex gap-5">
                {[
                  {
                    icon: <Facebook className="w-5 h-5" />,
                    color: "from-[#FF7A00] to-[#FFB300]",
                  },
                  {
                    icon: <Twitter className="w-5 h-5" />,
                    color: "from-[#00C853] to-[#4CAF50]",
                  },
                  {
                    icon: <Linkedin className="w-5 h-5" />,
                    color: "from-[#FF7A00] to-[#FFB300]",
                  },
                  {
                    icon: <Instagram className="w-5 h-5" />,
                    color: "from-[#00C853] to-[#4CAF50]",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.15, rotate: 3 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 rounded-full bg-white/5 backdrop-blur-md 
      border border-white/10 shadow-md 
      hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] 
      cursor-pointer transition-all 
      hover:bg-gradient-to-r ${item.color}`}
                  >
                    {item.icon}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Glow Effects */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-[#FF7A00]/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-[#00C853]/20 blur-[120px] rounded-full"></div>
      </div>

      <Accordion />
      <div className="flex flex-col items-center justify-center gap-6 pt-20 pb-16 bg-gradient-to-b from-[#0d0f11] to-[#101214] relative overflow-hidden">
        {/* Soft Glow Background */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#ff7a00]/10 via-transparent to-[#00c853]/10 pointer-events-none"></div>

        {/* Heading */}
        <h2 className="text-[#e4e4e7] mx:text-center mx:text-[36px] mx:leading-[49px] unv text-[50px] font-semibold leading-[61.5px] -mb-4 -mt-4 text-center">
          Start Growing With <br className="hidden mx:block" />
          <span className="bg-gradient-to-r from-[#ff7a00] to-[#00c853] text-transparent bg-clip-text">
            Next Trade
          </span>{" "}
          Next Trade Today
        </h2>

        {/* Subheading */}
        <p className="text-base mx:text-sm font-normal int text-[#a1a1aa] text-center max-w-2xl z-10">
          Automate your trading workflow, manage execution faster, and stay
          connected with the right tools and support from the Next Trade team.
        </p>

        {/* Email Input & Button */}
        {/* Email Input & Button */}
        <div className="flex w-full max-w-lg items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full p-1 shadow-md transition-all duration-300 z-10 group focus-within:shadow-[0_0_25px_rgba(255,122,0,0.4)]">
          <div className="relative flex-1">
            <input
              type="email"
              placeholder=" "
              className="peer w-full bg-transparent outline-none px-4 py-3 text-sm text-white placeholder-transparent"
            />
            {/* Floating Label with Smooth Transition */}
            <label className="absolute left-4 text-[#aaa] text-sm transition-all duration-300 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-[#777] peer-placeholder-shown:text-sm peer-focus:top-1 peer-focus:text-xs peer-focus:text-[#00c853]">
              Enter your email
            </label>
          </div>
          <button className="bg-gradient-to-r from-[#ff7a00] to-[#00c853] text-white text-sm font-semibold rounded-full px-6 py-2 hover:opacity-90 hover:scale-[1.05] transition-all duration-300">
            Let's Go
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
