import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const features = [
  {
    title: "Quick Integration",
    description:
      "Connect your trading account to our server and send a test trade in 15 minutes.",
    bgEffect: "bg-gradient-to-br from-[#1a1f2e] to-[#0f131d]",
    extra: (
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-orange-400/30 to-transparent animate-slide" />
    ),
  },
  {
    title: "Super Compatibility",
    description:
      "Seamless integration with all MT4 and MT5 brokers and leading proprietary firms.",
    bgEffect: "bg-gradient-to-br from-[#1a1f2e] to-[#0f131d]",
    extra: (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-40 h-40">
          <div className="absolute inset-0 rounded-full border border-orange-400/30 animate-pulse" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-6 bg-orange-400/30 rounded-lg" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-6 bg-orange-400/30 rounded-lg" />
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-6 h-6 bg-orange-400/30 rounded-lg" />
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-6 h-6 bg-orange-400/30 rounded-lg" />
        </div>
      </div>
    ),
  },
  {
    title: "Clear Instructions",
    description:
      "Navigate complex systems with ease using our easy-to-follow documentation.",
    bgEffect: "bg-gradient-to-br from-[#1a1f2e] to-[#0f131d]",
    extra: (
      <ul className="mt-4 space-y-2 text-gray-400 text-sm">
        <li className="flex items-center gap-2">
          <FaCheckCircle className="text-orange-400" /> Step-by-step guides
        </li>
        <li className="flex items-center gap-2">
          <FaCheckCircle className="text-orange-400" /> Example scripts
        </li>
      </ul>
    ),
  },
  {
    title: "Transparent Operations",
    description:
      "Full visibility and control over your trading with detailed logs and timestamps.",
    bgEffect: "bg-gradient-to-br from-[#1a1f2e] to-[#0f131d]",
    extra: (
      <div className="absolute bottom-4 right-4 text-xs text-gray-500">
        Logs updated live
      </div>
    ),
  },
];

const FeatureSectionDemo = () => {
  return (
    <section className="bg-[#0a0c14] py-20 px-6">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-white">
          Empower Your Trading Journey
        </h2>
        <p className="text-gray-400 mt-2 max-w-2xl mx-auto">
          Seamlessly connect TradingView and MT4/5 through our unified platform
          for fast, reliable trade execution.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className={`relative p-6 rounded-xl overflow-hidden ${features[0].bgEffect} shadow-lg shadow-orange-500/5`}
        >
          <h3 className="text-white font-semibold text-lg">{features[0].title}</h3>
          <p className="text-gray-400 mt-2">{features[0].description}</p>
          {features[0].extra}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={`relative p-6 rounded-xl overflow-hidden ${features[1].bgEffect} shadow-lg shadow-orange-500/5`}
        >
          <h3 className="text-white font-semibold text-lg">{features[1].title}</h3>
          <p className="text-gray-400 mt-2">{features[1].description}</p>
          {features[1].extra}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className={`relative p-6 rounded-xl overflow-hidden ${features[2].bgEffect} shadow-lg shadow-orange-500/5`}
        >
          <h3 className="text-white font-semibold text-lg">{features[2].title}</h3>
          <p className="text-gray-400 mt-2">{features[2].description}</p>
          {features[2].extra}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className={`relative p-6 rounded-xl overflow-hidden ${features[3].bgEffect} shadow-lg shadow-orange-500/5`}
        >
          <h3 className="text-white font-semibold text-lg">{features[3].title}</h3>
          <p className="text-gray-400 mt-2">{features[3].description}</p>
          {features[3].extra}
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureSectionDemo;
