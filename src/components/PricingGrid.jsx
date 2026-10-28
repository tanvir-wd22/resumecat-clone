import PricingCard from "./PricingCard";

const PricingGrid = () => {
  const pricingPlans = [
    {
      id: 1,
      name: "Free",
      description: "Perfect for getting started",
      price: 0,
      duration: "forever",
      buttonText: "Get started",
      features: [
        "1 Resume",
        "1 Cover letter",
        "10 AI credits / month",
        "Unlimited PDF downloads",
        "8 Resume templates",
        "Limited cloud storage",
      ],
    },
    {
      id: 2,
      name: "Pro",
      description: "For serious job seekers",
      price: 12,
      duration: "month",
      buttonText: "Get Pro",
      features: [
        "Unlimited Resumes",
        "Unlimited Cover letters",
        "Unlimited AI credits*",
        "Unlimited PDF downloads",
        "8 Resume templates",
        "Unlimited cloud storage",
        "Cancel any time",
        "30-day money-back guarantee",
      ],
      note: "*Unlimited subject to abuse guardrails.",
    },
    {
      id: 3,
      name: "Max",
      description: "For power users",
      price: 200,
      duration: "month",
      buttonText: "Get Max",
      features: [
        "Unlimited Resumes",
        "Unlimited Cover letters",
        "Unlimited AI credits*",
        "Unlimited PDF downloads",
        "8 Resume templates",
        "Unlimited cloud storage",
        "Cancel any time",
        "Access to Extra High Reasoning",
      ],
      note: "*Unlimited subject to abuse guardrails.",
    },
  ];

  return (
   

    <>
    {/* Section heading */}
        <div className="mb-10 text-center sm:mb-12 lg:mb-14"> 
          <p className="mb-2 text-sm font-semibold tracking-wide text-blue-600 uppercase">
            Resumecat
          </p>

          <h2 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            PricingGrid
          </h2>
        </div>

        {/* PricingGrid cards grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
    </>
  );
};

export default PricingGrid;
