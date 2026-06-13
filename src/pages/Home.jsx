import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";
import SectionHeader from "../components/SectionHeader";
import jkImg from "../assets/jk-img.png";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import Skills from "../components/Skills";

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
    tag: "Environment Design",
    title: "Neon District - Environment",
    desc: "Atmospheric environment build with volumetric lighting and mood composition.",
  },
  {
    type: "screenshot",
    imgSrc: img3,
    tag: "Environment Design",
    title: "Neon District - Environment",
    desc: "Atmospheric environment build with volumetric lighting and mood composition.",
  },
  {
    type: "screenshot",
    imgSrc: img4,
    tag: "Environment Design",
    title: "Neon District - Environment",
    desc: "Atmospheric environment build with volumetric lighting and mood composition.",
  },
];

export default function Home() {
  return (
    <main>
      <Hero />
      <section
        id="about"
        // className="relative min-h-screen flex items-center overflow-hidden mb-6 md:mb-12"
        // className="relative overflow-hidden py-14 md:min-h-screen md:flex md:items-center mb-6 md:mb-12"
        className="scroll-mt-20 relative overflow-hidden py-14 md:min-h-screen md:flex md:items-center mb-6 md:mb-12"
      >
        {/* Background Image — right side lo — desktop only */}
        <div
          className="absolute inset-0 bg-no-repeat hidden lg:block"
          style={{
            backgroundImage: `url(${jkImg})`,
            backgroundSize: "45%",
            backgroundPosition: "right center",
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/30 to-dark/30" />

        {/* Content */}
        {/* <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 md:py-12 w-full"> */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 w-full">
          <div className="max-w-2xl flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-0">
            <div className="flex-1">
              <SectionHeader title="About Me" />

              <p className="font-montserrat-light mb-5 leading-relaxed text-rose text-sm md:text-base">
                I'm Jayakrishna an Unreal Engine Cinematic Artist with 3+ years
                of experience creating high-impact game trailers and cinematics.
              </p>

              <p className="font-montserrat-light mb-5 leading-relaxed text-rose text-sm md:text-base">
                I specialize in scene composition, camera direction, and visual
                storytelling.
              </p>

              <p className="font-montserrat-light mb-8 leading-relaxed text-rose text-sm md:text-base">
                From pre-visualization to final output, I handle the full
                cinematic pipeline, including lighting, VFX integration,
                editing, and sound design.
              </p>
            </div>

            {/* Circle Image — mobile & tablet */}
            <div className="lg:hidden w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border border-rose/30 shrink-0">
              <img
                src={jkImg}
                alt="Jayakrishna"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>
      {/* <section id="projects" className="mb-6 md:mb-12"> */}
        <section id="projects" className="scroll-mt-20 mb-6 md:mb-12">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-14 md:py-16">
          <div className="mb-6">
            <SectionHeader title="Projects" />
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 list-none">
            {featuredProjects.map((project, index) => (
              <li key={`${project.title}-${index}`}>
                <ProjectCard {...project} />
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Skills />
    </main>
  );
}