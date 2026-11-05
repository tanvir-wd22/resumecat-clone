import { useState } from "react";
import { Link, NavLink } from "react-router";
import { FaCat } from "react-icons/fa6";
import { HiBars3, HiXMark } from "react-icons/hi2";

// All menu links live in one array, so desktop and mobile always match.
const menuLinks = [
  { to: "/resumeTemplates", label: "Resume Templates" },
  { to: "/resumeExamples", label: "Resume Examples" },
  { to: "/pricing", label: "Pricing" },
];

export default function Navbar() {
  // true = mobile/tablet menu is open
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  // active link turns blue
  const desktopLinkClass = ({ isActive }) =>
    `text-[15px] font-medium transition-colors hover:text-blue-600 ${
      isActive ? "text-blue-600" : "text-slate-700"
    }`;

  const mobileLinkClass = ({ isActive }) =>
    `block rounded-md px-3 py-3 text-base font-medium transition-colors hover:bg-slate-100 ${
      isActive ? "text-blue-600" : "text-slate-700"
    }`;

  return (
    <header
      className="relative w-full border-b border-slate-200 bg-white shadow-sm mb-12 sm:mb-16 lg:mb-20"
      onKeyDown={(e) => e.key === "Escape" && closeMenu()}
    >
      {/* ---------- Top bar ---------- */}
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo (left) */}
        <Link to="/" onClick={closeMenu} className="flex items-center gap-1.5">
          <FaCat className="h-7 w-7 text-blue-600" aria-hidden="true" />
          <span className="text-[22px] font-extrabold tracking-tight text-[#141b4d]">
            Resume<span className="text-blue-600">Cat</span>
          </span>
        </Link>

        {/* Desktop menu (lg and up) */}
        <nav className="hidden items-center gap-6 lg:flex xl:gap-7">
          {menuLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className={desktopLinkClass}>
              {link.label}
            </NavLink>
          ))}

          <span className="h-8 w-px bg-slate-200" aria-hidden="true" />

          <Link
            to="/signin"
            className="text-[15px] font-medium text-blue-600 transition-colors hover:text-blue-800"
          >
            Sign In
          </Link>

          <Link
            to="/myResumes"
            className="btn h-11 min-h-0 rounded-md border-0 bg-blue-600 px-4 text-[15px] font-semibold text-white shadow-none hover:bg-blue-700"
          >
            My Resumes
          </Link>
        </nav>

        {/* Hamburger button (right, mobile and tablet only) */}
        <button
          type="button"
          onClick={toggleMenu}
          className="btn btn-ghost btn-square -mr-2 text-slate-800 lg:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? (
            <HiXMark className="h-7 w-7" aria-hidden="true" />
          ) : (
            <HiBars3 className="h-7 w-7" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* ---------- Mobile / tablet dropdown ---------- */}
      {isOpen && (
        <nav
          id="mobile-menu"
          className="absolute inset-x-0 top-full z-50 border-b border-slate-200 bg-white px-4 pb-4 pt-2 shadow-lg sm:px-6 lg:hidden"
        >
          <ul className="flex flex-col gap-1">
            {menuLinks.map((link) => (
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
          </ul>

          <div className="mt-3 flex flex-col gap-3 border-t border-slate-200 pt-4 sm:flex-row">
            <Link
              to="/signin"
              onClick={closeMenu}
              className="btn flex-1 rounded-md border border-blue-600 bg-white text-base font-semibold text-blue-600 shadow-none hover:bg-blue-50"
            >
              Sign In
            </Link>
            <Link
              to="/myResumes"
              onClick={closeMenu}
              className="btn flex-1 rounded-md border-0 bg-blue-600 text-base font-semibold text-white shadow-none hover:bg-blue-700"
            >
              My Resumes
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
