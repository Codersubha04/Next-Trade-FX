import { motion } from "framer-motion";
import {
  FaChartLine,
  FaClipboardList,
  FaRandom,
  FaCut,
  FaBullseye,
  FaLayerGroup,
  FaSync,
  FaFilter,
} from "react-icons/fa";

const features = [
  {
    icon: <FaChartLine className="w-6 h-6 text-[#FF7A00]" />,
    title: "Market Orders",
    description:
      "Enter positions instantly with buy or sell execution at market price.",
  },
  {
    icon: <FaClipboardList className="w-6 h-6 text-[#FF7A00]" />,
    title: "Pending Orders",
    description:
      "Set buy stop, sell stop, buy limit, or sell limit orders with precision.",
  },
  {
    icon: <FaRandom className="w-6 h-6 text-[#FF7A00]" />,
    title: "Trailing",
    description:
      "Automatically trail stop-loss by pips or ATR for smart trade management.",
  },
  {
    icon: <FaCut className="w-6 h-6 text-[#FF7A00]" />,
    title: "Partial Close",
    description: "Close 25%, 34%, or 50% of your trade instantly when needed.",
  },
  {
    icon: <FaBullseye className="w-6 h-6 text-[#FF7A00]" />,
    title: "Target & Volume Control",
    description:
      "Set precise targets in pips, price, or percentage with custom volume sizing.",
  },
  {
    icon: <FaLayerGroup className="w-6 h-6 text-[#FF7A00]" />,
    title: "Pyramiding",
    description: "Control multiple positions stacking only when profitable.",
  },
  {
    icon: <FaSync className="w-6 h-6 text-[#FF7A00]" />,
    title: "Close on Reverse",
    description: "Auto-close positions when opposite signals are detected.",
  },
  {
    icon: <FaFilter className="w-6 h-6 text-[#FF7A00]" />,
    title: "Filters",
    description:
      "Trade only when spread and account conditions meet your rules.",
  },
];

// Animation Variants
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 15 },
  },
};

export default function PremiumFeatureSection() {
  return (
    <section className="relative py-24 px-6">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-[#e4e4e7] text-center mx:text-center mx:text-[36px] mx:leading-[49px] unv text-[50px] font-semibold leading-[61.5px]">
          Powerful <span className="text-[#FF7A00]">Trading Tools</span>
        </h2>

        <p className="text-white/60 mt-3 max-w-2xl mx-auto">
          Execute trades, manage risk, and automate strategies seamlessly — all
          without coding.
        </p>
      </div>

      {/* Grid with animations */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
      >
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            variants={cardVariant}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgba(255,122,0,0.25)",
            }}
            transition={{ type: "spring", stiffness: 200, damping: 12 }}
            className="group bg-transparent border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:border-[#FF7A00]/50 cursor-pointer"
          >
            <motion.div
              whileHover={{ rotate: 10 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="mb-4"
            >
              {feature.icon}
            </motion.div>
            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#FF7A00] transition-colors">
              {feature.title}
            </h3>
            <p className="text-white/60 text-sm leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
