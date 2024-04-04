import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; 

const FAQ = () => {
  const faqs = [
    {
      question: 'How do I manage my account?',
      answer: 'You can manage your account settings by clicking on your profile icon and selecting "Account Settings".',
    },
    {
      question: 'How do I use the platform?',
      answer: 'Our platform is designed to be user-friendly. You can start by browsing the available products or services, and when you are ready to make a purchase, simply add the item to your cart and proceed to checkout.',
    },
    {
      question: 'What is escrow?',
      answer: 'Escrow is a financial arrangement where a third party holds and regulates payment of the funds required for two parties involved in a given transaction. It helps make transactions more secure by keeping the payment in a secure escrow account which is only released when all of the terms of an agreement are met as overseen by the escrow company.',
    },
    {
      question: 'How does the payment process work?',
      answer: 'Once you have placed an order, you can choose your preferred payment method. After the payment is processed, the funds will be held in escrow until you confirm that you have received the product or service and are satisfied with it.',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">FAQs and Help Center</h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white shadow rounded-lg p-4">
            <h2 className="text-lg font-semibold cursor-pointer" onClick={() => toggleFAQ(index)}>
              {faq.question}
            </h2>
            <AnimatePresence>
              {activeIndex === index && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5 }} // Adjust the duration to slow down or speed up the animation
                  className="text-gray-600 mt-2"
                >
                  {faq.answer}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
