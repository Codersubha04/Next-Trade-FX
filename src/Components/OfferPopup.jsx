import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

const VISIT_COUNT_KEY = "next_trade_visit_count";
const SESSION_SEEN_KEY = "next_trade_offer_seen_session";

const OfferPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isReturningVisitor, setIsReturningVisitor] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(SESSION_SEEN_KEY) === "true") return;

    const visitCount = Number(localStorage.getItem(VISIT_COUNT_KEY) || "0");
    setIsReturningVisitor(visitCount > 0);

    const timer = window.setTimeout(() => {
      setIsOpen(true);
      sessionStorage.setItem(SESSION_SEEN_KEY, "true");
      localStorage.setItem(VISIT_COUNT_KEY, String(visitCount + 1));
    }, 1800);

    return () => window.clearTimeout(timer);
  }, [location.pathname]);

  const content = useMemo(() => {
    if (isReturningVisitor) {
      return {
        badge: "Returning Visitor Offer",
        title: "Unlock a Special Discount on Your Package",
        description:
          "You have explored your options. Get a limited-time discounted package with premium setup support and faster onboarding.",
        cta: "Claim Discount Offer",
      };
    }

    return {
      badge: "Welcome Offer",
      title: "Start With an Exclusive First Visit Offer",
      description:
        "Explore our premium automation services with a custom first-visit offer crafted for new traders and serious learners.",
      cta: "View Intro Offer",
    };
  }, [isReturningVisitor]);

  const closePopup = () => setIsOpen(false);

  const handleCta = () => {
    setIsOpen(false);
    navigate("/package");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-black/70 backdrop-blur-sm"
            onClick={closePopup}
          />
          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="fixed left-1/2 top-28 z-[100] w-[90%] max-w-xl -translate-x-1/2 overflow-hidden rounded-[24px] border border-white/10 bg-[#090c12] shadow-[0_0_50px_rgba(255,122,0,0.16)]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,122,0,0.25),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(0,200,83,0.18),transparent_30%)]" />

            <div className="relative p-5 md:p-6">
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <span className="inline-flex rounded-full border border-[#FF7A00]/30 bg-[#FF7A00]/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#FFB066]">
                    {content.badge}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={closePopup}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition-all hover:border-[#FF7A00]/40 hover:text-white"
                  aria-label="Close offer popup"
                >
                  <FaTimes className="h-4 w-4" />
                </button>
              </div>

              <div className="grid gap-5 md:grid-cols-[1.2fr_0.8fr] md:items-end">
                <div>
                  <h2 className="unv text-3xl font-semibold leading-tight text-white md:text-4xl">
                    {content.title}
                  </h2>
                  <p className="mt-3 max-w-xl text-sm leading-6 text-[#B4BAC5]">
                    {content.description}
                  </p>

                  <div className="mt-5 flex flex-wrap items-center gap-2 text-xs text-white/75">
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">
                      24/7 Automation
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">
                      Fast Setup Support
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">
                      Limited Period Offer
                    </span>
                  </div>
                </div>

                <div className="rounded-[20px] border border-white/10 bg-white/[0.04] p-4 backdrop-blur-md">
                  <p className="text-xs uppercase tracking-[0.22em] text-[#A1A1AA]">
                    Premium Access
                  </p>
                  <div className="mt-2">
                    <p className="text-3xl font-bold text-white md:text-4xl">
                      {isReturningVisitor ? "20% OFF" : "BONUS"}
                    </p>
                    <p className="mt-2 text-sm leading-5 text-[#B4BAC5]">
                      {isReturningVisitor
                        ? "Returning users get a stronger deal to help convert faster."
                        : "New visitors get an introductory offer on premium services."}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={handleCta}
                    className="mt-5 w-full rounded-full bg-gradient-to-r from-[#FF7A00] to-[#00C853] px-5 py-3 text-sm font-semibold text-white shadow-[0_0_25px_rgba(255,122,0,0.25)] transition-all hover:scale-[1.02]"
                  >
                    {content.cta}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default OfferPopup;
