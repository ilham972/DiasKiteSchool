"use client";
import React, { useState } from "react";

const faqs = [
  { question: "Question 1", answer: "Answer to question 1." },
  { question: "Question 2", answer: "Answer to question 2." },
  // Add more FAQs as needed
];

const FAQItem = ({ faq }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <div
        className="flex justify-between items-center p-5 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="font-semibold text-lg">{faq.question}</h3>
        <button
          className={`transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          {/* Use your arrow icon here. Example: */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="p-5">
          <p>{faq.answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQSection = () => {
  return (
    <div className="max-w-4xl mx-auto mt-28 px-10">
      <h2 className="text-2xl font-bold mb-5 text-center">FAQ</h2>
      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <FAQItem key={index} faq={faq} />
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
