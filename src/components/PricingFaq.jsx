const faqItems = [
  {
    question: "What can I do with the free plan?",
    answer:
      "With the free plan, you can create 1 resume and 1 cover letter, download unlimited PDFs, and use up to 10 AI credits per month. AI credits reset on the first day of each month.",
  },
  {
    question: "What are AI credits used for?",
    answer:
      "AI credits are used when you use our AI-powered document editor to improve your resume or cover letter. Each AI request uses 1 credit.",
  },
  {
    question: "Can I cancel my Pro subscription anytime?",
    answer:
      "Yes, you can cancel your subscription at any time. You will continue to have access until the end of your billing period.",
  },
  {
    question: "Is there a money-back guarantee?",
    answer:
      "Yes, we offer a 30-day no questions asked money-back guarantee. If you're not satisfied with your Pro subscription, contact us within 30 days for a full refund.",
  },
];

const PricingFaq = () => {
  return (
    <section
      aria-labelledby="pricing-faq-title"
      className="w-full py-8 sm:py-10 lg:py-12"
    >
      <div className="mx-auto w-full max-w-3xl">
        {/* Section heading */}
        <h2
          id="pricing-faq-title"
          className="mb-7 text-center text-lg font-semibold leading-7 tracking-tight text-slate-900 sm:mb-8 sm:text-xl"
        >
          Frequently Asked Questions
        </h2>

        {/* FAQ items */}
        <div className="space-y-6 sm:space-y-7">
          {faqItems.map((item) => (
            <article key={item.question} className="space-y-2">
              <h3 className="text-sm font-semibold leading-6 text-slate-900 sm:text-base">
                {item.question}
              </h3>

              <p className="text-sm font-normal leading-6 text-slate-500 sm:text-[15px] sm:leading-[1.65]">
                {item.answer}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingFaq;
