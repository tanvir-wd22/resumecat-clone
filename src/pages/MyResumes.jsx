import { useState } from "react";
import { useNavigate } from "react-router";
import { SvgHighFive } from "iblis-react-undraw";
import { FiPlus } from "react-icons/fi";
import {
  TbSortAscendingLetters,
  TbSortDescendingLetters,
} from "react-icons/tb";
import Container from "../components/Container";

/* Brand blue used everywhere. Change it here only. */
const BLUE = "#1a5cff";

/* ---------------------------------------------------------------------------
   Small component: grey placeholder lines that look like a resume page
--------------------------------------------------------------------------- */
function ResumeSkeleton() {
  return (
    <div className="flex h-full w-full flex-col items-center gap-2 rounded-lg bg-[#f6f8fb] p-6 shadow">
      {/* name and job title */}
      <div className="h-4 w-1/3 rounded bg-[#e8ecf2]" />
      <div className="h-2 w-1/4 rounded bg-[#e8ecf2]" />
      <div className="h-2 w-1/3 rounded bg-[#e8ecf2]" />

      {/* three sections with a title and some lines */}
      {[1, 2, 3].map((section) => (
        <div key={section} className="mt-5 flex w-full flex-col gap-2">
          <div className="h-2 w-1/5 rounded bg-[#e8ecf2]" />
          <div className="h-2 w-full rounded bg-[#e8ecf2]" />
          <div className="h-2 w-full rounded bg-[#e8ecf2]" />
          <div className="h-2 w-2/3 self-center rounded bg-[#e8ecf2]" />
        </div>
      ))}
    </div>
  );
}

/* ---------------------------------------------------------------------------
   Small component: the dashed "New resume" card
--------------------------------------------------------------------------- */
function NewResumeCard({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="group w-full max-w-[285px] overflow-hidden rounded-md border border-dashed border-[#cdd6e6] bg-white text-left hover:border-[#1a5cff]"
    >
      {/* top part: grey background + skeleton + plus button */}
      <div className="relative aspect-[285/405] bg-[#eff2f7] p-4">
        <ResumeSkeleton />

        {/* round plus button in the middle */}
        <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg sm:h-16 sm:w-16">
          <FiPlus size={30} color={BLUE} />
        </span>
      </div>

      {/* bottom part: text */}
      <div className="flex flex-col items-center gap-1 border-t border-dashed border-[#d9e0ee] py-3">
        <span className="font-semibold text-[#1a5cff]">New resume</span>
        <span className="text-xs text-[#7a8fb0]">Start from a blank</span>
      </div>
    </button>
  );
}

/* ---------------------------------------------------------------------------
   Tab 1: Resumes
--------------------------------------------------------------------------- */
function ResumesTab() {
  const navigate = useNavigate();

  return (
    // The grid puts as many cards in a row as the screen allows
    <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,230px),285px))] justify-center gap-5 pt-4 sm:justify-start">
      <NewResumeCard onClick={() => navigate("/resumeTemplates")} />
    </div>
  );
}

/* ---------------------------------------------------------------------------
   Tab 2: Cover Letters
--------------------------------------------------------------------------- */
function CoverLettersTab() {
  return (
    <div className="flex flex-col items-center px-2 pb-10 pt-8 text-center">
      {/* unDraw illustration. "primarycolor" changes the shirts to our blue */}
      <div className="w-full max-w-[300px]">
        <SvgHighFive primarycolor={BLUE} />
      </div>

      <h2 className="mt-4 text-lg font-bold text-black sm:text-xl">
        A cover letter to win hearts and minds
      </h2>

      <p className="mt-2 max-w-sm text-[15px] leading-6 text-[#5a6b85]">
        The perfect companion to your resume. Do what other candidates are
        missing – speak directly to the employer!
      </p>

      {/* "btn" is a DaisyUI class; the colors are our blue */}
      <button className="btn mt-5 h-12 gap-2 rounded-lg border-0 bg-[#1a5cff] px-6 text-base text-white shadow-none hover:bg-[#124ed8]">
        <FiPlus size={20} />
        New Cover Letter
      </button>
    </div>
  );
}

/* ---------------------------------------------------------------------------
   Main component
--------------------------------------------------------------------------- */
export default function MyResume() {
  // which tab is open: "resumes" or "coverLetters"
  const [activeTab, setActiveTab] = useState("resumes");

  // false = A to Z, true = Z to A
  const [isReversed, setIsReversed] = useState(false);

  // classes for a tab button (blue when active, grey when not)
  const tabClass = (name) =>
    `border-b-2 px-3 py-3 font-semibold sm:px-4 ${
      activeTab === name
        ? "border-[#1a5cff] text-[#1a5cff]"
        : "border-transparent text-[#5f7394] hover:text-[#1a5cff]"
    }`;

  return (
    <Container>
      <section className="w-full">
        {/* ---------- tab bar ---------- */}
        <div className="flex items-center justify-between border-b border-[#d9e0ee]">
          <div className="flex gap-2">
            <button
              className={tabClass("resumes")}
              onClick={() => setActiveTab("resumes")}
            >
              Resumes
            </button>
            <button
              className={tabClass("coverLetters")}
              onClick={() => setActiveTab("coverLetters")}
            >
              Cover Letters
            </button>
          </div>

          {/* sort button */}
          <button
            onClick={() => setIsReversed(!isReversed)}
            title={isReversed ? "Sort Z to A" : "Sort A to Z"}
            className="p-1 text-[#5f7394] hover:text-[#1a5cff]"
          >
            {isReversed ? (
              <TbSortDescendingLetters size={26} />
            ) : (
              <TbSortAscendingLetters size={26} />
            )}
          </button>
        </div>

        {/* ---------- tab content ---------- */}
        {activeTab === "resumes" ? <ResumesTab /> : <CoverLettersTab />}
      </section>
    </Container>
  );
}
