import jkImg from "../assets/jk_img.png";

export default function About() {
  return (
    <main className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24">
      <section className="grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-16 items-center">
        <div className="flex justify-center md:justify-start">
          <img
            className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover object-center rounded-full border border-gold/30"
            alt="Jayakrishna"
            src={jkImg}
          />
        </div>
        <div className="max-w-2xl text-center md:text-left">
          <p className="text-[0.65rem] uppercase tracking-[0.2em] text-gold mb-2">
            About
          </p>
          <h1 className="font-bebas text-5xl md:text-6xl tracking-wide mb-6 text-white">
            About Me
          </h1>
          <p className="font-dm mb-5 leading-relaxed text-white/60">
            I'm Jayakrishna, an Unreal Engine Cinematic Artist with 3+ years of
            experience creating high-impact game trailers and cinematics. I
            specialize in scene composition, camera direction, and visual
            storytelling.
          </p>
          <p className="font-dm leading-relaxed text-white/60">
            From pre-visualization to final output, I handle the full cinematic
            pipeline, including lighting, VFX integration, editing, and sound
            design.
          </p>
        </div>
      </section>
    </main>
  );
}