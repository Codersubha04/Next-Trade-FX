import React, { useState } from "react";
import arrow from "../assets/arrow.svg";
import { FaHamburger, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/Next-trade-technologies-logo-2.png";

const Header = () => {
    const [menu, setmenu] = useState(false);

    const toggleNavVisibility = () => setmenu(!menu);

    const menuItems = [
        { name: "About Us", path: "/about1" },
        { name: "Our Services", path: "/mentorship1" },
        { name: "Packages", path: "/freeforex1" },
        { name: "Contact Us", path: "/contact1" },
        { name: "Blog", path: "/wttvip1" },
    ];

    return (
        <div className="bg-black shadow-md shadow-[#00C896]/10">
            <header className="ffff">
                {/* Mobile Header */}
                <div className="hidden mx:bg-black w-full mx:fixed mx:flex mx:px-8 mx:py-2 z-[1] mx:justify-between">
                    <Link to="/">
                        <div className="w-44 pt-2">
                            <img
                                src={logo}
                                alt="Next Trade Logo"
                                className="transition-transform duration-300 hover:scale-105"
                            />
                        </div>
                    </Link>

                    {!menu ? (
                        <FaHamburger
                            className="text-[#FF8C42] w-10 h-10 cursor-pointer transition-transform duration-200 hover:scale-110"
                            onClick={toggleNavVisibility}
                        />
                    ) : (
                        <FaTimes
                            className="text-[#FF8C42] w-10 h-10 cursor-pointer transition-transform duration-200 hover:scale-110"
                            onClick={toggleNavVisibility}
                        />
                    )}
                </div>

                {/* Desktop & Mobile Menu */}
                <div className="flex mx:flex-col mx:gap-4 items-center px-16 py-4 justify-between">
                    <Link to="/" className="mx:hidden">
                        <div className="w-[6.5rem] pt-2">
                            <img
                                src={logo}
                                alt="Next Trade Logo"
                                className="transition-transform duration-300 hover:scale-105"
                            />
                        </div>
                    </Link>

                    {/* Mobile Dropdown */}
                    {menu && (
                        <div>
                            <div className="flex mx:justify-center mx:items-center mx:flex-col gap-[17px] mx:ml-0 mx:pt-12 ml-24">
                                {menuItems.map((item, i) => (
                                    <p
                                        key={i}
                                        className="text-gray-300 hover:text-[#00C896] hover:underline underline-offset-4 text-base mx:text-lg font-medium leading-6 transition-colors duration-200"
                                    >
                                        <Link to={item.path}>{item.name}</Link>
                                    </p>
                                ))}
                            </div>
                            <Link to="/wttbot">
                                <button className="bg-[#00C896] mt-4 text-white text-base font-medium leading-8 py-1 px-10 rounded-md hover:bg-[#FF8C42] hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300">
                                    Get Started
                                </button>
                            </Link>
                        </div>
                    )}

                    {/* Desktop Menu */}
                    <div className="flex mx:justify-center mx:hidden mx:items-center mx:flex-col gap-[17px] mx:ml-0 ml-24">
                        {menuItems.map((item, i) => (
                            <p
                                key={i}
                                className="text-gray-300 hover:text-[#00C896] hover:underline underline-offset-4 text-base mx:text-lg font-medium leading-6 transition-colors duration-200"
                            >
                                <Link to={item.path}>{item.name}</Link>
                            </p>
                        ))}
                    </div>

                    <Link to="/wttbot">
                       <button className="bg-gradient-to-r from-[#00C853] to-[#00e676] text-white px-6 py-2 rounded-md 
                         font-medium shadow-lg hover:shadow-[0_0_20px_#00C853] hover:scale-105 transition-all">
        Watch Showcase
      </button>
                    </Link>
                </div>
            </header>
        </div>
    );
};

export default Header;
