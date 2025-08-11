import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import TradingViewIcon from "../assets/tradingview.svg";
import NextTradeIcon from "../assets/tradingview.svg";
import MetaTraderIcon from "../assets/tradingview.svg";
import CountUp from "react-countup";
import TrustedBy from "../Components/TrustedBy";


const WorkflowSteps = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

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
        "Replicate signals to up to 10 MT4/5 accounts.",
        "Supports demo/live brokers and prop firms.",
        "Scale effortlessly with automation.",
      ],
      icon: MetaTraderIcon,
      color: "from-[#00C853] to-[#00E676]",
    },
  ];

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % steps.length);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isHovered, steps.length]);

  return (
    <div className="py-20 px-6 bg-[#0D0F11]">
      {/* Cards: Centered in 1 line */}
      <div className="flex justify-center flex-wrap gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: activeStep === index ? 1 : 0.4,
              y: activeStep === index ? 0 : 50,
              scale: activeStep === index ? 1.05 : 0.95,
            }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.98 }}
            className={`w-80 min-h-[420px] p-6 rounded-2xl shadow-xl text-left bg-gradient-to-br ${step.color} relative overflow-hidden`}
          >
            <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-20 transition bg-white pointer-events-none mix-blend-overlay" />

            <img
              src={step.icon}
              alt={step.title}
              title={step.title}
              className="w-12 h-12 mb-4"
            />
            <h3 className="text-white text-2xl font-semibold mb-1">{step.title}</h3>
            <h4 className="text-white/80 text-sm mb-3">{step.subtitle}</h4>
            <ul className="list-disc list-inside text-white/80 text-sm space-y-1">
              {step.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Progress Dots */}
      <div className="flex justify-center mt-10 gap-2">
        {steps.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === activeStep ? "bg-[#FF7A00]" : "bg-white/30"
            }`}
          ></div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="text-center mt-12">
        <button className="bg-[#FF7A00] text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition font-medium">
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
      
      <section className="bg-[#0D0F11] py-20 px-6 text-center relative overflow-hidden">
  <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 relative z-10">
    Reality of <span className="text-[#FF7A00]">Next Trade FX</span>
  </h2>

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
        className="flex flex-col items-center bg-gradient-to-br from-[#1A1A1A] to-[#2D2D2D] p-8 rounded-2xl shadow-xl transform hover:scale-[1.06] hover:shadow-[#FF7A00]/40 transition-all duration-500 group border border-white/10"
      >
        <div className="mb-4 text-4xl group-hover:scale-110 transition">{stat.icon}</div>
        <motion.h3
          className="text-4xl font-extrabold text-white tracking-wide"
          initial={{ scale: 0.9 }}
          whileInView={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 150 }}
        >
          <CountUp end={stat.value} duration={2.5} separator="," />
        </motion.h3>
        <p className="text-white/90 font-semibold mt-2 text-lg">{stat.label}</p>
        <p className="text-white/60 text-sm italic">{stat.sub}</p>
      </motion.div>
    ))}
  </div>

  {/* 🔆 Background decorations */}
  {/* <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#FF7A00]/10 rounded-full filter blur-3xl opacity-50"></div>
  <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#FF7A00]/10 rounded-full filter blur-2xl opacity-40"></div> */}
</section>
  <TrustedBy />
    </div>
  );
};

// 👇 Logo list (replace or add more as needed)
const logos = [
  "logo1.webp",
  "logo2_cb8cc95c-31bd-455d-80b5-41b713f0895a (1).avif",
  "logo3.png",
  "image_2024_04_04T08_41_42_698Z.avif",
  "logo1.webp",
  "logo3.png",
  "logo2_cb8cc95c-31bd-455d-80b5-41b713f0895a (1).avif",
  "image_2024_04_04T08_41_42_698Z.avif",
];

export default WorkflowSteps;
