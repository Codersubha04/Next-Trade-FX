import { motion } from "framer-motion";

const AutoScrollLogos = () => {
  const logos = [
    "/logos/tradingview-logo.png",
    "/logos/tradingview-logo.png",
    "/logos/tradingview-logo.png",
    "/logos/tradingview-logo.png",
    "/logos/tradingview-logo.png",
    "/logos/tradingview-logo.png",
    "/logos/tradingview-logo.png",
  ];

  const allLogos = [...logos, ...logos]; // For seamless loop

  return (
    <div className="relative overflow-hidden bg-[#0D0F11] py-8 mt-16">
      <motion.div
        className="flex gap-16 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 30,
        }}
      >
        {allLogos.map((src, i) => (
          <img
            key={i}
            src={src}
            alt="logo"
            className="h-8 opacity-70 hover:opacity-100 transition"
          />
        ))}
      </motion.div>

      <p className="text-center text-gray-400 text-sm mt-6">
        Including 1500+ Others On MetaTrader 4/5
      </p>
    </div>
  );
};

export default AutoScrollLogos;
