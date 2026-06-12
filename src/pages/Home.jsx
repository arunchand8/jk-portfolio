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
        desc: "Atmospheric environment build with volumetric lightingand mood composition.",
    },
    {
        type: "screenshot",
        imgSrc: img2,
        tag: "Environment Design",
        title: "Neon District - Environment",
        desc: "Atmospheric environment build with volumetric lightingand mood composition.",
    },
    {
        type: "screenshot",
        imgSrc: img3,
        tag: "Environment Design",
        title: "Neon District - Environment",
        desc: "Atmospheric environment build with volumetric lightingand mood composition.",
    },
    {
        type: "screenshot",
        imgSrc: img4,
        tag: "Environment Design",
        title: "Neon District - Environment",
        desc: "Atmospheric environment build with volumetric lightingand mood composition.",
    },
]
export default function Home() {
    return (
        <main>
            <Hero />
            <section className="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-32">
              <div className="grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-16 items-center">
                <figure className="mx-auto md:mx-0 w-64 h-64 sm:w-80 sm:h-80 overflow-hidden rounded-full border border-rose/50">
                  <img src={jkImg} alt="Jay K" className="w-full h-full object-cover object-center" />

                </figure>
                <div className="text-center md:text-left">
                  <SectionHeader title="Cinematic Storytelling" />
                  <p className="text-rose leading-relaxed text-sm mb-5">
                    I'm Jayakrishna, an Unreal Engine Cinematic Artist creating
                    high-impact game trailers and real-time cinematics with a focus on
                    camera direction, scene composition, lighting, and visual mood.
                  </p>
                  <p className="text-rose leading-relaxed text-sm mb-8">
                    From pre-visualization to final output, I shape cinematic moments
                    that feel polished, dramatic, and ready for players to remember.
                  </p>
                  <NavLink
                  to="/about"
                  className="font-nexa-light inline-flex items-center justify-center rounded-md text-white border border-rose px-6 py-3 text-sm font-semibold tracking-wide no-underline hover:bg-transparent hover:text-rose hover:border-white transition-all duration-200"
                  >
                    More About Me
                  </NavLink>
                </div>
              </div>
            </section>
            <section className="border-t border-white/[0.08]">
              <div className="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-32">
                <div className="mb-6">
                  <SectionHeader title="Featured Projects" />
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 list-none">
                  {featuredProjects.map((project) => (
                    <li key={project.title}>
                      <ProjectCard {...project} />
                    </li>
                  ))}
                </ul>
                <div className="mt-16 flex justify-end">
                  <NavLink
                  to="/projects"
                  className="font-nexa-light inline-flex items-center justify-center rounded-md text-white border border-rose px-6 py-3 text-sm font-semibold tracking-wide no-underline hover:bg-transparent hover:text-rose hover:border-white transition-all duration-200"
                  >
                    Show More
                  </NavLink>
                </div>
              </div>
            </section>
        </main>
    )
}