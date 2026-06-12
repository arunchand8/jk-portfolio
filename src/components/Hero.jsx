import { NavLink } from "react-router-dom";
import heroImg from "../assets/hero.png";

export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100svh-88px)] items-center justify-center overflow-hidden md:min-h-[80vh]">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImg})` }}
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex flex-col items-center gap-5 px-6 py-16 text-center">
        <h1 className="leading-tight tracking-wide text-white">
          <span className="hero-fade-up hero-fade-up-delay mb-2 block font-nexa-trail-thin text-2xl text-white/80 md:text-4xl">
            Hi, I'm K. Jayakrishna
          </span>
          <span className="hero-fade-up block font-nexa-bold text-3xl uppercase tracking-widest md:text-4xl">
            Unreal Engine <span className="text-rose">Cinematic</span> Artist
          </span>
        </h1>

        <nav className="mt-2 flex w-full flex-col justify-center gap-3 md:w-auto md:flex-row md:gap-4">
          {[
            { label: "Home", to: "/" },
            { label: "About", to: "/about" },
            { label: "Projects", to: "/projects" },
          ].map(({ label, to }) => (
            <NavLink
              key={label}
              to={to}
              className="hero-button rounded border border-rose px-6 py-3 font-nexa-light font-montserrat-medium text-base tracking-wide text-rose no-underline transition-transform duration-200 hover:scale-105 hover:border-white hover:bg-gold hover:text-rose active:bg-white active:text-rose"
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </section>
  );
}