import jkImg from "../assets/jk-img.png";

export default function About() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-dark">
      <div className="absolute inset-0 hidden md:block">
        <img
          src={jkImg}
          alt="Jayakrishna"
          aria-hidden="true"
          className="absolute right-0 top-1/2 h-[90%] w-[60%] -translate-y-1/2 object-contain object-right opacity-95 lg:h-[94%] lg:w-[62%] lg:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-dark/10" />
      </div>

      <section className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-5 py-14 sm:px-6 sm:py-16 md:px-10 lg:py-24">
        <div className="mb-10 flex justify-center md:hidden">
          <img
            src={jkImg}
            alt="Jayakrishna"
            className="h-56 w-56 rounded-full border border-rose/40 object-cover object-center shadow-[0_0_35px_rgba(198,172,143,0.18)] sm:h-64 sm:w-64"
          />
        </div>

        <div className="max-w-xl text-center md:text-left">
          <h1 className="mb-6 font-nexa-bold text-4xl leading-tight text-rose sm:text-5xl lg:text-6xl">
            About Me
          </h1>
          <div className="space-y-5 font-montserrat-light text-sm leading-7 text-rose sm:text-base sm:leading-8">
            <p>
              I'm Jayakrishna, an Unreal Engine Cinematic Artist with 3+ years
              of experience creating high-impact game trailers and cinematics.
            </p>
            <p>
              I specialize in scene composition, camera direction, and visual
              storytelling.
            </p>
            <p>
              From pre-visualization to final output, I handle the full
              cinematic pipeline, including lighting, VFX integration, editing,
              and sound design.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}