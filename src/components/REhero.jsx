import { useState } from "react";

export default function REhero() {
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "Accounting",
    "Sales",
    "Engineering",
    "Medical",
    "Information Technology (IT)",
    "Education",
  ];

  return (
    <div className="w-full flex flex-col items-center bg-white text-center font-sans">
      {/* Top Badge */}
      <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#eff6ff] text-[#2563eb] rounded-full text-xs sm:text-sm font-medium mb-6 mix-blend-multiply border border-[#dbeafe]/50">
        <span>✨</span>
        <span>800+ Professional Examples</span>
      </div>

      {/* Main Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold text-[#0f2942] tracking-tight leading-tight max-w-4xl mb-4">
        Resume Examples That Get You Hired
      </h1>

      {/* Description Paragraphs */}
      <p className="text-sm sm:text-base md:text-[17px] text-[#475569] max-w-2xl leading-relaxed">
        Browse professionally crafted resume examples for every industry and
        career level.
      </p>
      <p className="text-sm sm:text-base md:text-[17px] text-[#475569] max-w-2xl leading-relaxed mb-8">
        Find inspiration and create your perfect resume in minutes.
      </p>

      {/* Search Bar Input */}
      <div className="w-full max-w-2xl px-4 mb-6">
        <div className="relative flex items-center">
          {/* Search Icon */}
          <svg
            className="absolute left-4 w-5 h-5 text-gray-400 pointer-events-none"
            xmlns="http://w3.org"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.601 10.601z"
            />
          </svg>

          <input
            type="text"
            placeholder="Search by job title or industry..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="input w-full pl-12 pr-4 py-3.5 bg-[#f1f3f9] text-gray-800 placeholder-gray-400 border-none rounded-md text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20 transition-all"
          />
        </div>
      </div>

      {/* Category Pills Group */}
      <div className="flex flex-wrap justify-center gap-2 max-w-3xl px-4">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className="btn btn-sm sm:btn-md bg-[#1e60f2] hover:bg-[#164ec7] text-white border-none rounded-lg text-xs sm:text-sm font-medium px-4 normal-case shadow-none transition-colors"
            onClick={() => setSearchQuery(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
