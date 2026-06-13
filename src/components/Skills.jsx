import { useState, useEffect, useRef } from "react";
import blender from "../assets/blender-icon.png";
import unreal from "../assets/unreal-engine-white-icon.png";
import ae from "../assets/AE-icon.png";
import nuke from "../assets/icons8-nuke-480.png";
import pr from "../assets/PR-icon.png";
import ps from "../assets/PS-icon.png";
import arrow from "../assets/Arrow.png";

const tools = [
  { img: unreal, label: "Unreal Engine", color: "#ffffff", angle: 90 },
  { img: blender, label: "Blender", color: "#FF6D00", angle: 150 },
  { img: nuke, label: "Nuke", color: "#FFD700", angle: 210 },
  { img: ps, label: "Photoshop", color: "#31A8FF", angle: 270 },
  { img: pr, label: "Premiere Pro", color: "#9999FF", angle: 330 },
  { img: ae, label: "After Effects", color: "#9999FF", angle: 30 },
];
const pipeline = [
  { img: blender, label: "Blender", color: "#FF6D00" },
  { img: unreal, label: "Unreal Engine", color: "#ffffff" },
  { img: ae, label: "After Effects", color: "#9999FF" },
  { img: nuke, label: "Nuke", color: "#FFD700" },
  { img: pr, label: "Premiere Pro", color: "#9999FF" },
];
const getOrbitMetrics = () => {
  if (typeof window === "undefined") {
    return { size: 600, radius: 260, iconSize: 64 };
  }
  const viewport = window.innerWidth;
  const size = Math.min(600, Math.max(288, viewport - 32));
  const radiusRatio =
    viewport < 480
      ? 0.42
      : viewport < 768
        ? 0.35
        : viewport < 1024
          ? 0.28
          : 0.40;
  const iconSize = viewport < 380 ? 44 : viewport < 640 ? 52 : 64;
  return {
    size,
    radius: Math.round(size * radiusRatio),
    iconSize,
  };
};
const revealIndex = (setState, index) => {
  setState((prev) => (prev.includes(index) ? prev : [...prev, index]));
};
export default function Skills() {
  const [textVisible, setTextVisible] = useState(false);
  const [visibleIcons, setVisibleIcons] = useState([]);
  const [visiblePipeline, setVisiblePipeline] = useState([]);
  const [orbitMetrics, setOrbitMetrics] = useState(getOrbitMetrics);
  const sectionRef = useRef(null);
  const pipelineRef = useRef(null);
  const timeoutsRef = useRef([]);

  useEffect(() => {
    const handleResize = () => setOrbitMetrics(getOrbitMetrics());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const clearAnimations = () => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
    setTextVisible(false);
    setVisibleIcons([]);
    setVisiblePipeline([]);
  };

  const startAnimations = () => {
    clearAnimations();

    timeoutsRef.current.push(
      setTimeout(() => {
        setTextVisible(true);
      }, 200),
    );

    tools.forEach((_, i) => {
      timeoutsRef.current.push(
        setTimeout(
          () => {
            revealIndex(setVisibleIcons, i);
          },
          550 + i * 180,
        ),
      );
    });

    const pipelineStart = 550 + tools.length * 180 + 220;
    timeoutsRef.current.push(
      setTimeout(() => {
        const total = pipeline.length + 1;
        Array.from({ length: total }).forEach((_, i) => {
          timeoutsRef.current.push(
            setTimeout(() => {
              revealIndex(setVisiblePipeline, i);
            }, i * 180),
          );
        });
      }, pipelineStart),
    );
  };

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAnimations();
        } else {
          clearAnimations();
        }
      },
      { threshold: 0.35, rootMargin: "0px 0px -20% 0px" },
    );

    observer.observe(sectionRef.current);
    return () => {
      observer.disconnect();
      clearAnimations();
    };
  }, []);

  return (
    <main
      id="skills"
      ref={sectionRef}
      className="mb-6 md:mb-13 min-h-screen overflow-x-hidden bg-dark flex flex-col items-center justify-start px-6 md:px-10 lg:px-14 py-14 sm:py-16 lg:py-20 gap-16 lg:gap-20"
    >
      {/* Orbital Section */}
      <div
        className="relative flex items-center justify-center"
        style={{ width: orbitMetrics.size, height: orbitMetrics.size }}
      >
        {/* Center Text */}
        <div
          className="text-center z-10 transition-all duration-700"
          style={{
            opacity: textVisible ? 1 : 0,
            transform: textVisible ? "scale(1)" : "scale(0.8)",
          }}
        >
          <p className="font-montserrat-bold text-[10px] sm:text-xl uppercase tracking-widest text-white mb-1">
            MY
          </p>
          <h2 className="font-montserrat-bold text-2xl min-[380px]:text-3xl sm:text-4xl md:text-4xl text-white uppercase">
            Workflow
          </h2>
          <h5 className="font-montserrat-thin text-xs text-rose mt-2 max-w-\[120px\] sm:max-w-\[150px\] mx-auto leading-snug">
            Tools I used to bring ideas to life
          </h5>
        </div>
        {/* Orbital Icons */}
        {tools.map(({ img, label, color, angle }, i) => {
          const rad = (angle * Math.PI) / 180;
          const x = orbitMetrics.radius * Math.cos(rad);
          const y = orbitMetrics.radius * Math.sin(rad);
          const isVisible = visibleIcons.includes(i);
          return (
            <div
              key={label}
              className="absolute flex flex-col items-center gap-2 transition-all duration-500"
              style={{
                transform: `translate(${x}px, ${-y}px) scale(${isVisible ? 1 : 0.4})`,
                opacity: isVisible ? 1 : 0,
              }}
              title={label}
            >
              <div
                className="rounded-full flex items-center justify-center border-2 p-2 sm:p-3"
                style={{
                  width: orbitMetrics.iconSize,
                  height: orbitMetrics.iconSize,
                  borderColor: color,
                  boxShadow: `0 0 15px ${color}99, 0 0 25px ${color}44`,
                }}
              >
                <img
                  src={img}
                  alt={label}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          );
        })}
      </div>
      {/* Bottom Pipeline */}
      <div
        ref={pipelineRef}
        className="w-full max-w-6xl border border-white/20 rounded-xl px-5 sm:px-6 py-6 sm:py-7 mt-8 md:-mt-12 lg:mt-0 flex flex-col lg:flex-row items-center justify-center lg:items-center gap-7 lg:gap-12"
      >
        {/* <p className="font-montserrat-medium text-sm text-rose max-w-\[260px\] lg:max-w-42 text-center lg:text-center shrink-0 leading-relaxed"> */}
          <p className="font-montserrat-medium text-sm text-rose max-w-[170px] text-center shrink-0 leading-relaxed">
          Every project is unique.
          I use the right tools at the right time.
        </p>
        {/* <div className="flex flex-col md:flex-row md:flex-nowrap items-center justify-center lg:justify-start gap-3 md:gap-4 flex-1"> */}
          <div className="flex flex-col md:flex-row md:flex-nowrap items-center justify-center gap-3 md:gap-4">
          {pipeline.map(({ img, label, color }, i) => (
            <div
              key={label}
              className="flex flex-col md:flex-row items-center gap-3 md:gap-4"
            >
              <div
                className="flex items-center gap-3 transition-all duration-500"
                style={{
                  opacity: visiblePipeline.includes(i) ? 1 : 0,
                  transform: visiblePipeline.includes(i)
                    ? "scale(1)"
                    : "scale(0.4)",
                }}
              >
                <div
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center border-2 p-2 sm:p-3"
                  style={{
                    borderColor: color,
                    boxShadow: `0 0 15px ${color}99, 0 0 25px ${color}44`,
                  }}
                  title={label}
                >
                  <img
                    src={img}
                    alt={label}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <span
                className="text-white/35 text-lg md:text-xl rotate-90 md:rotate-0 transition-opacity duration-500"
                style={{
                  opacity: visiblePipeline.includes(i) ? 1 : 0,
                  color: "#ffffff",
                  textShadow:
                    "0 0 8px rgba(255,255,255,0.4), 0 0 16px rgba(255,255,255,0.2)",
                }}
              >
                <img
                  src={arrow}
                  alt="Arroe-image"
                  className="w-6 h-3 sm:w-8 sm:h-3"
                />
              </span>
            </div>
          ))}
          {/* Final Output */}
          <div
            className="flex items-center gap-3 transition-all duration-500"
            style={{
              opacity: visiblePipeline.includes(pipeline.length) ? 1 : 0,
              transform: visiblePipeline.includes(pipeline.length)
                ? "scale(1)"
                : "scale(0.4)",
            }}
          >
            <div
              className="w-24 sm:w-28 h-12 sm:h-14 rounded-full flex items-center justify-center border-2 border-rose px-3"
              style={{ boxShadow: "0 0 8px #c68c8f33" }}
            >
              <span className="font-montserrat-bold text-rose text-xs text-center leading-tight uppercase">
                Final Output
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}