
import { useState } from "react";
import { ChevronDown, ChevronUp, Plus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const faqData = [
  {
    id: 1,
    question: "How to Subscribe to an IPO?",
    answer: [
      "Step 1: Login to your respective service provider.",
      "Step 2: Click on the IPO button.",
      "Step 3: Select the IPO you want to bid and enter the relevant details.",
      "Step4: Your subscription will be completed once you make the payment or give permission."
    ],
    isExpanded: true
  },
  {
    id: 2,
    question: "Should I buy an IPO first day?",
    answer: ["This depends on various factors including market conditions, company fundamentals, and your investment strategy."]
  },
  {
    id: 3,
    question: "How do you know if an IPO is good?",
    answer: ["Research the company's financials, business model, market position, and growth prospects before making a decision."]
  },
  {
    id: 4,
    question: "How to check IPO start date?",
    answer: ["You can check IPO start dates on official stock exchange websites, company announcements, or financial news platforms."]
  },
  {
    id: 5,
    question: "What is issue size?",
    answer: ["Issue size refers to the total value of shares being offered to the public in the IPO."]
  },
  {
    id: 6,
    question: "How many shares in a lot?",
    answer: ["The number of shares per lot varies by company and is specified in the IPO prospectus."]
  },
  {
    id: 7,
    question: "How is the lot size calculated?",
    answer: ["Lot size is determined by the company and SEBI regulations, typically to make investment accessible to retail investors."]
  },
  {
    id: 8,
    question: "Who decides the IPO price band?",
    answer: ["The price band is decided by the company in consultation with merchant bankers and book running lead managers."]
  },
  {
    id: 9,
    question: "What is IPO GMP?",
    answer: ["GMP stands for Grey Market Premium - the premium at which IPO shares are trading before they are officially listed."]
  },
  {
    id: 10,
    question: "How many lots should I apply for IPO?",
    answer: ["This depends on your investment capacity, risk tolerance, and the specific IPO allocation rules."]
  }
];

export const FAQSection = () => {
  const [expandedItems, setExpandedItems] = useState<number[]>([1]);

  const toggleExpanded = (id: number) => {
    setExpandedItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Frequently Asked Questions?</h2>
        <p className="text-gray-600">Find answers to common questions that come in your mind related to IPO.</p>
      </div>
      
      <div className="space-y-4">
        {faqData.map((item) => {
          const isExpanded = expandedItems.includes(item.id);
          
          return (
            <Card key={item.id} className="border border-gray-200 hover:shadow-md transition-shadow">
              <CardContent className="p-0">
                <button
                  onClick={() => toggleExpanded(item.id)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="font-semibold text-gray-900 text-lg pr-4">{item.question}</h3>
                  <div className="flex-shrink-0">
                    {isExpanded ? (
                      <ChevronUp className="w-6 h-6 text-blue-600" />
                    ) : (
                      <Plus className="w-6 h-6 text-blue-600" />
                    )}
                  </div>
                </button>
                
                {isExpanded && (
                  <div className="px-6 pb-6">
                    <div className="pt-4 border-t border-gray-100">
                      {item.answer.map((line, index) => (
                        <p key={index} className="text-gray-700 mb-2 last:mb-0">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
