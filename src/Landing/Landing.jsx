import React from "react";
import Header from "../Components/Header";
import Bitcoin from "../assets/Bitcoin.svg";
import Etherium from "../assets/Etherium.svg";
import Chart from "../assets/chart.svg";
import tick from "../assets/tick.svg";
import toFro from "../assets/toFro.svg";
import arrow from "../assets/Stroke 1.svg";
import forex from "../assets/forex.svg";
import vip from "../assets/vip.svg";
import crypto from "../assets/crypto.svg";
import research from "../assets/research.svg";
import Youtube from "../assets/Youtube.svg";
// import { useState } from "react";
import Accordion from "../Components/Accordion";
import Slider from "../Components/Slider";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";
import ModernServicesSection from "../Components/ModernServicesSection";
import { motion } from "framer-motion";
import FeatureSection from "../Components/FeatureSection";

import WorkflowSteps from "../Components/WorkflowSteps";

const Landing = () => {
  const nav = useNavigate();

  return (
    <div className="bg-black">
      <Header />

      <div className="relative overflow-hidden bg-gradient-to-b from-[#0B0F19] to-[#000000] py-28">
        {/* Dotted Background */}
        <div
          className="absolute inset-0 opacity-20 bg-[radial-gradient(#FF7A00_1px,transparent_1px)] 
                  [background-size:30px_30px]"
        ></div>

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
            ></div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative flex flex-col gap-6 justify-center items-center text-center pt-[2rem]">
          {/* Badge */}
          <p
            className="text-white text-sm px-6 py-1 rounded-full font-medium 
                 border border-[#FF7A00] bg-black/30 backdrop-blur-sm shadow-[0_0_15px_#FF7A00]/30"
          >
            Introducing AI-Powered Trade Insights & Instant Order Execution →
          </p>

          {/* Heading */}
          <h1 className="text-white text-[72px] leading-[86px] mx:text-[32px] mx:leading-9 font-bold drop-shadow-[0_0_20px_rgba(0,0,0,0.8)]">
            Achieve Financial Excellence <br />
            with{" "}
            <span className="bg-gradient-to-r from-[#FF7A00] to-[#00C853] bg-clip-text text-transparent">
              Next Trade
            </span>{" "}
            FX
          </h1>
        </div>
        {/* New Description + Buttons + Stats */}
        <div className="relative text-center mt-[3rem] px-6">
          {/* Description */}
          <p className="text-white/70 max-w-2xl mx-auto text-lg mb-8">
            Featuring our trusted{" "}
            <span className="italic font-medium">
              TradingView to MetaTrader Bridge
            </span>
            , detailed{" "}
            <span className="italic font-medium">Account Analytics</span>,
            flexible
            <span className="italic font-medium"> No-Code Tasks</span>, and
            real-time
            <span className="italic font-medium">
              {" "}
              Email + Telegram Notifications
            </span>
            .
          </p>

          {/* Buttons */}
          <div className="flex justify-center gap-4 mb-12 mt-[3rem]">
            <button
              className="bg-gradient-to-r from-[#FF7A00] to-[#ff9900] text-white px-6 py-2 rounded-md 
                         font-medium shadow-lg hover:shadow-[0_0_20px_#FF7A00] hover:scale-105 transition-all"
            >
              Free 14-Day Advanced Trial
            </button>
            <button
              className="bg-gradient-to-r from-[#00C853] to-[#00e676] text-white px-6 py-2 rounded-md 
                         font-medium shadow-lg hover:shadow-[0_0_20px_#00C853] hover:scale-105 transition-all"
            >
              Watch Showcase
            </button>
          </div>

          {/* Rotating Coins */}
          <img
            src={Bitcoin}
            alt=""
            className="absolute left-10 bottom-10 w-28 animate-[spin_20s_linear_infinite]"
          />
          <img
            src={Etherium}
            alt=""
            className="absolute right-10 bottom-10 w-28 animate-[spin_25s_linear_infinite]"
          />

          {/* Trusted Stats */}
          <div className="flex flex-wrap justify-center gap-10 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-green-500 text-lg">✔</span>
              Trusted by 45,342 top traders worldwide
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500 text-lg">✔</span>
              &gt;138 million signals processed
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500 text-lg">✔</span>
              &lt;1 second typical latency
            </div>
          </div>
        </div>
      </div>

      {/* About Section for Next Trade FX */}
      <div className="flex mx:flex-col mx:gap-4 mx:px-0 mx:justify-center mx:items-center px-[7rem] justify-between bg-[#0D0F11] py-16 mx:py-10 gap-[5rem]">
        {/* Left Image */}
        <img src={Chart} alt="" className="w-[48%] mx:w-[80%] my-auto" />

        {/* Right Content */}
        <div className="flex flex-col mx:justify-center mx:items-center mx:gap-8 gap-5">
          {/* Small Heading */}
          <p className="text-lg font-medium int leading-6 text-[#FF7A00]">
            About Next Trade FX
          </p>

          {/* Main Heading */}
          <p className="text-[#e4e4e7] mx:text-center mx:text-[36px] mx:leading-[49px] unv text-[50px] font-semibold leading-[61.5px] -mb-4 -mt-4">
            Your Gateway to Smart Trading
          </p>

          {/* Description */}
          <p className="text-[#A1A1AA] mx:text-center int mx:text-[12px] mx:leading-5 text-[17px] font-normal leading-7 border-b-[1px] border-b-[#272626] pb-6">
            At{" "}
            <span className="text-[#FF7A00] font-semibold">Next Trade FX</span>,
            we empower traders with cutting-edge <br />
            AI-powered insights, lightning-fast trade execution, and <br />
            real-time analytics to maximize your market potential.
          </p>

          {/* Features with Ticks */}
          <div className="flex mx:gap-8 gap-10">
            <div className="flex flex-col gap-4 mx:gap-6">
              <div className="flex gap-2">
                <img src={tick} alt="" />
                <p className="text-lg unv font-semibold leading-5 text-white">
                  AI-Powered Analysis
                </p>
              </div>
              <div className="flex gap-2">
                <img src={tick} alt="" />
                <p className="text-lg unv font-semibold leading-5 text-white">
                  Lightning Execution
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4 mx:gap-6">
              <div className="flex gap-2">
                <img src={tick} alt="" />
                <p className="text-lg unv font-semibold leading-5 text-white">
                  Trusted Worldwide
                </p>
              </div>
              <div className="flex gap-2">
                <img src={tick} alt="" />
                <p className="text-lg unv font-semibold leading-5 text-white">
                  Innovative Solutions
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div>
            <button
              onClick={() => nav("/about")}
              className="bg-gradient-to-r from-[#FF7A00] to-[#00C853] int text-white text-base 
                   font-medium leading-8 py-2 px-10 rounded-md 
                   hover:scale-105 hover:shadow-[0_0_20px_#FF7A00] transition-all"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Workflow Section */}
      <div className="relative bg-[#0D0F11] py-20 overflow-hidden">
        <h2 className="text-center text-white text-[50px] mx:text-[32px] font-semibold mb-16">
          Trading Workflow <span className="text-[#FF7A00]">Automation</span>
        </h2>

        <WorkflowSteps />
      </div>

      <section className="relative z-10 bg-[#0D0F11] py-20 px-6 overflow-hidden">
        {/* Animated Title */}
        <div className="text-center mb-16">
          <h2 className="text-[45px] leading-[1.2] font-semibold text-[#E4E4E7] relative z-10 animate-fade-up">
            Services we can offer you
          </h2>
        </div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-24 pb-20 relative z-10">
          {[
            { title: "Mentorship", route: "/mentorship", icon: toFro },
            { title: "Free Forex training", route: "/freeforex", icon: forex },
            { title: "TWT VIP Signals", route: "/wttvip", icon: vip },
            { title: "TWT Trading bot", route: "/wttvip", icon: toFro },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="flex flex-col gap-4 px-6 py-8 rounded-2xl bg-gradient-to-br from-[#131313] to-[#1F1F1F] shadow-[0_4px_20px_rgba(255,122,0,0.1)] hover:shadow-[0_4px_30px_rgba(255,122,0,0.3)] hover:scale-[1.05] transition-all duration-500 cursor-pointer backdrop-blur-md border border-white/10"
              onClick={() => nav(item.route)}
            >
              <div className="w-12 h-12">
                <img
                  src={item.icon}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-[#E4E4E7] font-semibold text-xl leading-snug">
                {item.title}
              </p>
              <p className="text-[#A1A1AA] text-sm leading-6">
                Invest in crypto anytime, anywhere with our safe, secure, and
                easy to use online platform.
              </p>
              <div className="flex items-center gap-2 mt-2 group">
                <p className="text-base font-bold text-[#FFC107] group-hover:underline">
                  Learn more
                </p>
                <img
                  src={arrow}
                  alt=""
                  className="w-4 h-4 mt-[2px] group-hover:translate-x-1 transition-transform"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Glow Backgrounds */}
        {/* <div className="absolute -top-40 -left-20 w-[600px] h-[600px] bg-gradient-to-br from-[#FF7A00] to-[#FFC107] rounded-full blur-[180px] opacity-10 pointer-events-none z-0"></div>
  <div className="absolute -bottom-40 right-0 w-[400px] h-[400px] bg-[#00E676] rounded-full blur-[150px] opacity-10 pointer-events-none z-0"></div> */}
      </section>
      <section className="relative z-10 bg-[#0D0F11] py-20 px-6 overflow-hidden">
        <ModernServicesSection />
      </section>
      <div className="bg-[#0D0F11] py-20 mx:py-10 select-none">
        <div className="flex mx:flex-col mx:justify-center mx:items-center mx:px-0 px-24 pb-10 justify-between">
          <div className="flex flex-col gap-3 max-w-lg">
            <motion.p
              className="text-[17px] mx:text-center text-[#FF7A00] int font-medium leading-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Next Trade Trading Academy
            </motion.p>
            <motion.p
              className="text-[50px] mx:text-center unv mx:text-[32px] mx:leading-[40px] font-semibold leading-[61.5px] text-[#e4e4e7]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Develop your trading skills with us
            </motion.p>
          </div>
          <motion.div
            className="mt-12 mx:mt-4"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <button className="bg-gradient-to-r from-[#FF7A00] to-[#00C853] int text-white text-base font-medium leading-8 py-2 px-10 rounded-md hover:scale-105 hover:shadow-[0_0_20px_#FF7A00] transition-all">
              Learn More
            </button>
          </motion.div>
        </div>

        <div className="flex mx:flex-col mx:px-0 mx:justify-center mx:items-center px-24 justify-between mx:gap-8">
          <div className="flex flex-col gap-5 my-auto max-w-xl">
            {[
              {
                id: 1,
                title: "Beginner - Key Concepts Behind Trading",
                desc: "Start your trading journey with fundamental concepts and easy to understand lessons.",
              },
              {
                id: 2,
                title: "Intermediate - Identifying Opportunities",
                desc: "Learn to spot and harness market opportunities with practical strategies.",
              },
              {
                id: 3,
                title: "Advanced - Take Trading to Next Level",
                desc: "Master complex strategies and enhance your market edge.",
              },
              {
                id: 4,
                title: "Quiz - Find Your Trading Level",
                desc: "Test your knowledge and discover which trading level suits you best.",
              },
            ].map(({ id, title, desc }) => (
              <motion.div
                key={id}
                className="flex gap-4 mx:flex-col mx:justify-center mx:items-center"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: id * 0.15 }}
              >
                <p className="text-[17px] text-[#FF7A00] int font-bold leading-6 flex justify-center items-center rounded-full w-8 h-8 bg-white">
                  {id}
                </p>
                <div className="flex flex-col gap-2">
                  <p className="text-[21px] mx:text-center font-semibold unv leading-6 text-[#e4e4e7]">
                    {title}
                  </p>
                  <p className="text-[#A1A1AA] mx:text-center font-normal int text-base leading-7">
                    {desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.img
            src={crypto}
            alt="Trading Academy"
            className="mx:w-[90%] rounded-xl shadow-lg"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            loading="lazy"
          />
        </div>
      </div>

      <div className="relative bg-gradient-to-b from-[#0D0F11] to-black py-20 px-6 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#ff7a00]/10 via-transparent to-[#00c853]/10"></div>

        <div className="max-w-7xl mx-auto flex mx:flex-col gap-12 items-center relative z-10">
          {/* Left: Image */}
          <div className="flex-1 flex justify-center">
            <img
              src={research}
              alt="Analytics Research"
              className="w-full max-w-[500px] rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Right: Text */}
          <div className="flex-1 flex flex-col gap-6">
            <h2 className="text-4xl mx:text-3xl font-bold leading-tight text-white">
              We Make it{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff7a00] to-[#00c853]">
                Effortless
              </span>{" "}
              To <br /> Track All User Analytics
            </h2>

            <p className="text-[#A1A1AA] text-base leading-7">
              At <span className="font-semibold text-white">Next Trade FX</span>
              , we simplify analytics so you can focus on what matters most —
              growth. With our platform, tracking performance, monitoring
              trades, and analyzing market behavior becomes second nature.
              <br />
              <br />
              Designed for traders, investors, and analysts, our tools give you
              the power to make informed decisions faster than ever before.
            </p>

            <button className="self-start bg-gradient-to-r from-[#ff7a00] to-[#00c853] text-white font-medium px-6 py-3 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <Slider />

      <div className="flex flex-col gap-12 py-20 bg-[#0D0F11] relative overflow-hidden">
        {/* Animated gradient background streak */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF7A00]/10 via-transparent to-[#00C853]/10 animate-pulse"></div>

        {/* Heading & description */}
        <div className="flex flex-col gap-4 justify-center items-center z-10">
          <p className="text-[50px] mx:text-[40px] font-semibold unv text-[#FF7A00] leading-tight text-center drop-shadow-lg">
            Next Trade FX
          </p>
          <p className="text-lg font-normal int leading-7 text-[#A1A1AA] text-center max-w-3xl">
            Oasis Online is the best way for our online family to be a part of
            OIC from anywhere in the world!
            <br className="hidden md:block" />
            Experience deep impartations, teachings, and worship on your screen.
            Available online and on demand.
          </p>
        </div>

        {/* Video previews */}
        <div className="flex mx:flex-col px-20 mx:px-4 mx:justify-center mx:items-center mx:gap-6 justify-between gap-8 z-10">
          <img
            src={Youtube}
            alt="Video Preview"
            className="md:w-[48%] mx:w-[100%] rounded-xl shadow-lg hover:scale-105 hover:shadow-[0_0_25px_#FF7A00] transition-all duration-300"
          />
          <img
            src={Youtube}
            alt="Video Preview"
            className="md:w-[48%] mx:w-[100%] rounded-xl shadow-lg hover:scale-105 hover:shadow-[0_0_25px_#00C853] transition-all duration-300"
          />
        </div>

        {/* CTA Button */}
        <div className="flex justify-center items-center z-10">
          <button
            className="bg-gradient-to-r from-[#FF7A00] to-[#00C853] text-white text-base int font-bold leading-8 py-3 px-8 rounded-lg 
      shadow-md hover:scale-105 hover:shadow-[0_0_25px_#FF7A00] transition-all duration-300"
          >
            See More Videos
          </button>
        </div>
      </div>

      <Accordion />

      <div className="flex flex-col items-center justify-center gap-6 pt-20 pb-16 bg-gradient-to-b from-[#0d0f11] to-[#101214] relative overflow-hidden">
        {/* Soft Glow Background */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#ff7a00]/10 via-transparent to-[#00c853]/10 pointer-events-none"></div>

        {/* Heading */}
        <h2 className="text-[50px] mx:text-[32px] font-semibold unv text-center leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#ff7a00] to-[#00c853] z-10">
          Get Started With Next <br className="hidden mx:block" /> Teade FX
          Hub Today
        </h2>

        {/* Subheading */}
        <p className="text-base mx:text-sm font-normal int text-[#a1a1aa] text-center max-w-2xl z-10">
          We are self-service data analytics software that lets you create
          visually appealing data visualisations and insightful dashboards in
          minutes.
        </p>

        {/* Email Input & Button */}
        <div className="flex w-full max-w-lg items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full p-1 shadow-md hover:shadow-[0_0_20px_rgba(255,122,0,0.2)] transition-all duration-300 z-10">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 bg-transparent outline-none px-4 text-sm text-white placeholder-[#aaa]"
          />
          <button className="bg-gradient-to-r from-[#ff7a00] to-[#00c853] text-white text-sm font-semibold rounded-full px-6 py-2 hover:opacity-90 hover:scale-[1.02] transition-all duration-300">
            Let's Go
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Landing;
