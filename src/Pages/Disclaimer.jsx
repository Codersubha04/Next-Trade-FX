import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { motion } from "framer-motion";
import { 
  FaExclamationCircle, 
  FaNetworkWired, 
  FaCogs, 
  FaChartLine, 
  FaStore, 
  FaMoneyBillWave, 
  FaShieldAlt, 
  FaFileContract, 
  FaInfoCircle, 
  FaPhoneAlt, 
  FaTelegram ,
  FaRegFileAlt
} from "react-icons/fa";

const sections = [
  {
    title: "Disclaimer",
    icon: <FaExclamationCircle className="text-[#FF7A00] w-7 h-7" />,
    content: `Introduction:
Welcome to NextTrade Technologies PVT Ltd, the bridge connecting Tradingview, Chartink, and other strategy builder platforms with brokers. Please carefully review this disclaimer before utilizing our services. By accessing or using our services, you acknowledge and agree to the terms outlined herein. If you do not agree with any part of this disclaimer, we kindly ask that you refrain from using our services.`,
  },
  {
    title: "Bridge Service",
  icon: <FaNetworkWired className="text-[#00C853] w-7 h-7" />, // ✅ replace FaBridge
    content: `NextTrade Technologies PVT Ltd offers a bridge service, facilitating seamless connectivity between Tradingview, Chartink, and other strategy builder platforms that provide webhook services. Through our service, users can establish a direct link between these platforms and their chosen broker. Our service empowers users to execute their own strategies on Tradingview and Chartink without any recommendations or suggestions from our end.`,
  },
  {
    title: "Technical Risks",
    icon: <FaCogs className="text-[#FFD700] w-7 h-7" />,
    content: `When using our algorithmic trading bridge/software, it's important to recognize the potential technical risks involved. These risks include software bugs, glitches, and network failures, which may impact the software's performance. Software bugs are unexpected errors or defects in the code that can affect functionality, while glitches are temporary malfunctions that may cause delays or inaccuracies in operation. Network failures can interrupt connectivity, making it difficult to access data or execute trades. Please be aware that NextTrade Technologies PVT Ltd cannot be held responsible for any losses resulting from these technical issues, as they are beyond our control.`,
  },
  {
    title: "Indicators",
    icon: <FaChartLine className="text-[#1E90FF] w-7 h-7" />,
    content: `At NextTrade Technologies PVT Ltd, we provide indicators completely free of charge to all our users. These indicators are intended for test and trial purposes only. It's important to note that we do not endorse or recommend any specific strategies or trading decisions made using these indicators. Additionally, we do not guarantee or claim any profits from using these strategies. Users are solely responsible for any profits or losses incurred while using these indicators, as well as their own trading decisions.`,
  },
  {
    title: "Indicator Store",
    icon: <FaStore className="text-[#FF4500] w-7 h-7" />,
    content: `Our Indicator Store page functions as a marketplace where paid users can list their strategies for sale. Users have the option to buy and sell strategies listed on this page after paying a specified listing fee. NextTrade Technologies PVT Ltd does not assume any responsibility for any profits or losses resulting from the use of strategies listed on the Indicator Store. It is solely the decision of the users. Communication regarding strategy transactions occurs directly between the seller and buyer, and NextTrade Technologies PVT Ltd does not intervene in any way.`,
  },
  {
    title: "No Financial Advice",
    icon: <FaMoneyBillWave className="text-[#00C853] w-7 h-7" />,
    content: `NextTrade Technologies PVT Ltd does not offer any financial advice, recommendations, or suggestions, either directly or indirectly, for buying or selling assets in the market. Our services are solely designed as a bridge service, facilitating seamless connections between platforms. Users are solely responsible for their trading decisions and must accept the outcomes.`,
  },
  {
    title: "No Liability",
    icon: <FaShieldAlt className="text-[#FFD700] w-7 h-7" />,
    content: `NextTrade Technologies PVT Ltd, along with its owners, employees, and affiliates, disclaims all liability for any financial losses, damages, or liabilities resulting from the use of any services available on our website. Users are encouraged to reach out to us at any time during our working hours for any doubts or clarifications. We are committed to providing transparent information to our users.`,
  },
  {
    title: "Trading Risk Disclosure",
    icon: <FaFileContract className="text-[#1E90FF] w-7 h-7" />,
    content: `Before engaging in trading activities, it's crucial to understand the associated risks. Trading financial instruments such as stocks, options, futures, and foreign exchange carries a high risk of financial loss. Market volatility, leverage, economic and political factors, technical issues, and past performance are key considerations. There are no guarantees of success in trading, and past performance is not indicative of future results. Traders should approach trading with caution, realistic expectations, and a disciplined mindset.`,
  },
  {
    title: "Acceptance of Terms",
    icon: <FaInfoCircle className="text-[#FF4500] w-7 h-7" />,
    content: `By using our website and services, you agree to accept and abide by the terms of this disclaimer. If you do not agree with any part of this disclaimer, you must refrain from using our services.`,
  },
  {
    title: "Update",
      icon: <FaRegFileAlt className="text-[#00C853] w-7 h-7" />, // ✅ fixed icon
    content: `In the event of updates, amendments, or changes to this document, they will be prominently posted here.`,
  },
 {
  title: "Contact Us",
  icon: <FaPhoneAlt className="text-[#FFD700] w-7 h-7" />,
  content: `If you need further information or have any questions regarding our site's disclaimer, please contact us via email at support@nexttrade.co.in  
Contact: +91 9075559971`,
  button: {
    text: "Go to Contact Us",
    link: "/contact" // yaha tumhara contact page ka route ya anchor link
  }
},
];

const Disclaimer = () => {
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
            Disclaimer{" "}
            <span className="bg-gradient-to-r from-[#FF7A00] to-[#00C853] bg-clip-text text-transparent">
              Notice
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
      <h2 className="text-2xl font-bold text-white">{section.title}</h2>
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

export default Disclaimer;
