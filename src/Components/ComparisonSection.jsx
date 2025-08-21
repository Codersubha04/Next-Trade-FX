import { motion } from "framer-motion";
import { FaTimes, FaCheck } from "react-icons/fa";

const comparisonData = [
  {
    without: "Time-consuming manual trades.",
    with: "24/7 automated execution.",
  },
  {
    without: "Emotional, impulsive decisions.",
    with: "Disciplined, systematic trading.",
  },
  {
    without: "Complex coding.",
    with: "Easy no-code automation.",
  },
  {
    without: "Disconnected platforms, missed alerts.",
    with: "Synced signals & instant alerts.",
  },
  {
    without: "Unclear results, slow execution.",
    with: "Clear analytics & lightning-fast execution.",
  },
];

export default function ComparisonSection() {
  return (
    <section className="relative text-white py-10 px-6 overflow-hidden">
      {/* Header */}
      <div className="text-center mb-16 relative z-10">
        <span className="bg-gradient-to-r from-[#FF7A00] to-[#FFC107] px-5 py-1 rounded-full text-xs uppercase font-semibold text-white shadow-md backdrop-blur-sm">
          Unlock Your Flow
        </span>
        <h2 className="text-[#e4e4e7] text-center mx:text-center mx:text-[36px] mx:leading-[49px] unv text-[50px] font-semibold leading-[61.5px] mt-4">
          Trading Workflow <span className="text-[#FF7A00]">Automation</span>
        </h2>
        <p className="text-white/70 mt-3 max-w-2xl mx-auto">
          Stop letting manual processes and emotional hurdles disrupt your
          trading. Experience the smooth, automated workflow with Next Trade FX.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto relative z-10">
        {/* Without */}
        <div>
          <h3 className="text-gray-400 text-center mb-6 font-medium">
            Without Automation
          </h3>
          <div className="space-y-4">
            {comparisonData.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="flex items-center bg-transparent border border-white/10 hover:border-[#FF7A00]/50 hover:shadow-[0_0_25px_rgba(255,122,0,0.25)] p-4 rounded-xl gap-3 hover:scale-[1.02] transition-all"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, delay: idx * 0.15 }}
                >
                  <FaTimes className="text-gray-500 w-5 h-5 flex-shrink-0" />
                </motion.div>
                <span>{item.without}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* With */}
        <div>
          <h3 className="text-gray-400 text-center mb-6 font-medium">
            With Next Trade FX Automation
          </h3>
          <div className="space-y-4">
            {comparisonData.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="flex items-center bg-transparent border border-white/10 hover:border-[#00E676]/50 hover:shadow-[0_0_25px_rgba(0,230,118,0.25)] p-4 rounded-xl gap-3 hover:scale-[1.02] transition-all"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, delay: idx * 0.15 }}
                >
                  <FaCheck className="text-[#00E676] w-5 h-5 flex-shrink-0" />
                </motion.div>
                <span>{item.with}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}



