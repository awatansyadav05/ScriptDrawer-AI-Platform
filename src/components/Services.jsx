import React, { useState } from 'react';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is ScriptDrawer AI?",
      answer: "ScriptDrawer AI is an AI video generator that uses artificial intelligence to turn your ideas into engaging videos, even if you're not a pro editor."
    },
    {
      question: "How long does it take to create a video with ScriptDrawer AI?",
      answer: "Videos can be generated in minutes, depending on the complexity and length of your content."
    },
    {
      question: "How to generate video with ScriptDrawer AI and how it works?",
      answer: "Simply input your script or idea, select a template, and let our AI handle the rest. The system automatically matches visuals, animations, and voiceovers to your content."
    },
    {
      question: "How much does ScriptDrawer AI cost?",
      answer: "We offer free platform."
    },
    {
      question: "Can I add my own text, images, and audio to Steve AI generated videos?",
      answer: "Yes! ScriptDrawer AI allows full customization where you can upload your own media and edit the AI-generated content."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="pb-16 pt-4 md:pt-5 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-gray-200 rounded-lg overflow-hidden shadow-sm"
            >
              <button
                className="w-full px-6 py-4 text-left font-medium text-lg bg-white hover:bg-gray-50 transition-colors duration-200 focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span className="float-right transform transition-transform duration-200">
                  {activeIndex === index ? '−' : '+'}
                </span>
              </button>
              
              {activeIndex === index && (
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;