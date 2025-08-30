import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineCheckCircle } from "react-icons/ai";
import Header from "../Components/Header";
import Slider from "../Components/Slider";
import Accordion from "../Components/Accordion";
import Footer from "../Components/Footer";
import { Users, Smile, TrendingUp, Award } from "lucide-react";

const plans = [
  {
    name: "Starter",
    subtitle:
      "For Traders who are looking to get started with trading automation.",
    price: "₹12,000",
    offerPrice: "₹9,000",
    features: [
      "XAUUSD",
      "Any MT4/MT5 Broker",
      "Unlimited Signals",
      "24/7 Fully Automated Trade",
      "24/7 Support",
    ],
    highlight: false,
  },
  {
    name: "Advanced",
    subtitle: "For intermediate traders who want serious automation.",
    price: "₹15,000",
    offerPrice: "₹12,000",
    features: [
      "XAUUSD + BTCUSD",
      "Any MT4/MT5 Broker",
      "Unlimited Signals",
      "24/7 Fully Automated Trade",
      "24/7 Support",
    ],
    highlight: true,
  },
  {
    name: "Professional",
    subtitle: "For advanced traders with ANY TWO MT4/MT5 trading accounts.",
    price: "₹18,000",
    offerPrice: "₹15,000",
    features: [
      "XAUUSD + BTCUSD + ANY CURRENCY PAIRS + US30",
      "Any MT4/MT5 Broker",
      "Unlimited Signals",
      "24/7 Fully Automated Trade",
      "24/7 Support",
    ],
    highlight: false,
  },
];

