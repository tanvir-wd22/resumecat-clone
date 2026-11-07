import { FaGoogle, FaFacebook, FaChevronRight } from "react-icons/fa6";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../hooks/useAuth";

const SignIn = () => {
  const { googleSigninUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Page the user wanted before login (default: home)
  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = async () => {
    await googleSigninUser();
    navigate(from, { replace: true });
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

        <div className="flex flex-col gap-3">
          {/* Google */}
          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="flex min-h-15 w-full items-center rounded-lg bg-slate-100 px-4 text-slate-900 hover:bg-slate-200 sm:px-6"
          >
            <span className="flex w-10 shrink-0 items-center">
              <FaGoogle className="text-xl text-[#4285F4]" />
            </span>
            <span className="flex-1 text-left font-medium">
              Continue with Google
            </span>
            <FaChevronRight className="text-slate-700" />
          </button>

          {/* Facebook (not connected yet) */}
          <button
            type="button"
            className="flex min-h-15 w-full items-center rounded-lg bg-slate-100 px-4 text-slate-900 hover:bg-slate-200 sm:px-6"
          >
            <span className="flex w-10 shrink-0 items-center">
              <FaFacebook className="text-2xl text-[#1877F2]" />
            </span>
            <span className="flex-1 text-left font-medium">
              Continue with Facebook
            </span>
            <FaChevronRight className="text-slate-700" />
          </button>

          {/* Email */}
          <Link
            to="/signin/emailPassForm"
            state={location.state}
            className="flex min-h-15 w-full items-center rounded-lg bg-slate-100 px-4 text-slate-900 hover:bg-slate-200 sm:px-6"
          >
            <span className="flex w-10 shrink-0 items-center">
              <HiOutlineEnvelope className="text-2xl text-blue-600" />
            </span>
            <span className="flex-1 text-left font-medium">
              Continue with Email
            </span>
            <FaChevronRight className="text-slate-700" />
          </Link>
        </div>

        <p className="mt-9 text-center text-sm text-slate-500 sm:text-base">
          I am not registered — <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </section>
  );
};

export default SignIn;
