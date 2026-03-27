import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Next-trade-technologies-logo-2.png";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { FaXTwitter, FaFacebookF, FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0D0F11] relative overflow-hidden text-[#A1A1AA]">
      {/* Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#ff7a00]/5 via-transparent to-[#ff7a00]/10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 py-14 border-b border-white/10 relative z-10 mx:px-4 mx:py-12">
        <div className="flex justify-between gap-16 flex-wrap mx:flex-col mx:gap-10">
          {/* Left Side - Company Info */}
          <div className="flex flex-col gap-6 max-w-sm mx:max-w-[340px] mx:mx-auto mx:items-center mx:text-center">
            <Link to="/">
              <img
                src={logo}
                alt="Next Trade Technologies Logo"
                className="w-48 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 mx:w-40"
              />
            </Link>
            <p className="text-sm leading-6">
              At{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff7a00] to-[#ff7a00]/80 font-semibold">
                Next Trade Technologies
              </span>
              , we provide advanced trading automation and real-time insights to help traders perform smarter, 24/7 performance with ease.
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-5 mx:flex-wrap mx:justify-center">
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-full border border-[#ff7a00]/30 hover:border-[#ff7a00] hover:bg-[#ff7a00]/10 text-[#ff7a00] hover:text-white transition-all duration-300 cursor-pointer group">
                  <FaXTwitter className="w-5 h-5 group-hover:scale-125 transition-transform duration-300" />
                </div>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61578679877181&rdid=EAplQWYmucFMoxqR&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Ld3niCwrR%2F#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-full border border-[#ff7a00]/30 hover:border-[#ff7a00] hover:bg-[#ff7a00]/10 text-[#ff7a00] hover:text-white transition-all duration-300 cursor-pointer group">
                  <FaFacebookF className="w-5 h-5 group-hover:scale-125 transition-transform duration-300" />
                </div>
              </a>
              <a
                href="https://www.instagram.com/nexttradeforex/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-full border border-[#ff7a00]/30 hover:border-[#ff7a00] hover:bg-[#ff7a00]/10 text-[#ff7a00] hover:text-white transition-all duration-300 cursor-pointer group">
                  <FaInstagram className="w-5 h-5 group-hover:scale-125 transition-transform duration-300" />
                </div>
              </a>
              <a
                href="https://wa.me/919076355531"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-full border border-[#ff7a00]/30 hover:border-[#ff7a00] hover:bg-[#ff7a00]/10 text-[#ff7a00] hover:text-white transition-all duration-300 cursor-pointer group">
                  <FaWhatsapp className="w-5 h-5 group-hover:scale-125 transition-transform duration-300" />
                </div>
              </a>
            </div>
          </div>

          {/* Right Side - Links Sections */}
          <div className="flex flex-wrap gap-16 mx:grid mx:w-full mx:max-w-[340px] mx:grid-cols-1 mx:gap-8 mx:mx-auto">
            {/* Services */}
            <div className="flex flex-col gap-3 mx:items-center mx:text-center mx:rounded-[22px] mx:border mx:border-white/10 mx:bg-white/[0.03] mx:px-4 mx:py-5">
              <p className="text-white font-semibold text-lg pb-2 mx:pb-1">Services</p>

              <Link
                to="/automation"
                className="text-sm hover:text-[#ff7a00] transition-colors duration-300"
              >
                Next Trade Automation
              </Link>
              {/* <Link
                to="/strategy"
                className="text-sm hover:text-[#ff7a00] transition-colors duration-300"
              >
                Trading Strategy
              </Link> */}
              <Link
                to="/tools"
                className="text-sm hover:text-[#ff7a00] transition-colors duration-300"
              >
                Softwere Tools
              </Link>
              <Link
                to="/educations"
                className="text-sm hover:text-[#ff7a00] transition-colors duration-300"
              >
                Education
              </Link>
              <Link
                to="/whitelabel"
                className="text-sm hover:text-[#ff7a00] transition-colors duration-300"
              >
                White Label
              </Link>
            </div>

            {/* Navigation */}
            <div className="flex flex-col gap-3 mx:items-center mx:text-center mx:rounded-[22px] mx:border mx:border-white/10 mx:bg-white/[0.03] mx:px-4 mx:py-5">
              <p className="text-white font-semibold text-lg pb-2 mx:pb-1">Navigation</p>

              <Link
                to="/terms"
                className="text-sm hover:text-[#ff7a00] transition-colors duration-300"
              >
                Terms & Conditions
              </Link>
              <Link
                to="/privacy"
                className="text-sm hover:text-[#ff7a00] transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                to="/refund"
                className="text-sm hover:text-[#ff7a00] transition-colors duration-300"
              >
                Refund Policy
              </Link>
              <Link
                to="/disclaimer"
                className="text-sm hover:text-[#ff7a00] transition-colors duration-300"
              >
                Disclaimer
              </Link>
              <Link
                to="/cookies"
                className="text-sm hover:text-[#ff7a00] transition-colors duration-300"
              >
                Cookies Policy
              </Link>
              <Link
                to="/affiliate"
                className="text-sm hover:text-[#ff7a00] transition-colors duration-300"
              >
                Affiliate
              </Link>
            </div>

            {/* Contact Section */}
            <div className="space-y-4 mx:space-y-3 mx:rounded-[22px] mx:border mx:border-white/10 mx:bg-white/[0.03] mx:px-4 mx:py-5">
              <h3 className="text-lg font-semibold text-white mb-2 mx:mb-1 mx:text-center">
                Contact Us
              </h3>

              {/* Location */}
              <div className="flex items-center gap-3 group cursor-pointer mx:items-start">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#ff7a00]/10 border border-[#ff7a00]/30 text-[#ff7a00] group-hover:bg-[#ff7a00] group-hover:text-white transition-all duration-300 shadow-md">
                  <FiMapPin size={20} />
                </div>
                <p className="text-[#A1A1AA] group-hover:text-white transition-colors duration-300 mx:text-sm mx:leading-6">
                  Mumbai, Maharashtra, India
                </p>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3 group cursor-pointer mx:items-start">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#ff7a00]/10 border border-[#ff7a00]/30 text-[#ff7a00] group-hover:bg-[#ff7a00] group-hover:text-white transition-all duration-300 shadow-md">
                  <FiPhone size={20} />
                </div>
                <a
                  href="tel:+919076355531"
                  className="text-[#A1A1AA] group-hover:text-white transition-colors duration-300 mx:text-sm mx:leading-6"
                >
                  +91 9076355531
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3 group cursor-pointer mx:items-start">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#ff7a00]/10 border border-[#ff7a00]/30 text-[#ff7a00] group-hover:bg-[#ff7a00] group-hover:text-white transition-all duration-300 shadow-md">
                  <FiMail size={20} />
                </div>
                <a
                  href="mailto:support@nexttrade.co.in"
                  className="text-[#A1A1AA] group-hover:text-white transition-colors duration-300 mx:text-sm mx:leading-6"
                >
                  support@nexttrade.co.in
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center flex-wrap gap-4 text-sm relative z-10 border-t border-white/10 mx:px-4 mx:py-5 mx:flex-col mx:text-center">
        <p className="mx:max-w-[340px] mx:leading-6">
          © {new Date().getFullYear()} NEXTTRADE TECHNOLOGIES PVT LTD — All
          Rights Reserved
        </p>
        <p className="italic font-medium tracking-wide transition-all duration-500 mx:text-[13px]">
          Designed and Developed By{" "}
          <a
            href="https://skilled-va.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#ff7a00] hover:text-white transition-colors"
          >
            Skilled Va
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
