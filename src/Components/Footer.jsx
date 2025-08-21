import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Next-trade-technologies-logo-2.png";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import {
  FaXTwitter,
  FaFacebookF,
  FaInstagram,
  FaGithub,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#0D0F11] relative overflow-hidden text-[#A1A1AA]">
      {/* Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#ff7a00]/5 via-transparent to-[#ff7a00]/10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 py-14 border-b border-white/10 relative z-10">
        <div className="flex justify-between gap-16 flex-wrap">
          {/* Left Side - Company Info */}
          <div className="flex flex-col gap-6 max-w-sm">
            <Link to="/">
              <img
                src={logo}
                alt="Next Trade Technologies Logo"
                className="w-48 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </Link>
            <p className="text-sm leading-6">
              At{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff7a00] to-[#ff7a00]/80 font-semibold">
                Next Trade Technologies
              </span>
              , we empower traders with premium tools, expert mentorship, and
              real-time market insights to maximize your trading potential.
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-5">
              {[FaXTwitter, FaFacebookF, FaInstagram, FaGithub].map(
                (Icon, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 flex items-center justify-center rounded-full border border-[#ff7a00]/30 hover:border-[#ff7a00] hover:bg-[#ff7a00]/10 text-[#ff7a00] hover:text-white transition-all duration-300 cursor-pointer group"
                  >
                    <Icon className="w-5 h-5 group-hover:scale-125 transition-transform duration-300" />
                  </div>
                )
              )}
            </div>
          </div>

          {/* Right Side - Links Sections */}
          <div className="flex flex-wrap gap-16">
            {/* Services */}
            <div className="flex flex-col gap-3">
              <p className="text-white font-semibold text-lg pb-2">Services</p>
              {[
                "Next Trade Automation",
                "Trading Tools",
                "Next Trade Indicator",
                "Education",
              ].map((item, i) => (
                <p
                  key={i}
                  className="text-sm hover:text-[#ff7a00] cursor-pointer transition-colors duration-300"
                >
                  {item}
                </p>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex flex-col gap-3">
              <p className="text-white font-semibold text-lg pb-2">
                Navigation
              </p>
              {["Features", "How it Works", "Testimonials", "FAQs"].map(
                (item, i) => (
                  <p
                    key={i}
                    className="text-sm hover:text-[#ff7a00] cursor-pointer transition-colors duration-300"
                  >
                    {item}
                  </p>
                )
              )}

              {/* Added Privacy & Terms */}
              <p className="text-sm hover:text-[#ff7a00] cursor-pointer transition-colors duration-300">
                Privacy Policy
              </p>
              <p className="text-sm hover:text-[#ff7a00] cursor-pointer transition-colors duration-300">
                Terms & Conditions
              </p>
            </div>

            {/* Contact Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white mb-2">
                Contact Us
              </h3>

              {/* Location */}
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#ff7a00]/10 border border-[#ff7a00]/30 text-[#ff7a00] group-hover:bg-[#ff7a00] group-hover:text-white transition-all duration-300 shadow-md">
                  <FiMapPin size={20} />
                </div>
                <p className="text-[#A1A1AA] group-hover:text-white transition-colors duration-300">
                  Salt Lake, Sector V, Kolkata, India
                </p>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#ff7a00]/10 border border-[#ff7a00]/30 text-[#ff7a00] group-hover:bg-[#ff7a00] group-hover:text-white transition-all duration-300 shadow-md">
                  <FiPhone size={20} />
                </div>
                <a
                  href="tel:+919876543210"
                  className="text-[#A1A1AA] group-hover:text-white transition-colors duration-300"
                >
                  +91 98765 43210
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#ff7a00]/10 border border-[#ff7a00]/30 text-[#ff7a00] group-hover:bg-[#ff7a00] group-hover:text-white transition-all duration-300 shadow-md">
                  <FiMail size={20} />
                </div>
                <a
                  href="mailto:support@nextradete.co.in"
                  className="text-[#A1A1AA] group-hover:text-white transition-colors duration-300"
                >
                  support@nextradete.co.in
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center flex-wrap gap-4 text-sm relative z-10 border-t border-white/10">
        <p>
          © {new Date().getFullYear()} Next Trade Technologies — All Rights
          Reserved
        </p>
        <p className="text-[#ff7a00] italic font-medium tracking-wide hover:tracking-widest transition-all duration-500">
          ✦ Developed by <span className="font-semibold">Subhajit</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
