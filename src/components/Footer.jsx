import { FaCheck } from "react-icons/fa6";

const footerLinks = [
  { name: "Resume Templates", href: "#" },
  { name: "Resources", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "Contact", href: "#" },
  { name: "Privacy", href: "#" },
  { name: "Terms", href: "#" },
];

const Footer = () => {
  return (
    // Outer wrapper: full width, subtle cool-gray background, top border
    <div className="w-full bg-[#F8FAFC] border-t border-[#E2E8F0]">
      {/* 
        Inner Container: 
        - Constrains max width
        - Flexbox for responsive layout
        - justify-between pushes links left and copyright right
      */}
      <div className="max-w-7xl mx-auto px-6 py-8 lg:py-10 flex flex-col lg:flex-row items-center justify-between gap-6">
        {/* Left Side: Navigation Links */}
        <nav className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-4">
          {footerLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[15px] text-[#475569] hover:text-[#1E293B] transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}

          {/* Privacy Choices Custom Link with Icon */}
          <a
            href="#"
            className="flex items-center gap-2 text-[15px] text-[#475569] hover:text-[#1E293B] transition-colors duration-200"
          >
            Your Privacy Choices
            {/* Custom Privacy Toggle Icon matching the design */}
            <div className="flex items-center bg-[#2563EB] rounded-full w-9 h-5 px-[3px] relative">
              {/* Left check icon */}
              <div className="w-3.5 h-3.5 rounded-full bg-white flex items-center justify-center">
                <FaCheck className="text-[#2563EB] w-2 h-2" />
              </div>
              {/* Right empty circle/check placeholder */}
              <div className="w-3.5 h-3.5 rounded-full bg-transparent border border-white/30 ml-1 flex items-center justify-center">
                <FaCheck className="text-white w-2 h-2" />
              </div>
            </div>
          </a>
        </nav>

        {/* Right Side: Copyright */}
        <div className="text-[15px] text-[#475569] whitespace-nowrap">
          © 2026 ResumeCat
        </div>
      </div>
    </div>
  );
};

export default Footer;
