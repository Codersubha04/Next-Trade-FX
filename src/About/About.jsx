import React from "react";
import { motion } from "framer-motion";
import { Users, Smile, TrendingUp, Award } from "lucide-react";
import { ShieldCheck, LineChart, Settings } from "lucide-react"; // Premium modern icons
import { Lightbulb, Handshake, ClipboardCheck, Rocket } from "lucide-react";

import Header from "../Components/Header";
import AutomationAi from "../assets/Automation.webp";
import ceo from "../assets/DSC_4101T.jpg";
import Accordion from "../Components/Accordion";
import Footer from "../Components/Footer";
import fb from "../assets/fb.png";
import x3 from "../assets/x3.png";
import inst from "../assets/inst.png";
import Hero from "../Components/Hero";

const values = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-white" />,
    title: "Integrity",
    desc: "We uphold transparency, honesty, and trust in every action we take.",
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-white" />,
    title: "Innovation",
    desc: "We constantly push boundaries with forward-thinking strategies and tools.",
  },
  {
    icon: <Users className="w-8 h-8 text-white" />,
    title: "Customer-Centricity",
    desc: "Every solution we build is designed to empower and serve our clients.",
  },
  {
    icon: <Handshake className="w-8 h-8 text-white" />,
    title: "Collaboration",
    desc: "We grow stronger together by building meaningful partnerships.",
  },
  {
    icon: <ClipboardCheck className="w-8 h-8 text-white" />,
    title: "Accountability",
    desc: "We take full ownership of our work, decisions, and results.",
  },
  {
    icon: <Rocket className="w-8 h-8 text-white" />,
    title: "Empowerment",
    desc: "We inspire traders with the confidence and tools to scale new heights.",
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
            About{" "}
            <span className="bg-gradient-to-r from-[#FF7A00] to-[#00C853] bg-clip-text text-transparent">
              Us
            </span>
          </h1>
        </div>
      </div>

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
  Get to know <span className="text-[#FF7A00]">Us!</span>
</h2>

<p className="text-[#A1A1AA] max-w-5xl mx-auto mt-6 text-lg leading-8">
  <span className="font-semibold text-white">NEXTTRADE TECHNOLOGIES PVT LTD </span> 
  is India's largest API Bridge (automated) Platform, offering a seamless integration 
  of various APIs through a unique Webhook system. As a web application built on the 
  reliable AWS infrastructure, it eliminates the need for any Cloud, VPS, or RTP servers, 
  making it a hassle-free and user-friendly experience.
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
              Next Trade
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

      {/* <div className="bg-[#0D0F11] flex flex-col gap-8 py-10">
        <div className="flex flex-col gap-[17px] mx:px-0 px-16">
          <div className="mx-1">
            <p className="text-[#e4e4e7] mx:text-left mx:text-[26px] mx:leading-[40px] text-[50px] leading-[61.5px] font-semibold unv">
              About us
            </p>
            <p className="text-[18px] mx:text-sm font-normal mx:text-left leading-[33px] text-[#f1f1f1] intt">
              Crystal Pips Hub, officially recognized by the Corporate Affairs
              Commission with registration number RC 7825446 has a mission to
              transform trading education,making it accessible and effective for
              all while delivering exceptional learning experiences. "The
              heartbeat of Crystal Pips Hub is a profound belief: that informed
              trading decisions and sustained success stem from a robust
              educational framework and dedicated mentorship. We're driven not
              by the pursuit of accolades, but by a passion to ignite
              transformative growth in aspiring traders, propelling them toward
              extraordinary financial fluency."
            </p>
          </div>

          <div className="mx-1">
            <p className="text-[#e4e4e7] mt-[26px] mx:text-left mx:text-[22px] mx:leading-[40px] text-[50px] leading-[61.5px] font-semibold unv">
              Our commitment to excellence:
            </p>
            <p className="text-[18px] mx:text-sm font-normal mx:text-left leading-[33px] text-[#f1f1f1] intt">
              Our relentless pursuit of excellence drives us to innovate, adapt,
              and evolve with the dynamic trading landscape. We're not just
              meeting the highest standards - we're setting them. Join us in our
              mission to revolutionize financial education and unlock
              unprecedented trading potential."
            </p>
          </div>

          <div className="mx-1">
            <p className="text-[#e4e4e7] mt-[26px] mx:text-left mx:text-[22px] mx:leading-[40px] text-[50px] leading-[61.5px] font-semibold unv">
              Navigating the Financial Markets:
            </p>
            <p className="text-[18px] mx:text-sm font-normal mx:text-left leading-[33px] text-[#f1f1f1] intt">
              In the vast and intricate ocean of finance, we serveas your expert
              guide, providing the essential tools, knowledge, and expertise to
              empower confident navigation. Our dedication goes beyond
              education, cultivating a supportive community where individuals
              can flourish, share knowledge, and achieve success together.
            </p>
          </div>

          <div className="mx-1">
            <p className="text-[#e4e4e7] mt-[26px] mx:text-left mx:text-[22px] mx:leading-[40px] text-[50px] leading-[61.5px] font-semibold unv">
              Transformative Learning at Crystal Pips Hub:
            </p>
            <p className="text-[18px] mx:text-sm font-normal mx:text-left leading-[33px] text-[#f1f1f1] intt">
              Where Trading Meets Personal Growth Our holistic approach extends
              beyond technical expertise, fostering a comprehensive learning
              experience that cultivates well-rounded, resilient traders. We
              nurture a deep understanding of market complexities, while
              developing the mental agility and emotional intelligence crucial
              for sustained success.
            </p>

            <p className="text-[18px] mt-10 mx:text-sm font-normal mx:text-left leading-[33px] text-[#f1f1f1] intt">
              Crystal Pips Hub is more than an educational institution - it's a
              vibrant community where like-minded individuals share knowledge,
              insights, and strategies. Our collaborative environment sparks
              growth, camaraderie, and collective evolution. Join us on a
              transformative journey that redefines your understanding of
              trading and empowers you with the skills, mindset, and support
              network necessary for enduring success.
            </p>
          </div>
        </div>
      </div> */}

      {/* <div className="py-10">
        <p className="text-[50px] mx:text-[40px] mx:leading-[50px] font-semibold leading-[61.5px] text-center pb-12 unv text-[#e4e4e7]">
          Meet your CEO
        </p>

        <div className="flex px-[10.5rem] relative mx:gap-6 mx:px-0 mx:flex-col mx:justify-center mx:items-center justify-between">
          <img src={ceo} alt="" className="mx:w-[90%] w-[33%]" />
          <div className="flex flex-col gap-2 absolute mx:top-[26rem] mx:left-7 top-[26rem] left-44">
            <p className="font-semibold text-white text-[24px] leading-[31.2px] unv">
              Okafor Chidinma Precious
            </p>
            <p className="intt font-medium text-sm leading-[16.94px] text-white">
              CEO & FOUNDER
            </p>

            <div className="flex gap-6">
              <div>
                <img src={fb} alt="" />
              </div>
              <div className="my-auto">
                <img src={x3} alt="" />
              </div>
              <div>
                <img src={inst} alt="" />
              </div>
            </div>
          </div>
          <div className="h-[498px] mx:h-[550px] mx:px-10 mx:w-[370px] bg-gradient-to-b from-[#1CCBB1] flex justify-center items-center w-[672px]">
            <p className="text-white font-normal text-base leading-7 intt">
              Our vision is to foster widespread adoption and trust in
              blockchain <br /> technology and cryptocurrencies by championing
              innovation, accessibility, <br /> and security. We aim to empower
              individuals and businesses globally through <br /> user-friendly
              solutions that simplify complex financial processes and enable{" "}
              <br /> seamless participation in the digital economy. Our vision
              is to foster <br /> widespread adoption and trust in blockchain
              technology and <br /> cryptocurrencies by championing innovation,
              accessibility, and security. We <br /> aim to empower individuals
              and businesses globally through user-friendly <br /> solutions
              that simplify complex financial processes and enable seamless{" "}
              <br /> participation in the digital economy.
            </p>
          </div>
        </div>
      </div> */}

      <section className="relative py-24 bg-[#0D0F11] text-white overflow-hidden">
        {/* Glow Effects */}
        {/* <div className="absolute top-20 left-10 w-72 h-72 bg-[#FF7A00]/20 blur-[120px] rounded-full"></div> */}
        {/* <div className="absolute bottom-20 right-10 w-64 h-64 bg-[#FF7A00]/10 blur-[100px] rounded-full"></div> */}

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          {/* Subheading */}
          <span className="bg-gradient-to-r from-[#FF7A00] to-[#FFC107] px-5 py-1 rounded-full text-xs uppercase font-semibold text-white shadow-md backdrop-blur-sm">
            Our Core Values
          </span>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[#e4e4e7] text-center mx:text-center mx:text-[36px] mx:leading-[49px] unv text-[50px] font-semibold leading-[61.5px] mt-4"
          >
            We Make It Effortless To{" "}
            <span className="bg-gradient-to-r from-[#FF7A00] via-[#ff9900] to-[#FFD180] bg-clip-text text-transparent">
              Track Trading Performance
            </span>
          </motion.h2>

          {/* Values Grid */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {values.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                whileHover={{ scale: 1.06, rotateX: 4, rotateY: -4 }}
                className="relative p-8 rounded-2xl bg-gradient-to-br from-[#1A1A1A] to-[#0D0F11] 
            border border-[#FF7A00]/20 backdrop-blur-xl shadow-[0_0_20px_rgba(255,122,0,0.3)] 
            hover:shadow-[0_0_40px_rgba(255,122,0,0.7)] transition-all duration-500"
              >
                {/* Icon Glow Circle */}
                <div className="flex items-center justify-center mb-6">
                  <div className="p-4 rounded-full bg-gradient-to-br from-[#FF7A00] to-[#ff9900] shadow-lg">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-white/80 mt-3 text-base leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-[#0D0F11] py-20 relative overflow-hidden">
        {/* Background Gradient Glow */}
        <div className="absolute top-10 -left-10 w-72 h-72 bg-[#FF7A00]/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-10 -right-10 w-72 h-72 bg-[#00C853]/20 blur-[120px] rounded-full"></div>

        {/* Heading + Button */}
        <div className="flex mx:flex-col mx:items-center mx:text-center justify-between items-center px-10 md:px-24 pb-16 relative z-10">
          <div className="flex flex-col gap-3">
            <p className="text-[18px] text-[#00C853] font-medium tracking-wide">
              Our Mission
            </p>
            <h2 className="text-[#e4e4e7] mx:text-center mx:text-[36px] mx:leading-[49px] unv text-[50px] font-semibold leading-[61.5px]">
              Next Trade <span className="text-[#FF7A00]">Mission</span>
            </h2>

            <p className="text-[#A1A1AA] text-lg max-w-2xl mt-4">
              At <span className="font-semibold text-white">Next Trade FX</span>
              , our mission is to revolutionize trading by providing secure
              solutions, empowering traders with knowledge, and advancing
              financial freedom through innovative automation tools.
            </p>
          </div>

          {/* <div className="mt-8 mx:mt-6">
            <button
              onClick={() => (window.location.href = "/about1")}
              className="bg-gradient-to-r from-[#FF7A00] to-[#00C853] text-white 
        text-base font-medium leading-8 py-3 px-10 rounded-md 
        hover:scale-105 hover:shadow-[0_0_25px_#FF7A00] transition-all"
            >
              Learn More
            </button>
          </div> */}
        </div>

        {/* Mission Points with Animation */}
        <div className="flex mx:flex-col mx:gap-8 justify-between items-center px-10 md:px-24 relative z-10">
          <div className="flex flex-col gap-6 w-full md:w-1/2">
            {[
              {
                id: 1,
                title: "Secure Trading Solutions",
                desc: "We deliver safe and reliable trading infrastructure, ensuring your assets are always protected.",
              },
              {
                id: 2,
                title: "Empowering Traders",
                desc: "Knowledge-driven tools and education that help you trade smarter and scale faster.",
              },
              {
                id: 3,
                title: "Innovating Automation",
                desc: "Bringing cutting-edge algo trading solutions to simplify decision-making and execution.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex gap-4 items-start group p-6 rounded-2xl bg-gradient-to-br from-[#1a1a1a]/80 to-[#0d0d0d]/90 border border-[#ffffff1a] backdrop-blur-lg shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_25px_rgba(255,122,0,0.4)] transition-all duration-500"
              >
                <p
                  className="flex justify-center items-center w-10 h-10 rounded-full 
          bg-gradient-to-r from-[#FF7A00] to-[#00C853] text-white font-bold text-lg shadow-lg"
                >
                  {item.id}
                </p>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#A1A1AA] leading-7">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0">
            <img
              src={AutomationAi}
              alt="Next Trade FX Mission"
              className="w-[85%] rounded-2xl shadow-[0_0_25px_rgba(255,122,0,0.3)] hover:scale-105 transition-all duration-500"
            />
          </div>
        </div>
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

export default About;
