import { Link } from "react-router";
import resumeLeft from "../assets/resumeLeft.webp";
import resumeCenter from "../assets/resumeCenter.jpg";
import resumeRight from "../assets/resumeRight.webp";

// Later: fetch this from your Express API.
const resumesToday = 689;

// Every card sits 40px below the preview box (-bottom-10) and the box clips it
// (overflow-hidden), so the grey companies bar looks like it overlaps the resumes.
const sideSize =
  "h-[190px] w-[145px] sm:h-[230px] sm:w-[175px] md:h-[232px] md:w-[202px]";

const resumes = [
  {
    src: resumeLeft,
    position: "left-[3%] z-10 sm:left-[5%] md:left-[1%]",
    size: sideSize,
  },
  {
    src: resumeCenter,
    position: "left-1/2 z-30 -translate-x-1/2",
    size: "h-[245px] w-[185px] sm:h-[290px] sm:w-[220px] md:h-[296px] md:w-[260px]",
  },
  {
    src: resumeRight,
    position: "right-[3%] z-20 sm:right-[5%] md:right-[1%]",
    size: sideSize,
  },
];

// Placeholder wordmarks: swap for real SVG logos you have permission to use.
const companies = [
  { name: "Meta" },
  { name: "Adobe" },
  { name: "LinkedIn" },
  { name: "NETFLIX" },
  { name: "UBER", extra: "col-span-2 tracking-[0.2em] sm:col-span-1" },
];

const Banner = () => {
  return (
    <section className="bg-white pt-12 md:pt-16">
      {/* Same box as every Section in Home: max 1280px, 16px padding = 1248px content */}
      <div className="mx-auto max-w-7xl px-4">
        {/* Banner text */}
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-1 text-sm font-semibold uppercase tracking-wide text-blue-600 md:text-base">
            AI Resume Builder
          </p>

          <h1 className="text-4xl font-bold leading-none tracking-tight text-[#102a43] sm:text-5xl md:text-6xl">
            3% of resumes pass the initial
            <br className="hidden md:block" />
            application. <span className="text-blue-600">Be in 3%.</span>
          </h1>

          <p className="mt-5 text-base text-slate-500 sm:text-lg md:text-xl">
            AI-powered, ATS-optimized resumes. Built in minutes.
          </p>

          <Link
            to="/signin"
            className="btn mt-8 h-[60px] w-full max-w-[448px] border-0 bg-blue-600 text-base font-semibold text-white shadow-none hover:bg-blue-700 sm:text-lg"
          >
            Create My Resume
          </Link>
        </div>

        {/* Social proof */}
        <div className="mt-20 text-center">
          <div className="flex items-center justify-center gap-2 text-sm text-slate-500 md:text-base">
            <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
            <span>{resumesToday} resumes created today</span>
          </div>
          <Link
            to="/signin"
            className="mt-1 inline-block text-sm font-medium text-blue-600 hover:underline"
          >
            Join them →
          </Link>
        </div>

        {/* Resume previews (clipped at the bottom) */}
        <div className="relative mx-auto mt-0.5 h-[205px] max-w-[720px] overflow-hidden sm:h-[250px] md:h-[256px]">
          {resumes.map((resume) => (
            <img
              key={resume.src}
              src={resume.src}
              alt="Resume template preview"
              className={`absolute -bottom-10 rounded-t-[4px] border border-slate-200 bg-white object-cover object-top shadow-sm ${resume.position} ${resume.size}`}
            />
          ))}
        </div>

        {/* Companies */}
        <div className="rounded-t-md bg-slate-50 px-5 py-7 md:px-12 md:py-8">
          <p className="text-center text-sm tracking-wide text-slate-600 md:text-base">
            Top companies hire our customers
          </p>

          <div className="mt-7 grid grid-cols-2 items-center gap-x-8 gap-y-6 text-center sm:grid-cols-3 md:grid-cols-5">
            {companies.map((company) => (
              <p
                key={company.name}
                className={`text-2xl font-bold text-slate-400 md:text-3xl ${company.extra ?? ""}`}
              >
                {company.name}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
