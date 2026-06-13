import heroImg from "../assets/hero.png";

export default function Hero() {
  return (
    <section id="home" 
    // className="mb-6 md:mb-12 relative flex min-h-[calc(100svh-88px)] items-center justify-center overflow-hidden md:min-h-[80vh]">
    className="mb-6 md:mb-12 relative flex min-h-[calc(100svh-80px)] md:min-h-[calc(100svh-88px)] items-center justify-center overflow-hidden"
    >  
    <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImg})` }}
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex flex-col items-center gap-5 px-6 py-10 text-center md:py-16">
        <h1 className="leading-tight tracking-wide text-white">
          <span className="hero-fade-up hero-fade-up-delay mb-2 block font-nexa-trail-thin text-2xl text-white/80 md:text-4xl">
            Hi, I’m K. Jayakrishna
          </span>
          <span className="hero-fade-up block font-nexa-bold text-3xl uppercase tracking-wide md:text-4xl">
            Unreal Engine <span className="text-rose">Cinematic</span> Artist
          </span>
        </h1>
      </div>
    </section>
  );
}