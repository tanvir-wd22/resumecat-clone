import { Link } from "react-router";
import { FaCat } from "react-icons/fa6";
import { HiBars3 } from "react-icons/hi2";
import useAuth from "../hooks/useAuth";
import NavLinks from "./NavLinks";
import ProfileMenu from "./ProfileMenu";

const SIGN_IN_PATH = "/signin";
const MY_RESUMES_PATH = "/myResumes";
const PRICING_PATH = "/pricing";

const Header = () => {
  // "user" is the logged-in person. It is empty (null) when nobody is logged in.
  const { user } = useAuth();

  // daisyUI dropdowns stay open while they have focus.
  // blur() removes the focus, which closes the dropdown.
  const closeDropdown = () => document.activeElement?.blur();

  return (
    <header className="navbar mb-12 border-b border-gray-200 bg-white px-4 shadow-sm sm:mb-16 sm:px-6 lg:mb-20 lg:px-8">
      {/* ---------- LEFT: logo ---------- */}
      {/* w-auto = the logo only takes the space it needs */}
      <div className="navbar-start w-auto">
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-extrabold tracking-tighter"
        >
          <FaCat className="text-blue-600" />
          <span>
            <span className="text-[#102a43]">Resume</span>
            <span className="text-blue-600">Cat</span>
          </span>
        </Link>
      </div>

      {/* ---------- RIGHT: links + buttons ---------- */}
      {/* flex-1 = the right side takes all the remaining space */}
      <div className="navbar-end flex-1 gap-3 lg:gap-6">
        {/* Page links (large screens only) */}
        <ul className="hidden items-center gap-6 text-base font-medium text-slate-700 lg:flex">
          <NavLinks />
        </ul>

        {/* Thin divider line (large screens only) */}
        <div className="hidden h-6 w-px bg-gray-300 lg:block"></div>

        {user ? (
          // Logged IN: "Get Pro" button + avatar dropdown
          <>
            {/* "hidden sm:block" = hidden on very small screens */}
            <Link
              to={PRICING_PATH}
              className="hidden whitespace-nowrap rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700 sm:block"
            >
              Get Pro
            </Link>

            <ProfileMenu />
          </>
        ) : (
          // Logged OUT: Sign In + My Resumes (large screens only)
          <div className="hidden items-center gap-6 lg:flex">
            <Link
              to={SIGN_IN_PATH}
              className="whitespace-nowrap text-base font-medium text-blue-600 hover:text-blue-700"
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
        )}

        {/* ---------- Hamburger menu (screens smaller than lg) ---------- */}
        <div className="dropdown dropdown-end lg:hidden">
          <div
            tabIndex={0}
            role="button"
            aria-label="Open menu"
            className="btn btn-ghost px-2"
          >
            <HiBars3 className="size-7 text-[#102a43]" />
          </div>

          {/* Clicking any item inside closes the menu */}
          <ul
            tabIndex={-1}
            onClick={closeDropdown}
            className="menu dropdown-content z-50 mt-3 w-52 rounded-box bg-white p-2 text-base font-medium text-slate-700 shadow-lg"
          >
            <NavLinks />

            {user ? (
              // Logged in: "Get Pro" only shows here on very small screens
              <li className="mt-2 sm:hidden">
                <Link
                  to={PRICING_PATH}
                  className="justify-center bg-blue-600 font-semibold text-white hover:bg-blue-700"
                >
                  Get Pro
                </Link>
              </li>
            ) : (
              // Logged out: Sign In + My Resumes
              <>
                <li className="mt-2">
                  <Link
                    to={SIGN_IN_PATH}
                    className="font-semibold text-blue-600"
                  >
                    Sign In
                  </Link>
                </li>
                <li>
                  <Link
                    to={MY_RESUMES_PATH}
                    className="justify-center bg-blue-600 font-semibold text-white hover:bg-blue-700"
                  >
                    My Resumes
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
