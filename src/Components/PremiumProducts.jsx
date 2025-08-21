import { motion } from "framer-motion";
import { useState } from "react";
import firstServiceimg from "../assets/1.01 (1).png";
import secondServiceimg from "../assets/WEB IMAGE 02.png";
import thirdServiceimg from "../assets/3.01 (1) (2).png";
import fourthServiceimg from "../assets/WEB IMAGE 04.png";

const products = [
  {
    id: 1,
    title: "EMA HIGH LOW BAND AFL",
    description:
      "Plots EMA(high) & EMA(low) bands for precision entries and exits. Works for Intraday & Positional trading.",
    image: firstServiceimg,
    price: "₹9,999",
    oldPrice: "₹14,999",
    discount: "30% OFF",
    offerLink: "#",
  },
  {
    id: 2,
    title: "RSI Divergence Scanner",
    description:
      "Spot bullish/bearish divergences early with customizable alerts across multiple timeframes.",
    image: secondServiceimg,
    price: "₹7,499",
    oldPrice: "₹10,999",
    discount: "30% OFF",
    offerLink: "#",
  },
  {
    id: 3,
    title: "SuperTrend Pro Indicator",
    description:
      "Multi-timeframe confluence, ATR trailing stops, and custom alert conditions for clean trends.",
    image: thirdServiceimg,
    price: "₹8,999",
    oldPrice: "₹12,499",
    discount: "30% OFF",
    offerLink: "#",
  },
  {
    id: 4,
    title: "Breakout Zone Detector",
    description:
      "Highlights high-probability breakout zones based on price action and volume spikes.",
    image: fourthServiceimg,
    price: "₹10,499",
    oldPrice: "₹14,999",
    discount: "30% OFF",
    offerLink: "#",
  },
];

export default function PremiumProducts() {
  const [visibleCount, setVisibleCount] = useState(2);

  return (
    <section className="px-6 pb-[5rem] bg-[#0D0F11]">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
      <h2 className="text-[#e4e4e7] text-center mx:text-center mx:text-[36px] mx:leading-[49px] unv text-[50px] font-semibold leading-[61.5px]">
  Premium <span className="text-[#FF7A00]">Trading Tools</span>
</h2>


        <p className="text-white/60 mt-3 max-w-2xl mx-auto">
          Crafted for professional traders — combining precision, speed, and
          modern design.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto">
        {products.slice(0, visibleCount).map((product, idx) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: idx * 0.15, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="group bg-gradient-to-b from-[#141619] to-[#0D0F11] rounded-2xl overflow-hidden border border-[#1a1d20] hover:border-[#FF7A00]/70 hover:shadow-[0_0_50px_rgba(255,122,0,0.2)] transition-all duration-500 flex flex-col md:flex-row"
          >
            {/* Image */}
            <div className="relative w-full md:w-1/2 aspect-[2150/1250] overflow-hidden">
              <motion.img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-0 left-0 bg-gradient-to-r from-[#FF7A00] to-[#FFD580] text-black text-xs font-bold px-4 py-1 rounded-br-xl shadow-md">
                {product.discount}
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col justify-between w-full md:w-1/2">
              <div>
                <h3 className="text-white text-xl font-bold mb-3 group-hover:text-[#FF7A00] transition-colors duration-300">
                  {product.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {product.description}
                </p>
                <p className="bg-[#141619] p-3 rounded-lg text-[#FF7A00] font-medium mb-5 text-sm border border-[#FF7A00]/20 hover:border-[#FF7A00] transition">
                  OFFER:{" "}
                  <a
                    href={product.offerLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-white transition"
                  >
                    Open account in Delta Exchange & get 30% off
                  </a>
                </p>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7A00] to-[#FFD580] text-2xl font-bold drop-shadow-lg">
                    {product.price}
                  </span>
                  <span className="text-gray-500 line-through">
                    {product.oldPrice}
                  </span>
                </div>
              </div>

              {/* Buy Now Button */}
              <div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-[#FF7A00] to-[#ff9900] text-black py-3 rounded-lg font-semibold hover:shadow-[0_0_25px_rgba(255,122,0,0.6)] transition"
                >
                  Buy now
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* See More Button */}
      {visibleCount < products.length && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button
            onClick={() => setVisibleCount(products.length)}
            className="px-8 py-3 rounded-lg bg-[#1A1D20] border border-[#2A2D31] text-white font-medium hover:border-[#FF7A00] hover:text-[#FF7A00] transition"
          >
            See More
          </button>
        </motion.div>
      )}
    </section>
  );
}
