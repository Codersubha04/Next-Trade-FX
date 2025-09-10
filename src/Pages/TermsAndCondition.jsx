import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { motion } from "framer-motion";
import {
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
    FaLock,      
  FaCopyright      
} from "react-icons/fa";

const sections = [
  {
    title: "I. INTRODUCTION",
    icon: <FaFileContract className="text-[#FF7A00] w-7 h-7" />,
    content: `www.nexttradetechnologies.com (“we,” “us,” or “our”) welcomes you. We offer you access to our product and services through our “Website” subject to the following Terms of Service, which may be updated by us from time to time with or without notice to you. By accessing and using this Website, you acknowledge that you have read, understood and agree to be lawfully bound by these terms and conditions and our Privacy Policy, which are hereby incorporated by reference (collectively, this “Agreement”). If you do not agree with any of these terms, please do not use the Website.`,
  },
  {
    title: "II. DEFINITIONS",
    icon: <FaGlobe className="text-[#00C853] w-7 h-7" />,
    content: `• “Agreement” denotes this Terms and Conditions and the Privacy Policy.\n• “Vehicle” means any vehicle described on our website.\n• “Service” or “Services” denotes any service offered from our Website.\n• “User”, “You” and “your” denotes the person accessing the website.\n• “We”, “us” and “our” are references to NextTrade Technologies PVT Ltd.\n• “Website” means "https://www.nexttradetechnologies.com" and any affiliates.`,
  },
  {
    title: "III. INTERPRETATION",
    icon: <FaCog className="text-[#FFD700] w-7 h-7" />,
    content: `• All references to the singular include the plural and vice versa and the word "includes" should be construed as "without limitation".\n• Words used herein regardless of the number and gender specifically used, shall be deemed and construed to include any other number, singular or plural, and any other gender, masculine, feminine or neuter, as the context requires.\n• Reference to any statute, ordinance or other law includes all regulations and other instruments and all consolidations, amendments, re-enactments or replacements for the time being in force.\n• All headings, bold typing and italics (if any) have been inserted for convenience of reference only and do not define, limit, or affect the meaning or interpretation of the terms of this Agreement.`,
  },
  {
    title: "IV. INTRODUCTION AND SCOPE",
    icon: <FaUserShield className="text-[#1E90FF] w-7 h-7" />,
    content: `• Scope: These Terms govern your use of the Website and the Services. Except as otherwise specified, these Terms do not apply to Third-Party Products or Services, which are governed by their own terms of service.\n• Eligibility: Certain Service of the Website is not available to users under the age of 16 or to any users suspended or removed from the system by us for any reason.\n• Electronic Communication: When you use this Website or send e-mails and other electronic communications from your desktop or mobile device to us, you are communicating with us electronically. By sending, you agree to receive a reply communications from us electronically in the same format and you can keep copies of these communications for your records.`,
  },
  {
    title: "V. SERVICES",
    icon: <FaChartLine className="text-[#FF4500] w-7 h-7" />,
    content: `NextTrade Technologies PVT Ltd is a simple and technical Bot for Stock & Crypto Trading. NextTrade Technologies PVT Ltd supports Indian NSE, BSE, MCX, OPTION, FUTURE, BITCOIN, and CRYPTO. We are always working to make it more enhanced. We provide automation trading for most famous brokers like Fyers, Aliceblue, Samco, Upstox, and Zerodha. You can trade any segment, like NSE, BSE, MCX, FUTURE, OPTION with fully and semi-automation. You can apply any indicator on Tradingview Chart & add alerts and enjoy automation trading.`,
  },
  {
    title: "VI. MODIFICATIONS TO THE SERVICE",
    icon: <FaExclamationTriangle className="text-[#FF6347] w-7 h-7" />,
    content: `We reserve the right, in our discretion, to change, modify, add to, or remove portions of the Terms (collectively, “Changes”), at any time. We may notify you of changes by sending an email to the address identified in your Account or by posting a revised version of the Terms incorporating the changes to its Website.`,
  },
  {
    title: "VII. GEOGRAPHIC RESTRICTION",
    icon: <FaGlobe className="text-[#00C853] w-7 h-7" />,
    content: `We reserve the right to limit the usage or supply of any product or service to any person, geographic region or jurisdiction. We may use this right as per the necessity. We reserve the right to suspend any Service at any time. Any offer to provide any Product or Service made on this Website is invalid where banned.`,
  },
  {
    title: "VIII. USER RESPONSIBILITIES",
    icon: <FaShieldAlt className="text-[#1E90FF] w-7 h-7" />,
    content: `• You shall use the Service and Website for a lawful purpose and comply with all the applicable laws while using the Website;\n• You shall not upload any content on the website that is defamatory, infringes any trademark, copyright or any proprietary rights of any person or affect any one’s privacy, contain violence or hate speech, including any sensitive information about any person.\n• You shall not use or access the Website for collecting any market research for some competing business;\n• You shall not misrepresent or personate any person or entity for any false or illegal purpose;\n• You shall not use any virus, hacking tool for interfering in the operation of the Website or data and files of the Website;\n• You will not use any device, scraper or any automated thing to access the Website for any purpose without taking permission from us.\n• You will inform us about anything inappropriate or you can inform us if you find something illegal in the website;\n• You will not interfere with or try to interrupt the proper operation of the Website through the use of any virus, device, information collection or transmission mechanism, software or routine, or access or try to gain access to any data, files, or passwords connected to the Website through hacking, password or data mining, or any other means;\n• Users must not use the NextTrade Technologies PVT Ltd Website for illegal, unlawful or prohibited purposes. This includes sending or posting junk e-mail or spam, publishing misleading, defamatory, indecent, obscene or advertising material, or send viruses and worms.\n• Users must not impersonate any other person or entity or use a false name or a name that they have no authority to use.\n• You will not cover, obscure, block, or in any way interfere with any advertisements and/or safety features (e.g., report abuse button) on the Website;\n• You will not take any action that levies or may levy (in our sole decision) an unreasonable or unreasonably big load on our technical arrangement; and\n• You will let us know about unsuitable content of which you become aware. If you discover something that infringes any law, please let us know, and we’ll review it. We reserve the right, in our sole and absolute discretion, to deny you access to the Website or any service, or any portion of the Website or service, without notice, and to remove any content.`,
  },
   {
    title: "IX. SUBSCRIPTION PLAN AND PAYMENT",
    icon: <FaMoneyCheckAlt className="text-[#00C853] w-7 h-7" />,
    content: `• Any order for subscribing any Subscription plan by the User available on the Website is between User and NextTrade Technologies PVT Ltd. User agree to take particular care when providing us with its details and warrant that these details are accurate and complete at the time of ordering.\n• SUBSCRIPTION CHARGES: It is agreed by the user that:\n• The User shall pay the required subscription fee to us as per the Subscription plan available on the Website.\n• Subscription Payment: Payment mode shall be:\n– Online: Credit Cards and Debit cards;\n• Any order for subscribing to any Subscription plan that you place with us is subject to acceptance by us. When you place your order online we will send you an email to confirm that we have received it.\n• We may refuse or be unable to process your order/subscription if:\n– Your card does not give authorization for the payment of purchase price.\n– You do not meet the eligibility to order criteria set out above.\n• The user can cancel the subscription of any service anytime through contacting us.\n• No refund shall be applicable on the paid service. For any issue you can contact us through email: admin@nexttradetechnologies.com\n• We take customer feedback very seriously and use it to constantly improve our products and quality of service.`,
  },
  {
    title: "X. GENERAL CONDITIONS",
    icon: <FaGavel className="text-[#FFD700] w-7 h-7" />,
    content: `• We do not guarantee the accuracy, completeness, validity, or timeliness of information listed by us.\n• We make material changes to these terms and conditions from time to time, we may notify you either by prominently posting a notice of such changes or via email communication.\n• The website is licensed to you on a limited, non-exclusive, non-transferrable, non-sub-licensable basis, solely to be used in connection with the Service for your private, personal, non-commercial use, subject to all the terms and conditions of this Agreement as they are applicable to the Service.\n• You further acknowledge and agree that we have no obligation whatsoever to furnish any maintenance and support services with respect to the website.`,
  },
  {
    title: "XI. RELEASE",
    icon: <FaScroll className="text-[#1E90FF] w-7 h-7" />,
    content: `You release us and our successors from all losses, damages, rights, and demands and actions of any kind, including personal injuries, death, and property damage, that are directly or indirectly related to or arising from your use of the Services (collectively, “Claims”).`,
  },
  {
    title: "XII. EXCLUSION OF LIABILITY",
    icon: <FaExclamationTriangle className="text-[#FF4500] w-7 h-7" />,
    content: `You understand and agree that we (a) do not guarantee the accuracy, completeness, validity, or timeliness of information listed by us or provided by us or any third parties; and (b) shall not be responsible for any materials posted by us or provided by us or any third party. You shall use your own judgment, caution, and common sense in evaluating any prospective methods or offers and any information provided by us or any third party. Further, we shall not be liable for direct, indirect consequential or any other form of loss or damage that may be suffered by a user through the use of the www.nexttradetechnologies.com Website including loss of data or information or any kind of financial or physical loss or damage. In no event shall NextTrade Technologies PVT Ltd, nor its Owners, directors, employees, partners, agents, suppliers, or affiliates, be accountable for any indirect, incidental, special, eventful or exemplary costs, including without limitation, loss of proceeds, figures, usage, goodwill, or other intangible losses, consequential from (i) your use or access of or failure to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content attained from the Service; and (iv) unlawful access, use or alteration of your transmissions or content, whether or not based on guarantee, agreement, domestic wrong (including carelessness) or any other lawful concept, whether or not we've been aware of the possibility of such damage, and even if a cure set forth herein is originated to have futile of its important purpose.`,
  },
    {
    title: "XIII. NO RESPONSIBILITY",
    icon: <FaUserShield className="text-[#FF6347] w-7 h-7" />,
    content: `We are not responsible to you for:\n• any reliance that you may place on any material or commentary posted on our website. Please note that nothing contained in our website or the material published on it is intended to amount to advice on which you should rely; or\n• any losses you suffer because the information you put into our website is inaccurate or incomplete; or\n• any losses you suffer if the information you put into our website is accurate but the Service provider's website has not accurately reflected that information because its system is not working correctly; or\n• any losses you suffer if you misrepresent any fact which may influence the Service provider’s decision to accept the risk or the terms offered; or\n• any losses you suffer because you cannot use our website at any time; or\n• any errors in or omissions from our website; or\n• any unauthorised access or loss of personal information that is beyond our control.`,
  },
  {
    title: "XIV. THIRD PARTY LINKS",
    icon: <FaGlobe className="text-[#00C853] w-7 h-7" />,
    content: `The Website may comprise links to external or third-party Websites (“External Sites”). These links are provided exclusively as ease to you and not as an authorization by us of the content on such External Sites. The content of such External Sites is created and used by others. You can communicate with the site administrator of those External Sites. We are not accountable for the content provided in the link of any External Sites and do not provide any representations about the content or correctness of the information on such External Sites. You should take safety measure(s) when you are downloading files from all these Websites to safeguard your computer from viruses and other critical programs. If you agree to access linked External Sites, you do so at your own risk.`,
  },
  {
    title: "XV. PERSONAL INFORMATION AND PRIVACY POLICY",
    icon: <FaLock className="text-[#FFD700] w-7 h-7" />,
    content: `By accessing or using this Website, you approve us to use, store or otherwise process your personal information as per our Privacy Policy.`,
  },
  {
    title: "XVI. ERRORS, INACCURACIES AND OMISSIONS",
    icon: <FaExclamationTriangle className="text-[#FF4500] w-7 h-7" />,
    content: `Every effort has been taken to ensure that the information offered on this Website is accurate and error-free. We apologise for any errors or omissions that may have occurred. We cannot give you any warranty that usage of the Website will be error-free or fit for purpose, timely, that defects will be amended, or that the site or the server that makes it available are free of viruses or bugs or signifies the full functionality, accuracy, reliability of the Website and we do not make any warranty whatsoever, whether express or implied, relating to fitness for purpose, or accuracy.`,
  },
  {
    title: "XVII. DISCLAIMER OF WARRANTIES; LIMITATION OF LIABILITY",
    icon: <FaFileContract className="text-[#1E90FF] w-7 h-7" />,
    content: `THE WEBSITE AND THE SERVICE ARE PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS WITHOUT ANY WARRANTIES OF ANY KIND, INCLUDING THAT THE WEBSITE WILL OPERATE ERROR-FREE OR THAT THE WEBSITE, ITS SERVERS OR ITS CONTENT OR SERVICE ARE FREE OF COMPUTER VIRUSES OR SIMILAR CONTAMINATION OR DESTRUCTIVE FEATURES. WE DISCLAIM ALL LICENSES OR WARRANTIES, INCLUDING, BUT NOT LIMITED TO, LICENSES OR WARRANTIES OF TITLE, MERCHANTABILITY, NON-VIOLATION OF THIRD PARTIES’ RIGHTS, AND FITNESS FOR PARTICULAR PURPOSE AND ANY WARRANTIES ARISING FROM A MATTER OF DEALING, COURSE OF PERFORMANCE, OR USAGE OF TRADE. IN RELATION WITH ANY WARRANTY, CONTRACT, OR COMMON LAW TORT CLAIMS: (I) WE SHALL NOT BE LIABLE FOR ANY UNINTENDED, INCIDENTAL, OR SUBSTANTIAL DAMAGES, LOST PROFITS, OR DAMAGES RESULTING FROM LOST DATA OR BUSINESS STOPPAGE RESULTING FROM THE USE OR INABILITY TO ACCESS AND USE THE WEBSITE OR THE CONTENT, EVEN IF WE HAVE BEEN RECOMMENDED OF THE POSSIBILITY OF SUCH DAMAGES. THE WEBSITE MAY COMPRISE TECHNICAL INCORRECTNESS OR TYPOGRAPHICAL ERRORS OR OMISSIONS. UNLESS REQUIRED BY APPLICABLE LAWS, WE ARE NOT ACCOUNTABLE FOR ANY SUCH TYPOGRAPHICAL, TECHNICAL, OR PRICING ERRORS RECORDED ON THE WEBSITE. THE WEBSITE MAY CONTAIN INFORMATION ON CERTAIN SERVICES, NOT ALL OF WHICH ARE AVAILABLE IN EVERY LOCATION. A REFERENCE TO A SERVICE ON THE WEBSITES DOES NOT SUGGEST THAT SUCH SERVICE IS OR WILL BE ACCESSIBLE IN YOUR LOCATION. WE RESERVE THE RIGHT TO DO CHANGES, CORRECTIONS, AND/OR IMPROVEMENTS TO THE WEBSITE AT ANY TIME WITHOUT NOTICE.`,
  },
  {
    title: "XVIII. COPYRIGHT AND TRADEMARK",
    icon: <FaCopyright className="text-[#00BFFF] w-7 h-7" />,
    content: `The Website contains material, such as software, text, graphics, images, designs, sound recordings, audiovisual works, and other material provided by or on behalf of us (collectively referred to as the “Content”). The Content may be possessed by us or third parties. Unauthorized use of the Content may infringe copyright, trademark, and other laws. You have no right to use the content, and you will not take any Content except as allowed under this Agreement. No other use is allowed without prior written consent from us. You must recollect all copyright and other proprietary notices contained in the original Content on any copy you make of the Content. You may not transfer, provide license or sub-license, sell, or modify the Content or reproduce, display, publicly perform, make a derivative version of, distribute, or otherwise use the Content in any way for any public or commercial purpose. The use or posting of the Content on any other Website or in a networked computer environment for any purpose is expressly prohibited. If you infringe any part of this Agreement, your permission to access and/or use the Content and the Website automatically terminates and you must immediately destroy any copies you have made of the Content. Our trademarks, service marks, and logos used and displayed on the Website are registered and unregistered trademarks or service marks of us. Other company, product, and service names located on the Website may be trademarks or service marks owned by others (the “Third-Party Trademarks,” and, collectively with us, the “Trademarks”). Nothing on the Website should be construed as granting, by implication, estoppel, or otherwise, any license or right to use the Trademarks, without our prior written permission specific for each such use. None of the Content may be retransmitted without our express, written consent for each and every instance.`,
  },
  {
    title: "XIX. INDEMNIFICATION",
    icon: <FaFileContract className="text-[#FF7A00] w-7 h-7" />,
    content: `You agree to defend, indemnify, and hold us and our officers, directors, employees, successors, licensees harmless from and against any claims, actions, or demands, including, without limitation, reasonable legal and accounting fees, arising or resulting from your breach of this Agreement or your misuse of the Content or the Website. We shall provide notice to you of any such claim, suit, or proceeding and shall assist you, at your expense, in defending any such claim, suit, or proceeding. We reserve the right, at your expense, to assume the exclusive defense and control of any matter that is subject to indemnification under this section. In such case, you agree to cooperate with any reasonable requests assisting our defense of such matter.`,
  },
  {
    title: "XX. MISCELLANEOUS",
    icon: <FaCog className="text-[#FFD700] w-7 h-7" />,
    content: `SEVERABILITY If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that the Terms will otherwise remain in full force and effect and enforceable.\nTERMINATION Term. The Services will be provided to you can be cancelled or terminated by us. You can terminate our services by contacting us at our email: admin@nexttradetechnologies.com. We may terminate these Services at any time, with or without cause, upon written notice. We will have no liability to you or any third party because of such termination. Termination of these Terms will terminate all of your Services subscriptions.\nEffect of Termination. Upon termination of these Terms for any reason, or cancellation or expiration of your Services: (a) We will cease providing the Services; (b) you will not be entitled to any refunds or usage fees, or any other fees, pro-rata or otherwise; (c) any fees you owe to us will immediately become due and payable in full, and (d) we may delete your archived data within 30 days. All sections of the Terms that expressly provide for survival, or by their nature should survive, will survive termination of the Terms, including, without limitation, indemnification, warranty disclaimers, and limitations of liability.\nENTIRE AGREEMENT This Agreement constitutes the entire agreement between the parties hereto with respect to the subject matter contained in this Agreement.\nGOVERNING LAW AND JUDICIAL RECOURSE The terms herein will be governed by and construed in accordance with the law of India without giving effect to any principles of conflicts of law. The courts of India shall have exclusive jurisdiction over any dispute arising from the use of the Website.\nFORCE MAJEURE We will have no liability to you, your users, or any third party for any failure to perform our or its obligations under these Terms in the event that such non-performance arises as a result of the occurrence of an event beyond the reasonable control of us, including, without limitation, an act of war or terrorism, natural disaster, failure of electricity supply, riot, civil disorder, or civil commotion or other force majeure event.\nASSIGNMENT We shall have the right to assign/transfer this agreement to any third party including its holding company, subsidiaries, affiliates, associates and group companies, without any consent of the User.\nCONTACT INFORMATION If you have any questions about these Terms, please contact us at  support@nexttrade.co.in`,
  },
];

const TermsAndCondition = () => {
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
            ></div>
          ))}
        </div>

        {/* Header */}
        <div className="relative flex justify-center items-center text-center mt-5 mb-12">
          <h1 className="text-white text-[64px] font-bold drop-shadow-[0_0_20px_rgba(0,0,0,0.8)]">
            Terms &{" "}
            <span className="bg-gradient-to-r from-[#FF7A00] to-[#00C853] bg-clip-text text-transparent">
              Conditions
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

export default TermsAndCondition;
