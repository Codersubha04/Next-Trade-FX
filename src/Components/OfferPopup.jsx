import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";

const WHATSAPP_LINK = "https://wa.me/919076355531";
const CALL_LINK = "tel:+919076355531";

const OfferPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsOpen(true);
    }, 800);

    return () => window.clearTimeout(timer);
  }, [location.pathname]);

  const closePopup = () => setIsOpen(false);

  const handleClaimOffer = () => {
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
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5">
            <motion.div
              initial={{ opacity: 0, y: 32, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.96 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="relative max-h-[calc(100vh-1.5rem)] w-full max-w-2xl overflow-hidden rounded-[20px] border border-white/10 bg-[#090c12] shadow-[0_0_50px_rgba(255,122,0,0.16)] sm:max-h-[calc(100vh-2.5rem)] sm:rounded-[24px]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,122,0,0.22),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(0,200,83,0.14),transparent_30%)]" />
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] via-transparent to-black/10" />

              <div className="relative max-h-[calc(100vh-1.5rem)] overflow-y-auto p-4 sm:max-h-[calc(100vh-2.5rem)] sm:p-5 md:p-6">
                <div className="mb-4 flex items-start justify-between gap-3 sm:mb-5 sm:gap-4">
                  <div>
                    <span className="inline-flex animate-pulse rounded-full border border-[#FFCF33]/45 bg-[#FFCF33]/18 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#FFF1A8] shadow-[0_0_18px_rgba(255,207,51,0.18)] sm:px-4 sm:text-xs sm:tracking-[0.2em]">
                      Discount Offer
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={closePopup}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition-all hover:border-[#FF7A00]/40 hover:text-white sm:h-10 sm:w-10"
                    aria-label="Close offer popup"
                  >
                    <FaTimes className="h-4 w-4" />
                  </button>
                </div>

                <div className="grid gap-4 sm:gap-5 md:grid-cols-[1.15fr_0.85fr] md:items-start">
                  <div>
                    <h2 className="unv text-[1.75rem] font-bold leading-[1.1] text-[#FFF8E8] sm:text-4xl">
                      Wait! Don&apos;t Miss This Opportunity
                    </h2>
                    <p className="mt-3 max-w-xl text-sm font-semibold leading-6 text-[#F6F7FB] sm:mt-4 sm:text-base sm:leading-7">
                      Get 30-50% instant discount on our 24/7 Automation Algo
                      Trading Software.
                    </p>

                    <div className="mt-4 flex flex-col gap-2.5 text-sm text-[#DCE3EE] sm:mt-5 sm:gap-3">
                      <p className="font-medium leading-6">
                        Chat with our expert instantly and get quick guidance.
                      </p>
                      <p className="font-medium leading-6">
                        Request a free call from our team.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-[18px] border border-white/10 bg-black/20 p-3.5 backdrop-blur-md sm:rounded-[20px] sm:p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C7CEDA] sm:text-xs sm:tracking-[0.22em]">
                      Limited-Time Offer
                    </p>
                    <div className="mt-2">
                      <p className="text-[1.9rem] font-bold text-[#FFF4CC] sm:text-4xl">
                        30-50% OFF
                      </p>
                      <p className="mt-2 text-sm leading-6 text-[#D3D8E2]">
                        Choose how you want to connect and claim the offer
                        right away.
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={handleClaimOffer}
                      className="mt-4 w-full rounded-full bg-[#FFD43B] px-4 py-3 text-sm font-bold text-[#111111] shadow-[0_0_25px_rgba(255,212,59,0.3)] transition-all hover:scale-[1.02] hover:bg-[#F2C100] hover:text-[#111111] sm:mt-5 sm:px-5"
                    >
                      Claim Offer Now
                    </button>

                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-bold text-white shadow-[0_0_25px_rgba(37,211,102,0.28)] transition-all hover:scale-[1.02] hover:bg-[#1DAE52] hover:text-white sm:px-5"
                    >
                      <FaWhatsapp className="h-4 w-4" />
                      WhatsApp Now
                    </a>

                    <a
                      href={CALL_LINK}
                      className="mt-3 flex w-full items-center justify-center gap-2 rounded-full bg-[#FF7A00] px-4 py-3 text-sm font-bold text-white shadow-[0_0_25px_rgba(255,122,0,0.28)] transition-all hover:scale-[1.02] hover:bg-[#E56E00] hover:text-white sm:px-5"
                    >
                      <FiPhoneCall className="h-4 w-4" />
                      Get a Free Call
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default OfferPopup;
