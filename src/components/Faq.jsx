const faqData = [
  {
    question: "Can I use ResumeCat for free?",
    answer:
      "Absolutely! ResumeCat has lots of different tools you can use for free.",
  },
  {
    question: "Can I customize my resume?",
    answer:
      "We have professionally built templates that are designed to adapt to your content.",
  },
  {
    question: "Can I download my resume as PDF?",
    answer:
      "Yes! After you complete your resume you will be able to download it as PDF with ease.",
  },
  {
    question: "How can I cancel my account?",
    answer:
      'After login, you can easily manage everything account related in your "Account Settings" page.',
  },
];

const Faq = () => {
  return (
    // Outer container background - matches the light gray/blue tint
    <div className="w-full bg-[#F8FAFC]">
      {/* 
        Inner container: 
        - Constrains max width
        - Handles all internal padding so it looks good without needing outside margins
        - rounded-xl for the soft corners seen in the image
      */}
      <div className="p-12 sm:p-16 rounded-xl bg-[#F8FAFC]">
        {/* Header Section */}
        <div className="border-b border-[#E2E8F0]">
          <h2 className="text-3xl sm:text-[2rem] font-bold text-[#1E293B] tracking-tight mb-2">
            Frequently asked questions
          </h2>
        </div>

        {/* FAQ List */}
        <div className="flex flex-col">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 py-8 ${
                // Add bottom border to all except the last item
                index !== faqData.length - 1 ? "border-b border-[#E2E8F0]" : ""
              }`}
            >
              {/* Question Column */}
              <h3 className="text-[#1E293B] font-semibold text-base sm:text-lg pr-4">
                {item.question}
              </h3>

              {/* Answer Column */}
              <p className="text-[#64748B] text-base leading-relaxed pr-4">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
