import { useState } from "react";
import { BiChevronDown,BiChevronUp } from "react-icons/bi";
import { motion } from "framer-motion";
import "./Questions.css";

const Questions = () => {
  const faqs = [
    {
      question: "What is the duration of the internship?",
      answer: "The internship duration is flexible, with programs ranging from 30 to 90 days, depending on your chosen package.",
    },
    {
      question: "Do I need prior experience?",
      answer: "No prior experience is required. Our program is designed to cater to freshers and individuals at all skill levels.",
    },
    {
      question: "Will I receive a certificate?",
      answer: "Yes, all participants receive a certificate upon successful completion of the internship.",
    },
    
   
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 width">
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <span>{faq.question}</span>
              <span>{openIndex === index ? <BiChevronUp size={20} /> : <BiChevronDown size={20} />}</span>
            </div>
            <motion.div
              className="faq-answer"
              initial={{ opacity: 0, height: 0 }}
              animate={openIndex === index ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <p>{faq.answer}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Questions;
