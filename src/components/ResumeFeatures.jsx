import { LuSparkles } from "react-icons/lu";
import { HiDocumentText } from "react-icons/hi2";
import { FaCheckCircle, FaLock } from "react-icons/fa";

// Icon background colors (one purple gradient, the rest solid blue)
const purple = "bg-gradient-to-br from-[#a94bf7] to-[#8514ea]";
const blue = "bg-blue-600";

const features = [
  {
    icon: LuSparkles,
    title: "AI-Powered Resume Builder",
    description:
      "Let AI write your resume for you. Just chat with our AI assistant and watch your professional resume come to life.",
    iconBg: purple,
  },
  {
    icon: HiDocumentText,
    title: "Create resume with ease",
    description:
      "Build your resume online in minutes without even leaving your web browser.",
    iconBg: blue,
  },
  {
    icon: FaCheckCircle,
    title: "Professionally approved templates",
    description:
      "Our well designed resume templates are approved by professionals. Your resume is ready in 5 minutes.",
    iconBg: blue,
  },
  {
    icon: FaLock,
    title: "We care about your data",
    description:
      "Anything you share with us is well protected with our 256-bit SSL encryption.",
    iconBg: blue,
  },
];

const ResumeFeatures = () => {
  return (
    <section aria-labelledby="resume-features-heading">
      {/* Section heading */}
      <div className="text-center">
        <p className="text-sm font-medium uppercase tracking-wide text-blue-600">
          Professional Resume Builder
        </p>

        <h2
          id="resume-features-heading"
          className="mt-2 text-3xl font-bold text-[#102a43] sm:text-4xl"
        >
          Win your dream job
        </h2>
      </div>

      {/* Features: 1 column on phones, 2 columns from md up.
          max-w-6xl + mx-auto keeps the grid narrower than the page, like the screenshot. */}
      <ul className="mt-10 grid grid-cols-1 gap-x-16 gap-y-8 md:grid-cols-2 md:gap-y-10 lg:mt-14">
        {features.map(({ icon: Icon, title, description, iconBg }) => (
          <li key={title} className="flex items-start gap-4">
            {/* Icon box */}
            <span
              className={`flex size-12 shrink-0 items-center justify-center rounded-lg text-white ${iconBg}`}
            >
              <Icon className="size-6" aria-hidden="true" />
            </span>

            {/* Text */}
            <div>
              <h3 className="text-lg font-medium text-[#102a43]">{title}</h3>
              <p className="mt-0.5 text-base leading-relaxed text-slate-600">
                {description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ResumeFeatures;
