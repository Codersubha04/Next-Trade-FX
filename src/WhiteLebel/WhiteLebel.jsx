import React from "react";
import Header from "../Components/Header";
import wttvip from "../assets/wttvip.png";
import crypto from "../assets/crypto.svg";
import Slider from "../Components/Slider";
import Accordion from "../Components/Accordion";
import Footer from "../Components/Footer";
import { motion } from "framer-motion";
import NextTradeIcon from "../assets/Next-trade-technologies-logo 1.png";
import {
  FaUserCog,
  FaDatabase,
  FaClipboardList,
  FaChartLine,
  FaCode,
  FaServer,
  FaWallet,
} from "react-icons/fa";
import {
  MdSystemUpdateAlt,
  MdWeb,
  MdOutlinePayment,
  MdSubscriptions,
} from "react-icons/md";
import { SiTradingview, SiPython, SiGooglecloud } from "react-icons/si";
import { RiCheckboxCircleLine } from "react-icons/ri";
import {
  FaCheckCircle,
  FaFileInvoiceDollar,
  FaRegClipboard,
} from "react-icons/fa";
import WhiteLebelImg from "../assets/chart.webp";
import WhiteLabelGif from "../assets/WhiteLabelWorking.gif";
import whitelogin from "../assets/whitelogin.webp";
import whiteverify from "../assets/whiteverify.webp";
import whiteaccess from "../assets/whiteaccess.webp";

const WttVip = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6 },
    }),
  };
  const sectionReveal = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const leftReveal = {
  hidden: { opacity: 0, x: -120 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: "easeOut", delay: 0.2 },
  },
};

