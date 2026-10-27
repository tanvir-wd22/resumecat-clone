import resumecatInterview from "../assets/resumecat-interview.svg";

const FreeTemplates = () => {
  return (
    <section className="w-full bg-white font-sans overflow-hidden">
      {/* 
        Container: 
        - Max-width for large screens to keep content centered.
        - Grid layout: 1 column on mobile/tablet, 2 columns on large screens.
        - Gap handles spacing between text and image on mobile.
      */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Left Column: Text Content */}
        <div className="flex flex-col items-start px-4 sm:px-6 lg:px-0 lg:pr-8">
          {/* Small Uppercase Label */}
          <span className="text-[#2563EB] font-bold text-sm tracking-wide uppercase mb-3">
            Free Resume Templates
          </span>

          {/* Main Heading */}
          <h1 className="text-2xl sm:text-4xl font-extrabold text-[#1E293B] leading-[1.15] mb-6">
            Make the Most of Your <br className="hidden sm:block" />
            <span className="text-[#2563EB]">First Impression</span>
          </h1>

          {/* CTA Button */}
          <button className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold text-base py-3 px-6 rounded-lg transition-colors duration-200 mb-8 shadow-sm">
            Create My Resume
          </button>

          {/* Paragraph 1 */}
          <p className="text-[#64748B] text-base leading-relaxed mb-6 max-w-xl">
            Six seconds. That’s the average time recruiters spend looking at
            your resume. Especially in those high-powered jobs where hundreds of
            people are applying.
          </p>

          {/* Paragraph 2 */}
          <p className="text-[#64748B] text-base leading-relaxed max-w-xl">
            ResumeCat provides the support you need to create, format, and
            prepare your resume like a professional, so you can make every one
            of those seconds count. From white space to columns to easy-to-read
            titles and sections our tools can ensure you can fit your talents
            and aptitudes into each section with precision. More importantly,
            it’s fast, easy, and helps prepare you for your new career.
          </p>
        </div>

        {/* Right Column: Illustration Space */}
        <div className="relative w-full h-full flex justify-center items-center px-4 sm:px-6 lg:px-0">
          {/* 
            This container maintains the exact aspect ratio of your image.
            Replace the <img> src with your actual imported SVG/Image.
          */}
          <div className="w-full max-w-[650px] aspect-square lg:aspect-[4/3.5] relative">
            <img
              src={resumecatInterview}
              alt="Resume Illustration"
              className="w-full h-full object-contain object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeTemplates;
