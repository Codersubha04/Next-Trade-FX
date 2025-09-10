import React from "react";
import Header from "../Components/Header";
import wttvip from "../assets/wttvip.png";
import crypto from "../assets/crypto.svg";
import Slider from "../Components/Slider";
import Accordion from "../Components/Accordion";
import Footer from "../Components/Footer";
import { motion } from "framer-motion";
import NextTradeIcon from "../assets/Next-trade-technologies-logo 1.png";
import { FaUserCog, FaDatabase, FaClipboardList, FaChartLine, FaCode, FaServer, FaWallet } from "react-icons/fa";
import { MdSystemUpdateAlt, MdWeb, MdOutlinePayment, MdSubscriptions } from "react-icons/md";
import { SiTradingview, SiPython, SiGooglecloud } from "react-icons/si";
import { RiCheckboxCircleLine } from "react-icons/ri";
import { FaCheckCircle, FaFileInvoiceDollar, FaRegClipboard } from "react-icons/fa";
import WhiteLebelImg from "../assets/NEXT TRADE WEB IMAGE White Lebel.png";


const WttVip = () => {

     const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6 },
    }),
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
  { text: "* We can Add your one desired broker (subject to API reliability)" },
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
              <span className="text-[#00C853] font-semibold">
                Next Trade FX
              </span>{" "}
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
                onClick={() => (window.location.href = "/brand-partner")}
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


