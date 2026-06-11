import { NavLink } from "react-router-dom";
import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";
import SectionHeader from "../components/SectionHeader";
import jkImg from "../assets/jk_img.png";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";

const featuredProjects = [
  {
    type: "screenshot",
    imgSrc: img1,
    tag: "Environment Design",
    title: "Neon District - Environment",
    desc: "Atmospheric environment build with volumetric lighting and mood composition.",
  },
  {
    type: "screenshot",
    imgSrc: img2,
    tag: "Pre-Visualization",
    title: "Crimson Siege - Pre-Vis",
    desc: "A pre-visualization pass for cinematic sequences before final production.",
  },
  {
    type: "screenshot",
    imgSrc: img3,
    tag: "Lighting",
    title: "Silent Horizon - Mood Frame",
    desc: "A cinematic lighting study focused on atmosphere, contrast, and story tone.",
  },
  {
    type: "screenshot",
    imgSrc: img4,
    tag: "Cinematic Shot",
    title: "Ashfall - Hero Shot",
    desc: "A dramatic hero frame built around camera placement and strong composition.",
  },
];

export default function Home() {
  return (
    <main>
      <Hero />
      <section className="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-16 items-center">
          <figure className="mx-auto md:mx-0 w-64 h-64 sm:w-80 sm:h-80 overflow-hidden rounded-full border border-gold/30">
            <img
              src={jkImg}
              alt="Jayakrishna"
              className="w-full h-full object-cover object-center"
            />
          </figure>
          <div className="text-center md:text-left">
            <SectionHeader label="About" title="Cinematic Storytelling" />
            <p className="text-white/60 leading-relaxed mb-5">
              I am Jayakrishna, an Unreal Engine Cinematic Artist creating
              high-impact game trailers and real-time cinematics with a focus on
              camera direction, scene composition, lighting, and visual mood.
            </p>
            <p className="text-white/60 leading-relaxed mb-8">
              From pre-visualization to final output, I shape cinematic moments
              that feel polished, dramatic, and ready for players to remember.
            </p>
            <NavLink
              to="/about"
              className="inline-flex items-center justify-center rounded-md bg-gold text-dark px-6 py-3 text-sm font-semibold tracking-wide no-underline hover:opacity-90 transition-opacity"
            >
              More About Me
            </NavLink>
          </div>
        </div>
      </section>
      <section className="border-t border-white/[0.08]">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28">
          <div className="mb-10">
            <SectionHeader label="Selected Work" title="Featured Projects" />
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 list-none">
            {featuredProjects.map((project) => (
              <li key={project.title}>
                <ProjectCard {...project} />
              </li>
            ))}
          </ul>
          <div className="mt-10 flex justify-end">
            <NavLink
              to="/projects"
              className="inline-flex items-center justify-center rounded-md border border-gold text-white px-6 py-3 text-sm font-semibold tracking-wide no-underline hover:bg-gold hover:text-dark transition-colors"
            >
              Show More
            </NavLink>
          </div>
        </div>
      </section>
    </main>
  );
}