import { FaGoogle, FaFacebook, FaChevronRight } from "react-icons/fa6";
import { HiOutlineEnvelope } from "react-icons/hi2";
import useAuth from "../hooks/useAuth";
import { Link, useNavigate } from "react-router";
import { useState } from "react";
import EmailLogin from "./EmailLogin";

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
  const { googleSigninUser } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [showEmailForm, setShowEmailForm] = useState(false); // 2. new state

  const handleSignIn = async (optionId) => {
    setError(null);
    try {
      if (optionId === "1") {
        await googleSigninUser();
        navigate("/");
      } else if (optionId === "2") {
        setError("Facebook sign-in is not configured yet.");
      } else if (optionId === "3") {
        setShowEmailForm(true); // 3. open the email form
      }
    } catch (err) {
      console.error("Sign-in error:", err);
      setError("Sign-in failed. Please try again.");
    }
  };

  return (
    <section className="w-full mb-12 sm:mb-16 lg:mb-20">
      <div className="mx-auto w-full max-w-md">
        <header className="mb-9 text-center sm:mb-10">
          <h1 className="text-4xl font-bold text-blue-600 sm:text-5xl">
            Welcome Back
          </h1>
          <p className="mt-3 text-slate-500">
            Sign in to continue where you left off
          </p>
        </header>

        {/* If showEmailForm is true, show the form. Otherwise show the buttons. */}
        {showEmailForm ? (
          <EmailLogin onBack={() => setShowEmailForm(false)} />
        ) : (
          <div className="flex flex-col gap-3">
            {signInOptions.map((option) => (
              <button
                key={option.id}
                type="button"
                onClick={() => handleSignIn(option.id)}
                className="group flex min-h-15 w-full items-center rounded-lg bg-slate-100 px-4 text-slate-900 hover:bg-slate-200 sm:px-6"
              >
                <span className="flex w-10 shrink-0 items-center">
                  {option.icon}
                </span>
                <span className="flex-1 text-left font-medium">
                  {option.label}
                </span>
                <FaChevronRight className="text-slate-700" />
              </button>
            ))}

            {error && (
              <p className="text-center text-sm text-red-600">{error}</p>
            )}
          </div>
        )}

        <p className="mt-9 text-center text-sm text-slate-500 sm:text-base">
          I am not registered — <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </section>
  );
};

export default SignIn;
