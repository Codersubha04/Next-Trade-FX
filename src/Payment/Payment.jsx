import React, { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { motion } from "framer-motion";
import QRNEXT from "../assets/QRNEXT.jpeg";
import gpay from "../assets/UPI/google-pay-icon.png";
import phonepe from "../assets/UPI/phonepe-icon.png";
import paytm from "../assets/UPI/paytm-icon.png";
import {
  FaUniversity,
  FaQrcode,
  FaWhatsapp,
  FaCheckCircle,
} from "react-icons/fa";

const Payment = () => {
  const [accepted, setAccepted] = useState(false);
  const [utr, setUtr] = useState("");

  const [toast, setToast] = useState("");

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setToast("Copied!");
    setTimeout(() => setToast(""), 2000);
  };

  const whatsappNumber = "919076355531";
  const upiId = "NEXTTRADE@HDFC"; // ✅ CHANGE IF NEEDED

  const message = encodeURIComponent(
    `PAYMENT CONFIRMATION – NEXTTRADE

NAME:
MOBILE NUMBER:
EMAIL ID:
PLAN NAME:
PAYMENT MODE: UPI / BANK
UPI ID: ${upiId}
UTR / TRANSACTION ID: ${utr || "NOT PROVIDED"}

I HAVE COMPLETED THE PAYMENT.`,
  );

  const handleConfirm = () => {
    if (!accepted) return;
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="bg-black text-white">
      <Header />

      {/* ================= HERO ================= */}
      <div className="bg-gradient-to-b from-[#0B0F19] to-[#000000] pt-[7rem] pb-[4rem] text-center">
        <h1 className="text-[64px] font-bold">
          Complete{" "}
          <span className="bg-gradient-to-r from-[#FF7A00] to-[#00C853] bg-clip-text text-transparent">
            Payment
          </span>
        </h1>
        <p className="mt-3 text-sm text-white/60">
          Secure Manual Payment & Verification
        </p>
      </div>

      {/* ================= STEP FLOW ================= */}
      <section className="bg-[#0D0F11] py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
          {[
            { step: "01", title: "MAKE PAYMENT", desc: "Pay via Bank or UPI" },
            { step: "02", title: "CONFIRM", desc: "Share details on WhatsApp" },
            { step: "03", title: "ACTIVATION", desc: "Access & invoice sent" },
          ].map((item) => (
            <div
              key={item.step}
              className="flex items-center gap-5 bg-[#151515] border border-white/10 rounded-xl p-6"
            >
              <div className="text-[#FF7A00] text-2xl font-bold">
                {item.step}
              </div>
              <div>
                <h4 className="font-semibold">{item.title}</h4>
                <p className="text-sm text-white/60">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PAYMENT METHODS ================= */}
      <section className="bg-[#0D0F11] py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* BANK TRANSFER */}
          <motion.div
            whileHover={{ y: -4 }}
            className="relative p-10 rounded-3xl 
             bg-gradient-to-br from-[#161616] to-[#0f0f0f]
             border border-white/10 
             shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {/* ICON + TITLE */}
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-xl bg-[#FF7A00]/10">
                <FaUniversity className="text-[#FF7A00] w-7 h-7" />
              </div>
              <h3 className="text-2xl font-semibold tracking-wide">
                BANK TRANSFER
              </h3>
            </div>

            {/* DETAILS GRID */}
            <div className="grid grid-cols-1 gap-5 text-sm">
              {[
                {
                  label: "ACCOUNT NAME",
                  value: "NEXTTRADE TECHNOLOGIES PRIVATE LIMITED",
                },
                { label: "ACCOUNT NUMBER", value: "99996668888666" },
                { label: "IFSC CODE", value: "HDFC0000816" },
                { label: "ACCOUNT TYPE", value: "CURRENT ACCOUNT" },
                { label: "BRANCH", value: "MUMBAI" },
              ].map((item, i) => (
                <div
                  key={i}
                  onClick={() => copyToClipboard(item.value)}
                  className="flex justify-between items-center
   px-6 py-5 rounded-2xl
   bg-black/40 border border-white/5
   hover:border-[#FF7A00]/40 hover:bg-black/70
   cursor-pointer transition-all group"
                >
                  <span className="text-white/60 text-xs tracking-wide">
                    {item.label}
                  </span>

                  <span
                    className="text-white text-base font-medium 
       group-hover:text-[#FF7A00] transition-colors"
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-6 text-xs text-white/40">
              Click on any field to copy details
            </p>
          </motion.div>

          {/* UPI / QR */}
          <motion.div className="bg-[#151515] rounded-2xl border border-white/10 p-8 text-center">
            <FaQrcode className="text-[#00C853] w-8 h-8 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2 tracking-wide">
              QR CODE PAYMENT
            </h3>{" "}
            <p className="text-sm text-white/60 mb-6">Scan QR below</p>
            <div className="inline-block p-4 bg-black rounded-xl border border-white/10">
              <img src={QRNEXT} alt="QR Code" className="w-60 h-60" />
            </div>
            {/* UPI ID DISPLAY
            <div className="mt-6">
              <p className="text-xs text-white/50 mb-2">
                UPI ID (FOR MANUAL PAYMENT)
              </p>
              <div className="inline-block px-4 py-2 rounded-lg bg-[#0D0F11] border border-white/10 text-sm tracking-wide">
                {upiId}
              </div>
            </div> */}
            <p className="text-sm text-white/60 mb-3">
              Scan the QR code using any UPI-enabled application
            </p>
            <div className="mt-6 flex items-center justify-center gap-6 opacity-80">
              <img
                src={gpay}
                alt="Google Pay"
                className="h-8  hover:grayscale-0 transition"
              />
              <img
                src={phonepe}
                alt="PhonePe"
                className="h-8  hover:grayscale-0 transition"
              />
              <img
                src={paytm}
                alt="Paytm"
                className="h-15  hover:grayscale-0 transition"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= CONFIRMATION ================= */}
      <section className="bg-[#0D0F11] py-20 px-6">
        <div className="max-w-3xl mx-auto bg-[#151515] border border-white/10 rounded-2xl p-8">
          <h3 className="text-xl font-semibold mb-4">PAYMENT CONFIRMATION</h3>

          <input
            type="text"
            value={utr}
            onChange={(e) => setUtr(e.target.value)}
            placeholder="ENTER UTR / TRANSACTION ID (OPTIONAL)"
            className="w-full px-4 py-3 rounded-lg bg-black border border-white/10 text-sm mb-4"
          />

          <label className="flex gap-3 text-sm text-white/70 cursor-pointer">
            <input
              type="checkbox"
              checked={accepted}
              onChange={() => setAccepted(!accepted)}
              className="accent-[#FF7A00]"
            />
            I CONFIRM THAT I HAVE READ AND ACCEPT ALL TERMS & CONDITIONS
          </label>

          <div className="mt-6 space-y-2 text-xs text-white/50">
            <p>⏱ Verification within 30–60 minutes during working hours</p>
            <p>
              ⚠ Payment once made is non-refundable.{" "}
              <a
                href="https://www.nexttradetechnologies.com/refund"
                className="text-[#FF7A00] underline"
                target="_blank"
                rel="noreferrer"
              >
                View Refund Policy
              </a>
            </p>
            <p>🔒 Manual payment verified by finance team</p>
          </div>

          <button
            onClick={handleConfirm}
            disabled={!accepted}
            className={`mt-8 w-full py-3 rounded-xl font-semibold flex items-center justify-center gap-2
              ${
                accepted
                  ? "bg-[#FF7A00] text-black hover:bg-[#ff8c1a]"
                  : "bg-white/10 text-white/40 cursor-not-allowed"
              }`}
          >
            <FaWhatsapp /> CONFIRM ON WHATSAPP
          </button>

          {accepted && (
            <p className="mt-4 flex items-center gap-2 text-sm text-[#00C853]">
              <FaCheckCircle /> TERMS ACCEPTED
            </p>
          )}
        </div>
      </section>

      <Footer />
      {toast && (
        <div className="fixed bottom-6 right-6 z-50">
          <div
            className="px-6 py-3 rounded-xl 
                    bg-black border border-white/10 
                    text-sm text-white shadow-xl"
          >
            {toast}
          </div>
        </div>
      )}
    </div>
  );
};

export default Payment;
