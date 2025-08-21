"use client"
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

const FAQItem = ({ question, answer, isOpen, onToggle }) => {
  const answerRef = useRef(null);
  const iconRef = useRef(null);

  return (
    <div
      className="bg-gray-50 rounded-xl shadow-sm cursor-pointer mb-4 hover:shadow-md transition-all duration-300 w-full border border-gray-200"
      onClick={onToggle}
      tabIndex="0"
    >
      <div className="p-6 flex flex-col h-full">
        <div className="flex items-center justify-between">
          <div className="text-left text-gray-900 font-semibold text-lg pr-4">
            {question}
          </div>
          <div
            ref={iconRef}
            className={`transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-700"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </div>
        </div>
        <div
          ref={answerRef}
          className={`overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="text-gray-700 text-base leading-relaxed">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  // Track which item is open (accordion behavior)
  const [openIndex, setOpenIndex] = useState(null);
  // Measure closed height of the FAQ list to sync the right image height
  const listRef = useRef(null);
  const [closedHeight, setClosedHeight] = useState(null);

  // Measure height when all items are closed (on mount and resize)
  useEffect(() => {
    const measure = () => {
      if (!listRef.current) return;
      // Only measure when ALL items are closed
      if (openIndex === null) {
        const height = listRef.current.offsetHeight;
        setClosedHeight(height);
      }
    };

    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [openIndex]);

  const faqItems = [
    {
      question: "What services does Clarygen provide?",
      answer: "Clarygen offers comprehensive outsourcing solutions including financial management, IT consultancy, business process optimization, and 24/7 support services. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      question: "How does Clarygen ensure data security and confidentiality?",
      answer: "We implement industry-leading security protocols, encrypted data transmission, secure cloud infrastructure, and strict confidentiality agreements. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam."
    },
    {
      question: "What makes Clarygen different from other outsourcing companies?",
      answer: "Our 24/7 availability, personalized approach, cost-effective solutions, and deep industry expertise set us apart. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam, quis nostrud exercitation."
    },
    {
      question: "How quickly can Clarygen implement solutions for my business?",
      answer: "Implementation timelines vary based on project complexity, but most solutions can be deployed within 2-4 weeks. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam, quis nostrud exercitation ullamco."
    },
    {
      question: "What kind of ongoing support does Clarygen provide?",
      answer: "We offer comprehensive 24/7 support, regular performance reviews, continuous optimization, and dedicated account management. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam."
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header section */}
        <div className="text-left mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl">
            Find answers to common questions about our services, processes, and how we can help transform your business operations.
          </p>
        </div>
        
        {/* Content section */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-12">
          {/* FAQ items section */}
          <div className="w-full lg:w-1/2">
            <div ref={listRef} className="flex flex-col space-y-4">
              {faqItems.map((item, index) => (
                <FAQItem
                  key={index}
                  question={item.question}
                  answer={item.answer}
                  isOpen={openIndex === index}
                  onToggle={() =>
                    setOpenIndex((prev) => (prev === index ? null : index))
                  }
                />
              ))}
            </div>
          </div>

          
          {/* Image section */}
          <div className="w-full lg:w-1/2 lg:pl-8">
            <div
              className="relative w-full max-w-[500px] h-[550px] mx-auto lg:mx-0"
            >
              <Image
                src="/aboutus/faq-image.jpg"
                alt="Clarygen FAQ"
                width={500}
                height={400}
                className="object-cover h-full w-full shadow-lg"
                style={{ borderRadius: '36px' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;