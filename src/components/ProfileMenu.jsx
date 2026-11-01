import { Link, useNavigate } from "react-router";
import { HiOutlineUser } from "react-icons/hi2";
import useAuth from "../hooks/useAuth";

// Links inside the dropdown. Change the paths to match your router file.
const profileLinks = [
  { label: "Resumes", to: "/myResumes" },
  { label: "Cover Letters", to: "/coverLetters" },
  { label: "Account Settings", to: "/account" },
];

// Avatar + dropdown menu. Shown when the user IS logged in.
const ProfileMenu = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();

  // daisyUI dropdowns stay open while they have focus.
  // blur() removes the focus, which closes the dropdown.
  const closeDropdown = () => document.activeElement?.blur();

  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/"); // go to home page after logging out
    } catch (err) {
      console.error("Log out failed:", err);
    }
  };

  return (
    // "dropdown-end" = dropdown lines up with the right edge of the avatar
    <div className="dropdown dropdown-end">
      {/* Avatar (click it to open the dropdown) */}
      <div
        tabIndex={0}
        role="button"
        aria-label="Open profile menu"
        className="avatar cursor-pointer"
      >
        <div className="w-11 rounded-full border-4 border-slate-200 bg-slate-100">
          {user?.photoURL ? (
            <img
              src={user.photoURL}
              alt="Your profile"
              referrerPolicy="no-referrer" // needed so Google photos load
            />
          ) : (
            // No photo? Show a simple user icon instead
            <HiOutlineUser className="size-full p-2 text-slate-600" />
          )}
        </div>
      </div>

      {/* Dropdown card. Clicking any item inside closes it. */}
      <ul
        tabIndex={-1}
        onClick={closeDropdown}
        className="menu dropdown-content z-50 mt-2 w-48 rounded-box border border-gray-200 bg-white p-2 text-base font-semibold text-slate-700 shadow-lg"
      >
        {profileLinks.map((link) => (
          <li key={link.label}>
            <Link to={link.to}>{link.label}</Link>
          </li>
        ))}

        {/* Divider line, then Log Out */}
        <li className="mt-1 border-t border-gray-200 pt-1">
          <button type="button" onClick={handleLogOut}>
            Log Out
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ProfileMenu;
