import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

// Swiper's own styles (required, otherwise the slider will look broken)
import "swiper/css";
import "swiper/css/navigation";

import resumeLeft from "../assets/resumeLeft.webp";
import resumeCenter from "../assets/resumeCenter.jpg";
import resumeRight from "../assets/resumeRight.webp";

// Template information
const templates = [
  { id: 1, name: "Modern", image: resumeLeft },
  { id: 2, name: "ATS Optimized", image: resumeLeft },
  { id: 3, name: "Attractive", image: resumeCenter },
  { id: 4, name: "Corporate", image: resumeRight },
  { id: 5, name: "Clean", image: resumeRight },
];

// How many slides to show at each screen width (these are min-widths).
// Change the numbers here to change the layout. Nothing else needs to move.
const breakpoints = {
  0: { slidesPerView: 1.2, spaceBetween: 16 }, // phones (1.2 = peek at the next card)
  640: { slidesPerView: 2, spaceBetween: 20 }, // sm
  768: { slidesPerView: 3, spaceBetween: 24 }, // md
  1024: { slidesPerView: 4, spaceBetween: 24 }, // lg and up
};

// Shared style for both arrow buttons.
// Swiper adds the class "swiper-button-disabled" at the start/end of the list.
const arrowButton =
  "absolute top-[140px] z-20 -translate-y-1/2 rounded-full bg-white p-2 text-slate-500 shadow-lg transition hover:bg-slate-100 sm:p-3 " +
  "[&.swiper-button-disabled]:cursor-not-allowed [&.swiper-button-disabled]:opacity-40";

const Carousel = () => {
  // Which template is selected (3 is selected at the start, like the original)
  const [selectedId, setSelectedId] = useState(3);

  return (
    <section className="bg-white">
      {/* Section Heading */}
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-600 md:text-base">
          Resume Templates
        </p>

        <h2 className="mt-3 text-3xl font-bold text-[#102a43] sm:text-4xl">
          Choose Your Perfect Template
        </h2>
      </div>

      {/* Carousel */}
      <div className="relative mt-14 md:mt-16">
        {/* Previous Button (placed inside the carousel so it never causes sideways scrolling) */}
        <button
          type="button"
          aria-label="Previous templates"
          className={`templates-prev left-2 ${arrowButton}`}
        >
          <IoChevronBack className="text-xl sm:text-2xl" />
        </button>

        <Swiper
          modules={[Navigation, A11y]}
          navigation={{
            prevEl: ".templates-prev",
            nextEl: ".templates-next",
          }}
          breakpoints={breakpoints}
          grabCursor={true}
        >
          {templates.map((template) => {
            const isSelected = template.id === selectedId;

            return (
              <SwiperSlide key={template.id}>
                {/* Image Container */}
                <div className="relative flex h-[280px] items-center justify-center rounded-md bg-slate-100 p-4">
                  {/* Clicking the resume selects it */}
                  <button
                    type="button"
                    onClick={() => setSelectedId(template.id)}
                    aria-label={`Select ${template.name} template`}
                    className="h-full w-full overflow-hidden rounded-md border border-slate-300 bg-white"
                  >
                    <img
                      src={template.image}
                      alt={`${template.name} resume template`}
                      className="h-full w-full object-cover object-top"
                      draggable={false}
                    />
                  </button>

                  {/* "Use Template" only shows on the selected card */}
                  {isSelected && (
                    <button
                      type="button"
                      className="btn absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-0 bg-blue-600 px-5 text-white shadow-md hover:bg-blue-700"
                    >
                      Use Template
                    </button>
                  )}
                </div>

                {/* Template Name */}
                <h3
                  className={`mt-3 text-center text-base font-bold ${
                    isSelected ? "text-blue-600" : "text-[#17324d]"
                  }`}
                >
                  {template.name}
                </h3>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Next Button */}
        <button
          type="button"
          aria-label="Next templates"
          className={`templates-next right-2 ${arrowButton}`}
        >
          <IoChevronForward className="text-xl sm:text-2xl" />
        </button>
      </div>
    </section>
  );
};

export default Carousel;
