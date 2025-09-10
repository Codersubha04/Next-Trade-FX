import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { motion } from "framer-motion";
import { FaRegFileAlt, FaPhoneAlt } from "react-icons/fa";

const sections = [
  {
    title: "Return and Refund Policy",
    icon: <FaRegFileAlt className="text-[#FF7A00] w-7 h-7" />,
    content: `Last updated: March 27, 2025

Thank you for subscribing to NextTrade Technologies PVT Ltd.

If, for any reason, you are not completely satisfied with your subscription, we invite you to review our policy on refunds. The following terms apply to any subscription memberships that you purchase from us.`,
  },
  {
    title: "Interpretation and Definitions",
    icon: <FaRegFileAlt className="text-[#00C853] w-7 h-7" />,
    content: `Interpretation:
The words with the initial letter capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or plural form.

Definitions:
For the purposes of this Return and Refund Policy:

Company (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to NextTrade Technologies PVT Ltd, Delhi.
Membership refers to the subscription memberships offered for sale on the Service.
Services mean a request by you to purchase Membership from us.
Service refers to the Website.
Website refers to NextTrade Technologies PVT Ltd, accessible from nexttrade.co.in.
You means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.`,
  },
  {
    title: "Your Service Cancellation Rights",
    icon: <FaRegFileAlt className="text-[#FFD700] w-7 h-7" />,
    content: `We generally do not provide refunds for our subscription memberships. However, in special cases, we may consider refunds for purchases made within the last 3 days.

The deadline for cancelling a subscription is 3 days from the date on which you received the service.

To exercise your right of cancellation, you must inform us of your decision by means of a clear statement. You can inform us of your decision by:

Contacting us on WhatsApp: +91 9873947912
We will use the same means of payment as you used for the Service, and you will not incur any fees for such reimbursement.`,
  },
  {
    title: "Contact Us",
    icon: <FaPhoneAlt className="text-[#1E90FF] w-7 h-7" />,
    content: `If you have any questions about our Return and Refund Policy, please contact us through our website: Contact Us`,
    button: {
      text: "Contact Us",
      link: "/contact", // yaha tumhare contact page ka route
    },
  },
];

const RefundPolicy = () => {
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
            Refund & Return{" "}
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

export default RefundPolicy;
