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
            Facilisis commodo mattis neque nulla ultrices mattis sed.
            Ullamcorper tempus mattis ac tristique gravida ornare faucibus
            suspendisse.
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
              {/* Name Input */}
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  placeholder=" "
                  className="peer w-full px-4 pt-5 pb-2 rounded-lg 
      bg-white/10 text-white placeholder-transparent
      focus:outline-none border border-white/20 
      focus:border-[#FF7A00] transition-all"
                />
                <label
                  htmlFor="name"
                  className="absolute left-4 top-2.5 text-gray-400 text-sm 
      transition-all peer-placeholder-shown:top-5 
      peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500
      peer-focus:top-2.5 peer-focus:text-sm peer-focus:text-[#FF7A00]"
                >
                  Your Name
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
      focus:border-[#00C853] transition-all"
                />
                <label
                  htmlFor="email"
                  className="absolute left-4 top-2.5 text-gray-400 text-sm 
      transition-all peer-placeholder-shown:top-5 
      peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500
      peer-focus:top-2.5 peer-focus:text-sm peer-focus:text-[#00C853]"
                >
                  Your Email
                </label>
              </div>

              {/* Message Input */}
              <div className="relative">
                <textarea
                  id="message"
                  placeholder=" "
                  rows={5}
                  className="peer w-full px-4 pt-5 pb-2 rounded-lg 
      bg-white/10 text-white placeholder-transparent
      focus:outline-none border border-white/20 
      focus:border-[#FF7A00] transition-all"
                />
                <label
                  htmlFor="message"
                  className="absolute left-4 top-2.5 text-gray-400 text-sm 
      transition-all peer-placeholder-shown:top-5 
      peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500
      peer-focus:top-2.5 peer-focus:text-sm peer-focus:text-[#FF7A00]"
                >
                  Your Message
                </label>
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
                  Send Message <Send className="w-5 h-5" />
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
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Mattis
                sit phasellus mollis sit aliquam sit nullam.
              </p>

              <div
                className="flex items-center gap-4 bg-[#101214] p-4 rounded-xl 
        border border-[#ffffff1a] hover:shadow-[0_0_20px_rgba(0,200,83,0.4)] transition"
              >
                <Mail className="text-[#FF7A00] w-6 h-6" />
                <div>
                  <p className="text-gray-400 text-sm">Email:</p>
                  <p className="text-white font-semibold">contact@email.com</p>
                </div>
              </div>

              <div
                className="flex items-center gap-4 bg-[#101214] p-4 rounded-xl 
        border border-[#ffffff1a] hover:shadow-[0_0_20px_rgba(0,200,83,0.4)] transition"
              >
                <Phone className="text-[#00C853] w-6 h-6" />
                <div>
                  <p className="text-gray-400 text-sm">Phone:</p>
                  <p className="text-white font-semibold">(234) 564 - 6788</p>
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

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center justify-center gap-6 pt-20 pb-16 bg-gradient-to-b from-[#0d0f11] to-[#101214] relative overflow-hidden"
      >
        {/* Soft Glow Background */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#ff7a00]/10 via-transparent to-[#00c853]/10 pointer-events-none"></div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-[#e4e4e7] mx:text-center mx:text-[36px] mx:leading-[49px] unv text-[50px] font-semibold leading-[61.5px] -mb-4 -mt-4 text-center"
        >
          Join Our Free Forex{" "}
          <span className="bg-gradient-to-r from-[#ff7a00] to-[#00c853] text-transparent bg-clip-text">
            Training Community
          </span>
        </motion.h2>

        {/* Subheading */}
        <p className="text-base mx:text-sm font-normal int text-[#a1a1aa] text-center max-w-2xl z-10">
          Take the first step towards mastering Forex trading with personalized
          mentorship from{" "}
          <span className="text-white font-semibold">NextTradeFX</span>. Apply
          now and start your journey to becoming a successful trader.
        </p>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative overflow-hidden px-8 py-3 rounded-xl font-semibold 
      text-white bg-gradient-to-r from-[#FF7A00] to-[#00C853] 
      shadow-lg hover:shadow-[0_0_30px_rgba(255,122,0,0.6)] 
      transition-all z-10"
        >
          <span className="relative z-10">🚀 Join Community</span>
          {/* Glow layer */}
          <span className="absolute inset-0 bg-gradient-to-r from-[#FF7A00] to-[#00C853] opacity-0 group-hover:opacity-100 blur-2xl transition"></span>
        </motion.button>
      </motion.div>
      <Footer />
    </div>
  );
};

export default Contact;
