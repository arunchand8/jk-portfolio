import SectionHeader from "../components/SectionHeader";
import ProjectCard from "../components/ProjectCard";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";

const projects = [
  {
    type: "video",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tag: "Game Trailer",
    title: "Project Aether - Reveal Trailer",
    desc: "Full cinematic reveal. Scene composition, lighting rig, VFX integration, sound mix.",
  },
  {
    type: "video",
    embedUrl: "https://www.youtube.com/embed/9bZkp7q19f0",
    tag: "Real-Time Cinematic",
    title: "Shadowfall - Cinematic Sequence",
    desc: "Real-time in-engine cutscene. Camera direction and visual storytelling pipeline.",
  },
  {
    type: "screenshot",
    imgSrc: img1,
    tag: "Environment Design",
    title: "Neon District - Environment",
    desc: "Atmospheric environment build. Volumetric lighting and mood composition.",
  },
  {
    type: "screenshot",
    imgSrc: img2,
    tag: "Pre-Visualization",
    title: "Crimson Siege - Pre-Vis",
    desc: "Full pre-visualization pass for cinematic sequences before final production.",
  },
];

export default function Projects() {
  return (
    <main className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24">
      <SectionHeader label="Selected Work" title="Projects" />
      <section>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 list-none">
          {projects.map((project) => (
            <li key={project.title}>
              <ProjectCard {...project} />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}