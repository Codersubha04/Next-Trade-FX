import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";

const contactActions = [
  {
    label: "WhatsApp",
    href: "https://wa.me/919076355531",
    icon: FaWhatsapp,
    className:
      "bg-[#25D366] shadow-[0_0_24px_rgba(37,211,102,0.35)] hover:shadow-[0_0_32px_rgba(37,211,102,0.5)]",
  },
  {
    label: "Call",
    href: "tel:+919076355531",
    icon: FiPhoneCall,
    className:
      "bg-[#FF7A00] shadow-[0_0_24px_rgba(255,122,0,0.35)] hover:shadow-[0_0_32px_rgba(255,122,0,0.5)]",
  },
];

const buttonBaseClass =
  "flex h-14 w-14 items-center justify-center rounded-full border border-white/10 text-white transition-all duration-300";

const FloatingContactButtons = () => {
  return (
    <div className="fixed bottom-5 right-3 z-50 md:bottom-6 md:right-4">
      <div className="flex flex-col items-center gap-3 rounded-full bg-black/20 p-2 backdrop-blur-sm">
        {contactActions.map(({ label, href, icon: Icon, className }, index) => (
          <motion.a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.18, delay: index * 0.05 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
            className={`${buttonBaseClass} ${className}`}
            aria-label={label}
          >
            <Icon className="h-7 w-7" />
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default FloatingContactButtons;
