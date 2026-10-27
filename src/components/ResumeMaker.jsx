import resumeImg from "../assets/resume.svg";

export default function ResumeMaker() {
  return (
    <section aria-labelledby="resume-maker-heading">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Text (first on mobile, right on desktop) */}
        <div className="mx-auto w-full max-w-2xl lg:order-2 lg:mx-0 lg:max-w-lg">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600 md:text-base">
            Resume Maker
          </p>

          <h2
            id="resume-maker-heading"
            className="mt-3 text-3xl font-bold text-base-content sm:text-4xl"
          >
            Every Great Career Begins with{" "}
            <span className="whitespace-nowrap">
              a <span className="text-[#2563EB]">Solid Resume</span>
            </span>
          </h2>

          <div className="mt-3 flex">
            {/* Swap for <Link to="..."> from react-router if needed */}
            <button
              type="button"
              className="btn bg-[#2563EB] text-white h-13 rounded-lg border-[#2563EB] px-6 text-base shadow-none"
            >
              Create My Resume
            </button>
          </div>

          <p className="mt-8 text-lg leading-7 text-base-content/70">
            Before you ever step foot in a HR recruiter’s office to interview
            for that dream job, your resume is the first thing that crosses
            their desk.
          </p>

          <p className="mt-6 text-base leading-7 text-base-content/70">
            <span className="block">
              Because they can’t meet you firsthand to witness your witty
              personality, focused, driven work ethic, and ability to fit in
              well with any team, your resume has to do the talking for you.
            </span>
            <span className="block">
              That’s why it’s essential that your resume properly expresses who
              you are, what you bring to the table, and why they should
              immediately pick up the phone and get you in the building.
            </span>
            <span className="block">
              With ResumeCat’s AI-powered builder, just chat about your
              experience and watch your professional resume come to life. Stand
              out and make recruiters take notice.
            </span>
          </p>
        </div>

        {/* Illustration (left on desktop) */}
        <img
          src={resumeImg}
          alt="Illustration of a resume with a recruiter avatar"
          width={754}
          height={704}
          decoding="async"
          className="mx-auto h-auto w-full max-w-md lg:order-1 lg:max-w-lg"
        />
      </div>
    </section>
  );
}
