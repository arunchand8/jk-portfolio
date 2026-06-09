import React from "react";
import jkImg from '../assets/jaya_img2.png'

export default function About() {
  return (
    <section className="body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md-10 md:mb-0">
          <img
            className="object-cover object-center rounded-full w-100 h-100"
            alt="jayakrishna"
            src={jkImg}
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="font-bebas title-font md:text-6xl sm:text-4xl text-3xl mb-4 text-gold">
            About Me
          </h1>
          <p className="font-dm mb-8 leading-relaxed text-white/60">
            Iu+2019m Jayakrishna an Unreal Engine Cinematic Artist with 3+ years of
            experience creating high-impact game trailers and cinematics. I
            specialize in scene composition, camera direction, and visual
            storytelling.
          </p>
          <p className="font-dm mb-8 leading-relaxed text-white/60">
            From pre-visualization to final output, I handle the full cinematic
            pipeline, including lighting, VFX integration, editing, and sound
            design.
          </p>
        </div>
      </div>
    </section>
  );
}