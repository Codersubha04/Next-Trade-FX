import React, { useState } from "react";
import { FaPlus, FaTimes } from "react-icons/fa";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const data = [
    {
      question: 'What does "X signals per month" mean?',
      answer:
        "A signal is one command to open or close a trade with NextTrade fx.\n\nFor example: With the Plus plan you can open and close 125 trades per month (combined) on as many accounts and as many strategies as you like.",
    },
    {
      question: "How does it work?",
      answer: `Very simple!\n\nFirst of all activate your NextTrade fx subscription of course. Then it works like this:\n\n1. Just choose a strategy/indicator you want to automate\n2. Use our AutoTradeGPT to transform it automatically into an auto trading robot (or manually)\n3. Create an alert in TradingView to send signals\n4. Install MetaTrader 4 and log into your trading account\n5. Drop our EA on the chart and activate live trading – That’s it!`,
    },
    {
      question: "Does it work with my broker?",
      answer: "Probably yes! If your broker offers MetaTrader 4 then yes.",
    },
    {
      question: "Do I need coding skills?",
      answer: "It can help, but it’s not needed.",
    },
    {
      question: "How many strategies/accounts can I automate?",
      answer:
        "You can automate as many strategies as you want on as many accounts as you want.",
    },
    {
      question: "What is the latency?",
      answer:
        "Depending on your location. But usually 1s second, maximum 3 seconds.",
    },
    {
      question: "I have more questions",
      answer: "Just send us a message over our live support chat.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-[#0D0F11] py-16 relative overflow-hidden mx:px-4 mx:py-14">
      {/* Subtle gradient background */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-[#FF7A00]/5 via-transparent to-[#00C853]/5"></div> */}

      {/* Heading */}
      <div className="flex flex-col gap-4 justify-center items-center relative z-10">
        <h2 className="text-[60px] md:text-[50px] font-semibold unv leading-tight text-[#e4e4e7] text-center drop-shadow-lg mx:text-[31px] mx:leading-[1.12]">
          <span className="text-[#FF7A00]">Frequently</span> Asked Questions
        </h2>

        <p className="text-base text-center font-normal leading-7 int text-[#A1A1AA] mx:max-w-[340px] mx:text-[14px] mx:leading-6">
          Have a question not answered here? Contact us at{" "}
          <a
            href="mailto:support@nextradete.co.in"
            className="text-[#00C853] font-semibold hover:text-[#FF7A00] transition-all duration-300 hover:underline hover:decoration-2"
          >
            support@nexttrade.co.in
          </a>
        </p>
      </div>

      {/* Accordion */}
      <div className="max-w-[50rem] mx:max-w-[340px] mx-auto mt-10 flex flex-col gap-5 relative z-10 mx:mt-8 mx:gap-3">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-[#101214] rounded-xl border border-transparent hover:border-[#FF7A00]/50 shadow-md hover:shadow-[0_0_20px_rgba(255,122,0,0.3)] transition-all duration-300 mx:rounded-[20px] mx:border-white/10"
          >
            {/* Question */}
            <div
              className="flex justify-between items-center py-4 px-6 cursor-pointer select-none mx:items-start mx:gap-3 mx:px-4 mx:py-4"
              onClick={() => toggleAccordion(index)}
            >
              <h3 className="text-lg font-semibold text-[#EAEAEA] mx:text-[15px] mx:leading-6">
                {item.question}
              </h3>
              <div className="text-xl mx:pt-0.5 mx:text-base">
                {activeIndex === index ? (
                  <FaTimes className="text-[#00C853] transition-transform duration-300 rotate-90" />
                ) : (
                  <FaPlus className="text-[#FF7A00] transition-transform duration-300 rotate-0" />
                )}
              </div>
            </div>

            {/* Answer */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                activeIndex === index
                  ? "max-h-80 opacity-100 translate-y-0"
                  : "max-h-0 opacity-0 -translate-y-2"
              }`}
            >
              <p className="text-[#A1A1AA] whitespace-pre-line text-base leading-7 px-6 pb-4 mx:px-4 mx:pb-4 mx:text-[14px] mx:leading-6">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
