import React from "react";
import Header from "../Components/Header";
import images from "../assets/Images.png";
import forex from "../assets/forex.svg";
import imgReplace1 from "../assets/Intro.png";
import imgReplace2 from "../assets/Auto.png";
import imgReplace3 from "../assets/Auto2.png";
import Accordion from "../Components/Accordion";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FaChalkboardTeacher, FaGraduationCap, FaRocket } from "react-icons/fa";
import EducationImg from "../assets/NEXT TRADE WEB IMAGE (Education).png";

const cards = [
  {
    title: "Expert Mentors",
    desc: "Learn from industry experts with years of real-world experience.",
    icon: <FaChalkboardTeacher />,
  },
  {
    title: "Comprehensive Courses",
    desc: "Structured content from basics to advanced strategies.",
    icon: <FaGraduationCap />,
  },
  {
    title: "Fast Progress",
    desc: "Accelerate your learning with actionable insights & tips.",
    icon: <FaRocket />,
  },
];

// 🔹 Modern Premium Animation Variants
const cardAnim = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1], // smooth cubic bezier (premium)
      type: "spring",
      stiffness: 80,
      damping: 15,
    },
  },
  hover: {
    scale: 1.06,
    rotate: 0.5, // subtle 3D tilt
    y: -6,
    boxShadow: "0 0 40px rgba(255,122,0,0.35)",
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const FreeForex = () => {
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
            Next Trade{" "}
            <span className="bg-gradient-to-r from-[#FF7A00] to-[#00C853] bg-clip-text text-transparent">
              Automation Hub
            </span>
          </h1>
        </div>
      </div>

      <section className="relative flex mx:flex-col flex-row items-center justify-between bg-black text-white px-20 mx:px-6 py-20 gap-10 rounded-2xl shadow-xl overflow-hidden">
        {/* Background Gradient Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF7A00]/10 via-transparent to-[#00C853]/10"></div>

        {/* Glow Circles */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-[#FF7A00]/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-[#00C853]/20 blur-[120px] rounded-full"></div>

        {/* Left Content */}
        <motion.div
          className="flex flex-col gap-6 mx:text-center text-left my-auto relative z-10"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p
            className="text-[#FF7A00] mx:text-lg text-[18px] font-medium tracking-wide uppercase"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Mentorship Program
          </motion.p>

          <motion.h2
            className="text-[#e4e4e7] text-[50px] mx:text-[32px] mx:leading-[42px] font-semibold leading-[61px] unv"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Master the Art of <br />
            Trading Automation with <br />
            <span className="text-[#FF7A00]">Next Trade </span>
          </motion.h2>

          <motion.p
            className="text-[#AAAAB3] text-base leading-7 font-normal intt mx:text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            At{" "}
            <span className="text-[#FF7A00] font-semibold">
              Next Trade Autiomation Hub
            </span>
            , we offer specialized mentorship in automated & algorithmic
            trading. With practical strategies, live sessions, and expert
            guidance, we help you harness automation and trade the markets
            smarter, faster, and more profitably.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
          >
            <a href="/package" rel="noopener noreferrer">
            <button className="flex items-center gap-2 text-white font-bold text-base leading-8 unv bg-[#FF7A00] hover:bg-[#e96a00] px-6 py-3 rounded-xl shadow-lg transition-all duration-300 hover:scale-105">
              Join Community <ArrowRight size={18} />
            </button>
            </a>
          </motion.div>
        </motion.div>

        {/* Right Image with Animation */}
        <motion.div
          className="relative w-[500px] mx:w-full z-10"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.img
            src={EducationImg}
            alt="Next Trade FX Mentorship"
            className="rounded-2xl shadow-2xl border border-[#1f1f1f]"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 150 }}
          />

          {/* Glow effect */}
          <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-[#FF7A00]/30 to-transparent blur-2xl opacity-60 animate-pulse"></div>
        </motion.div>
      </section>
      <section className="flex flex-col gap-12 py-16 px-6 bg-gradient-to-b bg-[#0D0F11]">
        {/* Heading */}
        <motion.h2
          variants={cardAnim}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-[#e4e4e7] text-center unv text-[50px] leading-[61.5px] 
             mx:text-[36px] mx:leading-[49px]"
        >
          Why Choose Our <span className="text-[#FF7A00]">Free Training</span>
        </motion.h2>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              variants={cardAnim}
              initial="hidden"
              whileInView="show"
              whileHover="hover"
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col gap-4 p-6 rounded-2xl 
                       bg-gradient-to-br from-[#101214] to-[#0D0F11] 
                       border border-[#00C853]/20 hover:border-[#FF7A00]/50 
                       shadow-lg hover:shadow-[0_20px_40px_rgba(255,122,0,0.3)] 
                       transition-all duration-300"
            >
              <div className="flex justify-center text-4xl text-[#FF7A00]">
                {card.icon}
              </div>
              <h3 className="text-white font-semibold text-xl text-center">
                {card.title}
              </h3>
              <p className="text-[#A1A1AA] text-sm text-center leading-6">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-b bg-[#0D0F11] py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
          {/* Heading */}
          <motion.p
            variants={cardAnim}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="text-[50px] md:text-[42px] sm:text-[36px] leading-[1.2] text-center font-semibold text-white mb-14"
          >
            What You'll Master
          </motion.p>

          {/* Top Card */}
          <motion.div
            variants={cardAnim}
            initial="hidden"
            whileInView="show"
            whileHover="hover"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col md:flex-row gap-8 md:gap-14 rounded-2xl border border-[#292929] 
                     bg-gradient-to-br from-[#101214] to-[#0F1216] p-6 md:p-7 
                     transition-all duration-300"
            animate="show"
          >
            <img
              src={imgReplace1}
              alt=""
              className="w-[120px] h-[120px] md:w-[140px] md:h-[140px] rounded-xl object-cover shrink-0"
            />
            <div className="flex flex-col gap-6 my-auto">
              <p className="text-white font-semibold text-[21px] leading-[27px]">
                <span className="inline-block w-2.5 h-2.5 mr-2 rounded-full bg-[#FF7A00] shadow-[0_0_14px_#FF7A00]"></span>
                Introduction to Automation
              </p>
              <p className="text-[#A1A1AA] text-base leading-7">
                Understand the fundamentals of 24/7 trading automation and how Next Trade FX simplifies order execution.
              </p>
            </div>
          </motion.div>

          {/* Row of 2 */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <motion.div
              variants={cardAnim}
              initial="hidden"
              whileInView="show"
              whileHover="hover"
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col justify-between rounded-2xl border border-[#292929] 
                       bg-gradient-to-br from-[#101214] to-[#0F1216] p-6 
                       transition-all duration-300"
            >
              <div className="flex flex-col gap-4">
                <p className="text-white font-semibold text-[21px] leading-[27px]">
                  <span className="inline-block w-2.5 h-2.5 mr-2 rounded-full bg-[#FF7A00] shadow-[0_0_12px_#FF7A00]"></span>
                  Automation Essentials
                </p>
                <p className="text-[#A1A1AA] text-base leading-7">
                  Get familiar with key automation concepts, system triggers, APIs, and workflow setups.
                </p>
              </div>
              <img
                src={imgReplace2}
                alt=""
                className="w-[110px] h-[110px] rounded-lg object-cover mt-4"
              />
            </motion.div>

            {/* Card 2 */}
            <motion.div
              variants={cardAnim}
              initial="hidden"
              whileInView="show"
              whileHover="hover"
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col-reverse rounded-2xl border border-[#292929] 
                       bg-gradient-to-br from-[#101214] to-[#0F1216] p-6 
                       transition-all duration-300"
            >
              <div className="flex flex-col gap-4">
                <p className="text-white font-semibold text-[21px] leading-[27px]">
                  <span className="inline-block w-2.5 h-2.5 mr-2 rounded-full bg-[#FF7A00] shadow-[0_0_12px_#FF7A00]"></span>
                  Automation Ecosystem
                </p>
                <p className="text-[#A1A1AA] text-base leading-7">
                  Learn about integration points, brokers, signals, and how automated systems interact in real-time.
                </p>
              </div>
              <img
                src={imgReplace3}
                alt=""
                className="w-[110px] h-[110px] rounded-lg object-cover mb-4"
              />
            </motion.div>
          </div>

          {/* Row of 3 */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Monitoring & Analytics",
                desc: "Learn to track automated system performance, signal accuracy, and trade outcomes.",
                glow: "#00C853",
              },
              {
                title: "Integration Tools",
                desc: "Overview of platform connections, API workflows, and seamless automation setups.",
                glow: "#FF7A00",
              },
              {
                title: "Safe Automation Practices",
                desc: "Implement safeguards, error handling, and system alerts to protect capital and ensure reliable automation",
                glow: "#00C853",
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                variants={cardAnim}
                initial="hidden"
                whileInView="show"
                whileHover="hover"
                viewport={{ once: true, amount: 0.3 }}
                className="flex flex-col gap-4 rounded-2xl border border-[#292929] 
                         bg-gradient-to-br from-[#101214] to-[#0F1216] p-6 
                         transition-all duration-300"
              >
                <p className="text-white font-semibold text-[21px] leading-[27px]">
                  <span
                    className={`inline-block w-2.5 h-2.5 mr-2 rounded-full`}
                    style={{
                      backgroundColor: card.glow,
                      boxShadow: `0 0 12px ${card.glow}`,
                    }}
                  ></span>
                  {card.title}
                </p>
                <p className="text-[#A1A1AA] text-base leading-7">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
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

export default FreeForex;
