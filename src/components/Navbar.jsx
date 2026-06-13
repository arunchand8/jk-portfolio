import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import jkLogo from "../assets/jk_logo.png";

const navLinks = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Skills", id: "skills" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navigate = useNavigate();
  const location = useLocation();

  const handleScroll = (e, id) => {
    if (e) e.preventDefault();
    setIsOpen(false);

    const doScroll = () => {
      setActiveSection(id);
      if (id === "home") {
        navigate("/", { replace: true });
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      const targetUrl = `/#${id}`;
      navigate(targetUrl, { replace: true });
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      else window.scrollTo({ top: 0, behavior: "smooth" });
    };

    if (location.pathname !== "/") {
      navigate("/", { replace: true });
      setTimeout(doScroll, 180);
    } else {
      doScroll();
    }
  };

  const isActive = (id) => activeSection === id;

  useEffect(() => {
    const sectionIds = ["home", "about", "projects", "skills"];
    const observers = [];

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (!section) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold: 0.45 },
      );
      observer.observe(section);
      observers.push(observer);
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-dark border-b border-white/20 backdrop-blur-sm">
      <nav className="w-full flex justify-between items-center px-5 sm:px-8 lg:px-14 xl:px-20 py-3">
        <div className="flex items-center gap-7 lg:gap-10">
          <a
            href="/"
            className="flex items-center"
            onClick={(e) => {
              e.preventDefault();
              if (location.pathname !== "/") {
                navigate("/");
                setTimeout(
                  () => window.scrollTo({ top: 0, behavior: "smooth" }),
                  120,
                );
              } else {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
          >
            <img
              src={jkLogo}
              alt="Jayakrishna Logo"
              className="h-14 md:h-16 w-auto"
            />
          </a>
          <ul className="hidden md:flex items-center gap-7 lg:gap-9 list-none m-0 p-0">
            {navLinks.map(({ label, id }) => (
              <li key={label}>
                <a
                  href={id === "home" ? "/" : `/#${id}`}
                  onClick={(e) => handleScroll(e, id)}
                  className={`nav-link text-sm tracking-widest transition-colors duration-200 no-underline ${
                    isActive(id) ? "text-rose" : "text-white/50 hover:text-rose"
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
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
            {navLinks.map(({ label, id }) => (
              <li key={label}>
                <a
                  href={id === "home" ? "/" : `/#${id}`}
                  onClick={(e) => handleScroll(e, id)}
                  className={`block text-sm tracking-widest transition-colors duration-200 no-underline  ${
                    isActive(id) ? "text-rose" : "text-white hover:text-rose"
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}