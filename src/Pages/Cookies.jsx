// src/Pages/CookiesPolicy.jsx
import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { motion } from "framer-motion";
import {
  FaCookieBite,
  FaCogs,
  FaChartLine,
  FaShieldAlt,
} from "react-icons/fa";

const sections = [
  {
    title: "Agreement Notice",
    icon: <FaShieldAlt className="text-[#FF7A00] w-7 h-7" />,
    content: `BY CONTINUING TO USE OUR SITE AND SERVICES, YOU ARE AGREEING TO THE USE OF COOKIES AND SIMILAR TECHNOLOGIES FOR THE PURPOSES WE DESCRIBE IN THIS COOKIES POLICY. IF YOU DO NOT ACCEPT THE USE OF COOKIES AND SIMILAR TECHNOLOGIES, DO NOT USE THIS SITE.`,
  },
  {
    title: "Cookies",
    icon: <FaCookieBite className="text-[#00C853] w-7 h-7" />,
    content: `A cookie is a small text file that a website saves on your computer or mobile device when you visit the site. In general, cookies have two main purposes: to improve your browsing experience by remembering your actions and preferences, and to help us analyze our website traffic.`,
  },
  {
    title: "What to do with Cookies?",
    icon: <FaCogs className="text-[#FFD700] w-7 h-7" />,
    content: `We use cookies to help us analyze traffic to the Website, to help us improve website performance and usability, and to make the Website more secure. Third-party cookies help us use Google Analytics to count, track and analyze visits to the Website. This helps us understand how people are using our websites and where we need to make improvements. These third-party cookies do not specifically identify you.`,
  },
  {
    title: "Types & Categories of Cookies Used",
    icon: <FaChartLine className="text-[#1E90FF] w-7 h-7" />,
    content: `The following categories of cookies are used by NextTrade Technologies PVT Ltd website:

a - Security
We use cookies to enable and support our security features, and to help us detect malicious activity violations of our Terms and Conditions.

b - Performance, Analytics, Research & Advertising
Cookies help us learn how well our site and web products perform in different locations. We also use these to understand, improve, and research products, features, and services, including when you access this site nexttrade.co.in from other websites, applications, or devices such as your work computer or your mobile device. We also use third party cookies to improve and personalize our marketing messages/communications with you.`,
  },
  {
    title: "Control Cookies",
    icon: <FaShieldAlt className="text-[#00C853] w-7 h-7" />,
    content: `You are always free to delete cookies that are already on your computer through your browser settings, and you can set most browsers to prevent them from being added to your computer. However, this may prevent you from using certain features on the Website.`,
  },
];

const Cookies = () => {
  return (
    <div className="bg-black text-white">
      <Header />
      <div className="relative overflow-hidden bg-gradient-to-b from-[#0B0F19] to-[#000000] pt-[7rem] pb-[5rem]">
        {/* Floating Particles */}
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
            />
          ))}
        </div>

        {/* Header */}
        <div className="relative flex justify-center items-center text-center mt-5 mb-12">
          <h1 className="text-white text-[64px] font-bold drop-shadow-[0_0_20px_rgba(0,0,0,0.8)]">
            Cookies{" "}
            <span className="bg-gradient-to-r from-[#FF7A00] to-[#00C853] bg-clip-text text-transparent">
              Policy
            </span>
          </h1>
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 space-y-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {sections.map((section, index) => (
              <div
                key={index}
                className="bg-[#11121A]/80 border border-[#00C853]/30 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all"
              >
                <div className="flex items-center mb-6 space-x-4">
                  {section.icon}
                  <h2 className="text-2xl font-bold text-white">
                    {section.title}
                  </h2>
                </div>
                <p className="text-[#A1A1AA] text-lg leading-relaxed whitespace-pre-line">
                  {section.content}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Glow Effects */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-[#FF7A00]/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-[#00C853]/20 blur-[120px] rounded-full"></div>
      </div>
      <Footer />
    </div>
  );
};

export default Cookies;
