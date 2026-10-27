const Cta = () => {
  return (
    // Outer wrapper: Full width, no outside margins/paddings as requested
    <div className="w-full bg-white">
      {/* 
        Inner Container: 
        - Flexbox for side-by-side layout on desktop.
        - Flex-col on mobile for stacking.
        - Items-center ensures vertical alignment.
        - justify-between pushes text to the left and button to the right.
      */}
      <div className="flex flex-col sm:flex-row md:items-center justify-between gap-6 sm:gap-8 lg:py-10">
        {/* Left Side: Typography */}
        <div className="flex flex-col">
          <h2 className="text-[1.75rem] sm:text-3xl lg:text-[2.25rem] font-extrabold text-[#1E293B] leading-tight tracking-tight">
            Ready to dive in? <br />
            <span className="text-[#2563EB]">
              Let AI create your resume today.
            </span>
          </h2>
        </div>

        {/* Right Side: Button */}
        {/* self-start on mobile prevents button from stretching full width, md:self-auto aligns it normally on desktop */}
        <div className="self-start md:self-auto shrink-0">
          <button className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold text-base py-3 px-7 rounded-lg transition-colors duration-200 shadow-sm">
            Create my resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cta;