const PricingSection = () => {
  return (
    <div className="bg-black relative overflow-hidden">
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
            Pricing{" "}
            <span className="bg-gradient-to-r from-[#FF7A00] to-[#00C853] bg-clip-text text-transparent">
              Plan
            </span>
          </h1>
        </div>
      </div>

      {/* Pricing Cards */}
      <section className="bg-[#0D0F11] py-24 px-6 relative overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#FF7A00]/10 rounded-full blur-3xl animate-pulseSlow"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#00C853]/10 rounded-full blur-2xl animate-pulseSlow"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <AnimatePresence>
            {plans.map((plan) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }} // ✅ No delay
                whileHover={{
                  scale: 1.05,
                  boxShadow: plan.highlight
                    ? "0 0 40px rgba(255,122,0,0.7)"
                    : "0 0 20px rgba(0,200,83,0.5)",
                }}
                className={`relative p-8 rounded-3xl border transition-all duration-500 ${
                  plan.highlight
                    ? "bg-gradient-to-br from-[#FF7A00] to-[#ff9900] border-[#FF7A00] shadow-[0_0_35px_#FF7A00]/60"
                    : "bg-[#1A1A1A] border-white/10 hover:shadow-[0_0_25px_#FF7A00]/40"
                }`}
              >
                {/* ⭐ Centered Ribbon */}
                {plan.highlight && (
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-white text-[#FF7A00] text-xs font-bold px-4 py-1 rounded-full shadow-lg">
                    ⭐ Most Popular
                  </div>
                )}

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#FF7A00] to-[#00C853]">
                  {plan.name}
                </h3>
                <p className="text-sm text-white/70 mb-6">{plan.subtitle}</p>

                {/* Price */}
                <div className="mb-6">
                  <span className="line-through text-white/40 text-lg">
                    {plan.price}
                  </span>
                  <div className="text-4xl font-extrabold text-white mt-1">
                    {plan.offerPrice}
                    <span className="text-base text-white/60 ml-1">/month</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 text-white/80 text-sm text-left">
                  {plan.features.map((feature, j) => (
                    <motion.li
                      key={j}
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4 }} // ✅ Removed delay here too
                    >
                      <AiOutlineCheckCircle className="text-[#FF7A00] text-lg animate-pulseSlow" />
                      <span className="text-gray-200">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.button
                  whileHover={{
                    scale: 1.08,
                    boxShadow: "0 0 25px rgba(255,122,0,0.7)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 rounded-full font-semibold transition-all ${
                    plan.highlight
                      ? "bg-white text-[#FF7A00] hover:bg-[#f5f5f5]"
                      : "bg-gradient-to-r from-[#FF7A00] to-[#00C853] text-white hover:from-[#FF9F00] hover:to-[#00FF70]"
                  }`}
                >
                  GET ACCESS
                </motion.button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Footer Text */}
        <div className="text-center text-white/60 mt-12 max-w-2xl mx-auto">
          <p>
            All plans include seamless integration with MetaTrader terminals and
            24/7 trading automation.
          </p>
          <p className="mt-2 text-sm">➕ MT4/5 & Delta Exchange</p>
          <p className="mt-1 text-[#FF7A00] font-semibold">
            NextTradeFX - Automate Your Forex Trading
          </p>
        </div>
      </section>
      <section className="relative py-20 bg-[#0D0F11] text-white overflow-hidden">
        {/* Background Gradient Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF7A00]/10 via-transparent to-[#00C853]/10"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-[#e4e4e7] text-center mx:text-center mx:text-[36px] mx:leading-[49px] unv text-[50px] font-semibold leading-[61.5px]">
              Making Algo Trading{" "}
              <span className="text-[#FF7A00]">Effortless</span>
            </h2>

            <p className="text-[#A1A1AA] max-w-3xl mx-auto mt-6 text-lg leading-8">
              At <span className="font-semibold text-white">Next Trade FX</span>
              , we simplify algorithmic trading with powerful automation tools,
              intuitive dashboards, and reliable execution. Our mission is to
              empower traders and investors to scale faster, trade smarter, and
              maximize efficiency in every market condition.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {[
              {
                icon: <Users className="w-10 h-10 text-[#FF7A00]" />,
                title: "No. of Clients",
                value: "5000+",
              },
              {
                icon: <Smile className="w-10 h-10 text-[#00C853]" />,
                title: "Happy Customers",
                value: "6999+",
              },
              {
                icon: <TrendingUp className="w-10 h-10 text-[#FF7A00]" />,
                title: "Success Ratio",
                value: "95%",
              },
              {
                icon: <Award className="w-10 h-10 text-[#00C853]" />,
                title: "Years of Experience",
                value: "7+ Years",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                whileHover={{ scale: 1.05, rotateX: 2, rotateY: -2 }}
                className="p-8 rounded-2xl bg-gradient-to-br from-[#1a1a1a]/70 to-[#0d0d0d]/90 
          border border-[#ffffff1a] backdrop-blur-xl shadow-[0_0_20px_rgba(255,122,0,0.2)] 
          hover:shadow-[0_0_40px_rgba(255,122,0,0.5)] transition-all duration-500"
              >
                <div className="flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-white text-center">
                  {item.title}
                </h3>
                <p className="text-2xl font-bold text-center mt-2 bg-gradient-to-r from-[#FF7A00] to-[#00C853] bg-clip-text text-transparent">
                  {item.value}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Glow Effects */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#FF7A00]/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-[#00C853]/20 blur-[120px] rounded-full"></div>
      </section>

      {/* Second Section - Premium About Us */}
      <section className="relative py-24 bg-[#0D0F11] text-white overflow-hidden">
        {/* Background Gradient Glow (same as first) */}
        <div className="absolute inset-0 "></div>

        <div className="relative z-10 max-w-6xl mx-auto text-center flex flex-col gap-8 px-6">
          {/* Sub Heading */}

          {/* Main Heading */}
          <h2 className="text-[#e4e4e7] text-center mx:text-center mx:text-[36px] mx:leading-[49px] unv text-[50px] font-semibold leading-[61.5px]">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-[#FF7A00] to-[#00C853] bg-clip-text text-transparent">
              Next Trade FX
            </span>
          </h2>

          {/* Description */}
          <p className="text-[#A1A1AA] max-w-3xl mx-auto text-lg leading-8">
            We empower traders with intelligent tools, real-time insights, and
            seamless automation. Our mission is to make algo trading{" "}
            <span className="text-white font-semibold">simple, accessible</span>
            , and
            <span className="text-[#00C853] font-semibold">
              {" "}
              profitable
            </span>{" "}
            for everyone.
          </p>

          {/* Features */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div
              className="relative group bg-black/40 border border-transparent rounded-2xl p-10 shadow-lg 
        bg-clip-padding backdrop-blur-xl transition-all duration-500 
        hover:-translate-y-3 hover:shadow-[0_0_40px_rgba(255,122,0,0.4)]
        before:absolute before:inset-0 before:rounded-2xl before:p-[2px] 
        before:bg-gradient-to-r before:from-[#FF7A00] before:to-[#00C853] 
        before:opacity-0 before:group-hover:opacity-100 before:transition-opacity"
            >
              <div className="relative z-10 flex flex-col items-center gap-4">
                <div className="p-4 rounded-full bg-gradient-to-br from-[#FF7A00] to-[#FFB347] shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c.5-1 1.5-1.5 2.5-1.5 1.5 0 2.5 1.2 2.5 2.7 0 2-2.3 3.7-5 6.3-2.7-2.6-5-4.3-5-6.3 0-1.5 1-2.7 2.5-2.7 1 0 2 .5 2.5 1.5z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white">
                  Cutting-Edge Tech
                </h3>
                <p className="text-[#A1A1AA] text-center">
                  Harness AI-driven algorithms designed to optimize trading
                  performance with precision and speed.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="relative group bg-black/40 border border-transparent rounded-2xl p-10 shadow-lg 
        bg-clip-padding backdrop-blur-xl transition-all duration-500 
        hover:-translate-y-3 hover:shadow-[0_0_40px_rgba(0,200,83,0.4)]
        before:absolute before:inset-0 before:rounded-2xl before:p-[2px] 
        before:bg-gradient-to-r before:from-[#00C853] before:to-[#FF7A00] 
        before:opacity-0 before:group-hover:opacity-100 before:transition-opacity"
            >
              <div className="relative z-10 flex flex-col items-center gap-4">
                <div className="p-4 rounded-full bg-gradient-to-br from-[#00C853] to-[#66FFA6] shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 12H8m0 0l4-4m-4 4l4 4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white">
                  Personalized Support
                </h3>
                <p className="text-[#A1A1AA] text-center">
                  Get expert guidance and tailored solutions that simplify
                  complex strategies and maximize your success.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div
              className="relative group bg-black/40 border border-transparent rounded-2xl p-10 shadow-lg 
        bg-clip-padding backdrop-blur-xl transition-all duration-500 
        hover:-translate-y-3 hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]
        before:absolute before:inset-0 before:rounded-2xl before:p-[2px] 
        before:bg-gradient-to-r before:from-[#FF7A00] before:to-[#00C853] 
        before:opacity-0 before:group-hover:opacity-100 before:transition-opacity"
            >
              <div className="relative z-10 flex flex-col items-center gap-4">
                <div className="p-4 rounded-full bg-gradient-to-br from-[#3A3A3A] to-[#1F1F1F] shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2h5M12 12a4 4 0 100-8 4 4 0 000 8z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white">
                  Community-Driven
                </h3>
                <p className="text-[#A1A1AA] text-center">
                  Be part of an exclusive community of traders where signals,
                  insights & tools are shared for collective growth.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Glow Effects (same as first section) */}
        {/* <div className="absolute top-20 left-10 w-72 h-72 bg-[#FF7A00]/20 blur-[120px] rounded-full"></div> */}
        {/* <div className="absolute bottom-10 right-10 w-64 h-64 bg-[#00C853]/20 blur-[120px] rounded-full"></div> */}
      </section>

      <Slider />
      <Accordion />
      <Footer />
    </div>
  );
};

export default PricingSection;
