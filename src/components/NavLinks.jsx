import { NavLink } from "react-router";

// All page links in one place. They match the paths in your router file.
const navLinks = [
  { label: "Resume Templates", to: "/templates" },
  { label: "Resume Examples", to: "/examples" },
  { label: "Pricing", to: "/pricing" },
];

// NavLink gives us "isActive" (true when we are on that page),
// so the current page can be shown in blue.
const getLinkClass = ({ isActive }) => {
  return `whitespace-nowrap hover:text-blue-600 ${
    isActive ? "text-blue-600" : ""
  }`;
};

// Returns the <li> items only. The parent <ul> is in Header.jsx,
// so we can use these same links in the desktop row AND the mobile menu.
const NavLinks = () => {
  return (
    <>
      {navLinks.map((link) => (
        <li key={link.label}>
          <NavLink to={link.to} className={getLinkClass}>
            {link.label}
          </NavLink>
        </li>
      ))}
    </>
  );
};

export default NavLinks;
