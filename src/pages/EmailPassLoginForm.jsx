import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../hooks/useAuth";

const EmailPassLoginForm = () => {
  const { loginUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = async (e) => {
    e.preventDefault(); // stop page reload
    await loginUser(email, password);
    navigate(from, { replace: true });
  };

  return (
    <section className="w-full mb-12 sm:mb-16 lg:mb-20">
      <div className="mx-auto w-full max-w-md">
        <Link
          to="/signin"
          state={location.state}
          className="mb-6 inline-block text-sm font-medium text-slate-600 hover:text-blue-600"
        >
          ← Back
        </Link>

        <h2 className="mb-6 text-2xl font-semibold text-slate-900">
          Sign in with email password
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="min-h-15 w-full rounded-lg bg-slate-100 px-4 outline-none focus:outline-2 focus:outline-blue-600"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="min-h-15 w-full rounded-lg bg-slate-100 px-4 outline-none focus:outline-2 focus:outline-blue-600"
            />
          </div>

          <button
            type="submit"
            className="min-h-15 w-full rounded-lg bg-blue-600 font-semibold text-white hover:bg-blue-700"
          >
            Sign in
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailPassLoginForm;