<section className="relative bg-[#0B0B0F] text-white py-24 px-6 lg:px-20 overflow-hidden">
  {/* Heading */}
  <h2 className="text-[#e4e4e7] text-center text-[36px] lg:text-[52px] font-bold leading-tight mb-20 unv">
    How{" "}
    <span className="bg-gradient-to-r from-[#FF7A00] to-[#00C853] text-transparent bg-clip-text">
      White Label
    </span>{" "}
    Works?
  </h2>

  <div className="relative flex items-center justify-center gap-16 lg:gap-32">
    {/* Left - Brands */}
    <motion.div
      initial={{ x: -80, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col gap-6 z-10"
    >
      {["Brand A", "Brand B", "Brand C"].map((brand, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.05 }}
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 3, delay: i * 0.3 }}
          className="px-6 py-4 bg-[#141418] rounded-xl shadow-lg border border-[#2c2c30]"
        >
          <p className="text-lg font-medium">{brand}</p>
        </motion.div>
      ))}
    </motion.div>

    {/* Middle - Backend (Logo + Glow) */}
    <motion.div
      initial={{ scale: 0.7, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative flex flex-col items-center justify-center"
    >
      {/* Glow Circle */}
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="absolute -inset-16 rounded-full bg-gradient-to-r from-[#FF7A00] to-[#00C853] opacity-30 blur-3xl"
      />

      {/* Logo */}
      <div className="relative z-10 flex flex-col items-center">
        <img
          src={NextTradeIcon}  // 👈 yahan apna logo daalna
          alt="Logo"
          className="w-24 h-24 object-contain drop-shadow-lg"
        />
        <p className="mt-4 text-xl font-bold bg-gradient-to-r from-[#FF7A00] to-[#00C853] text-transparent bg-clip-text">
          Backend System
        </p>
      </div>
    </motion.div>

    {/* Right - Brokers */}
    <motion.div
      initial={{ x: 80, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col gap-6 z-10"
    >
      {["Broker A", "Broker B", "Broker C"].map((broker, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.05 }}
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 3, delay: i * 0.3 }}
          className="px-6 py-4 bg-[#141418] rounded-xl shadow-lg border border-[#2c2c30]"
        >
          <p className="text-lg font-medium">{broker}</p>
        </motion.div>
      ))}
    </motion.div>
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
                <b>Maintenance & Update:</b> Auto with Trading Machine (No Cost)
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
        Why Choose{" "}
        <span className="text-[#FF7A00]">White Label Server?</span>
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
                  transition={{ type: "spring", stiffness: 300, delay: idx * 0.15 }}
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
                <span className="text-white/80 leading-relaxed">{item.text}</span>
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

      {/* <div className="flex flex-col gap-6 py-20">
        <p className="text-[#1CCBB1] text-center mx:text-lg text-[17px] leading-6 font-medium int">
          Benefits
        </p>

        <p className="text-[50px] mx:text-[36px] mx:leading-[50px] font-semibold text-center unv leading-[61.5px] text-[#e4e4e7]">
          What you’ll benefit
        </p>

        <div className="flex flex-col gap-5">
          <div className="flex mx:px-0 mx:justify-center mx:items-center mx:gap-6 mx:flex-col px-36 justify-between">
            <div className="flex flex-col w-[345px] h-[217px] gap-3 justify-center items-center px-8 py-4 border border-[#212A33]">
              <div className="h-[33px] w-[33px] rounded-full bg-white flex items-center justify-center">
                <p className="text-base font-medium leading-[25.6px] text-[#1CCBB1] unv">
                  1
                </p>
              </div>
              <p className="text-white font-semibold text-[21px] leading-[25.83px] unv">
                Timely Alerts
              </p>
              <p className="text-base font-normal leading-7 text-center intt text-[#A1A1AA]">
                Instant notifications on major market <br /> movements and
                trading opportunities.
              </p>
            </div>

            <div className="flex flex-col w-[345px] h-[217px] gap-3 justify-center px-8 py-4 items-center border border-[#212A33]">
              <div className="h-[33px] w-[33px] rounded-full bg-white flex items-center justify-center">
                <p className="text-base font-medium leading-[25.6px] text-[#1CCBB1] unv">
                  2
                </p>
              </div>
              <p className="text-white font-semibold text-[21px] leading-[25.83px] unv">
                In-Depth Reports
              </p>
              <p className="text-base font-normal leading-7 text-center intt text-[#A1A1AA]">
                Comprehensive market reports covering <br /> trends, economic
                events, and technical <br /> analyses.
              </p>
            </div>

            <div className="flex flex-col w-[345px] h-[217px] gap-3 justify-center px-8 py-4 items-center border border-[#212A33]">
              <div className="h-[33px] w-[33px] rounded-full bg-white flex items-center justify-center">
                <p className="text-base font-medium leading-[25.6px] text-[#1CCBB1] unv">
                  3
                </p>
              </div>
              <p className="text-white font-semibold text-[21px] leading-[25.83px] unv">
                Live Trading Sessions
              </p>
              <p className="text-base font-normal leading-7 text-center intt text-[#A1A1AA]">
                Participate in sessions where experts <br /> analyze the market
                and provide real-time <br /> insights.
              </p>
            </div>
          </div>

          <div className="flex px-36 mx:px-0 mx:justify-center mx:items-center mx:gap-6 mx:flex-col justify-between">
            <div className="flex flex-col w-[345px] h-[217px] gap-3 justify-center items-center px-8 py-4 border border-[#212A33]">
              <div className="h-[33px] w-[33px] rounded-full bg-white flex items-center justify-center">
                <p className="text-base font-medium leading-[25.6px] text-[#1CCBB1] unv">
                  4
                </p>
              </div>
              <p className="text-white font-semibold text-[21px] leading-[25.83px] unv">
                Educational Growth
              </p>
              <p className="text-base font-normal leading-7 text-center intt text-[#A1A1AA]">
                Enhance your trading knowledge with <br /> exclusive educational
                materials and learn <br /> advanced strategies from experts.
              </p>
            </div>

            <div className="flex flex-col w-[345px] h-[217px] gap-3 justify-center px-8 py-4 items-center border border-[#212A33]">
              <div className="h-[33px] w-[33px] rounded-full bg-white flex items-center justify-center">
                <p className="text-base font-medium leading-[25.6px] text-[#1CCBB1] unv">
                  5
                </p>
              </div>
              <p className="text-white font-semibold text-[21px] leading-[25.83px] unv">
                VIP Community Access
              </p>
              <p className="text-base font-normal leading-7 text-center intt text-[#A1A1AA]">
                Connect with like-minded traders, share <br /> insights, and
                participate in exclusive <br /> discussions.
              </p>
            </div>

            <div className="flex flex-col gap-3 w-[345px] h-[217px] justify-center px-8 py-4 items-center border border-[#212A33]">
              <div className="h-[33px] w-[33px] rounded-full bg-white flex items-center justify-center">
                <p className="text-base font-medium leading-[25.6px] text-[#1CCBB1] unv">
                  6
                </p>
              </div>
              <p className="text-white font-semibold text-[21px] leading-[25.83px] unv">
                Personalized Support
              </p>
              <p className="text-base font-normal leading-7 text-center intt text-[#A1A1AA]">
                Direct assistance from our team <br /> of experts for any
                trading-related <br /> questions.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <button className="bg-[#1CCBB1] text-[#fff] intt text-base font-bold leading-8 py-1 px-6 rounded-md hover:bg-[#1f1e1e] transition-all duration-500 hover:text-[#ffffff]">
            Join community
          </button>
        </div>
      </div> */}
{/* 
      <div className="flex px-28 mx:gap-4 mx:px-0 mx:flex-col mx:justify-center mx:items-center justify-between bg-[#0D0F11] py-20 mx:py-10">
        <img src={crypto} alt="" className="mx:w-[90%]" />

        <div className="flex flex-col gap-4 my-auto">
          <p className="text-[#1CCBB1] mx:text-lg mx:text-center text-[17px] leading-6 font-medium int">
            Mentorship program
          </p>

          <p className="text-[50px] mx:text-[32px] mx:leading-[40px] font-semibold unv leading-[61.5px] text-[#e4e4e7] mx:text-center">
            Unlock Your Trading <br /> Potential with Gu
          </p>

          <p className="mx:leading-6 text-[#AAAAB3] mx:text-xs leading-7 text-base intt font-normal mx:text-center">
            At Crystal pips Hub, we believe that every trader’s journey is
            unique. <br /> Our Mentorship Program is designed to provide you
            with the personalized <br /> guidance, support, and expertise you
            need to achieve your trading goals. <br />
            At Crystal pips Hub, we believe that every trader’s journey is
            unique. <br /> Our Mentorship Program is designed to provide you
            with the personalized <br /> guidance, support, and expertise you
            need to achieve your trading goals.
          </p>
        </div>
      </div> */}

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

export default WttVip;
