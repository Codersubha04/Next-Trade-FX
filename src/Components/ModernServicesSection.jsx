import { motion } from "framer-motion";
import AiDrivenApi from "../assets/AI driven API.jpeg"
import metaTradertoTelegram from "../assets/MT5 To telegram.jpeg";
import tradingviewtoStockMarket from "../assets/Tradingview to stcok market.jpeg";
import customCraftedIndicators from "../assets/Custom craft indicators.jpeg";
import algorithmicTrading from "../assets/Algorithmic Trading.jpeg";
import TradingtoMetaTrader from "../assets/ChatGPT Image Aug 21, 2025, 05_36_52 PM.png";

const services = [
  {
    title: "API-DRIVEN SOFTWARE DEVELOPMENT",
    description:
      "Streamline trading with our API-based software for flexible connectivity, ensuring you stay ahead in the evolving trading landscape.",
    imgSrc: AiDrivenApi,
    color: "from-[#1F51FF] to-[#00C6FF]", // Blue gradient
  },
  {
    title: "BRIDGING TRADING VIEW WITH STOCK MARKET",
    description:
      "Easily automate trades with our Trading View to Stock Market integration, ensuring swift execution for seamless access to both platforms.",
    imgSrc: tradingviewtoStockMarket,
    color: "from-[#FF7A00] to-[#FFC107]", // Orange gradient
  },
  {
    title: "BRIDGING TELEGRAM WITH MT4/MT5",
    description:
      "Easily automate trades with our Telegram to MT4/MT5 integration, ensuring lightning-fast execution of signal-based trading without manual input.",
    imgSrc: metaTradertoTelegram,
    color: "from-[#00C853] to-[#00E676]", // Green gradient
  },
  {
    title: "ALGORITHMIC TRADING STRATEGY DEVELOPMENT",
    description:
      "Personalized algorithmic strategies tailored to your preferences. Share your needs; we'll craft a custom solution for market success.",
    imgSrc: algorithmicTrading,
    color: "from-[#1F51FF] to-[#00C6FF]",
  },
  {
    title: "CUSTOM CRAFTED INDICATORS",
    description:
      "Need precision tools? Our experts craft personalized indicators for dynamic insights, elevating your trading game with real-time precision.",
    imgSrc: customCraftedIndicators,
    color: "from-[#FF7A00] to-[#FFC107]",
  },
  {
    title: "BRIDGING TRADING VIEW WITH MT4/MT5",
    description:
      "Easily automate trades with our Trading View to MT4/MT5 integration, ensuring swift execution for seamless access to both platforms.",
    imgSrc: TradingtoMetaTrader,
    color: "from-[#00C853] to-[#00E676]",
  },
];

const ModernServicesSection = () => {
  return (
    <section className="bg-[#0D0F11] py-1 px-6 max-w-7xl mx-auto text-center select-none">
      <h2 className="text-[#e4e4e7] text-center mx:text-center mx:text-[36px] mx:leading-[49px] unv text-[50px] font-semibold leading-[61.5px]">
        <span className="text-[#FF7A00]">Compre Hensive </span>
        Global Trading Solutions
      </h2>

      <p className="text-gray-400 max-w-3xl mx-auto mb-20 text-lg leading-relaxed">
        We provide solutions to 6 different types of worldwide trading problems
        in the best way possible.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
        {services.map(({ title, description, imgSrc, color }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.15, ease: "easeOut" }}
            className="relative rounded-2xl cursor-pointer overflow-hidden shadow-lg bg-[#121518] border border-transparent
              hover:border-gradient-to-br hover:from-[#FF7A00] hover:to-[#FFC107]
              hover:shadow-[0_0_25px_rgba(255,122,0,0.5)]
              transition-all duration-500 flex flex-col"
          >
            {/* Subtle glowing gradient background */}
            <div
              className={`absolute inset-0 rounded-2xl pointer-events-none bg-gradient-to-br ${color} opacity-10 blur-3xl -z-10`}
            />

            {/* Animated image */}
            <motion.img
              src={imgSrc}
              alt={title}
              loading="lazy"
              initial={{ opacity: 0, scale: 0.9 }}
              whileHover={{ scale: 1.1, rotate: 2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.6 }}
              className="rounded-t-2xl w-full h-52 object-cover shadow-md"
            />

            <div className="p-7 flex flex-col flex-grow">
              <h3
                className="font-semibold mb-4 text-xl text-white leading-snug cursor-pointer
                bg-gradient-to-r from-[#FF7A00] to-[#FFC107] bg-clip-text text-transparent
                hover:brightness-125 transition duration-300"
              >
                {title}
              </h3>
              <p className="text-gray-300 text-sm flex-grow leading-relaxed">
                {description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ModernServicesSection;
