import React from "react";
import x from "../assets/xxx.svg";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import github from "../assets/github.svg";
import { Link } from "react-router-dom";
// import logo from "../assets/logoImage.jpeg";
import logo from "../assets/Next-trade-technologies-logo-2.png";

const Footer = () => {
    return (
        <footer className="bg-[#0D0F11] relative overflow-hidden">
            {/* Glow Background */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#ff7a00]/5 via-transparent to-[#00c853]/5 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 py-14 border-b border-white/10 relative z-10">
                <div className="flex justify-between gap-20 mx:flex-col mx:gap-10">

                    {/* Company Info */}
                    <div className="flex flex-col gap-6 max-w-sm">
                        <Link to="/">
                            <img src={logo} alt="Next Trade FX Logo" className="w-44 rounded-lg shadow-md hover:scale-105 transition-transform duration-300" />
                        </Link>
                        <p className="text-[#A1A1AA] text-sm leading-6">
                            At <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff7a00] to-[#00c853] font-semibold">Next Trade FX</span>, 
                            we empower traders with top-notch tools, expert mentorship, and real-time market insights to maximize your trading potential.
                        </p>
                        <div className="flex gap-4">
                            {[x, facebook, instagram, github].map((icon, i) => (
                                <img
                                    key={i}
                                    src={icon}
                                    alt="Social Icon"
                                    className="w-6 h-6 hover:scale-110 hover:opacity-80 transition-all duration-300 cursor-pointer"
                                />
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div className="flex gap-20 mx:flex-col mx:gap-10">
                        <div className="flex flex-col gap-3">
                            <p className="text-white font-semibold text-lg pb-3">Navigation</p>
                            {["Features", "How it Works", "Testimonials", "FAQs"].map((item, i) => (
                                <p
                                    key={i}
                                    className="text-[#A1A1AA] text-sm hover:text-[#ff7a00] cursor-pointer transition-colors duration-300"
                                >
                                    {item}
                                </p>
                            ))}
                        </div>

                        <div className="flex flex-col gap-3">
                            <p className="text-white font-semibold text-lg pb-3">Help</p>
                            {["Customer Support", "Terms & Conditions", "Privacy Policy"].map((item, i) => (
                                <p
                                    key={i}
                                    className="text-[#A1A1AA] text-sm hover:text-[#00c853] cursor-pointer transition-colors duration-300"
                                >
                                    {item}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between mx:flex-col mx:gap-4 text-[#A1A1AA] text-sm relative z-10 border-t border-white/10">
                <p>© {new Date().getFullYear()} Next Trade FX — All Rights Reserved</p>
                <p className="flex flex-wrap gap-2">
                    <a href="#" className="text-[#ff7a00] hover:underline">Terms and Conditions</a> |
                    <a href="#" className="text-[#00c853] hover:underline">Privacy Policy</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
