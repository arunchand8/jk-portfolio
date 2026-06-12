import { FaEnvelope, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const socials = [
  {
    icon: FaYoutube,
    href: "https://www.youtube.com/@im_jayakrishna",
    label: "YouTube",
    color: "#FF0000",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/im_jayakrishna/",
    label: "Instagram",
    color: "#E4405F",
  },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/imjayakrishna",
    label: "LinkedIn",
    color: "#0A66C2",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-6">
      <section className="max-w-6xl mx-auto px-6 md:px-10 py-20 text-center">
        <h2 className="font-nexa-bold text-4xl text-rose tracking-wide mb-4">
          Let’s Create Together
        </h2>
        <p className="text-sm text-rose font-nexa-light mb-8">
          Available for game trailer projects, cinematic sequences, and
          collaborations.
        </p>
        <a
          href="mailto:kovelakuntla333@gmail.com"
          className="font-nexa-light inline-flex items-center gap-3 border text-rose px-8 py-4 rounded-md text-xs tracking-wide no-underline hover:bg-rose hover:opacity-90 hover:text-white hover:border-transparent transition-all duration-200"
        >
          <FaEnvelope size={16} />
          Send a Message
        </a>
      </section>

      <div className="max-w-6xl mx-auto px-6 md:px-10 py-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-xs text-white/50 font-dm text-center md:text-left">
          Jayakrishna | Unreal Engine | Cinematic Artist
        </p>
        <nav aria-label="Social links">
          <ul className="flex items-center gap-4 list-none">
            {socials.map(({ icon: Icon, label, href, color }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:scale-110 transition-all duration-300"
                >
                  <Icon
                    size={22}
                    style={{ color }}
                    className="drop-shadow-sm"
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}