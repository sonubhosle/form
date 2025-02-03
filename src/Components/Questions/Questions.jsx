import { useState } from "react";
import { BiChevronDown,BiChevronUp } from "react-icons/bi";
import { motion } from "framer-motion";
import "./Questions.css";

const Questions = () => {
  const faqs = [
    {
      question: "What is your return policy?",
      answer: "You can return any item within 30 days of purchase for a full refund.",
    },
    {
      question: "How long does shipping take?",
      answer: "Shipping usually takes 5-7 business days depending on your location.",
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we offer international shipping to selected countries.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and Apple Pay.",
    },
    {
      question: "How can I track my order?",
      answer: "Once your order ships, you'll receive an email with tracking information.",
    },
    {
      question: "Do you offer gift cards?",
      answer: "Yes, we offer digital gift cards that can be used online.",
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
