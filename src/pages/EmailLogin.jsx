import { useState } from "react";
import { useNavigate } from "react-router";
import useAuth from "../hooks/useAuth";

const EmailLogin = ({ onBack }) => {
  const { signInWithEmail } = useAuth(); // function that logs the user in
  const navigate = useNavigate();

  // Store what the user types
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  // Runs when the user clicks "Sign in"
  const handleSubmit = async (e) => {
    e.preventDefault(); // stop the page from reloading
    setError(null); // clear the old error

    try {
      await signInWithEmail(email, password);
      navigate("/"); // go to home page after login
    } catch (err) {
      console.error(err);
      setError("Email or password is incorrect.");
    }
  };

  return (
    <div>
      {/* Back button */}
      <button
        type="button"
        onClick={onBack}
        className="mb-6 text-sm font-medium text-slate-600 hover:text-blue-600"
      >
        ← Back
      </button>

      <h2 className="mb-6 text-2xl font-semibold text-slate-900">
        Sign in with email
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Email */}
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
            className="min-h-[60px] w-full rounded-lg bg-slate-100 px-4 outline-none focus:outline-2 focus:outline-blue-600"
          />
        </div>

        {/* Password */}
        <div>
          <label htmlFor="password" className="mb-2 block text-sm font-medium">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="min-h-[60px] w-full rounded-lg bg-slate-100 px-4 outline-none focus:outline-2 focus:outline-blue-600"
          />
        </div>

        {/* Show error message only if there is one */}
        {error && <p className="text-sm text-red-600">{error}</p>}

        {/* Submit button */}
        <button
          type="submit"
          className="min-h-[60px] w-full rounded-lg bg-blue-600 font-semibold text-white hover:bg-blue-700"
        >
          Sign in
        </button>
      </form>
    </div>
  );
};

export default EmailLogin;
