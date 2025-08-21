"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

import { Star } from "lucide-react";
import { motion } from "framer-motion";

// ✅ React me normal import karo (public folder ke bina)
import googleLogo from "../assets/google icon.png";

// Testimonials Data
const testimonials = [
  {
    name: "Arjun Mehta",
    role: "Head of Trading, Zerodha",
    text: "Next Trade FX simplified execution for me — instant orders, clear signals, and reliable automation.",
  },
  {
    name: "Priya Sharma",
    role: "Lead Analyst, CoinSwitch",
    text: "The analytics are next-level. It feels like having a quant team working behind the scenes.",
  },
  {
    name: "Rohit Verma",
    role: "VP of Strategy, Paytm Money",
    text: "Execution is super smooth, even in high volatility. Confidence in every trade!",
  },
  {
    name: "Neha Patel",
    role: "Product Manager, Upstox",
    text: "Loved the intuitive dashboards. Insights are sharp, actionable, and time-saving.",
  },
  {
    name: "Karan Singh",
    role: "CEO, BharatTrade",
    text: "AI-driven automation gave me a huge edge. Saved countless hours every week.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-20 bg-[#0D0F11] text-white overflow-hidden">
      {/* Animated Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-[#e4e4e7] text-center mx:text-center mx:text-[36px] mx:leading-[49px] unv text-[50px] font-semibold leading-[61.5px]">
          What Our <span className="text-[#FF7A00]">Clients Say</span>
        </h2>
      </motion.div>

      {/* Swiper Slider */}
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        loop={true}
        autoplay={{ delay: 2800 }}
        coverflowEffect={{
          rotate: 10,
          stretch: 0,
          depth: 250,
          modifier: 2,
          slideShadows: false,
        }}
        modules={[EffectCoverflow, Autoplay]}
        className="max-w-6xl mx-auto"
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i} className="max-w-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ scale: 1.05, rotateX: 3, rotateY: -3 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-[#1a1a1a]/70 to-[#0d0d0d]/90 border border-[#FF7A00]/40 
              shadow-[0_0_25px_rgba(255,122,0,0.3)] backdrop-blur-xl
              hover:shadow-[0_0_40px_rgba(255,122,0,0.7)] transition-all duration-500"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, idx) => (
                  <Star
                    key={idx}
                    className="w-5 h-5 fill-[#FF7A00] text-[#FF7A00] drop-shadow-[0_0_4px_#FF7A00]"
                  />
                ))}
              </div>

              {/* Testimonial text */}
              <p className="text-gray-200 text-lg leading-relaxed mb-6 italic">
                “{t.text}”
              </p>

              {/* User info */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-white text-lg flex items-center gap-2">
                    {t.name}
                    <img
                      src={googleLogo}
                      alt="Google"
                      width={22}
                      height={22}
                      className="drop-shadow-md"
                    />
                  </h3>
                  <p className="text-sm text-gray-400">{t.role}</p>
                </div>

                {/* Verified Badge */}
                <span className="flex items-center gap-1 text-sm text-[#FF7A00] font-medium">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-5 h-5 text-[#FF7A00] drop-shadow-[0_0_6px_#FF7A00]"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 16.2 4.8 12l1.4-1.4L9 13.4l8.8-8.8L19.2 6z" />
                  </svg>
                  Google Verified
                </span>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Glow Effects */}
      {/* <div className="absolute top-1/3 left-10 w-72 h-72 bg-[#FF7A00]/20 blur-[120px] rounded-full"></div> */}
      {/* <div className="absolute bottom-10 right-10 w-64 h-64 bg-[#ffae42]/20 blur-[100px] rounded-full"></div> */}
    </section>
  );
}
