import React from "react";
import { motion } from "framer-motion";

import Header from "../Components/Header";
import Accordion from "../Components/Accordion";
import Footer from "../Components/Footer";

import firstServiceimg from "../assets/1.01 (1).png";
import secondServiceimg from "../assets/WEB IMAGE 02.png";
import thirdServiceimg from "../assets/3.01 (1) (2).png";
import fourthServiceimg from "../assets/WEB IMAGE 04.png";
import ModernServicesSection from "../Components/ModernServicesSection";
import PremiumProducts from "../Components/PremiumProducts";

const products = [
  {
    id: 1,
    title: "EMA HIGH LOW BAND AFL",
    description:
      "Plots EMA(high) & EMA(low) bands for precision entries and exits. Works for Intraday & Positional trading.",
    image: firstServiceimg,
    price: "₹9,999",
    oldPrice: "₹14,999",
    discount: "30% OFF",
    offerLink: "#",
  },
  {
    id: 2,
    title: "RSI Divergence Scanner",
    description:
      "Spot bullish/bearish divergences early with customizable alerts across multiple timeframes.",
    image: secondServiceimg,
    price: "₹7,499",
    oldPrice: "₹10,999",
    discount: "30% OFF",
    offerLink: "#",
  },
  {
    id: 3,
    title: "SuperTrend Pro Indicator",
    description:
      "Multi-timeframe confluence, ATR trailing stops, and custom alert conditions for clean trends.",
    image: thirdServiceimg,
    price: "₹8,999",
    oldPrice: "₹12,499",
    discount: "30% OFF",
    offerLink: "#",
  },
  {
    id: 4,
    title: "Breakout Zone Detector",
    description:
      "Highlights high-probability breakout zones based on price action and volume spikes.",
    image: fourthServiceimg,
    price: "₹10,499",
    oldPrice: "₹14,999",
    discount: "30% OFF",
    offerLink: "#",
  },
  {
    id: 5,
    title: "Volume Profile Analyzer",
    description:
      "Advanced volume profile visualization with support/resistance zones for institutional-level insights.",
    image: firstServiceimg,
    price: "₹11,499",
    oldPrice: "₹15,999",
    discount: "30% OFF",
    offerLink: "#",
  },
  {
    id: 6,
    title: "Options Strategy Builder",
    description:
      "Design, backtest, and optimize multi-leg option strategies with real-time P&L and risk metrics.",
    image: secondServiceimg,
    price: "₹12,999",
    oldPrice: "₹18,499",
    discount: "30% OFF",
    offerLink: "#",
  },
];

const About = () => {
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

        {/* 🔹 About Us Text */}
        <div className="relative flex justify-center items-center text-center">
          <h1 className="text-white text-[72px] leading-[86px] mx:text-[32px] mx:leading-9 font-bold drop-shadow-[0_0_20px_rgba(0,0,0,0.8)]">
            Next Trade{" "}
            <span className="bg-gradient-to-r from-[#FF7A00] to-[#00C853] bg-clip-text text-transparent">
              Automation Tools
            </span>
          </h1>
        </div>
      </div>


<ModernServicesSection />

      <Accordion />

      <div className="flex flex-col items-center justify-center gap-6 pt-20 pb-16 bg-gradient-to-b from-[#0d0f11] to-[#101214] relative overflow-hidden">
        {/* Soft Glow Background */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#ff7a00]/10 via-transparent to-[#00c853]/10 pointer-events-none"></div>

        {/* Heading */}
        <h2 className="text-[#e4e4e7] mx:text-center mx:text-[36px] mx:leading-[49px] unv text-[50px] font-semibold leading-[61.5px] -mb-4 -mt-4 text-center">
          Get Started With <br className="hidden mx:block" />
          <span className="bg-gradient-to-r from-[#ff7a00] to-[#00c853] text-transparent bg-clip-text">
            Next Trade
          </span>{" "}
          FX Hub Today
        </h2>

        {/* Subheading */}
        <p className="text-base mx:text-sm font-normal int text-[#a1a1aa] text-center max-w-2xl z-10">
          We are self-service data analytics software that lets you create
          visually appealing data visualisations and insightful dashboards in
          minutes.
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

export default About;
