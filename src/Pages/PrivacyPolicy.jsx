import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { motion } from "framer-motion";
import { 
  FaLock, 
  FaFileContract, 
  FaGlobe, 
  FaCog, 
  FaUserShield, 
  FaMoneyCheckAlt, 
  FaExclamationTriangle, 
  FaShieldAlt, 
  FaScroll, 
  FaInfoCircle, 
  FaBookOpen, 
  FaChartLine, 
  FaGavel, 
  FaCopyright 
} from "react-icons/fa";

const sections = [
  {
    title: "Last updated [May 27th, 2020]",
    icon: <FaFileContract className="text-[#FF7A00] w-7 h-7" />,
    content: `Our Privacy Policy forms part of, and must be read in conjunction with, website Terms and Conditions. We reserve the right to change this Privacy Policy at any time. We respect the privacy of our users and every person who visits our sites nexttrade.com. Here, NextTrade Technologies PVT Ltd (“we”, “us”, or “our”). We are committed to protecting your personal information and your right to privacy in accordance with the General Data Protection Regulation (GDPR). If you have any questions or concerns about our policy or our practices with regards to your personal information, please contact us at admin@nexttradetechnologies.com. When you visit our website nexttrade.com (“Site”), and use our services, you trust us with your personal information. We take your privacy very seriously. In this privacy notice, we describe our privacy policy. We seek to explain to you in the clearest way possible what information we collect, how we use it and what rights you have in relation to it. We hope you take some time to read through it carefully, as it is important. If there are any terms in this privacy policy that you do not agree with, please discontinue the use of our site and our services. This privacy policy applies to all information collected through our website, and/or any related services, sales, marketing or events (we refer to them collectively in this privacy policy as the “Site“).

ABOUT US
NextTrade Technologies PVT Ltd is a simple and technical Bot for Stock & Crypto Trading. NextTrade Technologies PVT Ltd supports Indian NSE, BSE, MCX, OPTION, FUTURE, BITCOIN, and CRYPTO. We are always working to make it more enhanced. We provide automation Trading for most famous brokers like Fyers, Aliceblue, Samco, Upstox, and Zerodha. You can trade any segment, like NSE, BSE, MCX, FUTURE, OPTION with fully and semi-automation. You can apply any indicator on Tradingview Chart & add alerts and enjoy automation trading. Please read this privacy policy carefully as it will help you make informed decisions about sharing your personal information with us.`,
  },
  {
    title: "1. WHAT INFORMATION DO WE COLLECT?",
    icon: <FaInfoCircle className="text-[#00C853] w-7 h-7" />,
    content: `The Personal Information you disclose to us: We collect personal information that you voluntarily provide to us when expressing an interest in obtaining information about us or our products and services, when participating in activities on the Site or otherwise contacting us. The personal information that we collect depends on the context of your interactions with us and the Site, the choices you make and the products and features you use. The personal information we collect can include the following:

- Name and Contact Data: We collect your first and last name, email address, postal address, phone number and other similar contact data.

Information automatically collected: We automatically collect certain information when you visit, use or navigate the Site. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Site and other technical information. If you access our site with your mobile device, we may automatically collect device information (such as your mobile device ID, model and manufacturer), operating system, version information and IP address. This information is primarily needed to maintain the security and operation of our Site, and for our internal analytics and reporting purposes. Like many businesses, we also collect information through cookies and similar technologies. You can find out more about this in our Cookie Policy.

Information collected from other Sources: We may obtain information about you from other sources, such as public databases, joint marketing partners, social media platforms (such as Facebook), as well as from other third parties. If you have chosen to subscribe to our newsletter, your first name, last name and e-mail address will be shared with our newsletter provider. This is to keep you updated with information and offers for marketing purposes.`,
  },
  {
    title: "2. HOW DO WE USE YOUR INFORMATION?",
    icon: <FaCog className="text-[#FFD700] w-7 h-7" />,
    content: `We use your personal information for these purposes in reliance on our legitimate business interests (“Business Purposes”), in order to enter into or perform a contract with you (“Contractual”), with your consent (“Consent”), and/or for compliance with our legal obligations (“Legal Reasons”). We indicate the specific processing grounds we rely on next to each purpose listed below:

- To send administrative information to you related to your account, our business purposes, and/or for legal reasons. We may use your personal information to send you product, service and new feature information and/or information about changes to our terms, conditions, and policies.
- Deliver targeted advertising to you for our Business Purposes and/or with your Consent.
- Request Feedback for our Business Purposes and/or with your Consent.
- To protect our Site for Business Purposes and/or Legal Reasons.
- To enable user-to-user communications with your consent.
- To enforce our terms, conditions and policies for our business purposes and as legally required.
- To respond to legal requests and prevent harm as legally required.
- For other Business Purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Site, products, services, marketing and your experience.`,
  },
  {
    title: "3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?",
    icon: <FaUserShield className="text-[#1E90FF] w-7 h-7" />,
    content: `We only share and disclose your information in the following situations:

- Compliance with Laws.
- Vital Interests and Legal Rights.
- Vendors, Consultants and Other Third-Party Service Providers.
- Business Transfers.
- Third-Party Advertisers.
- Affiliates.
- Business Partners.
- With your Consent.
- Other Users.`,
  },
  {
    title: "4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?",
    icon: <FaLock className="text-[#FFD700] w-7 h-7" />,
    content: `We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Policy.`,
  },
  {
    title: "6. WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?",
    icon: <FaGlobe className="text-[#00C853] w-7 h-7" />,
    content: `The Site may contain advertisements from third parties that are not affiliated with us and which may link to other websites, online services or mobile applications. We cannot guarantee the safety and privacy of data you provide to any third parties. Any data collected by third parties is not covered by this privacy policy. We are not responsible for the content or privacy and security practices and policies of any third parties, including other websites, services or applications that may be linked to or from the Site. You should review the policies of such third parties and contact them directly to respond to your questions.`,
  },
  {
    title: "7. HOW LONG DO WE KEEP YOUR INFORMATION?",
    icon: <FaBookOpen className="text-[#FF4500] w-7 h-7" />,
    content: `We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy policy, unless a longer retention period is required or permitted by law. When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize it, or, if this is not possible, securely store your personal information and isolate it from any further processing until deletion is possible.`,
  },
  {
    title: "8. HOW DO WE KEEP YOUR INFORMATION SAFE?",
    icon: <FaShieldAlt className="text-[#1E90FF] w-7 h-7" />,
    content: `We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure. Transmission of personal information to and from our Site is at your own risk.`,
  },
  {
    title: "9. DO WE COLLECT INFORMATION FROM MINORS?",
    icon: <FaUserShield className="text-[#FF6347] w-7 h-7" />,
    content: `We do not knowingly solicit data from or market to children under 16 years of age. By using the Site, you represent that you are at least 16 or that you are the parent or guardian of such a minor and consent to such minor dependent’s use of the Site. If we learn that personal information from users less than 16 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we have collected from children under age 16, please contact us at admin@nexttradetechnologies.com.`,
  },
  {
    title: "10. WHAT ARE YOUR PRIVACY RIGHTS?",
    icon: <FaScroll className="text-[#1E90FF] w-7 h-7" />,
    content: `You may at any time review or change the information in your account or terminate your account by contacting us using the contact information provided. Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, some information may be retained in our files to prevent fraud, troubleshoot problems, assist with investigations, enforce our Terms of Use and/or comply with legal requirements. Cookies and similar technologies: Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Site.`,
  },
  {
    title: "11. DO WE MAKE UPDATES TO THIS POLICY?",
    icon: <FaExclamationTriangle className="text-[#FF4500] w-7 h-7" />,
    content: `We may update this privacy policy from time to time. The updated version will be indicated by an updated “Revised” date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy policy, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy policy frequently.`,
  },
  {
    title: "12. DATA PROTECTION OFFICER",
    icon: <FaInfoCircle className="text-[#00C853] w-7 h-7" />,
    content: `We have appointed a Data Protection Officer (“DPO”) who is responsible for overseeing questions in relation to this privacy notice. If you have any questions about this privacy notice, including any requests to exercise your legal rights, please contact Data Protection Officer at admin@nexttradetechnologies.com.`,
  },
  {
    title: "13. HOW CAN YOU CONTACT US ABOUT THIS POLICY?",
    icon: <FaGavel className="text-[#FFD700] w-7 h-7" />,
    content: `If you have questions or comments about this policy, email us at support@nexttrade.co.in`,
  },
];

const PrivacyPolicy = () => {
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
            Privacy{" "}
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
                  <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                </div>
                <p className="text-[#A1A1AA] text-lg leading-relaxed whitespace-pre-line">
                  {section.content}
                </p>
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

export default PrivacyPolicy;
