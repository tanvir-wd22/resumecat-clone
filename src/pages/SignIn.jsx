import { FaGoogle, FaFacebook, FaChevronRight } from "react-icons/fa6";
import { HiOutlineEnvelope } from "react-icons/hi2";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router";
import { useState } from "react";

const signInOptions = [
  {
    id: "1",
    label: "Continue with Google",
    icon: <FaGoogle className="text-xl text-[#4285F4]" />,
  },
  {
    id: "2",
    label: "Continue with Facebook",
    icon: <FaFacebook className="text-2xl text-[#1877F2]" />,
  },
  {
    id: "3",
    label: "Continue with Email",
    icon: <HiOutlineEnvelope className="text-2xl text-blue-600" />,
  },
];

const SignIn = () => {
  const { signInWithGoogle } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleSignIn = async (optionId) => {
    setError(null); // Reset error state before attempting sign-in
    try {
      if (optionId === "1") {
        await signInWithGoogle();
        navigate("/");
      } else if (optionId === "2") {
        setError("Facebook sign-in is not configured yet.");
      } else if (optionId === "3") {
        setError("Email sign-in is not configured yet.");
      }
    } catch (err) {
      console.error("Sign-in error:", err);
      setError("Sign-in failed. Please try again.");
    }
  };

  return (
    <section aria-labelledby="signin-heading" className="w-full">
      <div className="mx-auto w-full max-w-md">
        {/* Heading */}
        <header className="mb-9 text-center sm:mb-10">
          <h1
            id="signin-heading"
            className="text-4xl leading-tight font-bold tracking-tight text-blue-600 sm:text-5xl"
          >
            Welcome Back
          </h1>

          <p className="mt-3 text-base leading-6 text-slate-500 sm:text-lg">
            Sign in to continue where you left off
          </p>
        </header>

        {/* Sign-in Options */}
        <div className="flex flex-col gap-3">
          {signInOptions.map((option) => (
            <button
              key={option.id}
              type="button"
              onClick={() => handleSignIn(option.id)}
              className="group flex min-h-[60px] w-full items-center rounded-lg bg-slate-100 px-4 text-slate-900 transition-colors duration-200 hover:bg-slate-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:bg-slate-200 sm:px-6"
            >
              {/* Provider Icon */}
              <span className="flex w-10 shrink-0 items-center justify-start">
                {option.icon}
              </span>

              {/* Provider Name */}
              <span className="flex-1 text-left text-base font-medium">
                {option.label}
              </span>

              {/* Right Arrow */}
              <FaChevronRight
                aria-hidden="true"
                className="text-base text-slate-700 transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </button>
          ))}
        </div>

        {/* Sign-up Link */}
        <p className="mt-9 text-center text-sm leading-6 text-slate-500 sm:mt-10 sm:text-base">
          I am not registered —{" "}
          <a
            href="/signup"
            className="font-medium text-blue-600 transition-colors hover:text-blue-700 hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Sign Up
          </a>
        </p>
      </div>
    </section>
  );
};

export default SignIn;
