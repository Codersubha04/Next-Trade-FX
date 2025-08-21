// src/Components/TrustedBy.jsx
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { FaStar, FaUsers, FaSignal } from "react-icons/fa";
import { FaTimes, FaCheck } from "react-icons/fa";






const stats = [
  {
    icon: <FaUsers size={40} className="text-[#FF7A00]" />,
    label: "Traders",
    value: 50771,
    desc: "Users from 100+ countries trust Next Trade FX for their trading needs.",
  },
  {
    icon: <FaStar size={40} className="text-[#FFC107]" />,
    label: "Customer Rating",
    value: 9.45,
    desc: "Based on 700+ users, our platform is highly recommended by traders.",
  },
  {
    icon: <FaSignal size={40} className="text-[#00E676]" />,
    label: "Signals Processed",
    value: 138000000,
    suffix: "+",
    desc: "Robust technology powering millions of signals with accuracy & scale.",
  },
];

export default function TrustedBy() {
  return (




    
    <section className="bg-[#0D0F11] text-white pt-[5rem] pb-[1rem] px-6 relative overflow-hidden">
      {/* Section Header */}
      <div className="text-center mb-2 relative z-10">
        <motion.button
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-gradient-to-r from-[#FF7A00] to-[#FFC107] text-xs px-5 py-1.5 rounded-full uppercase tracking-wider font-semibold text-white shadow-md"
        >
          Why Next Trade FX
        </motion.button>

        <motion.h2
          className="text-[#e4e4e7] text-center mx:text-[36px] mx:leading-[49px] unv text-[50px] font-semibold leading-[61.5px] mt-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Trusted by <span className="text-[#FF7A00]">Global Traders</span>
        </motion.h2>

        <motion.p
          className="text-white/70 max-w-2xl mx-auto mt-5 text-base"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Next Trade FX has earned trust by delivering transparent, high-performance trading automation to users worldwide.
        </motion.p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto relative z-10">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center bg-gradient-to-br from-[#1A1A1A] to-[#2D2D2D] p-8 rounded-3xl shadow-xl transform hover:scale-[1.06] hover:shadow-[#FF7A00]/40 transition-all duration-500 group border border-white/10"
          >
            <div className="mb-5">{stat.icon}</div>
            <h3 className="text-3xl font-bold text-white flex items-center">
              <CountUp
                end={stat.value}
                duration={3}
                separator=","
                suffix={stat.suffix || ""}
                decimals={stat.value % 1 !== 0 ? 2 : 0}
              />
              <span className="ml-2 text-lg font-medium text-white/80">
                {stat.label}
              </span>
            </h3>
            <p className="text-white/60 mt-3 text-sm leading-relaxed">
              {stat.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
