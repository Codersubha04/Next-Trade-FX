import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { motion } from "framer-motion";
import { FaRegHandshake, FaUserCheck, FaMoneyBillWave, FaUndo, FaFileContract, FaBalanceScale, FaShieldAlt, FaLock, FaPhoneAlt } from "react-icons/fa";

const sections = [
  {
    title: "Affiliate Program Agreement",
    icon: <FaRegHandshake className="text-[#FF7A00] w-7 h-7" />,
    content: `By participating in the NextTrade Technologies PVT Ltd Affiliate Program (“Program”), you agree with the terms and policies set forth in this Agreement. 
It is a legal agreement between you and NextTrade Technologies PVT Ltd. 
By submitting the online application, you agree that you have read and understood the terms and policies, and if accepted, you will be legally responsible for each term. 
This Program allows you to advertise NextTrade Technologies PVT Ltd and earn a commission on product purchases made through your referrals. 
This is not a salary but an additional income source.`,
  },
  {
    title: "Referrals",
    icon: <FaUserCheck className="text-[#00C853] w-7 h-7" />,
    content: `NextTrade Technologies PVT Ltd will attribute referrals to you based on a tracking code embedded in your affiliate links. 
Cookies and IP tracking may be used to identify referrals. 
A commission of ₹100 will be awarded per valid referral. 
Referrals may purchase within 7 days of clicking your link for you to earn commission. 
NextTrade Technologies PVT Ltd reserves the right to refuse service to any referral. The decision will be final.`,
  },
  {
    title: "Commissions",
    icon: <FaMoneyBillWave className="text-[#FFD700] w-7 h-7" />,
    content: `You will earn ₹100 commission on products purchased by your referrals. 
Minimum withdrawal amount is ₹1000. Payments can be made via bank transfer, PayPal, UPI, or other systems. 
If a referral cancels or requests a chargeback, commission will not be paid. 
Commissions may be held for up to three months due to return periods and processing.`,
  },
  {
    title: "Reversals",
    icon: <FaUndo className="text-[#1E90FF] w-7 h-7" />,
    content: `NextTrade Technologies PVT Ltd reserves the right to reverse referrals due to cancellations, returns, duplicate tracking, disputed charges, or program violations. 
Failure to provide timely clarification or proof of traffic sources may result in suspension, reversal of commissions, or termination from the Program.`,
  },
  {
    title: "Assets Usage",
    icon: <FaFileContract className="text-[#FF7A00] w-7 h-7" />,
    content: `You are granted a non-exclusive, non-transferable license to use promotional assets provided by NextTrade Technologies PVT Ltd. 
You must not modify, disable, or misuse the assets. 
Ownership of all assets, trademarks, and intellectual property remains with NextTrade Technologies PVT Ltd.`,
  },
  {
    title: "Relationship",
    icon: <FaBalanceScale className="text-[#00C853] w-7 h-7" />,
    content: `This Agreement does not create an employment, agency, or partnership relationship. 
You are an independent contractor and cannot bind NextTrade Technologies PVT Ltd in any agreements. 
You are responsible for your own taxes. Clear disclosure must be made wherever affiliate links are used.`,
  },
  {
    title: "Warranties",
    icon: <FaShieldAlt className="text-[#FFD700] w-7 h-7" />,
    content: `NextTrade Technologies PVT Ltd makes no express or implied warranties regarding the Program. 
You warrant that your website and promotional practices are lawful, non-infringing, and authorized. 
You may not compete directly with NextTrade Technologies PVT Ltd as an employee or agent of a competitor.`,
  },
  {
    title: "Indemnification & Confidentiality",
    icon: <FaLock className="text-[#FF7A00] w-7 h-7" />,
    content: `You agree to indemnify and hold harmless NextTrade Technologies PVT Ltd from claims, damages, or costs resulting from breach of this Agreement. 
Any confidential information obtained during participation must not be disclosed without prior written consent.`,
  },
  {
    title: "Liability",
    icon: <FaBalanceScale className="text-[#1E90FF] w-7 h-7" />,
    content: `NextTrade Technologies PVT Ltd will not be liable for loss of profits, direct or indirect damages, or interruptions caused by suspension, misuse, or termination of services under this Agreement.`,
  },
  {
    title: "Contact Us",
    icon: <FaPhoneAlt className="text-[#00C853] w-7 h-7" />,
    content: `If you have any questions about our Affiliate Program, please contact us through our website: Contact Us`,
    button: {
      text: "Contact Us",
      link: "/contact", // tumhara contact page route
    },
  },
];

const Affiliate = () => {
  return (
    <div className="bg-black text-white">
      <Header />
      <div className="relative overflow-hidden bg-gradient-to-b from-[#0B0F19] to-[#000000] pt-[7rem] pb-[5rem]">
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#00C853] rounded-full opacity-30 animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${5 + Math.random() * 10}s`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        {/* Header */}
        <div className="relative flex justify-center items-center text-center mt-5 mb-12">
          <h1 className="text-white text-[64px] font-bold drop-shadow-[0_0_20px_rgba(0,0,0,0.8)]">
            Affiliate{" "}
            <span className="bg-gradient-to-r from-[#FF7A00] to-[#00C853] bg-clip-text text-transparent">
              Policy
            </span>
          </h1>
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 space-y-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {sections.map((section, index) => (
              <div
                key={index}
                className="bg-[#11121A]/80 border border-[#00C853]/30 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all"
              >
                <div className="flex items-center mb-6 space-x-4">
                  {section.icon}
                  <h2 className="text-2xl font-bold text-white">
                    {section.title}
                  </h2>
                </div>
                <p className="text-[#A1A1AA] text-lg leading-relaxed whitespace-pre-line">
                  {section.content}
                </p>
                {section.button && (
                  <a
                    href={section.button.link}
                    className="inline-block bg-gradient-to-r from-[#ff7a00] to-[#00c853] text-white text-sm font-semibold rounded-full px-6 py-2 hover:opacity-90 hover:scale-[1.05] transition-all duration-300 mt-4"
                  >
                    {section.button.text}
                  </a>
                )}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Glow Effects */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-[#FF7A00]/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-[#00C853]/20 blur-[120px] rounded-full"></div>
      </div>
      <Footer />
    </div>
  );
};

export default Affiliate;
