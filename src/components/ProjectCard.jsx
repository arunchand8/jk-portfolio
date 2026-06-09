export default function ProjectCard({
  type,
  embedUrl,
  imgSrc,
  tag,
  title,
  desc,
}) {
  return (
    <article className="bg-card border border-white/[0.08] rounded-xl overflow-hidden hover:border-gold/40 transition-colors duration-300">
      {type === "video" ? (
        <div className="relative pb-[56.25%] h-0 overflow-hidden">
          <iframe
            src={embedUrl}
            className="absolute top-0 left-0 w-full h-full border-none"
            allowFullScreen
            title={title}
          />
        </div>
      ) : imgSrc ? (
        <figure className="h-48 overflow-hidden">
          <img
            src={imgSrc}
            alt={title}
            className="w-full h-full object-cover opacity-70 hover:opacity-100 transition-opacity duration-300"
          />
        </figure>
      ) : (
        <div className="h-48 bg-card flex flex-col items-center justify-center gap-2 border-b border-white/[0.06]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="rgba(232,196,74,0.4)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
            <circle cx="12" cy="13" r="3" />
          </svg>
          <span className="text-xs uppercase tracking-widest text-white/20">
            {title}
          </span>
        </div>
      )}
      <div className="p-5">
        <p className="text-[0.65rem] uppercase tracking-[0.12em] text-gold mb-1">
          {tag}
        </p>
        <h3 className="font-bebas text-xl text-white tracking-wide mb-1">
          {title}
        </h3>
        <p className="text-xs text-white/40 leading-relaxed font-dm">{desc}</p>
      </div>
    </article>
  );
}