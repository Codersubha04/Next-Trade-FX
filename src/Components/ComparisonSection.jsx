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
    <section className="relative overflow-hidden px-6 py-10 text-white mx:px-4 mx:py-14">
      {/* Header */}
      <div className="relative z-10 mb-16 text-center mx:mb-10">
        <span className="bg-gradient-to-r from-[#FF7A00] to-[#FFC107] px-5 py-1 rounded-full text-xs uppercase font-semibold text-white shadow-md backdrop-blur-sm mx:px-4 mx:py-1.5 mx:text-[10px] mx:tracking-[0.16em]">
          Unlock Your Flow
        </span>
        <h2 className="mt-4 text-[50px] font-semibold leading-[61.5px] text-[#e4e4e7] text-center unv mx:text-[31px] mx:leading-[1.12]">
          Trading Workflow <span className="text-[#FF7A00]">Automation</span>
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-white/70 mx:max-w-[340px] mx:text-[14px] mx:leading-6">
          Stop letting manual processes and emotional hurdles disrupt your
          trading. Experience the smooth, automated workflow with Next Trade FX.
        </p>
      </div>

      {/* Grid */}
      <div className="relative z-10 grid max-w-6xl grid-cols-1 gap-8 mx-auto md:grid-cols-2 mx:gap-6">
        {/* Without */}
        <div className="mx:rounded-[24px] mx:border mx:border-white/10 mx:bg-white/[0.03] mx:p-4 mx:backdrop-blur-sm">
          <h3 className="text-gray-400 text-center mb-6 font-medium mx:mb-4 mx:text-[13px] mx:tracking-[0.14em] mx:uppercase">
            Without Automation
          </h3>
          <div className="space-y-4 mx:space-y-3">
            {comparisonData.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-transparent p-4 transition-all hover:scale-[1.02] hover:border-[#FF7A00]/50 hover:shadow-[0_0_25px_rgba(255,122,0,0.25)] mx:items-start mx:rounded-[18px] mx:bg-black/10 mx:px-3.5 mx:py-3.5"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, delay: idx * 0.15 }}
                >
                  <FaTimes className="h-5 w-5 flex-shrink-0 text-gray-500 mx:mt-0.5 mx:h-4 mx:w-4" />
                </motion.div>
                <span className="mx:text-[14px] mx:leading-6">{item.without}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* With */}
        <div className="mx:rounded-[24px] mx:border mx:border-white/10 mx:bg-white/[0.03] mx:p-4 mx:backdrop-blur-sm">
          <h3 className="text-gray-400 text-center mb-6 font-medium mx:mb-4 mx:text-[13px] mx:tracking-[0.14em] mx:uppercase">
            With Next Trade Automation
          </h3>
          <div className="space-y-4 mx:space-y-3">
            {comparisonData.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-transparent p-4 transition-all hover:scale-[1.02] hover:border-[#00E676]/50 hover:shadow-[0_0_25px_rgba(0,230,118,0.25)] mx:items-start mx:rounded-[18px] mx:bg-black/10 mx:px-3.5 mx:py-3.5"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, delay: idx * 0.15 }}
                >
                  <FaCheck className="h-5 w-5 flex-shrink-0 text-[#00E676] mx:mt-0.5 mx:h-4 mx:w-4" />
                </motion.div>
                <span className="mx:text-[14px] mx:leading-6">{item.with}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}