const rightReveal = {
  hidden: { opacity: 0, x: 120 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: "easeOut", delay: 0.2 },
  },
};


  const features = [
    "No Initial Development / Programming Cost",
    "No Database Licensing / Per Server",
    "No Monthly Maintenance for API Changes",
    "No Server Hosting on Cloud Required",
    "No New Feature Addition Cost",
    "No Routine Check-up / Maintenance",
    "No Bug Finding & Fixing Cost",
    "No Technical Knowledge Required",
  ];

  const charges = [
    { text: "Monthly : 15K FOR UPTO 50 USER." },
    { text: "ONE TIME SETUP COST - 60 K." },
    // Removed Yearly and 3 Years lines
    {
      text: "* We can Add your one desired broker (subject to API reliability)",
    },
  ];

  const terms = [
    "Understand all features on www.tradingmachine.in before opting for White Label.",
    "White Label Partner gets the same facilities as Trading Machine. Extra facilities are chargeable if feasible.",
    "Brand/White Label websites are sole property of Swastik Algotech. No code ownership claims allowed.",
    "We do not share White Label Partner’s details with anyone.",
    "Strictly no refund policy under any circumstances.",
  ];

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
            WHITE{" "}
            <span className="bg-gradient-to-r from-[#FF7A00] to-[#00C853] bg-clip-text text-transparent">
              LABEL
            </span>
          </h1>
        </div>
      </div>
      <section className="relative py-24 px-6 overflow-hidden bg-black text-white">
        {/* Background Gradient Glow Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF7A00]/10 via-transparent to-[#00C853]/10"></div>

        {/* Extra Glow Effects */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#FF7A00]/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#00C853]/20 blur-[120px] rounded-full"></div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6 text-center lg:text-left"
          >
            <h2 className="text-white text-[42px] lg:text-[54px] unv font-bold leading-tight">
              Build Your <span className="text-[#FF7A00]">Own Identity</span>{" "}
              <br /> with <span className="text-[#00C853]">Next Trade FX</span>{" "}
              Brand Partner Program
            </h2>

            <p className="text-white/80 text-base lg:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Become a{" "}
              <span className="text-[#FF7A00] font-semibold">
                Brand Partner
              </span>{" "}
              with{" "}
              <span className="text-[#00C853] font-semibold">Next Trade</span>{" "}
              and deliver professional{" "}
              <span className="text-white font-medium">
                Algo Automation Services
              </span>{" "}
              under your own brand. Our{" "}
              <span className="text-white">white-label solutions</span> help you
              attract more clients, scale your business, and grow without
              worrying about technology.
            </p>

            {/* Common Features */}
            <ul className="text-white/80 text-base lg:text-lg leading-relaxed space-y-3 max-w-2xl mx-auto lg:mx-0">
              <li>✔ Branded Algo Automation Server – your name, your logo</li>
              <li>✔ Flexible Pricing Control – free or paid, your choice</li>
              <li>✔ Scalable Infrastructure – handle unlimited clients</li>
              <li>✔ Seamless Integration & Premium Support</li>
              <li>✔ Reliable Backend Powered by Next Trade FX</li>
            </ul>

            <div className="flex justify-center lg:justify-start pt-4">
              <motion.button
                onClick={() => (window.location.href = "/package")}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 25px #00C853",
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#FF7A00] to-[#00C853] text-white 
                         text-base font-medium leading-8 py-3 px-10 rounded-md 
                         transition-all duration-300"
              >
                Become a Partner
              </motion.button>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.img
            src={WhiteLebelImg}
            alt="Brand Partner Program"
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full max-w-lg drop-shadow-[0_0_25px_#00C853]/30 rounded-2xl"
          />
        </div>
      </section>

      <section className="bg-[#000000] text-white py-24 px-6 lg:px-20">
        {/* Heading */}
        <h2 className="text-[#e4e4e7] text-center text-[36px] lg:text-[52px] font-bold leading-tight mb-16">
          How{" "}
          <span className="bg-gradient-to-r from-[#FF7A00] to-[#00C853] text-transparent bg-clip-text">
            White Label
          </span>{" "}
          Works?
        </h2>

        {/* Center GIF Image */}
        <div className="flex items-center justify-center">
          <img
            src={WhiteLabelGif} // 👈 yahan apna GIF path daal
            alt="White Label Working"
            className="max-w-full w-[900px] object-contain"
          />
        </div>
      </section>

      <section className="bg-[#0D0F11] py-24 px-6 relative text-white">
        {/* Section Heading */}
        <motion.h2
          className="text-5xl font-semibold text-center mb-16 unv"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Powers & <span className="text-[#FF7A00]">Features</span>
        </motion.h2>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
          {/* Left Side - Admin Power */}
          <motion.div
            className="rounded-3xl p-8 shadow-2xl border border-white/10 bg-gradient-to-br from-[#1F51FF] to-[#00C6FF] relative overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <FaUserCog className="text-[#FFD700]" /> Admin Power
            </h3>

            <div className="space-y-4 text-white/85 text-sm">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                custom={1}
                className="flex items-center gap-2"
              >
                <FaDatabase className="text-[#FFD700]" />
                <span>
                  <b>Own Domain Name:</b> www.abcd.com/in
                </span>
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                custom={2}
              >
                <div className="flex items-center gap-2 font-bold">
                  <FaClipboardList className="text-[#FFD700]" /> Profile Control
                </div>
                <div className="ml-6 space-y-2 mt-2 text-white/60">
                  <div className="flex items-center gap-2">
                    <RiCheckboxCircleLine /> Registered Users
                  </div>
                  <div className="flex items-center gap-2">
                    <RiCheckboxCircleLine /> Activate/Extend Trial
                  </div>
                  <div className="flex items-center gap-2">
                    <RiCheckboxCircleLine /> Total Accounts per User
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                custom={3}
              >
                <div className="flex items-center gap-2 font-bold">
                  <FaUserCog className="text-[#FFD700]" /> Accounts Management
                </div>
                <div className="ml-6 space-y-2 mt-2 text-white/60">
                  <div className="flex items-center gap-2">
                    <RiCheckboxCircleLine /> Validity Extension
                  </div>
                  <div className="flex items-center gap-2">
                    <RiCheckboxCircleLine /> Account Deletion
                  </div>
                  <div className="flex items-center gap-2">
                    <RiCheckboxCircleLine /> Check Status (Login / Subscription)
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                custom={4}
              >
                <div className="flex items-center gap-2 font-bold">
                  <FaChartLine className="text-[#FFD700]" /> Order Book
                </div>
                <div className="ml-6 space-y-2 mt-2 text-white/60">
                  <div className="flex items-center gap-2">
                    <RiCheckboxCircleLine /> Order Placement
                  </div>
                  <div className="flex items-center gap-2">
                    <RiCheckboxCircleLine /> Modification
                  </div>
                  <div className="flex items-center gap-2">
                    <RiCheckboxCircleLine /> Cancel
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                custom={5}
                className="flex items-center gap-2"
              >
                <FaChartLine className="text-[#FFD700]" />{" "}
                <span>
                  <b>Positions:</b> View Open, Closed, All
                </span>
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                custom={6}
                className="flex items-center gap-2"
              >
                <FaServer className="text-[#FFD700]" /> <b>System Logs</b>
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                custom={7}
              >
                <div className="flex items-center gap-2 font-bold">
                  <FaCode className="text-[#FFD700]" /> Copy Trading
                </div>
                <div className="ml-6 space-y-2 mt-2 text-white/60">
                  <div className="flex items-center gap-2">
                    <RiCheckboxCircleLine /> Mapping
                  </div>
                  <div className="flex items-center gap-2">
                    <RiCheckboxCircleLine /> Logs
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                custom={8}
                className="flex items-center gap-2"
              >
                <MdSystemUpdateAlt className="text-[#FFD700]" />{" "}
                <span>
                  <b>Maintenance & Update:</b> Auto with Trading Machine (No
                  Cost)
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side */}
          <div className="flex flex-col gap-8">
            {/* Connect With */}
            <motion.div
              className="rounded-3xl p-6 shadow-2xl border border-white/10 bg-gradient-to-br from-[#FF7A00] to-[#FFC107]"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <MdWeb className="text-black" /> Connect With
              </h3>

              <div className="space-y-3 text-white/85 text-sm">
                <div className="flex items-center gap-2">
                  <SiTradingview className="text-white" /> TradingView
                </div>
                <div className="flex items-center gap-2">
                  <FaServer className="text-white" /> MT4 / MT5
                </div>
                <div className="flex items-center gap-2">
                  <SiPython className="text-white" /> Python
                </div>
                <div className="flex items-center gap-2">
                  <FaChartLine className="text-white" /> ChartInk
                </div>
                <div className="flex items-center gap-2">
                  <RiCheckboxCircleLine /> Any other automation platform –{" "}
                  <span className="underline">Contact Us</span>
                </div>
              </div>
            </motion.div>

            {/* Subscription & Requirements */}
            <motion.div
              className="rounded-3xl p-6 shadow-2xl border border-white/10 bg-gradient-to-br from-[#00C853] to-[#00E676]"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <MdSubscriptions className="text-white" /> Subscription &
                Requirements
              </h3>

              <div className="space-y-4 text-white/85 text-sm">
                <div>
                  <div className="flex items-center gap-2 font-bold">
                    <RiCheckboxCircleLine /> Can Provide Subscription to Client
                  </div>
                  <div className="ml-6 space-y-2 mt-2 text-white/60">
                    <div className="flex items-center gap-2">
                      <RiCheckboxCircleLine /> On Charge
                    </div>
                    <div className="flex items-center gap-2">
                      <RiCheckboxCircleLine /> Free of Cost
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 font-bold">
                    <RiCheckboxCircleLine /> No Charge For
                  </div>
                  <div className="ml-6 space-y-2 mt-2 text-white/60">
                    <div className="flex items-center gap-2">
                      <SiGooglecloud /> Google Cloud Hosting
                    </div>
                    <div className="flex items-center gap-2">
                      <RiCheckboxCircleLine /> Maintenance
                    </div>
                    <div className="flex items-center gap-2">
                      <RiCheckboxCircleLine /> Updates & Upgrades
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 font-bold">
                    <RiCheckboxCircleLine /> Skill Required
                  </div>
                  <div className="ml-6 space-y-2 mt-2 text-white/60">
                    <div className="flex items-center gap-2">
                      <RiCheckboxCircleLine /> Hosting – No
                    </div>
                    <div className="flex items-center gap-2">
                      <RiCheckboxCircleLine /> Coding – No
                    </div>
                    <div className="flex items-center gap-2">
                      <RiCheckboxCircleLine /> Maintenance – No
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 font-bold">
                    <MdOutlinePayment /> Payment Gateway – Yes
                  </div>
                  <div className="ml-6 space-y-2 mt-2 text-white/60">
                    <div className="flex items-center gap-2">
                      <RiCheckboxCircleLine /> (Receive Payment in own Account)
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 font-bold">
                  <RiCheckboxCircleLine /> AMC – Nil
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <motion.button
            className="bg-gradient-to-r from-[#FF7A00] to-[#ff9900] text-white px-10 py-3 rounded-full font-medium text-lg shadow-lg hover:shadow-[0_0_20px_#FF7A00] hover:scale-105 transition-all"
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px #FF7A00" }}
            whileTap={{ scale: 0.98 }}
          >
            Explore Full Powers
          </motion.button>
        </div>
      </section>

      <section className="bg-[#0D0F11] py-20 px-6 relative text-white overflow-hidden">
        {/* Heading */}
        <motion.h2
          className="text-5xl font-semibold text-center mb-12 unv"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Why Choose <span className="text-[#FF7A00]">White Label Server?</span>
        </motion.h2>

        {/* Card */}
        <motion.div
          className="max-w-5xl mx-auto bg-gradient-to-br from-[#FF7A00] to-[#FFB300] p-[2px] rounded-3xl shadow-[0_0_25px_rgba(255,122,0,0.6)]"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="bg-[#0D0F11] rounded-3xl py-12 px-8">
            <motion.h3
              className="text-3xl font-bold mb-10 text-center"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              White Label Server Benefits
            </motion.h3>

            {/* Feature Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="flex items-center border border-white/10 hover:border-[#FF7A00]/50 hover:shadow-[0_0_25px_rgba(255,122,0,0.25)] bg-transparent px-5 py-4 rounded-xl gap-3 hover:scale-[1.02] transition-all"
                >
                  {/* Icon Animation */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      delay: idx * 0.15,
                    }}
                  >
                    <RiCheckboxCircleLine className="text-[#FFB300] text-2xl flex-shrink-0" />
                  </motion.div>
                  <span className="text-white/80">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <section className="bg-[#0D0F11] py-20 px-6 relative text-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
          {/* Charges Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#16181B] to-[#0D0F11] border border-white/10 
                     rounded-2xl shadow-[0_0_25px_rgba(0,230,118,0.25)] 
                     hover:shadow-[0_0_35px_rgba(0,230,118,0.5)] p-8 transition-all"
          >
            <div className="flex items-center gap-3 mb-6">
              <FaFileInvoiceDollar className="text-[#00E676] text-3xl" />
              <h2 className="text-2xl font-extrabold bg-gradient-to-r from-[#00E676] to-[#00C853] bg-clip-text text-transparent">
                Charges
              </h2>
            </div>
            <div className="space-y-5">
              {charges.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-start gap-3 bg-white/5 hover:bg-white/10 p-4 rounded-xl 
                           border border-white/5 hover:border-[#00E676]/40 transition-all"
                >
                  <FaCheckCircle className="text-[#FFB300] mt-1 text-lg" />
                  <span className="text-white/80 leading-relaxed">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Terms & Conditions Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-[#16181B] to-[#0D0F11] border border-white/10 
                     rounded-2xl shadow-[0_0_25px_rgba(255,122,0,0.25)] 
                     hover:shadow-[0_0_35px_rgba(255,122,0,0.5)] p-8 transition-all"
          >
            <div className="flex items-center gap-3 mb-6">
              <FaRegClipboard className="text-[#FF7A00] text-3xl" />
              <h2 className="text-2xl font-extrabold bg-gradient-to-r from-[#FF7A00] to-[#FF9100] bg-clip-text text-transparent">
                Terms & Conditions
              </h2>
            </div>
            <div className="space-y-5">
              {terms.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-start gap-3 bg-white/5 hover:bg-white/10 p-4 rounded-xl 
                           border border-white/5 hover:border-[#FF7A00]/40 transition-all"
                >
                  <FaCheckCircle className="text-[#FFB300] mt-1 text-lg" />
                  <span className="text-white/80 leading-relaxed">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <motion.section
  variants={sectionReveal}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  className="bg-[#0B0B0F] text-white py-28 px-6 lg:px-20 relative overflow-hidden"
>

        {/* Glow Background */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#FF7A00]/20 blur-[140px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#00C853]/20 blur-[140px] rounded-full"></div>

        {/* Heading */}
        <h2 className="text-center text-[36px] lg:text-[56px] font-bold leading-tight mb-20">
          What Detail Will Change To Your{" "}
          <span className="text-[#FF7A00]">Website</span>
        </h2>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
          {/* Left Text */}
          <motion.div variants={leftReveal} className="flex flex-col gap-6">

            <h3 className="text-[#FF7A00] text-[32px] lg:text-[40px] font-semibold leading-snug">
              Secure Login to Your Trading Dashboard
            </h3>

            <p className="text-white/70 text-lg leading-relaxed max-w-xl">
              Access your account safely and start trading with Next Trade’s
              powerful cloud-based platform. Your clients will experience a
              fully branded, secure, and professional dashboard under your own
              identity.
            </p>

            <ul className="space-y-3 text-white/80">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#00C853] rounded-full"></span>
                Your Logo & Brand Name on Login Panel
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#00C853] rounded-full"></span>
                Custom Domain Based Access
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#00C853] rounded-full"></span>
                Secure User Authentication System
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#00C853] rounded-full"></span>
                Fully Branded Trading Experience
              </li>
            </ul>
          </motion.div>

          {/* Right Image */}
         <motion.div variants={rightReveal} className="flex justify-center">
            <img
              src={whitelogin} // 👈 yahan screenshot daal
              alt="Dashboard Preview"
              className="rounded-2xl shadow-[0_0_40px_rgba(0,200,83,0.25)] border border-white/10"
            />
          </motion.div>
        </div>
   </motion.section>

      <motion.section
  variants={sectionReveal}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  className="bg-[#0B0B0F] text-white py-28 px-6 lg:px-20 relative overflow-hidden"
>
        {/* Glow Background */}
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#00C853]/20 blur-[140px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#FF7A00]/20 blur-[140px] rounded-full"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
          {/* Left Image */}
         <motion.div variants={leftReveal} className="flex justify-center">
            <img
              src={whiteverify} // 👈 yahan screenshot daal
              alt="Verify Profile"
              className="rounded-2xl shadow-[0_0_40px_rgba(255,122,0,0.25)] border border-white/10"
            />
        </motion.div>

          {/* Right Text */}
         <motion.div variants={rightReveal} className="flex flex-col gap-6">
            <h3 className="text-[#FF7A00] text-[32px] lg:text-[40px] font-semibold leading-snug">
              Verify Your Trading Machine Profile
            </h3>

            <p className="text-white/70 text-lg leading-relaxed max-w-xl">
              Ensure your profile security with quick email verification and get
              seamless access to your trading account. This step builds trust
              and keeps your client accounts protected.
            </p>

            <ul className="space-y-3 text-white/80">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#00C853] rounded-full"></span>
                Email Based Profile Verification
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#00C853] rounded-full"></span>
                Secure Account Activation
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#00C853] rounded-full"></span>
                Protection From Unauthorized Access
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#00C853] rounded-full"></span>
                Professional Branded Email Template
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
  variants={sectionReveal}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  className="bg-[#0B0B0F] text-white py-28 px-6 lg:px-20 relative overflow-hidden"
>
        {/* Glow Background */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#FF7A00]/20 blur-[140px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#00C853]/20 blur-[140px] rounded-full"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
          {/* Left Text */}
          <motion.div variants={leftReveal} className="flex flex-col gap-6">
            <h3 className="text-[#FF7A00] text-[32px] lg:text-[40px] font-semibold leading-snug">
              Advanced Trading Dashboard
            </h3>

            <p className="text-white/70 text-lg leading-relaxed max-w-xl">
              Monitor live market indices, manage user accounts, and execute
              trades seamlessly with Next Trade’s intuitive and powerful
              dashboard interface built for professional automation.
            </p>

            <ul className="space-y-3 text-white/80">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#00C853] rounded-full"></span>
                Real-time Market & Order Monitoring
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#00C853] rounded-full"></span>
                Client & Account Management Panel
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#00C853] rounded-full"></span>
                Order Book, Positions & Logs
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#00C853] rounded-full"></span>
                Fully Branded Admin Control Interface
              </li>
            </ul>
         </motion.div>

          {/* Right Image */}
         <motion.div variants={rightReveal} className="flex justify-center">
            <img
              src={whiteaccess} // 👈 yahan screenshot daal
              alt="Advanced Trading Dashboard"
              className="rounded-2xl shadow-[0_0_40px_rgba(0,200,83,0.25)] border border-white/10"
            />
          </motion.div>
        </div>
  </motion.section>

      <Slider />

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
          Hub Today
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

export default WttVip;
