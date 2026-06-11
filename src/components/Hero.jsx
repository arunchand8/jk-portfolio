import heroImg from "../assets/hero.jpg";
import { NavLink } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImg})` }}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center gap-6 px-6">
        <h1 className="font-bebas text-4xl md:text-6xl leading-tight tracking-wide text-white">
          <span className="hero-fade-up block">
            Unreal Engine <span className="text-gold">Cinematic</span> Artist
          </span>
          <span className="hero-fade-up hero-fade-up-delay block text-2xl md:text-4xl text-white/70">
            (Game Trailers & Real-Time Cinematics)
          </span>
        </h1>
        {/* Nav Buttons */}
        <nav className="flex flex-col md:flex-row gap-4 justify-center mt-4 w-full md:w-auto">
          {[
            { label: "Home", to: "/" },
            { label: "About", to: "/about" },
            { label: "Projects", to: "/projects" },
          ].map(({ label, to }) => (
            <NavLink
              key={label}
              to={to}
              className="hero-button px-6 py-3 border rounded border-gold text-white/70 text-xl font-semibold tracking-wide no-underline hover:bg-gold hover:text-dark active:bg-gold active:text-dark hover:border-gold transition-all duration-200"
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </section>
  );
}