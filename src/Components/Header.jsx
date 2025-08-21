import React, { useState, useEffect } from "react";
import { FaHamburger, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import logo from "../assets/Next-trade-technologies-logo-2.png";

// Menu Items
const menuItems = [
  { name: "About Us", path: "/about1" },
  {
    name: "Our Services",
    submenu: [
      { name: "Next Trade Automation", path: "/automation" },
      { name: "Trading Strategy", path: "/strategy" },
      { name: "Trading Tools", path: "/tools" },
      { name: "Educations", path: "/education" },
    ],
  },
  { name: "Packages", path: "/freeforex1" },
  { name: "Contact Us", path: "/contact1" },
  { name: "Blog", path: "/wttvip1" },
];

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  const toggleNavVisibility = () => setMenu(!menu);

  // Scroll effect (hide header when scrolling down)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Only show header on Home
  if (location.pathname !== "/") return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
          className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/70 border-b border-white/10 shadow-lg shadow-[#FF7A00]/20"
        >
          <header className="flex items-center justify-between px-6 py-4 md:px-16">
            {/* Logo */}
            <Link to="/">
              <motion.div
                whileHover={{ scale: 1.08, rotate: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-[6.5rem] pt-1"
              >
                <img src={logo} alt="Next Trade Logo" />
              </motion.div>
            </Link>

            {/* Mobile Hamburger */}
            <div className="md:hidden">
              {!menu ? (
                <FaHamburger
                  className="text-[#FF8C42] w-8 h-8 cursor-pointer transition-transform duration-300 ease-in-out hover:rotate-90 hover:scale-110"
                  onClick={toggleNavVisibility}
                />
              ) : (
                <FaTimes
                  className="text-[#FF8C42] w-8 h-8 cursor-pointer transition-transform duration-300 ease-in-out hover:rotate-90 hover:scale-110"
                  onClick={toggleNavVisibility}
                />
              )}
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {menuItems.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -3, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="relative group"
                >
                  {!item.submenu ? (
                    <Link
                      to={item.path}
                      className="flex items-center gap-1 text-gray-200 hover:text-[#FF8C42] text-base font-medium transition-all duration-300 ease-in-out cursor-pointer"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <>
                      <div className="flex items-center gap-1 text-gray-200 hover:text-[#FF8C42] text-base font-medium transition-all duration-300 ease-in-out cursor-pointer">
                        {item.name}
                        <ChevronDown size={16} />
                      </div>

                      {/* Dropdown with framer-motion */}
                      <motion.ul
                        initial={{ opacity: 0, y: 15, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 15, scale: 0.95 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        className="absolute left-0 mt-3 backdrop-blur-xl bg-black/80 border border-white/10 rounded-xl 
                        shadow-lg min-w-[230px] py-3 px-2 z-50 invisible group-hover:visible group-hover:opacity-100 
                        opacity-0 group-hover:translate-y-0 translate-y-3 transition-all duration-300"
                      >
                        {item.submenu.map((sub, j) => (
                          <motion.li
                            key={j}
                            whileHover={{ x: 6 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <Link
                              to={sub.path}
                              className="block px-4 py-2 text-gray-300 
                              hover:text-[#FF8C42] 
                              transition-all duration-300 ease-in-out
                              hover:shadow-[0_0_10px_#FF8C42,0_0_20px_#FF6A00]"
                            >
                              {sub.name}
                            </Link>
                          </motion.li>
                        ))}
                      </motion.ul>
                    </>
                  )}
                </motion.div>
              ))}

              {/* Button */}
              <motion.div whileHover={{ scale: 1.08, y: -2 }}>
                <Link to="/wttbot">
                  <button
                    className="bg-gradient-to-r from-[#00C853] to-[#00E676] text-white px-6 py-2 rounded-md 
                    font-medium shadow-lg transition-all duration-500 ease-in-out 
                    hover:shadow-[0_0_25px_#FF8C42] hover:from-[#FF8C42] hover:to-[#FF6A00]"
                  >
                    Watch Showcase
                  </button>
                </Link>
              </motion.div>
            </div>
          </header>

          {/* Mobile Dropdown */}
          {menu && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-black/90 backdrop-blur-md w-full px-6 py-6 flex flex-col items-start gap-4 border-t border-white/10"
            >
              {menuItems.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 5, scale: 1.04 }}
                  transition={{ type: "spring", stiffness: 250 }}
                  className="w-full"
                >
                  {!item.submenu ? (
                    <Link
                      to={item.path}
                      className="block text-gray-200 hover:text-[#FF8C42] text-base font-medium transition-all duration-300 ease-in-out"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <details className="w-full">
                      <summary className="cursor-pointer text-gray-200 hover:text-[#FF8C42] flex items-center justify-between">
                        {item.name}
                        <ChevronDown size={16} />
                      </summary>
                      <ul className="ml-4 mt-2 space-y-2">
                        {item.submenu.map((sub, j) => (
                          <li key={j}>
                            <Link
                              to={sub.path}
                              className="block text-gray-400 hover:text-[#FF8C42] transition-all duration-300"
                            >
                              {sub.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </details>
                  )}
                </motion.div>
              ))}
              <motion.div whileHover={{ scale: 1.06, y: -2 }}>
                <Link to="/wttbot1">
                  <button
                    className="bg-[#00C896] mt-4 text-white text-base font-medium py-2 px-10 rounded-md 
                    transition-all duration-500 ease-in-out hover:bg-[#FF8C42] hover:shadow-lg hover:shadow-orange-500/30"
                  >
                    Get Started
                  </button>
                </Link>
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Header;
