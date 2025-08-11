import React, { useState } from "react";
import { FaPlus, FaTimes } from "react-icons/fa";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const data = [
    {
      question: "What do I learn from Next Trade FX?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mattis nunc augue vel lacinia erat euismod ut. Sed eleifend tellus non tincidunt aliquet. Fusce aliquam mi felis.",
    },
    {
      question: "How long is the mentorship program?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mattis nunc augue vel lacinia erat euismod ut. Sed eleifend tellus non tincidunt aliquet. Fusce aliquam mi felis.",
    },
    {
      question: "Do you provide ongoing support?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mattis nunc augue vel lacinia erat euismod ut. Sed eleifend tellus non tincidunt aliquet. Fusce aliquam mi felis.",
    },
    {
      question: "How to start trading?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mattis nunc augue vel lacinia erat euismod ut. Sed eleifend tellus non tincidunt aliquet. Fusce aliquam mi felis.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-[#0D0F11] py-16 relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF7A00]/5 via-transparent to-[#00C853]/5"></div>

      {/* Heading */}
      <div className="flex flex-col gap-4 justify-center items-center relative z-10">
        <p className="text-[50px] mx:text-center mx:text-[38px] font-semibold unv text-transparent bg-clip-text bg-gradient-to-r from-[#FF7A00] to-[#00C853] leading-[61px]">
          Frequently Asked Questions
        </p>
        <p className="text-base mx:text-center font-normal leading-7 int text-[#A1A1AA]">
          Have a question not answered here? Contact us at{" "}
          <a
            href="mailto:support@loremipsum.com"
            className="text-[#00C853] hover:underline"
          >
            support@loremipsum.com
          </a>
        </p>
      </div>

      {/* Accordion */}
      <div className="max-w-[50rem] mx:max-w-[90%] mx-auto mt-10 flex flex-col gap-5 relative z-10">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-[#101214] rounded-xl border border-transparent hover:border-[#FF7A00]/50 shadow-md hover:shadow-[0_0_20px_rgba(255,122,0,0.3)] transition-all duration-300"
          >
            {/* Question */}
            <div
              className="flex justify-between items-center py-4 px-6 cursor-pointer select-none"
              onClick={() => toggleAccordion(index)}
            >
              <h3 className="text-lg font-semibold text-[#EAEAEA]">
                {item.question}
              </h3>
              <div className="text-xl">
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
                  ? "max-h-40 opacity-100 translate-y-0"
                  : "max-h-0 opacity-0 -translate-y-2"
              }`}
            >
              <p className="text-[#A1A1AA] text-base leading-7 px-6 pb-4">
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
