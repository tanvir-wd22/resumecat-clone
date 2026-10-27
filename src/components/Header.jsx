import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { FaCat } from "react-icons/fa6";
import { HiBars3, HiXMark } from "react-icons/hi2";

// All routes in one place. They match the paths in your router file.
const navLinks = [
  { label: "Resume Templates", to: "/templates" },
  { label: "Resume Examples", to: "/examples" },
  { label: "Pricing", to: "/pricing" },
];

const SIGN_IN_PATH = "/signin";
const MY_RESUMES_PATH = "/myResumes";

// NavLink gives us isActive, so the current page can be highlighted.
const desktopLinkClass = ({ isActive }) =>
  `whitespace-nowrap hover:text-blue-600 ${isActive ? "text-blue-600" : ""}`;

const mobileLinkClass = ({ isActive }) =>
  `border-b border-gray-100 py-3 hover:text-blue-600 ${
    isActive ? "text-blue-600" : ""
  }`;

const Header = () => {
  // true = the mobile/tablet menu is open
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  // Close the menu when the Escape key is pressed
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    // "relative" lets the mobile menu panel position itself under the header
    <header className="relative w-full border-b border-gray-200 bg-white">
      {/* Full width on purpose: no max-w here */}
      <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="flex items-center gap-2 text-2xl font-extrabold tracking-tight text-[#102a43]"
        >
          <FaCat className="text-blue-600" />
          <span>ResumeCat</span>
        </Link>

        {/* Desktop (lg and up): links and buttons in one row */}
        <div className="hidden items-center gap-6 lg:flex">
          <nav className="flex items-center gap-6 text-base font-medium text-slate-700">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                className={desktopLinkClass}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="h-6 w-px bg-gray-300"></div>

          <Link
            to={SIGN_IN_PATH}
            className="whitespace-nowrap text-base font-semibold text-blue-600 hover:text-blue-700"
          >
            Sign In
          </Link>

          <Link
            to={MY_RESUMES_PATH}
            className="whitespace-nowrap rounded-md bg-blue-600 px-5 py-2.5 text-base font-semibold text-white transition-colors hover:bg-blue-700"
          >
            My Resumes
          </Link>
        </div>

        {/* Mobile and tablet (below lg): hamburger button */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          className="rounded-md p-2 text-[#102a43] transition hover:bg-slate-100 lg:hidden"
        >
          {menuOpen ? (
            <HiXMark className="size-7" />
          ) : (
            <HiBars3 className="size-7" />
          )}
        </button>
      </div>

      {/* Mobile and tablet menu panel (hidden on lg and up) */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-full z-50 border-b border-gray-200 bg-white px-4 pb-5 pt-2 shadow-lg sm:px-6 lg:hidden"
        >
          <nav className="flex flex-col text-base font-medium text-slate-700">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                onClick={closeMenu}
                className={mobileLinkClass}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              to={SIGN_IN_PATH}
              onClick={closeMenu}
              className="rounded-md border border-blue-600 px-5 py-2.5 text-center text-base font-semibold text-blue-600 transition-colors hover:bg-blue-50"
            >
              Sign In
            </Link>

            <Link
              to={MY_RESUMES_PATH}
              onClick={closeMenu}
              className="rounded-md bg-blue-600 px-5 py-2.5 text-center text-base font-semibold text-white transition-colors hover:bg-blue-700"
            >
              My Resumes
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
