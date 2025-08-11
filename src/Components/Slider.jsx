// Slider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectCoverflow } from "swiper/modules";
import star from "../assets/star.svg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

const testimonials = [
  {
    name: "Brian Clack",
    role: "VP of Marketing at Snapchat",
    text:
      "Next Trade FX transformed my trading — the AI signals and execution speed gave me an edge.",
  },
  {
    name: "Jessie James",
    role: "Growth Lead, CryptoWave",
    text:
      "Clear signals, powerful analytics. The platform is smooth and reliable under volatility.",
  },
  {
    name: "Ikenna Okafor",
    role: "Head of Product, TradeFlow",
    text:
      "Latency was reduced dramatically — execution is dependable and the insights are actionable.",
  },
  {
    name: "Sarah Johnson",
    role: "CEO, FinTech Labs",
    text:
      "Loved the analytics dashboard — intuitive and rich in detail. Great for decision making.",
  },
  {
    name: "Michael Carter",
    role: "Head of Product at TradeX",
    text:
      "Automations saved our team hours each week. The AI recommendations are impressively accurate.",
  },
];

const Slider = () => {
  return (
    <div className="bg-black">
      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50% }
          50% { background-position: 100% 50% }
          100% { background-position: 0% 50% }
        }
        @keyframes cardPop {
          from { transform: translateY(8px) scale(.985); opacity: 0; }
          to { transform: translateY(0) scale(1); opacity: 1; }
        }

        /* Card styling */
        .ntf-card {
          background: linear-gradient(180deg, rgba(13,15,17,0.55), rgba(8,9,10,0.65));
          border: 1px solid rgba(255,255,255,0.06);
          backdrop-filter: blur(8px);
          padding: 22px;
          border-radius: 16px;
          min-height: 230px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: transform .35s cubic-bezier(.2,.9,.2,1), box-shadow .35s, border-color .35s;
          transform-origin: center;
          animation: cardPop .5s ease both;
        }
        .ntf-card:hover {
          transform: translateY(-8px) scale(1.02);
          animation: none;
          border-color: rgba(255,122,0,0.6);
          box-shadow: 0 18px 40px rgba(255,122,0,0.25);
        }

        /* Orange glow border on hover */
        .ntf-card::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 16px;
          pointer-events: none;
          opacity: 0;
          transition: opacity .35s;
          border: 2px solid rgba(255,122,0,0.4);
        }
        .ntf-card:hover::after { opacity: 1; }

        /* Star icon */
        .ntf-star {
          width: 28px;
          height: 28px;
          filter: drop-shadow(0 0 6px rgba(255,122,0,0.9));
          transition: filter .3s;
        }
        .ntf-card:hover .ntf-star {
          filter: drop-shadow(0 0 12px rgba(255,122,0,0.9));
        }

        /* Navigation buttons */
        .ntf-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 44px;
          height: 44px;
          border-radius: 9999px;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 60;
          cursor: pointer;
          border: 1px solid rgba(255,255,255,0.06);
          background: rgba(255,122,0,0.15);
          transition: transform .18s, box-shadow .18s;
        }
        .ntf-nav:hover {
          transform: translateY(-50%) scale(1.06);
          box-shadow: 0 8px 30px rgba(255,122,0,0.2);
        }
        .ntf-nav svg { width: 16px; height: 16px; fill: white; opacity: .95; }

        .ntf-nav.prev { left: 12px; }
        .ntf-nav.next { right: 12px; }

        /* Swiper spacing */
        .swiper-slide {
          display: flex;
          justify-content: center;
          align-items: stretch;
          padding: 22px 10px; /* more gap between cards */
        }
        .swiper-slide-shadow-left, .swiper-slide-shadow-right { opacity: 0; }

        .ntf-gradient-heading {
          background: linear-gradient(90deg, #FF7A00, #FFB33A 30%, #00C853 70%);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: gradientMove 6s linear infinite;
        }

        @media (max-width: 768px) {
          .ntf-nav { display: none; }
        }
      `}</style>

      <div className="relative bg-gradient-to-b from-[#0B0F19] to-black py-16">
        <div className="px-6 md:px-24 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="text-white text-[44px] md:text-[50px] font-semibold leading-tight">
                Our{" "}
                <span className="ntf-gradient-heading">Success Stories</span>
              </h2>
              <p className="text-[#A1A1AA] mt-3">
                Real traders. Real results. See how Next Trade FX helped traders win in volatile markets.
              </p>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <button
                className="px-4 py-2 rounded-md bg-gradient-to-r from-[#FF7A00] to-[#FFB33A] text-black font-semibold shadow-md hover:scale-105 transition-transform"
              >
                Free Trial
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 max-w-7xl mx-auto relative px-6 md:px-24">
          <div className="ntf-nav prev" aria-hidden>
            <svg viewBox="0 0 24 24"><path d="M15.4 6.6L14 5.2 8.2 11 14 16.8l1.4-1.4L11 11z" /></svg>
          </div>
          <div className="ntf-nav next" aria-hidden>
            <svg viewBox="0 0 24 24"><path d="M8.6 17.4L10 18.8 15.8 13 10 7.2 8.6 8.6 13 13z" /></svg>
          </div>

          <Swiper
            modules={[Navigation, Autoplay, EffectCoverflow]}
            effect={"coverflow"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 140,
              modifier: 1.1,
              slideShadows: false,
            }}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={1.15}
            spaceBetween={28} // more gap between slides
            navigation={{
              nextEl: ".ntf-nav.next",
              prevEl: ".ntf-nav.prev",
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              640: { slidesPerView: 1.05 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2.6 },
              1280: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((t, idx) => (
              <SwiperSlide key={idx}>
                <div className="relative ntf-card w-full max-w-[380px]">
                  <div className="flex items-center justify-between">
                    <img src={star} alt="star" className="ntf-star" />
                    <div className="text-sm px-3 py-1 rounded-full text-white/90"
                      style={{
                        background: 'rgba(255,122,0,0.12)',
                        border: '1px solid rgba(255,255,255,0.04)'
                      }}>
                      Verified trader
                    </div>
                  </div>
                  <div className="mt-4 mb-4">
                    <p className="text-[#e4e4e7] text-base leading-7">
                      “{t.text}”
                    </p>
                  </div>
                  <div className="mt-3">
                    <p className="text-white font-semibold text-[16px]">{t.name}</p>
                    <p className="text-[#A1A1AA] text-sm">{t.role}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Slider;
