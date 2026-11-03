// Header.jsx
// React + React Router + Firebase (via AuthContext) + Tailwind CSS v4 + daisyUI v5
//
// LOGGED OUT -> Desktop: links + Sign In + "My Resumes" button
// LOGGED IN  -> Desktop: [Get Pro] | Resumes | Cover Letter | Account Settings | Logout
// MOBILE     -> Hamburger menu that shows the same items for each state

import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import AuthContext from "../providers/AuthContext";

// ---------- 1) Icons (imported from react-icons) ----------
// fa  = Font Awesome icons
// hi2 = Heroicons v2 icons (the "Outline" ones match your old line-style icons)

import { FaCrown, FaCat } from "react-icons/fa";
import {
  HiOutlineCog6Tooth, // gear / settings
  HiOutlineArrowRightOnRectangle, // logout
  HiOutlineBars3, // hamburger menu
  HiOutlineXMark, // close (X)
} from "react-icons/hi2";

// ---------- 2) Links (edit them here in one place) ----------

// Shown when logged OUT
const publicLinks = [
  { label: "Resume Templates", to: "/templates" },
  { label: "Resume Examples", to: "/examples" },
  { label: "Pricing", to: "/pricing" },
];

// Shown when logged IN (add routes for /coverLetters and /settings in your router)
const accountLinks = [
  { label: "Resumes", to: "/myResumes" },
  { label: "Cover Letter", to: "/coverLetters" },
  {
    label: "Account Settings",
    to: "/settings",
    icon: <HiOutlineCog6Tooth className="h-5 w-5" />,
  },
];

// ---------- 3) Style helpers ----------
// NavLink gives us "isActive" (true when the link matches the current URL).

const desktopLinkClass = ({ isActive }) =>
  `flex items-center gap-2 px-4 text-sm font-medium transition hover:text-[#1d5bff] ${
    isActive ? "text-[#1d5bff]" : "text-slate-800"
  }`;

const mobileLinkClass = ({ isActive }) =>
  `flex items-center gap-2 font-medium ${isActive ? "text-[#1d5bff]" : "text-slate-800"}`;

const blueButton =
  "btn border-none bg-[#1d5bff] font-semibold text-white shadow-none hover:bg-[#1448d6]";

// Thin vertical line between desktop links
const Divider = () => <div className="h-8 w-px bg-base-300" />;

// ---------- 4) The Header ----------

export default function Header() {
  const navigate = useNavigate();

  // From your AuthProvider:
  //   user    = null when logged out, a Firebase user object when logged in
  //   loading = true while Firebase is still checking who is logged in
  const { user, loading, logoutUser } = useContext(AuthContext);

  // Is the mobile menu open?
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  const handleLogout = () => {
    logoutUser()
      .then(() => {
        closeMenu();
        navigate("/");
      })
      .catch((error) => console.error("Logout failed:", error));
  };

  return (
    <header className="sticky top-0 z-50 border-b border-base-200 bg-white shadow-sm mb-12 sm:mb-16 lg:mb-20">
      <div className="navbar mx-auto max-w-[1920px] px-4 sm:px-6 lg:px-8">
        {/* ============ Left: Logo ============ */}
        <div className="navbar-start">
          <NavLink
            to="/"
            className="flex items-center gap-2"
            onClick={closeMenu}
          >
            <FaCat className="h-8 w-7 text-[#1d5bff]" />
            <span className="text-xl font-extrabold tracking-tight text-[#0f1f4b]">
              Resume<span className="text-[#1d5bff]">Cat</span>
            </span>
          </NavLink>
        </div>

        {/* ============ Right side: DESKTOP (1024px and up) ============ */}
        <div className="navbar-end hidden items-center lg:flex">
          {loading ? (
            // Firebase is still checking -> grey placeholder (prevents flicker)
            <div className="skeleton h-9 w-72 rounded-lg" />
          ) : user ? (
            // ----- Logged in: [Get Pro] | Resumes | Cover Letter | Settings | Logout -----
            <>
              <NavLink to="/pricing" className={`${blueButton} gap-2 px-5`}>
                <FaCrown className="h-5 w-5" />
                Get Pro
              </NavLink>

              {accountLinks.map((link) => (
                <div key={link.to} className="flex items-center">
                  <Divider />
                  <NavLink to={link.to} className={desktopLinkClass}>
                    {link.icon}
                    {link.label}
                  </NavLink>
                </div>
              ))}

              <Divider />
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 text-sm font-medium text-[#1d5bff] hover:underline"
              >
                <HiOutlineArrowRightOnRectangle className="h-5 w-5" />
                Logout
              </button>
            </>
          ) : (
            // ----- Logged out: links + Sign In + My Resumes -----
            <>
              {publicLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={desktopLinkClass}
                >
                  {link.label}
                </NavLink>
              ))}

              <Divider />

              <NavLink
                to="/signin"
                className={({ isActive }) =>
                  `px-4 text-sm font-medium text-[#1d5bff] hover:underline ${
                    isActive ? "underline" : ""
                  }`
                }
              >
                Sign In
              </NavLink>

              <NavLink to="/myResumes" className={`${blueButton} px-4 text-sm`}>
                My Resumes
              </NavLink>
            </>
          )}
        </div>

        {/* ============ Right side: MOBILE hamburger button (below 1024px) ============ */}
        <div className="navbar-end lg:hidden">
          {loading ? (
            <div className="skeleton h-9 w-9 rounded-lg" />
          ) : (
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              className="btn btn-ghost btn-square"
            >
              {/* Show X when the menu is open, hamburger when it is closed */}
              {isOpen ? (
                <HiOutlineXMark className="h-6 w-6" />
              ) : (
                <HiOutlineBars3 className="h-6 w-6" />
              )}
            </button>
          )}
        </div>
      </div>

      {/* ============ MOBILE menu (opens when the hamburger is clicked) ============ */}
      {isOpen && !loading && (
        <nav className="border-t border-base-200 bg-white px-4 pb-4 pt-3 lg:hidden">
          {user ? (
            // ----- Logged in -----
            <>
              <NavLink
                to="/pricing"
                onClick={closeMenu}
                className={`${blueButton} w-full gap-2`}
              >
                <FaCrown className="h-5 w-5" />
                Get Pro
              </NavLink>

              <ul className="menu mt-2 w-full p-0 text-base">
                {accountLinks.map((link) => (
                  <li key={link.to}>
                    <NavLink
                      to={link.to}
                      onClick={closeMenu}
                      className={mobileLinkClass}
                    >
                      {link.icon}
                      {link.label}
                    </NavLink>
                  </li>
                ))}
                <li className="mt-1 border-t border-base-200 pt-1">
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 font-medium text-[#1d5bff]"
                  >
                    <HiOutlineArrowRightOnRectangle className="h-5 w-5" />
                    Logout
                  </button>
                </li>
              </ul>
            </>
          ) : (
            // ----- Logged out -----
            <>
              <ul className="menu w-full p-0 text-base">
                {publicLinks.map((link) => (
                  <li key={link.to}>
                    <NavLink
                      to={link.to}
                      onClick={closeMenu}
                      className={mobileLinkClass}
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
                <li>
                  <NavLink
                    to="/signin"
                    onClick={closeMenu}
                    className="font-medium text-[#1d5bff]"
                  >
                    Sign In
                  </NavLink>
                </li>
              </ul>

              <NavLink
                to="/myResumes"
                onClick={closeMenu}
                className={`${blueButton} mt-3 w-full`}
              >
                My Resumes
              </NavLink>
            </>
          )}
        </nav>
      )}
    </header>
  );
}
