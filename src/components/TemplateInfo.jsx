const steps = [
  {
    id: 1,
    label: "Choose a template",
  },
  {
    id: 2,
    label: "Customize your resume",
  },
  {
    id: 3,
    label: "Download as PDF",
  },
];

const TemplateInfo = () => {
  return (
    <section className="w-full">
      {/* Heading Section */}
      <div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#092F4F]">
          Resume Templates
        </h1>

        <p className="mt-2 max-w-[780px] text-base sm:text-lg leading-7 text-[#63809F]">
          Resume templates are crafted following the precise guidelines that
          hiring managers look for. Use our AI-powered builder to create your
          resume in minutes, or edit manually. Get noticed and speed up your job
          search with templates that have been proven effective in the field.
        </p>
      </div>

      {/* Progress Steps */}
      <div className="mt-14 flex w-full justify-center">
        <ol className="flex w-full max-w-[650px] items-center justify-center">
          {steps.map((step, index) => {
            const isActive = step.id === 1;
            const isLast = index === steps.length - 1;

            return (
              <li
                key={step.id}
                className="flex flex-1 items-center last:flex-none"
              >
                {/* Step Content */}
                <div className="flex shrink-0 flex-col items-center gap-2 sm:flex-row sm:gap-2">
                  <span
                    className={`flex size-7 shrink-0 items-center justify-center rounded-full border-2 text-sm font-semibold transition-colors ${
                      isActive
                        ? "border-blue-600 bg-blue-600 text-white"
                        : "border-[#C5D5E5] bg-white text-[#7891AC]"
                    }`}
                  >
                    {step.id}
                  </span>

                  <span
                    className={`whitespace-nowrap text-center text-xs sm:text-sm md:text-base ${
                      isActive
                        ? "font-semibold text-[#183B5B]"
                        : "font-medium text-[#7891AC]"
                    }`}
                  >
                    {step.label}
                  </span>
                </div>

                {/* Connector Line */}
                {!isLast && (
                  <div className="mx-2 h-px min-w-3 flex-1 bg-[#C5D5E5] sm:mx-3" />
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default TemplateInfo;
