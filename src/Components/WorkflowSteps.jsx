import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import TradingViewIcon from "../assets/tradingview.svg";
import NextTradeIcon from "../assets/Next-trade-technologies-logo 1.png";
import MetaTraderIcon from "../assets/mt4_logo.svg";
import DeltaExchangeIcon from "../assets/DI_(1)-c0662071-33e9-4e7f-ae83-1e78a98e3423.png";

import CountUp from "react-countup";
import TrustedBy from "../Components/TrustedBy";
import { AnimatePresence } from "framer-motion";
import ComparisonSection from "./ComparisonSection";
import FeatureSection from "./FeaturesSection";

const WorkflowSteps = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "TradingView",
      subtitle: "Automated Trading",
      description: [
        "Create entry and exit rules with TradingView strategies.",
        "Strategy Alerts via Webhook (PineConnector).",
        "Manual Trading supported via PineConnector Echo.",
      ],
      icon: TradingViewIcon,
      color: "from-[#1F51FF] to-[#00C6FF]",
    },
    {
      title: "Next Trade FX",
      subtitle: "AI-Powered Execution",
      description: [
        "Ultra-low latency trade execution.",
        "Multi-Instance Signals for multiple MT accounts.",
        "Secure Routing with Signal Authentication.",
        "Symbol Mapping for broker compatibility.",
      ],
      icon: NextTradeIcon,
      color: "from-[#FF7A00] to-[#FFC107]",
    },
    {
      title: "MetaTrader 4/5",
      subtitle: "Signal Replication",
      description: [
        "Replicate signals to up to 10 MT4/5 accounts simultaneously.",
        "Supports demo/live brokers and prop firms.",
        "Scale effortlessly with automation.",
      ],
      icons: [DeltaExchangeIcon, MetaTraderIcon], // 👈 do logos de array me
      color: "from-[#00C853] to-[#00E676]",
      ticker: true,
    },
  ];

  const MetaTraderTicker = () => {
    const accounts = [
      "MT5 – FTMO Challenge (PC)",
      "MT4 – Pepperstone Live (VPS)",
      "MT5 – IC Markets Live (Laptop)",
      "MT4 – Exness Demo (Server)",
      "MT5 – Prop Firm Challenge (Cloud)",
      "MT4 – XM Live (Cloud)",
      "MT5 – Darwinex Demo (PC)",
    ];

    const [list, setList] = useState(accounts);
    const [animating, setAnimating] = useState(false);

    useEffect(() => {
      const interval = setInterval(() => {
        setAnimating(true);
        setTimeout(() => {
          // shift 1 item upar
          setList((prev) => [...prev.slice(1), prev[0]]);
          setAnimating(false);
        }, 500); // animation time ka wait
      }, 2000);

      return () => clearInterval(interval);
    }, []);

    return (
      <div className="h-[180px] overflow-hidden mt-4 relative">
        <motion.div
          animate={animating ? { y: -60 } : { y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="flex flex-col gap-3"
        >
          {list.slice(0, 4).map((btn, idx) => (
            <button
              key={btn + idx}
              className="px-6 py-3 rounded-xl border border-white/20 
                     bg-white/10 backdrop-blur-md 
                     text-white text-sm font-medium
                     hover:bg-white/20 hover:border-white/40 
                     transition-all w-full"
            >
              {btn}
            </button>
          ))}
        </motion.div>
      </div>
    );
  };

  // Auto slide without stopping on hover
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <div className="pt-20 px-6 bg-[#0D0F11]">
      {/* Cards */}
      <div className="flex justify-center flex-wrap gap-10">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: activeStep === index ? 1 : 0.5,
              y: activeStep === index ? 0 : 50,
              scale: activeStep === index ? 1.06 : 0.95,
            }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.98 }}
            className={`w-80 min-h-[420px] p-6 rounded-3xl shadow-2xl text-left bg-gradient-to-br ${step.color} relative overflow-hidden border border-white/10`}
          >
            <div className="absolute inset-0 rounded-3xl opacity-0 hover:opacity-10 transition bg-white pointer-events-none mix-blend-overlay" />

            {step.icons ? (
              <div className="flex items-center gap-3 mb-4">
                {step.icons.map((icon, i) => (
                  <img
                    key={i}
                    src={icon}
                    alt={step.title + " logo " + i}
                    className={
                      i === 0
                        ? "w-[13rem] h-[6rem] drop-shadow-lg"
                        : "w-10 h-10 drop-shadow-lg"
                    }
                  />
                ))}
              </div>
            ) : (
              <img
                src={step.icon}
                alt={step.title}
                className="w-14 h-14 mb-4 drop-shadow-lg"
              />
            )}

            <h3 className="text-white text-2xl font-bold mb-1">{step.title}</h3>
            <h4 className="text-white/80 text-sm mb-3">{step.subtitle}</h4>
            {step.title === "MetaTrader 4/5" ? (
              <MetaTraderTicker />
            ) : (
              <ul className="list-disc list-inside text-white/80 text-sm space-y-1">
                {step.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            )}
          </motion.div>
        ))}
      </div>

      {/* Premium Progress Bar */}
      <div className="flex justify-center mt-12">
        <div className="flex items-center gap-3">
          {steps.map((_, i) => (
            <div
              key={i}
              className={`h-2 w-10 rounded-full transition-all duration-500 ${
                i === activeStep ? "bg-[#FF7A00] w-14" : "bg-white/30"
              }`}
            ></div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <button
          className="bg-gradient-to-r from-[#FF7A00] to-[#ff9900] text-white px-10 py-3 rounded-full 
             font-medium text-lg shadow-lg hover:shadow-[0_0_20px_#FF7A00] hover:scale-105 
             transition-all"
        >
          Start Your Automation Journey
        </button>
      </div>

      {/* 👇 Auto-Scrolling Logo Section 👇 */}
      <div className="overflow-hidden w-full mt-20">
        <motion.div
          className="flex gap-16 w-max px-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        >
          {[...logos, ...logos].map((logo, idx) => (
            <img
              key={idx}
              src={`/logos/${logo}`}
              alt={logo.replace(".png", "")}
              className="h-10 w-auto opacity-80 hover:opacity-100 transition duration-300"
            />
          ))}
        </motion.div>
      </div>

      <section className="bg-[#0D0F11] py-24 px-6 text-center relative overflow-hidden">
        {/* Section Heading */}
        <h2 className="text-[#e4e4e7] text-center mx:text-center mx:text-[36px] mx:leading-[49px] unv text-[50px] font-semibold leading-[61.5px] mb-16">
          Reality of <span className="text-[#FF7A00]">Next Trade FX</span>
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto relative z-10">
          {[
            {
              value: 56374,
              label: "Total Current Users",
              sub: "Not Fake Data",
              icon: "👤",
            },
            {
              value: 244788,
              label: "24 Hours API Request",
              sub: "All Brokers or Exchange Request",
              icon: "⚡",
            },
            {
              value: 31589,
              label: "Total of User API",
              sub: "In Our Platform",
              icon: "🔌",
            },
            {
              value: 24100,
              label: "Total Youtube Subscriber",
              sub: "Subscribe Now",
              icon: "📺",
            },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="flex flex-col items-center p-8 rounded-2xl 
                   bg-[#1A1A1A] border border-[#FF7A00]/20
                   shadow-[0_0_15px_#FF7A00]/10
                   transform hover:scale-105 hover:shadow-[0_0_25px_#FF7A00]/40
                   transition-all duration-500 group"
            >
              <div className="mb-4 text-4xl group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <motion.h3
                className="text-4xl font-extrabold text-white tracking-wide"
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 150 }}
              >
                <CountUp end={stat.value} duration={2.5} separator="," />
              </motion.h3>
              <p className="text-white/90 font-semibold mt-2 text-lg">
                {stat.label}
              </p>
              <p className="text-white/60 text-sm italic">{stat.sub}</p>
            </motion.div>
          ))}
        </div>

        {/* Optional Background Glow Circles */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#FF7A00]/10 rounded-full filter blur-3xl opacity-30 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#FF7A00]/10 rounded-full filter blur-2xl opacity-20 pointer-events-none"></div>
      </section>
      <ComparisonSection />
      <FeatureSection />
      <TrustedBy />
    </div>
  );
};

// 👇 Logo list (replace or add more as needed)
const logos = [
  "logo1.webp",
  "logo2_cb8cc95c-31bd-455d-80b5-41b713f0895a (1).avif",
  "logo3.png",
  "logo4.png",
  "logo6.png",
  "logo7.png",
  "image_2024_04_04T08_41_42_698Z.avif",
  "file_000000007c54622f9d318dbd8ccb613f__1_-removebg-preview.png",
  "image_2024_04_04T08_42_21_795Z_1.png",
  "image_2024_04_04T08_42_43_703Z.png",
  "image_2024_04_04T08_43_50_150Z.png",
  "image_2024_04_04T08_44_06_323Z_1.png",
  "logo1.webp",
  "logo2_cb8cc95c-31bd-455d-80b5-41b713f0895a (1).avif",
  "logo3.png",
  "logo4.png",
  "logo6.png",
  "logo7.png",
  "image_2024_04_04T08_41_42_698Z.avif",
  "file_000000007c54622f9d318dbd8ccb613f__1_-removebg-preview.png",
  "image_2024_04_04T08_42_21_795Z_1.png",
  "image_2024_04_04T08_42_43_703Z.png",
  "image_2024_04_04T08_43_50_150Z.png",
  "image_2024_04_04T08_44_06_323Z_1.png",
];

export default WorkflowSteps;
