import { useState } from "react";
import { NavLink } from "react-router-dom";
import jkLogo from "../assets/jk_logo.png";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Skills", to: "/skills" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-dark border-b border-white/20 backdrop-blur-sm">
      <nav className="w-full flex justify-between items-center px-5 sm:px-8 lg:px-14 xl:px-20 py-3">
        <div className="flex items-center gap-7 lg:gap-10">
          <NavLink to="/" className="flex items-center">
            <img
              src={jkLogo}
              alt="Jayakrishna Logo"
              className="h-14 md:h-16 w-auto"
            />
          </NavLink>

          <ul className="hidden md:flex items-center gap-7 lg:gap-9 list-none m-0 p-0">
            {navLinks.map(({ label, to }) => (
              <li key={label}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `nav-link text-sm tracking-widest uppercase transition-colors duration-200 no-underline ${
                      isActive ? "text-rose" : "text-white/50 hover:text-rose"
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
          <a
            href="mailto:kovelakuntla333@gmail.com"
            className="hidden md:inline-flex items-center justify-center gap-2 rounded-md bg-rose text-white min-w-32 px-7 py-3 text-sm font-nexa-light tracking-wide no-underline hover:opacity-90 transition-opacity lg:ml-1"
          >
            Contact
          </a>
        </div>
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden border-t border-white/10 bg-dark">
          <ul className="flex flex-col list-none px-6 py-4 gap-4">
            {navLinks.map(({ label, to }) => (
              <li key={label}>
                <NavLink
                  to={to}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block text-sm tracking-widest uppercase transition-colors duration-200 no-underline  ${
                      isActive ? "text-rose" : "text-white hover:text-rose"
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
            <li>
              <a
                href="mailto:kovelakuntla333@gmail.com"
                onClick={() => setIsOpen(false)}
                className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-white opacity-80 text-rose px-6 py-3 text-sm font-nexa-light tracking-wide no-underline"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}